import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, Phone, ArrowRight, MessageCircle, Star, Search, TrendingUp, Shield, Clock, Users, BarChart3, Globe, Megaphone, Instagram, Facebook, Zap, Target } from "lucide-react";
import { contact } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Digital Marketing Agency in Katihar | SEO, Google Maps, Instagram & Facebook Ads — Searchmetric",
  description: "Searchmetric is Katihar's local digital marketing agency. We do Local SEO, Google Maps ranking, Google Business Profile setup, website development, Instagram ads, Facebook ads, and performance marketing for Katihar businesses. Free audit — +91 90801 35567.",
  keywords: "digital marketing agency Katihar, local SEO Katihar, Google Maps ranking Katihar, Google Business Profile Katihar, GBP setup Katihar, website development Katihar, Instagram ads Katihar, Facebook ads Katihar, performance marketing Katihar, lead generation Katihar, SEO company Katihar Bihar, social media marketing Katihar, near me SEO Katihar, Seemanchal digital marketing",
  alternates: { canonical: "/services/local-seo/katihar" },
  openGraph: {
    title: "Digital Marketing Agency in Katihar | SEO, GBP, Instagram & Facebook Ads — Searchmetric",
    description: "Full-service digital marketing for Katihar businesses. SEO, Google Maps, Instagram ads, Facebook ads, website. Free audit — +91 90801 35567.",
    url: "https://searchmetric.in/services/local-seo/katihar",
    siteName: "Searchmetric", locale: "en_IN", type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency in Katihar — Searchmetric",
    description: "SEO, Google Maps, Instagram & Facebook ads for Katihar businesses. Free audit.",
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://searchmetric.in/services/local-seo/katihar",
  "name": "Searchmetric — Digital Marketing Agency Katihar",
  "description": "Full-service digital marketing agency serving Katihar — Local SEO, GBP, Instagram Ads, Facebook Ads, Website Development.",
  "url": "https://searchmetric.in/services/local-seo/katihar",
  "telephone": "+91-90801-35567",
  "email": "info@searchmetric.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hospital Road, Purab Chowk",
    "addressLocality": "Baisi", "addressRegion": "Bihar",
    "postalCode": "854311", "addressCountry": "IN",
  },
  "areaServed": { "@type": "City", "name": "Katihar", "sameAs": "https://en.wikipedia.org/wiki/Katihar" },
  "serviceType": ["Local SEO", "Google Business Profile", "Instagram Ads", "Facebook Ads", "Website Development", "Performance Marketing"],
  "priceRange": "₹₹",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How much does digital marketing cost in Katihar?", "acceptedAnswer": { "@type": "Answer", "text": "Our plans for Katihar businesses start from ₹3,000/month for Local SEO, ₹5,000/month for social media management, and ₹3,000/month ad management fee for Meta ads (ad budget separate). We always start with a free audit." } },
    { "@type": "Question", "name": "How fast can my Katihar business rank on Google Maps?", "acceptedAnswer": { "@type": "Answer", "text": "Most Katihar businesses reach the top 3 on Google Maps within 60–90 days of proper optimisation. Competition is low here compared to metros, so results come faster." } },
    { "@type": "Question", "name": "Do you run Instagram and Facebook ads for Katihar businesses?", "acceptedAnswer": { "@type": "Answer", "text": "Yes — we run Meta (Instagram + Facebook) lead generation campaigns for businesses in Katihar and across Seemanchal. Typical cost per lead: ₹80–₹300 depending on category." } },
    { "@type": "Question", "name": "Can you build a website for my Katihar business?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. We build professional websites optimised for local SEO — your site will be designed to rank for Katihar keywords and convert visitors into customers." } },
    { "@type": "Question", "name": "Do I need a long-term contract?", "acceptedAnswer": { "@type": "Answer", "text": "No. We don't lock clients into long contracts. We work month-to-month — you stay because you see results, not because you're obligated." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://searchmetric.in" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://searchmetric.in/services" },
    { "@type": "ListItem", "position": 3, "name": "Katihar", "item": "https://searchmetric.in/services/local-seo/katihar" },
  ],
};

