export type FaqItem = {
  question: string;
  answer: string;
};

// Full FAQ set, shown on the dedicated /faq page.
export const faqItems: FaqItem[] = [
  {
    question:
      "What is the Google Maps Top 3 (Map Pack), and why does it matter for UK businesses?",
    answer:
      "The Map Pack (or “3-Pack”) is the block of three business listings Google shows at the top of Maps and local search, above the traditional blue links. It captures the majority of attention — and with around 80% of local search clicks going to organic results rather than paid ads, the Top 3 is the most valuable position a UK local business can hold. Businesses in the local pack earn 126% more traffic and 93% more customer actions — calls, direction requests and clicks — than those ranked 4th to 10th.",
  },
  {
    question:
      "What local SEO and Google Business Profile services does Tier3Labs provide?",
    answer:
      "We’re a local SEO agency focused entirely on Google Maps and Google Business Profile performance for UK businesses. Our services include Google Business Profile optimisation, local ranking-signal building, citation and directory consistency, review and reputation strategy, AI search and Google AI Overviews visibility, geo-grid rank tracking, and bi-weekly local SEO reporting — all aimed at one outcome: moving your business into the Google Maps Top 3 for the searches your customers actually make.",
  },
  {
    question: "How is Tier3Labs different from a traditional SEO agency?",
    answer:
      "Traditional agencies focus on ranking your website in the blue links. We focus on where local customers look first — the Google Maps Top 3 — and on getting your business cited in AI search. Rather than only tweaking your website, we build the authority, citation consistency and engagement signals that Google’s local algorithm rewards. It’s a narrower, more focused approach, built specifically for UK businesses that win or lose on local visibility.",
  },
  {
    question:
      "What are Google AI Overviews, and how do you get my business recommended in AI search?",
    answer:
      "Google AI Overviews are the AI-generated answers now appearing above the traditional results, and AI assistants like ChatGPT and Gemini do the same — increasingly recommending specific businesses. We optimise your presence — profile, content authority and citations — so that when someone asks AI for the best option in your area, your business is among the names it puts forward. As AI answers replace blue links, this is becoming as important as the Map Pack itself.",
  },
  {
    question: "Do you need access to my Google Business Profile or website?",
    answer:
      "No. We never need the login details for your Google Business Profile, website or any other account. Our entire approach works through external signals — content authority, citation networks and engagement patterns — so there’s zero access required and zero risk to your accounts. You stay in full control of your profile at all times.",
  },
  {
    question: "How do I get started?",
    answer:
      "Start with a free ranking audit — just fill in the short form on our site. We’ll review your current local visibility, confirm your eligibility, and get in touch to talk through your goals and the right plan. Every customer starts with a free 7-day trial, so you can see how it works before committing to anything.",
  },
  {
    question: "How long before I see results in the Map Pack?",
    answer:
      "Most UK clients see measurable ranking improvements within 30–60 days. Meaningful movement into the Map Pack Top 3 typically happens within around 90 days, depending on how competitive your area and category are. You receive regular geo-grid ranking reports showing exactly where you rank across your local area, so you can track progress the whole way.",
  },
  {
    question: "Do I need to do anything myself, or do you handle everything?",
    answer:
      "We handle the heavy lifting. Once you’re set up, we manage the ongoing local SEO work behind the scenes — you don’t need to log in, change your website or learn anything technical. Your only job is to keep your business details accurate and respond to the new enquiries that come in.",
  },
  {
    question: "What do I receive, and how often?",
    answer:
      "The main thing you’ll see is a clear ranking report every two weeks — a geo-grid map showing where your business ranks across your local area for your target searches, and how that’s improving over time. Your Google Business Profile is optimised once at the start, only where it’s needed, and the ongoing work that moves your rankings runs quietly in the background. In short: we handle the work, and your report shows you the results.",
  },
  {
    question: "Is this “black hat” or against Google’s guidelines?",
    answer:
      "No. Tier3Labs is a UK-registered limited company, and everything we do is built around legitimate local SEO — genuine profile optimisation, consistent citations, content authority and engagement signals. There’s nothing that puts your profile at risk, which is also why we never need access to your accounts. We focus on earning your rankings sustainably, not on shortcuts that could get a profile penalised.",
  },
  {
    question: "How is this different from Google Ads or PPC?",
    answer:
      "Google Ads charges you for every click, and the moment you stop paying, your visibility disappears. Local SEO works differently: once you rank in the Map Pack, the clicks, calls and direction requests are free, and your position keeps working around the clock. Around 80% of local search clicks go to organic results rather than paid ads — reaching the majority of searchers that ads alone miss. Many businesses run both, but local SEO builds a lasting asset rather than a cost that resets every month.",
  },
  {
    question: "Which UK businesses and areas do you work with?",
    answer:
      "We work with local service businesses across the UK — the kind that rely on nearby customers finding them first. If you serve a specific town, city or region and want to be the obvious choice in local search, we can help. Our entire focus is the UK market, so everything from strategy to reporting is built around how UK customers search.",
  },
  {
    question: "What’s included in the free 7-day trial?",
    answer:
      "Every customer starts with a free 7-day trial on our Community Plan. During the trial we begin your audit, start optimising your presence and lay the groundwork for your ranking signals, so you can see how we work before paying anything. The Community Plan is a full, ongoing plan in its own right — the trial is simply how everyone begins. After the 7 days, it’s entirely your choice whether to continue.",
  },
  {
    question: "Is there a contract, and what happens if I cancel?",
    answer:
      "There are no long-term contracts — you’re never locked in. If you decide to cancel, you can do so without penalty; the optimisation work already completed stays in place, though ongoing ranking-signal work naturally stops, so rankings can ease over time without maintenance. We’d rather earn your business each month with results than tie you into a contract.",
  },
];

// Subset surfaced as a teaser on the landing page; the full list lives on /faq.
export const teaserFaqIndexes = [0, 2, 4, 6, 10, 12];
export const teaserFaqItems: FaqItem[] = teaserFaqIndexes.map((i) => faqItems[i]);

// FAQPage structured data. Each page must only pass the items visible on it,
// so the emitted schema always matches the on-page content.
export function buildFaqSchema(items: FaqItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}
