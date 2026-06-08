import { FAQSection } from "@/components/landing/FAQSection";
import { FeatureGridSection } from "@/components/landing/FeatureGridSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { FocusRecoverySection } from "@/components/landing/FocusRecoverySection";
import { HeroSection } from "@/components/landing/HeroSection";
import { HowItWorksSection } from "@/components/landing/HowItWorksSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { PositioningStrip } from "@/components/landing/PositioningStrip";
import { PricingPreviewSection } from "@/components/landing/PricingPreviewSection";
import { ProblemSection } from "@/components/landing/ProblemSection";
import { ProductPromiseSection } from "@/components/landing/ProductPromiseSection";
import { ProductShowcaseSection } from "@/components/landing/ProductShowcaseSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <main>
        <HeroSection />
        <PositioningStrip />
        <ProblemSection />
        <ProductPromiseSection />
        <FocusRecoverySection />
        <ProductShowcaseSection />
        <FeatureGridSection />
        <HowItWorksSection />
        <UseCasesSection />
        <PricingPreviewSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <LandingFooter />
    </>
  );
}
