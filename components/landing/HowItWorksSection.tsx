const steps = [
  {
    title: "Create a goal",
    copy: "Add a project, routine, or one-time task.",
  },
  {
    title: "Break it down",
    copy: "Add subtasks, budget details, and schedules.",
  },
  {
    title: "Track progress",
    copy: "Complete actions and watch your progress update.",
  },
  {
    title: "Return focused",
    copy: "Resume with the next step already clear.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="bg-white py-20">
      <div className="tt-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Start with one goal. Build from there.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="rounded-xl border border-[var(--tt-border)] bg-[var(--tt-light)] p-6"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[var(--tt-green)] text-sm font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="mt-5 text-xl font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--tt-muted)]">
                {step.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
