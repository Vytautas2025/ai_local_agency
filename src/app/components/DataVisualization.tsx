export default function DataVisualization() {
  return (
    <section id="method" className="relative bg-[#0D1117]">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="section-title">
            The Numbers{" "}
            <span className="green-gradient-text">Don&apos;t Lie</span>
          </p>
        </div>

        {/* [Tier3Labs Audit] — Horizontal traffic distribution bar replacing donut chart */}
        <div className="max-w-3xl mx-auto mb-16">
          {/* Bar */}
          <div className="flex rounded-full overflow-hidden h-6 w-full">
            <div className="bg-green-500" style={{ width: "60%" }} />
            <div className="bg-green-700" style={{ width: "30%" }} />
            <div className="bg-gray-600" style={{ width: "10%" }} />
          </div>
          {/* Legend row — uses wrapping flex + colored dots to avoid overflow from tight segment widths */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 mt-3 text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-green-500 shrink-0" />
              Google Map Pack — 60%
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-green-700 shrink-0" />
              Organic Results — 28%–32%
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-gray-600 shrink-0" />
              Paid Ads (PPC/LSA) — 8%–12%
            </div>
          </div>
        </div>

        {/* [Tier3Labs Audit] — Updated stat cards: 4 cards with sources */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="glass-card p-8 text-center">
            <div className="text-5xl font-extrabold green-gradient-text mb-4">
              60%
            </div>
            <p className="text-[#8B949E] text-base leading-relaxed">
              of all local search clicks go to the Google Maps Top 3
            </p>
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
