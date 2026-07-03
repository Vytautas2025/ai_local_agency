"use client";

import { useEffect, useRef, useState } from "react";
import { Phone } from "lucide-react";
import WhatsAppIcon from "./WhatsAppIcon";
import { WHATSAPP_URL } from "../lib/whatsapp";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

// Floating WhatsApp widget: a brand-green bubble that expands into a two-item menu
// (Message / Call). WhatsApp has no deep link to start a call, so both actions open the
// same wa.me chat, the call action lands the user where the in-app call button lives.
export default function WhatsAppButton() {
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close on outside click or Escape while the menu is open.
  useEffect(() => {
    if (!open) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  const track = (label: "whatsapp_message" | "whatsapp_call") => {
    window.gtag?.("event", "whatsapp_click", {
      event_category: "contact",
      event_label: label,
    });
    window.fbq?.("track", "Contact");
  };

  return (
    <div
      ref={containerRef}
      // bottom-24 on mobile clears the StickyMobileBar (fixed bottom-0); md:bottom-6 on desktop.
      className="fixed right-5 bottom-24 md:bottom-6 z-50 flex flex-col items-end gap-3"
    >
      {/* Expanding menu, kept in the layout (opacity/translate) so the bubble never shifts.
          Neutral id (no "whatsapp" token) so ad-blocker cosmetic filters don't hide it. */}
      <div
        id="contact-chat-menu"
        className={`flex flex-col items-stretch gap-2 transition-all duration-200 ${
          open
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_message")}
          aria-label="Message Tier3Labs on WhatsApp"
          className="flex items-center gap-3 rounded-xl border border-white/15 bg-[#0D1117]/95 backdrop-blur-md px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-colors hover:border-[#25D366]/60"
        >
          <WhatsAppIcon className="h-5 w-5 text-[#25D366] shrink-0" />
          <span className="text-sm font-medium text-white whitespace-nowrap">
            Message us
          </span>
        </a>

        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_call")}
          aria-label="Call Tier3Labs on WhatsApp"
          className="flex items-start gap-3 rounded-xl border border-white/15 bg-[#0D1117]/95 backdrop-blur-md px-4 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.4)] transition-colors hover:border-[#25D366]/60"
        >
          <Phone className="h-5 w-5 text-[#25D366] shrink-0 mt-0.5" aria-hidden="true" />
          <span className="flex flex-col">
            <span className="text-sm font-medium text-white whitespace-nowrap">
              Call on WhatsApp
            </span>
            <span className="text-xs text-[#8B949E] whitespace-nowrap">
              Opens WhatsApp, tap the call icon
            </span>
          </span>
        </a>
      </div>

      {/* Trigger bubble */}
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        aria-expanded={open}
        aria-controls="contact-chat-menu"
        aria-label={open ? "Close WhatsApp menu" : "Contact us on WhatsApp"}
        style={{ background: "#25D366" }}
        className="flex h-14 w-14 items-center justify-center rounded-full text-white shadow-[0_8px_24px_rgba(37,211,102,0.45)] transition-transform hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117]"
      >
        <WhatsAppIcon className="h-7 w-7" />
      </button>
    </div>
  );
}
