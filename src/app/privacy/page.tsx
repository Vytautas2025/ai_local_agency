import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Tier3Labs",
  description: "Tier3Labs Privacy Policy — how we collect, use, and protect your information.",
  robots: { index: false, follow: false },
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-dark-bg text-text-secondary">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="text-green-primary text-sm hover:underline mb-8 inline-block"
        >
          ← Back to home
        </Link>

        <h1 className="text-4xl font-extrabold text-white mb-4">Privacy Policy</h1>
        <p className="text-text-muted text-sm mb-12">Last updated: February 2026</p>

        <div className="space-y-10 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
            <p>
              When you contact us through our website, we collect the information you
              voluntarily provide — such as your name, email address, phone number, and
              business website. We do not collect any data without your direct input.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
            <p>We use the information you provide solely to:</p>
            <ul className="list-disc list-inside mt-2 space-y-1 text-text-muted">
              <li>Respond to your inquiry or audit request</li>
              <li>Deliver contracted services</li>
              <li>Send relevant updates (you may opt out at any time)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Data Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties.
              We may share data with trusted service providers (e.g., email delivery) who
              assist in our operations under strict confidentiality obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Cookies</h2>
            <p>
              Our website may use minimal cookies for analytics purposes (e.g., page
              views). No personally identifiable information is stored in cookies.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Data Retention</h2>
            <p>
              We retain your personal data only as long as necessary to fulfill the
              purposes outlined in this policy or as required by law.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Your Rights</h2>
            <p>
              You have the right to access, correct, or delete your personal data at any
              time. To exercise these rights, contact us at{" "}
              <a
                href="mailto:privacy@tier3labs.com"
                className="text-green-primary hover:underline"
              >
                privacy@tier3labs.com
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Changes to This Policy</h2>
            <p>
              We may update this policy from time to time. The &ldquo;last updated&rdquo; date
              at the top of this page will reflect any changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Contact</h2>
            <p>
              Questions about this policy? Reach us at{" "}
              <a
                href="mailto:privacy@tier3labs.com"
                className="text-green-primary hover:underline"
              >
                privacy@tier3labs.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
