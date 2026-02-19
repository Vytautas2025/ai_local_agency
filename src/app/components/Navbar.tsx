'use client';

import { useState } from 'react';
import Image from 'next/image';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'The Method', href: '#method' },
    { label: 'Results', href: '#results' },
    { label: 'AI Search', href: '#ai-search' },
    { label: 'Success Score', href: '#success-score' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0D1117]/80 backdrop-blur-xl border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="/" className="flex-shrink-0">
            <Image
              src="/logo-dark.svg"
              alt="Tier3Labs"
              width={140}
              height={40}
              priority
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#8B949E] hover:text-[#00E676] transition-colors text-sm font-medium"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:block">
            <a href="#contact" className="btn-primary text-sm px-6 py-3">
              Get My Free Visibility Audit
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Toggle mobile menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-white transition-all duration-300 ${
                mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          mobileMenuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-[#0D1117]/95 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-[#8B949E] hover:text-[#00E676] transition-colors text-base font-medium py-2"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="btn-primary text-sm px-6 py-3 mt-2 text-center"
          >
            Get My Free Visibility Audit
          </a>
        </div>
      </div>
    </nav>
  );
}
