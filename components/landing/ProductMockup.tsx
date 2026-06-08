import type { ReactNode } from "react";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Flame,
  FolderKanban,
  Layers3,
  Leaf,
  Plus,
  Target,
  Wallet,
} from "lucide-react";

function ProgressBar({
  value,
  tone = "primary",
}: {
  value: number;
  tone?: "primary" | "secondary" | "tertiary";
}) {
  const fill =
    tone === "secondary"
      ? "bg-[#0060ac]"
      : tone === "tertiary"
        ? "bg-[#795900]"
        : "bg-[#006d36]";

  return (
    <div className="h-2 overflow-hidden rounded-full bg-[#e5efe4]">
      <div
        className={`h-full rounded-full ${fill}`}
        style={{ width: `${value}%` }}
      />
    </div>
  );
}

function MiniButton({
  children,
  variant = "primary",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary";
}) {
  return (
    <div
      className={`inline-flex h-9 items-center justify-center gap-2 rounded-full px-4 text-[11px] font-bold ${
        variant === "primary"
          ? "bg-[#006d36] text-white shadow-[0_10px_24px_rgba(0,109,54,0.18)]"
          : "bg-[#dcfce7] text-[#006d36]"
      }`}
    >
      {children}
    </div>
  );
}

function TrackerCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <section
      className={`rounded-[1.5rem] border border-[rgba(188,202,187,0.55)] bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.04)] ${className}`}
    >
      {children}
    </section>
  );
}

function SectionHeading({
  eyebrow,
  title,
  icon,
  action,
}: {
  eyebrow?: string;
  title: string;
  icon: ReactNode;
  action?: string;
}) {
  return (
    <div className="mb-5 flex items-start justify-between gap-4">
      <div className="flex items-start gap-3">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#eff4ff] text-[#006d36]">
          {icon}
        </div>

        <div>
          {eyebrow ? (
            <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#006d36]">
              {eyebrow}
            </p>
          ) : null}

          <h3 className="text-xl font-bold leading-tight text-[#121c2a]">
            {title}
          </h3>
        </div>
      </div>

      {action ? (
        <div className="rounded-full bg-[#dcfce7] px-4 py-2 text-xs font-bold text-[#006d36]">
          {action}
        </div>
      ) : null}
    </div>
  );
}

function StatTile({
  label,
  value,
  tone = "primary",
}: {
  label: string;
  value: string;
  tone?: "primary" | "secondary" | "tertiary" | "danger";
}) {
  const color =
    tone === "secondary"
      ? "text-[#0060ac]"
      : tone === "tertiary"
        ? "text-[#795900]"
        : tone === "danger"
          ? "text-[#ba1a1a]"
          : "text-[#006d36]";

  return (
    <div className="rounded-[1.25rem] bg-white p-4 shadow-sm ring-1 ring-[#bccabb]">
      <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#3d4a3e]">
        {label}
      </p>
      <p className={`mt-2 text-2xl font-bold leading-none ${color}`}>
        {value}
      </p>
    </div>
  );
}

