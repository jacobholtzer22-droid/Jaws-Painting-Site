import { Plus } from "lucide-react";
import Section from "./Section";
import { site } from "@/site.config";

/**
 * Visible FAQ accordion. Native <details>/<summary> so it works with keyboard,
 * screen readers, and no JS. The FAQPage JSON-LD mirrors these exactly.
 */
export default function Faq() {
  const { faq } = site;

  return (
    <Section id="faq" tone="bone">
      <div className="max-w-2xl">
        <p className="eyebrow mb-4 text-chrome-deep">{faq.eyebrow}</p>
        <h2 className="h-display text-3xl text-ink sm:text-4xl">
          {faq.heading}
        </h2>
        <p className="mt-4 text-base text-ink/60">{faq.sub}</p>
      </div>

      <div className="mt-10 divide-y divide-ink/10 overflow-hidden rounded-2xl border border-ink/10 bg-white shadow-card">
        {faq.items.map((item) => (
          <details key={item.q} className="group">
            <summary className="flex cursor-pointer list-none items-start justify-between gap-4 p-6 text-left font-display text-base font-bold tracking-tight text-ink transition-colors hover:bg-bone/60 sm:text-lg [&::-webkit-details-marker]:hidden">
              {item.q}
              <Plus
                className="mt-0.5 h-5 w-5 shrink-0 text-chrome-deep transition-transform duration-200 group-open:rotate-45"
                aria-hidden="true"
              />
            </summary>
            <div className="px-6 pb-6 text-[15px] leading-relaxed text-ink/70">
              {item.a}
            </div>
          </details>
        ))}
      </div>
    </Section>
  );
}
