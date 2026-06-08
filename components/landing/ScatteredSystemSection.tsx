import {
  AlarmClock,
  ArrowRight,
  BarChart3,
  CircleDollarSign,
  FileText,
  ListTodo,
  Repeat2,
  Target,
} from "lucide-react";

const scatteredItems = [
  {
    title: "Tasks",
    copy: "What needs to be done.",
    icon: ListTodo,
  },
  {
    title: "Habits",
    copy: "What needs to repeat.",
    icon: Repeat2,
  },
  {
    title: "Budget",
    copy: "What the goal costs.",
    icon: CircleDollarSign,
  },
  {
    title: "Notes",
    copy: "Where you stopped.",
    icon: FileText,
  },
];

const connectedItems = [
  {
    title: "Today’s next action",
    copy: "Know exactly what to continue.",
    icon: Target,
  },
  {
    title: "Routine progress",
    copy: "See consistency without pressure.",
    icon: AlarmClock,
  },
  {
    title: "Goal costs",
    copy: "Track spending beside the goal.",
    icon: CircleDollarSign,
  },
  {
    title: "Progress history",
    copy: "Watch improvement build over time.",
    icon: BarChart3,
  },
];

export function ScatteredSystemSection() {
  return (
    <section className="bg-[var(--tt-canvas-soft)] py-24">
      <div className="tt-container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--tt-green)]">
            The real problem
          </p>

          <h2 className="tt-section-title mt-5 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Your goals are scattered across too many places.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--tt-muted)]">
            TrackerTree brings tasks, routines, goal costs, progress, and focus
            notes into one personal dashboard.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-[1fr_auto_1fr] lg:items-center">
          <div className="rounded-[1.5rem] border border-[var(--tt-border)] bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[var(--tt-muted)]">
              Before TrackerTree
            </p>

            <div className="grid gap-3">
              {scatteredItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-[1rem] bg-[var(--tt-canvas-soft)] p-4"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[var(--tt-green)] ring-1 ring-[var(--tt-border)]">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[var(--tt-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--tt-muted)]">
                      {item.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden h-14 w-14 items-center justify-center rounded-full bg-[var(--tt-green)] text-white shadow-[0_16px_40px_rgba(47,143,91,0.25)] lg:flex">
            <ArrowRight className="h-6 w-6" />
          </div>

          <div className="rounded-[1.5rem] border border-[#b7d9be] bg-[var(--tt-pale-green)] p-5 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-[#006d36]">
              Inside TrackerTree
            </p>

            <div className="grid gap-3">
              {connectedItems.map((item) => (
                <div
                  key={item.title}
                  className="flex items-center gap-4 rounded-[1rem] bg-white p-4 shadow-sm"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#dcfce7] text-[#006d36]">
                    <item.icon className="h-5 w-5" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-[var(--tt-ink)]">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-[var(--tt-muted)]">
                      {item.copy}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
