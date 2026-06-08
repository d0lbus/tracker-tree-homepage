import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { FocusRecoverySection } from "@/components/landing/FocusRecoverySection";
import { HeroSection } from "@/components/landing/HeroSection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { PersonalProgressLoopSection } from "@/components/landing/PersonalProgressLoopSection";
import { PricingPreviewSection } from "@/components/landing/PricingPreviewSection";
import { ScatteredSystemSection } from "@/components/landing/ScatteredSystemSection";
import { UseCasesSection } from "@/components/landing/UseCasesSection";
import { WhyDifferentSection } from "@/components/landing/WhyDifferentSection";

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <main>
        <HeroSection />
        <ScatteredSystemSection />
        <PersonalProgressLoopSection />
        <FocusRecoverySection />
        <WhyDifferentSection />
        <UseCasesSection />
        <PricingPreviewSection />
        <FAQSection />
        <FinalCTASection />
      </main>
      <LandingFooter />
    </>
  );
}
