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
      quote: "Our phone hasn't stopped ringing since we hit the top 3.",
      attribution: "— James T., Premier Dental, Manchester",
    },
    {
      beforeAfter: "Position #15 → Position #1",
      improvement: "+520% Direction Requests",
      quote: "We went from invisible to the first name people see. Game changer.",
      attribution: "— Sarah M., Reliable Heat & Air, Birmingham",
    },
    {
      beforeAfter: "Position #8 → Position #3",
      improvement: "+280% Phone Calls",
      quote: "The quality of leads we get now is on a completely different level.",
      attribution: "— David K., Kensington Law Group, London",
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
            <div key={study.attribution} className="glass-card-hover p-8">
              <p className="text-xs uppercase tracking-wider text-[#8B949E] mb-4">
                Before &rarr; After
              </p>
              <p className="text-2xl font-bold text-white mb-2">
                {study.beforeAfter}
              </p>
              <p className="text-[#00E676] font-semibold mb-4">
                {study.improvement}
              </p>
              <p className="text-[#C9D1D9] italic mt-4">
                &ldquo;{study.quote}&rdquo;
              </p>
              <p className="text-[#8B949E] text-sm mt-2">
                {study.attribution}
              </p>
            </div>
          ))}
        </div>

        {/* Social Proof Footer */}
        <div className="mt-12 text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            <div className="glass-card px-6 py-4 text-center">
              <p className="text-2xl font-extrabold green-gradient-text">47+</p>
              <p className="text-[#8B949E] text-xs mt-1">Local businesses currently ranked in their Top 3</p>
            </div>
            <div className="glass-card px-6 py-4 text-center">
              <p className="text-2xl font-extrabold green-gradient-text">6</p>
              <p className="text-[#8B949E] text-xs mt-1">Industries served (Dental, Legal, HVAC, Restaurants, Med Spas, Hospitality)</p>
            </div>
            <div className="glass-card px-6 py-4 text-center">
              <p className="text-2xl font-extrabold green-gradient-text">4.9&#9733;</p>
              <p className="text-[#8B949E] text-xs mt-1">Average client satisfaction</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
