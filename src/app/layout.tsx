import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://tier3labs.com"),
  title: "Tier3Labs | Dominate the Google Maps Top 3 | Local SEO & AI Search",
  description:
    "Stop losing leads. Tier3Labs gets your business into the Top 3 on Google Maps and Search where 70% of local traffic converts. Local SEO, AI Search Optimization & Human Signal strategies that deliver.",
  keywords: [
    "local SEO",
    "Google Maps SEO",
    "Map Pack optimization",
    "AI SEO",
    "GEO optimization",
    "local search marketing",
    "Google Business Profile optimization",
    "AI search citations",
  ],
  authors: [{ name: "Tier3Labs" }],
  creator: "Tier3Labs",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tier3labs.com",
    siteName: "Tier3Labs",
    title: "Tier3Labs | Dominate the Google Maps Top 3",
    description:
      "We put your business in the Google Maps Top 3 where 70% of local search traffic converts. Local SEO & AI Search Optimization.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tier3Labs | Dominate the Google Maps Top 3",
    description:
      "We put your business in the Google Maps Top 3 where 70% of local search traffic converts.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://tier3labs.com",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tier3Labs",
  description:
    "Local SEO & AI Search Optimization agency specializing in Google Maps Top 3 rankings and AI citation optimization.",
  url: "https://tier3labs.com",
  logo: "https://tier3labs.com/logo-dark.png",
  image: "https://tier3labs.com/icon.png",
  priceRange: "$$",
  serviceType: [
    "Local SEO",
    "AI Search Optimization",
    "Google Maps Optimization",
    "GEO Optimization",
  ],
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Local SEO Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Google Maps Top 3 Optimization",
          description:
            "Strategic optimization to secure top 3 positions in Google Maps local pack results.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Search Citation Optimization",
          description:
            "Optimization for AI search engines including Google AI Overviews, ChatGPT, and Perplexity citations.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Local Content Authority Building",
          description:
            "Monthly content stacks including YouTube, Medium articles, Google Stacks, and Cloud Stacks.",
        },
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Local SEO & AI Search Optimization",
  provider: {
    "@type": "ProfessionalService",
    name: "Tier3Labs",
    url: "https://tier3labs.com",
  },
  description:
    "Comprehensive local SEO service combining Google Maps optimization, AI search citation building, and authentic human engagement signals.",
  areaServed: "Worldwide",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
