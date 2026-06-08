const faqs = [
  {
    question: "What makes TrackerTree different from a to-do list?",
    answer:
      "TrackerTree connects tasks with routines, progress, goal-related costs, and focus recovery. It is built to show what you are improving, not just what is unfinished.",
  },
  {
    question: "Can I use TrackerTree for habits?",
    answer:
      "Yes. Routines can be used for repeated work like studying, workouts, cleaning, saving, content creation, or weekly planning.",
  },
  {
    question: "Can I track expenses inside each goal?",
    answer:
      "Yes. TrackerTree lets you add planned, spent, saved, needed, and recurring costs to projects or routines.",
  },
  {
    question: "What is Focus Recovery?",
    answer:
      "Focus Recovery helps you return to a paused task by saving where you stopped, what you last did, and what your next step should be.",
  },
  {
    question: "Is TrackerTree free?",
    answer:
      "Yes. TrackerTree starts with a free plan. Premium features may be added later when the product has enough real usage.",
  },
  {
    question: "Is there a mobile app?",
    answer:
      "TrackerTree starts as a mobile-friendly web app. A native mobile app can come later if users need it.",
  },
];

export function FAQSection() {
  return (
    <section id="faq" className="bg-[var(--tt-light)] py-20">
      <div className="tt-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Questions before you start
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-3xl divide-y divide-[var(--tt-border)] rounded-2xl border border-[var(--tt-border)] bg-white">
          {faqs.map((faq) => (
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
  );
}
