# Photos — Jaws Painting

Every image on the site is mapped to a **role** in `site.config.ts`. Each role
points at a file in `/public/images`. To swap a photo, drop the file in and set
the role's `src` — **no component edits, ever.** While a `src` is `""`, the site
shows a clean labeled placeholder for that role, so nothing looks broken.

There are **10 image slots**: 4 section photos (`images.*`) and 6 service banners
(`services[].image`). For each, the recommended filename, what it depicts, the
aspect ratio, and a ready-to-paste generation prompt are below. Photos are the
company's own work — never describe them as anything else in copy or alt text.

## How to add a photo

1. Generate or shoot the image.
2. Save it into `/public/images/` with the suggested filename below.
3. Set the matching `src` in `site.config.ts` (e.g. `src: "/images/hero-exterior.jpg"`).
4. Keep the long edge ~1600–2000px, JPEG quality ~80. `next/image` serves WebP
   automatically.

---

## Section photos (`site.config.ts` → `images`)

### `images.hero` → `/public/images/hero-exterior.jpg`
- **Depicts:** A freshly painted two-story home exterior with crisp white trim, full-bleed behind the hero headline.
- **Aspect / size:** 16:9, ~1920×1080 (it is full-bleed, so favor a wider, higher-res shot).
- **Prompt:** Full-bleed photo of a freshly painted two-story suburban home exterior in a Southeast Michigan neighborhood, warm gray siding with crisp white trim, clean straight lines around windows and doors, green lawn, blue sky with soft sunlight, realistic photography, sharp detail, no people, no text, no watermark.

### `images.whyUs` → `/public/images/why-us.jpg`
- **Depicts:** A painter rolling a smooth, even coat onto an interior wall.
- **Aspect / size:** 4:3, ~1600×1200.
- **Prompt:** Photo of a professional house painter in clean work clothes rolling a smooth even coat of light paint onto an interior living room wall, drop cloths on the floor, bright natural light from a window, finished neat edges, realistic photography, sharp focus, no text, no watermark.

### `images.process` → `/public/images/process-prep.jpg`
- **Depicts:** Close-up of painter's tape lining a window frame during prep work.
- **Aspect / size:** 4:3, ~1600×1200.
- **Prompt:** Close-up photo of a painter applying blue painter's tape along a window frame and baseboards during prep work, taping and masking edges, drop cloth visible, clean detailed hands, soft indoor lighting, realistic photography, sharp focus, no faces, no text, no watermark.

### `images.about` → `/public/images/about-crew.jpg`
- **Depicts:** A work truck and ladders parked outside a home on a paint job.
- **Aspect / size:** 3:2, ~1600×1067.
- **Prompt:** Photo of a painting company work truck with ladders and gear parked in the driveway of a suburban home on a job day, a couple of painters in work clothes loading supplies, daytime, Southeast Michigan residential street, realistic photography, sharp focus, no readable logos, no text, no watermark.

---

## Service banner photos (`site.config.ts` → `services[].image`)

Each service detail page (`/services/<slug>/`) shows one banner. Render frame is
wide (16:9 to 21:9), so favor landscape shots.

### Interior Painting → `/public/images/service-interior.jpg`
- **Aspect / size:** 16:9, ~1600×900.
- **Prompt:** A realistic, candid photo of a freshly painted living room inside a real Southeast Michigan home. Smooth light gray walls, crisp white trim around the windows and baseboards, a clean white ceiling. Natural daylight coming through a window, warm and even. Hardwood floor, a couch and a few normal household items in frame so it looks lived in, not staged. Slight imperfection and real texture, not a glossy studio shot. No text, no watermarks, no logos.

### Exterior Painting → `/public/images/service-exterior.jpg`
- **Aspect / size:** 16:9, ~1600×900.
- **Prompt:** A realistic, natural photo of a recently repainted two-story suburban home in Southeast Michigan on a clear day. Freshly painted siding in a warm neutral color, crisp white trim around windows, a clean painted front door, and a tidy porch. Mature trees and a green lawn nearby, soft late-afternoon sunlight, slight shadows for depth. Shot like a real homeowner photo, not a stock image, no people, no text, no watermarks, framed straight-on from the front yard.

### Cabinet Refinishing → `/public/images/service-cabinets.jpg`
- **Aspect / size:** 16:9, ~1600×900.
- **Prompt:** A realistic photo of a refinished kitchen in a real Southeast Michigan home. Crisp white cabinet doors and boxes with a smooth, even sprayed finish and no brush marks. Soft natural daylight from a nearby window, simple countertop and hardware, lived-in but tidy. Shot at a slight angle to show door fronts and cabinet boxes. Warm, candid, not stocky. No text, no watermarks.

### Deck & Fence Staining → `/public/images/service-deck-fence.jpg`
- **Aspect / size:** 16:9, ~1600×900.
- **Prompt:** A realistic photo of a freshly stained backyard wood deck on a Michigan home, rich warm brown stain that brings out the wood grain, matching wood privacy fence in the background, green lawn and a few trees, soft late-afternoon sunlight casting warm light across the boards, shot at a natural eye-level angle from the yard looking toward the house, candid and authentic not stocky, no people, no text, no watermarks.

### Drywall Repair → `/public/images/service-drywall.jpg`
- **Aspect / size:** 16:9, ~1600×900.
- **Prompt:** A realistic, candid photo of a freshly repaired interior drywall wall in a real Southeast Michigan home living room. The wall is smooth and primed white, with no visible patch lines or seams, blended evenly into the surrounding wall. Natural daylight from a nearby window, soft shadows, slight texture on the wall surface visible up close. A bit of painter's plastic and a step ladder off to the side. Warm, lived-in suburban home feel, not staged or stocky. No text, no watermarks, no logos.

### Commercial Painting → `/public/images/service-commercial.jpg`
- **Aspect / size:** 16:9, ~1600×900.
- **Prompt:** Realistic photo of a freshly repainted open-plan office in a Southeast Michigan commercial building. Clean white walls with one warm gray accent wall, empty desks and chairs neatly in place, natural daylight coming through large windows, polished floor with no drop cloths left behind. Shot at eye level, wide framing, natural color, candid and real, not stock-looking. No people, no text, no watermarks.

---

## Tips

- Hero reads best as a **wide landscape** exterior; service banners are landscape too.
- Keep file names exactly as above so swapping is a one-line `src` change.
- Real customer photos are always better than generated ones — replace these as
  soon as the client provides their own job shots.
