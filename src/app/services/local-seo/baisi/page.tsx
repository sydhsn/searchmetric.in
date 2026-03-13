import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, Phone, ArrowRight, MessageCircle, Globe, Megaphone, TrendingUp, Shield, Clock, Users, BarChart3, Target } from "lucide-react";
import { contact } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Baisi | SEO, GBP, Instagram & Facebook Ads — Searchmetric",
  description: "Digital marketing for Baisi businesses. We're based here — Hospital Road, Purab Chowk, Baisi. SEO, GBP, Instagram ads, Facebook ads. Free audit +91 90801 35567.",
  keywords: "digital marketing Baisi, local SEO Baisi, Google Maps ranking Baisi, GBP Baisi, website development Baisi, Instagram ads Baisi, Facebook ads Baisi, performance marketing Baisi, lead generation Baisi, SEO company Baisi, social media marketing Baisi, Seemanchal digital marketing",
  alternates: { canonical: "/services/local-seo/baisi" },
  openGraph: {
    title: "Digital Marketing Agency in Baisi | SEO, GBP, Ads — Searchmetric",
    description: "Digital marketing for Baisi businesses. We're based here — Hospital Road, Purab Chowk, Baisi. SEO, GBP, Instagram ads, Facebook ads. Free audit +91 90801 35567.",
    url: "https://searchmetric.in/services/local-seo/baisi",
    siteName: "Searchmetric", locale: "en_IN", type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing in Baisi — Searchmetric",
    description: "Digital marketing for Baisi businesses. We're based here — Hospital Road, Purab Chowk, Baisi. SEO, GBP, Instagram ads, Facebook ads. Free audit +91 90801 35567.",
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://searchmetric.in/services/local-seo/baisi",
  "name": "Searchmetric — Digital Marketing Agency Baisi",
  "url": "https://searchmetric.in/services/local-seo/baisi",
  "telephone": "+91-90801-35567",
  "email": "info@searchmetric.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hospital Road, Purab Chowk",
    "addressLocality": "Baisi", "addressRegion": "Bihar",
    "postalCode": "854311", "addressCountry": "IN",
  },
  "areaServed": { "@type": "City", "name": "Baisi" },
  "serviceType": ["Local SEO", "Google Business Profile", "Instagram Ads", "Facebook Ads", "Website Development", "Performance Marketing"],
  "priceRange": "₹₹",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "You're based in Baisi — does that help me?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we know Baisi's market personally. Local search patterns, the right keywords, the competition. You won't get that from any agency in Delhi or Patna." } },
    { "@type": "Question", "name": "Can Baisi businesses really rank on Google?", "acceptedAnswer": { "@type": "Answer", "text": "Yes, faster than almost anywhere. SEO competition in Baisi is near zero. Optimise your profile and you rank at the top almost immediately." } },
    { "@type": "Question", "name": "Can you visit my business in Baisi?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we can arrange in-person consultations. Call or WhatsApp +91 90801 35567." } },
    { "@type": "Question", "name": "Do you run Instagram and Facebook ads for Baisi?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — Meta campaigns targeting Baisi, surrounding Purnea district, and specific audience segments." } }
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://searchmetric.in" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://searchmetric.in/services" },
    { "@type": "ListItem", "position": 3, "name": "Baisi", "item": "https://searchmetric.in/services/local-seo/baisi" },
  ],
};

const services = [
  { icon: "📍", title: "Local SEO & Google Maps", desc: "Rank in the top 3 on Google Maps for Baisi searches. GBP optimisation, citations, review generation, monthly reports.", color: "from-indigo-500 to-violet-600" },
  { icon: "🌐", title: "Website Development & SEO", desc: "Mobile-first website optimised for Baisi keywords. Ranks on Google and converts visitors into customers.", color: "from-sky-500 to-cyan-600" },
  { icon: "📸", title: "Instagram Marketing & Ads", desc: "Instagram Lead Ads and Reels content targeting Baisi audiences. Pre-filled forms, high conversion rates.", color: "from-pink-500 to-rose-600" },
  { icon: "👍", title: "Facebook Marketing & Ads", desc: "Facebook Lead campaigns targeting Baisi 25–50 age group. Hindi+English copy, local radius targeting.", color: "from-blue-500 to-indigo-600" },
  { icon: "🎯", title: "Performance Marketing", desc: "Google Ads + Meta Ads managed together. Every rupee tracked, every lead measured. CPL-focused campaigns.", color: "from-orange-500 to-amber-600" },
  { icon: "📱", title: "Social Media Management", desc: "8–12 posts/month across Instagram and Facebook. Reels, Stories, captions — consistent local brand presence in Baisi.", color: "from-violet-500 to-purple-600" },
];

