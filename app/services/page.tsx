import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import ScrollReveal from "@/components/ScrollReveal";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("services");

export default function ServicesPage() {
  const { servicesPage, services } = site;
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
        ])}
      />
      <PageHeader
        eyebrow={servicesPage.eyebrow}
        title={servicesPage.heading}
        sub={servicesPage.sub}
      />
      <section className="bg-bone py-16 text-ink sm:py-20">
        <div className="container-page">
          <ScrollReveal
            as="ul"
            className="grid gap-px overflow-hidden rounded-2xl border border-ink/10 bg-ink/10 shadow-card sm:grid-cols-2 lg:grid-cols-3"
          >
            {services.map((service) => (
              <li key={service.slug} className="flex">
                <ServiceCard service={service} />
              </li>
            ))}
          </ScrollReveal>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