const services = [
  {
    icon: <MapPin size={24} />,
    title: "Local SEO & Google Maps",
    desc: "Rank in the top 3 on Google Maps when Katihar customers search for your service. We optimise your Google Business Profile, build local citations, and manage your monthly rankings.",
    link: "/services/local-seo",
    color: "from-indigo-500 to-violet-600",
    features: ["Google Maps top-3 ranking", "Google Business Profile full setup", "30+ directory citations (Justdial, Sulekha, IndiaMart)", "Review generation system", "Monthly ranking reports"],
  },
  {
    icon: <Globe size={24} />,
    title: "Website Development & SEO",
    desc: "A fast, professional website optimised for Katihar keywords — so you rank on Google and convert visitors into paying customers.",
    link: "/services/website-development",
    color: "from-sky-500 to-cyan-600",
    features: ["Mobile-first, fast-loading website", "On-page SEO for Katihar keywords", "Contact forms + WhatsApp integration", "Google Analytics setup", "Hosting & maintenance included"],
  },
  {
    icon: <Instagram size={24} />,
    title: "Instagram Marketing & Lead Ads",
    desc: "Instagram Lead Ads that bring Katihar customers directly to your WhatsApp. We handle creative, targeting, and follow-up systems.",
    link: "/services/social-media-management",
    color: "from-pink-500 to-rose-600",
    features: ["Instagram Lead Ad campaigns", "Reels content creation", "Local Katihar audience targeting", "Cost per lead tracking", "WhatsApp follow-up automation"],
  },
  {
    icon: <Facebook size={24} />,
    title: "Facebook Marketing & Ads",
    desc: "Facebook campaigns targeting Katihar and Seemanchal audiences aged 25–50 — the highest-converting demographic for most local services.",
    link: "/services/lead-ads",
    color: "from-blue-500 to-indigo-600",
    features: ["Facebook Lead Ad campaigns", "Local 20–30km radius targeting", "Hindi + English ad copy", "Lookalike audience from your contacts", "Detailed ROI reporting"],
  },
  {
    icon: <Target size={24} />,
    title: "Performance Marketing",
    desc: "Google Ads and Meta Ads managed together for maximum leads at minimum cost. Every rupee tracked, every lead measured.",
    link: "/services/lead-ads",
    color: "from-orange-500 to-amber-600",
    features: ["Google Search Ads (Pay Per Click)", "Meta Ads (Instagram + Facebook)", "Retargeting campaigns", "Cost per lead optimisation", "Daily budget monitoring"],
  },
  {
    icon: <Megaphone size={24} />,
    title: "Social Media Management",
    desc: "Consistent, high-quality posts on Instagram and Facebook for your Katihar business — keeping you visible and building local brand trust.",
    link: "/services/social-media-management",
    color: "from-violet-500 to-purple-600",
    features: ["8–12 posts per month", "Reels + Stories + Posts", "Caption writing in Hindi/English", "Comment & DM management", "Monthly content calendar"],
  },
];

const businessTypes = [
  { emoji: "🏥", type: "Clinics & Hospitals" },
  { emoji: "📚", type: "Coaching & Schools" },
  { emoji: "🏪", type: "Shops & Showrooms" },
  { emoji: "🍽️", type: "Restaurants & Dhabas" },
  { emoji: "🏨", type: "Hotels & Lodges" },
  { emoji: "🔧", type: "Garages & Repair" },
  { emoji: "🏗️", type: "Real Estate" },
  { emoji: "💇", type: "Salons & Beauty" },
];

const stats = [
  { val: "90%+", label: "Katihar businesses not on Google Maps" },
  { val: "Top 3", label: "Google Maps target position" },
  { val: "60–90", label: "Days avg. to see ranking results" },
  { val: "Free", label: "Audit — no commitment" },
];

