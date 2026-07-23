import Image from "next/image";

export default function Results() {
  return (
    <section id="results" className="bg-[#0D1117]">
      <div className="section-container">
        <div className="text-center mb-10">
          <h2 className="section-title">
            Results That Speak{" "}
            <span className="green-gradient-text">Louder Than Promises</span>
          </h2>
          <p className="text-[#8B949E] text-lg mt-4 max-w-2xl mx-auto">
            A real geo-grid ranking report, from buried at #11 to the Google Maps
            Top 3.
          </p>
        </div>

        <div className="glass-card p-6 md:p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            {/* Before */}
            <div className="rounded-2xl overflow-hidden border border-white/10">
              <div className="bg-[#0D1117] py-4 text-center border-b border-white/10">
                <span className="text-white font-extrabold text-xl tracking-wide">
                  BEFORE <span className="text-red-400">(RANK #11)</span>
                </span>
                <p className="text-[#8B949E] text-sm mt-1">28 January 2026</p>
              </div>
              <Image
                src="/image before .png"
                alt="Geo-grid ranking report before optimisation, business ranking around position 11 across the local area"
                width={799}
                height={709}
                unoptimized
                className="w-full h-auto block"
              />
            </div>

            {/* After */}
            <div className="rounded-2xl overflow-hidden border border-[#00E676]/30">
              <div className="bg-[#0D1117] py-4 text-center border-b border-[#00E676]/20">
                <span className="text-white font-extrabold text-xl tracking-wide">
                  AFTER <span className="text-[#00E676]">(RANK #1)</span>
                </span>
                <p className="text-[#8B949E] text-sm mt-1">25 March 2026</p>
              </div>
              <Image
                src="/image after.png"
                alt="Geo-grid ranking report after optimisation, business ranking position 1 across the local area"
                width={799}
                height={709}
                unoptimized
                className="w-full h-auto block"
              />
            </div>
          </div>

          <p className="text-center text-[#C9D1D9] text-sm mt-6 font-medium">
            Rank #11 → #1 in ~8 weeks · verified geo-grid snapshots
          </p>
        </div>
      </div>
    </section>
  );
}
