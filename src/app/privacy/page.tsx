import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | Tier3 Labs",
  description: "Tier3 Labs Privacy Policy — how we collect, use, and protect your information.",
  robots: { index: false, follow: false },
  alternates: {
    canonical: "https://www.tier3labs.co.uk/privacy",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Tier3Labs",
    url: "https://www.tier3labs.co.uk/privacy",
    title: "Privacy Policy | Tier3Labs",
    description:
      "How Tier3Labs collects, uses, and protects your information.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Tier3Labs — Dominate the Google Maps Top 3",
      },
    ],
  },
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
            <p className="text-xl font-bold text-white mb-3">1. Who We Are</p>
            <p>
              Tier3 Labs (&ldquo;Company&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo; or &ldquo;our&rdquo;) respects your privacy and is
              committed to protecting it through our compliance with this policy.
            </p>
            <p className="mt-3">
              This policy describes the types of information we may collect from you, or
              that you may provide, when you visit{" "}
              <span className="text-white">tier3labs.co.uk</span> (our
              &ldquo;Website&rdquo;) and our practices for collecting, using, maintaining,
              protecting, and disclosing that information.
            </p>
            <p className="mt-3">
              Please read this policy carefully. If you do not agree with our policies and
              practices, your choice is not to use our Website. By accessing or using our
              Website, you agree to this privacy policy. This policy may change from time
              to time; your continued use of our Website after we make changes is deemed
              acceptance of those changes, so please check the policy periodically for
              updates.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Children Under the Age of 13</h2>
            <p>
              Our Website is not intended for children under 13 years of age. No one
              under age 13 may provide any information to the Website. We do not knowingly
              collect personal information from children under 13. If you believe we might
              have any information from or about a child under 13, please contact us at{" "}
              <a href="mailto:legal@tier3labs.co.uk" className="text-green-primary hover:underline">
                legal@tier3labs.co.uk
              </a>
              .
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Information We Collect About You and How We Collect It</h2>
            <p>We collect several types of information from and about users of our Website, including:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-text-muted">
              <li>
                Information by which you may be personally identified, such as your name,
                e-mail address, phone number, and business website URL
                (&ldquo;personal information&rdquo;), which you provide voluntarily via our
                contact form.
              </li>
              <li>
                Information about your internet connection, the equipment you use to access
                our Website, and usage details collected automatically.
              </li>
            </ul>
            <p className="mt-4 font-semibold text-white">Information You Provide to Us</p>
            <p className="mt-2">
              The information we collect on or through our Website may include information
              you provide by filling in our contact or audit-request form, and records and
              copies of your correspondence (including e-mail addresses) if you contact us.
            </p>
            <p className="mt-4 font-semibold text-white">Information We Collect Through Automatic Data Collection Technologies</p>
            <p className="mt-2">
              As you navigate through and interact with our Website, we may use automatic
              data collection technologies (such as Google Analytics) to collect certain
              information about your equipment, browsing actions, and patterns, including:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-text-muted">
              <li>Details of your visits to our Website, including traffic data, location data, logs, and other communication data.</li>
              <li>Information about your computer and internet connection, including your IP address, operating system, and browser type.</li>
            </ul>
            <p className="mt-4">
              The information we collect automatically is statistical data and does not
              include personal information, but we may maintain it or associate it with
              personal information we collect in other ways or receive from third parties.
              It helps us improve our Website and deliver a better and more personalised
              service.
            </p>
            <p className="mt-4 font-semibold text-white">Cookies</p>
            <p className="mt-2">
              A cookie is a small file placed on the hard drive of your computer. We use
              cookies for analytics purposes through Google Analytics. You may refuse to
              accept browser cookies by activating the appropriate setting on your browser.
              However, if you do so, some parts of our Website may be inaccessible or not
              function properly.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. How We Use Your Information</h2>
            <p>We use information that we collect about you or that you provide to us, including any personal information:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-text-muted">
              <li>To present our Website and its contents to you.</li>
              <li>To respond to your enquiry or audit request.</li>
              <li>To provide you with information, products, or services that you request from us.</li>
              <li>To carry out our obligations and enforce our rights arising from any contracts entered into between you and us.</li>
              <li>To notify you about changes to our Website or any services we offer or provide through it.</li>
              <li>To improve customer experience and our Website.</li>
              <li>For any other purpose with your consent.</li>
            </ul>
            <p className="mt-4">
              Our lawful basis for processing your personal data is our legitimate interest
              in responding to enquiries and providing our services, and, where applicable,
              your consent.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Disclosure of Your Information</h2>
            <p>
              We may disclose aggregated information about our users that does not identify
              any individual, without restriction. We may disclose personal information
              that we collect or you provide as described in this privacy policy:
            </p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-text-muted">
              <li>
                To contractors, service providers, and other third parties we use to support
                our business (e.g., e-mail delivery services) who are bound by contractual
                obligations to keep personal information confidential and use it only for the
                purposes for which we disclose it to them.
              </li>
              <li>
                To a buyer or other successor in the event of a merger, divestiture,
                restructuring, reorganisation, dissolution, or other sale or transfer of some
                or all of Company assets.
              </li>
              <li>To comply with any court order, law, or legal process, including to respond to any government or regulatory request.</li>
              <li>To enforce or apply our terms of use and other agreements.</li>
              <li>If we believe disclosure is necessary or appropriate to protect the rights, property, or safety of Tier3 Labs, our customers, or others.</li>
            </ul>
            <p className="mt-4">
              We do not sell, trade, or otherwise transfer your personal information to
              outside third parties for their own marketing purposes.
            </p>
            <p className="mt-3">
              No mobile information will be shared with third parties or affiliates for
              marketing or promotional purposes. Text messaging originator opt-in data and
              consent will not be shared with any third parties.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Data Retention</h2>
            <p>
              We retain your personal data only as long as necessary to fulfil the purposes
              outlined in this policy, to provide our services, or as required by law. When
              your data is no longer required, we will securely delete or anonymise it.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Data Security</h2>
            <p>
              We have implemented measures designed to secure your personal information
              from accidental loss and from unauthorised access, use, alteration, and
              disclosure.
            </p>
            <p className="mt-3">
              Unfortunately, the transmission of information via the internet is not
              completely secure. Although we do our best to protect your personal
              information, we cannot guarantee the security of your personal information
              transmitted to our Website. Any transmission of personal information is at
              your own risk. We are not responsible for circumvention of any privacy
              settings or security measures contained on the Website.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Your Rights (UK GDPR)</h2>
            <p>Under UK data protection law, you have rights including:</p>
            <ul className="list-disc list-inside mt-3 space-y-2 text-text-muted">
              <li><span className="text-white">Right of access</span> — you have the right to ask us for copies of your personal data.</li>
              <li><span className="text-white">Right to rectification</span> — you have the right to ask us to correct personal data you think is inaccurate or incomplete.</li>
              <li><span className="text-white">Right to erasure</span> — you have the right to ask us to delete your personal data in certain circumstances.</li>
              <li><span className="text-white">Right to restriction of processing</span> — you have the right to ask us to restrict the processing of your data in certain circumstances.</li>
              <li><span className="text-white">Right to data portability</span> — you have the right to ask that we transfer your data to another organisation, or to you, in certain circumstances.</li>
              <li><span className="text-white">Right to object</span> — you have the right to object to the processing of your personal data in certain circumstances.</li>
            </ul>
            <p className="mt-4">
              To exercise any of these rights, please contact us at{" "}
              <a href="mailto:legal@tier3labs.co.uk" className="text-green-primary hover:underline">
                legal@tier3labs.co.uk
              </a>
              . You also have the right to make a complaint at any time to the Information
              Commissioner&rsquo;s Office (ICO), the UK supervisory authority for data
              protection issues (
              <a
                href="https://www.ico.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-primary hover:underline"
              >
                www.ico.org.uk
              </a>
              ).
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Third-Party Links</h2>
            <p>
              Our Website may contain links to third-party websites. This privacy policy
              applies only to our Website, so if you click a link to another website, you
              should read their privacy policy.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Changes to Our Privacy Policy</h2>
            <p>
              We have the discretion to update this privacy policy at any time. The
              &ldquo;last updated&rdquo; date at the top of this page will reflect any
              changes. You acknowledge and agree that it is your responsibility to review
              this privacy policy periodically and become aware of modifications. Your
              continued use of our Website after changes are posted constitutes your
              acceptance of those changes.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Contact Information</h2>
            <p>
              To ask questions or comment about this privacy policy and our privacy
              practices, contact us at{" "}
              <a href="mailto:legal@tier3labs.co.uk" className="text-green-primary hover:underline">
                legal@tier3labs.co.uk
              </a>
              .
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
