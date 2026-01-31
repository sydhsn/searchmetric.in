import React from "react";
import Link from "next/link";

const links = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Case Studies", href: "/case-studies" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Conditions", href: "/terms" },
];

export default function SitemapPage() {
  return (
    <main className="container-pad py-16 min-h-[60vh]">
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-4xl font-bold mb-4 text-brand-700">Sitemap</h1>
        <ul className="space-y-3 mt-6">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-lg text-brand-700 hover:underline">
                {l.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
