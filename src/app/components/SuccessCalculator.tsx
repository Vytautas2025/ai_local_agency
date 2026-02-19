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

  const trueCount = [answers.reviews, answers.address, answers.website].filter(
    (v) => v === true
  ).length;
  const score = allAnswered ? Math.round((trueCount / 3) * 100) : 0;

  const getScoreColor = () => {
    if (score === 100) return "#00E676";
    if (score >= 67) return "#F59E0B";
    return "#EF4444";
  };

  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (score / 100) * circumference;

  const questions = [
    {
      key: "reviews" as const,
      text: "Do you have 10+ reviews on your Google Business Profile?",
    },
    {
      key: "address" as const,
      text: "Do you have a verified physical business address?",
    },
    {
      key: "website" as const,
      text: "Do you have an established business website?",
    },
  ];

  const failedItems = [
    { key: "reviews" as const, label: "10+ Google Business Profile reviews" },
    { key: "address" as const, label: "Verified physical business address" },
    { key: "website" as const, label: "Established business website" },
  ].filter((item) => answers[item.key] === false);

  return (
    <section id="success-score" className="bg-[#0D1117]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            What&apos;s Your{" "}
            <span className="green-gradient-text">Map Pack Readiness</span>{" "}
            Score?
          </h2>
          <p className="text-[#8B949E] text-lg mt-4 max-w-2xl mx-auto">
            Answer three simple questions to see if you&apos;re ready to
            dominate.
          </p>
        </div>

        <div
          className={`glass-card p-10 max-w-2xl mx-auto transition-all duration-500 ${
            allAnswered && score === 100
              ? "shadow-[0_0_40px_rgba(0,230,118,0.15)] border-[#00E676]/30"
              : ""
          }`}
        >
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
                        : "bg-white/5 text-[#8B949E] border border-white/10 hover:border-white/20"
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
                        : "bg-white/5 text-[#8B949E] border border-white/10 hover:border-white/20"
                    }`}
                  >
                    No
                  </button>
                </div>
              </div>
            ))}
          </div>

          {allAnswered && (
            <div className="mt-10 pt-8 border-t border-white/10">
              <div className="flex flex-col items-center gap-6">
                <div className="relative">
                  <svg width="140" height="140" className="-rotate-90">
                    <circle
                      cx="70"
                      cy="70"
                      r={radius}
                      fill="none"
                      stroke="#161B22"
                      strokeWidth="8"
                    />
                    <circle
                      cx="70"
                      cy="70"
                      r={radius}
                      fill="none"
                      stroke={getScoreColor()}
                      strokeWidth="8"
                      strokeLinecap="round"
                      strokeDasharray={circumference}
                      strokeDashoffset={offset}
                      style={{
                        transition: "stroke-dashoffset 0.8s ease",
                      }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span
                      className="text-3xl font-bold"
                      style={{ color: getScoreColor() }}
                    >
                      {score}%
                    </span>
                  </div>
                </div>

                {score === 100 ? (
                  <div className="text-center">
                    <span className="inline-block px-4 py-1 rounded-full bg-[#00E676]/10 text-[#00E676] text-sm font-semibold mb-3">
                      Map Pack Candidate
                    </span>
                    <p className="text-[#C9D1D9] mb-6">
                      You&apos;re ready to dominate. Apply for a free strategy
                      call.
                    </p>
                    <a href="#contact" className="btn-primary">
                      Book Strategy Call
                    </a>
                  </div>
                ) : (
                  <div className="text-center">
                    <span className="inline-block px-4 py-1 rounded-full bg-amber-500/10 text-amber-400 text-sm font-semibold mb-3">
                      Nurture Candidate
                    </span>
                    <p className="text-[#C9D1D9] mb-4">
                      Let&apos;s fix your foundation first.
                    </p>
                    <ul className="space-y-2 mb-6">
                      {failedItems.map((item) => (
                        <li
                          key={item.key}
                          className="flex items-center gap-2 text-red-400 text-sm justify-center"
                        >
                          <svg
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              d="M4 4L12 12M12 4L4 12"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                            />
                          </svg>
                          {item.label}
                        </li>
                      ))}
                    </ul>
                    <a
                      href="#contact"
                      className="btn-ghost border-amber-500/30 text-amber-400 hover:bg-amber-500/10"
                    >
                      Get Your Foundation Audit
                    </a>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
