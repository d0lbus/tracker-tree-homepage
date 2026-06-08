import {
  BriefcaseBusiness,
  Clapperboard,
  Dumbbell,
  GraduationCap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type UseCase = {
  title: string;
  description: string;
  icon: LucideIcon;
  accentClass: string;
  iconWrapClass: string;
  label: string;
  setup: {
    type: string;
    value: string;
  }[];
  fit: string;
};

const useCases: UseCase[] = [
  {
    title: "Student",
    description:
      "Keep assignments, study sessions, deadlines, and school-related costs in one place.",
    icon: GraduationCap,
    accentClass: "bg-[var(--tt-pale-green)]",
    iconWrapClass: "bg-[#dcfce7] text-[#006d36]",
    label: "Academic progress",
    setup: [
      { type: "Project", value: "Final research paper" },
      { type: "Routine", value: "Study 1 hour daily" },
      { type: "Focus", value: "Finish literature review" },
    ],
    fit: "Useful when schoolwork, routines, and deadlines start overlapping.",
  },
  {
    title: "Creator",
    description:
      "Manage content ideas, publishing routines, and creative work without losing momentum.",
    icon: Clapperboard,
    accentClass: "bg-[var(--tt-pale-blue)]",
    iconWrapClass: "bg-[#dbeafe] text-[#0060ac]",
    label: "Content workflow",
    setup: [
      { type: "Project", value: "Launch YouTube channel" },
      { type: "Routine", value: "Upload every Saturday" },
      { type: "Focus", value: "Finish script draft" },
    ],
    fit: "Helpful when ideas, uploads, and production steps need a simple system.",
  },
  {
    title: "Freelancer",
    description:
      "Track personal goals, client deliverables, recurring admin work, and small costs.",
    icon: BriefcaseBusiness,
    accentClass: "bg-[var(--tt-pale-cream)]",
    iconWrapClass: "bg-[#fef3c7] text-[#795900]",
    label: "Independent work",
    setup: [
      { type: "Project", value: "Client website" },
      { type: "Routine", value: "Daily admin check" },
      { type: "Focus", value: "Complete homepage section" },
    ],
    fit: "Great when you want one dashboard for work tasks and personal progress.",
  },
  {
    title: "Fitness Beginner",
    description:
      "Track workouts, consistency, gym-related spending, and the next session to return to.",
    icon: Dumbbell,
    accentClass: "bg-[var(--tt-pale-yellow)]",
    iconWrapClass: "bg-[#fef3c7] text-[#795900]",
    label: "Health and routine",
    setup: [
      { type: "Project", value: "Build workout routine" },
      { type: "Routine", value: "Train 4 days a week" },
      { type: "Budget", value: "Gym membership" },
    ],
    fit: "Useful when progress depends on consistency, not just motivation.",
  },
];

export function UseCasesSection() {
  return (
    <section className="bg-[var(--tt-canvas-soft)] py-24">
      <div className="tt-container">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--tt-green)]">
            Who it works for
          </p>

          <h2 className="tt-section-title mt-4 text-4xl font-semibold sm:text-5xl lg:text-6xl">
            Built for personal progress,
            <br className="hidden sm:block" />
            not corporate project management.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-[var(--tt-muted)]">
            TrackerTree works best when your life has a mix of goals, repeated
            routines, and unfinished work you need to return to later.
          </p>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {useCases.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.title}
                className="overflow-hidden rounded-[1.5rem] border border-[var(--tt-border)] bg-white shadow-[0_8px_30px_rgba(0,0,0,0.04)]"
              >
                <div className={`${item.accentClass} border-b border-[var(--tt-border)] px-6 py-5`}>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex items-start gap-4">
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${item.iconWrapClass}`}
                      >
                        <Icon className="h-5 w-5" />
                      </div>

                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--tt-muted)]">
                          {item.label}
                        </p>
                        <h3 className="mt-1 text-2xl font-bold tracking-tight text-[var(--tt-ink)]">
                          {item.title}
                        </h3>
                      </div>
                    </div>
                  </div>

                  <p className="mt-4 max-w-xl text-sm leading-6 text-[var(--tt-muted)]">
                    {item.description}
                  </p>
                </div>

                <div className="p-6">
                  <div className="rounded-[1.25rem] bg-[var(--tt-canvas-soft)] p-4">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-[var(--tt-muted)]">
                      Typical setup
                    </p>

                    <div className="mt-4 space-y-3">
                      {item.setup.map((row) => (
                        <div
                          key={`${item.title}-${row.type}-${row.value}`}
                          className="flex flex-col gap-1 rounded-[1rem] bg-white px-4 py-3 ring-1 ring-[var(--tt-border)] sm:flex-row sm:items-center sm:justify-between"
                        >
                          <span className="text-xs font-bold uppercase tracking-[0.12em] text-[var(--tt-green)]">
                            {row.type}
                          </span>
                          <span className="text-sm font-semibold text-[var(--tt-ink)]">
                            {row.value}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 rounded-[1rem] border border-[var(--tt-border)] bg-white px-4 py-3">
                    <p className="text-sm leading-6 text-[var(--tt-muted)]">
                      <span className="font-semibold text-[var(--tt-ink)]">
                        Why it fits:
                      </span>{" "}
                      {item.fit}
                    </p>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
