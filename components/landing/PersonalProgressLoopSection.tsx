import {
  ArrowRight,
  CheckCircle2,
  CircleDollarSign,
  GitBranch,
  RotateCcw,
  Sprout,
} from "lucide-react";

const steps = [
  {
    title: "Create a goal",
    copy: "Start with a project, routine, or one-time task.",
    icon: Sprout,
  },
  {
    title: "Break it down",
    copy: "Add subtasks, schedules, costs, or reminders.",
    icon: GitBranch,
  },
  {
    title: "Track progress",
    copy: "Complete actions and watch progress update.",
    icon: CheckCircle2,
  },
  {
    title: "Return focused",
    copy: "Come back to the saved next step.",
    icon: RotateCcw,
  },
];

export function PersonalProgressLoopSection() {
  return (
    <section className="bg-white py-24">
      <div className="tt-container">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--tt-green)]">
              The product loop
            </p>

            <h2 className="tt-section-title mt-5 text-4xl font-semibold sm:text-5xl lg:text-6xl">
              Start with one goal. Keep it moving.
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[var(--tt-muted)]">
              TrackerTree is built around a simple loop: create the goal, break
              it down, complete actions, and return with the next step already
              clear.
            </p>

            <div className="mt-8 rounded-[1.5rem] bg-[var(--tt-pale-cream)] p-5">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-white text-[#006d36] shadow-sm">
                  <CircleDollarSign className="h-6 w-6" />
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-[var(--tt-ink)]">
                    Goal costs stay connected.
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--tt-muted)]">
                    Budget is not a separate spreadsheet. It belongs beside the
                    project or routine it supports.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[1.75rem] border border-[var(--tt-border)] bg-[var(--tt-canvas-soft)] p-5 shadow-[0_16px_50px_rgba(0,0,0,0.05)]">
            <div className="grid gap-4">
              {steps.map((step, index) => (
                <div
                  key={step.title}
                  className="relative rounded-[1.25rem] border border-[var(--tt-border)] bg-white p-5"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#dcfce7] text-[#006d36]">
                      <step.icon className="h-5 w-5" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-4">
                        <h3 className="text-xl font-semibold tracking-tight text-[var(--tt-ink)]">
                          {step.title}
                        </h3>

                        <span className="rounded-full bg-[var(--tt-canvas-soft)] px-3 py-1 text-xs font-bold text-[var(--tt-muted)]">
                          0{index + 1}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-[var(--tt-muted)]">
                        {step.copy}
                      </p>
                    </div>
                  </div>

                  {index < steps.length - 1 ? (
                    <div className="absolute -bottom-6 left-10 z-10 hidden h-8 w-8 items-center justify-center rounded-full border border-[var(--tt-border)] bg-white text-[var(--tt-green)] md:flex">
                      <ArrowRight className="h-4 w-4 rotate-90" />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
