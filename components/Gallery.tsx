"use client";

import { useState } from "react";
import Image from "next/image";
import Section from "./Section";
import { site } from "@/site.config";

type Cat = (typeof site.gallery.categories)[number]["key"];

/** Project gallery of real interior jobs, filterable by room type. */
export default function Gallery() {
  const { gallery } = site;
  const [active, setActive] = useState<Cat>("all");

  const photos =
    active === "all"
      ? gallery.photos
      : gallery.photos.filter((p) => p.category === active);

  return (
    <Section id="gallery" tone="bone">
      <div className="max-w-2xl">
        <p className="eyebrow mb-4 text-chrome-deep">{gallery.eyebrow}</p>
        <h2 className="h-display text-3xl text-ink sm:text-4xl">
          {gallery.heading}
        </h2>
        <p className="mt-4 text-base text-ink/60">{gallery.sub}</p>
      </div>

      {/* Room-type filter */}
      <div className="mt-8 flex flex-wrap gap-2">
        {gallery.categories.map((c) => {
          const on = c.key === active;
          return (
            <button
              key={c.key}
              type="button"
              aria-pressed={on}
              onClick={() => setActive(c.key)}
              className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                on
                  ? "bg-ink text-bone"
                  : "border border-ink/15 bg-white text-ink/70 hover:border-ink/30 hover:text-ink"
              }`}
            >
              {c.label}
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {photos.map((p) => (
          <li
            key={p.src}
            className="relative aspect-[4/5] overflow-hidden rounded-xl border border-ink/10 bg-ink/5"
          >
            <Image
              src={p.src}
              alt={p.alt}
              fill
              sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw"
              className="object-cover"
            />
          </li>
        ))}
      </ul>
    </Section>
  );
}
