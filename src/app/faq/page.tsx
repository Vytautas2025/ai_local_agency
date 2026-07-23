import type { Metadata } from "next";
import Navbar from "../components/Navbar";
import FaqAccordion from "../components/FaqAccordion";
import AuditForm from "../components/AuditForm";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";
import { faqItems, buildFaqSchema } from "../data/faq";

export const metadata: Metadata = {
  title: "Google Maps Top 3 & Local SEO FAQs | Tier3Labs UK",
  description:
    "Answers to common questions about ranking UK businesses in the Google Maps Top 3: local SEO, Google Business Profile, AI search, results timelines and the free 7-day trial.",
  alternates: {
    canonical: "https://www.tier3labs.co.uk/faq",
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Tier3Labs",
    url: "https://www.tier3labs.co.uk/faq",
    title: "Google Maps Top 3 & Local SEO FAQs for UK Businesses",
    description:
      "Straight answers on how we get UK businesses into the Google Maps Top 3, and what to expect before you start.",
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

export default function FaqPage() {
  const faqSchema = buildFaqSchema(faqItems);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Navbar />
      <main>
        {/* Header */}
        <section className="relative flex items-center justify-center hero-gradient grid-pattern overflow-hidden">
          <div className="absolute inset-0 pointer-events-none" />

          <div className="relative z-10 max-w-4xl mx-auto px-6 pt-32 pb-16 text-center">
            <p className="text-sm font-medium uppercase tracking-widest text-green-400 mb-4">
              FAQ
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.15] text-balance">
              Google Maps <span className="green-gradient-text">Top 3</span>{" "}
              &amp; Local SEO FAQs for UK Businesses
            </h1>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6 leading-relaxed">
              Straight answers on how we get UK businesses into the Google Maps
              Top 3, and what to expect before you start.
            </p>
          </div>
        </section>

        {/* Questions */}
        <section id="faq" className="bg-[#0D1117]">
          <div className="section-container">
            <FaqAccordion items={faqItems} headingLevel="h2" />
          </div>
        </section>

        {/* Closing CTA */}
        <section id="get-started" className="bg-[#0D1117] scroll-mt-28 pb-24">
          <div className="max-w-xl mx-auto px-6">
            <div className="glass-card p-6 md:p-8">
              <h2 className="text-2xl font-bold text-white text-center">
                Still have questions?
              </h2>
              <p className="text-[#8B949E] text-sm mt-1 mb-5 text-center">
                Book a free ranking audit, a 30-minute honest look at your local
                rankings.
              </p>
              <AuditForm eventLabel="faq_form" />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
