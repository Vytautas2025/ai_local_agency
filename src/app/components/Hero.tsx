export default function Hero() {
  return (
    <section className="relative flex items-center justify-center hero-gradient grid-pattern">
      {/* Top padding for fixed navbar */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-32 pb-24 text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
          Stop Losing Leads.
          <br />
          Get Into the{' '}
          <span className="green-gradient-text whitespace-nowrap">Google Maps &amp; Search Top&nbsp;3</span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-[#C9D1D9] max-w-3xl mx-auto mt-6 leading-relaxed">
          Every day your competitors are taking your leads. Get your business into the Google Maps &amp; Search Top 3 where 70% of local search traffic actually convert.
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <a href="#contact" className="btn-primary">
            Get Your Free Audit
          </a>
          <a href="#method" className="btn-ghost">
            See How It Works
          </a>
        </div>

      </div>
    </section>
  );
}
