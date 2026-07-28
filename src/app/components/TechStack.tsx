import Link from "next/link";

export default function TechStack() {
  return (
    <section id="services" className="section-container">
      <div className="text-center mb-10">
        <h2 className="section-title mb-4">
          Your Local{" "}
          <span className="green-gradient-text">Content Strategy</span>
        </h2>
        <p className="text-[#8B949E] text-lg max-w-3xl mx-auto">
          You already have a Google Business Profile. Here&apos;s what&apos;s been missing, and what we add every month to get you into the Top 3.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* Column 1, Visibility & Authority */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            Visibility &amp; Authority
          </h3>
          <div className="glass-card-hover p-5 flex-1">
            <div className="mb-3">
              <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="28" height="20" rx="3" stroke="#00E676" strokeWidth="2" />
                <rect x="10" y="14" width="28" height="20" rx="3" stroke="#00E676" strokeWidth="2" />
                <rect x="14" y="22" width="28" height="20" rx="3" stroke="#00E676" strokeWidth="2" fill="#00E676" fillOpacity="0.05" />
                <path d="M22 30H34" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M22 35H30" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white mb-2">Ranking Signals That Google Loves</h3>
            <p className="text-[#8B949E] text-sm">
              Leveraging Google&apos;s own properties (Docs, Sheets, Sites) to create high-authority signal stacks that boost your local relevance.
            </p>
          </div>
          <div className="glass-card-hover p-5 flex-1">
            <div className="mb-3">
              <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M14 34C8.477 34 4 29.523 4 24C4 19.306 7.218 15.38 11.56 14.292C12.636 9.584 16.876 6 22 6C27.124 6 31.364 9.584 32.44 14.292C36.782 15.38 40 19.306 40 24C40 29.523 35.523 34 30 34" stroke="#00E676" strokeWidth="2" strokeLinecap="round" />
                <path d="M18 34H30" stroke="#00E676" strokeWidth="2" strokeLinecap="round" />
                <path d="M24 28V42" stroke="#00E676" strokeWidth="2" strokeLinecap="round" />
                <path d="M20 38L24 42L28 38" stroke="#00E676" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white mb-2">Multi-Platform Presence Building</h3>
            <p className="text-[#8B949E] text-sm">
              Content distributed across cloud platforms and high-authority sites, ensuring maximum indexing and broad digital footprint.
            </p>
          </div>
        </div>

        {/* Column 2, Content That Ranks */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            Content That Ranks
          </h3>
          <div className="glass-card-hover p-5 flex-1">
            <div className="mb-3">
              <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="8" y="4" width="32" height="40" rx="4" stroke="#00E676" strokeWidth="2" />
                <path d="M16 14H32" stroke="#00E676" strokeWidth="2" strokeLinecap="round" />
                <path d="M16 22H32M16 28H28M16 34H24" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white mb-2">Authority Articles</h3>
            <p className="text-[#8B949E] text-sm">
              Published on high-domain-authority platforms with strategic backlinks that establish your expertise and strengthen your ranking signals.
            </p>
          </div>
        </div>

        {/* Column 3, Strategy & Reporting */}
        <div className="flex flex-col gap-4">
          <h3 className="text-sm font-semibold uppercase tracking-widest text-white flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 inline-block" />
            Strategy &amp; Reporting
          </h3>
          <div className="glass-card-hover p-5 flex-1">
            <div className="mb-3">
              <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="24" cy="24" r="6" stroke="#00E676" strokeWidth="2" />
                <circle cx="24" cy="24" r="2" fill="#00E676" />
                <circle cx="12" cy="12" r="4" stroke="#00E676" strokeWidth="1.5" />
                <circle cx="36" cy="12" r="4" stroke="#00E676" strokeWidth="1.5" />
                <circle cx="12" cy="36" r="4" stroke="#00E676" strokeWidth="1.5" />
                <circle cx="36" cy="36" r="4" stroke="#00E676" strokeWidth="1.5" />
                <path d="M18 20L15 15M30 20L33 15M18 28L15 33M30 28L33 33" stroke="#00E676" strokeWidth="1" strokeLinecap="round" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white mb-2">Keyword Ranking Tracker</h3>
            <p className="text-[#8B949E] text-sm">
              Stay on top of your most valuable local keywords with bi-weekly ranking reports, so you always know where you stand.
            </p>
          </div>
          <div className="glass-card-hover p-5 flex-1">
            <div className="mb-3">
              <svg width="36" height="36" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="6" y="6" width="36" height="36" rx="4" stroke="#00E676" strokeWidth="2" />
                <path d="M6 16H42" stroke="#00E676" strokeWidth="1.5" />
                <path d="M14 38V28" stroke="#00E676" strokeWidth="3" strokeLinecap="round" />
                <path d="M22 38V24" stroke="#00E676" strokeWidth="3" strokeLinecap="round" />
                <path d="M30 38V20" stroke="#00E676" strokeWidth="3" strokeLinecap="round" />
                <path d="M38 38V22" stroke="#00E676" strokeWidth="3" strokeLinecap="round" />
                <circle cx="12" cy="11" r="1.5" fill="#00E676" />
                <circle cx="18" cy="11" r="1.5" fill="#00E676" fillOpacity="0.5" />
                <circle cx="24" cy="11" r="1.5" fill="#00E676" fillOpacity="0.3" />
              </svg>
            </div>
            <h3 className="text-base font-bold text-white mb-2">Bi-Weekly Geo-Grid Reports</h3>
            <p className="text-[#8B949E] text-sm">
              See exactly where you rank, every two weeks, on an interactive geo-grid map. No guesswork, just transparent, verifiable proof of your progress.
            </p>
          </div>
        </div>

      </div>

      {/* Pricing CTA */}
      <div className="glass-card p-6 md:p-8 max-w-3xl mx-auto text-center mt-8 border-[#00E676]/20">
        <h3 className="text-2xl font-bold text-white mb-2">One fixed monthly fee. No retainers. No surprises.</h3>
        <p className="text-[#8B949E] text-sm mb-6">
          Pricing is based on your market, competition level, and the number of services you want to rank for. Every plan is tailored, no cookie-cutter packages.
        </p>
        {/* Root-relative: this section also renders on /services, where the
            #contact form does not exist. */}
        <Link href="/#contact" className="btn-primary inline-block">
          Get My Fixed-Price Quote →
        </Link>
      </div>
    </section>
  );
}