const faqs = [
  { q: "You're based in Baisi — does that help me?", a: "Yes — we know Baisi's market personally. Local search patterns, the right keywords, the competition. You won't get that from any agency in Delhi or Patna." },
  { q: "Can Baisi businesses really rank on Google?", a: "Yes, faster than almost anywhere. SEO competition in Baisi is near zero. Optimise your profile and you rank at the top almost immediately." },
  { q: "Can you visit my business in Baisi?", a: "Yes — we can arrange in-person consultations. Call or WhatsApp +91 90801 35567." },
  { q: "Do you run Instagram and Facebook ads for Baisi?", a: "Yes — Meta campaigns targeting Baisi, surrounding Purnea district, and specific audience segments." },
];

const nearbyAreas = ["Baisi Block", "Purab Chowk", "Hospital Road", "Baisi Bazar", "Dharhara", "Jhaua", "Kahalgaon Road"];

export default function BaisiPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <nav className="bg-slate-50 border-b border-slate-100 py-2" aria-label="Breadcrumb">
        <div className="container-pad">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-500">
            {[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Baisi", href: "/services/local-seo/baisi" }].map((c, i, arr) => (
              <li key={i} className="flex items-center gap-1">
                {i < arr.length - 1
                  ? <><Link href={c.href} className="hover:text-brand-600 transition">{c.name}</Link><span className="text-slate-300">/</span></>
                  : <span className="text-brand-600 font-medium">{c.name}</span>}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 py-20 md:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl" />
        </div>
        <div className="container-pad relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-6">
                <MapPin size={14} className="opacity-80" />
                <span className="text-sm font-semibold">Baisi, Purnea District</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Digital Marketing Agency<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">in Baisi</span>
              </h1>
              <p className="text-slate-300 text-lg mb-4 leading-relaxed">Baisi is our home. We&apos;re based at Hospital Road, Purab Chowk, Baisi — we know this market better than any agency. Let us put your business at the top of Google.</p>
              <p className="text-sm mb-8" style={{color:'rgba(200,200,255,0.7)'}}>Local SEO · Google Maps · GBP · Website · Instagram Ads · Facebook Ads · Performance Marketing</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link href="/free-audit" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-xl shadow-xl hover:opacity-90 transition-all">
                  Free Baisi SEO Audit <ArrowRight size={18} />
                </Link>
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold">
                  <MessageCircle size={18} /> WhatsApp Us
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Phone size={14} />
                <a href={contact.phoneHref} className="hover:text-white transition font-semibold">{contact.phone}</a>
                <span className="text-slate-500 mx-1">·</span>
                <span className="text-slate-400">Free audit · No commitment</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ val: "Top 3", label: "Google Maps target" }, { val: "Free", label: "Audit, no commitment" }, { val: "60–90", label: "Days to see results" }, { val: "6", label: "Digital services in one place" }].map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{s.val}</div>
                  <div className="text-xs text-slate-300 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-b from-white to-slate-50">
        <div className="container-pad max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge bg-gradient-to-r from-violet-500 to-purple-600 text-white ring-0 mb-4">Our Services in Baisi</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Everything Your Baisi Business Needs Online</h2>
            <p className="text-slate-500 max-w-xl mx-auto">SEO, Google Maps, website, Instagram, Facebook, performance ads — one agency, all channels, measured by real results.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div key={i} className="card card-pad group hover:border-slate-300 transition-all">
                <div className="text-3xl mb-3">{svc.icon}</div>
                <h3 className="font-bold text-ink-900 mb-2">{svc.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{svc.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/free-audit" className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition-all">
              Get Free Audit for Baisi <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <div className="badge bg-gradient-to-r from-violet-500 to-purple-600 text-white ring-0 mb-5">🎯 The Baisi Opportunity</div>
              <h2 className="text-3xl font-bold mb-5">Why Baisi Businesses Should Act Now</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-5">Baisi is where Searchmetric is headquartered. We know this market personally. Almost no business in Baisi has an optimised Google presence — you can reach the top 3 on Google Maps almost immediately. We&apos;re your neighbours and we&apos;re proud to help local Baisi businesses grow.</p>
              <div className="space-y-3">
                {["Near-zero competition for most local search terms", "Growing smartphone usage — more searches every month", "First-mover rankings hold for years in smaller markets", "Results 3–4x faster than any metro city", "Free audit reveals your exact opportunity"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="card card-pad">
              <h3 className="font-bold text-lg mb-5">Why Choose Searchmetric for Baisi</h3>
              <div className="space-y-4">
                {[
                  { icon: "🛡️", title: "100% White-Hat Only", desc: "No fake reviews, no spam, no black-hat tactics. Everything follows Google guidelines — your rankings last." },
                  { icon: "📍", title: "Based in Seemanchal Bihar", desc: "We're at Hospital Road, Purab Chowk, Baisi, Purnea. We know this region's market personally." },
                  { icon: "🔓", title: "No Lock-In Contracts", desc: "Month-to-month. You stay because you see results, not because you're obligated to." },
                  { icon: "💬", title: "Direct Communication", desc: "Speak directly with who's working on your account. WhatsApp or call any time." },
                  { icon: "📊", title: "Results You Can Measure", desc: "Monthly reports in plain language — calls, leads, rankings. No jargon, no vanity metrics." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <div>
                      <div className="font-semibold text-sm text-ink-900 mb-0.5">{item.title}</div>
                      <div className="text-xs text-slate-500 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-pad max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Areas We Cover in & Around Baisi</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {nearbyAreas.map((area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-white text-slate-700 text-sm font-medium border border-slate-200">
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-pad max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="badge bg-gradient-to-r from-violet-500 to-purple-600 text-white ring-0 mb-4">FAQ</div>
            <h2 className="text-3xl font-bold">Questions from Baisi Business Owners</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="card card-pad">
                <h3 className="font-bold text-ink-900 mb-2">{faq.q}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-slate-50">
        <div className="container-pad max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">We Also Serve Businesses Near Baisi</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {[{ name: "Katihar", href: "/services/local-seo/katihar" }, { name: "Purnea", href: "/services/local-seo/purnea" }, { name: "Kishanganj", href: "/services/local-seo/kishanganj" }, { name: "Barsoi", href: "/services/local-seo/barsoi" }, { name: "Baisi", href: "/services/local-seo/baisi" }, { name: "Dalkhola", href: "/services/local-seo/dalkhola" }, { name: "Siliguri", href: "/services/local-seo/siliguri" }].filter(c => c.name !== "Baisi").map((c) => (
              <Link key={c.name} href={c.href} className="px-5 py-2 rounded-full border border-slate-200 text-slate-700 text-sm font-medium hover:border-brand-300 hover:text-brand-600 transition-all">
                Digital Marketing {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 text-white">
        <div className="container-pad text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Baisi Business Online?</h2>
          <p className="text-slate-300 mb-2 text-lg">Free audit. No pressure. Results in 60–90 days.</p>
          <p className="font-bold text-xl mb-8" style={{color:'rgba(200,220,255,0.9)'}}>📞 {contact.phone}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center flex-wrap">
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all">
              <MessageCircle size={18} /> WhatsApp Free Audit
            </a>
            <Link href="/free-audit" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all">
              Get Free Audit <ArrowRight size={18} />
            </Link>
            <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold">
              <Phone size={16} /> Call Now
            </a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span>✓ 100% White-Hat</span><span>✓ No lock-in</span><span>✓ Free audit</span><span>✓ SEO · GBP · Instagram · Facebook · Website</span>
          </div>
        </div>
      </section>
    </>
  );
}
