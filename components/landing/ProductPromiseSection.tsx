import { BarChart3, CheckCircle2, CircleDollarSign, Repeat2 } from "lucide-react";

const features = [
  {
    title: "Projects",
    copy: "Turn big goals into smaller subtasks.",
    icon: CheckCircle2,
  },
  {
    title: "Routines",
    copy: "Track the work you repeat every day, week, or month.",
    icon: Repeat2,
  },
  {
    title: "Budget",
    copy: "Connect each goal to planned, spent, saved, and recurring costs.",
    icon: CircleDollarSign,
  },
  {
    title: "Stats",
    copy: "See streaks, weekly progress, and simple completion insights.",
    icon: BarChart3,
  },
];

export function ProductPromiseSection() {
  return (
    <section className="bg-white py-20">
      <div className="tt-container">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
              A dashboard for progress, not just tasks.
            </h2>
            <p className="mt-5 text-lg leading-8 text-[var(--tt-muted)]">
              Plan the goal, break it down, track what it costs, and see your
              progress build over time.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-xl border border-[var(--tt-border)] bg-[var(--tt-light)] p-6"
              >
                <feature.icon className="h-6 w-6 text-[var(--tt-green)]" />
                <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
                <p className="mt-2 text-sm leading-6 text-[var(--tt-muted)]">
                  {feature.copy}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

