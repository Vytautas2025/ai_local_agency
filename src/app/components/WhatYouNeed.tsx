const items = [
  "A verified Google Business Profile",
  "A live website with your services & location",
  "15+ reviews on Google Business Profile",
  "A verified business address",
];

export default function WhatYouNeed() {
  return (
    <section className="bg-[#0D1117]">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            What you need{" "}
            <span className="green-gradient-text">to start</span>
          </h2>
        </div>

        <div className="glass-card max-w-2xl mx-auto p-8">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-[#C9D1D9] text-sm"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="shrink-0 mt-0.5"
                  aria-hidden="true"
                >
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="#00E676"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {item}
              </li>
            ))}
          </ul>
          <p className="text-[#8B949E] text-sm mt-6 pt-6 border-t border-white/10 leading-relaxed">
            Don&apos;t tick every box? We&apos;ll help you tighten the gaps, and
            you never hand over a single login.
          </p>
        </div>
      </div>
    </section>
  );
}
