import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { LandingButton } from "./LandingButton";
import { ProductMockup } from "./ProductMockup";

export function HeroSection() {
  return (
    <section className="tt-hero-canvas relative overflow-hidden pt-24 text-white">
      <div className="tt-grid-lines absolute inset-0 opacity-25" />

      <div className="absolute left-1/2 top-0 h-[34rem] w-[52rem] -translate-x-1/2 rounded-full bg-[var(--tt-super-violet)] opacity-18 blur-3xl" />
      <div className="absolute bottom-[-18rem] left-[-10rem] h-[34rem] w-[34rem] rounded-full bg-[var(--tt-green)] opacity-14 blur-3xl" />

      <div className="tt-container relative pb-16 pt-14 lg:pb-20">
        <div className="mx-auto max-w-5xl text-center">
          <h1 className="tt-display mx-auto max-w-5xl text-[4.2rem] font-semibold sm:text-[5.7rem] lg:text-[7.2rem]">
            Track goals.
            <br />
            Return focused.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/64 sm:text-xl">
            Plan projects and routines, track goal costs, and come back to the
            right next step after interruptions.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <LandingButton href={siteConfig.appUrl} variant="hero">
              Start tracking free
              <ArrowRight className="ml-2 h-4 w-4" />
            </LandingButton>

            <LandingButton href="/#how-it-works" variant="text">
              See how it works
            </LandingButton>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-7xl">
          <ProductMockup />
        </div>
      </div>
    </section>
  );
}
