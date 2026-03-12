"use client";

import { useState } from "react";

export default function SuccessCalculator() {
  const [answers, setAnswers] = useState<{
    reviews: boolean | null;
    address: boolean | null;
    website: boolean | null;
  }>({
    reviews: null,
    address: null,
    website: null,
  });

  const allAnswered =
    answers.reviews !== null &&
    answers.address !== null &&
    answers.website !== null;

  // [Tier3Labs Audit] — Count of answered questions for progress dots
  const answeredCount = [answers.reviews, answers.address, answers.website].filter(
    (v) => v !== null
  ).length;

  // [Tier3Labs Audit] — Score is simply the count of Yes answers (0–3)
  const score = [answers.reviews, answers.address, answers.website].filter(
    (v) => v === true
  ).length;

  const getBarWidth = () => {
    if (score === 3) return "100%";
    if (score === 2) return "66%";
    if (score === 1) return "33%";
    return "5%";
  };

  const getBarColor = () => {
    if (score === 3) return "bg-green-500";
    if (score === 2) return "bg-lime-400";
    if (score === 1) return "bg-amber-400";
    return "bg-red-500";
  };

  const getLabel = () => {
    if (score === 3) return "Excellent foundation";
    if (score === 2) return "Almost there";
    if (score === 1) return "Significant gaps";
    return "Starting from scratch";
  };

  const getHeading = () => {
    if (score === 3) return "Your foundation is strong — now it's time to dominate.";
    if (score === 2) return "You're close, but competitors are filling the spots you could own.";
    if (score === 1) return "There are clear gaps holding you back from the Top 3.";
    return "You're starting from scratch — that's actually an advantage. Here's why.";
  };

  const getParagraph = () => {
    if (score === 3)
      return "You have everything needed to rank. The only missing piece is the right optimisation strategy.";
    if (score === 2)
      return "A targeted local SEO push could put you in the Top 3 within 60–90 days.";
    if (score === 1)
      return "We've helped businesses in this position reach the Top 3. It takes the right approach.";
    return "Many of our best-performing clients started exactly here. A clean foundation lets us build properly.";
  };

  const questions = [
    {
      key: "address" as const,
      text: "Do you have a Google My Business profile?",
    },
    {
      key: "reviews" as const,
      text: "Do you have 15+ reviews on your Google Business Profile?",
    },
    {
      key: "website" as const,
      text: "Do you have an established business website?",
    },
  ];

  return (
    <section id="success-score" className="bg-[#0D1117]">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-title">
            What&apos;s Your{" "}
            <span className="green-gradient-text">Map Pack Readiness</span>{" "}
            Score?
          </p>
          <p className="text-[#8B949E] text-lg mt-4 max-w-2xl mx-auto">
            Answer three quick questions to see where you stand.
          </p>
        </div>

        <div className="glass-card p-10 max-w-2xl mx-auto">
          {/* Progress dots */}
          <div className="flex items-center justify-center gap-3 mb-8">
            {([answers.reviews, answers.address, answers.website] as (boolean | null)[]).map((ans, i) => (
              <div
                key={i}
                className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                  ans === true ? "bg-green-500" : ans === false ? "bg-red-500" : "bg-gray-700"
                }`}
              />
            ))}
            <span className="text-sm text-gray-500 ml-2">
              {answeredCount}/3 answered
            </span>
          </div>

          <div className="space-y-8">
            {questions.map((q) => (
              <div
                key={q.key}
                className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
              >
                <p className="text-white font-medium flex-1">{q.text}</p>
                <div className="flex gap-3 shrink-0">
                  <button
                    onClick={() =>
                      setAnswers((prev) => ({ ...prev, [q.key]: true }))
                    }
                    className={`px-6 py-2 rounded-lg transition-all cursor-pointer text-sm font-medium ${
                      answers[q.key] === true
                        ? "bg-[#00E676] text-[#0D1117] font-bold"
                        : "bg-white/5 text-[#8B949E] border border-white/10 hover:bg-green-500/20 hover:border-green-500 hover:text-green-400"
                    }`}
                  >
                    Yes
                  </button>
                  <button
                    onClick={() =>
                      setAnswers((prev) => ({ ...prev, [q.key]: false }))
                    }
                    className={`px-6 py-2 rounded-lg transition-all cursor-pointer text-sm font-medium ${
                      answers[q.key] === false
                        ? "bg-red-500/20 text-red-400 border border-red-500/30"
                        : "bg-white/5 text-[#8B949E] border border-white/10 hover:bg-red-500/10 hover:border-red-500/50 hover:text-red-400"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Progress bar results block (shown when all 3 answered) */}
          {allAnswered && (
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-sm text-gray-400 mb-2">Your Map Pack Readiness Score</p>

              <div className="flex items-center gap-4 mb-4">
                <div className="w-full bg-gray-800 rounded-full h-4">
                  <div
                    className={`h-4 rounded-full transition-all duration-700 ${getBarColor()}`}
                    style={{ width: getBarWidth() }}
                  />
                </div>
                <span className="text-sm text-gray-300 whitespace-nowrap">
                  {score}/3 — {getLabel()}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mt-4 mb-2">
                {getHeading()}
              </h3>
              <p className="text-sm text-gray-400 mb-6">
                {getParagraph()}
              </p>

              <a
                href="#contact"
                className="bg-green-500 hover:bg-green-400 text-black font-bold rounded-lg px-6 py-3 inline-block transition-colors"
              >
                Get My Free Gap Analysis →
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
