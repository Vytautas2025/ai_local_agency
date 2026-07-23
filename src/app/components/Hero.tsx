import { ChevronDown, ShieldCheck } from "lucide-react";
import AuditForm from "./AuditForm";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center hero-gradient grid-pattern overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-12">
        {/* [Tier3Labs], Two-column hero: copy left, lead form right */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left: Copy */}
          <div className="text-center md:text-left">
            <p className="text-sm font-medium uppercase tracking-widest text-green-400 mb-4">
              You&apos;re on Google, but not where customers actually look.
            </p>

            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.15]">
              <span className="text-green-400">Google Maps Top 3</span> Local SEO
              Agency for UK Businesses
            </h1>

            <p className="text-lg md:text-xl text-gray-300 max-w-xl mt-6 leading-relaxed">
              If your business isn&apos;t in the Google Maps Top 3, you&apos;re invisible to the majority of people searching for exactly what you offer, right now, in your area. Tier3Labs changes that.
            </p>
            <p className="text-2xl md:text-3xl text-white font-bold max-w-xl mt-3 leading-relaxed">
              We will work 7 days for free so <span className="text-green-400">you can see the results</span>.
            </p>

            <a
              href="#method"
              className="text-sm text-gray-300 hover:text-white inline-flex items-center gap-1 transition-colors mt-6"
            >
              See How It Works
              <ChevronDown size={16} />
            </a>

            {/* Inline Zero Access trust badge */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-6 border border-green-900 rounded-full px-4 py-2 w-fit max-w-full mx-auto md:mx-0">
              <ShieldCheck size={16} className="text-green-400" />
              Zero Access Required, we never need your GBP or website credentials.
            </div>
          </div>

          {/* Right: Lead form */}
          <div id="get-started" className="w-full scroll-mt-28">
            <div className="glass-card p-6 md:p-8">
              <h2 className="text-xl font-bold text-white">
                Get your free ranking audit
              </h2>
              <p className="text-[#8B949E] text-sm mt-1 mb-5">
                A 30-minute honest look at your local rankings.
              </p>
              <AuditForm eventLabel="hero_form" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
