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
      // Redirect non-www to www
      {
        source: "/:path*",
        has: [{ type: "host", value: "tier3labs.co.uk" }],
        destination: "https://www.tier3labs.co.uk/:path*",
        permanent: true,
      },
      // Calendly booking shortlink — used in email campaigns
      // Change Calendly URL here without updating all email templates
      {
        source: "/book",
        destination: "https://calendly.com/tier3labs-info/30min",
        permanent: false,
      },
    ];
  },

  // Security headers (applied to all routes)
  // NOTE: Content-Security-Policy is set dynamically by src/middleware.ts
  //       so that a per-request nonce can be injected — removing 'unsafe-inline'
  //       from script-src entirely.
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
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
        source: "/8cb2679b-8ec4-4084-958d-e1f806c655fe_removalai_preview.png",
        headers: [{ key: "Cache-Control", value: "public, max-age=86400" }],
      },
    ];
  },
};

export default nextConfig;
