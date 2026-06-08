import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { LandingButton } from "./LandingButton";

export function FinalCTASection() {
  return (
    <section className="bg-[var(--tt-light)] px-5 py-20">
      <div className="mx-auto max-w-6xl rounded-2xl bg-[var(--tt-final-green)] px-6 py-14 text-center text-white sm:px-10 lg:py-20">
        <h2 className="mx-auto max-w-3xl text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
          Grow your goals without losing your place.
        </h2>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/75 sm:text-lg">
          Start with one project, one routine, or one goal you want to finally
          finish.
        </p>
        <div className="mt-8">
          <LandingButton href={siteConfig.appUrl} variant="light">
            Start your first goal
            <ArrowRight className="ml-2 h-4 w-4" />
          </LandingButton>
        </div>
      </div>
    </section>
  );
}

