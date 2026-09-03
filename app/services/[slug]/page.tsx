import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PageHeader from "@/components/PageHeader";
import ServiceDetail from "@/components/ServiceDetail";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { site, getServiceBySlug } from "@/site.config";

type Params = { params: { slug: string } };

// Pre-render one static page per service slug.
export function generateStaticParams() {
  return site.services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: Params): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return {};
  const path = `/services/${service.slug}/`;
  const title = service.seoTitle;
  const description = service.seoDescription;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: site.seo.siteName,
      type: "website",
    },
  };
}

export default function ServiceDetailPage({ params }: Params) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();
  return (
    <>
      <JsonLd data={serviceSchema(service)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "Services", path: "/services/" },
          { name: service.title, path: `/services/${service.slug}/` },
        ])}
      />
      <PageHeader
        eyebrow={site.servicesPage.eyebrow}
        title={service.title}
        sub={service.description}
      />
      <ServiceDetail service={service} />
      <CtaBand />
    </>
  );
}
