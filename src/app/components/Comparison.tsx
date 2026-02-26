export default function Comparison() {
  const rows = [
    {
      feature: "Traffic Share",
      ppc: "~10% of clicks",
      mapPack: "up to 70% of clicks",
    },
    {
      feature: "Cost",
      ppc: "Increasing monthly",
      mapPack: "Fixed investment",
    },
    {
      feature: "Trust Factor",
      ppc: "'Ad' label reduces trust",
      mapPack: "Organic = trusted",
    },
    {
      feature: "Longevity",
      ppc: "Stops when you stop paying",
      mapPack: "Compounds over time",
    },
    {
      feature: "Click-Through Rate",
      ppc: "1-2%",
      mapPack: "30-40%",
    },
    {
      feature: "AI Visibility",
      ppc: "None",
      mapPack: "Full AI citation optimization",
    },
    {
      feature: "Requires Ongoing Ad Budget",
      ppc: "Yes (£500–£5,000/mo minimum)",
      mapPack: "No",
    },
  ];

  return (
    <section className="bg-[#0D1117]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Why the Map Pack Beats{" "}
            <span className="green-gradient-text">Paid Ads</span> Every Time
          </h2>
        </div>

        {/* ── MOBILE: stacked cards (< md) ── */}
        <div className="md:hidden space-y-3">
          {/* Column headers */}
          <div className="grid grid-cols-2 gap-px ml-auto w-full">
            <div /> {/* spacer for feature label */}
          </div>
          {/* Sticky column labels */}
          <div className="grid grid-cols-[1fr_1fr] gap-3 mb-1 px-1">
            <div className="text-xs font-semibold uppercase tracking-wider text-red-400 text-center">
              Paid Ads (PPC)
            </div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#00E676] text-center">
              Map Pack
            </div>
          </div>

          {rows.map((row) => (
            <div key={row.feature} className="rounded-xl border border-white/10 overflow-hidden">
              {/* Feature name — full-width header */}
              <div className="bg-white/5 px-4 py-2.5 border-b border-white/10">
                <p className="text-white font-semibold text-sm">{row.feature}</p>
              </div>
              {/* Two equal columns */}
              <div className="grid grid-cols-2 divide-x divide-white/10">
                <div className="px-4 py-4">
                  <p className="text-sm text-[#8B949E] leading-snug">
                    <span className="text-red-400/80 mr-1">&#10007;</span>
                    {row.ppc}
                  </p>
                </div>
                <div className="px-4 py-4 bg-[#00E676]/5">
                  <p className="text-sm text-[#C9D1D9] leading-snug">
                    <span className="text-[#00E676] mr-1">&#10003;</span>
                    {row.mapPack}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── DESKTOP: full table (≥ md) ── */}
        <div className="hidden md:block glass-card overflow-hidden">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-white/5 border-b border-white/10">
                <th className="px-6 py-4 text-sm uppercase tracking-wider text-[#8B949E] font-medium">
                  What matters to your bottom line
                </th>
                <th className="px-6 py-4 text-sm uppercase tracking-wider text-red-400 font-medium">
                  Paid Ads (PPC)
                </th>
                <th className="px-6 py-4 text-sm uppercase tracking-wider text-[#00E676] font-medium bg-[#00E676]/5">
                  Map Pack (Our Method)
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr
                  key={row.feature}
                  className={index % 2 === 1 ? "bg-white/[0.02]" : "bg-transparent"}
                >
                  <td className="px-6 py-5 border-b border-white/5 text-white font-medium">
                    {row.feature}
                  </td>
                  <td className="px-6 py-5 border-b border-white/5 text-[#8B949E]">
                    <span className="text-red-400/70">&#10007;</span> {row.ppc}
                  </td>
                  <td className="px-6 py-5 border-b border-white/5 text-[#C9D1D9] bg-[#00E676]/5">
                    <span className="text-[#00E676]">&#10003;</span> {row.mapPack}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
}
