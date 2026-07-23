"use client";

import { useId, useState, FormEvent } from "react";
import BusinessAutocomplete, {
  BusinessValue,
  emptyBusinessValue,
} from "./BusinessAutocomplete";

declare global {
  interface Window {
    Calendly?: {
      initPopupWidget: (options: { url: string }) => void;
    };
    gtag?: (...args: unknown[]) => void;
    fbq?: (...args: unknown[]) => void;
  }
}

interface AuditFormProps {
  /** Show the optional "short description" textarea (used in the full Contact form). */
  showMessage?: boolean;
  /** Submit button label. */
  submitLabel?: string;
  /** Analytics event label to distinguish which form was submitted. */
  eventLabel?: string;
}

export default function AuditForm({
  showMessage = false,
  submitLabel = "Start For Free",
  eventLabel = "audit_form",
}: AuditFormProps) {
  const uid = useId();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [business, setBusiness] = useState<BusinessValue>(emptyBusinessValue);
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
          phone: form.phone,
          businessName: business.businessName,
          businessWebsite: business.website,
          googleMapsUrl: business.mapsUri,
          message: form.message,
        }),
      });

      if (!res.ok) {
        throw new Error("Failed to send audit request.");
      }

      setSubmitted(true);
      window.gtag?.("event", "generate_lead", {
        event_category: "contact",
        event_label: eventLabel,
      });
      window.fbq?.("track", "Lead");
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <div className="flex flex-col items-center justify-center py-12">
        <svg width="64" height="64" viewBox="0 0 64 64" fill="none" className="mb-6">
          <circle cx="32" cy="32" r="30" stroke="#00E676" strokeWidth="3" fill="none" />
          <path
            d="M20 32L28 40L44 24"
            stroke="#00E676"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <h3 className="text-2xl font-bold text-white mb-2">Audit Requested!</h3>
        <p className="text-[#C9D1D9] text-center">
          We will be in touch within 24 hours.
        </p>
      </div>
    );
  }

  const inputCls =
    "dark-input w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-[#8B949E] focus:outline-none focus:border-[#00E676]/50 focus:ring-1 focus:ring-[#00E676]/30 transition-all";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label htmlFor={`${uid}-name`} className="block text-[#C9D1D9] text-sm font-medium mb-2">
          Name
        </label>
        <input
          id={`${uid}-name`}
          name="name"
          type="text"
          required
          value={form.name}
          onChange={(e) => handleChange("name", e.target.value)}
          placeholder="John Smith"
          autoComplete="name"
          className={inputCls}
        />
      </div>
      <div>
        <label htmlFor={`${uid}-email`} className="block text-[#C9D1D9] text-sm font-medium mb-2">
          Email
        </label>
        <input
          id={`${uid}-email`}
          name="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => handleChange("email", e.target.value)}
          placeholder="john@business.com"
          autoComplete="email"
          className={inputCls}
        />
      </div>
      <div>
        <label htmlFor={`${uid}-phone`} className="block text-[#C9D1D9] text-sm font-medium mb-2">
          Phone
        </label>
        <input
          id={`${uid}-phone`}
          name="phone"
          type="tel"
          required
          value={form.phone}
          onChange={(e) => handleChange("phone", e.target.value)}
          placeholder="07123 456789"
          autoComplete="tel"
          className={inputCls}
        />
      </div>
      <BusinessAutocomplete value={business} onChange={setBusiness} required />
      {showMessage && (
        <div>
          <label htmlFor={`${uid}-message`} className="block text-[#C9D1D9] text-sm font-medium mb-2">
            Short Description (optional)
          </label>
          <textarea
            id={`${uid}-message`}
            rows={3}
            value={form.message}
            onChange={(e) => handleChange("message", e.target.value)}
            placeholder="Write a short description about your business"
            className={`${inputCls} resize-none`}
          />
        </div>
      )}
      <button
        type="submit"
        disabled={loading}
        className="btn-primary w-full mt-2 disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {loading ? "Sending..." : submitLabel}
      </button>
      {error && <p className="text-red-400 text-sm text-center mt-3">{error}</p>}
      <p className="text-[#8B949E] text-xs text-center mt-3">
        No spam. No sales scripts. Just a 30-minute honest look at your local rankings.
      </p>
    </form>
  );
}
