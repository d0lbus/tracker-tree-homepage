import type { ReactNode } from "react";
import {
  ArrowLeft,
  ArrowLeftRight,
  CheckCircle2,
  Clock3,
  FolderKanban,
  Layers3,
  Leaf,
  PauseCircle,
  PlayCircle,
  ShieldCheck,
  Target,
} from "lucide-react";

function AppButton({
  children,
  variant = "primary",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <div
      className={`inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-bold ${
        variant === "primary"
          ? "bg-[#006d36] text-white shadow-[0_10px_24px_rgba(0,109,54,0.18)]"
          : "bg-[#dcfce7] text-[#006d36]"
      }`}
    >
      {children}
    </div>
  );
}

function ProgressBar({ value }: { value: number }) {
  return (
    <div className="h-3 w-full overflow-hidden rounded-full bg-[#e5efe4]">
      <div
        className="h-full rounded-full bg-gradient-to-r from-[#006d36] to-[#4ade80]"
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function StatusPill({
  children,
  variant = "green",
}: {
  children: ReactNode;
  variant?: "green" | "blue";
}) {
  return (
    <span
      className={`rounded-full px-3 py-1 text-xs font-bold ${
        variant === "green"
          ? "bg-[#dcfce7] text-[#006d36]"
          : "bg-[#eff4ff] text-[#3d4a3e]"
      }`}
    >
      {children}
    </span>
  );
}

function StackStat() {
  return (
    <div className="rounded-[2rem] bg-[#eff4ff] p-5 lg:w-80">
      <div className="flex items-center gap-3">
        <div className="flex size-12 items-center justify-center rounded-full bg-white text-[#006d36] shadow-sm">
          <Leaf className="size-6" />
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#3d4a3e]">
            Stack
          </p>
          <p className="mt-1 text-2xl font-bold text-[#121c2a]">
            3/3 filled
          </p>
        </div>
      </div>

      <div className="mt-4 rounded-[1.25rem] bg-white p-3 shadow-sm">
        <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#3d4a3e]">
          Switches today
        </p>
        <p className="mt-1 text-xl font-bold text-[#006d36]">1</p>
      </div>

      <div className="mt-5">
        <AppButton variant="secondary">
          <Layers3 className="size-5" />
          Open Stack
        </AppButton>
      </div>
    </div>
  );
}

function SessionCard() {
  return (
    <aside className="rounded-[2rem] border border-[#bccabb] bg-white/80 p-5 shadow-sm">
      <div className="flex size-14 items-center justify-center rounded-full bg-[#dcfce7] text-[#006d36]">
        <Leaf className="size-7" />
      </div>

      <p className="mt-5 text-xs font-bold uppercase tracking-[0.18em] text-[#006d36]">
        Session
      </p>

      <h3 className="mt-3 text-2xl font-bold leading-tight text-[#121c2a]">
        Keep your place before switching.
      </h3>

      <div className="mt-5 space-y-3">
        <div className="rounded-[1.5rem] bg-[#eff4ff] p-4">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#3d4a3e]">
            Focused time
          </p>

          <div className="mt-2 flex items-center gap-2">
            <Clock3 className="size-5 text-[#006d36]" />
            <p className="text-2xl font-bold text-[#121c2a]">25:59</p>
          </div>

          <p className="mt-1 text-xs font-semibold text-[#3d4a3e]">
            Running
          </p>
        </div>

        <div className="rounded-[1.5rem] bg-[#dcfce7] p-4">
          <div className="flex items-start gap-3">
            <ShieldCheck className="mt-0.5 size-5 shrink-0 text-[#006d36]" />
            <p className="text-sm font-bold leading-6 text-[#006d36]">
              Pause before switching to save your current step.
            </p>
          </div>
        </div>
      </div>
    </aside>
  );
}

function FocusTimelineMini() {
  const rows = [
    ["9:00 AM", "Started focus"],
    ["9:28 AM", "Saved pause note"],
    ["10:10 AM", "Resumed focus"],
  ];

  return (
    <div className="rounded-[1.5rem] bg-white p-4 shadow-sm ring-1 ring-[#bccabb]">
      <div className="mb-4 flex items-center gap-2">
        <Clock3 className="size-5 text-[#006d36]" />
        <h4 className="font-bold text-[#121c2a]">Today’s focus activity</h4>
      </div>

      <div className="space-y-2">
        {rows.map(([time, title]) => (
          <div
            key={time}
            className="flex items-center gap-3 rounded-[1rem] bg-[#eff4ff] px-3 py-2"
          >
            <div className="flex size-7 items-center justify-center rounded-full bg-[#dcfce7] text-[#006d36]">
              <CheckCircle2 className="size-4" />
            </div>

            <div>
              <p className="text-[11px] font-bold text-[#3d4a3e]">{time}</p>
              <p className="text-xs font-bold text-[#121c2a]">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function FocusRecoverySection() {
  return (
    <section id="focus-recovery" className="bg-[var(--tt-canvas-soft)] py-24">
      <div className="tt-container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[var(--tt-green)]">
            Focus Recovery
          </p>

          <h2 className="tt-section-title mt-5 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            A calmer screen for the work you need to return to.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--tt-muted)]">
            Focus Mode keeps one branch visible, shows the next step clearly,
            and gives you a safe way to pause before switching.
          </p>
        </div>

        <div className="mt-14 rounded-[2rem] border border-[#bccabb] bg-[#f8f9ff] p-4 shadow-[0_30px_90px_rgba(41,40,39,0.12)] md:p-5">
          <div className="space-y-5">
            <section className="relative overflow-hidden rounded-[2.5rem] border border-[#bccabb] bg-white p-6 shadow-[0_20px_70px_rgba(15,23,42,0.06)] md:p-8">
              <div className="absolute -right-20 -top-24 size-72 rounded-full bg-[#dcfce7] opacity-80 blur-3xl" />

              <div className="relative flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div>
                  <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#eff4ff] px-4 py-2 text-sm font-bold text-[#3d4a3e]">
                    <ArrowLeft className="size-4" />
                    Back to Dashboard
                  </div>

                  <div className="mb-4 flex w-fit items-center gap-2 rounded-full border border-[#bccabb] bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#006d36] shadow-sm">
                    <Target className="size-4" />
                    Focus Mode
                  </div>

                  <h3 className="max-w-3xl text-4xl font-bold leading-tight tracking-tight text-[#121c2a] md:text-6xl">
                    Focus Mode
                  </h3>

                  <p className="mt-4 max-w-2xl text-base leading-7 text-[#3d4a3e]">
                    Work on one branch, pause safely, or switch without losing
                    your place.
                  </p>
                </div>

                <StackStat />
              </div>
            </section>

            <section className="relative overflow-hidden rounded-[2.5rem] border border-[#bccabb] bg-white p-6 shadow-[0_24px_80px_rgba(15,23,42,0.08)] md:p-10">
              <div className="absolute -right-24 -top-24 size-80 rounded-full bg-[#dcfce7] opacity-80 blur-3xl" />
              <div className="absolute -bottom-32 left-16 size-80 rounded-full bg-[#dbeafe] opacity-50 blur-3xl" />

              <div className="relative">
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex size-12 items-center justify-center rounded-full bg-[#dcfce7] text-[#006d36]">
                      <Target className="size-6" />
                    </div>

                    <div>
                      <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#006d36]">
                        Focus
                      </p>

                      <p className="mt-1 text-sm font-semibold text-[#3d4a3e]">
                        Project · Career Growth
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    <StatusPill>Active focus</StatusPill>
                    <StatusPill variant="blue">Active now</StatusPill>
                  </div>
                </div>

                <div className="grid gap-8 xl:grid-cols-[minmax(0,1fr)_320px] xl:items-start">
                  <div className="min-w-0">
                    <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-[#3d4a3e]">
                      Current branch
                    </p>

                    <h3 className="max-w-4xl text-4xl font-bold leading-tight tracking-tight text-[#121c2a] md:text-6xl">
                      Build a portfolio website
                    </h3>

                    <div className="mt-8 rounded-[2rem] bg-[#eff4ff] p-6 md:p-8">
                      <div className="flex flex-wrap items-center gap-2">
                        <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#006d36]">
                          Next step
                        </p>

                        <span className="rounded-full bg-white px-3 py-1 text-xs font-bold text-[#3d4a3e] shadow-sm">
                          Saved step
                        </span>
                      </div>

                      <h4 className="mt-3 text-3xl font-bold leading-tight text-[#121c2a] md:text-5xl">
                        Write the homepage intro.
                      </h4>

                      <p className="mt-5 text-sm font-semibold leading-7 text-[#3d4a3e]">
                        Last action: outlined the hero and decided the first
                        section should focus on trust.
                      </p>
                    </div>

                    <div className="mt-5 rounded-[1.75rem] bg-[#fef3c7] p-5">
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#795900]">
                        Resume note
                      </p>

                      <p className="mt-2 text-base leading-7 text-[#121c2a]">
                        Keep the copy simple. Explain the result first, then
                        show the proof in the product mockup.
                      </p>
                    </div>

                    <div className="mt-7">
                      <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-[0.16em] text-[#3d4a3e]">
                        <span>Branch progress</span>
                        <span>4/6 subtasks</span>
                      </div>

                      <ProgressBar value={67} />
                    </div>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                      <AppButton>
                        <PlayCircle className="size-5" />
                        Resume
                      </AppButton>

                      <AppButton variant="secondary">
                        <PauseCircle className="size-5" />
                        Pause
                      </AppButton>

                      <AppButton variant="secondary">
                        <CheckCircle2 className="size-5" />
                        Finish
                      </AppButton>

                      <AppButton variant="secondary">
                        <ArrowLeftRight className="size-5" />
                        Switch
                      </AppButton>

                      <AppButton variant="secondary">
                        <FolderKanban className="size-5" />
                        Task Details
                      </AppButton>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <SessionCard />
                    <FocusTimelineMini />
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
