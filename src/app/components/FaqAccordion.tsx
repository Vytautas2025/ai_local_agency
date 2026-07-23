"use client";

import { useState } from "react";
import type { FaqItem } from "../data/faq";

interface FaqAccordionProps {
  items: FaqItem[];
  /** Heading level for each question. "h2" on the dedicated /faq page, "h3" under a section heading. */
  headingLevel?: "h2" | "h3";
}

export default function FaqAccordion({
  items,
  headingLevel = "h3",
}: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const Heading = headingLevel;

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto">
      {items.map((item, index) => (
        <div key={item.question} className="border-b border-white/10">
          <Heading>
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
          </Heading>
          <div
            className="overflow-hidden transition-all duration-300"
            style={{
              maxHeight: openIndex === index ? "500px" : "0px",
              opacity: openIndex === index ? 1 : 0,
            }}
          >
            <p className="pb-6 text-[#C9D1D9] leading-relaxed">{item.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
