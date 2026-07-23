import Link from "next/link";
import FaqAccordion from "./FaqAccordion";
import { teaserFaqItems, buildFaqSchema } from "../data/faq";

export default function FAQ() {
  const jsonLd = buildFaqSchema(teaserFaqItems);

  return (
    <section id="faq" className="bg-[#0D1117]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Frequently Asked{" "}
            <span className="green-gradient-text">Questions</span>
          </h2>
        </div>

        <FaqAccordion items={teaserFaqItems} />

        <div className="text-center mt-12">
          <Link
            href="/faq"
            className="inline-flex items-center gap-1.5 text-[#00E676] hover:text-white font-semibold transition-colors"
          >
            View all FAQs
            <span aria-hidden="true">&rarr;</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
