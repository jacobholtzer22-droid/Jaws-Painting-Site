# Photos — Jaws Painting

Every image is mapped to a **role** in `site.config.ts`. To swap a photo, replace the
file in `/public/images` (keep the name) and update the role's `alt` — no component edits.

## Current status — REAL client photos

All rendered photos are **genuine Jaws Painting job photos** (no stock). Source files are
the client's own, dropped in `Website Photos/` (HEIC, gitignored). They were converted to
web JPG with EXIF orientation **baked in** (IMG_0082 and IMG_0084 were `orientation=6` /
sideways and are now upright), long edge 1920px, quality 82.

All work photographed to date is **interior residential** (living rooms, bathrooms,
stairwells, accent walls). Several show floors papered off / drop protection — surfaced
deliberately as a differentiator.

### Wired photos
| Role (`site.config.ts`) | File | Source HEIC | Shows |
|---|---|---|---|
| `images.hero` | `interior-living-room.jpg` | IMG_0037 | Living room, light gray walls, white fireplace |
| `images.whyUs` | `interior-green-room.jpg` | IMG_0060 | Deep olive room, floors papered off mid-job |
| `images.process` | `interior-open-room.jpg` | IMG_0047 | Room prepped, drop protection over the floor |
| `gallery` (Living spaces) | above three | — | + the two rooms above |
| `gallery` (Bathrooms) | `bathroom-gray.jpg`, `bathroom-gold.jpg` | IMG_0056, IMG_0077 | Repainted bathrooms |
| `gallery` (Stairwells & accent walls) | `stairwell-two-tone.jpg`, `stairwell-navy.jpg`, `staircase-hall.jpg`, `landing-navy.jpg`, `staircase-purple.jpg` | IMG_0055, 0082, 0083, 0084, 2769 | Accent-wall stair work |

### Service-detail banners — intentionally empty
`services[].image.src` is `""` for all six services. `ServiceDetail` omits the banner
entirely when `src` is empty (no image, no placeholder box), because there is **no real
landscape photo for a per-service banner yet**. Do not fill these with stock.

## Photo requests (needed from the client)
1. **Exterior painting** — a finished exterior repaint (landscape) for the service banner + gallery.
2. **Cabinet refinishing** — a refinished kitchen/cabinet close-up (landscape).
3. **Deck & fence staining** — a stained deck or fence (landscape).
4. **Drywall repair** — a repaired/primed wall (landscape).
5. **Commercial painting** — a finished office/retail/common-area job (landscape).
6. **Before / after pairs** — same room, before and after, for a before/after section (none exist yet).
7. Optional: a **crew / painter-at-work** action shot and a **work-truck** shot.

## Replacing / adding a photo
Convert HEIC → web JPG with orientation baked (macOS):
```python
import pillow_heif; pillow_heif.register_heif_opener()
from PIL import Image, ImageOps
im = ImageOps.exif_transpose(Image.open("IMG_XXXX.HEIC")).convert("RGB")
im.thumbnail((1920, 1920), Image.LANCZOS)
im.save("public/images/<name>.jpg", "JPEG", quality=82, optimize=True, progressive=True)
```
Then set the role's `src` (and `alt`) in `site.config.ts`. For a service banner, set that
service's `image.src` and the banner will appear automatically.
