"use client";

import { useState } from "react";

export default function TrustBadge() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 glass-card p-5 max-w-xs border-[#00E676]/20 animate-float">
      {/* Close Button */}
      <button
        onClick={() => setDismissed(true)}
        className="absolute top-3 right-3 text-[#8B949E] hover:text-white transition-colors duration-200"
        aria-label="Dismiss trust badge"
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 1L13 13M13 1L1 13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </button>

      {/* Header Row */}
      <div className="flex items-center gap-3">
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="#00E676"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M16 2L4 8V16C4 23.2 9.12 29.84 16 32C22.88 29.84 28 23.2 28 16V8L16 2ZM16 15.98H26C25.28 21.92 21.36 27.26 16 28.9V16H6V9.4L16 4.62V15.98Z" />
        </svg>
        <span className="text-white font-bold text-sm">
          🔒 Zero Access Required
        </span>
      </div>

      {/* Body Text */}
      <p className="text-[#8B949E] text-xs mt-3 leading-relaxed">
        We never need access to your Google Business Profile or website. Our strategy works
        entirely through external signals.
      </p>
    </div>
  );
}
