const panels = [
  {
    tab: "Dashboard",
    title: "Today’s work, active projects, and the focus you can return to.",
    points: ["Resume card", "Today tasks", "Progress cards"],
  },
  {
    tab: "Focus Stack",
    title: "Limit your attention to main, secondary, and parked work.",
    points: ["Main Focus", "Secondary Focus", "Parked Focus"],
  },
  {
    tab: "Budget",
    title: "Keep goal costs visible without turning it into accounting.",
    points: ["Planned", "Spent", "Recurring"],
  },
  {
    tab: "Stats",
    title: "See progress, streaks, and where your attention went.",
    points: ["Weekly completion", "Streaks", "Focus timeline"],
  },
];

export function ProductShowcaseSection() {
  return (
    <section className="bg-white py-20">
      <div className="tt-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Everything important stays visible.
          </h2>
          <p className="mt-5 text-lg leading-8 text-[var(--tt-muted)]">
            Your dashboard shows today’s work, active projects, routine
            progress, goal costs, and the focus you can return to.
          </p>
        </div>

        <div className="mt-12 rounded-2xl border border-[#21382c] bg-[#06130e] p-4 sm:p-6">
          <div className="grid gap-4 md:grid-cols-2">
            {panels.map((panel) => (
              <div
                key={panel.tab}
                className="rounded-xl border border-white/10 bg-white/[0.04] p-6 text-white"
              >
                <span className="rounded-lg bg-white/10 px-3 py-1 text-xs font-semibold text-[#b7f3c8]">
                  {panel.tab}
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-tight">
                  {panel.title}
                </h3>
                <div className="mt-6 grid gap-3">
                  {panel.points.map((point) => (
                    <div
                      key={point}
                      className="rounded-lg border border-white/10 bg-white/8 px-4 py-3 text-sm text-white/75"
                    >
                      {point}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
