import { ChevronDown, ShieldCheck, MapPin } from "lucide-react";

// [Tier3Labs Audit] — Hero visual: before/after search result cards
function HeroVisual() {
  return (
    <div className="flex gap-5 w-full max-w-lg mx-auto lg:mx-0 min-h-[320px]">
      {/* LEFT CARD — Before Tier3Labs */}
      <div className="flex-1">
        <p className="text-xs text-gray-500 mb-2 text-center">Before Tier3Labs</p>
        <div className="rounded-2xl bg-gray-900 border border-gray-800 p-5 flex flex-col gap-3 w-full">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="rounded-lg bg-gray-800 opacity-50 h-14 flex items-center px-4 gap-3"
            >
              <MapPin size={16} className="text-gray-600" />
              <div className="flex flex-col gap-1.5">
                <div className="bg-gray-700 rounded h-2.5 w-28" />
                <div className="bg-gray-700 rounded h-2 w-18" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* RIGHT CARD — With Tier3Labs */}
      <div className="flex-1">
        <p className="text-xs text-green-400 mb-2 text-center font-semibold">With Tier3Labs</p>
        {/* [Tier3Labs] — Enlarged visual with pulsing green glow */}
        <div className="rounded-2xl shadow-[0_0_60px_rgba(34,197,94,0.2)] animate-pulse">
          <div className="rounded-2xl bg-gray-900 border border-gray-800 p-5 flex flex-col gap-3 w-full">
            {/* Row 1 — Winner */}
            <div className="rounded-lg bg-green-500/20 border border-green-500/40 h-16 flex items-center px-4 gap-3">
              <MapPin size={16} className="text-green-400" />
              <span className="text-white text-sm font-bold">Your Business</span>
              <span className="ml-auto text-sm bg-green-500 text-black font-bold px-3 py-1 rounded-full shadow-[0_0_12px_rgba(34,197,94,0.5)]">#1</span>
            </div>
            {/* Row 2 */}
            <div className="rounded-lg bg-gray-800/60 h-14 flex items-center px-4 gap-3">
              <MapPin size={16} className="text-gray-500" />
              <div className="flex flex-col gap-1.5">
                <div className="bg-gray-700 rounded h-2.5 w-24" />
                <div className="bg-gray-700 rounded h-2 w-16" />
              </div>
            </div>
            {/* Row 3 */}
            <div className="rounded-lg bg-gray-800/60 h-14 flex items-center px-4 gap-3">
              <MapPin size={16} className="text-gray-500" />
              <div className="flex flex-col gap-1.5">
                <div className="bg-gray-700 rounded h-2.5 w-24" />
                <div className="bg-gray-700 rounded h-2 w-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center hero-gradient grid-pattern overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" />

      {/* [Tier3Labs Audit] — Reduced vertical padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-12">
        {/* [Tier3Labs Audit] — Two-column hero layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left: Copy */}
          <div className="text-center md:text-left">
            {/* [Tier3Labs] — Updated eyebrow text */}
            <p className="text-sm font-medium uppercase tracking-widest text-green-400 mb-4">
              For businesses on Google — but not yet in the Top 3
            </p>

            {/* [Tier3Labs] — Updated headline: three lines, italic green last line */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.15]">
              You&apos;re on Google.
              <br />
              You&apos;re just not where
              <br />
              <span className="text-green-400 italic">customers actually look.</span>
            </h1>

            {/* [Tier3Labs] — Updated sub-headline for target audience */}
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mt-6 leading-relaxed">
              If your business isn&apos;t in the Google Maps Top 3, you&apos;re invisible to the majority of people searching for exactly what you offer — right now, in your area. Tier3Labs changes that.
            </p>

            {/* [Tier3Labs Audit] — CTAs: primary button + plain text link with ChevronDown */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-8">
              <a href="#contact" className="btn-primary">
                Get My Free Visibility Audit
              </a>
              <a
                href="#method"
                className="text-sm text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                See How It Works
                <ChevronDown size={16} />
              </a>
            </div>

            {/* [Tier3Labs Audit] — Inline Zero Access trust badge with ShieldCheck */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-4 border border-green-900 rounded-full px-4 py-2 w-fit">
              <ShieldCheck size={16} className="text-green-400" />
              Zero Access Required — we never need your GBP or website credentials.
            </div>
          </div>

          {/* Right: Hero Visual */}
          <div className="flex justify-center md:justify-end">
            <HeroVisual />
          </div>
        </div>


      </div>
    </section>
  );
}
