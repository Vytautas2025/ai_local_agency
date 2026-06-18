export type ContentBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  description: string;
  excerpt: string;
  date: string; // ISO 8601
  readingTime: string;
  author: string;
  content: ContentBlock[];
};

export const posts: Post[] = [
  {
    slug: "local-seo-vs-google-ads",
    title: "Local SEO vs Google Ads: What Actually Works for UK Businesses",
    metaTitle:
      "Local SEO vs Google Ads: What Works for UK Businesses | Tier3Labs",
    description:
      "Should UK local businesses invest in local SEO or Google Ads? We break down cost, click share, trust and longevity — and when paid ads still make sense.",
    excerpt:
      "Paid ads stop the moment you stop paying. Local SEO compounds. Here's an honest breakdown of where UK local businesses should put their money — and when ads still earn their place.",
    date: "2026-06-17",
    readingTime: "5 min read",
    author: "Vytautas Briauka",
    content: [
      {
        type: "p",
        text: "For most UK local businesses, the marketing budget comes down to one question: do you pay for visibility, or earn it? Google Ads buys you a spot at the top today. Local SEO — and specifically a place in the Google Maps Top 3 — earns you a spot that keeps working long after the work is done. Both can bring customers. But they behave very differently, and the gap matters most when budgets are tight.",
      },
      { type: "h2", text: "The cost problem with paid ads" },
      {
        type: "p",
        text: "Google Ads runs on an auction. Every click has a price, and in competitive local trades — think dentists, solicitors, builders and estate agents — that price only moves in one direction. A single click for a high-intent local keyword can cost several pounds, and a serious local campaign often needs a minimum of £500–£5,000 a month just to stay visible.",
      },
      {
        type: "p",
        text: "The harder truth is what happens when you pause. The moment your card stops being charged, your visibility disappears. You aren't building anything — you're renting attention by the day. Stop paying and you're back where you started.",
      },
      { type: "h2", text: "Where the clicks actually go" },
      {
        type: "p",
        text: "It's easy to assume the ads at the very top of Google soak up most of the clicks. They don't. On local searches, the Google Maps Top 3 — the “Map Pack” — captures up to 60% of clicks, while paid ads typically take around 10%.",
      },
      {
        type: "p",
        text: "Part of this is trust. Searchers have learned to recognise the small “Ad” label, and many skip past it on instinct. A business that ranks organically in the Map Pack carries an implicit endorsement that a paid placement simply can't buy. When someone is choosing a local provider they'll let into their home or trust with their health, that distinction counts.",
      },
      { type: "h2", text: "Owning visibility vs renting it" },
      {
        type: "p",
        text: "This is the real difference. Paid ads are a tap you hold open. Local SEO is an asset you build.",
      },
      {
        type: "p",
        text: "Ranking in the Map Pack is the result of signals that accumulate over time — a well-optimised Google Business Profile, consistent reviews, accurate citations across the web, and steady local relevance. Those signals don't reset at the end of the month. They compound. A business that invests in local SEO this quarter is usually in a stronger position next quarter, and stronger again the quarter after — without paying more for the privilege.",
      },
      {
        type: "ul",
        items: [
          "Paid ads: predictable to switch on, but costs rise and results vanish the moment you stop.",
          "Local SEO: slower to build, but the position you earn keeps working and strengthens over time.",
        ],
      },
      { type: "h2", text: "When Google Ads still make sense" },
      {
        type: "p",
        text: "None of this means ads are a waste. Used deliberately, they have a place:",
      },
      {
        type: "ul",
        items: [
          "You've just launched and need leads this week while your local presence is still building.",
          "You're promoting a time-sensitive offer or event with a hard deadline.",
          "You're testing demand for a new service before committing to it.",
          "You operate in a market with almost no organic competition and want to own every inch of the page.",
        ],
      },
      {
        type: "p",
        text: "The mistake is treating ads as a permanent strategy rather than a tactical lever. Ads are excellent for speed. They're an expensive way to buy something you could own.",
      },
      { type: "h2", text: "The honest answer for most UK businesses" },
      {
        type: "p",
        text: "If you can only fund one, and you're playing a long game rather than chasing this week's leads, local SEO is almost always the better investment. It builds an asset, earns more trust, and stops you paying rent on your own visibility for the rest of your business's life.",
      },
      {
        type: "p",
        text: "The strongest position of all is to use ads for speed while you build the Map Pack ranking that eventually makes them optional. That's the path we take most clients down: visible quickly, then visible for free.",
      },
      {
        type: "p",
        text: "Want to know where your business currently stands in the Map Pack? Every customer starts with a free 7-day trial — and we'll show you exactly where you rank before you commit to anything.",
      },
    ],
  },
];

export function getPost(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug);
}

export const sortedPosts: Post[] = [...posts].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}
