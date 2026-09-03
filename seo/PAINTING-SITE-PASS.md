# Jaws Painting — site pass

Branch `painting-site-pass`. Not pushed, not merged.

---

## 1. What changed, by phase

### Phase 1 — correctness (commit `e7d6718`)
| File | Change |
|---|---|
| `app/page.tsx` | Removed `<Reviews>` import + mount |
| `components/Reviews.tsx` | Deleted (no real reviews to show) |
| `site.config.ts` | Deleted the `reviews` block and the orphaned `cta.afterReviewsKicker` key. `Review` type retained for clean reinstatement |
| `components/ContactForm.tsx` | Added `hp_7d3a_ref` honeypot: `<div hidden>`, `autoComplete="off"`, `tabIndex={-1}`, wired into the POST payload |

Not done, by instruction: `smsConsent` was already a real default-unchecked checkbox; there was no `name="company"` honeypot to rename; `businessSlug` and the phone number were left untouched.

### Phase 2 — structure and content (commit `3c5cc3d`)
| File | Change |
|---|---|
| `site.config.ts` | Hero rewritten; 16 license/insurance claims removed; service area 9 → 6 confirmed cities; hours → 7am–8pm ×7; 3 section images repointed to real photos; 6 service banner `src` emptied; `gallery` block added |
| `components/Gallery.tsx` | **New.** Filterable project gallery (All / Living spaces / Bathrooms / Stairwells & accent walls) |
| `components/ServiceDetail.tsx` | Banner renders only when a real photo exists; no placeholder box, no stock |
| `app/page.tsx` | Gallery mounted between HowItWorks and ServiceArea |
| `public/images/*` | 9 Pexels stock photos deleted; 10 real client photos added |
| `PHOTOS.md` | Rewritten: real provenance + photo requests |

### Phase 3 — FAQ and schema (commit `ca2a619`)
| File | Change |
|---|---|
| `site.config.ts` | `faq` block: 7 questions |
| `components/Faq.tsx` | **New.** Native `<details>/<summary>` accordion (keyboard, screen-reader, and no-JS friendly) |
| `components/JsonLd.tsx` | **New.** Renders JSON-LD, escapes `<` to `<` |
| `lib/schema.ts` | **New.** Schema builders; omit any unconfirmed property rather than placeholder it |
| `app/page.tsx` | `HousePainter` + `Organization` + `WebSite` + `FAQPage` + visible FAQ |
| `app/services/[slug]/page.tsx` | `Service` + `BreadcrumbList` |
| `app/services/page.tsx`, `app/about/page.tsx`, `app/get-a-quote/page.tsx` | `BreadcrumbList` |

`HousePainter` was verified against schema.org before use: `Thing > Organization > LocalBusiness > HomeAndConstructionBusiness > HousePainter`.

### Phase 4 — conversion tracking readiness (commit `1a1cdcb`)
Two `// TODO: Google Ads conversion event` comments and nothing else. No tag ID, no conversion label, no gtag snippet, no dataLayer.

| Insertion point | File:line | Why here |
|---|---|---|
| Form submit | `components/ContactForm.tsx:42` | After `res.ok`, before `setStatus("success")`. Fires only on a confirmed successful submission, never on click or validation failure |
| Phone click | `site.config.ts:88` | At `phoneHref`, the single source for all 6 `tel:` links. Every one renders as a real `<a>` anchor in static HTML; phone text is not an image and is not JS-injected, so a delegated `a[href^="tel:"]` handler works |

### Phase 5 — verification
`scripts/verify-jsonld.mjs` added; this report written.

---

## 2. Visible text changes (client-readable)

| Where | Before | After |
|---|---|---|
| Hero eyebrow | Painters in Southeast Michigan | Painting for homes & businesses · Southeast Michigan |
| Hero headline | A Fresh Coat / Done Right | Interior & exterior / painting, done right |
| Hero subtext | "…a finish you'll be glad you paid for." | "Walls, ceilings, trim, cabinets, decks, and full exteriors — careful prep, sharp lines, and floors kept protected. Serving homes and businesses across Southeast Michigan." |
| Trust strip | Licensed and insured | Floors and furniture protected |
| Why-us stat | Licensed / & fully insured | Homes / & businesses |
| All 6 service descriptions | "…Licensed and insured, with free quotes." | "…Free quotes, no obligation." |
| Service area | 9 towns (incl. Dexter, Chelsea, Milan) | Ann Arbor, Ypsilanti, Saline, Canton, Plymouth, Belleville |
| Hours | Mon–Fri 8–6, Sat 9–3, Sun closed | Every day, 7:00 AM to 8:00 PM |
| Reviews section | 4 empty "Review coming soon" cards | Removed entirely |
| Gallery | — | **New:** "Recent interior painting", 10 real job photos, filterable |
| FAQ | — | **New:** 7 questions with answers |
| Page meta descriptions (home, services, about + 5 service pages) | "…Licensed, insured, free quotes." | "…Free quotes." / "Free written quotes." |

Nothing else was rewritten. No copy was deleted except the license/insurance claims and the reviews section.

---

## 3. FAQ provenance table

