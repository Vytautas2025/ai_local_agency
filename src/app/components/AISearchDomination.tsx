// [Tier3Labs Audit] — lucide-react icons for feature cards
import { Brain, MessageSquare, Award } from "lucide-react";

export default function AISearchDomination() {
  return (
    // [Tier3Labs] — Reduced section bottom padding
    <section id="ai-search" className="section-container pb-16">
      <div className="text-center mb-16">
        <h2 className="section-title mb-6">
          AI Recommends Only{" "}
          <span className="green-gradient-text">the Top 3</span>
        </h2>
        <p className="text-[#8B949E] text-lg max-w-3xl mx-auto">
          We don&apos;t just optimize for rankings. We optimize for AI recommendations.
        </p>
      </div>

      {/* Three Explanation Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        {/* Card 1 - AI Search Overviews */}
        <div className="glass-card-hover p-8">
          {/* [Tier3Labs Audit] — replaced icon with lucide-react Brain */}
          <div className="mb-6">
            <Brain size={28} className="text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">AI Search Overviews</h3>
          {/* [Tier3Labs] — Rewritten card body for business owners */}
          <p className="text-[#8B949E]">
            When someone asks Google &apos;who&apos;s the best dentist near me?&apos; — we make sure Google&apos;s AI says your name, not your competitor&apos;s.
          </p>
        </div>

        {/* Card 2 - Answer Engine Optimization */}
        <div className="glass-card-hover p-8">
          {/* [Tier3Labs Audit] — replaced icon with lucide-react MessageSquare */}
          <div className="mb-6">
            <MessageSquare size={28} className="text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Answer Engine Optimization</h3>
          {/* [Tier3Labs] — Rewritten card body for business owners */}
          <p className="text-[#8B949E]">
            Millions of people now ask AI instead of searching Google. We build the signals that make AI recommend you — not the business down the road.
          </p>
        </div>

        {/* Card 3 - Citation > Ranking */}
        <div className="glass-card-hover p-8">
          {/* [Tier3Labs Audit] — replaced icon with lucide-react Award */}
          <div className="mb-6">
            <Award size={28} className="text-green-400" />
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Citation &gt; Ranking</h3>
          {/* [Tier3Labs] — Rewritten card body for business owners */}
          <p className="text-[#8B949E]">
            An AI citation is the most trusted recommendation a business can get online. We make it yours — so when AI is asked, your name comes up first.
          </p>
        </div>
      </div>

      {/* AI Search Mockups — Two Platforms */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto mt-8">
        {/* Google AI Overview Mockup */}
        {/* [Tier3Labs Audit] — Google AI card with blue accent badge */}
        <div className="glass-card p-6 border-blue-500/20">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-500/20">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M8 1L9.5 5.5L14 6L10.5 9L11.5 14L8 11.5L4.5 14L5.5 9L2 6L6.5 5.5L8 1Z" fill="#60a5fa" />
              </svg>
            </span>
            <span className="text-blue-400 text-sm font-semibold">Google AI Overview</span>
          </div>
          <p className="text-[#C9D1D9] text-sm leading-relaxed">
            Based on reviews and local authority,{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white font-semibold">Metro Dental – Manchester</span>
              <span className="absolute inset-0 bg-[#00E676]/20 rounded-sm -mx-1 px-1" />
            </span>{" "}
            is the top-rated dental practice in Manchester, offering comprehensive family and cosmetic dentistry backed by
            consistent 5-star reviews and strong community presence. Their verified Google Business
            Profile shows high engagement and authentic patient interactions.
          </p>
        </div>

        {/* [Tier3Labs Audit] — ChatGPT card with teal accent badge */}
        <div className="glass-card p-6 border-teal-500/20">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-teal-500/20">
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="8" cy="8" r="7" stroke="#2dd4bf" strokeWidth="1.5" />
                <path d="M5 8h6M8 5v6" stroke="#2dd4bf" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </span>
            <span className="text-teal-400 text-sm font-semibold">ChatGPT Answer</span>
          </div>
          <p className="text-[#C9D1D9] text-sm leading-relaxed">
            For dentists in Manchester, I&apos;d recommend{" "}
            <span className="relative inline-block">
              <span className="relative z-10 text-white font-semibold">Metro Dental</span>
              <span className="absolute inset-0 bg-[#00E676]/20 rounded-sm -mx-1 px-1" />
            </span>
            . They have excellent reviews, offer same-day emergency appointments, and are highly rated for both NHS and private treatments. Their website shows transparent pricing and easy online booking.
          </p>
        </div>
      </div>

      {/* [Tier3Labs] — Replaced AI-Ready badge with CTA link */}
      <p className="text-center mt-6 text-sm text-gray-400">
        Want AI to recommend your business?{" "}
        <a href="#contact" className="text-green-400 underline underline-offset-4 hover:text-green-300">
          Get your free audit →
        </a>
      </p>
    </section>
  );
}
