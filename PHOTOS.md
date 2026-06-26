# Photos — Jaws Painting

Every image on the site is mapped to a **role** in `site.config.ts`. Each role
points at a file in `/public/images`. To swap a photo, drop the new file in and
update the role's `src` — **no component edits, ever.**

## Current status

All **9 rendered image slots are filled** with licensed stock photos so the site
looks finished for launch (no placeholders anywhere). These are temporary stand-ins
chosen to look like real Jaws Painting job photos — **replace them with the client's
own photos as soon as he provides them** (same filenames = a one-file drop-in, no
config edit needed).

Source: **Pexels** (Pexels License — free for commercial use, no attribution
required, modification allowed). IDs are listed below for the license record.

| Role (`site.config.ts`) | File | What it shows | Pexels ID |
|---|---|---|---|
| `images.hero` | `hero-exterior.jpg` | Clean two-story suburban home, fresh exterior | 5353890 |
| `images.whyUs` | `why-us.jpg` | Painter rolling a coat on an interior wall | 7218683 |
| `images.process` | `process-prep.jpg` | Close-up of a roller laying a smooth coat | 1669754 |
| `services` interior | `service-interior.jpg` | Freshly finished neutral living room | 8031951 |
| `services` exterior | `service-exterior.jpg` | Painter on a ladder doing an exterior | 1917849 |
| `services` cabinets | `service-cabinets.jpg` | Bright white kitchen cabinets | 8583735 |
| `services` deck/fence | `service-deck-fence.jpg` | Stained wood deck and railing | 10847167 |
| `services` drywall | `service-drywall.jpg` | Smooth, paint-ready wall in an empty room | 7865621 |
| `services` commercial | `service-commercial.jpg` | Open-plan office, freshly painted | 6794966 |

> Note: the About page is text-only (no photo), matching the other Jaws sites, so
> there is no `images.about` role.

## Replacing a photo with the client's own

1. Get the real photo (HEIC from a phone is fine).
2. Convert + resize to a web JPG, long edge ~1600 to 2000px, quality ~82. On macOS,
   the reliable pipeline (handles HEIC rotation correctly):
   ```python
   import pillow_heif; pillow_heif.register_heif_opener()
   from PIL import Image, ImageOps
   im = ImageOps.exif_transpose(Image.open("IMG_XXXX.HEIC")).convert("RGB")
   im.thumbnail((1920, 1920), Image.LANCZOS)
   im.save("public/images/hero-exterior.jpg", "JPEG", quality=82, optimize=True, progressive=True)
   ```
3. Save it over the matching file in `/public/images` (keep the same name) and update
   that role's `alt` text in `site.config.ts` to describe the real photo.

## If generating fresh images instead

Each slot's ideal subject, recommended aspect ratio, and a ready-to-paste generation
prompt are kept below for reference.

### `images.hero` → `hero-exterior.jpg` — 16:9
Full-bleed photo of a freshly painted two-story suburban home exterior in a Southeast Michigan neighborhood, warm gray siding with crisp white trim, clean straight lines around windows and doors, green lawn, blue sky with soft sunlight, realistic photography, sharp detail.

### `images.whyUs` → `why-us.jpg` — 4:3
Photo of a professional house painter in clean work clothes rolling a smooth even coat of light paint onto an interior living room wall, drop cloths on the floor, bright natural light from a window, finished neat edges, realistic photography, sharp focus.

### `images.process` → `process-prep.jpg` — 4:3
Close-up photo of a painter applying blue painter's tape along a window frame and baseboards during prep work, taping and masking edges, drop cloth visible, soft indoor lighting, realistic photography, sharp focus.

### Interior → `service-interior.jpg` — 16:9
A freshly painted living room inside a real Southeast Michigan home, smooth light gray walls, crisp white trim, clean white ceiling, natural daylight, hardwood floor, lived-in but tidy, realistic and candid.

### Exterior → `service-exterior.jpg` — 16:9
A recently repainted two-story suburban home in Southeast Michigan on a clear day, freshly painted siding, crisp white trim, clean painted front door, mature trees, soft late-afternoon sunlight, realistic homeowner-style photo.

### Cabinets → `service-cabinets.jpg` — 16:9
A refinished kitchen in a real Southeast Michigan home, crisp white cabinet doors and boxes with a smooth even sprayed finish, soft natural daylight, simple countertop and hardware, warm and candid.

### Deck & Fence → `service-deck-fence.jpg` — 16:9
A freshly stained backyard wood deck on a Michigan home, rich warm brown stain bringing out the wood grain, matching wood fence, green lawn, soft late-afternoon light, natural eye-level angle.

### Drywall → `service-drywall.jpg` — 16:9
A freshly repaired interior wall in a Southeast Michigan home, smooth and primed, no visible patch lines, blended evenly, natural daylight, slight wall texture visible up close, lived-in suburban feel.

### Commercial → `service-commercial.jpg` — 16:9
A freshly repainted open-plan office in a Southeast Michigan commercial building, clean walls with one warm accent wall, desks and chairs neatly in place, natural daylight, wide eye-level framing, realistic.

## Tips

- Hero reads best as a wide landscape exterior; service banners are landscape too.
- Keep the file names exactly as above so swapping is a one-line `src` change.
- Real customer photos always beat stock — replace these as soon as the client sends his.
