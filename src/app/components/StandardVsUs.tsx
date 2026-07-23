const rows: { feature: string; standard: boolean }[] = [
  { feature: "Google Maps / Map Pack focus", standard: false },
  { feature: "Daily engagement signals", standard: false },
  { feature: "Google Business Profile SEO", standard: false },
  { feature: "Website on-page local SEO", standard: true },
  { feature: "Local rank-grid tracking", standard: false },
  { feature: "Cloud stack service", standard: false },
  { feature: "No access to your accounts needed", standard: false },
  { feature: "Results in weeks, not months", standard: false },
  { feature: "No long-term contract", standard: false },
];

function Check() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-label="Included">
      <path d="M20 6L9 17l-5-5" stroke="#00E676" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function Cross() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-label="Not included">
      <path d="M6 6l12 12M18 6L6 18" stroke="#FF7B72" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

export default function StandardVsUs() {
  return (
    <section className="bg-[#0D1117]">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Not just SEO,{" "}
            <span className="green-gradient-text">local domination</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Most agencies chase website rankings. We&apos;re built for the Google
            Maps Top 3.
          </p>
        </div>

        <div className="max-w-3xl mx-auto overflow-x-auto">
          <table className="w-full border-collapse min-w-[520px]">
            <thead>
              <tr>
                <th className="text-left text-[#8B949E] text-sm font-semibold py-4 px-4">
                  What matters for local
                </th>
                <th className="text-center text-[#8B949E] text-sm font-semibold py-4 px-4">
                  Typical SEO agency
                </th>
                <th className="text-center text-[#00E676] text-sm font-semibold py-4 px-4">
                  Tier3Labs
                </th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.feature} className="border-t border-white/10">
                  <td className="text-[#C9D1D9] text-sm py-4 px-4">{r.feature}</td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      {r.standard ? <Check /> : <Cross />}
                    </div>
                  </td>
                  <td className="py-4 px-4">
                    <div className="flex justify-center">
                      <Check />
                    </div>
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
