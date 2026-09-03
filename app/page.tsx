import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import ServiceArea from "@/components/ServiceArea";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import {
  localBusinessSchema,
  organizationSchema,
  webSiteSchema,
  faqSchema,
} from "@/lib/schema";

// Home metadata is inherited from the layout default (seo.pages.home).
export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessSchema()} />
      <JsonLd data={organizationSchema()} />
      <JsonLd data={webSiteSchema()} />
      <JsonLd data={faqSchema()} />
      <Hero />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Gallery />
      <ServiceArea />
      <Faq />
      <CtaBand />
    </>
  );
}
