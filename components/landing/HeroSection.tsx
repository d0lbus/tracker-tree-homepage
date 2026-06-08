import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { LandingButton } from "./LandingButton";
import { ProductMockup } from "./ProductMockup";

export function HeroSection() {
  return (
    <section className="tt-hero-bg relative overflow-hidden pb-20 pt-32 text-white sm:pt-36 lg:pb-28">
      <div className="tt-grid-overlay absolute inset-0 opacity-40" />

      <div className="tt-container relative">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mx-auto mb-6 inline-flex items-center rounded-lg border border-white/10 bg-white/8 px-3 py-1 text-sm font-medium text-white/80">
            Personal progress dashboard
          </div>

          <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl lg:text-7xl">
            Track your goals without losing your focus.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-white/70 sm:text-lg">
            Create projects, build routines, track goal-related spending, and
            resume exactly where you left off.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <LandingButton href={siteConfig.appUrl}>
              Start tracking free
              <ArrowRight className="ml-2 h-4 w-4" />
            </LandingButton>
            <LandingButton href="/#how-it-works" variant="secondary">
              See how it works
            </LandingButton>
          </div>

          <p className="mt-4 text-sm text-white/55">
            Free to start. No complicated setup.
          </p>
        </div>

        <div className="mt-14">
          <ProductMockup />
        </div>
      </div>
    </section>
  );
}
