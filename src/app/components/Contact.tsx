"use client";

import { useState, FormEvent } from "react";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
  }
}

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    website: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/send-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          businessWebsite: form.website ? `https://${form.website}` : "",
          message: form.message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send audit request.");
      }

      setSubmitted(true);
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#0D1117] to-[#0a1628]"
    >
      <div className="section-container">
        <div className="text-center mb-6">
          <p className="section-title">
            Ready to{" "}
            <span className="green-gradient-text">Own the Map Pack</span>?
          </p>
          <p className="text-[#8B949E] text-lg mt-4">
            Stop renting visibility. Start owning it.
          </p>
        </div>

        {/* Urgency line */}
        <p className="text-center text-[#C9D1D9] text-sm mb-12">
          We audit a limited number of businesses each month. Spots fill quickly.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="glass-card p-8">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full py-12">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  fill="none"
                  className="mb-6"
                >
                  <circle cx="32" cy="32" r="30" stroke="#00E676" strokeWidth="3" fill="none" />
                  <path
                    d="M20 32L28 40L44 24"
                    stroke="#00E676"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Audit Requested!
                </h3>
                <p className="text-[#C9D1D9] text-center">
                  We will be in touch within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="contact-name" className="block text-[#C9D1D9] text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="John Smith"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#8B949E] focus:outline-none focus:border-[#00E676]/50 focus:ring-1 focus:ring-[#00E676]/30 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-[#C9D1D9] text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@business.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#8B949E] focus:outline-none focus:border-[#00E676]/50 focus:ring-1 focus:ring-[#00E676]/30 transition-all"
                  />
                </div>
                <div>
                  <label htmlFor="contact-website" className="block text-[#C9D1D9] text-sm font-medium mb-2">
                    Business Website
                  </label>
                  <div className="flex items-center bg-white/5 border border-white/10 rounded-lg focus-within:border-[#00E676]/50 focus-within:ring-1 focus-within:ring-[#00E676]/30 transition-all overflow-hidden">
                    <span className="px-3 py-3 text-[#8B949E] text-sm select-none border-r border-white/10 whitespace-nowrap">
                      https://
                    </span>
                    <input
                      id="contact-website"
                      type="text"
                      value={form.website}
                      onChange={(e) => handleChange("website", e.target.value)}
                      placeholder="yourbusiness.com"
                      className="flex-1 bg-transparent px-3 py-3 text-white placeholder-[#8B949E] focus:outline-none"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-[#C9D1D9] text-sm font-medium mb-2">
                    Short Description (optional)
                  </label>
                  <textarea
                    id="contact-message"
                    rows={3}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Write a short description about your business"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#8B949E] focus:outline-none focus:border-[#00E676]/50 focus:ring-1 focus:ring-[#00E676]/30 transition-all resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? "Sending…" : "Start My Free Trial"}
                </button>
                {error && (
                  <p className="text-red-400 text-sm text-center mt-3">{error}</p>
                )}
                <p className="text-[#8B949E] text-xs text-center mt-3">
                  No spam. No sales scripts. Just a 30-minute honest look at your local rankings.
                </p>
              </form>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white">
              Or book a free 30-minute strategy call
            </h3>
            <p className="text-[#C9D1D9] mt-4">
              We&apos;ll analyse your current local search presence and show you
              exactly how to reach the Top 3.
            </p>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#00E676">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span className="text-[#C9D1D9]">Free competitive analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#00E676">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span className="text-[#C9D1D9]">Custom ranking strategy</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="#00E676">
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span className="text-[#C9D1D9]">No obligation, no pressure</span>
              </div>
            </div>
            <a
              href="https://calendly.com/tier3labs-info/30min"
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => {
                if (window.Calendly) {
                  e.preventDefault();
                  window.Calendly.initPopupWidget({
                    url: "https://calendly.com/tier3labs-info/30min",
                  });
                }
              }}
              className="btn-ghost mt-8 inline-block text-center cursor-pointer"
            >
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
