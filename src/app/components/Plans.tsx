"use client";

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

const CALENDLY_URL = "https://calendly.com/tier3labs-info/30min";

type Plan = {
  name: string;
  badge: string;
  featured: boolean;
  whoIsItFor: string;
};

const plans: Plan[] = [
  {
    name: "Community Plan",
    badge: "Start free · 7 days",
    featured: false,
    whoIsItFor:
      "For smaller local businesses tired of being invisible, consistent gains that build lasting visibility and move you up the Map Pack.",
  },
  {
    name: "City Plan",
    badge: "Full power",
    featured: true,
    whoIsItFor:
      "For businesses that intend to dominate local search, not just show up. City is built to take the Top 3 and hold it.",
  },
];

type Cell = boolean | string;
type FeatureRow = { label: string; community: Cell; city: Cell };

const features: FeatureRow[] = [
  { label: "Google Business Profiles", community: "multi-location discounts", city: "multi-location discounts" },
  { label: "Daily engagement signals", community: "10–20 / day", city: "30–40 / day" },
  { label: "Rating grid coverage", community: "25 sq mi", city: "100 sq mi" },
  { label: "Tracked keywords", community: "10", city: "20" },
  { label: "Guaranteed Top 3 positions", community: true, city: true },
  { label: "Google Business Profile SEO", community: true, city: true },
  { label: "Website internal local SEO", community: true, city: true },
  { label: "Cloud stacks", community: "×4 / month", city: "×8 / month" },
  { label: "Local rank tracking", community: true, city: true },
  { label: "Progress reports, every 2 weeks", community: true, city: true },
  { label: "Free 7-day trial", community: true, city: false },
  { label: "Medium pages", community: false, city: true },
  { label: "Google pages", community: false, city: true },
  { label: "Google documents", community: false, city: true },
  { label: "PDF", community: false, city: true },
];

function FeatureCell({ value }: { value: Cell }) {
  if (value === true) {
    return (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="inline-block" aria-label="Included">
        <path d="M20 6L9 17l-5-5" stroke="#00E676" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (value === false) {
    return <span className="text-[#8B949E]/50" aria-label="Not included">—</span>;
  }
  return <span className="text-[#C9D1D9] text-[13px]">{value}</span>;
}

export default function Plans() {
  return (
    <section id="plans" className="bg-[#0D1117]">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Choose your <span className="green-gradient-text">plan</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Every customer starts with a free 7-day trial, no credit card, no
            contracts, cancel anytime.
          </p>
        </div>

        {/* Plan headers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mb-10">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-6 bg-white/[0.04] ${
                plan.featured
                  ? "border border-[#00E676]/50 shadow-[0_0_32px_rgba(0,230,118,0.10)]"
                  : "border border-white/10"
              }`}
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-lg font-bold text-white">{plan.name}</h3>
                {plan.featured && (
                  <span className="shrink-0 bg-[#00E676] text-[#0D1117] text-[10px] font-bold uppercase tracking-wide px-3 py-1 rounded-full">
                    Most Popular
                  </span>
                )}
              </div>
              <span
                className={`inline-block w-fit mt-3 text-[11px] font-semibold uppercase tracking-wide rounded-full px-3 py-1 border ${
                  plan.featured
                    ? "text-[#58A6FF] border-[#58A6FF]/40 bg-[#58A6FF]/10"
                    : "text-[#00E676] border-[#00E676]/40 bg-[#00E676]/10"
                }`}
              >
                {plan.badge}
              </span>
              <p className="text-[#8B949E] text-sm mt-3 leading-relaxed flex-1">
                {plan.whoIsItFor}
              </p>
            </div>
          ))}
        </div>

        {/* Feature comparison — table on desktop */}
        <div className="hidden md:block max-w-3xl mx-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="text-left text-[#C9D1D9] text-[13px] font-bold py-3 px-4">
                  What&apos;s included
                </th>
                <th className="text-center text-[#C9D1D9] text-[13px] font-bold py-3 px-4">
                  Community
                </th>
                <th className="text-center text-[#00E676] text-[13px] font-bold py-3 px-4">
                  City
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, i) => (
                <tr
                  key={row.label}
                  className={`border-t border-white/10 ${i % 2 === 0 ? "bg-white/[0.015]" : ""}`}
                >
                  <td className="text-[#C9D1D9] text-[13px] py-3 px-4">{row.label}</td>
                  <td className="text-center py-3 px-4">
                    <FeatureCell value={row.community} />
                  </td>
                  <td className="text-center py-3 px-4">
                    <FeatureCell value={row.city} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Feature comparison — stacked cards on mobile */}
        <div className="md:hidden max-w-3xl mx-auto space-y-3">
          {features.map((row) => (
            <div
              key={row.label}
              className="rounded-xl border border-white/10 bg-white/[0.03] p-4"
            >
              <div className="text-[#C9D1D9] text-sm font-medium mb-3">
                {row.label}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <div className="rounded-lg bg-white/[0.04] px-3 py-2.5 text-center">
                  <div className="text-[#8B949E] text-[10px] font-semibold uppercase tracking-wide mb-1.5">
                    Community
                  </div>
                  <FeatureCell value={row.community} />
                </div>
                <div className="rounded-lg bg-[#00E676]/[0.06] px-3 py-2.5 text-center">
                  <div className="text-[#00E676] text-[10px] font-semibold uppercase tracking-wide mb-1.5">
                    City
                  </div>
                  <FeatureCell value={row.city} />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-10">
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              window.gtag?.("event", "begin_checkout", {
                event_category: "calendly",
                event_label: "plans_book_call",
              })
            }
            className="btn-ghost"
          >
            Book a Free Call →
          </a>
        </div>
      </div>
    </section>
  );
}
