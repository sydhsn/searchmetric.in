import React from "react";
import Link from "next/link";

const samplePosts = [
  {
    title: "How to Rank Your Business on Google Maps in 2026",
    excerpt: "Step-by-step local SEO strategies for Indian businesses to dominate Google Maps results.",
    date: "2026-01-15",
    slug: "google-maps-seo-2026"
  },
  {
    title: "Instagram Lead Ads: What Works in India?",
    excerpt: "A practical guide to running high-converting Instagram lead ads for local brands.",
    date: "2025-12-20",
    slug: "instagram-lead-ads-india"
  },
  {
    title: "Content Marketing Trends for Indian Startups",
    excerpt: "Discover the latest content strategies that are driving growth for Indian startups in 2026.",
    date: "2025-11-10",
    slug: "content-trends-india-2026"
  },
];

export default function BlogPage() {
  return (
    <main className="container-pad py-16 min-h-[60vh]">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-brand-700">Blog</h1>
        <p className="text-lg text-slate-600 mb-10">
          Insights, tips, and news on digital marketing, SEO, and social media for Indian businesses.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {samplePosts.map((p) => (
          <div key={p.slug} className="card card-hover p-6 rounded-2xl shadow-lg bg-white flex flex-col justify-between">
            <div>
              <div className="text-xs font-semibold text-brand-600 uppercase tracking-wide mb-2">{new Date(p.date).toLocaleDateString()}</div>
              <h2 className="text-xl font-bold mb-2 text-ink-900">{p.title}</h2>
              <p className="text-slate-600 mb-4">{p.excerpt}</p>
            </div>
            <Link href="/contact" className="btn-primary w-full mt-auto">Request a Topic</Link>
          </div>
        ))}
      </div>
      <div className="mt-12 text-center text-slate-500">
        Want to contribute? <Link href="/contact" className="text-brand-600 hover:underline">Become a guest author</Link>
      </div>
    </main>
  );
}
