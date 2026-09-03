/* =============================================================================
 * site.config.ts — SINGLE SOURCE OF TRUTH
 * -----------------------------------------------------------------------------
 * This is the ONLY file with business-specific content. Every component reads
 * from here. To spin up a different client site on this exact codebase:
 *   1. Replace the values in this file.
 *   2. Drop new photos in /public/images and update `images` below.
 *   3. Swap the brand colors in tailwind.config.ts + the fonts in app/layout.tsx.
 * That's it — no component edits. Nothing business-specific lives anywhere else.
 * ========================================================================== */

import type { LucideIcon } from "lucide-react";
import {
  Paintbrush2,
  Home,
  Brush,
  Fence,
  Hammer,
  Building2,
} from "lucide-react";

/* ---- Types ----------------------------------------------------------------- */

export type SiteImage = {
  /** Path under /public. Leave "" to render the role placeholder until the real photo lands. */
  src: string;
  /** Real, specific alt text — required for every image. */
  alt: string;
  /** Shown inside the placeholder box so it's obvious which photo goes here. */
  placeholderLabel: string;
};

export type Service = {
  title: string;
  /** URL slug for the /services/<slug>/ detail page. */
  slug: string;
  /** Short, card-level description. */
  description: string;
  /** Longer paragraph for the service detail page. */
  longDescription: string;
  /** "What's included" bullets on the detail page. */
  includes: string[];
  /** Banner photo on the /services/<slug>/ detail page. */
  image: SiteImage;
  /** Per-service SEO. */
  seoTitle: string;
  seoDescription: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  title: string;
  description: string;
};

export type Stat = { value: string; label: string };

export type Review = {
  /** Leave quote empty ("") to render a clearly-marked placeholder slot — never invent. */
  quote: string;
  author: string;
  /** e.g. "Google review" — shown under the author. */
  context?: string;
};

export type DayHours = {
  /** 24h "HH:MM", or null when closed. */
  open: string | null;
  close: string | null;
  closed: boolean;
};

export type NavItem = { label: string; href: string };

/* ---- Config ---------------------------------------------------------------- */

