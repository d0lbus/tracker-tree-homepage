import type { Metadata } from "next";
import { LegalPageShell } from "@/components/landing/LegalPageShell";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how TrackerTree collects, uses, stores, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <LegalPageShell
      title="Privacy Policy"
      lastUpdated="June 8, 2026"
      description="This Privacy Policy explains what information TrackerTree collects, how it is used, and what choices you have when using the service."
      sections={[
        {
          title: "Introduction",
          body: (
            <p>
              TrackerTree is a personal progress dashboard for tracking
              projects, routines, subtasks, goal-related costs, progress,
              streaks, and focus recovery.
            </p>
          ),
        },
        {
          title: "Information we collect",
          body: (
            <div className="space-y-3">
              <p>
                We may collect information such as email address, display name
                if provided, timezone, country or region if provided, preferred
                currency, account information, and app activity created by you.
              </p>
              <p>
                App activity may include projects, routines, subtasks, budget
                entries, progress data, focus notes, and related app records.
              </p>
            </div>
          ),
        },
        {
          title: "Information we do not intentionally collect",
          body: (
            <p>
              TrackerTree does not require precise location, contact lists,
              health records, government IDs, or sensitive personal information
              to use the core app.
            </p>
          ),
        },
        {
          title: "How we use your information",
          body: (
            <p>
              We use your information to create and manage your account, save
              your progress data, show your dashboard, provide reminders and
              focus recovery information, improve reliability, respond to
              support requests, and maintain security.
            </p>
          ),
        },
        {
          title: "Goal, task, budget, and focus data",
          body: (
            <p>
              The content you add to TrackerTree belongs to your account. You
              are responsible for the information you choose to enter into the
              app.
            </p>
          ),
        },
        {
          title: "Cookies and analytics",
          body: (
            <p>
              TrackerTree may use cookies or similar technologies to keep you
              signed in, secure your session, understand basic usage, and
              improve the product. Analytics should be used to understand
              product usage patterns, not to sell personal data.
            </p>
          ),
        },
        {
          title: "How we store and protect data",
          body: (
            <p>
              TrackerTree uses secure third-party infrastructure providers for
              hosting, authentication, and database services. We use reasonable
              technical and organizational measures to protect your
              information.
            </p>
          ),
        },
        {
          title: "Sharing of information",
          body: (
            <p>
              We do not sell your personal information. We may share limited
              information only with service providers needed to operate
              TrackerTree, such as hosting, authentication, database, analytics,
              payment, or email providers.
            </p>
          ),
        },
        {
          title: "Data retention",
          body: (
            <p>
              We keep your account information and app data while your account
              is active or as needed to provide the service. Account deletion
              requests may be subject to legal, security, or operational
              requirements.
            </p>
          ),
        },
        {
          title: "Your choices and rights",
          body: (
            <p>
              You may update certain account information inside the app. You may
              also contact us to request access, correction, or deletion of your
              personal information, depending on applicable law and account
              requirements.
            </p>
          ),
        },
        {
          title: "Children’s privacy",
          body: (
            <p>
              TrackerTree is not intended for children under 13. We do not
              knowingly collect personal information from children under 13.
            </p>
          ),
        },
        {
          title: "Changes to this policy",
          body: (
            <p>
              We may update this Privacy Policy from time to time. When we make
              changes, we will update the “Last updated” date on this page.
            </p>
          ),
        },
        {
          title: "Contact",
          body: (
            <p>
              For privacy questions, contact us at{" "}
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
