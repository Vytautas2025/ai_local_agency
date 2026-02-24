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

        <h1 className="text-4xl font-extrabold text-white mb-4">Master Subscription Agreement</h1>
        <p className="text-text-muted text-sm mb-12">Last updated: 23 February 2026</p>

        <div className="space-y-10 text-base leading-relaxed">

          {/* 1 */}
          <section>
            <p className="text-xl font-bold text-white mb-3">1. Introduction</p>
            <p className="mb-3">
              Tier3 Labs Ltd (company number 15734938), registered in England &amp; Wales, whose
              registered address is 12 Old Mill Gardens, Berkhamsted, England, HP4 2NZ
              (&ldquo;Company&rdquo;, &ldquo;We&rdquo;, &ldquo;Us&rdquo;, or &ldquo;Our&rdquo;)
              provides its Services (as defined below) to you, the customer
              (&ldquo;Customer&rdquo;, &ldquo;You&rdquo;, or &ldquo;Your&rdquo;).
            </p>
            <p className="mb-3">
              Your use of the Services is subject to and governed by this Master Subscription
              Agreement (&ldquo;Agreement&rdquo;) and the terms of any Subscription Order Form
              (&ldquo;Order Form&rdquo;) that You entered into that specifically references this
              Agreement. The Agreement includes the Order Form.
            </p>
            <p className="mb-3">
              By accepting this Agreement — either by clicking a box indicating your acceptance or
              by executing an Order Form that references this Agreement — You agree to its terms.
              If you are entering into this Agreement on behalf of a company or other legal entity,
              you represent that you have the authority to bind such entity and its affiliates to
              these terms, in which case &ldquo;Customer&rdquo;, &ldquo;You&rdquo;, and
              &ldquo;Your&rdquo; shall refer to such entity and its affiliates. If you do not have
              such authority, or if You do not agree with these terms, You must not accept this
              Agreement and may not use the Services.
            </p>
            <p className="mb-3">
              We reserve the right to update and change the terms of this Agreement from time to
              time at our sole discretion. We will provide notice by updating this page, indicating
              the date of the update, and sending written notice to the email address associated
              with your account. Your continued use of the Services thirty (30) days after such
              notice shall constitute acceptance of the new terms.
            </p>
            <p>
              You may not access the Services if you are our direct competitor, except with our
              prior written consent, nor for the purposes of monitoring availability, performance,
              or functionality, or for any benchmarking or competitive purposes.
            </p>
          </section>

          {/* 2 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">2. Services and Support</h2>
            <p className="mb-3">
              <strong className="text-white">2.1</strong> The &ldquo;Services&rdquo; include Our
              website, software, and other services provided to You based on the plan purchased and
              indicated on the Order Form. Any new features added to or augmenting the Services are
              also subject to this Agreement. Certain new features made generally available at no
              cost to all subscribing customers will be provided to You at no additional charge;
              however, some new features may require the payment of additional fees, and Company
              will determine at its sole discretion whether any such new features require an
              additional fee.
            </p>
            <p className="mb-3">
              <strong className="text-white">2.2</strong> Subject to the terms of this Agreement,
              Company will use commercially reasonable efforts to provide Customer the Services.
              The Services encompass our proprietary AI search optimisation and local SEO systems,
              designed to enhance your business&apos;s online visibility across traditional and
              AI-powered search platforms.
            </p>
            <p className="mb-3">
              <strong className="text-white">2.3</strong> As part of the registration process, You
              may provide Us with login credentials or other administrative access to Your accounts
              so that We can provide the Services. We do not store, share, or otherwise distribute
              your credentials to any third parties and make no claims as to the ownership of such
              accounts.
            </p>
            <p className="mb-3">
              <strong className="text-white">2.4</strong> Company does not guarantee specific
              search ranking positions, traffic volumes, or other measurable outcomes. Search
              engine and AI platform algorithms are influenced by many factors outside of
              Company&apos;s control, and results will vary. Any projections or estimates provided
              by Company are illustrative only and do not constitute a warranty or guarantee.
            </p>
            <p>
              <strong className="text-white">2.5</strong> Subject to the terms hereof, Company
              will provide Customer with reasonable technical support services in accordance with
              Company&apos;s standard practice.
            </p>
          </section>

          {/* 3 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">3. Third-Party Services</h2>
            <p className="mb-3">
              <strong className="text-white">3.1</strong> The Services may involve connecting to
              and using third-party products, services, or software under separate terms and
              conditions (collectively, &ldquo;Third-Party Products&rdquo;) such as search
              platforms, analytics tools, or content management systems. Your use of any
              Third-Party Products is governed solely by their respective terms and conditions.
              We do not endorse, are not responsible for, and make no representations as to such
              Third-Party Products, their content, or the manner in which they handle Your data.
              Company is not liable for any damage or loss caused or alleged to be caused by or in
              connection with Your access or use of any Third-Party Products.
            </p>
            <p className="mb-3">
              <strong className="text-white">3.2</strong> Customer agrees that Company is not
              affiliated with any Third-Party Products or platforms in any way unless expressly
              stated.
            </p>
            <p>
              <strong className="text-white">3.3</strong> To take advantage of certain features,
              Customer may be required to provide Company with login credentials for Third-Party
              Products. By doing so, You authorise Company to use those credentials solely for the
              purposes of delivering the Services.
            </p>
          </section>

          {/* 4 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">4. Restrictions and Responsibilities</h2>
            <p className="mb-3">
              <strong className="text-white">4.1</strong> Customer will not, directly or
              indirectly: reverse engineer, decompile, disassemble, or otherwise attempt to
              discover the source code or underlying algorithms of the Services or any related
              software (&ldquo;Software&rdquo;); modify, translate, or create derivative works
              based on the Services or Software; use the Services for time-sharing or service
              bureau purposes for the benefit of a third party; or remove any proprietary notices
              or labels.
            </p>
            <p className="mb-3">
              <strong className="text-white">4.2</strong> Customer represents, covenants, and
              warrants that Customer will use the Services only in compliance with Company&apos;s
              standard published policies then in effect and all applicable laws and regulations,
              including but not limited to those of England &amp; Wales and the United Kingdom.
              Customer agrees to indemnify and hold harmless Company against any damages, losses,
              liabilities, settlements, and expenses (including costs and legal fees) in connection
              with any claim arising from Customer&apos;s use of the Services. Company may
              prohibit any use of the Services it believes is, or may be, in violation of
              applicable law or Company policy.
            </p>
            <p>
              <strong className="text-white">4.3</strong> Customer shall be responsible for
              obtaining and maintaining any equipment and ancillary services needed to connect to
              or otherwise use the Services, including hardware, software, networking, and web
              servers (collectively, &ldquo;Equipment&rdquo;). Customer shall also be responsible
              for maintaining the security of the Equipment, Customer account, and passwords, and
              for all uses of the Customer account with or without Customer&apos;s knowledge or
              consent.
            </p>
          </section>

          {/* 5 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">5. Confidentiality; Proprietary Rights</h2>
            <p className="mb-3">
              <strong className="text-white">5.1</strong> Each party (the &ldquo;Receiving
              Party&rdquo;) understands that the other party (the &ldquo;Disclosing Party&rdquo;)
              has disclosed or may disclose business, technical, or financial information
              (&ldquo;Proprietary Information&rdquo;). Proprietary Information of Company includes
              non-public information regarding features, functionality, and performance of the
              Services. Proprietary Information of Customer includes non-public data provided by
              Customer to Company to enable provision of the Services (&ldquo;Customer
              Data&rdquo;). The Receiving Party agrees: (i) to take reasonable precautions to
              protect such Proprietary Information; and (ii) not to use or divulge it to any third
              party except as permitted herein. The foregoing shall not apply to information that
              (a) is or becomes generally available to the public; (b) was already known to the
              Receiving Party; (c) was rightfully disclosed without restriction by a third party;
              (d) was independently developed without use of any Proprietary Information; or
              (e) is required to be disclosed by law or any competent regulatory authority.
            </p>
            <p className="mb-3">
              <strong className="text-white">5.2</strong> Customer shall own all right, title, and
              interest in and to the Customer Data. Company shall own and retain all right, title,
              and interest in and to (a) the Services and Software, all improvements, enhancements,
              or modifications thereto; (b) any software, applications, or other technology
              developed in connection with support; and (c) all intellectual property rights
              related to any of the foregoing.
            </p>
            <p>
              <strong className="text-white">5.3</strong> Notwithstanding anything to the
              contrary, Company shall have the right to collect and analyse data and information
              relating to the provision, use, and performance of the Services (including
              information concerning Customer Data) and will be free to (i) use such information
              to improve and enhance the Services; and (ii) disclose such data solely in aggregate
              or other de-identified form in connection with its business. No rights or licences
              are granted except as expressly set forth herein.
            </p>
          </section>

          {/* 6 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">6. Payment of Fees</h2>
            <p className="mb-3">
              <strong className="text-white">6.1</strong> Customer will pay Company the fees
              described in the Order Form (&ldquo;Fees&rdquo;). If Customer&apos;s use of the
              Services exceeds the service capacity set forth on the Order Form or otherwise
              requires additional fees, Customer shall be billed accordingly and agrees to pay
              such additional fees. Company reserves the right to change the Fees upon thirty (30)
              days&apos; prior notice to Customer. If Customer believes that Company has billed
              incorrectly, Customer must contact Company no later than 60 days after the closing
              date on the first billing statement in which the error appeared.
            </p>
            <p>
              <strong className="text-white">6.2</strong> Where Company bills by invoice, full
              payment must be received within thirty (30) days of the invoice date. Unpaid amounts
              are subject to statutory interest under the Late Payment of Commercial Debts (Interest)
              Act 1998 and any applicable late payment legislation, plus reasonable costs of
              collection, and may result in immediate suspension or termination of the Services.
              Customer shall be responsible for all taxes and duties associated with the Services,
              including UK value added tax (VAT) where applicable.
            </p>
          </section>

          {/* 7 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">7. Term and Termination</h2>
            <p className="mb-3">
              <strong className="text-white">7.1</strong> Subject to earlier termination as
              provided below, this Agreement is for the initial service term specified in the Order
              Form and shall be automatically renewed for additional periods of the same duration
              unless either party requests termination at least thirty (30) days prior to the end
              of the then-current term.
            </p>
            <p className="mb-3">
              <strong className="text-white">7.2</strong> Either party may terminate this
              Agreement upon thirty (30) days&apos; written notice (or without notice in the case
              of non-payment) if the other party materially breaches any term of this Agreement.
              Customer will pay in full for the Services up to and including the last day on which
              Services are provided. All sections which by their nature should survive termination
              will do so, including accrued rights to payment, confidentiality obligations,
              warranty disclaimers, and limitations of liability.
            </p>
            <p>
              <strong className="text-white">7.3</strong> Customers who purchase Services with
              initial service terms greater than one (1) month have the option to terminate this
              Agreement at any time during the first thirty (30) days of Service for any reason by
              emailing their assigned Customer Service Representative. If this option is exercised,
              Company will refund Customer for the pro-rated amount remaining on their initial
              service term, rounded up to the nearest month.
            </p>
          </section>

          {/* 8 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">8. Work Product Ownership</h2>
            <p>
              Any copyrightable works, ideas, discoveries, products, or other information
              (collectively, &ldquo;Work Product&rdquo;) developed in whole or in part by Company
              in connection with the Services will be the exclusive property of Company. Upon
              request, Company will execute all documents necessary to confirm or perfect such
              exclusive ownership. However, upon receipt of full payment of all Fees due, Company
              grants Customer a non-exclusive, worldwide, royalty-free, perpetual licence to use
              the Work Product solely for Customer&apos;s internal business purposes and external
              marketing. If Customer fails to adhere to payment terms or refuses to pay for
              rendered services, this licence is immediately revoked, and Company retains full
              rights to use the rendered work for promotional purposes and does not release
              copyright in such work.
            </p>
          </section>

          {/* 9 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">9. Warranty and Disclaimer</h2>
            <p className="mb-3">
              Company shall use commercially reasonable efforts to maintain the Services in a
              manner that minimises errors and interruptions. Services may be temporarily
              unavailable for scheduled or emergency maintenance, or due to causes beyond
              Company&apos;s reasonable control. Company shall use reasonable efforts to provide
              advance notice of any scheduled service disruption.
            </p>
            <p>
              Company does not warrant that the Services will be uninterrupted or error-free, nor
              does it make any warranty as to the results that may be obtained from use of the
              Services. Except as expressly set forth in this Agreement, the Services are provided
              &ldquo;as is&rdquo; and Company disclaims all warranties, express or implied,
              including but not limited to implied warranties of merchantability, fitness for a
              particular purpose, and non-infringement, to the fullest extent permitted by
              applicable law.
            </p>
          </section>

          {/* 10 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">10. Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by applicable law (including the laws of England
              &amp; Wales), nothing in this Agreement limits or excludes liability for death or
              personal injury caused by our negligence, fraud or fraudulent misrepresentation, or
              any other liability which cannot legally be limited or excluded under applicable law.
              Subject to the foregoing, Company and its officers, affiliates, representatives,
              contractors, and employees shall not be responsible or liable under any contract,
              negligence, strict liability, or other theory: (a) for error or interruption of use,
              or for loss, inaccuracy, or corruption of data, or for the cost of procuring
              substitute goods, services, or technology, or for loss of business; (b) for any
              indirect, exemplary, incidental, special, or consequential damages; (c) for any
              matter beyond Company&apos;s reasonable control; or (d) for any amounts that,
              together with amounts associated with all other claims, exceed the Fees paid by
              Customer to Company for the Services in the twelve (12) months prior to the act that
              gave rise to the liability; in each case, whether or not Company has been advised of
              the possibility of such damages.
            </p>
          </section>

          {/* 11 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">11. Data Protection</h2>
            <p>
              Both parties will comply with all applicable requirements of the Data Protection
              Legislation (meaning the UK General Data Protection Regulation (UK GDPR) and the
              Data Protection Act 2018). This Section is in addition to, and does not relieve,
              remove, or replace, a party&apos;s obligations under the Data Protection
              Legislation. If Company processes any personal data on Customer&apos;s behalf when
              performing its obligations under this Agreement, the parties record their intention
              that Customer will be the data controller and Company will be a data processor. The
              specifics of such processing shall be governed by Company&apos;s Privacy Policy or
              a separately executed Data Processing Agreement.
            </p>
          </section>

          {/* 12 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">12. Marketing &amp; Publicity</h2>
            <p className="mb-3">
              Customer grants Company a non-exclusive, worldwide, royalty-free licence to use
              Customer&apos;s business name, trade name, and logos (&ldquo;Customer Marks&rdquo;)
              to identify Customer as a user of the Services and to use the Customer Marks in
              Company&apos;s marketing, advertising, and promotional materials, including on
              Company&apos;s website, in sales presentations, case studies, and paid digital
              advertisements. Company will use the Customer Marks in accordance with any reasonable
              brand guidelines provided by Customer and will not materially alter the Customer
              Marks other than to resize them.
            </p>
            <p className="mb-3">
              Customer agrees that Company may describe in general terms the nature of the Services
              provided to Customer and may use data and metrics relating to Customer&apos;s use of
              the Services and the results achieved (including search-ranking, traffic, and
              lead-generation metrics) (&ldquo;Results Data&rdquo;) in Company&apos;s marketing
              and sales materials, provided that Company does not disclose Customer&apos;s
              confidential information.
            </p>
            <p className="mb-3">
              Where Company wishes to attribute a specific testimonial, quote, or detailed case
              study to a named individual at Customer, Company will obtain that individual&apos;s
              prior consent (email being sufficient) before publication.
            </p>
            <p>
              Customer may revoke Company&apos;s right to use the Customer Marks in new marketing
              materials at any time upon thirty (30) days&apos; prior written notice. Revocation
              will not require Company to remove or modify materials created before the effective
              date of revocation, and Company may continue to use aggregated or de-identified
              Results Data that does not identify Customer.
            </p>
          </section>

          {/* 13 */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">13. Miscellaneous</h2>
            <p>
              If any provision of this Agreement is found to be unenforceable or invalid, that
              provision will be limited or eliminated to the minimum extent necessary so that this
              Agreement will otherwise remain in full force and effect. This Agreement is not
              assignable, transferable, or sublicensable by Customer except with Company&apos;s
              prior written consent. Company may transfer and assign any of its rights and
              obligations under this Agreement without consent. This Agreement, together with the
              Order Form, is the complete and exclusive statement of the mutual understanding of
              the parties and supersedes all previous written and oral agreements relating to its
              subject matter. All waivers and modifications must be in writing signed by both
              parties, except as otherwise provided herein. No agency, partnership, joint venture,
              or employment is created as a result of this Agreement. In any action or proceeding
              to enforce rights under this Agreement, the prevailing party will be entitled to
              recover costs and reasonable legal fees. All notices under this Agreement will be in
              writing and deemed duly given when received personally, when receipt is
              electronically confirmed (by facsimile or email), the day after being sent for
              next-day delivery by a recognised overnight delivery service, or upon receipt if sent
              by recorded post. This Agreement shall be governed by and construed in accordance
              with the laws of England &amp; Wales, and the parties submit to the exclusive
              jurisdiction of the courts of England &amp; Wales.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-xl font-bold text-white mb-3">Contact</h2>
            <p>
              Questions about this Agreement? Contact us at{" "}
              <a
                href="mailto:legal@tier3labs.com"
                className="text-green-primary hover:underline"
              >
                legal@tier3labs.com
              </a>{" "}
              or by post at Tier3 Labs Ltd, 12 Old Mill Gardens, Berkhamsted, England, HP4 2NZ.
            </p>
          </section>

        </div>
      </div>
    </main>
  );
}
