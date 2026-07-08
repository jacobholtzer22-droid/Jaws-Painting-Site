import { Check } from "lucide-react";
import Section from "./Section";
import { site } from "@/site.config";
import ImagePlaceholder from "./ImagePlaceholder";
import ScrollReveal from "./ScrollReveal";

/** Home "why us / trust" feature block: photo + body + bullets + word-based stats. */
export default function WhyUs() {
  const { whyUs, images } = site;

  return (
    <Section id="why-us" tone="bone">
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center lg:gap-16">
        {/* Photo */}
        <ScrollReveal className="group relative aspect-[4/3] overflow-hidden rounded-2xl border border-ink/10 shadow-card">
          <ImagePlaceholder
            image={images[whyUs.imageKey]}
            sizes="(min-width: 1024px) 560px, 100vw"
            className="transition-transform duration-[600ms] ease-out group-hover:scale-[1.03]"
          />
        </ScrollReveal>

        {/* Copy */}
        <div>
          <ScrollReveal delay={80}>
            <p className="eyebrow mb-4 text-chrome-deep">{whyUs.eyebrow}</p>
            <h2 className="h-display text-3xl text-ink sm:text-4xl">
              {whyUs.heading}
            </h2>
            <p className="mt-4 text-base text-ink/60">{whyUs.body}</p>

            <ul className="mt-7 space-y-3">
              {whyUs.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="flex items-start gap-3 text-[15px] font-medium text-ink/80"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-chrome/15 text-chrome-deep">
                    <Check className="h-4 w-4" aria-hidden="true" />
                  </span>
                  {bullet}
                </li>
              ))}
            </ul>
          </ScrollReveal>

          <ScrollReveal
            as="dl"
            delay={160}
            className="mt-9 grid grid-cols-3 gap-4 border-t border-ink/10 pt-7"
          >
            {whyUs.stats.map((stat) => (
              <div key={stat.label}>
                <dt className="font-display text-xl font-extrabold text-ink sm:text-2xl">
                  {stat.value}
                </dt>
                <dd className="mt-1 text-xs leading-snug text-ink/55">
                  {stat.label}
                </dd>
              </div>
            ))}
          </ScrollReveal>
        </div>
      </div>
    </Section>
  );
}
