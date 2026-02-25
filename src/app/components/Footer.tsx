import Image from 'next/image';

export default function Footer() {
  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Statistics', href: '#method' },
    { label: 'Results', href: '#results' },
    { label: 'AI Search', href: '#ai-search' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#0D1117] border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Column 1: Logo & Tagline */}
          <div className="md:col-span-1">
            <Image
              src="/logo-dark.svg"
              alt="Tier3Labs"
              width={140}
              height={40}
            />
            <p className="text-[#8B949E] mt-4 text-sm leading-relaxed">
              Dominate the Map Pack
            </p>
            <p className="text-[#8B949E] mt-3 text-sm leading-relaxed">
              We help local businesses capture the 70% of search traffic that
              flows through Google&apos;s Top 3 Map Pack results. Data-driven
              strategies. Real results.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col">
              {quickLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[#8B949E] hover:text-[#00E676] transition-colors block py-1 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact</h3>
            <p className="text-[#8B949E] text-sm leading-relaxed mb-6">
              Ready to dominate your local market? Get a free audit and see
              exactly where you stand in the Map Pack.
            </p>
            <a
              href="#contact"
              className="btn-primary text-sm px-6 py-3"
            >
              Get My Free Visibility Audit
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 mt-12 pt-8 flex justify-between items-center flex-wrap gap-4">
          <p className="text-[#8B949E] text-sm">
            &copy; 2026 Tier3Labs. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="/privacy"
              className="text-[#8B949E] text-sm hover:text-[#00E676] transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/terms"
              className="text-[#8B949E] text-sm hover:text-[#00E676] transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
