import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { sortedPosts, formatDate } from "./posts";

export const metadata: Metadata = {
  title: "Blog | Local SEO & Google Maps Insights for UK Businesses | Tier3Labs",
  description:
    "Practical local SEO and Google Maps advice for UK businesses, from the team that helps local businesses reach the Google Maps Top 3.",
  alternates: {
    canonical: "https://www.tier3labs.co.uk/blog",
  },
};

const blogSchema = {
  "@context": "https://schema.org",
  "@type": "Blog",
  "@id": "https://www.tier3labs.co.uk/blog",
  name: "Tier3Labs Blog",
  description: "Local SEO and Google Maps insights for UK businesses.",
  publisher: { "@id": "https://www.tier3labs.co.uk/#organization" },
  blogPost: sortedPosts.map((post) => ({
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    url: `https://www.tier3labs.co.uk/blog/${post.slug}`,
    author: { "@type": "Person", name: post.author },
  })),
};

export default function BlogIndexPage() {
  return (
    <main className="min-h-screen bg-dark-bg text-text-secondary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(blogSchema) }}
      />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link
          href="/"
          className="text-green-primary text-sm hover:underline mb-8 inline-block"
        >
          ← Back to home
        </Link>

        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          The <span className="green-gradient-text">Tier3Labs</span> Blog
        </h1>
        <p className="text-lg leading-relaxed mb-16 max-w-2xl">
          Practical local SEO and Google Maps advice for UK businesses, no
          jargon, no fluff, just what actually moves rankings.
        </p>

        <div className="flex flex-col gap-6">
          {sortedPosts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="glass-card p-8 group block transition-colors hover:border-green-primary/40"
            >
              <p className="text-text-muted text-xs uppercase tracking-wider mb-3">
                {formatDate(post.date)} · {post.readingTime}
              </p>
              <h2 className="text-2xl font-bold text-white mb-3 group-hover:text-green-primary transition-colors">
                {post.title}
              </h2>
              <p className="text-text-muted leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="inline-flex items-center gap-2 text-sm text-green-primary font-semibold">
                Read article
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
