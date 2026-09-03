import Hero from "@/components/Hero";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import HowItWorks from "@/components/HowItWorks";
import Gallery from "@/components/Gallery";
import ServiceArea from "@/components/ServiceArea";
import CtaBand from "@/components/CtaBand";

// Home metadata is inherited from the layout default (seo.pages.home).
export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <WhyUs />
      <HowItWorks />
      <Gallery />
      <ServiceArea />
      <CtaBand />
    </>
  );
}
