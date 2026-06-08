import type { ReactNode } from "react";
import { LandingFooter } from "./LandingFooter";
import { LandingNavbar } from "./LandingNavbar";

type LegalSection = {
  title: string;
  body: ReactNode;
};

type LegalPageShellProps = {
  title: string;
  description: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export function LegalPageShell({
  title,
  description,
  lastUpdated,
  sections,
}: LegalPageShellProps) {
  return (
    <>
      <LandingNavbar />
      <main className="bg-[var(--tt-light)] pt-28">
        <section className="py-16">
          <div className="tt-container">
            <div className="mx-auto max-w-3xl">
              <div className="mb-8">
                <p className="text-sm font-semibold text-[var(--tt-green)]">
                  Last updated: {lastUpdated}
                </p>
                <h1 className="mt-3 text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
                  {title}
                </h1>
                <p className="mt-5 text-base leading-7 text-[var(--tt-muted)]">
                  {description}
                </p>
              </div>

              <article className="rounded-2xl border border-[var(--tt-border)] bg-white p-6 sm:p-10">
                <div className="space-y-10">
                  {sections.map((section, index) => (
                    <section key={section.title}>
                      <h2 className="text-xl font-semibold">
                        {index + 1}. {section.title}
                      </h2>
                      <div className="mt-3 text-sm leading-7 text-[var(--tt-muted)]">
                        {section.body}
                      </div>
                    </section>
                  ))}
                </div>
              </article>
            </div>
          </div>
        </section>
      </main>
      <LandingFooter />
    </>
  );
}

