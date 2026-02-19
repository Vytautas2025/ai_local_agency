import Image from 'next/image';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center hero-gradient grid-pattern">
      {/* Top padding for fixed navbar */}
      <div className="absolute inset-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 pt-20 pb-24 text-center">
        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-white">
          Stop Chasing Scraps.
          <br />
          Dominate the{' '}
          <span className="green-gradient-text">70%</span>.
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-[#C9D1D9] max-w-3xl mx-auto mt-6 leading-relaxed">
          While your competitors fight over the 30% of paid ad clicks, we put you in
          the Top 3 Map Pack — where 70% of local search traffic actually converts.
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

        {/* Trust Bar */}
        <div className="mt-16">
          <p className="text-[#8B949E] text-sm tracking-wide uppercase">
            Trusted by local businesses across healthcare, legal, home services, and hospitality
          </p>

          <div className="flex items-center justify-center gap-8 mt-6 flex-wrap">
            {/* Dental */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2C9.5 2 7 3.5 7 7C7 10 5 13 5 16C5 19 6.5 22 8.5 22C10 22 10.5 20 12 20C13.5 20 14 22 15.5 22C17.5 22 19 19 19 16C19 13 17 10 17 7C17 3.5 14.5 2 12 2Z" stroke="#8B949E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[#8B949E] text-xs font-medium">Dental</span>
            </div>

            {/* Legal */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 3V21M12 3L3 8L12 13L21 8L12 3Z" stroke="#8B949E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M3 8V16L12 21" stroke="#8B949E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M21 8V16L12 21" stroke="#8B949E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <span className="text-[#8B949E] text-xs font-medium">Legal</span>
            </div>

            {/* HVAC */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2V6M12 18V22M6 12H2M22 12H18M4.93 4.93L7.76 7.76M16.24 16.24L19.07 19.07M4.93 19.07L7.76 16.24M16.24 7.76L19.07 4.93" stroke="#8B949E" strokeWidth="1.5" strokeLinecap="round" />
                  <circle cx="12" cy="12" r="4" stroke="#8B949E" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="text-[#8B949E] text-xs font-medium">HVAC</span>
            </div>

            {/* Restaurants */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 8H19C20.1046 8 21 8.89543 21 10V11C21 12.1046 20.1046 13 19 13H18" stroke="#8B949E" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M3 8H18V14C18 17.3137 15.3137 20 12 20H9C5.68629 20 3 17.3137 3 14V8Z" stroke="#8B949E" strokeWidth="1.5" />
                  <path d="M3 8C3 5.23858 5.23858 3 8 3H13C15.7614 3 18 5.23858 18 8" stroke="#8B949E" strokeWidth="1.5" />
                </svg>
              </div>
              <span className="text-[#8B949E] text-xs font-medium">Restaurants</span>
            </div>

            {/* Med Spas */}
            <div className="flex flex-col items-center gap-2">
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C12 21 3 13.5 3 8.5C3 5.46243 5.46243 3 8.5 3C10.2 3 11.7 3.8 12 5C12.3 3.8 13.8 3 15.5 3C18.5376 3 21 5.46243 21 8.5C21 13.5 12 21 12 21Z" stroke="#8B949E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 5V13M8 9H16" stroke="#8B949E" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
              </div>
              <span className="text-[#8B949E] text-xs font-medium">Med Spas</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
