"use client";

import AuditForm from "./AuditForm";

export default function Contact() {
  return (
    <section
      id="contact"
      className="bg-gradient-to-b from-[#0D1117] to-[#0a1628]"
    >
      <div className="section-container">
        <div className="text-center mb-6">
          <h2 className="section-title">
            Ready to{" "}
            <span className="green-gradient-text">Own the Map Pack</span>?
          </h2>
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
            <AuditForm showMessage eventLabel="contact_form" />
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
                window.gtag?.('event', 'begin_checkout', { event_category: 'calendly', event_label: 'contact_section' });
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
