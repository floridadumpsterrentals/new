import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import { PHONE, SITE_URL } from "@/lib/seo";
import { getPostBySlug, getAllSlugs } from "@/lib/blog";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | ${post.seriesLabel} | Florida Dumpster Rentals`,
    description: post.intro.slice(0, 155) + "...",
    openGraph: {
      title: post.title,
      description: post.intro.slice(0, 155) + "...",
      url: `${SITE_URL}/blog/${post.slug}`,
    },
    alternates: { canonical: `${SITE_URL}/blog/${post.slug}` },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const seriesColor =
    post.series === "seo" ? "bg-green-600" : "bg-green-400 text-black";
  const accentColor =
    post.series === "seo" ? "text-green-500" : "text-green-400";

  const phonePlain = PHONE.replace(/-/g, "");

  return (
    <div className="text-white">
      {/* Hero */}
      <section className="bg-[#0A0A0A] pb-16 pt-8">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: "Blog", url: "/blog" },
              {
                name: `${post.seriesLabel}: ${post.letter}`,
                url: `/blog/${post.slug}`,
              },
            ]}
          />

          <div className="mt-10">
            <div className="flex items-center gap-3">
              <span
                className={`flex h-10 w-10 items-center justify-center rounded-lg text-sm font-bold ${seriesColor}`}
              >
                {post.letter}
              </span>
              <span
                className={`text-sm font-semibold uppercase tracking-[0.2em] ${accentColor}`}
              >
                {post.seriesLabel}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-300">
              {post.intro}
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="bg-[#2A2A2A] py-16">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-10">
            {post.sections.map((section, i) => (
              <div key={i}>
                <h2 className="text-2xl font-bold text-white">
                  {section.heading}
                </h2>
                <p className="mt-4 text-zinc-300 leading-relaxed">
                  {section.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="bg-[#0A0A0A] py-14">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white">Related Services</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {post.relatedServices.map((svc) => (
              <Link
                key={svc.href}
                href={svc.href}
                className="rounded-lg border border-zinc-800 bg-[#141414] px-4 py-2 text-sm font-medium text-green-400 hover:border-green-600/40 hover:bg-[#1a1a1a]"
              >
                {svc.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-green-600 py-14">
        <div className="mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Need a Dumpster for Your Project?
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-lg text-green-100">
            10, 20 &amp; 30 yard roll-off dumpsters delivered anywhere in
            Florida. Same-day delivery available.
          </p>
          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a
              href={`sms:${phonePlain}`}
              className="inline-flex items-center rounded-lg bg-white px-6 py-3 text-lg font-semibold text-green-600 hover:bg-green-50"
            >
              Text Us for a Quote
            </a>
            <a
              href={`tel:${phonePlain}`}
              className="inline-flex items-center rounded-lg border-2 border-white px-6 py-3 text-lg font-semibold text-white hover:bg-white/10"
            >
              Call {PHONE}
            </a>
          </div>
          <p className="mt-6 text-sm text-green-200">
            <Link
              href="/blog"
              className="text-white underline hover:text-green-200"
            >
              &larr; Back to all guides
            </Link>
          </p>
        </div>
      </section>
    </div>
  );
}
