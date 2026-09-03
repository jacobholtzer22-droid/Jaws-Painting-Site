import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import AboutSections from "@/components/AboutSections";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { site } from "@/site.config";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata("about");

export default function AboutPage() {
  const { about } = site;
  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Home", path: "/" },
          { name: "About", path: "/about/" },
        ])}
      />
      <PageHeader eyebrow={about.eyebrow} title={about.heading} />
      <AboutSections />
      <CtaBand />
    </>
  );
}
