import Image from "next/image";
import { ChevronDown, ShieldCheck } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative flex items-center justify-center hero-gradient grid-pattern overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" />

      {/* [Tier3Labs Audit], Reduced vertical padding */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-12">
        {/* [Tier3Labs Audit], Two-column hero layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Left: Copy */}
          <div className="text-center md:text-left">
            {/* [Tier3Labs], Updated eyebrow text */}
            <p className="text-sm font-medium uppercase tracking-widest text-green-400 mb-4">
              You&apos;re on Google, but not where customers actually look.
            </p>


            {/* [Tier3Labs], Updated headline */}
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-extrabold tracking-tight text-white leading-[1.15]">
              For businesses on Google but{" "}
              <span className="text-green-400 italic">not yet</span>{" "}
              <span className="text-green-400 italic">in the</span>{" "}
              <span className="text-green-400 italic">Top 3.</span>
            </h1>

            {/* [Tier3Labs], Updated sub-headline for target audience */}
            <p className="text-lg md:text-xl text-gray-300 max-w-xl mt-6 leading-relaxed">
              If your business isn&apos;t in the Google Maps Top 3, you&apos;re invisible to the majority of people searching for exactly what you offer, right now, in your area. Tier3Labs changes that.
            </p>
            <p className="text-2xl md:text-3xl text-white font-bold max-w-xl mt-3 leading-relaxed">
              We will work 7 days for free so <span className="text-green-400">you can see the results</span>.
            </p>

            {/* [Tier3Labs Audit], CTAs: primary button + plain text link with ChevronDown */}
            <div className="flex flex-col sm:flex-row items-center md:items-start gap-4 mt-6">
              <a href="#contact" className="btn-primary">
                Start For Free
              </a>
              <a
                href="#method"
                className="text-sm text-gray-300 hover:text-white flex items-center gap-1 transition-colors"
              >
                See How It Works
                <ChevronDown size={16} />
              </a>
            </div>

            {/* [Tier3Labs Audit], Inline Zero Access trust badge with ShieldCheck */}
            <div className="flex items-center gap-2 text-xs text-gray-400 mt-4 border border-green-900 rounded-full px-4 py-2 w-fit max-w-full">
              <ShieldCheck size={16} className="text-green-400" />
              Zero Access Required, we never need your GBP or website credentials.
            </div>
          </div>

          {/* Right: Hero Visual */}
          <div className="flex justify-center md:justify-end">
            <Image
              src="/telefonai.png"
              alt="Two mobile phones showing a local business ranked in the Google Maps Top 3 results"
              width={900}
              height={700}
              priority
              className="w-full max-w-xl md:max-w-2xl h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
