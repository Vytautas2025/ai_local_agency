import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { headers } from "next/headers";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.tier3labs.co.uk"),
  title: "Tier3Labs | Google Maps Top 3 & Local SEO Agency",
  description:
    "Tier3Labs gets your business into the Google Maps Top 3 where 60% of local traffic converts. Local SEO & AI Search Optimization.",
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
    url: "https://www.tier3labs.co.uk",
    siteName: "Tier3Labs",
    title: "Tier3Labs | Dominate the Google Maps Top 3",
    description:
      "We put your business in the Google Maps Top 3 where 60% of local search traffic converts. Local SEO & AI Search Optimization.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tier3Labs | Dominate the Google Maps Top 3",
    description:
      "We put your business in the Google Maps Top 3 where 60% of local search traffic converts.",
    images: ["/opengraph-image"],
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://www.tier3labs.co.uk",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Tier3Labs",
  description:
    "Local SEO & AI Search Optimization agency specializing in Google Maps Top 3 rankings and AI citation optimization.",
  url: "https://www.tier3labs.co.uk",
  logo: "https://www.tier3labs.co.uk/logo-dark.png",
  image: "https://www.tier3labs.co.uk/icon.png",
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
    url: "https://www.tier3labs.co.uk",
  },
  description:
    "Comprehensive local SEO service combining Google Maps optimization, AI search citation building, and authentic human engagement signals.",
  areaServed: "Worldwide",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Read the per-request nonce set by middleware.ts
  const nonce = (await headers()).get("x-nonce") ?? "";

  return (
    <html lang="en" className={inter.variable}>
      <head>
        {/* ✅ FIX 1: Preconnect to third-party origins BEFORE any requests */}
        <link rel="preconnect" href="https://assets.calendly.com" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
        <link rel="dns-prefetch" href="https://www.google-analytics.com" />

        {/* Calendly CSS — loaded directly, it's ~4 KB and needed for the popup */}
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />

        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.png" type="image/png" />
        <link rel="apple-touch-icon" href="/icon.png" />

        <script
          nonce={nonce}
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          nonce={nonce}
          suppressHydrationWarning
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(serviceSchema),
          }}
        />
      </head>
      <body className="antialiased">
        {children}
        <Analytics />

        {/* Calendly JS — afterInteractive so it's ready before user interaction */}
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
          nonce={nonce}
        />

        {/* ✅ Google Analytics GA4 — afterInteractive (unchanged, already correct) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-2E0J5WWEDC"
          strategy="afterInteractive"
          nonce={nonce}
        />
        <Script id="google-analytics" strategy="afterInteractive" nonce={nonce}>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-2E0J5WWEDC');
          `}
        </Script>
      </body>
    </html>
  );
}
