export default function HumanSignal() {
  return (
    <section id="human-signals" className="section-container">
      <div className="text-center mb-16">
        <h2 className="section-title mb-6">
          Real Humans. Real Signals.{" "}
          <span className="green-gradient-text">Real Rankings.</span>
        </h2>
        <p className="text-[#8B949E] text-lg max-w-3xl mx-auto">
          Our secret weapon isn&apos;t a bot — it&apos;s authentic human activity.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 - GPS-Driven Activity */}
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
                d="M24 4C16.268 4 10 10.268 10 18C10 28 24 44 24 44C24 44 38 28 38 18C38 10.268 31.732 4 24 4Z"
                stroke="#00E676"
                strokeWidth="2"
                strokeLinejoin="round"
              />
              <circle cx="24" cy="18" r="6" stroke="#00E676" strokeWidth="2" />
              <circle cx="24" cy="18" r="2" fill="#00E676" />
              <path
                d="M24 8V6"
                stroke="#00E676"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M24 30V28"
                stroke="#00E676"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M14 18H16"
                stroke="#00E676"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M32 18H34"
                stroke="#00E676"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">GPS-Driven Activity</h3>
          <p className="text-[#8B949E]">
            Real mobile users with real GPS data drive to your location, sending powerful ranking
            signals to Google.
          </p>
        </div>

        {/* Card 2 - Authentic Engagement */}
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
                d="M32 8C32 8 36 8 38 12C40 16 36 20 36 20"
                stroke="#00E676"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M12 20L12 32C12 34 14 36 16 36L28 36"
                stroke="#00E676"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M20 36L20 42"
                stroke="#00E676"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <rect
                x="8"
                y="12"
                width="24"
                height="8"
                rx="4"
                stroke="#00E676"
                strokeWidth="2"
              />
              <circle cx="28" cy="16" r="2" fill="#00E676" />
              <path
                d="M28 36L34 42"
                stroke="#00E676"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M28 36L34 30"
                stroke="#00E676"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Authentic Engagement</h3>
          <p className="text-[#8B949E]">
            Strategic human interactions with your Google Business Profile — searches, clicks,
            calls, direction requests.
          </p>
        </div>

        {/* Card 3 - Third-Party Partnerships */}
        <div className="glass-card-hover p-8">
          <div className="mb-6">
            <svg
              width="48"
              height="48"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="24" cy="12" r="5" stroke="#00E676" strokeWidth="2" />
              <circle cx="10" cy="34" r="5" stroke="#00E676" strokeWidth="2" />
              <circle cx="38" cy="34" r="5" stroke="#00E676" strokeWidth="2" />
              <path
                d="M20 15L14 30"
                stroke="#00E676"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="3 3"
              />
              <path
                d="M28 15L34 30"
                stroke="#00E676"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="3 3"
              />
              <path
                d="M15 34H33"
                stroke="#00E676"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeDasharray="3 3"
              />
              <circle cx="24" cy="12" r="2" fill="#00E676" fillOpacity="0.3" />
              <circle cx="10" cy="34" r="2" fill="#00E676" fillOpacity="0.3" />
              <circle cx="38" cy="34" r="2" fill="#00E676" fillOpacity="0.3" />
            </svg>
          </div>
          <h3 className="text-xl font-bold text-white mb-3">Third-Party Partnerships</h3>
          <p className="text-[#8B949E]">
            Our network of verified partners generates organic activity patterns that Google
            rewards.
          </p>
        </div>
      </div>
    </section>
  );
}
