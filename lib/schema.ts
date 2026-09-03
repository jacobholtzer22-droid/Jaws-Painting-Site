import { site } from "@/site.config";

/* =============================================================================
 * JSON-LD builders.
 * -----------------------------------------------------------------------------
 * RULE: only emit properties backed by a confirmed fact. Anything unconfirmed is
 * OMITTED entirely rather than filled with a placeholder. Deliberately absent
 * today (no confirmed value): address, geo, sameAs, email, priceRange,
 * aggregateRating, review.
 * ========================================================================== */

const BASE = site.seo.url.replace(/\/$/, "");
export const ORG_ID = `${BASE}/#business`;
export const WEBSITE_ID = `${BASE}/#website`;

/** "07:00" -> "07:00" (schema wants 24h HH:MM, which is what the config stores). */
const DAY_NAMES: Record<string, string> = {
  monday: "Monday",
  tuesday: "Tuesday",
  wednesday: "Wednesday",
  thursday: "Thursday",
  friday: "Friday",
  saturday: "Saturday",
  sunday: "Sunday",
};

function openingHours() {
  const open = Object.entries(site.hours).filter(
    ([, h]) => !h.closed && h.open && h.close,
  );
  if (open.length === 0) return undefined;
  return open.map(([day, h]) => ({
    "@type": "OpeningHoursSpecification",
    dayOfWeek: `https://schema.org/${DAY_NAMES[day]}`,
    opens: h.open,
    closes: h.close,
  }));
}

/**
 * HousePainter — verified real schema.org type:
 * Thing > Organization > LocalBusiness > HomeAndConstructionBusiness > HousePainter
 */
export function localBusinessSchema() {
  const hours = openingHours();
  return {
    "@context": "https://schema.org",
    "@type": "HousePainter",
    "@id": ORG_ID,
    name: site.business.name,
    url: `${BASE}/`,
    telephone: site.business.phoneHref.replace("tel:", ""),
    image: `${BASE}${site.images.hero.src}`,
    logo: `${BASE}${site.business.logo}`,
    description: site.seo.pages.home.description,
    areaServed: site.serviceArea.towns.map((t) => ({
      "@type": "City",
      name: t,
    })),
    ...(hours ? { openingHoursSpecification: hours } : {}),
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Painting services",
      itemListElement: site.services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.title,
          url: `${BASE}/services/${s.slug}/`,
        },
      })),
    },
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: site.business.name,
    url: `${BASE}/`,
    logo: `${BASE}${site.business.logo}`,
    telephone: site.business.phoneHref.replace("tel:", ""),
  };
}

export function webSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: site.seo.siteName,
    url: `${BASE}/`,
    publisher: { "@id": ORG_ID },
  };
}

export function breadcrumbSchema(
  trail: { name: string; path: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((t, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: t.name,
      item: `${BASE}${t.path}`,
    })),
  };
}

/** Service schema for a /services/<slug>/ page. */
export function serviceSchema(service: (typeof site.services)[number]) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    serviceType: service.title,
    url: `${BASE}/services/${service.slug}/`,
    provider: { "@id": ORG_ID },
    areaServed: site.serviceArea.towns.map((t) => ({
      "@type": "City",
      name: t,
    })),
  };
}

/** FAQPage — must mirror the visible accordion exactly. */
export function faqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: site.faq.items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };
}