const faqs = [
  { q: "How much does digital marketing cost in Katihar?", a: "Local SEO from ₹3,000/month, Social Media from ₹5,000/month, Meta Ads management from ₹3,000/month + ad budget. Always starts with a free audit." },
  { q: "How fast can my business rank on Google Maps?", a: "Most Katihar businesses reach the top 3 within 60–90 days. Competition is low here — results come faster than any metro city." },
  { q: "Do you run Instagram and Facebook ads for Katihar?", a: "Yes — Meta (Instagram + Facebook) lead generation campaigns. Typical CPL: ₹80–₹300 depending on business category." },
  { q: "Can you build a website for my Katihar business?", a: "Yes. Professional websites built for local SEO — designed to rank for Katihar keywords and convert visitors to customers." },
  { q: "What is Google Business Profile and do I need it?", a: "GBP is your free Google listing that shows on Maps. In Katihar, 90%+ businesses haven't optimised it — so doing it well puts you at the top fast." },
  { q: "Do I need a long-term contract?", a: "No. Month-to-month. You stay because you see results, not because you're locked in." },
];

const nearbyAreas = ["Katihar City", "Amdabad", "Kadwa", "Manihari", "Barari", "Barsoi", "Sameli", "Azamnagar"];

export default function KatiharPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="bg-slate-50 border-b border-slate-100 py-2" aria-label="Breadcrumb">
        <div className="container-pad">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-500">
            {[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Katihar", href: "/services/local-seo/katihar" }].map((c, i, arr) => (
              <li key={i} className="flex items-center gap-1">
                {i < arr.length - 1
                  ? <><Link href={c.href} className="hover:text-brand-600 transition">{c.name}</Link><span className="text-slate-300">/</span></>
                  : <span className="text-brand-600 font-medium">{c.name}</span>}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-20 md:py-28">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-indigo-600/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-violet-600/20 rounded-full filter blur-3xl" />
        </div>
        <div className="container-pad relative z-10 max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/20 text-white mb-6">
                <MapPin size={14} className="text-indigo-400" />
                <span className="text-sm font-semibold">Katihar, Seemanchal Bihar</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Digital Marketing Agency<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                  in Katihar
                </span>
              </h1>
              <p className="text-slate-300 text-lg mb-4 leading-relaxed">
                Full-service digital marketing for Katihar businesses — Local SEO, Google Maps ranking, Google Business Profile, website development, Instagram ads, Facebook ads, and performance marketing.
              </p>
              <p className="text-indigo-300 text-sm mb-8">Based in Seemanchal. No lock-in contracts. Results in 60–90 days.</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link href="/free-audit" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold rounded-xl shadow-xl hover:opacity-90 transition-all">
                  Free Katihar SEO Audit <ArrowRight size={18} />
                </Link>
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold">
                  <MessageCircle size={18} /> WhatsApp Us
                </a>
              </div>
              <div className="flex items-center gap-2 text-slate-300 text-sm">
                <Phone size={14} className="text-indigo-400" />
                <a href={contact.phoneHref} className="hover:text-white transition font-semibold">{contact.phone}</a>
                <span className="text-slate-500 mx-1">·</span>
                <span className="text-slate-400">Free audit · No commitment</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 text-center">
                  <div className="text-3xl font-bold text-white mb-1">{s.val}</div>
                  <div className="text-xs text-slate-300 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business types */}
      <section className="bg-white border-b border-slate-100 py-7">
        <div className="container-pad">
          <p className="text-center text-sm text-slate-500 font-medium mb-4">We help these Katihar businesses grow online:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {businessTypes.map((b, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-200 text-sm font-medium text-slate-700">
                {b.emoji} {b.type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* All 6 services */}
      <section className="section bg-gradient-to-b from-white to-slate-50">
        <div className="container-pad max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge bg-gradient-to-r from-indigo-500 to-violet-600 text-white ring-0 mb-4">Our Services in Katihar</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">Everything Your Katihar Business Needs to Grow Online</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">One agency, all channels — SEO, Google Maps, website, Instagram, Facebook, performance marketing. Done right, measured honestly.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <div key={i} className="card card-pad group hover:border-indigo-200 transition-all flex flex-col">
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${svc.color} text-white grid place-items-center mb-4 group-hover:scale-110 transition-transform`}>
                  {svc.icon}
                </div>
                <h3 className="font-bold text-ink-900 text-lg mb-2">{svc.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-4">{svc.desc}</p>
                <ul className="space-y-1.5 mb-5 flex-1">
                  {svc.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle size={14} className="text-emerald-500 flex-shrink-0 mt-0.5" /> {f}
                    </li>
                  ))}
                </ul>
                <Link href={svc.link} className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${svc.color} bg-clip-text text-transparent hover:opacity-80 transition-all mt-auto`}>
                  Learn More <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Katihar is a first-mover market */}
      <section className="section bg-white">
        <div className="container-pad max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="badge bg-gradient-to-r from-indigo-500 to-violet-600 text-white ring-0 mb-5">🎯 The Katihar Opportunity</div>
              <h2 className="text-3xl font-bold mb-5">Why Katihar Businesses Should Act Now</h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>Katihar is a major railway junction city with a growing, smartphone-native population. &apos;Near me&apos; searches are increasing month-on-month — yet 90%+ of local businesses have no optimised Google presence.</p>
                <p>This is a first-mover market. Rank in the top 3 on Google Maps today and you hold that position for years. Every competitor that comes later will struggle to displace you.</p>
                <p>Unlike Delhi or Mumbai where competition is fierce, in Katihar you&apos;re often racing 3–5 businesses most of whom have incomplete or no online presence. Ranking is faster and more affordable here than anywhere else in India right now.</p>
              </div>
              <div className="mt-6 space-y-3">
                {[
                  "Near-zero competition for most local search keywords",
                  "Growing smartphone usage across all age groups",
                  "Railway junction drives search volume from travellers",
                  "First-mover advantage holds for years in smaller markets",
                  "Results come 3–4x faster than major metro cities",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={16} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: <Search size={20} />, label: "Google Search & Maps", desc: "Appear when Katihar locals search for your service — before competitors", color: "from-indigo-500 to-violet-600" },
                { icon: <Instagram size={20} />, label: "Instagram Lead Generation", desc: "Pre-filled forms inside Instagram — 3–5x higher conversion than website ads", color: "from-pink-500 to-rose-600" },
                { icon: <Facebook size={20} />, label: "Facebook Advertising", desc: "Target Katihar's 25–50 age group — highest CPL efficiency for local services", color: "from-blue-500 to-indigo-600" },
                { icon: <Globe size={20} />, label: "Website + On-page SEO", desc: "Your website ranks for Katihar keywords and converts visitors to customers", color: "from-sky-500 to-cyan-600" },
                { icon: <BarChart3 size={20} />, label: "Performance Tracking", desc: "Monthly reports — calls, leads, clicks, rankings. You see real results.", color: "from-emerald-500 to-teal-600" },
              ].map((item, i) => (
                <div key={i} className="card card-pad flex items-center gap-4 group hover:border-indigo-200 transition-all">
                  <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${item.color} text-white grid place-items-center flex-shrink-0 group-hover:scale-105 transition-transform`}>
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-ink-900">{item.label}</div>
                    <div className="text-xs text-slate-500 mt-0.5 leading-snug">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing hint */}
      <section className="section bg-slate-50">
        <div className="container-pad max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="badge bg-gradient-to-r from-indigo-500 to-violet-600 text-white ring-0 mb-4">Transparent Pricing</div>
            <h2 className="text-3xl font-bold">Simple, Honest Pricing for Katihar Businesses</h2>
            <p className="text-slate-500 mt-3">No hidden fees. No inflated metro prices. Designed for Seemanchal budgets.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Local SEO", price: "₹3,000", period: "/month", desc: "Google Maps ranking, GBP optimisation, citations, review system, monthly report.", highlight: false, color: "from-indigo-500 to-violet-600" },
              { name: "Social Media + Ads", price: "₹5,000", period: "/month", desc: "Instagram + Facebook management, 8–12 posts/month, ad campaign management (ad budget extra).", highlight: true, color: "from-pink-500 to-rose-600" },
              { name: "Full Digital", price: "₹8,000", period: "/month", desc: "Local SEO + Social Media + Performance Ads — complete online presence managed for you.", highlight: false, color: "from-violet-500 to-purple-600" },
            ].map((plan, i) => (
              <div key={i} className={`card card-pad ${plan.highlight ? "border-brand-300 shadow-lg" : ""}`}>
                {plan.highlight && <div className="text-xs font-bold text-brand-600 mb-3 uppercase tracking-wider">Most Popular</div>}
                <div className={`text-3xl font-bold mb-1 bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>{plan.price}</div>
                <div className="text-xs text-slate-400 mb-3">{plan.period}</div>
                <div className="font-bold text-ink-900 mb-3">{plan.name}</div>
                <p className="text-slate-500 text-sm leading-relaxed mb-5">{plan.desc}</p>
                <Link href="/contact" className={`inline-flex items-center gap-2 text-sm font-semibold bg-gradient-to-r ${plan.color} bg-clip-text text-transparent`}>
                  Get Started <ArrowRight size={14} />
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-slate-400 mt-6">All prices are starting points. Free audit reveals exact requirements for your business.</p>
        </div>
      </section>

      {/* Areas */}
      <section className="section bg-white">
        <div className="container-pad max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Areas We Cover in & Around Katihar</h2>
          <p className="text-slate-500 text-sm mb-6">We target customers searching across all parts of Katihar and neighbouring areas.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium border border-indigo-100">
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-slate-50">
        <div className="container-pad max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="badge bg-gradient-to-r from-indigo-500 to-violet-600 text-white ring-0 mb-4">FAQ</div>
            <h2 className="text-3xl font-bold">Common Questions from Katihar Business Owners</h2>
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

      {/* Other cities */}
      <section className="section bg-white">
        <div className="container-pad max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">We Also Serve Businesses Near Katihar</h2>
          <div className="flex flex-wrap justify-center gap-3 mt-5">
            {[
              { name: "Purnea", href: "/services/local-seo/purnea" },
              { name: "Kishanganj", href: "/services/local-seo/kishanganj" },
              { name: "Barsoi", href: "/services/local-seo/barsoi" },
              { name: "Baisi", href: "/services/local-seo/baisi" },
              { name: "Dalkhola", href: "/services/local-seo/dalkhola" },
              { name: "Siliguri", href: "/services/local-seo/siliguri" },
            ].map((c) => (
              <Link key={c.name} href={c.href} className="px-5 py-2 rounded-full border border-indigo-200 text-indigo-700 text-sm font-medium hover:bg-indigo-50 transition-all">
                Digital Marketing {c.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 text-white">
        <div className="container-pad text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Grow Your Katihar Business Online?</h2>
          <p className="text-slate-300 mb-2 text-lg">Free audit. No pressure. Results in 60–90 days.</p>
          <p className="text-indigo-300 font-bold text-xl mb-8">📞 {contact.phone}</p>
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
            <span>✓ 100% White-Hat</span>
            <span>✓ No lock-in contracts</span>
            <span>✓ Free audit</span>
            <span>✓ Based in Seemanchal Bihar</span>
            <span>✓ Local SEO · GBP · Instagram · Facebook · Website</span>
          </div>
        </div>
      </section>
    </>
  );
}
