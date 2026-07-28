import Link from "next/link";

// Essential Build is a one-time foundation product, deliberately kept out of the
// Community/City monthly comparison table so it doesn't read as a cheaper tier.
// It is included as part of the City plan; Plans.tsx carries the single row that
// says so. No price or delivery window is published — both are quoted per job.

type Pillar = {
  title: string;
  blurb: string;
  items: string[];
  icon: React.ReactNode;
};

const pillars: Pillar[] = [
  {
    title: "Google Business Profile",
    blurb:
      "The profile itself, rebuilt properly — because every ranking signal we send afterwards points back at it.",
    items: [
      "Full profile audit and rebuild",
      "Primary and secondary categories",
      "Services built out as keyword targets",
      "Description, attributes, hours, service areas",
      "Photos, logo and cover optimised",
      "Q&A seeded, review request link and response templates",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path
          d="M24 44s14-11.5 14-22a14 14 0 1 0-28 0c0 10.5 14 22 14 22Z"
          stroke="#00E676"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <circle cx="24" cy="21" r="5.5" stroke="#00E676" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "Technical SEO",
    blurb:
      "The plumbing Google has to get through before any of your content counts.",
    items: [
      "Crawl and index audit",
      "Robots, sitemap, canonicals and redirects",
      "Broken pages and error clean-up",
      "Core Web Vitals and page speed",
      "LocalBusiness and Service schema markup",
      "Mobile usability and HTTPS checks",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <path d="M17 16 8 24l9 8" stroke="#00E676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M31 16l9 8-9 8" stroke="#00E676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M27 10 21 38" stroke="#00E676" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Website Local SEO",
    blurb:
      "Your website and your profile saying precisely the same thing, in the language local searchers use.",
    items: [
      "NAP consistency across your site",
      "Citation and directory audit and clean-up",
      "Location and service page structure",
      "Titles, H1s, meta descriptions, internal linking",
      "Google Maps embed and local content blocks",
      "AI Overviews and AI search readiness",
    ],
    icon: (
      <svg width="32" height="32" viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <rect x="6" y="8" width="36" height="32" rx="4" stroke="#00E676" strokeWidth="2" />
        <path d="M6 17h36" stroke="#00E676" strokeWidth="2" />
        <circle cx="11.5" cy="12.5" r="1.5" fill="#00E676" />
        <path d="M16 26h10M16 32h16" stroke="#00E676" strokeWidth="1.75" strokeLinecap="round" />
        <path d="M32 22.5 34.5 27l4.5 2-4.5 2-2.5 4.5-2.5-4.5-4.5-2 4.5-2 2.5-4.5Z" stroke="#00E676" strokeWidth="1.5" strokeLinejoin="round" />
      </svg>
    ),
  },
];

function Tick() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      className="shrink-0 mt-[3px]"
      aria-hidden="true"
    >
      <path
        d="M20 6L9 17l-5-5"
        stroke="#00E676"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function EssentialBuild() {
  return (
    <section id="essential-build" className="bg-[#0D1117]">
      <div className="section-container">
        <div className="text-center mb-12">
          <span className="inline-block text-[11px] font-bold uppercase tracking-[0.15em] text-[#58A6FF] border border-[#58A6FF]/40 bg-[#58A6FF]/10 rounded-full px-4 py-1.5 mb-5">
            One-time build · not a monthly plan
          </span>
          <h2 className="section-title">
            Essential <span className="green-gradient-text">Build</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Ranking signals only work as hard as the foundation underneath them.
            Essential Build fixes that foundation once, properly — your profile,
            your website and the technical groundwork Google reads before it
            ranks you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="glass-card-hover p-6 flex flex-col">
              <div className="mb-4">{pillar.icon}</div>
              <h3 className="text-lg font-bold text-white">{pillar.title}</h3>
              <p className="text-[#8B949E] text-sm mt-2 leading-relaxed">
                {pillar.blurb}
              </p>
              <ul className="mt-5 space-y-2.5 flex-1">
                {pillar.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-[#C9D1D9] text-[13px] leading-relaxed"
                  >
                    <Tick />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Proof of work — the deliverable a one-off customer keeps */}
        <div className="glass-card max-w-3xl mx-auto mt-8 p-6 md:p-7 border-[#00E676]/20">
          <h3 className="text-base font-bold text-white mb-3">
            You finish with proof, not a promise
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="flex items-start gap-2.5 text-[#C9D1D9] text-sm">
              <Tick />
              <span>
                <strong className="text-white font-semibold">
                  Baseline geo-grid report
                </strong>{" "}
                showing exactly where you rank across your area before we start.
              </span>
            </div>
            <div className="flex items-start gap-2.5 text-[#C9D1D9] text-sm">
              <Tick />
              <span>
                <strong className="text-white font-semibold">
                  Written before-and-after report
                </strong>{" "}
                documenting every change made to your profile and website.
              </span>
            </div>
          </div>
        </div>

        {/* Access requirement — stated before anyone reaches a quote */}
        <div className="max-w-3xl mx-auto mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-6 md:p-7">
          <h3 className="text-base font-bold text-white mb-3">
            What access we need, and what we never ask for
          </h3>
          <p className="text-[#8B949E] text-sm leading-relaxed">
            Essential Build is hands-on work, so it&apos;s the one thing we do
            that needs access. You add us as a{" "}
            <strong className="text-[#C9D1D9] font-semibold">manager</strong> on
            your Google Business Profile using our email address, and you give us
            access to your website or CMS so we can make the changes.
          </p>
          <p className="text-[#8B949E] text-sm leading-relaxed mt-3">
            We never ask for your Google password. You stay the owner of your
            profile throughout, and you can remove our manager access in a single
            click, whenever you like. Your ongoing Community or City plan needs no
            access at all — that work runs entirely externally.
          </p>
        </div>

        {/* Pricing & availability */}
        <div className="glass-card max-w-3xl mx-auto mt-6 p-6 md:p-8 text-center border-[#00E676]/20">
          <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
            Included as part of the City plan
          </h3>
          <p className="text-[#8B949E] text-sm leading-relaxed max-w-xl mx-auto">
            City customers get Essential Build as part of their plan, at no extra
            cost. You can also buy it on its own, whether or not you ever take a
            monthly plan. Scope and price are quoted per business, because no two
            profiles and websites need the same work.
          </p>
          <Link href="/#contact" className="btn-primary mt-7 inline-block">
            Get my Essential Build quote →
          </Link>
        </div>
      </div>
    </section>
  );
}
