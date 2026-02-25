import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Compress responses with gzip
  compress: true,

  // No source maps in production (security + smaller bundles)
  productionBrowserSourceMaps: false,

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    minimumCacheTTL: 86400,
  },

  // Tree-shake lucide-react — eliminates unused icons from bundle
  experimental: {
    optimizePackageImports: ["lucide-react"],
  },

  // Permanently redirect non-www to www (308 = permanent, preserves method)
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "tier3labs.co.uk" }],
        destination: "https://www.tier3labs.co.uk/:path*",
        permanent: true,
      },
    ];
  },

  // Security headers (applied to all routes)
  async headers() {
    // Third-party origins inventory:
    //   scripts  : assets.calendly.com, www.googletagmanager.com, www.google-analytics.com
    //   styles   : assets.calendly.com  (widget.css)
    //   fonts    : self only — next/font/google self-hosts at build time
    //   frames   : calendly.com, scheduling.calendly.com  (popup iframe)
    //   connect  : /api/* (form), GA4 endpoints, Calendly API
    //   images   : self, data:, GA tracking pixel
    //   unsafe-inline is required for:
    //     • two JSON-LD <script> blocks (dangerouslySetInnerHTML)
    //     • inline gtag() bootstrap script
    //     • Next.js runtime inline style injections
    //   TODO: upgrade to nonce-based CSP via Next.js Middleware to remove unsafe-inline
    const csp = [
      "default-src 'self'",
      // Own origin + two named third-party script hosts + inline scripts (JSON-LD + gtag)
      "script-src 'self' 'unsafe-inline' https://assets.calendly.com https://www.googletagmanager.com https://www.google-analytics.com",
      // Calendly widget.css + Next.js runtime inline styles
      "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
      // Fonts self-hosted via next/font — no external font origin needed
      "font-src 'self'",
      // Local images, data URIs, GA tracking pixel
      "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com",
      // XHR/fetch: form API, all GA4 collection endpoints, Calendly availability API
      "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.googletagmanager.com https://api.calendly.com https://calendly.com",
      // Calendly popup renders inside an iframe from these origins
      "frame-src https://calendly.com https://scheduling.calendly.com",
      // Block Flash/plugins entirely
      "object-src 'none'",
      // Prevent base-tag hijacking
      "base-uri 'self'",
      // Form posts only go to own origin
      "form-action 'self'",
      // Auto-upgrade any accidental http:// sub-resource requests to https://
      "upgrade-insecure-requests",
    ].join("; ");

    return [
      {
        source: "/(.*)",
        headers: [
          { key: "Content-Security-Policy", value: csp },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
      // Long-lived cache for Next.js static chunks (already immutable by default, belt-and-suspenders)
      {
        source: "/_next/static/:path*",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      // Cache public images
      {
        source: "/favicon.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
      {
        source: "/icon.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
      {
        source: "/logo-dark.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
    ];
  },
};

export default nextConfig;
