import dynamic from "next/dynamic";
import Image from "next/image";
import MetaHero from "./MetaHero";

const Contact = dynamic(() => import("./Contact"), {
  loading: () => <div className="min-h-[500px]" />,
});

const Results = dynamic(() => import("./Results"), {
  loading: () => <div className="min-h-[400px]" />,
});

const StickyMobileBar = dynamic(() => import("./StickyMobileBar"));
const ScrollToTop = dynamic(() => import("./ScrollToTop"));

export default function MetaLandingPage() {
  return (
    <>
      {/* Minimal top bar, logo + CTA only, no navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Image
            src="/tier3labs-logo.png"
            alt="Tier3Labs"
            width={120}
            height={36}
            priority
          />
          <a href="#get-started" className="btn-primary text-sm px-5 py-2.5">
            Get Free Analysis
          </a>
        </div>
      </header>

      <main>
        <MetaHero />
        <Contact />
        <Results />
      </main>

      {/* Minimal footer */}
      <footer className="bg-[#0D1117] border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">
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
      </footer>

      <ScrollToTop />
      <StickyMobileBar />
    </>
  );
}
