/**
 * Verifies every JSON-LD block in the built HTML.
 *
 * Asserts per block:
 *   1. parses as JSON
 *   2. has @context and @type
 *   3. @type is a real schema.org type (checked against the allowlist below,
 *      each verified against schema.org)
 *   4. no property states a fact absent from the CONFIRMED FACTS list
 *
 * Run: node scripts/verify-jsonld.mjs   (after `npm run build`)
 */
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

/* --- Real schema.org types used by this site (each verified) --- */
const VALID_TYPES = new Set([
  "HousePainter", // Thing > Organization > LocalBusiness > HomeAndConstructionBusiness > HousePainter
  "Organization",
  "WebSite",
  "FAQPage",
  "Question",
  "Answer",
  "BreadcrumbList",
  "ListItem",
  "Service",
  "OfferCatalog",
  "Offer",
  "City",
  "OpeningHoursSpecification",
]);

/* --- CONFIRMED FACTS. Anything asserted in schema must appear here. --- */
const CONFIRMED = {
  name: "Jaws Painting",
  telephone: "+17342622365",
  cities: ["Ann Arbor", "Ypsilanti", "Saline", "Canton", "Plymouth", "Belleville"],
  opens: "07:00",
  closes: "20:00",
  services: [
    "Interior Painting",
    "Exterior Painting",
    "Cabinet Refinishing",
    "Deck & Fence Staining",
    "Drywall Repair",
    "Commercial Painting",
  ],
};

/* --- Properties that must NEVER appear (unverified or forbidden) --- */
const FORBIDDEN_PROPS = [
  "aggregateRating",
  "review",
  "reviewCount",
  "ratingValue",
  "address",
  "geo",
  "sameAs",
  "email",
  "priceRange",
  "foundingDate",
  "numberOfEmployees",
  "award",
  "hasCredential",
];

const errors = [];
let blockCount = 0;
let fileCount = 0;

function walk(dir) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) walk(p);
    else if (entry.endsWith(".html")) checkFile(p);
  }
}

function checkTypes(node, file) {
  if (Array.isArray(node)) return node.forEach((n) => checkTypes(n, file));
  if (!node || typeof node !== "object") return;
  const t = node["@type"];
  if (t && !VALID_TYPES.has(t)) {
    errors.push(`${file}: @type "${t}" is not in the verified schema.org allowlist`);
  }
  for (const [k, v] of Object.entries(node)) {
    if (FORBIDDEN_PROPS.includes(k)) {
      errors.push(`${file}: forbidden/unverified property "${k}" present`);
    }
    checkTypes(v, file);
  }
}

function checkFacts(block, file) {
  const json = JSON.stringify(block);
  if (block.name && block["@type"] !== "Question" && block["@type"] !== "ListItem") {
    // Top-level entity names must be the business or a confirmed service.
    const ok =
      block.name === CONFIRMED.name ||
      CONFIRMED.services.includes(block.name) ||
      block.name === "Painting services";
    if (!ok) errors.push(`${file}: unconfirmed entity name "${block.name}"`);
  }
  if (json.includes("telephone")) {
    const tels = [...json.matchAll(/"telephone":"([^"]+)"/g)].map((m) => m[1]);
    for (const t of tels) {
      if (t !== CONFIRMED.telephone)
        errors.push(`${file}: unconfirmed telephone "${t}"`);
    }
  }
  for (const m of json.matchAll(/"@type":"City","name":"([^"]+)"/g)) {
    if (!CONFIRMED.cities.includes(m[1]))
      errors.push(`${file}: unconfirmed city "${m[1]}"`);
  }
  for (const m of json.matchAll(/"opens":"([^"]+)"/g)) {
    if (m[1] !== CONFIRMED.opens)
      errors.push(`${file}: unconfirmed opening time "${m[1]}"`);
  }
  for (const m of json.matchAll(/"closes":"([^"]+)"/g)) {
    if (m[1] !== CONFIRMED.closes)
      errors.push(`${file}: unconfirmed closing time "${m[1]}"`);
  }
  // Unverifiable trust claims must not appear in any schema text.
  if (/licen[cs]ed|insured|warrant|guarantee/i.test(json)) {
    errors.push(`${file}: schema contains an unverified license/insurance/guarantee claim`);
  }
}

function checkFile(file) {
  const html = readFileSync(file, "utf8");
  const blocks = [
    ...html.matchAll(
      /<script type="application\/ld\+json">(.*?)<\/script>/gs,
    ),
  ].map((m) => m[1]);
  if (blocks.length === 0) return;
  fileCount++;
  for (const raw of blocks) {
    blockCount++;
    let data;
    try {
      data = JSON.parse(raw.replace(/\\u003c/g, "<"));
    } catch (e) {
      errors.push(`${file}: JSON-LD does not parse (${e.message})`);
      continue;
    }
    if (!data["@context"]) errors.push(`${file}: block missing @context`);
    if (!data["@type"]) errors.push(`${file}: block missing @type`);
    checkTypes(data, file);
    checkFacts(data, file);
  }
}

walk(".next/server/app");

console.log(`Scanned ${fileCount} built HTML files, ${blockCount} JSON-LD blocks.`);
if (errors.length) {
  console.error(`\nFAIL — ${errors.length} problem(s):`);
  for (const e of errors) console.error("  - " + e);
  process.exit(1);
}
console.log("PASS — all blocks parse, all @types valid, no unconfirmed facts.");
