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
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="inline-block" aria-label="Included">
        <path d="M20 6L9 17l-5-5" stroke="#00E676" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    );
  }
  if (value === false) {
    return <span className="text-[#8B949E]/50" aria-label="Not included">—</span>;
  }
  return <span className="text-white text-sm font-medium">{value}</span>;
}

export default function Plans() {
  return (
    <section id="plans" className="bg-[#0D1117]">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Choose Your <span className="green-gradient-text">Growth Plan</span>
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
              className={`relative flex flex-col rounded-2xl p-6 ${
                plan.featured
                  ? "border-2 border-[#00E676] bg-[#00E676]/5 shadow-[0_0_48px_rgba(0,230,118,0.12)]"
                  : "border border-white/10 bg-white/[0.04]"
              }`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-[#00E676] text-[#0D1117] text-xs font-extrabold tracking-wide px-5 py-1.5 rounded-full shadow-[0_0_16px_rgba(0,230,118,0.5)]">
                    Most Popular
                  </span>
                </div>
              )}

              <h3 className={`text-2xl font-extrabold text-white ${plan.featured ? "mt-4" : "mt-1"}`}>
                {plan.name}
              </h3>
              <span
                className={`inline-block w-fit mt-3 text-xs font-semibold uppercase tracking-wide rounded-full px-4 py-1.5 border ${
                  plan.featured
                    ? "text-[#58A6FF] border-[#58A6FF]/35 bg-[#58A6FF]/10"
                    : "text-[#00E676] border-[#00E676]/35 bg-[#00E676]/10"
                }`}
              >
                {plan.badge}
              </span>
              <p className="text-[#8B949E] text-sm mt-4 leading-relaxed flex-1">
                {plan.whoIsItFor}
              </p>
            </div>
          ))}
        </div>

        {/* Feature comparison */}
        <div className="max-w-3xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse min-w-[560px]">
            <thead>
              <tr>
                <th className="text-left text-[#8B949E] text-sm font-semibold py-4 px-4">
                  What&apos;s included
                </th>
                <th className="text-center text-white text-sm font-semibold py-4 px-4">
                  Community
                </th>
                <th className="text-center text-[#00E676] text-sm font-semibold py-4 px-4">
                  City
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row) => (
                <tr key={row.label} className="border-t border-white/10">
                  <td className="text-[#C9D1D9] text-sm py-3.5 px-4">{row.label}</td>
                  <td className="text-center py-3.5 px-4">
                    <FeatureCell value={row.community} />
                  </td>
                  <td className="text-center py-3.5 px-4">
                    <FeatureCell value={row.city} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
