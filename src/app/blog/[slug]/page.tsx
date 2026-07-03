import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getPost, posts, formatDate, type ContentBlock } from "../posts";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const url = `https://www.tier3labs.co.uk/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.description,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.metaTitle,
      description: post.description,
      url,
      publishedTime: post.date,
      authors: [post.author],
      images: ["/opengraph-image"],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.description,
      images: ["/opengraph-image"],
    },
  };
}

function Block({ block }: { block: ContentBlock }) {
  if (block.type === "h2") {
    return (
      <h2 className="text-2xl font-bold text-white mt-12 mb-4">{block.text}</h2>
    );
  }
  if (block.type === "ul") {
    return (
      <ul className="list-disc pl-6 my-4 space-y-2">
        {block.items.map((item) => (
          <li key={item} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    );
  }
  return <p className="leading-relaxed my-4">{block.text}</p>;
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `https://www.tier3labs.co.uk/blog/${post.slug}`;

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.date,
    mainEntityOfPage: url,
    image: "https://www.tier3labs.co.uk/opengraph-image",
    author: {
      "@type": "Person",
      name: post.author,
      url: "https://www.tier3labs.co.uk/about",
    },
    publisher: { "@id": "https://www.tier3labs.co.uk/#organization" },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://www.tier3labs.co.uk",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Blog",
        item: "https://www.tier3labs.co.uk/blog",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: post.title,
        item: url,
      },
    ],
  };

  return (
    <main className="min-h-screen bg-dark-bg text-text-secondary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <article className="max-w-3xl mx-auto px-6 py-24">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex flex-wrap items-center gap-2 text-sm text-text-muted">
            <li>
              <Link href="/" className="hover:text-green-primary transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-text-muted/50">›</li>
            <li>
              <Link href="/blog" className="hover:text-green-primary transition-colors">
                Blog
              </Link>
            </li>
            <li aria-hidden="true" className="text-text-muted/50">›</li>
            <li className="text-text-secondary" aria-current="page">
              {post.title}
            </li>
          </ol>
        </nav>

        <p className="text-text-muted text-xs uppercase tracking-wider mb-4">
          <time dateTime={post.date}>{formatDate(post.date)}</time> ·{" "}
          {post.readingTime}
        </p>
        <h1 className="text-3xl md:text-4xl font-extrabold text-white leading-tight mb-6">
          {post.title}
        </h1>
        <p className="text-text-muted text-sm mb-12">
          By{" "}
          <Link href="/about" className="text-green-primary hover:underline">
            {post.author}
          </Link>
        </p>

        <div className="text-base md:text-lg">
          {post.content.map((block, i) => (
            <Block key={i} block={block} />
          ))}
        </div>

        {/* CTA */}
        <div className="glass-card p-8 text-center border-green-primary/20 mt-16">
          <h2 className="text-2xl font-bold text-white mb-3">
            See where you rank, free for 7 days
          </h2>
          <p className="text-text-muted mb-8 max-w-xl mx-auto">
            Every customer starts with a free 7-day trial. We&apos;ll show you
            your current Google Maps position and what&apos;s holding you back.
          </p>
          <Link href="/#contact" className="btn-primary inline-block">
            Start For Free
          </Link>
        </div>
      </article>
    </main>
  );
}
