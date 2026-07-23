const steps = [
  {
    n: "STEP 1",
    title: "Start your free trial",
    body: "Fill in the form. We set up your account and confirm your goals and target search terms.",
  },
  {
    n: "STEP 2",
    title: "We start working",
    body: "We start building the local signals Google rewards — no access to your accounts required.",
  },
  {
    n: "STEP 3",
    title: "Choose your plan",
    body: "Once you've seen movement, pick Community or City. Cancel anytime.",
  },
  {
    n: "STEP 4",
    title: "Track your progress",
    body: "Clear reports every 2 weeks show your rankings climbing toward the Top 3.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-[#0D1117]">
      <div className="section-container">
        <div className="text-center mb-12">
          <h2 className="section-title">
            Just <span className="green-gradient-text">4 simple steps</span>
          </h2>
          <p className="section-subtitle mx-auto mt-4">
            No risk, no lock-in — a clear path to the Top 3.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {steps.map((s) => (
            <div key={s.n} className="glass-card p-5">
              <span className="text-sm font-extrabold text-[#00E676] tracking-widest">
                {s.n}
              </span>
              <h3 className="text-lg font-bold text-white mt-3">{s.title}</h3>
              <p className="text-[#8B949E] text-sm mt-2 leading-relaxed">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
