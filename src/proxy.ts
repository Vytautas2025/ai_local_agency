import { NextResponse, type NextRequest } from "next/server";

export function proxy(request: NextRequest) {
  // Generate a fresh cryptographic nonce for every request.
  // This allows us to whitelist only our own inline scripts without 'unsafe-inline'.
  const nonce = Buffer.from(crypto.randomUUID()).toString("base64");

  const csp = [
    "default-src 'self'",
    // 'nonce-...' replaces 'unsafe-inline', only scripts with the matching nonce attribute execute
    `script-src 'self' 'nonce-${nonce}' https://assets.calendly.com https://www.googletagmanager.com https://www.google-analytics.com https://*.clarity.ms https://connect.facebook.net`,
    // Styles: Calendly widget.css + Next.js runtime inline styles (inline styles cannot use nonces)
    "style-src 'self' 'unsafe-inline' https://assets.calendly.com",
    // Fonts: fully self-hosted via next/font, no external origin needed
    "font-src 'self'",
    // Images: own origin, data URIs, GA tracking pixel, Meta Pixel tracking pixel
    "img-src 'self' data: https://www.google-analytics.com https://www.googletagmanager.com https://*.clarity.ms https://www.facebook.com",
    // XHR/fetch: form API, all GA4 collection endpoints, Calendly availability API
    "connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://stats.g.doubleclick.net https://www.googletagmanager.com https://api.calendly.com https://calendly.com https://*.clarity.ms https://www.facebook.com",
    // Calendly popup renders inside an iframe from these origins
    "frame-src https://calendly.com https://scheduling.calendly.com",
    // Block Flash/plugins entirely
    "object-src 'none'",
    // Prevent base-tag hijacking
    "base-uri 'self'",
    // Form posts only go to own origin
    "form-action 'self'",
    // Auto-upgrade any accidental http:// sub-resource requests
    "upgrade-insecure-requests",
  ].join("; ");

  // Pass nonce downstream so layout.tsx can read it from request headers
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-nonce", nonce);

  const response = NextResponse.next({
    request: { headers: requestHeaders },
  });

  // Set the CSP response header
  response.headers.set("Content-Security-Policy", csp);

  return response;
}

export const config = {
  matcher: [
    // Apply to all routes except Next.js internals and static public assets
    "/((?!_next/static|_next/image|favicon\\.svg|favicon\\.png|icon\\.png|logo-dark\\.png|logo-dark\\.svg).*)",
  ],
};
