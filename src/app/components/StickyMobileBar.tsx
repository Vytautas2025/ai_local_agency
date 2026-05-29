"use client";

import { useState, useEffect } from "react";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export default function StickyMobileBar() {
  const [scrolled, setScrolled] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > window.innerHeight * 0.8);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleCTA = () => {
    window.gtag?.("event", "sticky_bar_click", {
      event_category: "cta",
      event_label: "mobile_sticky_bar",
    });
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const show = scrolled && !dismissed;

  return (
    <div
      className={`md:hidden fixed bottom-0 left-0 right-0 z-50 transition-transform duration-300 ${
        show ? "translate-y-0" : "translate-y-full"
      }`}
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="bg-[#0D1117] border-t border-[#00E676]/30 shadow-[0_-4px_32px_rgba(0,0,0,0.6)] flex items-center gap-3 px-4 py-3">
        <p className="flex-1 text-sm text-[#C9D1D9] leading-tight">
          <span className="text-white font-semibold">Get to the Google Maps Top 3</span>
        </p>
        <button
          onClick={handleCTA}
          style={{
            background: "linear-gradient(135deg, #00E676, #00C853)",
            boxShadow: "0 0 16px rgba(0,230,118,0.35)",
          }}
          className="shrink-0 text-[#0D1117] font-bold text-sm px-4 py-2 rounded-xl transition-all hover:brightness-110 active:scale-95"
        >
          Start For Free
        </button>
        <button
          onClick={() => setDismissed(true)}
          aria-label="Dismiss"
          className="shrink-0 text-[#8B949E] hover:text-white transition-colors p-1 -mr-1"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
}
