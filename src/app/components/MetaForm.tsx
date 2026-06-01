"use client";

import { Fragment, useState } from "react";
import { ShieldCheck } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
    Calendly?: { initPopupWidget: (options: { url: string }) => void };
  }
}

export default function MetaForm() {
  const [step, setStep] = useState(1);
  const [businessName, setBusinessName] = useState("");

  // Step 2 fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [website, setWebsite] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/send-audit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          businessWebsite: website ? `https://${website}` : "",
          message: `Business: ${businessName}${message ? `\n${message}` : ""}`,
        }),
      });
      if (!res.ok) throw new Error();
      setSubmitted(true);
      window.gtag?.("event", "generate_lead", {
        event_category: "meta_lp",
        event_label: "meta_form",
      });
      window.fbq?.("track", "Lead");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="get-started" className="bg-gradient-to-b from-[#0D1117] to-[#0a1628] py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-medium uppercase tracking-widest text-green-400 mb-3">
            Free 7-Day Trial
          </p>
          <h2 className="text-3xl md:text-4xl font-extrabold text-white">
            Ready to{" "}
            <span className="text-green-400">Own the Map Pack</span>?
          </h2>
          <p className="text-[#8B949E] mt-3 text-lg">
            We audit a limited number of businesses each month. Spots fill quickly.
          </p>
        </div>

        {submitted ? (
          <div className="glass-card p-10 text-center max-w-xl mx-auto">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mx-auto mb-6">
              <circle cx="32" cy="32" r="30" stroke="#00E676" strokeWidth="3" fill="none" />
              <path d="M20 32L28 40L44 24" stroke="#00E676" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <h3 className="text-2xl font-bold text-white mb-2">Audit Requested!</h3>
            <p className="text-[#C9D1D9]">We will be in touch within 24 hours.</p>
          </div>
        ) : (
          <>
            {/* ── Step 1: Business name ── */}
            {step === 1 && (
              <div className="glass-card p-8 max-w-xl mx-auto">
                {/* Progress */}
                <div className="flex items-center mb-6">
                  {[1, 2].map((n) => (
                    <Fragment key={n}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${
                          n <= step
                            ? "bg-[#00E676] text-black"
                            : "border border-white/20 text-[#8B949E]"
                        }`}
                      >
                        {n}
                      </div>
                      {n < 2 && (
                        <div className="flex-1 h-px mx-1 bg-white/10" />
                      )}
                    </Fragment>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-white mb-5">
                  Claim your neighborhood before a competitor does
                </h3>

                <form
                  onSubmit={(e) => { e.preventDefault(); setStep(2); }}
                  className="space-y-4"
                >
                  <div>
                    <label className="block text-[#C9D1D9] text-sm font-medium mb-2">
                      Your Business Name{" "}
                      <span className="text-[#8B949E] font-normal">(as listed on Google)</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={businessName}
                      onChange={(e) => setBusinessName(e.target.value)}
                      placeholder="Enter your business name"
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#8B949E] focus:outline-none focus:border-[#00E676]/50 focus:ring-1 focus:ring-[#00E676]/30 transition-all"
                    />
                    <p className="text-[#8B949E] text-xs mt-1.5">
                      Can&apos;t find your business? Enter it manually above.
                    </p>
                  </div>
                  <button type="submit" className="btn-primary w-full">
                    Next →
                  </button>
                </form>
              </div>
            )}

            {/* ── Step 2: Full contact form ── */}
            {step === 2 && (
              <div>
                {/* Progress (step 2 active) */}
                <div className="flex items-center max-w-xl mx-auto mb-8">
                  {[1, 2].map((n) => (
                    <Fragment key={n}>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0 transition-colors ${
                          n <= step
                            ? "bg-[#00E676] text-black"
                            : "border border-white/20 text-[#8B949E]"
                        }`}
                      >
                        {n}
                      </div>
                      {n < 2 && (
                        <div className="flex-1 h-px mx-1 bg-[#00E676]" />
                      )}
                    </Fragment>
                  ))}
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                  {/* Left: form */}
                  <div className="glass-card p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label htmlFor="meta-name" className="block text-[#C9D1D9] text-sm font-medium mb-2">
                          Name
                        </label>
                        <input
                          id="meta-name"
                          type="text"
                          required
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="John Smith"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#8B949E] focus:outline-none focus:border-[#00E676]/50 focus:ring-1 focus:ring-[#00E676]/30 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="meta-email" className="block text-[#C9D1D9] text-sm font-medium mb-2">
                          Email
                        </label>
                        <input
                          id="meta-email"
                          type="email"
                          required
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="john@business.com"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#8B949E] focus:outline-none focus:border-[#00E676]/50 focus:ring-1 focus:ring-[#00E676]/30 transition-all"
                        />
                      </div>
                      <div>
                        <label htmlFor="meta-website" className="block text-[#C9D1D9] text-sm font-medium mb-2">
                          Business Website
                        </label>
                        <div className="flex items-center bg-white/5 border border-white/10 rounded-lg focus-within:border-[#00E676]/50 focus-within:ring-1 focus-within:ring-[#00E676]/30 transition-all overflow-hidden">
                          <span className="px-3 py-3 text-[#8B949E] text-sm select-none border-r border-white/10 whitespace-nowrap">
                            https://
                          </span>
                          <input
                            id="meta-website"
                            type="text"
                            value={website}
                            onChange={(e) => setWebsite(e.target.value)}
                            placeholder="yourbusiness.com"
                            className="flex-1 bg-transparent px-3 py-3 text-white placeholder-[#8B949E] focus:outline-none"
                          />
                        </div>
                      </div>
                      <div>
                        <label htmlFor="meta-message" className="block text-[#C9D1D9] text-sm font-medium mb-2">
                          Short Description <span className="text-[#8B949E] font-normal">(optional)</span>
                        </label>
                        <textarea
                          id="meta-message"
                          rows={3}
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          placeholder="Write a short description about your business"
                          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#8B949E] focus:outline-none focus:border-[#00E676]/50 focus:ring-1 focus:ring-[#00E676]/30 transition-all resize-none"
                        />
                      </div>
                      <button
                        type="submit"
                        disabled={loading}
                        className="btn-primary w-full mt-6 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {loading ? "Sending..." : "Start For Free"}
                      </button>
                      {error && (
                        <p className="text-red-400 text-sm text-center mt-3">{error}</p>
                      )}
                      <p className="text-[#8B949E] text-xs text-center mt-3">
                        No spam. No sales scripts. Just a 30-minute honest look at your local rankings.
                      </p>
                    </form>
                  </div>

                  {/* Right: Calendly */}
                  <div className="flex flex-col justify-center">
                    <h3 className="text-2xl font-bold text-white">
                      Or book a free 30-minute strategy call
                    </h3>
                    <p className="text-[#C9D1D9] mt-4">
                      We&apos;ll analyse your current local search presence and show you exactly how to reach the Top 3.
                    </p>
                    <div className="flex flex-col gap-4 mt-8">
                      {[
                        "Free competitive analysis",
                        "Custom ranking strategy",
                        "No obligation, no pressure",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-3">
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="#00E676">
                            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                          </svg>
                          <span className="text-[#C9D1D9]">{item}</span>
                        </div>
                      ))}
                    </div>
                    <a
                      href="https://calendly.com/tier3labs-info/30min"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        window.gtag?.("event", "begin_checkout", {
                          event_category: "calendly",
                          event_label: "meta_form",
                        });
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
            )}
          </>
        )}
      </div>
    </section>
  );
}
