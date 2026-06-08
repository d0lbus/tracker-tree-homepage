import {
  ArrowRight,
  BarChart3,
  CalendarCheck,
  CheckCircle2,
  CircleDollarSign,
  Clock3,
  Layers3,
} from "lucide-react";

function MiniProgress({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between text-xs text-slate-500">
        <span>{label}</span>
        <span>{value}</span>
      </div>
      <div className="h-2 rounded-full bg-slate-100">
        <div
          className="h-2 rounded-full bg-[var(--tt-green)]"
          style={{ width: value }}
        />
      </div>
    </div>
  );
}

export function ProductMockup() {
  return (
    <div className="tt-card-shadow relative mx-auto w-full max-w-6xl rounded-2xl border border-white/12 bg-[#0e1e16] p-3">
      <div className="rounded-xl border border-white/10 bg-[#f7f9f4] p-4 sm:p-5 lg:p-6">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--tt-green)]">
              Today
            </p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight text-[var(--tt-text)]">
              Personal Dashboard
            </h3>
          </div>
          <div className="hidden rounded-lg border border-[var(--tt-border)] bg-white px-3 py-2 text-xs font-medium text-[var(--tt-muted)] sm:block">
            4-day streak
          </div>
        </div>

        <div className="grid gap-4 lg:grid-cols-[1.25fr_0.75fr]">
          <section className="rounded-xl border border-[var(--tt-border)] bg-white p-5">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-[var(--tt-pale-green)] px-3 py-1 text-xs font-semibold text-[var(--tt-green)]">
                  <Clock3 className="h-4 w-4" />
                  Resume Where You Left Off
                </div>
                <h4 className="text-2xl font-semibold tracking-tight">
                  Portfolio Website
                </h4>
                <p className="mt-2 max-w-xl text-sm leading-6 text-[var(--tt-muted)]">
                  Last action: finished homepage layout. Next step: connect the
                  contact form and prepare deployment.
                </p>
              </div>
              <a
                href="https://app.trackertree.com"
                className="inline-flex items-center gap-2 rounded-lg bg-[var(--tt-green)] px-4 py-2 text-sm font-semibold text-white"
              >
                Resume Focus
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {[
                ["Last action", "Homepage layout"],
                ["Next step", "Contact form"],
                ["Paused", "2h ago"],
              ].map(([label, value]) => (
                <div
                  key={label}
                  className="rounded-lg border border-[var(--tt-border)] bg-[#f9fbf7] p-3"
                >
                  <p className="text-xs text-[var(--tt-muted)]">{label}</p>
                  <p className="mt-1 text-sm font-semibold">{value}</p>
                </div>
              ))}
            </div>

            <div className="mt-6">
              <MiniProgress label="Project progress" value="68%" />
            </div>
          </section>

          <section className="grid gap-4">
            <div className="rounded-xl border border-[var(--tt-border)] bg-white p-5">
              <div className="flex items-center gap-2">
                <Layers3 className="h-5 w-5 text-[var(--tt-green)]" />
                <h4 className="font-semibold">Focus Stack</h4>
              </div>
              <div className="mt-4 space-y-3">
                {[
                  ["Main", "Portfolio Website"],
                  ["Secondary", "Workout Routine"],
                  ["Parked", "YouTube Launch"],
                ].map(([label, title]) => (
                  <div
                    key={label}
                    className="flex items-center justify-between rounded-lg border border-[var(--tt-border)] bg-[#f9fbf7] px-3 py-2"
                  >
                    <span className="text-xs font-medium text-[var(--tt-muted)]">
                      {label}
                    </span>
                    <span className="text-sm font-semibold">{title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              <div className="rounded-xl border border-[var(--tt-border)] bg-white p-5">
                <div className="flex items-center gap-2">
                  <CircleDollarSign className="h-5 w-5 text-[var(--tt-green)]" />
                  <h4 className="font-semibold">Budget</h4>
                </div>
                <p className="mt-3 text-2xl font-semibold">?2,000</p>
                <p className="text-sm text-[var(--tt-muted)]">
                  saved toward a ?5,000 goal
                </p>
              </div>

              <div className="rounded-xl border border-[var(--tt-border)] bg-white p-5">
                <div className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-[var(--tt-green)]" />
                  <h4 className="font-semibold">Weekly</h4>
                </div>
                <p className="mt-3 text-2xl font-semibold">14 done</p>
                <p className="text-sm text-[var(--tt-muted)]">
                  tasks completed this week
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {[
            ["Study Routine", "2 of 3 sessions", CalendarCheck],
            ["Research Draft", "5 subtasks left", CheckCircle2],
            ["Focus Timeline", "3 sessions today", Clock3],
          ].map(([title, subtitle, Icon]) => (
            <div
              key={String(title)}
              className="rounded-xl border border-[var(--tt-border)] bg-white p-4"
            >
              <Icon className="h-5 w-5 text-[var(--tt-green)]" />
              <h4 className="mt-3 font-semibold">{title}</h4>
              <p className="mt-1 text-sm text-[var(--tt-muted)]">{subtitle}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
