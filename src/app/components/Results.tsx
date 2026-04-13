import Image from "next/image";

export default function Results() {
  const stats = [
    { value: "60%", label: "Average Traffic Increase" },
    { value: "Top 3", label: "Map Pack Positions Secured" },
    { value: "3x", label: "More Calls & Directions" },
    { value: "90 Days", label: "Average Time to Results" },
  ];

  const caseStudies = [
    {
      beforeAfter: "Position #12 → Position #1",
      improvement: "+340% Map Views",
      quote: "Our phone hasn't stopped ringing since we hit the top 3.",
      attribution: "— G. Treinkman, East Village Dental Centre, Chicago",
    },
    {
      beforeAfter: "Position #15 → Position #3",
      improvement: "+520% Direction Requests",
      quote: "Within weeks our schedule was fuller than it's ever been. The results speak for themselves.",
      attribution: "— Sarah M., EHC Inc Electrical Heating Cooling, Boston",
    },
    {
      beforeAfter: "Position #8 → Position #1",
      improvement: "+280% Phone Calls",
      quote: "The quality of leads we get now is on a completely different level.",
      attribution: "— David K., Lonnie Lawyer LLC, Miami Beach",
    },
  ];

  return (
    <section id="results" className="bg-[#0D1117]">
      <div className="section-container">
        <div className="text-center mb-16">
          <p className="section-title">
            Results That Speak{" "}
            <span className="green-gradient-text">Louder Than Promises</span>
          </p>
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

        {/* Geo-grid Before / After */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-16 max-w-3xl mx-auto items-start">
          <div className="glass-card overflow-hidden rounded-2xl border border-white/10">
            <div className="bg-[#0D1117] py-4 text-center border-b border-white/10">
              <span className="text-white font-extrabold text-xl tracking-wide">BEFORE <span className="text-red-400">(RANK #21)</span></span>
              <p className="text-[#8B949E] text-sm mt-1">28 January 2025</p>
            </div>
            <Image
              src="/before minesota.png"
              alt="Geo-grid before — Rank #21"
              width={799}
              height={709}
              unoptimized
              className="w-full h-auto block"
            />
          </div>
          <div className="glass-card overflow-hidden rounded-2xl border border-[#00E676]/30">
            <div className="bg-[#0D1117] py-4 text-center border-b border-[#00E676]/20">
              <span className="text-white font-extrabold text-xl tracking-wide">AFTER <span className="text-[#00E676]">(RANK #TOP3)</span></span>
              <p className="text-[#8B949E] text-sm mt-1">8 March 2025</p>
            </div>
            <Image
              src="/after minesota.png"
              alt="Geo-grid after — Rank Top 3"
              width={799}
              height={709}
              unoptimized
              className="w-full h-auto block"
            />
          </div>
        </div>

        <div className="mb-12 text-center">
          <div className="glass-card px-6 py-4 text-center inline-block">
            <p className="text-3xl font-extrabold green-gradient-text">Industries Served</p>
            <p className="text-white text-xl font-bold mt-2 leading-snug">
              Car Dealership and Servicing, Dental, Med Spas, Legal, Builders, Estate Agencies, Restaurants
            </p>
          </div>
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

      </div>
    </section>
  );
}
