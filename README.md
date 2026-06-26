# Jaws Painting — marketing site

A high-conversion, **config-driven** marketing site. Next.js 14 (App Router) +
TypeScript + Tailwind. Shares the same codebase as the other Jaws sites: swap
`site.config.ts` + `/public/images` and you get a different site with **zero
component edits**.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
```

## The one file that matters

`site.config.ts` is the single source of truth — business name, phone, services,
hours, service area, reviews, SEO, the photo manifest, and the CRM wiring. Every
component reads from it. Nothing business-specific is hardcoded anywhere else.

## Pages

- `/` — home (hero, services overview, why-us/trust, how it works, service area,
  testimonials, closing CTA)
- `/services/` — services index, plus `/services/<slug>/` (one detail page per
  service, pre-rendered via `generateStaticParams`)
- `/about/` — company story + values
- `/get-a-quote/` — the contact form

> No portfolio/"our work" gallery by request.

## CRM / contact form

The contact form POSTs the lead directly to the Align & Acquire CRM. Configure via
two **public** env vars (see `.env.local.example`):

```bash
NEXT_PUBLIC_CRM_URL=https://www.alignandacquire.com/api/contact
NEXT_PUBLIC_BUSINESS_SLUG=REPLACE_ME_SLUG   # paste the exact Neon Business.slug
```

POST body is exactly: `{ name, phone, email, message, smsConsent, businessSlug }`.
`smsConsent` is a real, default-unchecked TCPA checkbox. **A wrong slug returns a
200 with no DB write — leads are silently lost.** Verify the slug against the live
DB before launch.

## Photos

See `PHOTOS.md`. Each image is a **role** in `site.config.ts`; placeholders show
until real photos are dropped into `/public/images` and their `src` is set.

## Before launch — open TODOs

- [ ] Paste the real `NEXT_PUBLIC_BUSINESS_SLUG` (exact Neon `Business.slug`).
- [ ] Confirm the real business **name**, **phone**, and email.
- [ ] Confirm the **service list** (currently interior, exterior, cabinet
      refinishing, deck & fence staining, drywall repair, commercial).
- [ ] Drop in the 10 photos and set their `src` in `site.config.ts` (see `PHOTOS.md`).
- [ ] Confirm `serviceArea.towns` (SE-Michigan placeholders).
- [ ] Confirm `hours`.
- [ ] Add real Google review quotes to `reviews.quotes`, set `reviews.rating`, and
      paste `reviews.reviewUrl` (never invent a review or a rating).
- [ ] Set the final domain in `seo.url`.
- [ ] Add a logo (header wordmark + footer + `app/icon.png`) if one is available.

## Design

"Navy / Red / White" — deep navy structure, a single clean red reserved for CTAs
and small accents, off-white and white for breathing room. Bricolage Grotesque
(display) × Figtree (body). Brand tokens live in `tailwind.config.ts`
(`ink` / `panel` / `chrome` / `bone` / `steel`); re-skin the whole site from there.
