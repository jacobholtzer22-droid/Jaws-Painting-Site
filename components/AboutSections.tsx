import { site } from "@/site.config";
import ContactInfo from "./ContactInfo";
import ScrollReveal from "./ScrollReveal";

/** About page body: core-values intro + contact info, then category blocks. */
export default function AboutSections() {
  const { about, cta } = site;

  return (
    <>
      {/* Core values + contact info — bone band */}
      <section className="bg-bone py-16 text-ink sm:py-20">
        <div className="container-page grid gap-10 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <ScrollReveal>
            <p className="eyebrow mb-4 text-chrome-deep">Core values</p>
            <p className="text-xl leading-relaxed text-ink sm:text-2xl">
              {about.intro}
            </p>
            <p className="mt-5 text-base leading-relaxed text-ink/65">
              {about.story}
            </p>
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <ContactInfo tone="bone" />
          </ScrollReveal>
        </div>
      </section>

      {/* What we do — category blocks — ink band */}
      <section className="sheen-top bg-ink py-16 text-bone sm:py-20">
        <div className="container-page">
          <ScrollReveal>
            <p className="eyebrow mb-4 text-bone">What we do</p>
            <h2 className="h-display text-3xl text-bone sm:text-4xl">
              {about.categoriesHeading}
            </h2>
          </ScrollReveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {about.categories.map((c, i) => (
              <ScrollReveal key={c.title} delay={i * 80} className="h-full">
                <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-panel p-7 transition-[transform,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-chrome/40">
                  <h3 className="font-display text-lg font-bold tracking-tight text-bone">
                    {c.title}
                  </h3>
                  <p className="mt-3 text-[15px] leading-relaxed text-steel-light">
                    {c.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="mt-10">
            <a href={cta.href} className="btn-primary px-7 py-4 text-base">
              {cta.label}
            </a>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