| # | Question | Claim | Source | Verbatim source quote |
|---|---|---|---|---|
| 1 | How much does painting cost? | Price depends on scope; free written price up front | `howItWorks.steps[0]`, `whyUs.bullets[2]` | "give you a clear written price for free" / "Clear pricing up front, so you know what you're paying before we start" |
| 2 | Do you give free quotes? | Free, no obligation, we come look | `howItWorks.steps[0]`, service copy | "Call or message us and we come take a look. We talk through colors, what you want done, and give you a clear written price for free." / "Free quotes, no obligation." |
| 3 | Do you work in occupied homes? | Floors/furniture covered, tidy, cleanup, dust control | `howItWorks.steps[2]`, interior + drywall `longDescription` | "We cover your floors and furniture… We keep the work area tidy the whole time." / "keep the dust down" |
| 4 | What surfaces do you paint? | Interior and exterior surface list | 6 service `includes` arrays | "Walls, ceilings, trim, and doors painted" / "Siding, trim, doors, soffits, and fascia all covered" / "Decks, fences, railings, and other exterior wood" |
| 5 | How do you protect floors/furniture? | Cover before starting; commercial masking | interior + commercial `longDescription` | "We cover your furniture and floors before a single brush moves." / "Fixtures, floors, and equipment covered and protected" |
| 6 | Do you paint commercial spaces? | Spaces served; work around business hours | commercial `longDescription` | "Offices, retail floors, rental units, hallways, and common areas… we plan the work around your hours, including early mornings, evenings, or weekends" |
| 7 | What areas / when reachable? | 6 cities; 7 days 7am–8pm | `serviceArea.towns` (confirmed, same as Jaws Detailing) + client confirmation in writing | "Service hours are 7am-8pm everyday" (client, in writing) |

No claim without a source. No prices, timelines, warranties, guarantees, or license/insurance claims.

---

## 4. QUESTIONS FOR CLIENT

| # | Question | Where the answer gets used |
|---|---|---|
| 1 | **Is `jaws-painting` the exact Neon `Business.slug`?** A wrong slug returns HTTP 200 with no DB write and silently drops every lead. | `site.config.ts:457` + the Vercel env var |
| 2 | Should `businessSlug` be a hardcoded literal instead of `env \|\| "jaws-painting"`? | `site.config.ts:457` |
| 3 | **Is `(734) 262-2365` the real painting line**, or only the detailing number? | `site.config.ts:87-88`; renders in Header, Hero, CtaBand, Footer, ContactInfo, MobileCtaBar, ContactForm, and `HousePainter` schema |
| 4 | **Licensed and insured — true?** Currently removed everywhere. | Trust strip, why-us stat, 6 service descriptions, 8 meta descriptions, and `hasCredential` in schema |
| 5 | Final domain? `jawspainting.com` is still a TODO. | `site.config.ts:495` `seo.url` → canonicals, OG URLs, sitemap, every JSON-LD `@id`/`url` |
| 6 | Street address + lat/long, if the business wants them public. | `LocalBusiness` `address` + `geo` (currently omitted) |
| 7 | Google Business Profile / social URLs. | `sameAs` (currently omitted) |
| 8 | Public contact email? | `site.config.ts:90` → ContactInfo + schema `email` |
| 9 | Confirm the 6 service offerings are all real and complete. | `site.config.ts` `services[]`, `/services/*` pages, `hasOfferCatalog` |
| 10 | Any real, attributable Google reviews yet? | Reinstates the reviews section (`Review` type retained) — schema stays off until visible reviews exist |

---

## 5. NEEDS ALT REVIEW

None. All 10 photos were viewed directly before alt text was written; each alt describes only what is visible in the frame. No alt text was guessed.

Note: `IMG_0082` and `IMG_0084` carried EXIF `orientation=6` (stored sideways). Orientation is baked into the shipped JPGs, so they render upright everywhere.

---

## 6. Photo requests

The client's 10 photos are all **interior residential** work. These sections are missing or thin until real photos arrive — no stock was substituted:

| # | Needed | Unblocks |
|---|---|---|
| 1 | Finished **exterior** repaint (landscape) | `/services/exterior-painting/` banner + gallery |
| 2 | **Cabinet refinishing** close-up (landscape) | `/services/cabinet-refinishing/` banner |
| 3 | **Deck or fence** after staining (landscape) | `/services/deck-and-fence-staining/` banner |
| 4 | **Drywall repair** finished/primed wall (landscape) | `/services/drywall-repair/` banner |
| 5 | **Commercial** job (office/retail/common area) | `/services/commercial-painting/` banner; supports equal commercial positioning |
| 6 | **Before/after pairs** — same room, both states | Before/after section (skipped this pass; no genuine pairs exist) |
| 7 | Crew / painter-at-work + work-truck shot | About page, why-us |

---

## 7. Verification results

```
npx tsc --noEmit                                    exit 0
npm run build                                       exit 0  (16/16 static pages)
node scripts/verify-jsonld.mjs                      PASS — 10 files, 19 blocks
```

Built-output greps (all zero):

```
grep -roF "Review coming soon"  .next/server .next/static   0
grep -roF "aggregateRating"     .next/server .next/static   0
grep -roF "name=\"company\""    .next/server .next/static   0
grep -roF "smsConsent: true"    .next/server .next/static   0
grep -roF "smsConsent:!0"       .next/server .next/static   0
grep -roiE "testimonial"        .next/server .next/static   0
grep -roiE "licensed|insured"   .next/server .next/static   0
```

`businessSlug` unchanged from the Phase 0 print:

```
site.config.ts:457  businessSlug: process.env.NEXT_PUBLIC_BUSINESS_SLUG || "jaws-painting",
```

Static HTML (no JavaScript executed) confirmed on `/`, `/services/interior-painting/`, and `/get-a-quote/`: title, meta description, H1, body copy, business name, phone, service area, and JSON-LD are all present in the initial HTML. All 10 internal routes resolve.
