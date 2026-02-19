import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service | Tier3Labs",
  description: "Tier3Labs Terms of Service — the rules governing use of our website and services.",
  robots: { index: false, follow: false },
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-dark-bg text-text-secondary">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="text-green-primary text-sm hover:underline mb-8 inline-block"
        >
          ← Back to home
        </Link>

        <h1 className="text-4xl font-extrabold text-white mb-4">Terms of Service</h1>
        <p className="text-text-muted text-sm mb-12">Last updated: February 2026</p>

        <div className="space-y-10 text-base leading-relaxed">
          <section>
            <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
            <p>
              By accessing and using tier3labs.com, you agree to be bound by these Terms
              of Service. If you do not agree, please do not use this website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Services</h2>
            <p>
              Tier3Labs provides local SEO and AI search optimization services. Specific
              deliverables, timelines, and pricing are agreed upon in individual service
              agreements signed prior to engagement.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. No Guarantees</h2>
            <p>
              While we have a strong track record of results, search engine rankings are
              influenced by many factors outside our control. We do not guarantee specific
              ranking positions or traffic volumes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Intellectual Property</h2>
            <p>
              All content on this website — including text, graphics, and code — is the
              property of Tier3Labs and may not be reproduced without written permission.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Limitation of Liability</h2>
            <p>
              Tier3Labs shall not be liable for any indirect, incidental, or consequential
              damages arising from the use of our website or services beyond the amount
              paid for those services.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Governing Law</h2>
            <p>
              These terms are governed by the laws of the United States. Any disputes
              shall be resolved through binding arbitration.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Changes to Terms</h2>
            <p>
              We reserve the right to modify these terms at any time. Continued use of
              the website after changes constitutes acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Contact</h2>
            <p>
              Questions? Reach us at{" "}
              <a
                href="mailto:legal@tier3labs.com"
                className="text-green-primary hover:underline"
              >
                legal@tier3labs.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
