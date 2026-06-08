const pills = [
  "Projects",
  "Routines",
  "Subtasks",
  "Budget",
  "Streaks",
  "Focus Recovery",
];

export function PositioningStrip() {
  return (
    <section className="border-b border-[var(--tt-border)] bg-white">
      <div className="tt-container py-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-lg font-medium tracking-tight text-[var(--tt-text)]">
            One place for the goals, routines, progress, and costs you keep
            tracking in separate apps.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-2">
            {pills.map((pill) => (
              <span
                key={pill}
                className="rounded-lg border border-[var(--tt-border)] bg-[var(--tt-light)] px-3 py-2 text-sm font-medium text-[var(--tt-muted)]"
              >
                {pill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
