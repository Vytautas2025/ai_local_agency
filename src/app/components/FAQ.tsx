"use client";

import { useState } from "react";

const faqData = [
  {
    question: "What is the Google Maps 3-Pack and why does it matter?",
    answer:
      "The Google Maps 3-Pack is the top 3 business listings that appear in Google Maps results. It captures more clicks than any other result on the page — and with roughly 70% of local search clicks going to organic results, not paid ads, ranking here is the most valuable digital real estate for any local business.",
  },
  {
    question: "How is this different from traditional SEO?",
    answer:
      "Traditional SEO focuses on website rankings. We focus on Google Maps dominance AND AI search citations. Our approach builds the content authority, citation networks, and engagement signals that Google's algorithm rewards, not just technical tweaks.",
  },
  {
    question: "Do you need access to my Google Business Profile?",
    answer:
      "No. We never need access to your GBP or website. Our entire strategy works through external signals: content authority, citation networks, and engagement patterns that boost your local relevance.",
  },
  {
    question: "What are AI Search Overviews and why should I care?",
    answer:
      "AI Search Overviews are Google's AI-generated summaries that appear above traditional results. They're replacing blue links as the primary way people find businesses. We optimise your presence so AI recommends YOU.",
  },
  {
    question: "How long until I see results?",
    answer:
      "Most clients see measurable ranking improvements within 30–60 days. Significant Map Pack movement typically occurs within 90 days.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We work with any local service business. If you serve a local area, we can help.",
  },
  {
    question: "What's included in the monthly deliverables?",
    answer:
      "Each month you receive: authority articles, ranking signal stacks, multi-platform presence building, AI-driven keyword strategy, and bi-weekly geo-grid ranking reports showing exactly where you stand.",
  },
  {
    question: "How do your engagement signals work?",
    answer:
      "We build the behavioural signals that Google uses to measure local relevance: content authority, citation consistency, and real-world engagement patterns. These compound over time, strengthening your position in the Map Pack month after month.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

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

        <div className="max-w-3xl mx-auto">
          {faqData.map((item, index) => (
            <div key={item.question} className="border-b border-white/10">
              <h3>
                <button
                  onClick={() => toggle(index)}
                  aria-expanded={openIndex === index}
                  className="w-full flex justify-between items-center py-6 text-left text-white font-semibold text-lg hover:text-[#00E676] transition-colors cursor-pointer"
                >
                  <span className="pr-4">{item.question}</span>
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  className={`shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  <path
                    d="M5 7.5L10 12.5L15 7.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                </button>
              </h3>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{
                  maxHeight: openIndex === index ? "500px" : "0px",
                  opacity: openIndex === index ? 1 : 0,
                }}
              >
                <p className="pb-6 text-[#C9D1D9] leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
