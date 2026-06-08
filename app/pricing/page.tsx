import type { Metadata } from "next";
import { FAQSection } from "@/components/landing/FAQSection";
import { FinalCTASection } from "@/components/landing/FinalCTASection";
import { LandingFooter } from "@/components/landing/LandingFooter";
import { LandingNavbar } from "@/components/landing/LandingNavbar";
import { PricingCards } from "@/components/landing/PricingCards";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Start using TrackerTree for free and upgrade later when your personal progress system grows.",
};

const pricingFaqs = [
  {
    question: "Can I use TrackerTree for free?",
    answer:
      "Yes. TrackerTree starts with a free plan for personal projects, routines, subtasks, basic budget tracking, and short stats history.",
  },
  {
    question: "When will premium launch?",
    answer:
      "Premium will launch when the free product has enough real usage to justify deeper limits, longer history, and advanced tracking.",
  },
  {
    question: "Will my data be deleted if I stay on free?",
    answer:
      "The free plan is intended to stay useful. If future limits change, they should be communicated clearly before they affect existing users.",
  },
  {
    question: "Can I cancel premium later?",
    answer:
      "When premium launches, cancellation details will be shown before checkout.",
  },
  {
    question: "Will there be student pricing?",
    answer:
      "Student-friendly pricing can be considered later, especially for users in the Philippines.",
  },
];

export default function PricingPage() {
  return (
    <>
      <LandingNavbar />
      <main className="bg-[var(--tt-light)] pt-28">
        <section className="py-16">
          <div className="tt-container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-5xl font-semibold tracking-[-0.04em] sm:text-6xl">
                Simple pricing for personal progress.
              </h1>
              <p className="mt-5 text-lg leading-8 text-[var(--tt-muted)]">
                Start free. Upgrade later only when you need more room for your
                goals, routines, and progress history.
              </p>
            </div>

            <div className="mx-auto mt-12 max-w-5xl">
              <PricingCards />
            </div>

            <div className="mx-auto mt-12 max-w-3xl divide-y divide-[var(--tt-border)] rounded-2xl border border-[var(--tt-border)] bg-white">
              {pricingFaqs.map((faq) => (
                <details key={faq.question} className="group p-6">
                  <summary className="cursor-pointer list-none text-base font-semibold">
                    <div className="flex items-center justify-between gap-4">
                      <span>{faq.question}</span>
                      <span className="text-xl text-[var(--tt-muted)] transition group-open:rotate-45">
                        +
                      </span>
                    </div>
                  </summary>
                  <p className="mt-4 text-sm leading-6 text-[var(--tt-muted)]">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <FinalCTASection />
      </main>
      <LandingFooter />
    </>
  );
}
