import Image from 'next/image';
import { Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61585545124093';
  const INSTAGRAM_URL = 'https://www.instagram.com/tier3labs';
  const FACEBOOK_TRACKING_ID = 'footer_social_facebook';
  const INSTAGRAM_TRACKING_ID = 'footer_social_instagram';
  const facebookTrackingHref = `/api/track?id=${FACEBOOK_TRACKING_ID}&event=click&redirect=${encodeURIComponent(FACEBOOK_URL)}`;
  const instagramTrackingHref = `/api/track?id=${INSTAGRAM_TRACKING_ID}&event=click&redirect=${encodeURIComponent(INSTAGRAM_URL)}`;

  const quickLinks = [
    { label: 'Services', href: '#services' },
    { label: 'Statistics', href: '#method' },
    { label: 'Results', href: '#results' },
    { label: 'AI Search', href: '#ai-search' },
    { label: 'Plans', href: '#plans' },
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
              src="/8cb2679b-8ec4-4084-958d-e1f806c655fe_removalai_preview.png"
              alt="Tier3Labs"
              width={140}
              height={40}
            />
            <p className="text-[#8B949E] mt-4 text-sm leading-relaxed">
              Dominate the Map Pack
            </p>
            <p className="text-[#8B949E] mt-3 text-sm leading-relaxed">
              We help local businesses capture the 60% of search traffic that
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
              Start For Free
            </a>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <p className="text-[#8B949E] text-sm">
            &copy; 2026 Tier3Labs. All rights reserved.
          </p>
          <div className="flex w-full flex-wrap items-center justify-between gap-4 md:flex-1 md:flex-nowrap md:pl-8">
            <div className="flex items-center gap-6 shrink-0">
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

            <div className="flex items-center gap-2 shrink-0">
              <p className="text-xs text-[#8B949E] mr-1">Follow us</p>

              <a
                href={facebookTrackingHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Tier3Labs on Facebook"
                title="Follow Tier3Labs on Facebook"
                className="group relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_30px_rgba(0,230,118,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00E676]/60 hover:shadow-[0_0_0_1px_rgba(0,230,118,0.35),0_16px_40px_rgba(0,230,118,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117]"
              >
                <Facebook className="h-5 w-5 text-[#C9D1D9] transition-colors duration-300 group-hover:text-[#00E676]" aria-hidden="true" />
              </a>

              <a
                href={instagramTrackingHref}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow Tier3Labs on Instagram"
                title="Follow Tier3Labs on Instagram"
                className="group relative inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-white/[0.06] backdrop-blur-md shadow-[0_0_0_1px_rgba(255,255,255,0.04),0_10px_30px_rgba(0,230,118,0.12)] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00E676]/60 hover:shadow-[0_0_0_1px_rgba(0,230,118,0.35),0_16px_40px_rgba(0,230,118,0.2)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#00E676]/70 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0D1117]"
              >
                <Instagram className="h-5 w-5 text-[#C9D1D9] transition-colors duration-300 group-hover:text-[#00E676]" aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
