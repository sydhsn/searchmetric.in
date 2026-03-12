import React from "react";
import Link from "next/link";

const sections = [
  {
    title: "Main Pages",
    links: [
      { name: "Home", href: "/" },
      { name: "About Us", href: "/about" },
      { name: "Services", href: "/services" },
      { name: "Free SEO Audit", href: "/free-audit" },
      { name: "Blog", href: "/blog" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Our Services",
    links: [
      { name: "Local SEO & Google Maps", href: "/services/local-seo" },
      { name: "Social Media Management", href: "/services/social-media-management" },
      { name: "Lead Ads (Meta & Google)", href: "/services/lead-ads" },
    ],
  },
  {
    title: "Local SEO by City — Seemanchal Bihar",
    links: [
      { name: "Local SEO in Katihar", href: "/services/local-seo/katihar" },
      { name: "Local SEO in Purnea", href: "/services/local-seo/purnea" },
      { name: "Local SEO in Kishanganj", href: "/services/local-seo/kishanganj" },
      { name: "Local SEO in Barsoi", href: "/services/local-seo/barsoi" },
      { name: "Local SEO in Baisi", href: "/services/local-seo/baisi" },
      { name: "Local SEO in Dalkhola", href: "/services/local-seo/dalkhola" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms & Conditions", href: "/terms" },
    ],
  },
];

export default function SitemapPage() {
  return (
    <main className="container-pad py-16 min-h-[60vh]">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-brand-700">Sitemap</h1>
        <p className="text-slate-500 mb-10 text-sm">All pages on searchmetric.in</p>
        <div className="space-y-8">
          {sections.map((section) => (
            <div key={section.title} className="bg-white rounded-2xl border border-slate-100 shadow-sm p-6">
              <h2 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-4">{section.title}</h2>
              <ul className="space-y-2">
                {section.links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className="text-brand-700 hover:text-brand-900 hover:underline text-sm font-medium transition-colors">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