export const site = {
  /* --- Identity ---
   * TODO (before launch): confirm the real business name, phone, and email.
   * Phone is a placeholder reused from the other Jaws sites — confirm the
   * painting line.
   */
  business: {
    name: "Jaws Painting",
    shortName: "Jaws",
    tagline: "Interior & exterior painting in Southeast Michigan",
    phoneDisplay: "(734) 262-2365", // TODO: confirm the painting line
    phoneHref: "tel:+17342622365", // TODO: confirm the painting line
    region: "Southeast Michigan",
    email: "", // optional — add a public contact email if they want one shown
    address: "", // optional — add a city/area line if they want one shown
    // Brand badge (cream field + navy/red artwork). Shown in a light tile on dark
    // surfaces so the navy artwork stays legible. See Header / Footer.
    logo: "/images/logo.png",
    logoAlt: "Jaws Painting Co., Michigan",
  },

  /* --- Hero (full-bleed photo + headline) --- */
  hero: {
    eyebrow: "Painting for homes & businesses · Southeast Michigan",
    headline: "Interior & exterior\npainting, done right",
    sub: "Walls, ceilings, trim, cabinets, decks, and full exteriors — careful prep, sharp lines, and floors kept protected. Serving homes and businesses across Southeast Michigan.",
    primaryCta: "Get a free quote",
    secondaryCta: "Call us",
  },

  /* --- Trust strip (under the hero) ---
   * Non-review proof points only. We do NOT show a star rating until there are
   * real reviews — see `reviews` below (rating stays null on purpose).
   */
  trust: {
    points: [
      "Floors and furniture protected",
      "Free, no-pressure quotes",
      "Clean, on-time crews",
    ],
  },

  /* --- Services (each links to /services/<slug>/) ---
   * Plain-language, customer's-side descriptions: what they GET, not jargon.
   * TODO: confirm this is the real service list with the client.
   */
  services: [
    {
      title: "Interior Painting",
      slug: "interior-painting",
      description:
        "Fresh paint on your walls, ceilings, trim, and doors. We prep right, cut clean lines, and protect your floors and furniture. Free quotes across Southeast Michigan.",
      longDescription:
        "Want a room that looks finished, not rushed? We paint walls, ceilings, trim, and doors inside your home. First we patch holes, fill dents, and sand rough spots so the new coat lays down smooth. We cover your furniture and floors before a single brush moves. Then we cut clean lines and roll even coats, no drips on the baseboards, no roller marks on the wall. When we leave, the room is wiped down and put back the way you had it. Free quotes anywhere in Southeast Michigan.",
      includes: [
        "Walls, ceilings, trim, and doors painted",
        "Patching, filling, and sanding before we paint",
        "Furniture and floors covered and protected",
        "Clean, sharp lines along trim and edges",
        "Even coats with no drips or roller marks",
        "Full cleanup and room put back in place",
      ],
      image: {
        src: "",
        alt: "A freshly painted living room with smooth neutral walls, crisp white trim, and a clean finish",
        placeholderLabel: "Interior: finished living room",
      },
      seoTitle: "Interior Painting | Jaws Painting",
      seoDescription:
        "Jaws Painting handles interior walls, ceilings, trim, and doors across Southeast Michigan. Careful prep, clean lines, protected floors. Free quotes.",
      icon: Paintbrush2,
    },
    {
      title: "Exterior Painting",
      slug: "exterior-painting",
      description:
        "Fresh paint that holds up to Michigan weather. We wash, scrape, prime, and coat your siding, trim, and doors so your home looks sharp and stays protected for years.",
      longDescription:
        "Your home takes a beating out here. Sun, rain, snow, and big swings in temperature all wear paint down fast. We give you a finish built to handle it. First we power wash off the dirt and old buildup. Then we scrape loose paint, sand rough spots, and prime bare wood so the new coat grips and lasts. We use weather-rated paint made for Michigan, and we cut clean lines on every door, window, and piece of trim. When we leave, the yard is clean and your home looks fresh and well kept. Free quotes, no obligation.",
      includes: [
        "Power washing to strip dirt, mildew, and chalking before we paint",
        "Scraping, sanding, and priming bare or peeling spots",
        "Siding, trim, doors, soffits, and fascia all covered",
        "Weather-rated paint chosen to hold up in Michigan",
        "Clean lines, careful prep around windows and landscaping",
        "Free quote and full cleanup when the job is done",
      ],
      image: {
        src: "",
        alt: "A painter on a ladder applying a fresh coat to the exterior of a home",
        placeholderLabel: "Exterior: repainted home",
      },
      seoTitle: "Exterior Painting | Jaws Painting",
      seoDescription:
        "Exterior house painting in Southeast Michigan. We wash, scrape, prime, and paint siding, trim, and doors with weather-rated paint. Free quotes.",
      icon: Home,
    },
    {
      title: "Cabinet Refinishing",
      slug: "cabinet-refinishing",
      description:
        "Give your kitchen a fresh look without ripping out the cabinets. We degrease, sand, and spray a smooth, durable finish on your doors and boxes across Southeast Michigan.",
      longDescription:
        "New cabinets cost a fortune. Refinishing gets you a brand new look for a lot less. We take down your doors and drawer fronts, then degrease and sand every surface so the new finish actually grips. We fill dings, smooth things out, and spray the doors, drawers, and boxes for a clean, even coat with no brush marks. The result holds up to daily kitchen use, splashes, and wiping down. Works on kitchen and bathroom cabinets. We keep your space clean and put everything back when we are done. Free quotes, no obligation.",
      includes: [
        "Doors, drawer fronts, and boxes degreased and sanded",
        "Dings and gaps filled and smoothed",
        "Smooth sprayed finish with no brush marks",
        "Durable coat built for daily kitchen use",
        "Kitchen and bathroom cabinets",
        "Cleanup and reassembly when the work is done",
      ],
      image: {
        src: "",
        alt: "A bright kitchen with crisp white cabinets and a clean, even finish",
        placeholderLabel: "Cabinets: refinished kitchen",
      },
      seoTitle: "Cabinet Refinishing | Jaws Painting",
      seoDescription:
        "Cabinet refinishing in Southeast Michigan. We degrease, sand, and spray a smooth, durable finish on kitchen and bath cabinets. Free quotes.",
      icon: Brush,
    },
    {
      title: "Deck & Fence Staining",
      slug: "deck-and-fence-staining",
      description:
        "We clean, sand, and stain decks, fences, and exterior wood across Southeast Michigan. The right stain or sealer locks out moisture and blocks the sun so your wood lasts longer and looks good.",
      longDescription:
        "Outside, wood gets rough fast. Sun fades it, rain soaks it, and before long a deck or fence looks gray and worn. We bring it back. First we clean off the dirt, mildew, and old flaky finish. Then we sand the rough spots so the stain goes on even and smooth. Last, we stain or seal the wood to lock out moisture and block the sun. You pick the look, from a light natural tone to a deeper color. When we leave, your deck feels good underfoot and your fence looks sharp from the street. Free quotes, no obligation.",
      includes: [
        "Clean off dirt, mildew, and old flaking finish",
        "Sand rough spots so the stain goes on even",
        "Stain or sealer to block sun and moisture",
        "Color and finish picked to match what you want",
        "Decks, fences, railings, and other exterior wood",
      ],
      image: {
        src: "",
        alt: "A wood deck with a fresh stain and clean railings in a backyard",
        placeholderLabel: "Deck & fence: fresh stain",
      },
      seoTitle: "Deck & Fence Staining | Jaws Painting",
      seoDescription:
        "Jaws Painting cleans, sands, and stains decks and fences across Southeast Michigan. Protect your wood from sun and rain. Free quotes.",
      icon: Fence,
    },
    {
      title: "Drywall Repair",
      slug: "drywall-repair",
      description:
        "Holes, cracks, water damage, and bad seams patched and blended. We tape, mud, sand, and match the texture so the wall looks right and is ready for paint.",
      longDescription:
        "Bad drywall stands out. We fix it right. We patch holes, fill cracks, cut out water damage, and re-tape seams that have let go. Then we mud, sand smooth, and match the texture so the repair disappears into the wall around it. We prime every patch so it takes paint evenly with no flashing or dull spots. By the time we leave, you should not be able to find where the damage was. We work clean, cover your floors and furniture, and keep the dust down. Free quotes across Southeast Michigan.",
      includes: [
        "Holes, dents, and cracks patched and filled",
        "Water-damaged drywall cut out and replaced",
        "Failed seams and tape re-taped and re-mudded",
        "Sanded smooth with texture matched to the wall",
        "Patches primed and ready for paint",
        "Floors and furniture covered, dust kept down",
      ],
      image: {
        src: "",
        alt: "A smooth, freshly finished wall in an empty room, primed and ready for paint",
        placeholderLabel: "Drywall: repaired and paint-ready",
      },
      seoTitle: "Drywall Repair | Jaws Painting",
      seoDescription:
        "Drywall repair in Southeast Michigan. We patch holes, cracks, and water damage, match the texture, and prime it paint-ready. Free quotes.",
      icon: Hammer,
    },
    {
      title: "Commercial Painting",
      slug: "commercial-painting",
      description:
        "Painting for offices, retail, and units across Southeast Michigan. We work around your hours, keep the job site clean, and get it done with minimal disruption to your business.",
      longDescription:
        "We paint commercial spaces across Southeast Michigan. Offices, retail floors, rental units, hallways, and common areas. Your business has to keep running, so we plan the work around your hours, including early mornings, evenings, or weekends when it makes sense. We move and cover what needs covering, mask off fixtures, and keep walkways clear and safe. Surfaces get prepped right so the finish holds up to daily traffic. At the end of each day the space is clean and ready for your people and your customers. Free quotes, no obligation.",
      includes: [
        "Offices, retail, units, hallways, and common areas",
        "Work scheduled around your business hours, including nights and weekends",
        "Surfaces prepped and primed for high-traffic wear",
        "Fixtures, floors, and equipment covered and protected",
        "Clean, safe job site at the end of every day",
        "Free written quote before we start",
      ],
      image: {
        src: "",
        alt: "A freshly painted open-plan office with clean walls, ready for the workday",
        placeholderLabel: "Commercial: finished office",
      },
      seoTitle: "Commercial Painting | Jaws Painting",
      seoDescription:
        "Commercial painting in Southeast Michigan for offices, retail, and units. We work around your hours, keep it clean, and limit disruption. Free quotes.",
      icon: Building2,
    },
  ] satisfies Service[],

  /* --- Why us / trust (home feature block) --- */
  whyUs: {
    eyebrow: "Why Jaws Painting",
    heading: "Painters who show up and do it right",
    body: "We are local painters working on homes and businesses all over Southeast Michigan. We protect your floors and furniture, do the prep most crews skip, and clean up before we leave. You get honest answers, a fair price, and walls that look sharp.",
    bullets: [
      "Careful prep and clean lines on every job, inside and out",
      "We treat your home like it's ours, with dropcloths down and nothing left behind",
      "Clear pricing up front, so you know what you're paying before we start",
      "We show up when we say we will and finish what we start",
    ],
    imageKey: "whyUs" as const,
    stats: [
      { value: "Homes", label: "& businesses" },
      { value: "Free", label: "written quotes" },
      { value: "Local", label: "owner-run crew" },
    ] satisfies Stat[],
  },

  /* --- How it works (home process section) --- */
  howItWorks: {
    eyebrow: "How it works",
    heading: "From quote to last brushstroke",
    sub: "Four simple steps. No surprises, no runaround.",
    steps: [
      {
        title: "Free quote",
        description:
          "Call or message us and we come take a look. We talk through colors, what you want done, and give you a clear written price for free.",
      },
      {
        title: "Pick your date",
        description:
          "Once you're happy with the quote, we lock in a day that works for you and walk you through what to expect.",
      },
      {
        title: "Prep and paint",
        description:
          "We cover your floors and furniture, patch and prime where it's needed, then lay down clean coats. We keep the work area tidy the whole time.",
      },
      {
        title: "Final walkthrough",
        description:
          "We walk the job with you, touch up anything you spot, and don't call it done until you're happy with how it looks.",
      },
    ] satisfies ProcessStep[],
  },

  /* --- Service area ---
   * Confirmed service area (same as Jaws Detailing): Ann Arbor, Ypsilanti, Saline,
   * Canton, Plymouth, Belleville.
   */
  serviceArea: {
    eyebrow: "Where we work",
    heading: "Proudly painting homes and businesses\nacross Southeast Michigan",
    note: "We cover towns and neighborhoods throughout Southeast Michigan. Not sure if you're in our area? Give us a call or send a message. If we can't get to you, we'll point you toward someone who can.",
    cta: "See if we cover you",
    towns: [
      "Ann Arbor",
      "Ypsilanti",
      "Saline",
      "Canton",
      "Plymouth",
      "Belleville",
    ],
  },

  /* --- Hours ---
   * Confirmed: open 7am to 8pm, seven days a week.
   */
  hours: {
    monday: { open: "07:00", close: "20:00", closed: false },
    tuesday: { open: "07:00", close: "20:00", closed: false },
    wednesday: { open: "07:00", close: "20:00", closed: false },
    thursday: { open: "07:00", close: "20:00", closed: false },
    friday: { open: "07:00", close: "20:00", closed: false },
    saturday: { open: "07:00", close: "20:00", closed: false },
    sunday: { open: "07:00", close: "20:00", closed: false },
  } as Record<string, DayHours>,

  /* --- Photo manifest (section photos) ---
   * Real interior job photos. Service banners are intentionally empty (src: "")
   * until there's a landscape photo per service — ServiceDetail omits the banner
   * when src is "". See PHOTOS.md and the gallery below.
   */
  images: {
    hero: {
      src: "/images/interior-living-room.jpg",
      alt: "A freshly painted living room with light gray walls, a white fireplace, and clean trim",
      placeholderLabel: "Hero: finished interior (strongest shot)",
    },
    whyUs: {
      src: "/images/interior-green-room.jpg",
      alt: "An interior room painted a deep olive green, the carpet papered off and floors protected mid-job",
      placeholderLabel: "Why us: prep and protection",
    },
    process: {
      src: "/images/interior-open-room.jpg",
      alt: "A room prepped for painting with drop protection laid down over the floor",
      placeholderLabel: "Process: prep and protection",
    },
  } satisfies Record<string, SiteImage>,

  /* --- Project gallery (real interior job photos, filterable by room type) --- */
  gallery: {
    eyebrow: "Our work",
    heading: "Recent interior painting",
    sub: "A look at real jobs across Southeast Michigan — living spaces, bathrooms, stairwells, and bold accent walls.",
    categories: [
      { key: "all", label: "All" },
      { key: "living", label: "Living spaces" },
      { key: "bath", label: "Bathrooms" },
      { key: "stairs", label: "Stairwells & accent walls" },
    ],
    photos: [
      { src: "/images/interior-living-room.jpg", category: "living", alt: "A freshly painted living room with light gray walls, a white fireplace, and clean trim" },
      { src: "/images/interior-open-room.jpg", category: "living", alt: "An open room prepped for painting with drop protection down over the carpet" },
      { src: "/images/interior-green-room.jpg", category: "living", alt: "A room painted a deep olive green with the floors papered off during the job" },
      { src: "/images/bathroom-gray.jpg", category: "bath", alt: "A bathroom with light gray walls, a white vanity, and a glass shower" },
      { src: "/images/bathroom-gold.jpg", category: "bath", alt: "A bathroom painted a warm golden yellow with a white vanity and a tiled shower" },
      { src: "/images/stairwell-two-tone.jpg", category: "stairs", alt: "A stairwell landing with a dark accent wall next to a warm neutral wall" },
      { src: "/images/stairwell-navy.jpg", category: "stairs", alt: "A stairwell with a deep navy accent wall, a white railing, and a wood floor" },
      { src: "/images/staircase-hall.jpg", category: "stairs", alt: "A repainted staircase and upstairs hallway in light gray with black metal railings" },
      { src: "/images/landing-navy.jpg", category: "stairs", alt: "An upstairs landing overlooking the staircase, with a navy accent wall and white trim" },
      { src: "/images/staircase-purple.jpg", category: "stairs", alt: "A staircase with a deep plum accent wall on the lower level and a black railing" },
    ],
  },

  /* --- CRM wiring (do not improvise — see ContactForm.tsx) ---
   * Values come from env so a different deploy = different tenant with no code change.
   * NEXT_PUBLIC_BUSINESS_SLUG MUST equal the exact Neon `Business.slug` for this
   * tenant. A wrong slug returns 200 with no DB write = silently lost leads.
   */
  crm: {
    url:
      process.env.NEXT_PUBLIC_CRM_URL ||
      "https://www.alignandacquire.com/api/contact",
    businessSlug: process.env.NEXT_PUBLIC_BUSINESS_SLUG || "jaws-painting",
  },

  /* --- Contact / get-a-quote copy --- */
  contact: {
    eyebrow: "Free quotes",
    heading: "Get your free painting quote",
    sub: "Tell us what you need painted and where you are in Southeast Michigan. We'll get back to you fast with a real price, no pressure.",
    messageLabel: "What do you need painted?",
    messagePlaceholder:
      "Example: Repaint the living room and hallway, or the whole house exterior. Include your city and a good time to reach you.",
    submitLabel: "Get my free quote",
    submittingLabel: "Sending…",
    consentLabel:
      "By checking this box, you agree to receive text messages from Jaws Painting about your quote and project. Message and data rates may apply. Reply STOP to opt out.",
    successHeading: "Got it. Thanks for reaching out.",
    successBody:
      "We have your request and we'll be in touch soon to talk through your project and set up your free quote.",
    errorBody:
      "Something went wrong sending that. Please call or text us at",
  },

  /* --- Primary CTA (reused everywhere a "get a quote" action appears) --- */
  cta: {
    label: "Get a free quote",
    href: "/get-a-quote/",
    callLabel: "Call",
  },

  /* --- About page --- */
  about: {
    eyebrow: "About Jaws Painting",
    heading: "Local painters who treat your home like our own",
    intro:
      "We're Jaws Painting, a local crew that paints homes and businesses across Southeast Michigan. We show up when we say we will, keep the work area clean, and leave you with paint that looks sharp and lasts. No runaround, no surprise charges, just careful work at a fair price.",
    story:
      "Jaws Painting started with a simple idea. Most people just want a painter who answers the phone, does careful work, and cleans up after the job. So that's what we built. We handle interior and exterior painting for both homes and businesses, and we treat every job like it's the only one on our list that week. From the first walkthrough to the final wall, you deal with people who actually care how it turns out.",
    categoriesHeading: "What we paint",
    categories: [
      {
        title: "Interior painting",
        description:
          "Walls, ceilings, trim, doors, and more. We move your stuff, cover your floors, and cut clean lines so the only thing you notice is the fresh color. We clean up every day before we head out.",
      },
      {
        title: "Exterior painting",
        description:
          "Siding, trim, porches, and fences. We prep the surface right so the paint sticks and stands up to Michigan weather. The job looks great from the curb and lasts year after year.",
      },
      {
        title: "Cabinets and finishes",
        description:
          "Kitchen cabinets, built-ins, and detailed finish work. We sand, prime, and coat it right so your cabinets come out smooth and clean, ready for daily use.",
      },
    ],
  },

  /* --- Closing CTA band (home + about) --- */
  ctaBand: {
    heading: "Let's get your place painted",
    sub: "Tell us what you need. We'll take a look and give you a straight price, free.",
  },

  /* --- Services index + detail page copy --- */
  servicesPage: {
    eyebrow: "Services",
    heading: "Painting services, done right.",
    sub: "From a single room to your whole exterior. Tap any service to see exactly what's included, and remember every quote is free.",
    detailIncludesHeading: "What's included",
    detailOtherHeading: "Other services",
  },

  /* --- Nav (top-level pages) --- */
  nav: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services/" },
    { label: "About", href: "/about/" },
    { label: "Get a quote", href: "/get-a-quote/" },
  ] satisfies NavItem[],

  /* --- SEO (per page; mirrors the route structure) --- */
  seo: {
    siteName: "Jaws Painting",
    url: "https://jawspainting.com", // TODO: confirm final domain
    pages: {
      home: {
        path: "/",
        title: "Jaws Painting | House Painters in Southeast Michigan",
        description:
          "Jaws Painting handles interior and exterior painting for homes and businesses across Southeast Michigan. Free quotes. Get yours today.",
      },
      services: {
        path: "/services/",
        title: "Painting Services | Jaws Painting Southeast Michigan",
        description:
          "Interior and exterior painting for homes and commercial spaces in Southeast Michigan. Clean prep, neat lines, and walls done right. Free written quotes.",
      },
      about: {
        path: "/about/",
        title: "About Us | Jaws Painting Southeast Michigan",
        description:
          "Jaws Painting is a local painting crew serving Southeast Michigan. We show up on time, protect your home, and leave it looking sharp. Free written quotes.",
      },
      quote: {
        path: "/get-a-quote/",
        title: "Get a Free Quote | Jaws Painting Southeast Michigan",
        description:
          "Request a free painting quote from Jaws Painting. Tell us about your interior or exterior project in Southeast Michigan and we'll get back to you fast.",
      },
    },
  },

  /* --- Footer --- */
  footer: {
    credit: "Site by Align and Acquire",
  },
} as const;

export type Site = typeof site;

/** Readonly service item (site is `as const`, so use this for component props). */
export type ServiceItem = (typeof site)["services"][number];

/** Look up a service by its slug (used by the dynamic /services/<slug>/ route). */
export function getServiceBySlug(slug: string): ServiceItem | undefined {
  return site.services.find((s) => s.slug === slug);
}
