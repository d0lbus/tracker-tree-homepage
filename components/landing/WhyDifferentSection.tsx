import {
  BarChart3,
  CircleDollarSign,
  Clock3,
  ListChecks,
  RotateCcw,
  Sparkles,
} from "lucide-react";

const differentiators = [
  {
    title: "Progress, not pressure",
    copy: "See subtasks, streaks, and weekly improvement without turning the app into a scorecard.",
    icon: BarChart3,
    className: "bg-[var(--tt-pale-blue)]",
  },
  {
    title: "Costs beside goals",
    copy: "Track planned, spent, saved, and recurring costs where they actually matter.",
    icon: CircleDollarSign,
    className: "bg-[var(--tt-pale-cream)]",
  },
  {
    title: "A place to return",
    copy: "Save the last action, next step, pause note, and focus state before switching away.",
    icon: RotateCcw,
    className: "bg-[var(--tt-pale-green)]",
  },
];

export function WhyDifferentSection() {
  return (
    <section id="features" className="bg-[var(--tt-canvas-soft)] py-24">
      <div className="tt-container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--tt-green)]">
            What makes it different
          </p>

          <h2 className="tt-section-title mt-5 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Not a to-do list with nicer cards.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--tt-muted)]">
            TrackerTree is designed around improvement: what you are building,
            how consistent you are, how much it costs, and where to continue.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {differentiators.map((item) => (
            <article
              key={item.title}
              className={`${item.className} rounded-[1.5rem] border border-[var(--tt-border)] p-6`}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-[#006d36] shadow-sm">
                <item.icon className="h-6 w-6" />
              </div>

              <h3 className="mt-8 text-2xl font-semibold tracking-tight text-[var(--tt-ink)]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-6 text-[var(--tt-muted)]">
                {item.copy}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-5 grid gap-5 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="rounded-[1.5rem] border border-[var(--tt-border)] bg-white p-6 shadow-[0_8px_30px_rgba(0,0,0,0.04)]">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#dcfce7] text-[#006d36]">
                <ListChecks className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight text-[var(--tt-ink)]">
                  Built for personal systems, not team boards.
                </h3>

                <p className="mt-3 max-w-2xl text-sm leading-6 text-[var(--tt-muted)]">
                  Use it for a portfolio, workout routine, school project,
                  savings goal, content plan, or anything that needs progress
                  over time.
                </p>
              </div>
            </div>
          </div>

          <div className="rounded-[1.5rem] border border-[#b7d9be] bg-[#0e3030] p-6 text-white shadow-[0_8px_30px_rgba(0,0,0,0.08)]">
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-white/10 text-[#bfe8c9]">
                <Clock3 className="h-6 w-6" />
              </div>

              <div>
                <h3 className="text-2xl font-semibold tracking-tight">
                  Made for interrupted days.
                </h3>

                <p className="mt-3 text-sm leading-6 text-white/70">
                  Pause safely, save the next step, and return without
                  rebuilding the context in your head.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 flex max-w-xl items-center justify-center gap-3 rounded-full border border-[var(--tt-border)] bg-white px-5 py-3 text-center text-sm font-semibold text-[var(--tt-muted)] shadow-sm">
          <Sparkles className="h-4 w-4 text-[var(--tt-green)]" />
          Track what you are improving, not just what is unfinished.
        </div>
      </div>
    </section>
  );
}
