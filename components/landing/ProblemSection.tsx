import { CircleDollarSign, Focus, ListTodo, Repeat2 } from "lucide-react";

const problems = [
  {
    title: "Tasks",
    copy: "You know what to do, but not always what comes next.",
    icon: ListTodo,
  },
  {
    title: "Routines",
    copy: "Repeated work gets forgotten when life gets busy.",
    icon: Repeat2,
  },
  {
    title: "Budget",
    copy: "Goal-related costs are easy to ignore until they pile up.",
    icon: CircleDollarSign,
  },
  {
    title: "Focus",
    copy: "After an interruption, restarting takes more energy than it should.",
    icon: Focus,
  },
];

export function ProblemSection() {
  return (
    <section className="bg-[var(--tt-light)] py-20">
      <div className="tt-container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-4xl font-semibold tracking-[-0.03em] sm:text-5xl">
            Your goals are not the problem. The scattered system is.
          </h2>
          <p className="mt-5 text-base leading-7 text-[var(--tt-muted)] sm:text-lg">
            Tasks end up in one app. Habits live somewhere else. Budget notes
            stay in a spreadsheet. Then you get interrupted and forget where
            you stopped.
          </p>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {problems.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-[var(--tt-border)] bg-white p-6 tt-soft-shadow"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[var(--tt-pale-green)]">
                <item.icon className="h-5 w-5 text-[var(--tt-green)]" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[var(--tt-muted)]">
                {item.copy}
              </p>
            </div>
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-center text-lg font-medium text-[var(--tt-text)]">
          TrackerTree connects the pieces into one personal progress dashboard.
        </p>
      </div>
    </section>
  );
}
