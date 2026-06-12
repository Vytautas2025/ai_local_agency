import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ShieldCheck, BarChart3, CalendarCheck, BadgePoundSterling, Linkedin } from "lucide-react";

export const metadata: Metadata = {
  title: "About Us | Tier3Labs — Local SEO Agency, London UK",
  description:
    "Meet the team behind Tier3Labs. A London-registered local SEO agency helping UK businesses reach the Google Maps Top 3 — with transparent, bi-weekly proof of progress.",
  alternates: {
    canonical: "https://www.tier3labs.co.uk/about",
  },
};

type Founder = {
  name: string;
  initials: string;
  title: string;
  bio: string;
  linkedin: string;
  photo?: string;
};

const founders: Founder[] = [
  {
    name: "Vytautas Briauka",
    initials: "VB",
    title: "Co-founder & Director",
    bio: "IT consultant, web developer and local search specialist. Vytautas helps UK businesses turn Google Maps visibility into calls, bookings and customers.",
    linkedin: "https://www.linkedin.com/in/vytautasbriauka/",
    photo: "/team/vytautas.png",
  },
  {
    name: "Aivis Orentas",
    initials: "AO",
    title: "Co-founder",
    bio: "Business developer with a background in marketing, sales, SEO and real estate. Aivis turns market analysis into the strategy that puts local businesses in the Google Maps Top 3.",
    linkedin: "https://www.linkedin.com/in/aivis-orentas-bbbb6447/",
    photo: "/team/aivis.jpg",
  },
];

const principles = [
  {
    icon: ShieldCheck,
    title: "Zero Access Required",
    body: "We never need your Google Business Profile or website credentials.",
  },
  {
    icon: BarChart3,
    title: "Proof every two weeks",
    body: "Geo-grid ranking reports show exactly where you stand — no guesswork.",
  },
  {
    icon: CalendarCheck,
    title: "Try before you commit",
    body: "Every customer starts with a free 7-day trial. No credit card, no contracts.",
  },
  {
    icon: BadgePoundSterling,
    title: "Fixed monthly fee",
    body: "No retainers, no surprise costs. One price, agreed upfront.",
  },
];

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "AboutPage",
      "@id": "https://www.tier3labs.co.uk/about",
      url: "https://www.tier3labs.co.uk/about",
      name: "About Tier3Labs",
      about: { "@id": "https://www.tier3labs.co.uk/#organization" },
    },
    {
      "@type": "Person",
      name: "Vytautas Briauka",
      jobTitle: "Co-founder & Director",
      worksFor: { "@id": "https://www.tier3labs.co.uk/#organization" },
      sameAs: ["https://www.linkedin.com/in/vytautasbriauka/"],
    },
    {
      "@type": "Person",
      name: "Aivis Orentas",
      jobTitle: "Co-founder",
      worksFor: { "@id": "https://www.tier3labs.co.uk/#organization" },
      sameAs: ["https://www.linkedin.com/in/aivis-orentas-bbbb6447/"],
    },
  ],
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-dark-bg text-text-secondary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutPageSchema) }}
      />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="text-green-primary text-sm hover:underline mb-8 inline-block"
        >
          ← Back to home
        </Link>

        {/* Intro */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
          The team behind <span className="green-gradient-text">the rankings</span>
        </h1>
        <p className="text-lg leading-relaxed mb-4">
          Tier3Labs is a London-registered local SEO agency built on a simple
          belief: local businesses shouldn&apos;t have to rent visibility through
          ads — they should own it.
        </p>
        <p className="text-lg leading-relaxed mb-16">
          We help UK businesses climb into the Google Maps Top 3 and stay there,
          and we prove our progress with geo-grid ranking reports every two
          weeks. No long contracts, no jargon, no hiding behind dashboards — you
          see exactly what we see.
        </p>

        {/* Founders */}
        <h2 className="text-2xl font-bold text-white mb-8">Who we are</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {founders.map((founder) => (
            <div key={founder.name} className="glass-card p-8 flex flex-col">
              {founder.photo ? (
                <Image
                  src={founder.photo}
                  alt={`${founder.name}, ${founder.title} of Tier3Labs`}
                  width={160}
                  height={160}
                  className="w-20 h-20 rounded-full object-cover border border-green-primary/40 mb-6"
                />
              ) : (
                <div className="w-20 h-20 rounded-full bg-linear-to-br from-green-primary/25 to-green-primary/5 border border-green-primary/40 flex items-center justify-center mb-6">
                  <span className="text-xl font-extrabold text-green-primary">
                    {founder.initials}
                  </span>
                </div>
              )}
              <h3 className="text-xl font-bold text-white">{founder.name}</h3>
              <p className="text-green-primary text-sm font-semibold mb-4">
                {founder.title}
              </p>
              <p className="text-text-muted text-sm leading-relaxed flex-1">
                {founder.bio}
              </p>
              <a
                href={founder.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-green-primary transition-colors mt-6"
              >
                <Linkedin className="h-4 w-4" aria-hidden="true" />
                LinkedIn
              </a>
            </div>
          ))}
        </div>

        {/* How we work */}
        <h2 className="text-2xl font-bold text-white mb-8">How we work</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {principles.map((principle) => (
            <div key={principle.title} className="glass-card p-6">
              <principle.icon
                className="h-6 w-6 text-green-primary mb-4"
                aria-hidden="true"
              />
              <h3 className="text-base font-bold text-white mb-2">
                {principle.title}
              </h3>
              <p className="text-text-muted text-sm leading-relaxed">
                {principle.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="glass-card p-8 md:p-10 text-center border-green-primary/20">
          <h2 className="text-2xl font-bold text-white mb-3">
            Want to see where your business really ranks?
          </h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            Get a free audit — we&apos;ll show you your current Map Pack position
            and what&apos;s holding you back.
          </p>
          <Link href="/#contact" className="btn-primary inline-block">
            Start For Free
          </Link>
        </div>
      </div>
    </main>
  );
}
