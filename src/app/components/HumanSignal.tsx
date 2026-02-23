export default function HumanSignal() {
  return (
    <section id="human-signals" className="section-container">
      <div className="text-center mb-16">
        {/* [Tier3Labs Audit] — Updated section headline */}
        <h2 className="section-title mb-6">
          More Visits. Stronger Signals.
          <br />
          <span className="green-gradient-text">Higher Rankings.</span>
        </h2>
        {/* [Tier3Labs Audit] — Updated sub-headline */}
        <p className="text-[#8B949E] text-lg max-w-3xl mx-auto">
          We build the local authority signals Google actually trusts — through content, citations, and verified engagement patterns.
        </p>
      </div>

      {/* [Tier3Labs Audit] — Process flow layout with step badges + connectors */}
      <div className="flex flex-col md:flex-row items-stretch gap-6 md:gap-0">
        {/* Step 1 */}
        <div className="glass-card-hover p-8 flex-1 flex flex-col items-center text-center">
          <span className="bg-green-400 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm mb-4">1</span>
          <div className="mb-6">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="4" width="32" height="40" rx="4" stroke="#00E676" strokeWidth="2" />
              <path d="M16 14h16" stroke="#00E676" strokeWidth="2" strokeLinecap="round" />
              <path d="M16 22h16M16 28h12M16 34h8" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M32 30l4 4-4 4" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">We make Google see you as the local leader</h3>
          <p className="text-[#8B949E]">
            We build the local relevance signals Google uses to determine which businesses belong in the Top 3 for your area and service category.
          </p>
        </div>

        {/* Connector */}
        <div className="hidden md:flex w-12 items-center justify-center flex-shrink-0">
          <div className="w-full h-px bg-green-500/40" />
        </div>

        {/* Step 2 */}
        <div className="glass-card-hover p-8 flex-1 flex flex-col items-center text-center">
          <span className="bg-green-400 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm mb-4">2</span>
          <div className="mb-6">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="24" cy="24" r="8" stroke="#00E676" strokeWidth="2" />
              <circle cx="24" cy="24" r="3" fill="#00E676" fillOpacity="0.3" />
              <circle cx="10" cy="10" r="4" stroke="#00E676" strokeWidth="1.5" />
              <circle cx="38" cy="10" r="4" stroke="#00E676" strokeWidth="1.5" />
              <circle cx="10" cy="38" r="4" stroke="#00E676" strokeWidth="1.5" />
              <circle cx="38" cy="38" r="4" stroke="#00E676" strokeWidth="1.5" />
              <path d="M17 19l-4-6M31 19l4-6M17 29l-4 6M31 29l4 6" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">We generate trips to your Google Business profile</h3>
          <p className="text-[#8B949E]">
            We optimise how your Google Business Profile is engaged with — strengthening the behavioural signals that tell Google your business is the most relevant local choice.
          </p>
        </div>

        {/* Connector */}
        <div className="hidden md:flex w-12 items-center justify-center flex-shrink-0">
          <div className="w-full h-px bg-green-500/40" />
        </div>

        {/* Step 3 */}
        <div className="glass-card-hover p-8 flex-1 flex flex-col items-center text-center">
          <span className="bg-green-400 text-black font-bold rounded-full w-8 h-8 flex items-center justify-center text-sm mb-4">3</span>
          <div className="mb-6">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 36V20M16 36V16M24 36V12M32 36V18M40 36V8" stroke="#00E676" strokeWidth="3" strokeLinecap="round" />
              <path d="M8 36h34" stroke="#00E676" strokeWidth="1.5" />
              <path d="M36 12l4-4" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M38 12h2V8" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">We build the trust signals your competitors don&apos;t have</h3>
          <p className="text-[#8B949E]">
            Through our trusted network of content and citation partners, we build the external authority patterns that Google&apos;s local algorithm consistently rewards.
          </p>
        </div>
      </div>
    </section>
  );
}
