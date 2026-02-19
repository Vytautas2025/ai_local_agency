export default function Comparison() {
  const rows = [
    {
      feature: "Traffic Share",
      ppc: "30% of clicks",
      mapPack: "70% of clicks",
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

        <div className="glass-card overflow-hidden">
          <div className="overflow-x-auto">
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
      </div>
    </section>
  );
}
