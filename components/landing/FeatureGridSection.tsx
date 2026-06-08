import {
  BarChart3,
  CircleDollarSign,
  GitBranch,
  Layers3,
  ListChecks,
  TimerReset,
} from "lucide-react";

const features = [
  {
    title: "Main Tasks",
    copy: "Create projects, routines, and one-time tasks.",
    icon: Layers3,
    tint: "bg-white",
  },
  {
    title: "Subtasks",
    copy: "Break large goals into clear next actions.",
    icon: GitBranch,
    tint: "bg-[var(--tt-pale-green)]",
  },
  {
    title: "Progress Bars",
    copy: "See how much is done without calculating it yourself.",
    icon: BarChart3,
    tint: "bg-[var(--tt-pale-blue)]",
  },
  {
    title: "Budget Tracking",
    copy: "Track planned, spent, saved, and recurring costs per goal.",
    icon: CircleDollarSign,
    tint: "bg-[var(--tt-pale-cream)]",
  },
  {
    title: "Streaks",
    copy: "Build consistency without turning progress into pressure.",
    icon: ListChecks,
    tint: "bg-[var(--tt-pale-yellow)]",
  },
  {
    title: "Focus Timeline",
    copy: "See where your attention went during the day.",
    icon: TimerReset,
    tint: "bg-white",
  },
];

export function FeatureGridSection() {
  return (
    <section id="features" className="bg-[var(--tt-light)] py-20">
      <div className="tt-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Everything your goal needs, connected.
          </h2>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className={`${feature.tint} rounded-xl border border-[var(--tt-border)] p-6`}
            >
              <feature.icon className="h-6 w-6 text-[var(--tt-green)]" />
              <h3 className="mt-5 text-xl font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--tt-muted)]">
                {feature.copy}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
