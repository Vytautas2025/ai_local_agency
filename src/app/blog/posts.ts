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
    slug: "on-page-seo-for-local-businesses",
    title:
      "On-Page SEO for Local Businesses: How Your Website Helps You Rank",
    metaTitle:
      "On-Page SEO for UK Local Businesses (Website Guide) | Tier3Labs",
    description:
      "Your Google Business Profile gets you found, but your website has to back it up. Here's the on-page SEO, NAP, a footer map embed, headings, titles and local schema, that helps UK businesses rank locally.",
    excerpt:
      "Your Google Business Profile does a lot of the work in local search, but it doesn't work alone. Here's how your website's on-page SEO, from your footer to your headings to your schema, reinforces every local ranking signal you have.",
    date: "2026-07-03",
    readingTime: "8 min read",
    author: "Aivis Orentas",
    content: [
      {
        type: "p",
        text: "If you run a local business, you've probably been told that your Google Business Profile is what gets you found, and that's true. But your profile doesn't work in isolation. Before Google decides whether to put you in the Map Pack, the block of three businesses shown at the top of a local search, it cross-checks what your profile claims against what your website says. Your website is where those claims are either confirmed or quietly contradicted. Get the two working together and you strengthen every local ranking signal you have. Let them drift apart and you undermine them. This is the part of local SEO that happens on your own website, and most businesses never touch it.",
      },
      { type: "h2", text: "Your website and your profile are read as a pair" },
      {
        type: "p",
        text: "Google's whole job is to send people to a business it can trust. To judge that trust, it looks for agreement: does your profile, your website and the rest of the web all tell the same story about who you are, where you are and what you do? When your website independently confirms the details on your profile, Google's confidence goes up, and confidence is what earns the ranking. When the details don't line up, even by accident, that confidence erodes. So on-page SEO for a local business isn't about tricking anything. It's about making your website say the same true things as your profile, clearly, and in a format Google can read.",
      },
      {
        type: "h2",
        text: "Start with NAP: name, address and phone, identical everywhere",
      },
      {
        type: "p",
        text: "Your name, address and phone number (NAP, in the trade) are the anchor of your local identity, and they need to be identical everywhere they appear on your website, not just on the contact page. A discrepancy that looks trivial to a human, “Road” written out on one page and “Rd” on another, or an old phone number lingering in the footer, chips away at Google's certainty that every mention is the same business. The simplest way to keep them consistent is to put them somewhere that appears on every single page, and the footer is the natural home.",
      },
      {
        type: "ul",
        items: [
          "Write your business name exactly as it appears on your Google profile and your signage, no added keywords, no abbreviating it on one page and spelling it out on another.",
          "Match your address and phone number character for character across the whole site, right down to the same phone formatting throughout.",
          "Put the full NAP in your site-wide footer, so every page carries the same details automatically.",
        ],
      },
      {
        type: "h2",
        text: "Embed your Google Business Profile in the footer",
      },
      {
        type: "p",
        text: "This is one of the most useful things you can do to your website, and one of the most overlooked: embed the Google map of your business listing in your footer. Because the footer shows on every page, that map, and the verified listing behind it, then sits on every page too. It confirms your exact location to visitors at a glance, it gives customers a one-tap route to directions from anywhere on your site, and it ties your website directly to your verified Google Business Profile. Instead of that connection living on a single contact page, it's reinforced everywhere.",
      },
      {
        type: "p",
        text: "It's genuinely simple to add. In your Google Business Profile, or on Google Maps, choose to share your listing and copy the “embed a map” code, then drop it into your footer alongside your written NAP and a link to the profile itself. The result is that a visitor, and Google, can move from any page straight to your verified listing, and the location pinned on that map matches the address written in your text. It's a small thing that quietly reinforces the link between your site and your profile, page after page.",
      },
      {
        type: "h2",
        text: "Your headings should say what you do, and where",
      },
      {
        type: "p",
        text: "Every page has a heading structure, whether you've thought about it or not. The H1 is the main headline, there should be just one per page, and it's the single clearest statement of what that page is about. The H2s are the subheadings beneath it. Google leans heavily on these to work out what a page covers, which makes them a free opportunity to state your services and your area in plain terms. Yet countless local business homepages still lead with an H1 that says “Welcome” or “Home”, telling Google nothing at all.",
      },
      {
        type: "p",
        text: "Make your H1 say what you actually do and where you do it: “Emergency Electrician in Sheffield” rather than “Welcome to Our Website”. Then use your H2s to name your real services the way customers search for them: “Fuse Board Replacements”, “EV Charger Installation”, “Landlord Electrical Certificates”. Each heading works twice over, as a signpost for a customer skimming the page, and as a strong relevance signal for Google. Ideally they mirror the services listed on your Google profile, because that agreement between site and profile is exactly what you're building.",
      },
      {
        type: "ul",
        items: [
          "One H1 per page, stating the main service and location in words a real customer would use.",
          "H2s for your individual services, named plainly, the service itself rather than a vague “What We Offer”.",
          "Write them for people first. A heading that reads naturally to a customer almost always reads well to Google too, so resist the urge to cram in keywords.",
        ],
      },
      {
        type: "h2",
        text: "Title tags and meta descriptions: your advert in the results",
      },
      {
        type: "p",
        text: "Two things decide whether anyone clicks your listing in the search results, and neither of them is visible on the page itself. The title tag is the clickable headline Google shows, and the meta description is the short summary underneath it. Together they're the first impression a searcher gets of your business, before they've even reached your site. Leave them blank and Google will write its own, usually less compelling than something you'd craft yourself, and often not the message you'd choose.",
      },
      {
        type: "p",
        text: "Write a title for every important page that leads with the service and the location, and keep it reasonably short so Google doesn't trim the end off. Then write a description that reads like a genuine, inviting sentence or two about what you do and why someone should pick you, not a string of keywords. Crucially, give each page its own; two pages sharing the same title and description is a wasted opportunity and can leave Google unsure which one to show.",
      },
      {
        type: "ul",
        items: [
          "Title: lead with your main service and area, keep it concise, and make it unique to each page.",
          "Description: a natural, persuasive summary written to earn the click, not a list of keywords.",
          "Never let two pages share the same title and description.",
        ],
      },
      {
        type: "h2",
        text: "Give each service and area its own page, and link them together",
      },
      {
        type: "p",
        text: "If you offer several services, or cover several towns, a single catch-all page trying to rank for all of it will usually rank strongly for none of it. Give each important service its own page, and if you genuinely serve distinct areas, consider a dedicated page for each. That gives every heading, title and paragraph room to focus on one thing, which is exactly how Google prefers to match a page to a specific search. A focused page about boiler repairs will always beat a paragraph about boiler repairs buried on a page about everything.",
      },
      {
        type: "p",
        text: "Then link those pages to one another. Internal links, the links from one page of your own site to another, help visitors find their way around and help Google discover and understand every page you have. Link your service pages from your main navigation, mention related services within your text where it's natural, and make sure nothing important sits more than a click or two from your homepage. A tidy, well-linked structure means a customer and a search engine can both move through your site without hitting a dead end.",
      },
      {
        type: "h2",
        text: "Local schema: telling Google in its own language",
      },
      {
        type: "p",
        text: "Everything so far is written for people, and Google reads it well enough. But there's also a way to hand Google the very same facts in a format built specifically for machines, which removes the guesswork entirely. It's called schema markup: a small piece of code sitting in the background of your site that spells out, unambiguously, your business name, address, phone number, opening hours, the area you serve and the services you provide. Your visitors never see it. It exists purely to make your details machine-readable.",
      },
      {
        type: "p",
        text: "For a local business, the relevant type is LocalBusiness schema. It lets Google read your key details directly rather than inferring them from the page, and it can help you qualify for the richer, more prominent listings Google sometimes shows. There's one rule that matters above all: the details in your schema must exactly match your visible text, your footer NAP and your Google Business Profile. Schema that contradicts the rest of your site does more harm than good. Done properly, it's the clearest possible confirmation that your website and your profile are describing one and the same business.",
      },
      {
        type: "h2",
        text: "The thread running through all of it is consistency",
      },
      {
        type: "p",
        text: "Step back, and a single idea runs through every point here: your website's job in local SEO is to agree with your profile, clearly and consistently. The same name, the same address, the same phone number, the same services, repeated across your headings, your titles, your footer, your schema and your embedded map, all matching your Google Business Profile and all matching each other. None of it is technically hard. The hard part is being meticulous, and staying that way as the business changes. A new phone number, a service you've dropped, a move to new premises, each one is a chance for something to slip out of step, and it usually does so quietly.",
      },
      { type: "h2", text: "Where to start" },
      {
        type: "p",
        text: "If this feels like a lot at once, start with the handful of things that move the needle most and cost nothing but attention:",
      },
      {
        type: "ul",
        items: [
          "Make your NAP identical across your website, your footer, your Google profile and every directory that lists you.",
          "Add your Google Business Profile map embed and full details to your site-wide footer.",
          "Rewrite your homepage H1 and your service headings so they name what you do and where.",
          "Give each main service its own page, with its own title and meta description, linked from your navigation.",
          "Add or check your LocalBusiness schema, and make sure it matches everything else on the site.",
        ],
      },
      {
        type: "p",
        text: "None of this replaces a strong Google Business Profile; it reinforces it. Your website and your profile are two halves of the same local ranking, and they're at their strongest when they say precisely the same thing. If you'd like to see how well your website and profile currently line up, and where the gaps might be quietly costing you customers, that's the simplest place to begin. Every customer starts with a free 7-day trial, and we'll show you exactly where you stand before you commit to anything.",
      },
    ],
  },
  {
    slug: "why-seo-matters-for-uk-small-businesses",
    title: "Why SEO Matters for UK Small Businesses",
    metaTitle: "Why SEO Matters for UK Small Businesses | Tier3Labs",
    description:
      "Why does SEO matter for a small business? For UK local firms, it decides who customers find, who they trust and who gets the call. Here's why local SEO is the highest-value marketing most small businesses can do.",
    excerpt:
      "Your customers are already searching for what you do. SEO decides whether they find you, or the competitor down the road. Here's why local SEO matters more for a small business than almost anything else you can spend on.",
    date: "2026-06-30",
    readingTime: "7 min read",
    author: "Vytautas Briauka",
    content: [
      {
        type: "p",
        text: "Ask a small business owner what keeps the diary full and you'll rarely hear “search engine optimisation”. You'll hear word of mouth, repeat custom, a good reputation. But ask where a new customer actually comes from today, and the honest answer, more often than not, is a Google search on a phone. SEO matters for a small business because it decides whether you're the business they find in that moment, or the one they never see. For a local firm, that isn't a technical nicety. It's the difference between a phone that rings and one that doesn't.",
      },
      { type: "h2", text: "For a small business, SEO mostly means local SEO" },
      {
        type: "p",
        text: "SEO has a reputation for being complicated, a dark art of keywords, code and links. For a national brand competing across the country, some of that is true. For a small local business, the picture is far simpler and far more winnable. The SEO that matters to you is local SEO: showing up when someone nearby searches for what you do. A plumber in Sheffield doesn't need to outrank every plumber in Britain. They need to be one of the first businesses a Sheffield homeowner sees when the boiler packs in on a Tuesday night. That's a fight a small business can actually win.",
      },
      {
        type: "h2",
        text: "Your customers are already searching: the only question is who they find",
      },
      {
        type: "p",
        text: "Every day, people in your area type the exact thing you sell into Google: “emergency electrician near me”, “family solicitor in Cardiff”, “best barber Leeds”. These aren't idle browsers. Someone searching “near me” usually wants to buy soon, often that same day. The demand already exists, you don't have to create it. What SEO determines is who captures it. If your business doesn't appear, that ready-to-buy customer simply hands the job to whoever does, and they'll never know you were an option.",
      },
      {
        type: "h2",
        text: "The prize is the Map Pack, and that's where small businesses compete",
      },
      {
        type: "p",
        text: "When someone runs a local search, Google leads with a map and a block of three businesses, the “Map Pack”. For most people, those three results are the shortlist; the majority never scroll past them to the ordinary blue links below. Ranking in that block is the single most valuable position in local search, and it's decided largely by signals a small business controls: an accurate, complete Google Business Profile, genuine reviews, and consistent information across the web. You can't outspend a national chain on advertising, but you can absolutely out-organise the business down the road on the things that win those three slots.",
      },
      {
        type: "h2",
        text: "Being found is only half of it: SEO helps you get chosen",
      },
      {
        type: "p",
        text: "Appearing in the results gets you noticed. Whether you get the call is a separate question, and search is where that's won too. People compare before they commit, they read your reviews, glance at your photos, check your opening hours, see how recently you've been active. A business with thirty recent, well-answered reviews and real photos of its work looks like the safe choice next to a half-finished listing with none. When someone is choosing who to let into their home or trust with their health, that reassurance is often what tips the decision.",
      },
      {
        type: "p",
        text: "It's why the unglamorous details earn their keep. Google's own figures show that businesses with photos on their profile receive around 42% more requests for directions than those without. Completeness and activity don't just help you rank, they help you turn the attention into actual customers.",
      },
      { type: "h2", text: "SEO is an asset you own, not a bill you pay" },
      {
        type: "p",
        text: "The instinct for many owners is to reach for advertising, pay Google, appear at the top, get clicks. It works, but only while the money flows. The day you stop paying, you vanish. Local SEO behaves the opposite way. The reviews you gather, the profile you build, the relevance you earn, none of it resets at the end of the month. It accumulates. A small business that invests in its local presence this quarter is usually in a stronger position next quarter, and stronger again the quarter after, without paying more for the privilege.",
      },
      {
        type: "ul",
        items: [
          "Paid ads: instant visibility, but it disappears the moment the budget stops.",
          "Local SEO: slower to build, but the position you earn keeps working and compounds over time.",
        ],
      },
      { type: "h2", text: "The quiet cost of doing nothing" },
      {
        type: "p",
        text: "It's tempting to treat SEO as optional, something to get to once things are quieter. The trouble is that invisibility has a price, even though it never shows up on an invoice. Every week you don't appear, a competitor does, and they take the calls, the bookings and the customers who might have been yours for years. Worse, those customers don't come back to look for you later: once someone has found a decent local tradesperson or firm, they tend to stay put. The cost of ignoring SEO isn't a single missed job. It's the lifetime value of every customer who found someone else first.",
      },
      { type: "h2", text: "Why small businesses can actually win at this" },
      {
        type: "p",
        text: "Here's the encouraging part. Local SEO is one of the few areas of marketing where a small business isn't automatically outgunned by a bigger budget. Proximity counts, so a local firm has a built-in advantage over a distant chain. And the signals that drive rankings (reviews, an active and accurate profile, services listed the way customers search for them) reward attention and consistency far more than spend. Most of your local competitors set their profile up once and never looked at it again. Simply doing the basics well, and keeping at them, already puts you ahead of the majority.",
      },
      { type: "h2", text: "Where it starts" },
      {
        type: "p",
        text: "None of this requires a technical background. For most small businesses, the foundations are straightforward: claim and complete your Google Business Profile, get your name, address and phone number identical everywhere they appear, list every service you offer in the words customers actually use, and ask happy customers for reviews, then keep the whole thing alive rather than letting it gather dust. It isn't complicated. The hard part is doing all of it properly, and not letting it slide once the first push is over.",
      },
      {
        type: "p",
        text: "If you'd like to see where your business actually stands today, whether you appear in the Map Pack, and what's holding you back, that's the simplest place to begin. Every customer starts with a free 7-day trial, and we'll show you exactly where you rank, and the specific gaps to fix, before you commit to anything.",
      },
    ],
  },
  {
    slug: "fake-reviews-fake-backlinks-shortcuts-that-backfire",
    title:
      "Fake Reviews, Bought Backlinks and Other SEO Shortcuts That Backfire",
    metaTitle:
      "Fake Reviews & Backlinks: Why SEO Shortcuts Backfire (UK) | Tier3Labs",
    description:
      "Fake reviews, bought backlinks and keyword-stuffed business names promise quick wins for UK local businesses, and quietly do lasting damage. Here's why every shortcut fails, and what works instead.",
    excerpt:
      "Hundreds of five-star reviews overnight. A thousand backlinks for fifty quid. The shortcuts are tempting, and they're built to be detected. Here's why they backfire on UK local businesses, and what to do instead.",
    date: "2026-06-26",
    readingTime: "4 min read",
    author: "Vytautas Briauka",
    content: [
      {
        type: "p",
        text: "Every UK local business owner has, at some point, been pitched a shortcut. Hundreds of five-star reviews overnight. A thousand backlinks for fifty quid. A clever tweak to your business name that promises to vault you up the rankings. They're tempting precisely because the honest route (earning reviews, building genuine local relevance) takes patience. But these shortcuts share one fatal flaw: they're built to be detected, and when they are, the damage lands on you, not the person who sold them.",
      },
      { type: "h2", text: "Fake reviews aren't just risky: they're illegal" },
      {
        type: "p",
        text: "Buying reviews used to sit in a grey area. It doesn't any more. Under the Digital Markets, Competition and Consumers Act 2024, writing, commissioning or publishing fake reviews is now explicitly illegal in the UK, and the Competition and Markets Authority can act directly, with fines of up to 10% of a company's global turnover. That's the legal exposure. The practical reality is just as bleak: Google's systems are built to spot review patterns that don't add up (a sudden flood of five stars, reviewers with no history, accounts clustered in the wrong places), and when they catch it, the reviews disappear and your profile can be suspended.",
      },
      {
        type: "p",
        text: "So you pay for reviews, take on a legal risk, and quite possibly end up with fewer reviews and a damaged profile than if you'd done nothing at all. It's the worst trade in local marketing.",
      },
      { type: "h2", text: "Bought backlinks are a debt, not an asset" },
      {
        type: "p",
        text: "Backlinks, other websites linking to yours, are a genuine ranking signal, which is exactly why a whole industry exists to sell fake ones. Bulk links from link farms, private blog networks and £20 gig-economy packages all fall foul of Google's link-spam policies. Google either ignores them outright or, worse, hits your site with a manual action that can wipe out your rankings overnight.",
      },
      {
        type: "p",
        text: "And here's the part the sellers never mention: cleaning up a toxic backlink profile once you've built one is far harder, slower and more expensive than never buying it. You inherit a problem that long outlives the brief boost you paid for.",
      },
      {
        type: "h2",
        text: "Keyword-stuffing your name is a fast route to suspension",
      },
      {
        type: "p",
        text: "The other common shortcut is cosmetic: changing your Google Business Profile name from “Smith Plumbing” to “Smith Plumbing | Emergency Plumber Manchester 24/7”. It can nudge rankings for a while, and it's a direct breach of Google's guidelines. Competitors report it, Google suspends it, and getting a suspended profile reinstated is a slow, uncertain process that can leave you invisible for weeks.",
      },
      { type: "h2", text: "Why every shortcut fails for the same reason" },
      {
        type: "p",
        text: "Fake reviews, bought links and stuffed names look different, but they fail for one shared reason: each tries to fake a signal that Google and your customers use to judge trust. The platforms are very good, and getting better, at telling manufactured trust from the real thing. When the gap is found, the correction is brutal. You don't just lose the boost; you often drop below where you started, and you spend months digging out instead of building.",
      },
      {
        type: "p",
        text: "Worse, a penalty follows you. A clean business that simply hasn't started yet is in a far stronger position than one carrying a suspension or a manual action. Starting from zero beats starting from negative.",
      },
      { type: "h2", text: "The unglamorous route wins anyway" },
      {
        type: "p",
        text: "The frustrating truth is that the legitimate version of every shortcut works better in the end. Real reviews from real customers rank you and convince the next buyer. Genuine local links (your trade body, a respected directory, a supplier, a sponsored community event) carry real weight and never come back to bite you. An accurate, complete profile with your services listed properly earns relevance honestly. It's slower, yes. It also compounds, and it can't be taken away from you in a single enforcement sweep.",
      },
      {
        type: "p",
        text: "If you're not sure whether your current profile is built on solid ground, or you've inherited tactics from a previous agency and you're not certain what was done, it's worth a proper look. Every customer starts with a free 7-day trial, and we'll show you exactly where you stand before you commit to anything.",
      },
    ],
  },
  {
    slug: "optimise-google-business-profile-uk",
    title:
      "How to Optimise Your Google Business Profile: A Practical Guide for UK Businesses",
    metaTitle:
      "How to Optimise Your Google Business Profile (UK Guide) | Tier3Labs",
    description:
      "A no-fluff guide to optimising your Google Business Profile so your UK business ranks in the Google Maps Top 3, categories, services as keywords, photos, reviews and the upkeep most businesses skip.",
    excerpt:
      "Your Google Business Profile is the single biggest lever you have in local search, and most UK businesses barely touch it. Here's how to set it up properly, use your services as keywords, and keep it working.",
    date: "2026-06-25",
    readingTime: "7 min read",
    author: "Vytautas Briauka",
    content: [
      {
        type: "p",
        text: "For a UK local business, your Google Business Profile is the most important page on the internet that you don't fully control. It's what people see when they search for what you do near them, before they ever reach your website. Get it right and you give yourself a genuine shot at the Google Maps Top 3, the block of three businesses that sits above the ordinary results. A well-optimised profile won't get you there on its own, but it's the foundation the ranking is built on; leave it half-finished and you won't appear at all, however much else you do. The good news is that optimising it is mostly a matter of doing a handful of unglamorous things properly, and then not stopping.",
      },
      { type: "h2", text: "Why the profile matters more than your website" },
      {
        type: "p",
        text: "On a local search (“electrician near me”, “dentist in Leeds”, “accountant Bristol”), Google leads with a map and three business listings. That block, the “Map Pack”, captures up to 60% of all clicks on local searches. Your website, sitting in the blue links below, competes for what's left. For a local business, ranking in those three slots is worth more than almost anything you can do on your own site.",
      },
      {
        type: "p",
        text: "And the listing that earns those clicks isn't chosen at random. Google weighs three things: how close you are to the searcher, how relevant your profile is to what they typed, and how prominent your business looks: reviews, activity and completeness. You can't move your premises, but the other two are entirely within your control.",
      },
      {
        type: "h2",
        text: "Start with the boring details, and get them perfectly consistent",
      },
      {
        type: "p",
        text: "Your name, address and phone number (NAP, in the trade) need to be identical everywhere they appear, on your profile, your website and every directory that lists you. “Street” on one and “St.” on another, or an old phone number lingering on a listing you forgot about, quietly undermine Google's confidence that you are who you say you are.",
      },
      {
        type: "ul",
        items: [
          "Use your real business name, exactly as it appears on your signage, not “Smith Plumbing | Emergency Plumber Manchester” stuffed with keywords. Google can suspend profiles for that.",
          "Match your address and phone number character-for-character across the web.",
          "Set accurate opening hours, and update them for bank holidays, nothing erodes trust like a customer arriving at a closed door.",
        ],
      },
      {
        type: "h2",
        text: "Choose your categories like they decide who finds you, because they do",
      },
      {
        type: "p",
        text: "Your primary category is one of the strongest relevance signals Google has. Pick the most specific one that describes your core business: “Emergency dentist” rather than just “Dentist” if that's your focus. Then add every secondary category that genuinely applies, because each one is another search you can show up for. Most businesses choose a single category on day one and never look again; reviewing them is one of the quickest wins available.",
      },
      {
        type: "h2",
        text: "List every service you offer: your services are keywords",
      },
      {
        type: "p",
        text: "This is the part most businesses overlook, and it's one of the most powerful. If your category tells Google what kind of business you are, your services tell it exactly what you do, and every service you list behaves like a keyword you can be matched against. A plumber who adds “boiler repair”, “power flushing”, “radiator installation”, “emergency leak repair” and “bathroom plumbing” gives Google five specific searches to connect them to, instead of hoping the single word “plumber” covers everything.",
      },
      {
        type: "ul",
        items: [
          "Add every distinct service you offer, named the way customers actually search for it, not internal jargon.",
          "Write a genuine description for each one, weaving in the service and your area naturally rather than stuffing keywords.",
          "Revisit the list whenever you add or drop a service, or notice a new phrase people are searching for.",
        ],
      },
      {
        type: "p",
        text: "Done properly, your services turn a single listing into dozens of small relevance signals, each one another door a customer can walk through to find you. It costs nothing but time, and most of your competitors haven't bothered.",
      },
      { type: "h2", text: "Photos do real work" },
      {
        type: "p",
        text: "Profiles with photos don't just look better, Google's own figures show businesses with photos receive around 42% more requests for directions, and more click-throughs, than those without. Add a proper logo and cover image, real photos of your premises, your team and your finished work, and refresh them regularly. Authentic images beat stock every time, and a steady trickle of new photos is itself a signal that the business is active.",
      },
      { type: "h2", text: "Reviews are the engine" },
      {
        type: "p",
        text: "Reviews influence both your ranking and whether a customer picks you over the listing next to yours. The number matters, but so does how recent they are, the rating, and, crucially, that you reply. Ask every happy customer for a review, make it easy with a direct link, and respond to all of them, good and bad. A calm, professional reply to a critical review often reassures future customers more than the five-star ones do.",
      },
      {
        type: "p",
        text: "Just don't be tempted to buy reviews or post fake ones. Google is good at spotting them, the penalties are real, and in the UK the Competition and Markets Authority has been actively cracking down on fake reviews, so it's a legal risk, not just a ranking one.",
      },
      { type: "h2", text: "Use the features most businesses ignore" },
      {
        type: "p",
        text: "A Google Business Profile is far more than a static listing. The extras are where you pull ahead of competitors who set theirs up once and walked away:",
      },
      {
        type: "ul",
        items: [
          "Posts: short updates, offers and news that appear on your profile, a simple way to stay visibly active.",
          "Q&A: seed and answer the questions customers actually ask, before someone else answers them for you.",
          "Products: if you sell physical products, list them with photos and prices so your profile matches shopping-style searches.",
          "Messaging and booking: let people contact or book you straight from the listing, while their intent is highest.",
        ],
      },
      {
        type: "h2",
        text: "The part almost everyone skips: keep it alive",
      },
      {
        type: "p",
        text: "Optimising a Google Business Profile isn't a one-off job. Rankings reward businesses that stay active: fresh photos, regular posts, a steady flow of recent reviews, prompt replies and up-to-date information. A profile that was perfect a year ago and untouched since will slowly drift down while more active competitors climb past it. The businesses that win the Map Pack aren't necessarily the biggest; they're the ones still showing up month after month.",
      },
      { type: "h2", text: "What “optimised” actually looks like" },
      {
        type: "p",
        text: "Put simply: a complete, accurate and consistent profile, in the right categories, with every service listed, genuine photos and a living stream of reviews and posts, maintained over time. None of it is complicated. The hard part is doing all of it, properly, and not letting it slide once the initial push is over.",
      },
      {
        type: "p",
        text: "If you'd rather see exactly where your profile stands today, and what's holding it back, every customer starts with a free 7-day trial. We'll show you your current Google Maps position and the specific gaps to fix, before you commit to anything.",
      },
    ],
  },
  {
    slug: "local-seo-vs-google-ads",
    title: "Local SEO vs Google Ads: What Actually Works for UK Businesses",
    metaTitle:
      "Local SEO vs Google Ads: What Works for UK Businesses | Tier3Labs",
    description:
      "Should UK local businesses invest in local SEO or Google Ads? We break down cost, click share, trust and longevity, and when paid ads still make sense.",
    excerpt:
      "Paid ads stop the moment you stop paying. Local SEO compounds. Here's an honest breakdown of where UK local businesses should put their money, and when ads still earn their place.",
    date: "2026-06-17",
    readingTime: "5 min read",
    author: "Vytautas Briauka",
    content: [
      {
        type: "p",
        text: "For most UK local businesses, the marketing budget comes down to one question: do you pay for visibility, or earn it? Google Ads buys you a spot at the top today. Local SEO, and specifically a place in the Google Maps Top 3, earns you a spot that keeps working long after the work is done. Both can bring customers. But they behave very differently, and the gap matters most when budgets are tight.",
      },
      { type: "h2", text: "The cost problem with paid ads" },
      {
        type: "p",
        text: "Google Ads runs on an auction. Every click has a price, and in competitive local trades (think dentists, solicitors, builders and estate agents) that price only moves in one direction. A single click for a high-intent local keyword can cost several pounds, and a serious local campaign often needs a minimum of £500–£5,000 a month just to stay visible.",
      },
      {
        type: "p",
        text: "The harder truth is what happens when you pause. The moment your card stops being charged, your visibility disappears. You aren't building anything, you're renting attention by the day. Stop paying and you're back where you started.",
      },
      { type: "h2", text: "Where the clicks actually go" },
      {
        type: "p",
        text: "It's easy to assume the ads at the very top of Google soak up most of the clicks. They don't. On local searches, the Google Maps Top 3, the “Map Pack”, captures up to 60% of clicks, while paid ads typically take around 10%.",
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
        text: "Ranking in the Map Pack is the result of signals that accumulate over time: a well-optimised Google Business Profile, consistent reviews, accurate citations across the web, and steady local relevance. Those signals don't reset at the end of the month. They compound. A business that invests in local SEO this quarter is usually in a stronger position next quarter, and stronger again the quarter after, without paying more for the privilege.",
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
        text: "Want to know where your business currently stands in the Map Pack? Every customer starts with a free 7-day trial, and we'll show you exactly where you rank before you commit to anything.",
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
