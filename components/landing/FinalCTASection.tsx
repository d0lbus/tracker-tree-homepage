import { ArrowRight } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { LandingButton } from "./LandingButton";

export function FinalCTASection() {
  return (
    <section className="bg-white px-5 py-24">
      <div className="mx-auto max-w-6xl overflow-hidden rounded-2xl bg-[var(--tt-super-teal)] text-white">
        <div className="grid gap-8 p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr] lg:p-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/45">
              Start simple
            </p>
            <h2 className="tt-section-title mt-5 max-w-3xl text-5xl font-semibold sm:text-6xl">
              Grow your goals without losing your place.
            </h2>
          </div>

          <div className="flex flex-col justify-end">
            <p className="text-lg leading-8 text-white/68">
              Start with one project, one routine, or one goal you want to
              finally finish.
            </p>
            <div className="mt-8">
              <LandingButton href={siteConfig.appUrl} variant="light">
                Start your first goal
                <ArrowRight className="ml-2 h-4 w-4" />
              </LandingButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
