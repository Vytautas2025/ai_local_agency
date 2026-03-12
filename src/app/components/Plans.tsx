const CALENDLY_URL = "https://calendly.com/tier3labs-info/30min";

const plans = [
  {
    name: "MINI Plan",
    featured: false,
    specs: [
      { label: "Daily commutes", value: "10–20 / day", highlight: false, suffix: "" },
      { label: "Rating grid", value: "within area of 25 square miles", highlight: false, suffix: "" },
      { label: "Keywords", value: "10", highlight: false, suffix: "" },
    ],
    included: ["Free 7-day trial", "Cloud stack service"],
    notIncluded: ["Medium pages", "Google pages", "Google documents", "PDF"],
    purpose:
      "Subtly increase your GMB profile and visibility. Google Maps TOP 3 and your website's organic growth in Google Maps algorithms.",
    whoIsItFor:
      "Ideal for smaller businesses looking to start strengthening their position and increasing their visibility.",
  },
  {
    name: "MAXI Plan",
    featured: true,
    specs: [
      { label: "Daily commutes", value: "30–40 / day", highlight: true, suffix: "" },
      { label: "Rating grid", value: "within area of 100 square miles", highlight: false, suffix: "" },
      { label: "Keywords", value: "20", highlight: false, suffix: "" },
    ],
    included: [
      "Free 7-day trial",
      "Cloud stack service",
      "Medium pages",
      "Google pages",
      "Google documents",
      "PDF",
    ],
    notIncluded: [],
    purpose: "Organically strengthen your position and reach the TOP 3 position in searches.",
    whoIsItFor:
      "Perfect for businesses seeking intensive growth and wanting to quickly secure a leading position in the market.",
  },
];

export default function Plans() {
  return (
    <section id="plans" className="bg-[#0D1117]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Choose Your{" "}
            <span className="green-gradient-text">Growth Plan</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Both plans start with a free 7-day trial — no credit card, no contracts, cancel anytime.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl p-8 ${
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

              <h3 className={`text-2xl font-extrabold text-white mb-8 ${plan.featured ? "mt-6" : "mt-2"}`}>{plan.name}</h3>

              <div className="space-y-3 pb-6 mb-6 border-b border-white/10">
                {plan.specs.map((spec) => (
                  <div key={spec.label} className="flex items-start justify-between gap-3">
                    <span className="text-[#8B949E] text-sm shrink-0">{spec.label}:</span>
                    <div className="flex items-center gap-2">
                      <div className="flex flex-col items-end text-right">
                        <span
                          className={`text-sm font-semibold leading-snug ${
                            spec.highlight ? "text-[#00E676]" : "text-white"
                          }`}
                        >
                          {spec.value}
                        </span>
                        {spec.suffix && (
                          <span className="text-xs text-[#8B949E] leading-snug">{spec.suffix}</span>
                        )}
                      </div>
                      <svg
                        className="text-[#00E676] shrink-0 mt-0.5"
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mb-4">
                <p className="text-sm font-bold text-white mb-2">Included:</p>
                <ul className="space-y-1.5">
                  {plan.included.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-[#C9D1D9]">
                      <span className="text-[#00E676] font-bold">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {plan.notIncluded.length > 0 && (
                <div className="mb-6">
                  <p className="text-sm font-bold text-[#8B949E] mb-2">Not included:</p>
                  <ul className="space-y-1.5">
                    {plan.notIncluded.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-[#8B949E]/50">
                        <span>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              <div className="border-t border-white/10 my-6" />

              <div className="mb-4 flex-1">
                <p className="text-sm font-bold text-white mb-1">Purpose:</p>
                <p className="text-sm text-[#8B949E] leading-relaxed">{plan.purpose}</p>
              </div>

              <div className="mb-8">
                <p className="text-sm text-[#8B949E] leading-relaxed">
                  <span className="font-bold text-white">Who is it for?: </span>
                  {plan.whoIsItFor}
                </p>
              </div>

              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-center ${plan.featured ? "btn-primary" : "btn-ghost"}`}
              >
                Book a Free Call →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
