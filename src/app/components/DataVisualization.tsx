export default function DataVisualization() {
  return (
    <section id="method" className="relative bg-[#0D1117]">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            The Numbers{" "}
            <span className="green-gradient-text">Don&apos;t Lie</span>
          </h2>
        </div>

        {/* [Tier3Labs Audit] — Horizontal traffic distribution bar replacing donut chart */}
        <div className="max-w-3xl mx-auto mb-16">
          {/* Labels row — aligned to bar segments */}
          <div className="flex text-xs text-gray-400 mb-2">
            <div style={{ width: "70%" }} className="text-center truncate">Map Pack Top 3 — 70%</div>
            <div style={{ width: "20%" }} className="text-center truncate">Organic — 20%</div>
            <div style={{ width: "10%" }} className="text-center truncate">Ads &amp; Other — 10%</div>
          </div>
          {/* Bar */}
          <div className="flex rounded-full overflow-hidden h-6 w-full">
            <div className="bg-green-500" style={{ width: "70%" }} />
            <div className="bg-green-700" style={{ width: "20%" }} />
            <div className="bg-gray-600" style={{ width: "8%" }} />
            <div className="bg-gray-800" style={{ width: "2%" }} />
          </div>
          <p className="text-xs text-gray-500 mt-2 text-center">Source: BrightLocal Local Search Study, 2024</p>
        </div>

        {/* [Tier3Labs Audit] — Updated stat cards: 4 cards with sources */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {/* Card 1 */}
          <div className="glass-card p-8 text-center">
            <div className="text-5xl font-extrabold green-gradient-text mb-4">
              70%
            </div>
            <p className="text-[#8B949E] text-base leading-relaxed">
              of all local search clicks go to the Google Maps Top 3
            </p>
            <p className="text-xs text-gray-500 mt-1">BrightLocal, 2024</p>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-8 text-center">
            <div className="text-5xl font-extrabold green-gradient-text mb-4">
              9 in 10
            </div>
            {/* [Tier3Labs] — Updated card 2 description for target audience */}
            <p className="text-[#8B949E] text-base leading-relaxed">
              of your potential customers choose from the first 3 results — if you’re not there, you don’t exist to them
            </p>
            <p className="text-xs text-gray-500 mt-1">Google Search Data</p>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-8 text-center">
            <div className="text-5xl font-extrabold green-gradient-text mb-4">
              3x
            </div>
            <p className="text-[#8B949E] text-base leading-relaxed">
              higher conversion rate from Map Pack vs traditional ads
            </p>
            <p className="text-xs text-gray-500 mt-1">Google Business Profile Insights</p>
          </div>

          {/* [Tier3Labs Audit] — New 4th stat card */}
          <div className="glass-card p-8 text-center">
            <div className="text-5xl font-extrabold text-green-400 mb-4">
              £0
            </div>
            {/* [Tier3Labs] — Updated card 4 description for target audience */}
            <p className="text-[#8B949E] text-base leading-relaxed">
              in paid ad budget needed. Unlike PPC, your Map Pack position doesn’t disappear when you stop paying.
            </p>
            <p className="text-xs text-gray-500 mt-1">Tier3Labs client data</p>
          </div>
        </div>

        {/* [Tier3Labs] — Upgraded closing paragraph to styled container */}
        <div className="max-w-3xl mx-auto mt-12 border-l-4 border-green-500 bg-gray-900/60 rounded-r-xl px-8 py-6">
          <p className="text-lg text-white font-medium leading-relaxed">
            Most agencies rent you visibility. We help you own it. The Google Maps
            Top 3 captures the majority of every local search — and unlike ads, it
            doesn’t stop working the moment you stop paying.
          </p>
        </div>
      </div>
    </section>
  );
}
