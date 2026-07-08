import { Phone } from "lucide-react";
import { site } from "@/site.config";
import ImagePlaceholder from "./ImagePlaceholder";

export default function Hero() {
  const { hero, trust, cta, business } = site;

  return (
    <section
      id="top"
      className="relative isolate flex min-h-[100svh] items-end overflow-hidden"
    >
      {/* The finished-home photo IS the thesis — full-bleed behind everything. */}
      <div className="absolute inset-0 -z-10">
        <ImagePlaceholder image={site.images.hero} sizes="100vw" priority />
        {/* Scrim: navy pooling up from the bottom so copy stays legible. */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/70 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-transparent to-transparent" />
        {/* Top scrim keeps the transparent header legible over bright photos. */}
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-ink/70 to-transparent" />
      </div>

      <div className="container-page w-full pb-16 pt-28 sm:pb-24">
        <div className="max-w-2xl">
          {/* H1 is the LCP element: it stays static and paints instantly.
           * Only the supporting copy staggers in around it. */}
          <p className="eyebrow mb-5 animate-fade-up text-bone">{hero.eyebrow}</p>

          <h1 className="h-display text-4xl text-bone sm:text-6xl lg:text-7xl">
            {hero.headline.split("\n").map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <p
            className="mt-6 max-w-xl animate-fade-up text-base text-steel-light sm:text-lg"
            style={{ animationDelay: "90ms" }}
          >
            {hero.sub}
          </p>

          <div
            className="mt-9 flex animate-fade-up flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "180ms" }}
          >
            <a href={cta.href} className="btn-primary px-7 py-4 text-base">
              {hero.primaryCta}
            </a>
            <a
              href={business.phoneHref}
              className="btn-ghost px-7 py-4 text-base"
            >
              <Phone className="h-4 w-4" aria-hidden="true" />
              {business.phoneDisplay}
            </a>
          </div>

          {/* Trust strip — proof points only (no star rating until real reviews). */}
          <div
            className="mt-10 flex animate-fade-up flex-wrap items-center gap-x-6 gap-y-3 text-sm text-steel-light"
            style={{ animationDelay: "260ms" }}
          >
            {trust.points.map((p, i) => (
              <span key={p} className="inline-flex items-center gap-2">
                {i > 0 && (
                  <span
                    className="h-1 w-1 rounded-full bg-chrome"
                    aria-hidden="true"
                  />
                )}
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
