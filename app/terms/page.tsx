import type { Metadata } from "next";
import { LegalPageShell } from "@/components/landing/LegalPageShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read the terms that apply when using TrackerTree.",
};

export default function TermsPage() {
  return (
    <LegalPageShell
      title="Terms and Conditions"
      lastUpdated="June 8, 2026"
      description="These Terms and Conditions explain the basic rules for accessing and using TrackerTree."
      sections={[
        {
          title: "Acceptance of terms",
          body: (
            <p>
              By accessing or using TrackerTree, you agree to these Terms and
              Conditions. If you do not agree, please do not use the service.
            </p>
          ),
        },
        {
          title: "About TrackerTree",
          body: (
            <p>
              TrackerTree is a personal progress dashboard that helps users
              track projects, routines, subtasks, goal-related costs, progress,
              streaks, and focus recovery information.
            </p>
          ),
        },
        {
          title: "Accounts",
          body: (
            <p>
              You may need an account to use TrackerTree. You are responsible
              for keeping your login information secure and for all activity
              under your account.
            </p>
          ),
        },
        {
          title: "User content and responsibility",
          body: (
            <p>
              You are responsible for the goals, tasks, notes, budget entries,
              and other content you add to TrackerTree. You should not enter
              information that you do not have the right to store or information
              that is unsafe, unlawful, or harmful.
            </p>
          ),
        },
        {
          title: "Acceptable use",
          body: (
            <p>
              You agree not to misuse TrackerTree, attempt to access another
              user’s data, interfere with the service, upload harmful code, or
              use the service for unlawful activity.
            </p>
          ),
        },
        {
          title: "Free and premium features",
          body: (
            <p>
              TrackerTree may offer free and premium features. Free plan limits
              may apply to projects, routines, subtasks, budget entries,
              reminders, templates, and stats history.
            </p>
          ),
        },
        {
          title: "Payments and subscriptions",
          body: (
            <p>
              If premium features are offered, pricing, billing cycle, renewal,
              cancellation, and refund details will be shown before checkout.
              Payment processing may be handled by third-party payment
              providers.
            </p>
          ),
        },
        {
          title: "Service availability",
          body: (
            <p>
              We aim to keep TrackerTree available and reliable, but we do not
              guarantee that the service will always be uninterrupted,
              error-free, or available at all times.
            </p>
          ),
        },
        {
          title: "No professional advice",
          body: (
            <p>
              TrackerTree is a productivity and personal progress tool. It does
              not provide financial, legal, medical, mental health, or
              professional advice.
            </p>
          ),
        },
        {
          title: "Limitation of liability",
          body: (
            <p>
              To the maximum extent allowed by law, TrackerTree is provided as
              is and we are not liable for indirect, incidental, special, or
              consequential damages arising from use of the service.
            </p>
          ),
        },
        {
          title: "Account suspension or termination",
          body: (
            <p>
              We may suspend or terminate access if a user violates these terms,
              misuses the service, or creates security or legal risk.
            </p>
          ),
        },
        {
          title: "Changes to the service",
          body: (
            <p>
              TrackerTree may change, improve, limit, or discontinue parts of
              the service over time.
            </p>
          ),
        },
        {
          title: "Changes to these terms",
          body: (
            <p>
              We may update these Terms and Conditions from time to time. When
              we make changes, we will update the “Last updated” date on this
              page.
            </p>
          ),
        },
        {
          title: "Contact",
          body: (
            <p>
              For questions about these terms, contact us at{" "}
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="font-semibold text-[var(--tt-green)]"
              >
                {siteConfig.supportEmail}
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
