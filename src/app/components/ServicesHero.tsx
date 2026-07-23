export default function ServicesHero() {
  return (
    <section className="relative flex items-center justify-center hero-gradient grid-pattern overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-16 text-center">
        <p className="text-sm font-medium uppercase tracking-widest text-green-400 mb-4">
          What we do
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
          Local SEO &amp; <span className="green-gradient-text">Google Maps</span>{" "}
          Services for UK Businesses
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed">
          Everything we do to move your business into the Map Pack Top 3, and the
          plans that deliver it.
        </p>
      </div>
    </section>
  );
}
