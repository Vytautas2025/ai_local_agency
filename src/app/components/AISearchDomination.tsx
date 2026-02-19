export default function AISearchDomination() {
  return (
    <section id="ai-search" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title mb-6">
          The New #1 Spot Isn&apos;t a Blue Link —{" "}
          <span className="green-gradient-text">It&apos;s an AI Citation</span>
        </h2>
        <p className="text-[#8B949E] text-lg max-w-3xl mx-auto">
          We don&apos;t just optimize for rankings. We optimize for AI recommendations.
        </p>
      </div>

      {/* Three Explanation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Card 1 - AI Search Overviews */}
        <div className="glass-card-hover p-8">
          <div className="mb-6">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="18" r="10" stroke="#00E676" strokeWidth="2" />
              <path
                d="M18 28C18 28 16 32 16 36C16 40 20 44 24 44C28 44 32 40 32 36C32 32 30 28 30 28"
                stroke="#00E676"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <circle cx="21" cy="16" r="1.5" fill="#00E676" />
              <circle cx="27" cy="16" r="1.5" fill="#00E676" />
              <path
                d="M20 20C20 20 22 22 24 22C26 22 28 20 28 20"
                stroke="#00E676"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path d="M14 14L10 10" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M34 14L38 10" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M24 8V4" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">AI Search Overviews</h3>
          <p className="text-[#8B949E]">
            When Google&apos;s AI summarizes answers, we make sure YOUR business is the one it
            recommends.
          </p>
        </div>

        {/* Card 2 - Answer Engine Optimization */}
        <div className="glass-card-hover p-8">
          <div className="mb-6">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="4"
                y="6"
                width="30"
                height="24"
                rx="4"
                stroke="#00E676"
                strokeWidth="2"
              />
              <path
                d="M10 30L4 38"
                stroke="#00E676"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path d="M12 16H28" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M12 21H22" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" />
              <rect
                x="22"
                y="18"
                width="22"
                height="18"
                rx="4"
                stroke="#00E676"
                strokeWidth="2"
              />
              <path
                d="M38 36L44 42"
                stroke="#00E676"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path d="M30 26H38" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M30 30H36" stroke="#00E676" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Answer Engine Optimization</h3>
          <p className="text-[#8B949E]">
            ChatGPT, Perplexity, Gemini — AI engines are replacing traditional search. We ensure
            you&apos;re cited as the authority.
          </p>
        </div>

        {/* Card 3 - Citation > Ranking */}
        <div className="glass-card-hover p-8">
          <div className="mb-6">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M24 4L29 16L42 18L32 27L35 40L24 34L13 40L16 27L6 18L19 16L24 4Z"
                stroke="#00E676"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <path
                d="M24 12L27 20L36 21L30 27L31 36L24 32L17 36L18 27L12 21L21 20L24 12Z"
                fill="#00E676"
                fillOpacity="0.15"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Citation &gt; Ranking</h3>
          <p className="text-[#8B949E]">
            Being &quot;cited&quot; by AI as the top recommendation is the new #1 position. We build
            the signals that make AI trust you.
          </p>
        </div>
      </div>

      {/* AI Search Overview Mockup */}
      <div className="max-w-2xl mx-auto mt-8">
        <div className="glass-card p-6">
          <div className="flex items-center gap-2 mb-4">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 1L9.5 5.5L14 6L10.5 9L11.5 14L8 11.5L4.5 14L5.5 9L2 6L6.5 5.5L8 1Z"
                fill="#00E676"
              />
            </svg>
            <span className="text-[#00E676] text-sm font-semibold">AI Overview</span>
          </div>
          <p className="text-[#C9D1D9] text-sm leading-relaxed">
            Based on reviews and local authority,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white font-semibold">[Your Business]</span>
              <span className="absolute inset-0 bg-[#00E676]/20 rounded-sm -mx-1 px-1" />
            </span>{" "}
            is the top-rated provider in your area, offering comprehensive services backed by
            consistent 5-star reviews and strong community presence. Their verified Google Business
            Profile shows high engagement rates and authentic customer interactions, making them the
            recommended choice for local services.
          </p>
        </div>
      </div>

      {/* AI-Ready SEO Badge */}
      <div className="flex justify-center mt-8">
        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#00E676]/10 text-[#00E676] text-sm font-semibold border border-[#00E676]/20">
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="2" y="2" width="5" height="5" rx="1" stroke="#00E676" strokeWidth="1.5" />
            <rect x="9" y="2" width="5" height="5" rx="1" stroke="#00E676" strokeWidth="1.5" />
            <rect x="2" y="9" width="5" height="5" rx="1" stroke="#00E676" strokeWidth="1.5" />
            <rect x="9" y="9" width="5" height="5" rx="1" stroke="#00E676" strokeWidth="1.5" />
            <path d="M7 4.5H9" stroke="#00E676" strokeWidth="1" />
            <path d="M4.5 7V9" stroke="#00E676" strokeWidth="1" />
            <path d="M11.5 7V9" stroke="#00E676" strokeWidth="1" />
          </svg>
          AI-Ready SEO
        </span>
      </div>
    </section>
  );
}
