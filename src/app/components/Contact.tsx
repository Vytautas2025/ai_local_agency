"use client";

import { useState, FormEvent } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: string, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#0D1117] to-[#0a1628]"
    >
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Ready to{" "}
            <span className="green-gradient-text">Own the Map Pack</span>?
          </h2>
          <p className="text-[#8B949E] text-lg mt-4">
            Stop renting visibility. Start owning it.
          </p>
        </div>

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
                  Message Sent!
                </h3>
                <p className="text-[#C9D1D9] text-center">
                  We’ll be in touch within 24 hours with your custom
                  strategy overview.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[#C9D1D9] text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => handleChange("name", e.target.value)}
                    placeholder="John Smith"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#8B949E] focus:outline-none focus:border-[#00E676]/50 focus:ring-1 focus:ring-[#00E676]/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[#C9D1D9] text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => handleChange("email", e.target.value)}
                    placeholder="john@business.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#8B949E] focus:outline-none focus:border-[#00E676]/50 focus:ring-1 focus:ring-[#00E676]/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[#C9D1D9] text-sm font-medium mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    value={form.phone}
                    onChange={(e) => handleChange("phone", e.target.value)}
                    placeholder="+1 (555) 000-0000"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#8B949E] focus:outline-none focus:border-[#00E676]/50 focus:ring-1 focus:ring-[#00E676]/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[#C9D1D9] text-sm font-medium mb-2">
                    Business Website
                  </label>
                  <input
                    type="url"
                    value={form.website}
                    onChange={(e) => handleChange("website", e.target.value)}
                    placeholder="https://yourbusiness.com"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#8B949E] focus:outline-none focus:border-[#00E676]/50 focus:ring-1 focus:ring-[#00E676]/30 transition-all"
                  />
                </div>
                <div>
                  <label className="block text-[#C9D1D9] text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => handleChange("message", e.target.value)}
                    placeholder="Tell us about your business and goals..."
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#8B949E] focus:outline-none focus:border-[#00E676]/50 focus:ring-1 focus:ring-[#00E676]/30 transition-all resize-none"
                  />
                </div>
                <button type="submit" className="btn-primary w-full mt-6">
                  Send Message
                </button>
              </form>
            )}
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-white">
              Or book a free 15-minute strategy call
            </h3>
            <p className="text-[#C9D1D9] mt-4">
              We’ll analyze your current local search presence and show you
              exactly how to reach the Top 3.
            </p>
            <div className="flex flex-col gap-4 mt-8">
              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#00E676"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span className="text-[#C9D1D9]">Free competitive analysis</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#00E676"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span className="text-[#C9D1D9]">Custom ranking strategy</span>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#00E676"
                >
                  <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z" />
                </svg>
                <span className="text-[#C9D1D9]">
                  No obligation, no pressure
                </span>
              </div>
            </div>
            <a href="#" className="btn-ghost mt-8 inline-block text-center">
              Schedule a Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