function FocusStackRow({
  label,
  title,
  next,
  value,
  tone = "primary",
}: {
  label: string;
  title: string;
  next: string;
  value: number;
  tone?: "primary" | "secondary" | "tertiary";
}) {
  const iconWrap =
    tone === "secondary"
      ? "bg-[#dbeafe] text-[#0060ac]"
      : tone === "tertiary"
        ? "bg-[#fef3c7] text-[#795900]"
        : "bg-[#dcfce7] text-[#006d36]";

  return (
    <div className="rounded-[1.35rem] border border-[#bccabb] bg-white px-4 py-3 shadow-sm">
      <div className="flex items-center gap-3">
        <div
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-[1rem] ${iconWrap}`}
        >
          <Target className="h-4 w-4" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-3">
            <div className="min-w-0">
              <p className="text-xs font-bold text-[#006d36]">{label}</p>
              <h4 className="mt-1 truncate text-base font-bold leading-tight text-[#121c2a]">
                {title}
              </h4>
              <p className="mt-1 truncate text-xs font-medium text-[#3d4a3e]">
                Next: {next}
              </p>
            </div>

            <ArrowUpRight className="h-4 w-4 shrink-0 text-[#3d4a3e]" />
          </div>

          <div className="mt-3 flex items-center gap-3">
            <div className="flex-1">
              <ProgressBar value={value} tone={tone} />
            </div>
            <span className="text-xs font-bold text-[#3d4a3e]">{value}%</span>
          </div>
        </div>

        <MiniButton variant="secondary">
          <Target className="h-4 w-4" />
          Start
        </MiniButton>
      </div>
    </div>
  );
}

export function ProductMockup() {
  return (
    <div className="relative rounded-[1.5rem] border border-white/12 bg-[#0f1011] p-2 shadow-[0_40px_120px_rgba(0,0,0,0.48)]">
      <div className="flex h-10 items-center gap-2 border-b border-white/10 px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-[#ff6b6b]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#ffd166]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#7bd88f]" />
        <div className="ml-4 h-5 flex-1 rounded-md border border-white/8 bg-black/20" />
      </div>

      <div className="rounded-b-[1.25rem] bg-[#f8f9ff] p-4 sm:p-5">
        <div className="grid gap-4">
          <div className="grid gap-4 xl:grid-cols-[1fr_0.9fr]">
            <TrackerCard className="relative overflow-hidden p-6">
              <div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-[#dcfce7] opacity-70 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex w-fit items-center gap-2 rounded-full border border-[#bccabb] bg-white/90 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#006d36] shadow-sm">
                  <Leaf className="h-4 w-4" />
                  Monday, June 8
                </div>

                <h2 className="max-w-xl text-4xl font-bold leading-[1.03] tracking-tight text-[#121c2a]">
                  Good morning, Alex
                </h2>

                <p className="mt-4 text-sm font-semibold leading-6 text-[#3d4a3e]">
                  4 goals active · 2 routines scheduled · 5 wins today
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <MiniButton>
                    <Target className="h-4 w-4" />
                    Start Focus
                  </MiniButton>

                  <MiniButton variant="secondary">
                    <Plus className="h-4 w-4" />
                    Add Goal
                  </MiniButton>
                </div>
              </div>
            </TrackerCard>

            <TrackerCard className="relative overflow-hidden p-6">
              <div className="absolute -left-16 -bottom-16 h-44 w-44 rounded-full bg-[#dcfce7] opacity-70 blur-3xl" />
              <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-[#dbeafe] opacity-45 blur-3xl" />

              <div className="relative">
                <div className="mb-5 flex items-center gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#dcfce7] text-[#006d36]">
                    <Leaf className="h-5 w-5" />
                  </div>

                  <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#006d36]">
                    Progress Overview
                  </p>
                </div>

                <div className="grid gap-5 lg:grid-cols-[12rem_1fr] lg:items-center">
                  <div className="flex flex-col items-center justify-center rounded-[1.75rem] bg-[linear-gradient(135deg,rgba(220,252,231,0.45),rgba(255,255,255,0.84))] px-4 py-5 text-center">
                    <div
                      className="flex h-36 w-36 items-center justify-center rounded-full p-2"
                      style={{
                        background:
                          "conic-gradient(#006d36 252deg, rgba(22,101,52,0.12) 0deg)",
                      }}
                    >
                      <div className="flex h-full w-full flex-col items-center justify-center rounded-full bg-white/95 shadow-[inset_0_0_24px_rgba(22,101,52,0.06)]">
                        <p className="text-4xl font-bold leading-none text-[#006d36]">
                          70%
                        </p>
                        <p className="mt-2 text-xs font-bold text-[#3d4a3e]">
                          Weekly progress
                        </p>
                      </div>
                    </div>

                    <div className="mt-4 rounded-full bg-white px-4 py-2 text-xs font-bold text-[#006d36] shadow-sm ring-1 ring-[#bccabb]">
                      On track
                    </div>
                  </div>

                  <div className="border-t border-[#bccabb] pt-5 lg:border-l lg:border-t-0 lg:pl-6 lg:pt-0">
                    <div className="pb-5">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#fef3c7] text-[#795900] shadow-sm">
                          <Flame className="h-6 w-6" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3d4a3e]">
                            Streak
                          </p>

                          <div className="mt-1 flex items-baseline gap-3">
                            <p className="text-4xl font-bold leading-none text-[#795900]">
                              5
                            </p>
                            <p className="truncate text-base font-bold text-[#121c2a]">
                              Days consistent
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3">
                        <ProgressBar value={71} tone="tertiary" />
                      </div>

                      <p className="mt-2 text-xs font-semibold text-[#3d4a3e]">
                        5 of 7 days this week.
                      </p>
                    </div>

                    <div className="border-t border-dashed border-[#bccabb]" />

                    <div className="pt-5">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#dbeafe] text-[#0060ac] shadow-sm">
                          <Wallet className="h-6 w-6" />
                        </div>

                        <div className="min-w-0 flex-1">
                          <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#3d4a3e]">
                            Goal Costs
                          </p>

                          <div className="mt-1 flex items-baseline gap-3">
                            <p className="text-4xl font-bold leading-none text-[#0060ac]">
                              42%
                            </p>
                            <p className="truncate text-base font-bold text-[#121c2a]">
                              Used
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-3">
                        <ProgressBar value={42} tone="secondary" />
                      </div>

                      <p className="mt-2 text-xs font-semibold text-[#3d4a3e]">
                        Spending is still below plan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TrackerCard>
          </div>

          <TrackerCard>
            <div className="grid gap-5 lg:grid-cols-[1fr_auto] lg:items-center">
              <div>
                <div className="mb-3 flex flex-wrap items-center gap-2">
                  <span className="rounded-full bg-[#dcfce7] px-3 py-1 text-xs font-bold text-[#006d36]">
                    Current Focus
                  </span>

                  <span className="rounded-full bg-[#eff4ff] px-3 py-1 text-xs font-bold text-[#3d4a3e]">
                    Main Focus
                  </span>
                </div>

                <h2 className="text-2xl font-bold leading-tight text-[#121c2a] md:text-3xl">
                  Build a portfolio website
                </h2>

                <p className="mt-2 text-sm font-semibold leading-6 text-[#3d4a3e]">
                  Next: publish the homepage, connect the contact form, and
                  review the final copy.
                </p>

                <div className="mt-4">
                  <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-[#3d4a3e]">
                    <span>Project · Career Growth</span>
                    <span>4/6</span>
                  </div>

                  <ProgressBar value={67} />
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
                <MiniButton>
                  <Target className="h-4 w-4" />
                  Resume
                </MiniButton>

                <MiniButton variant="secondary">
                  <FolderKanban className="h-4 w-4" />
                  Details
                </MiniButton>
              </div>
            </div>
          </TrackerCard>

          <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
            <TrackerCard>
              <SectionHeading
                eyebrow="Next Actions"
                title="Today Board"
                icon={<Target className="h-5 w-5" />}
                action="Open Focus"
              />

              <div className="mb-5 grid gap-2 sm:grid-cols-3">
                <div className="rounded-full bg-[#eff4ff] px-4 py-2 text-center text-xs font-bold text-[#3d4a3e]">
                  Projects 2
                </div>
                <div className="rounded-full bg-[#006d36] px-4 py-2 text-center text-xs font-bold text-white">
                  Quick Tasks 1
                </div>
                <div className="rounded-full bg-[#eff4ff] px-4 py-2 text-center text-xs font-bold text-[#3d4a3e]">
                  Routines 2
                </div>
              </div>

              <div className="rounded-[1.35rem] bg-white p-4 shadow-sm ring-1 ring-[#bccabb]">
                <div className="mb-3 flex items-start justify-between gap-3">
                  <div>
                    <h4 className="font-bold text-[#121c2a]">
                      Write the homepage intro
                    </h4>
                    <p className="mt-1 text-xs font-semibold text-[#3d4a3e]">
                      Small task · should take 20 minutes
                    </p>
                  </div>

                  <ArrowUpRight className="h-4 w-4 text-[#3d4a3e]" />
                </div>

                <div>
                  <div className="mb-2 flex items-center justify-between text-xs font-bold uppercase tracking-[0.14em] text-[#3d4a3e]">
                    <span>Progress</span>
                    <span>75%</span>
                  </div>
                  <ProgressBar value={75} />
                </div>

                <div className="mt-4">
                  <MiniButton variant="secondary">
                    <Target className="h-4 w-4" />
                    Start
                  </MiniButton>
                </div>
              </div>
            </TrackerCard>

            <TrackerCard>
              <SectionHeading
                title="Focus Stack"
                icon={<Layers3 className="h-5 w-5" />}
                action="Manage"
              />

              <div className="mb-4 flex flex-wrap items-center gap-3 border-b border-[#bccabb] pb-3 text-sm font-medium text-[#3d4a3e]">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#006d36]" />
                  <span>3 / 3 active</span>
                </div>

                <span>·</span>

                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0060ac]" />
                  <span>0 open</span>
                </div>

                <span>·</span>

                <span>Limit: 3</span>
              </div>

              <div className="space-y-3">
                <FocusStackRow
                  label="Main Focus"
                  title="Portfolio Website"
                  next="Publish homepage"
                  value={67}
                />

                <FocusStackRow
                  label="Secondary Focus"
                  title="Workout Routine"
                  next="Complete upper body day"
                  value={50}
                  tone="secondary"
                />

                <FocusStackRow
                  label="Parked Focus"
                  title="Content Calendar"
                  next="Plan next 3 posts"
                  value={20}
                  tone="tertiary"
                />
              </div>
            </TrackerCard>
          </div>

          <div className="grid gap-4 lg:grid-cols-[0.9fr_1.1fr]">
            <TrackerCard>
              <SectionHeading
                eyebrow="Goal Costs"
                title="Budget Snapshot"
                icon={<Wallet className="h-5 w-5" />}
                action="Budget"
              />

              <div className="rounded-[1.5rem] bg-[#eff4ff] p-5">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#3d4a3e]">
                      Used
                    </p>

                    <p className="mt-2 text-4xl font-bold text-[#121c2a]">
                      42%
                    </p>
                  </div>

                  <div className="text-right">
                    <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#3d4a3e]">
                      Planned
                    </p>

                    <p className="mt-2 text-xl font-bold text-[#006d36]">
                      PHP 4,000
                    </p>
                  </div>
                </div>

                <ProgressBar value={42} />
              </div>

              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <StatTile label="Spent" value="PHP 1,700" tone="danger" />
                <StatTile label="Pending" value="PHP 500" tone="tertiary" />
                <StatTile label="Remaining" value="PHP 2,300" />
                <StatTile label="Monthly" value="PHP 299" tone="secondary" />
              </div>
            </TrackerCard>

            <TrackerCard>
              <SectionHeading
                eyebrow="Focus History"
                title="Today’s focus activity"
                icon={<Clock3 className="h-5 w-5" />}
                action="View history"
              />

              <div className="mb-4 grid gap-3 sm:grid-cols-3">
                <StatTile label="Events" value="5" />
                <StatTile label="Pauses" value="1" tone="tertiary" />
                <StatTile label="Switches" value="0" tone="secondary" />
              </div>

              <div className="space-y-3">
                {[
                  ["Resumed focus", "Portfolio Website · Homepage copy"],
                  ["Saved pause note", "Return to contact form setup"],
                  ["Completed action", "Workout Routine · Upper body day"],
                ].map(([title, description]) => (
                  <div
                    key={`${title}-${description}`}
                    className="flex items-start gap-3 rounded-[1.25rem] bg-[#eff4ff] p-3"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#dcfce7] text-[#006d36]">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex flex-wrap gap-2">
                        <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-[#3d4a3e] shadow-sm">
                          Today
                        </span>

                        <span className="rounded-full bg-white px-2.5 py-1 text-[11px] font-bold text-[#3d4a3e] shadow-sm">
                          Logged
                        </span>
                      </div>

                      <p className="truncate text-sm font-bold text-[#121c2a]">
                        {title}
                      </p>

                      <p className="mt-1 truncate text-xs font-medium text-[#3d4a3e]">
                        {description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </TrackerCard>
          </div>
        </div>
      </div>
    </div>
  );
}
