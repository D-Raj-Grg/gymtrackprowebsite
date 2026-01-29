import { Header } from "@/components/sections/header";
import { Hero } from "@/components/sections/hero";
import { FeatureScroll } from "@/components/sections/feature-scroll";
import { BentoGrid } from "@/components/sections/bento-grid";
import { FeatureHighlight } from "@/components/sections/feature-highlight";
import { AppShowcase } from "@/components/sections/app-showcase";
import { Benefits } from "@/components/sections/benefits";
import { Testimonials } from "@/components/sections/testimonials";
import { Pricing } from "@/components/sections/pricing";
import { FAQ } from "@/components/sections/faq";
import { CTA } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <FeatureScroll />
        <BentoGrid />
        <FeatureHighlight />
        <AppShowcase />
        <Benefits />
        <Testimonials />
        <Pricing />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
