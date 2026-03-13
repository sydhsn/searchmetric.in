import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Calendar, Clock, Tag, ArrowLeft, ArrowRight, Phone, MessageCircle, CheckCircle, Share2 } from "lucide-react";
import { blogPosts, blogContent } from "@/content/blogData";
import { contact } from "@/content/siteCopy";

interface Props { params: { slug: string } }

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return { title: "Post Not Found" };
  const content = blogContent[post.slug];
  const intro = content?.sections.find((s) => s.type === "intro")?.content as string || post.excerpt;
  return {
    title: `${post.title} | Searchmetric Blog`,
    description: post.excerpt,
    keywords: [...post.tags, "digital marketing Bihar", "SEO Katihar", "Seemanchal", "Searchmetric"].join(", "),
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://searchmetric.in/blog/${post.slug}`,
      siteName: "Searchmetric",
      locale: "en_IN",
      type: "article",
      publishedTime: post.date,
    },
    twitter: { card: "summary_large_image", title: post.title, description: post.excerpt },
  };
}

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const content = blogContent[post.slug];
  const allPosts = blogPosts.filter((p) => p.slug !== post.slug);
  const related = allPosts.filter((p) => p.category === post.category).slice(0, 3);
  const postIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const prevPost = blogPosts[postIndex - 1] || null;
  const nextPost = blogPosts[postIndex + 1] || null;

  // JSON-LD Article schema
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "datePublished": post.date,
    "dateModified": post.date,
    "author": { "@type": "Organization", "name": "Searchmetric", "url": "https://searchmetric.in" },
    "publisher": {
      "@type": "Organization",
      "name": "Searchmetric",
      "logo": { "@type": "ImageObject", "url": "https://searchmetric.in/searchmetric-logo.svg" },
    },
    "mainEntityOfPage": { "@type": "WebPage", "@id": `https://searchmetric.in/blog/${post.slug}` },
    "keywords": post.tags.join(", "),
    "articleSection": post.category,
    "inLanguage": "en-IN",
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://searchmetric.in" },
      { "@type": "ListItem", "position": 2, "name": "Blog", "item": "https://searchmetric.in/blog" },
      { "@type": "ListItem", "position": 3, "name": post.title, "item": `https://searchmetric.in/blog/${post.slug}` },
    ],
  };

  const formattedDate = new Date(post.date).toLocaleDateString("en-IN", { day: "numeric", month: "long", year: "numeric" });

  const renderSection = (section: { type: string; content: string | string[] }, i: number) => {
    switch (section.type) {
      case "intro":
        return (
          <p key={i} className="text-lg text-slate-600 leading-relaxed font-medium border-l-4 border-brand-500 pl-5 py-1 bg-brand-50 rounded-r-xl mb-8">
            {section.content as string}
          </p>
        );
      case "h2":
        return <h2 key={i} className="text-2xl font-bold text-ink-900 mt-10 mb-4">{section.content as string}</h2>;
      case "h3":
        return <h3 key={i} className="text-xl font-bold text-ink-900 mt-7 mb-3">{section.content as string}</h3>;
      case "p":
        return <p key={i} className="text-slate-600 leading-relaxed mb-5">{section.content as string}</p>;
      case "ul":
        return (
          <ul key={i} className="space-y-3 mb-6">
            {(section.content as string[]).map((item, j) => (
              <li key={j} className="flex items-start gap-3">
                <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-slate-600 leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        );
      case "cta":
        return (
          <div key={i} className="my-10 bg-gradient-to-br from-brand-600 to-violet-700 rounded-2xl p-6 text-white">
            <p className="text-base leading-relaxed mb-4">{section.content as string}</p>
            <div className="flex flex-wrap gap-3">
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-sm transition-all">
                <MessageCircle size={16} /> WhatsApp Us
              </a>
              <a href={contact.phoneHref}
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-white/20 hover:bg-white/30 rounded-xl font-semibold text-sm transition-all">
                <Phone size={16} /> {contact.phone}
              </a>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="bg-slate-50 border-b border-slate-100 py-2">
        <div className="container-pad">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-500">
            {[{ name: "Home", href: "/" }, { name: "Blog", href: "/blog" }, { name: post.title, href: `/blog/${post.slug}` }].map((c, i, arr) => (
              <li key={i} className="flex items-center gap-1">
                {i < arr.length - 1
                  ? <><Link href={c.href} className="hover:text-brand-600 transition">{c.name}</Link><span className="text-slate-300">/</span></>
                  : <span className="text-brand-600 font-medium line-clamp-1 max-w-xs">{c.name}</span>}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <div className="bg-white">
        <div className="container-pad max-w-6xl mx-auto py-12">
          <div className="grid lg:grid-cols-3 gap-12">

            {/* Main Article */}
            <article className="lg:col-span-2">
              {/* Category + meta */}
              <div className="flex flex-wrap items-center gap-3 mb-5">
                <span className="px-3 py-1 rounded-full bg-gradient-to-r from-brand-500 to-violet-600 text-white text-xs font-bold">
                  {post.category}
                </span>
                <span className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <Calendar size={13} /> {formattedDate}
                </span>
                <span className="flex items-center gap-1.5 text-slate-400 text-xs">
                  <Clock size={13} /> {post.readTime}
                </span>
              </div>

              {/* Title */}
              <h1 className="text-3xl md:text-4xl font-bold text-ink-900 mb-6 leading-tight">
                {post.title}
              </h1>

              {/* Author */}
              <div className="flex items-center gap-3 mb-8 pb-8 border-b border-slate-100">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-brand-500 to-violet-600 grid place-items-center text-white font-bold text-sm">
                  S
                </div>
                <div>
                  <div className="font-semibold text-sm text-ink-900">{post.author.name}</div>
                  <div className="text-xs text-slate-400">{post.author.role} · Searchmetric</div>
                </div>
              </div>

              {/* Content */}
              <div className="prose-content">
                {content ? (
                  content.sections.map((section, i) => renderSection(section, i))
                ) : (
                  <p className="text-slate-600 leading-relaxed">{post.excerpt}</p>
                )}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-8 border-t border-slate-100">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag size={16} className="text-slate-400" />
                  {post.tags.map((tag) => (
                    <span key={tag} className="px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Prev / Next */}
              <div className="mt-10 grid grid-cols-2 gap-4">
                {prevPost ? (
                  <Link href={`/blog/${prevPost.slug}`} className="card card-pad group hover:border-brand-200 transition-all text-left">
                    <div className="flex items-center gap-2 text-xs text-slate-400 mb-2">
                      <ArrowLeft size={12} /> Previous
                    </div>
                    <div className="text-sm font-semibold text-ink-900 group-hover:text-brand-600 transition line-clamp-2">{prevPost.title}</div>
                  </Link>
                ) : <div />}
                {nextPost ? (
                  <Link href={`/blog/${nextPost.slug}`} className="card card-pad group hover:border-brand-200 transition-all text-right">
                    <div className="flex items-center justify-end gap-2 text-xs text-slate-400 mb-2">
                      Next <ArrowRight size={12} />
                    </div>
                    <div className="text-sm font-semibold text-ink-900 group-hover:text-brand-600 transition line-clamp-2">{nextPost.title}</div>
                  </Link>
                ) : <div />}
              </div>
            </article>

            {/* Sidebar */}
            <aside className="lg:col-span-1 space-y-6">

              {/* CTA Card */}
              <div className="bg-gradient-to-br from-slate-900 to-indigo-900 rounded-2xl p-6 text-white sticky top-24">
                <div className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-3">Free Audit</div>
                <h3 className="text-lg font-bold mb-3">Is Your Business Invisible on Google?</h3>
                <p className="text-slate-300 text-sm mb-5 leading-relaxed">
                  We do free Google Maps and SEO audits for businesses in Katihar, Purnea, and all of Seemanchal Bihar.
                </p>
                <div className="space-y-3">
                  <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-green-500 hover:bg-green-600 rounded-xl font-semibold text-sm transition-all">
                    <MessageCircle size={16} /> WhatsApp Free Audit
                  </a>
                  <Link href="/free-audit"
                    className="flex items-center justify-center gap-2 w-full py-3 bg-white/10 hover:bg-white/20 rounded-xl font-semibold text-sm transition-all">
                    Request Audit <ArrowRight size={16} />
                  </Link>
                  <a href={contact.phoneHref}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl border border-white/20 text-sm transition-all hover:bg-white/10">
                    <Phone size={14} /> {contact.phone}
                  </a>
                </div>
              </div>

              {/* Related Posts */}
              {related.length > 0 && (
                <div className="card card-pad">
                  <h4 className="font-bold text-sm text-ink-900 mb-4">Related Articles</h4>
                  <div className="space-y-4">
                    {related.map((p) => (
                      <Link key={p.slug} href={`/blog/${p.slug}`} className="block group">
                        <div className="text-sm font-semibold text-ink-900 group-hover:text-brand-600 transition leading-snug mb-1">{p.title}</div>
                        <div className="text-xs text-slate-400">{p.readTime} · {p.category}</div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* City links */}
              <div className="card card-pad">
                <h4 className="font-bold text-sm text-ink-900 mb-4">Our Service Areas</h4>
                <div className="space-y-2">
                  {[
                    { name: "Katihar", href: "/services/local-seo/katihar" },
                    { name: "Purnea", href: "/services/local-seo/purnea" },
                    { name: "Kishanganj", href: "/services/local-seo/kishanganj" },
                    { name: "Barsoi", href: "/services/local-seo/barsoi" },
                    { name: "Baisi", href: "/services/local-seo/baisi" },
                    { name: "Dalkhola", href: "/services/local-seo/dalkhola" },
                    { name: "Siliguri", href: "/services/local-seo/siliguri" },
                  ].map((city) => (
                    <Link key={city.name} href={city.href}
                      className="flex items-center gap-2 text-sm text-slate-600 hover:text-brand-600 transition">
                      <span className="text-brand-400">→</span> SEO in {city.name}
                    </Link>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
