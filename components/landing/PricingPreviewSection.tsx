import { PricingCards } from "./PricingCards";

export function PricingPreviewSection() {
  return (
    <section id="pricing" className="bg-white py-20">
      <div className="tt-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Start free. Upgrade when your system grows.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--tt-muted)]">
            TrackerTree should be useful before it ever asks you to pay.
          </p>
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <PricingCards />
          <p className="mt-6 text-center text-sm text-[var(--tt-muted)]">
            Premium will only launch when the free product is useful enough to
            justify it.
          </p>
        </div>
      </div>
    </section>
  );
}
