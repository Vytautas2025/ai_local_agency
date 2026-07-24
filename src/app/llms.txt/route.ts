// [Tier3Labs], /llms.txt — curated, machine-readable map of the site for AI search
// engines (ChatGPT, Perplexity, Claude, Google AI Overviews). Blog list is generated
// from sortedPosts so new articles appear automatically, matching sitemap.ts.
import { sortedPosts } from "../blog/posts";

const baseUrl = "https://www.tier3labs.co.uk";

// Static at build time (regenerated on each deploy), like the sitemap.
export const dynamic = "force-static";

export function GET() {
  const articles = sortedPosts
    .map((p) => `- [${p.title}](${baseUrl}/blog/${p.slug}): ${p.description}`)
    .join("\n");

  const body = `# Tier3Labs

> Tier3Labs is a UK local SEO agency that ranks service businesses in the Google Maps Top 3 (the "Map Pack") and builds their visibility across AI search engines.

Tier3Labs is a London-registered local SEO and AI search optimisation agency serving businesses across the United Kingdom. We focus entirely on Google Business Profile and Google Maps performance, with one goal: moving a business into the local Top 3 for the searches its customers actually make. Our work includes Google Business Profile optimisation, local ranking-signal building, citation and directory consistency, review and reputation strategy, AI search and Google AI Overviews visibility, geo-grid rank tracking, and clear reporting every two weeks. Every customer starts with a free 7-day trial.

## Key statistics (with primary sources)

- Around 80% of local search clicks go to organic results, not paid ads. Source: BrightLocal — Local Services Ads Click Study (https://www.brightlocal.com/research/local-services-ads-click-study/).
- Businesses in the Google local pack (Maps Top 3) receive 126% more traffic and 93% more customer actions — calls, website clicks and direction requests — than those ranked 4th to 10th. Source: SOCi — Consumer Behavior Index (https://www.soci.ai/blog/local-seo-statistics/).

## Core pages

- [Services & Plans](${baseUrl}/services): What we do to reach the Google Maps Top 3, plus the Community and City plans and the free 7-day trial.
- [About](${baseUrl}/about): The London-registered team behind Tier3Labs and how we prove progress every two weeks.
- [FAQ](${baseUrl}/faq): Answers on local SEO, Google Business Profile, AI search, results timelines and the free trial.
- [Blog](${baseUrl}/blog): Practical local SEO and Google Business Profile guides for UK businesses.

## Articles

${articles}

## Contact

- Book a free audit or start the free 7-day trial: ${baseUrl}/book
- Email: info@tier3labs.co.uk
- Phone: +44 7518 701075
- Service area: United Kingdom (all content and pricing in GBP)

## Optional

- [Privacy Policy](${baseUrl}/privacy): How Tier3Labs handles personal data.
- [Terms](${baseUrl}/terms): Website and service terms.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
