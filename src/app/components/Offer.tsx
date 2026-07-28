import Link from "next/link";

type Card = {
  name: string;
  badge: string;
  featured: boolean;
  tagline: string;
  points: string[];
};

const cards: Card[] = [
  {
    name: "Community",
    badge: "Free 7-day trial",
    featured: false,
    tagline: "For local businesses done being buried, steady climbs up the map.",
    points: [
      "10–20 daily engagement signals",
      "25 sq mi ranking grid",
      "Cloud stacks ×4 / month",
    ],
  },
  {
    name: "City",
    badge: "Most popular",
    featured: true,
    tagline: "For businesses ready to own their city's Top 3, fast.",
    points: [
      "Essential Build included",
      "30–40 daily engagement signals",
      "Wider 100 sq mi ranking grid",
      "Medium & Google pages, docs, PDF",
    ],
  },
];

function Tick() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="shrink-0 mt-0.5" aria-hidden="true">
      <path d="M20 6L9 17l-5-5" stroke="#00E676" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function Offer() {
  return (
    <section id="offer" className="bg-[#0D1117]">
      <div className="section-container">
        <div className="text-center mb-4">
          <h2 className="section-title">
            Start free.{" "}
            <span className="green-gradient-text">Scale when you&apos;re ready.</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            Every business begins with a free 7-day trial, no card, no contract.
            Move up to City when you want the Top 3 faster, with the Essential
            Build foundation included.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto mt-10 items-stretch">
          {cards.map((card) => (
            <div
              key={card.name}
              className={`relative flex flex-col rounded-2xl p-8 ${
                card.featured
                  ? "border-2 border-[#00E676] bg-[#00E676]/[0.06] shadow-[0_0_48px_rgba(0,230,118,0.12)]"
                  : "border border-white/10 bg-white/[0.04]"
              }`}
            >
              {card.featured && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                  <span className="bg-[#00E676] text-[#0D1117] text-[11px] font-extrabold uppercase tracking-wide px-4 py-1.5 rounded-full shadow-[0_0_16px_rgba(0,230,118,0.5)] whitespace-nowrap">
                    {card.badge}
                  </span>
                </div>
              )}

              <h3 className={`text-2xl font-extrabold text-white ${card.featured ? "mt-3" : ""}`}>
                {card.name}
              </h3>

              {!card.featured && (
                <span className="inline-flex items-center w-fit mt-3 text-xs font-semibold text-[#00E676] border border-[#00E676]/35 bg-[#00E676]/10 rounded-full px-4 py-1.5 leading-none">
                  {card.badge}
                </span>
              )}

              <p className="text-[#8B949E] text-sm mt-4 leading-relaxed">
                {card.tagline}
              </p>

              <ul className="mt-6 space-y-2.5 flex-1">
                {card.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-[#C9D1D9] text-sm">
                    <Tick />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/services#plans"
            className="btn-ghost inline-flex items-center gap-2"
          >
            See the full plan comparison
            <span aria-hidden="true">→</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
