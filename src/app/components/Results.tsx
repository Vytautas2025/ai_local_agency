export default function Results() {
  const stats = [
    { value: "70%", label: "Average Traffic Increase" },
    { value: "Top 3", label: "Map Pack Positions Secured" },
    { value: "3x", label: "More Calls & Directions" },
    { value: "90 Days", label: "Average Time to Results" },
  ];

  const caseStudies = [
    {
      beforeAfter: "Position #12 → Position #2",
      improvement: "+340% Map Views",
      quote:
        "Our phone hasn’t stopped ringing since we hit the top 3.",
      industry: "Local Dental Practice",
    },
    {
      beforeAfter: "Position #15 → Position #1",
      improvement: "+520% Direction Requests",
      quote:
        "We went from invisible to the first name people see. Game changer.",
      industry: "HVAC Company",
    },
    {
      beforeAfter: "Position #8 → Position #3",
      improvement: "+280% Phone Calls",
      quote:
        "The quality of leads we get now is on a completely different level.",
      industry: "Law Firm",
    },
  ];

  return (
    <section id="results" className="bg-[#0D1117]">
      <div className="section-container">
        <div className="text-center mb-16">
          <h2 className="section-title">
            Results That Speak{" "}
            <span className="green-gradient-text">Louder Than Promises</span>
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card p-6 text-center">
              <p className="text-3xl md:text-4xl font-extrabold green-gradient-text mb-2">
                {stat.value}
              </p>
              <p className="text-[#8B949E] text-sm">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies.map((study) => (
            <div key={study.industry} className="glass-card-hover p-8">
              <p className="text-xs uppercase tracking-wider text-[#8B949E] mb-4">
                Before → After
              </p>
              <p className="text-2xl font-bold text-white mb-2">
                {study.beforeAfter}
              </p>
              <p className="text-[#00E676] font-semibold mb-4">
                {study.improvement}
              </p>
              <p className="text-[#8B949E] italic mt-4">
                &ldquo;{study.quote}&rdquo;
              </p>
              <p className="text-[#8B949E] text-sm mt-2">
                — {study.industry}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-[#8B949E] text-sm mb-4">
            Trusted by local businesses across industries
          </p>
          <div className="flex justify-center gap-3 mt-4 flex-wrap">
            {["Dental", "Legal", "HVAC", "Restaurants", "Med Spas", "Hospitality"].map((industry) => (
              <span
                key={industry}
                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#8B949E] text-xs font-medium"
              >
                {industry}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
