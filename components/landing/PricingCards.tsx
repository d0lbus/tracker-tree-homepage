import { Check } from "lucide-react";
import { siteConfig } from "@/lib/site";
import { LandingButton } from "./LandingButton";

const freeFeatures = [
  "3 active projects",
  "3 active routines",
  "10 one-time tasks",
  "30 subtasks",
  "20 budget entries",
  "Basic reminders",
  "7-day stats history",
];

const premiumFeatures = [
  "Unlimited projects",
  "Unlimited routines",
  "Unlimited subtasks",
  "Unlimited budget entries",
  "Longer stats history",
  "Advanced reminders",
  "Custom categories",
  "Detailed weekly review",
];

export function PricingCards() {
  return (
    <div className="grid gap-5 lg:grid-cols-2">
      <div className="rounded-2xl border border-[var(--tt-border)] bg-white p-6 tt-soft-shadow">
        <p className="text-sm font-semibold text-[var(--tt-green)]">Free</p>
        <div className="mt-4 flex items-end gap-2">
          <span className="text-5xl font-semibold tracking-tight">?0</span>
          <span className="pb-2 text-sm text-[var(--tt-muted)]">to start</span>
        </div>
        <p className="mt-4 text-sm leading-6 text-[var(--tt-muted)]">
          For starting your personal progress system.
        </p>

        <div className="mt-6 space-y-3">
          {freeFeatures.map((feature) => (
            <div key={feature} className="flex gap-3 text-sm">
              <Check className="h-5 w-5 text-[var(--tt-green)]" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <LandingButton href={siteConfig.appUrl} className="mt-8 w-full">
          Start free
        </LandingButton>
      </div>

      <div className="rounded-2xl border border-[#b6d8c3] bg-[var(--tt-pale-green)] p-6">
        <p className="text-sm font-semibold text-[var(--tt-green)]">Premium</p>
        <div className="mt-4">
          <span className="text-4xl font-semibold tracking-tight">
            Coming later
          </span>
        </div>
        <p className="mt-4 text-sm leading-6 text-[var(--tt-muted)]">
          For users who need more projects, deeper stats, and advanced tracking.
        </p>

        <div className="mt-6 space-y-3">
          {premiumFeatures.map((feature) => (
            <div key={feature} className="flex gap-3 text-sm">
              <Check className="h-5 w-5 text-[var(--tt-green)]" />
              <span>{feature}</span>
            </div>
          ))}
        </div>

        <LandingButton href={siteConfig.appUrl} variant="dark" className="mt-8 w-full">
          Join free first
        </LandingButton>
      </div>
    </div>
  );
}

