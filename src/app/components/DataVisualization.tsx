export default function DataVisualization() {
  const radius = 85;
  const circumference = 2 * Math.PI * radius;
  const percent = 70;
  const strokeDasharray = `${(percent / 100) * circumference} ${circumference}`;

  return (
    <section id="method" className="relative bg-[#0D1117]">
      <div className="section-container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="section-title">
            The Numbers{' '}
            <span className="green-gradient-text">Don&apos;t Lie</span>
          </h2>
        </div>

        {/* Donut Chart */}
        <div className="flex justify-center mb-16">
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full drop-shadow-lg"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Glow filter */}
              <defs>
                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="3" result="blur" />
                  <feMerge>
                    <feMergeNode in="blur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Background circle */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="#161B22"
                strokeWidth="30"
              />

              {/* 70% arc */}
              <circle
                cx="100"
                cy="100"
                r={radius}
                fill="none"
                stroke="#00E676"
                strokeWidth="30"
                strokeDasharray={strokeDasharray}
                strokeLinecap="round"
                transform="rotate(-90 100 100)"
                filter="url(#glow)"
                className="transition-all duration-1000"
              />

              {/* Center text - percentage */}
              <text
                x="100"
                y="92"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#FFFFFF"
                fontSize="42"
                fontWeight="800"
                fontFamily="Inter, system-ui, sans-serif"
              >
                70%
              </text>

              {/* Center text - label */}
              <text
                x="100"
                y="118"
                textAnchor="middle"
                dominantBaseline="middle"
                fill="#8B949E"
                fontSize="14"
                fontWeight="500"
                fontFamily="Inter, system-ui, sans-serif"
              >
                Map Pack
              </text>
            </svg>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="glass-card p-8 text-center">
            <div className="text-5xl font-extrabold green-gradient-text mb-4">
              70%
            </div>
            <p className="text-[#8B949E] text-base leading-relaxed">
              of local search traffic goes to the Top 3 organic results
            </p>
          </div>

          {/* Card 2 */}
          <div className="glass-card p-8 text-center">
            <div className="text-5xl font-extrabold text-[#8B949E] mb-4">
              30%
            </div>
            <p className="text-[#8B949E] text-base leading-relaxed">
              fight over paid ad scraps with diminishing returns
            </p>
          </div>

          {/* Card 3 */}
          <div className="glass-card p-8 text-center">
            <div className="text-5xl font-extrabold green-gradient-text mb-4">
              3x
            </div>
            <p className="text-[#8B949E] text-base leading-relaxed">
              higher conversion rate from Map Pack vs traditional ads
            </p>
          </div>
        </div>

        {/* Closing Paragraph */}
        <p className="text-lg text-[#C9D1D9] max-w-3xl mx-auto text-center mt-12 leading-relaxed">
          Most agencies sell you ads. We sell you the real estate that gets 70% of
          all clicks — the Google Maps Top 3. No bidding wars. No wasted budget.
          Just dominant visibility.
        </p>
      </div>
    </section>
  );
}
