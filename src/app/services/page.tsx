import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import ServicesHero from "../components/ServicesHero";
import TechStack from "../components/TechStack";
import StandardVsUs from "../components/StandardVsUs";
import HowItWorks from "../components/HowItWorks";
import WhatYouNeed from "../components/WhatYouNeed";
import EssentialBuild from "../components/EssentialBuild";
import Plans from "../components/Plans";
import AISearchDomination from "../components/AISearchDomination";
import HumanSignal from "../components/HumanSignal";
import ServicesCTA from "../components/ServicesCTA";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

export const metadata: Metadata = {
  title: "Services & Plans | Tier3Labs Local SEO for UK Businesses",
  description:
    "Local SEO and Google Maps services that put UK businesses in the Map Pack Top 3, from the Essential Build foundation to ongoing rank tracking. Includes a free 7-day trial.",
  alternates: {
    canonical: "https://www.tier3labs.co.uk/services",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Tier3Labs",
    url: "https://www.tier3labs.co.uk/services",
    title: "Local SEO & Google Maps Services for UK Businesses",
    description:
      "Everything we do to put your business in the Google Maps Top 3, plus Community and City plans with a free 7-day trial.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Tier3Labs, Dominate the Google Maps Top 3",
      },
    ],
  },
};

const servicesSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      serviceType: "Local SEO & Google Maps optimisation",
      provider: { "@id": "https://www.tier3labs.co.uk/#organization" },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: "https://www.tier3labs.co.uk/services",
    },
    {
      // One-time foundation product. Scope and price are quoted per business,
      // so no Offer/price is published here — we don't emit what we don't show.
      "@type": "Service",
      name: "Essential Build",
      serviceType:
        "Google Business Profile optimisation, technical SEO & website local SEO",
      description:
        "A one-time foundation build covering a full Google Business Profile rebuild, technical SEO and website local SEO. Included as part of the City plan, or available on its own.",
      provider: { "@id": "https://www.tier3labs.co.uk/#organization" },
      areaServed: { "@type": "Country", name: "United Kingdom" },
      url: "https://www.tier3labs.co.uk/services#essential-build",
    },
  ],
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
      />
      <Navbar />
      <main>
        <ServicesHero />
        <TechStack />
        <StandardVsUs />
        <HowItWorks />
        <WhatYouNeed />
        <EssentialBuild />
        <Plans />
        <AISearchDomination />
        <HumanSignal />
        <ServicesCTA />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
