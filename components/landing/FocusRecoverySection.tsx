import { PauseCircle, RotateCcw, ShieldCheck } from "lucide-react";

const cards = [
  {
    title: "Resume Where You Left Off",
    copy: "See your last active or paused task with the previous action, next step, progress, and saved note.",
    icon: RotateCcw,
  },
  {
    title: "Focus Stack",
    copy: "Keep your attention limited to three focus slots: main, secondary, and parked.",
    icon: ShieldCheck,
  },
  {
    title: "Save and Pause",
    copy: "When something interrupts you, save a quick note so your future self can restart faster.",
    icon: PauseCircle,
  },
];

export function FocusRecoverySection() {
  return (
    <section id="focus-recovery" className="bg-[var(--tt-light)] py-20">
      <div className="tt-container">
        <div className="rounded-2xl border border-[var(--tt-border)] bg-[var(--tt-pale-yellow)] p-6 sm:p-10 lg:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[var(--tt-green)]">
                Focus Recovery
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                Get interrupted. Come back without starting over.
              </h2>
              <p className="mt-5 text-lg leading-8 text-[var(--tt-muted)]">
                TrackerTree helps you remember what you were doing, where you
                stopped, and what to do next.
              </p>
              <p className="mt-5 text-sm font-medium text-[var(--tt-text)]">
                Designed for real days, not perfect routines.
              </p>
            </div>

            <div className="grid gap-4">
              {cards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-xl border border-[var(--tt-border)] bg-white p-6"
                >
                  <div className="flex gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-[var(--tt-pale-green)]">
                      <card.icon className="h-5 w-5 text-[var(--tt-green)]" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold">{card.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-[var(--tt-muted)]">
                        {card.copy}
                      </p>
                    </div>
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

