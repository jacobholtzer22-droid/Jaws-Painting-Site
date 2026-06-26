import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Section from "./Section";
import ServiceCard from "./ServiceCard";
import { site } from "@/site.config";

export default function Services() {
  return (
    <Section id="services" tone="bone">
      <div className="max-w-2xl">
        <p className="eyebrow mb-4 text-chrome-deep">{site.servicesPage.eyebrow}</p>
        <h2 className="h-display text-3xl text-ink sm:text-4xl">
          {site.servicesPage.heading}
        </h2>
        <p className="mt-4 text-base text-ink/60">{site.servicesPage.sub}</p>
      </div>

      <ul className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-3">
        {site.services.map((service) => (
          <li key={service.slug} className="flex">
            <ServiceCard service={service} />
          </li>
        ))}
      </ul>

      <div className="mt-10 flex flex-col gap-3 sm:flex-row">
        <Link href="/services/" className="btn-dark px-7 py-4 text-base">
          See all services
          <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
        <a href={site.cta.href} className="btn-primary px-7 py-4 text-base">
          {site.cta.label}
        </a>
      </div>
    </Section>
  );
}
