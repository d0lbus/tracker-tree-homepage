import Link from "next/link";
import { Leaf } from "lucide-react";
import { siteConfig } from "@/lib/site";

const footerColumns = [
  {
    title: "Product",
    links: [
      { label: "Features", href: "/#features" },
      { label: "Focus Recovery", href: "/#focus-recovery" },
      { label: "Pricing", href: "/pricing" },
      { label: "Open App", href: siteConfig.appUrl },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "FAQ", href: "/#faq" },
      { label: "Support", href: `mailto:${siteConfig.supportEmail}` },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy Policy", href: "/privacy" },
      { label: "Terms and Conditions", href: "/terms" },
    ],
  },
];

export function LandingFooter() {
  return (
    <footer className="border-t border-[var(--tt-border)] bg-white">
      <div className="tt-container py-12">
        <div className="grid gap-10 lg:grid-cols-[1.4fr_2fr]">
          <div>
            <Link href="/" className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--tt-pale-green)]">
                <Leaf className="h-5 w-5 text-[var(--tt-green)]" />
              </span>
              <span className="font-semibold tracking-tight">TrackerTree</span>
            </Link>
            <p className="mt-4 max-w-sm text-sm leading-6 text-[var(--tt-muted)]">
              Personal progress dashboard for projects, routines, spending,
              and focus.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerColumns.map((column) => (
              <div key={column.title}>
                <h3 className="text-sm font-semibold">{column.title}</h3>
                <div className="mt-4 flex flex-col gap-3">
                  {column.links.map((link) => (
                    link.href.startsWith("/") ? (
                      <Link
                        key={link.label}
                        href={link.href}
                        className="text-sm text-[var(--tt-muted)] transition hover:text-[var(--tt-text)]"
                      >
                        {link.label}
                      </Link>
                    ) : (
                      <a
                        key={link.label}
                        href={link.href}
                        className="text-sm text-[var(--tt-muted)] transition hover:text-[var(--tt-text)]"
                      >
                        {link.label}
                      </a>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-[var(--tt-border)] pt-6 text-sm text-[var(--tt-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>� 2026 TrackerTree. All rights reserved.</p>
          <p>Built for personal progress, not corporate project management.</p>
        </div>
      </div>
    </footer>
  );
}
