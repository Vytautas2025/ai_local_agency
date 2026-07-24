// [Tier3Labs], External citations for the stat block (GEO "cite sources" signal)
const sources = [
  {
    n: 1,
    label: "BrightLocal — Local Services Ads Click Study",
    url: "https://www.brightlocal.com/research/local-services-ads-click-study/",
  },
  {
    n: 2,
    label: "SOCi — Consumer Behavior Index (Local SEO Statistics)",
    url: "https://www.soci.ai/blog/local-seo-statistics/",
  },
];

function Cite({ n }: { n: number }) {
  const source = sources.find((s) => s.n === n);
  if (!source) return null;
  return (
    <sup className="text-sm align-super ml-0.5 font-normal">
      <a
        href={source.url}
        target="_blank"
        rel="nofollow noopener noreferrer"
        aria-label={`Source: ${source.label}`}
        className="text-gray-500 hover:text-green-400 transition-colors"
      >
        {n}
      </a>
    </sup>
  );
}

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

        {/* [Tier3Labs Audit], Horizontal traffic distribution bar replacing donut chart */}
        <div className="max-w-3xl mx-auto mb-16">
          {/* Bar */}
          <div className="flex rounded-full overflow-hidden h-6 w-full">
            <div className="bg-green-500" style={{ width: "80%" }} />
            <div className="bg-gray-600" style={{ width: "18%" }} />
            <div className="bg-gray-700" style={{ width: "2%" }} />
          </div>
          {/* Legend row, uses wrapping flex + colored dots to avoid overflow from tight segment widths */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-1.5 mt-3 text-xs text-gray-400">
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-green-500 shrink-0" />
              Organic traffic: ~80%
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-gray-600 shrink-0" />
              Paid Ads (PPC/LSA): ~18%
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-2.5 h-2.5 rounded-sm bg-gray-700 shrink-0" />
              Other / zero-click: ~2%
            </div>
          </div>
        </div>

        {/* [Tier3Labs Audit], Stat cards re-anchored to citable sources */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Card 1 */}
          <div className="glass-card p-8 text-center">
            <div className="text-5xl font-extrabold mb-4">
              <span className="green-gradient-text">80%</span>
              <Cite n={1} />
            </div>
            <p className="text-[#8B949E] text-base leading-relaxed">
              of all local search clicks are organic, not paid ads
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-8 text-center">
            <div className="text-5xl font-extrabold mb-4">
              <span className="green-gradient-text">126%</span>
              <Cite n={2} />
            </div>
            <p className="text-[#8B949E] text-base leading-relaxed">
              more traffic to businesses in the Top 3 than those ranked 4–10
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-8 text-center">
            <div className="text-5xl font-extrabold mb-4">
              <span className="green-gradient-text">93%</span>
              <Cite n={2} />
            </div>
            <p className="text-[#8B949E] text-base leading-relaxed">
              more calls, clicks and directions than ranks 4–10
            </p>
          </div>
        </div>

        {/* [Tier3Labs], Upgraded closing paragraph to styled container */}
        <div className="max-w-3xl mx-auto mt-12 border-l-4 border-green-500 bg-gray-900/60 rounded-r-xl px-8 py-6">
          <p className="text-lg text-white font-medium leading-relaxed">
            Most agencies rent you visibility. We help you own it. The Google Maps
            Top 3 captures the single biggest share of every local search, and
            unlike ads, it doesn’t stop working the moment you stop paying.
          </p>
        </div>

        {/* [Tier3Labs], Sources — machine-readable citation layer for AI search */}
        <div className="max-w-3xl mx-auto mt-10">
          <p className="text-xs uppercase tracking-wider text-gray-500 mb-2">
            Sources
          </p>
          <ol className="text-xs text-gray-500 space-y-1">
            {sources.map((s) => (
              <li key={s.n} className="flex gap-2">
                <span className="text-gray-600 shrink-0">{s.n}.</span>
                <a
                  href={s.url}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  className="hover:text-green-400 transition-colors underline underline-offset-2 decoration-gray-700"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
