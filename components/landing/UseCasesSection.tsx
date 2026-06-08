const useCases = [
  {
    title: "Student",
    copy: "Track school projects, study routines, deadlines, and printing costs.",
    setup: ["Project: Final research paper", "Routine: Study 1 hour daily", "Focus: Finish literature review"],
  },
  {
    title: "Creator",
    copy: "Plan content, upload routines, equipment costs, and weekly progress.",
    setup: ["Project: Launch YouTube channel", "Routine: Upload every Saturday", "Focus: Finish script draft"],
  },
  {
    title: "Freelancer",
    copy: "Track personal projects, client tasks, subscriptions, and recurring work.",
    setup: ["Project: Client website", "Routine: Daily admin check", "Focus: Complete homepage section"],
  },
  {
    title: "Fitness Beginner",
    copy: "Track workouts, gym costs, supplements, and consistency.",
    setup: ["Project: Build workout routine", "Routine: Train 4 days a week", "Budget: Gym membership"],
  },
];

export function UseCasesSection() {
  return (
    <section className="bg-[var(--tt-light)] py-20">
      <div className="tt-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Built for personal progress, not corporate project management.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2">
          {useCases.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--tt-border)] bg-white p-6"
            >
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--tt-muted)]">
                {item.copy}
              </p>
              <div className="mt-5 space-y-2">
                {item.setup.map((line) => (
                  <div
                    key={line}
                    className="rounded-lg bg-[var(--tt-light)] px-3 py-2 text-sm font-medium text-[var(--tt-text)]"
                  >
                    {line}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
