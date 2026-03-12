import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, Phone, ArrowRight, MessageCircle, Star, Search, TrendingUp, Shield, Clock, Users, BarChart3 } from "lucide-react";
import { contact } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Local SEO in Barsoi | Google Maps Ranking & Digital Marketing — Searchmetric",
  description: "Local SEO for businesses in Barsoi, Katihar district. Rank on Google Maps and capture highway and local customers. Free audit — +91 90801 35567.",
  keywords: "local SEO Barsoi, SEO agency Barsoi, digital marketing Barsoi, Google Maps ranking Barsoi, Google Business Profile Barsoi, GBP Barsoi, SEO company Barsoi Bihar, Instagram marketing Barsoi, Facebook ads Barsoi, lead generation Barsoi, best digital marketing agency Barsoi, Seemanchal SEO, near me SEO Barsoi",
  alternates: { canonical: "/services/local-seo/barsoi" },
  openGraph: {
    title: "Local SEO in Barsoi | Google Maps Ranking — Searchmetric",
    description: "Get your Barsoi business found on Google Maps. NH-31 highway location means constant customer searches.",
    url: "https://searchmetric.in/services/local-seo/barsoi",
    siteName: "Searchmetric",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO in Barsoi — Searchmetric",
    description: "Get your Barsoi business found on Google Maps. NH-31 highway location means constant customer searches.",
  },
};

const citySchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://searchmetric.in/services/local-seo/barsoi",
  "name": "Searchmetric — Local SEO Agency Barsoi",
  "url": "https://searchmetric.in/services/local-seo/barsoi",
  "telephone": "+91-90801-35567",
  "email": "info@searchmetric.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hospital Road, Purab Chowk",
    "addressLocality": "Baisi",
    "addressRegion": "Bihar",
    "postalCode": "854311",
    "addressCountry": "IN",
  },
  "areaServed": { "@type": "City", "name": "Barsoi" },
  "priceRange": "₹₹",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can highway travellers find my Barsoi business on Google?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes — travellers searching on Google Maps while driving see nearby businesses. A well-optimised GBP puts your hotel, dhaba, or pharmacy right in front of them." }
    },
    {
      "@type": "Question",
      "name": "Is SEO worth it for a small town like Barsoi?",
      "acceptedAnswer": { "@type": "Answer", "text": "Absolutely — small towns see faster results because competition is minimal. Top-3 ranking is achievable within weeks." }
    },
    {
      "@type": "Question",
      "name": "Can I target both Barsoi and Katihar in my SEO?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. We configure your GBP to appear in searches across Barsoi, Katihar, and the broader NH-31 corridor." }
    },
    {
      "@type": "Question",
      "name": "What types of businesses do you work with in Barsoi?",
      "acceptedAnswer": { "@type": "Answer", "text": "Dhabas, hotels, pharmacies, garages, petrol pumps, medical stores, grocery shops, coaching centres — any business serving local or passing customers." }
    }
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://searchmetric.in" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://searchmetric.in/services" },
    { "@type": "ListItem", "position": 3, "name": "Local SEO", "item": "https://searchmetric.in/services/local-seo" },
    { "@type": "ListItem", "position": 4, "name": "Barsoi", "item": "https://searchmetric.in/services/local-seo/barsoi" },
  ],
};

const businessTypes = [
  { emoji: "🏥", type: "Clinics & Health" },
  { emoji: "📚", type: "Coaching & Schools" },
  { emoji: "🏪", type: "Shops & Retail" },
  { emoji: "🍽️", type: "Restaurants & Dhabas" },
  { emoji: "🏨", type: "Hotels & Lodges" },
  { emoji: "🔧", type: "Repair & Services" },
  { emoji: "💼", type: "Local Professionals" },
  { emoji: "🌾", type: "Agriculture & Trade" },
];

const processSteps = [
  { step: "01", title: "Free Audit", desc: "We audit your Google presence, check Barsoi competitors, and identify your fastest ranking opportunities — at zero cost." },
  { step: "02", title: "GBP Optimisation", desc: "Complete Google Business Profile setup — right categories, keyword-rich description, service areas, photos, attributes." },
  { step: "03", title: "Citation Building", desc: "30+ directory listings with perfectly consistent Name, Address, Phone — Justdial, Sulekha, IndiaMart, Bing Places." },
  { step: "04", title: "Reviews & Posts", desc: "Simple review collection system and regular Google Posts to keep your profile active and climbing in rank." },
  { step: "05", title: "Monthly Reports", desc: "Clear monthly report — profile views, calls, direction requests, keyword rankings. No jargon." },
];

const includes = [
  { icon: "📍", title: "Google Business Profile Full Setup", desc: "Complete GBP creation or deep optimisation — categories, description, photos, service areas, attributes, Q&A." },
  { icon: "🔑", title: "Barsoi Keyword Research", desc: "We find exactly what Barsoi customers search for and build your SEO around those exact phrases." },
  { icon: "📋", title: "30+ Local Directory Listings", desc: "Justdial, Sulekha, IndiaMart, Bing Places, and regional Bihar directories — consistent info builds Google trust." },
  { icon: "⭐", title: "Review Generation System", desc: "A WhatsApp-friendly system to collect genuine Google reviews from your happy customers." },
  { icon: "📸", title: "Photos, Posts & Q&A", desc: "Real business photos, Google Posts, Q&A management — all ranking signals Google considers for Maps." },
  { icon: "📊", title: "Monthly Performance Report", desc: "Transparent monthly report — impressions, calls, searches, direction requests, keyword positions." },
];

const nearbyAreas = ["Barsoi Town", "Barsoi Junction", "Barari", "Koderma", "Sameli", "Amdabad", "Kadwa"];

const faqs = [
  { q: "Can highway travellers find my Barsoi business on Google?", a: "Yes — travellers searching on Google Maps while driving see nearby businesses. A well-optimised GBP puts your hotel, dhaba, or pharmacy right in front of them." },
  { q: "Is SEO worth it for a small town like Barsoi?", a: "Absolutely — small towns see faster results because competition is minimal. Top-3 ranking is achievable within weeks." },
  { q: "Can I target both Barsoi and Katihar in my SEO?", a: "Yes. We configure your GBP to appear in searches across Barsoi, Katihar, and the broader NH-31 corridor." },
  { q: "What types of businesses do you work with in Barsoi?", a: "Dhabas, hotels, pharmacies, garages, petrol pumps, medical stores, grocery shops, coaching centres — any business serving local or passing customers." },
];

export default function BarsoiLocalSEOPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb */}
      <nav className="bg-slate-50 border-b border-slate-100 py-2" aria-label="Breadcrumb">
        <div className="container-pad">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-500">
            {[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Local SEO", href: "/services/local-seo" }, { name: "Barsoi", href: "/services/local-seo/barsoi" }].map((crumb, i, arr) => (
              <li key={i} className="flex items-center gap-1">
                {i < arr.length - 1 ? (<><Link href={crumb.href} className="hover:text-brand-600 transition">{crumb.name}</Link><span className="text-slate-300">/</span></>) : (<span className="text-brand-600 font-medium">{crumb.name}</span>)}
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 py-20 md:py-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 -left-20 w-96 h-96 bg-white/5 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-white/5 rounded-full filter blur-3xl" />
        </div>
        <div className="container-pad relative z-10 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-6">
                <MapPin size={16} className="opacity-80" />
                <span className="text-sm font-semibold">Local SEO · Google Maps · Barsoi, Katihar District</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Rank Your Barsoi Business<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-cyan-400">#1 on Google Maps</span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">Barsoi sits on NH-31 between Katihar and Siliguri. Thousands of travellers pass through daily searching Google Maps for local services. Be visible.</p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-sky-500 to-cyan-600 text-white font-semibold rounded-xl shadow-xl transition-all hover:opacity-90">
                  Free Barsoi SEO Audit <ArrowRight size={18} />
                </Link>
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold">
                  <MessageCircle size={18} /> WhatsApp Us
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <Phone size={16} className="opacity-70" />
                <a href={contact.phoneHref} className="hover:text-white transition font-semibold">{contact.phone}</a>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">Free audit · No commitment</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[{ val: "Top 3", label: "Google Maps positions we target" }, { val: "Free", label: "Audit — no cost, no commitment" }, { val: "60–90", label: "Days avg. for ranking results" }, { val: "0 ₹", label: "Setup fee for free audit" }].map((s, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-5 text-center">
                  <div className="text-2xl font-bold text-white mb-1">{s.val}</div>
                  <div className="text-xs text-slate-300 leading-snug">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business types */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="container-pad">
          <p className="text-center text-sm text-slate-500 font-medium mb-4">We help these Barsoi businesses rank on Google:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {businessTypes.map((b, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700">
                <span>{b.emoji}</span>{b.type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="section bg-gradient-to-b from-white to-slate-50">
        <div className="container-pad max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold mb-5">
                🎯 The Barsoi SEO Opportunity
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">Why Barsoi Is the Right Time to Get on Google</h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>Barsoi is an important transit town on NH-31. Thousands of travellers pass through daily — searching for dhabas, hotels, pharmacies, garages. For local businesses, this is a dual opportunity: rank for residents and appear in searches from highway travellers. Very little SEO competition here means fast results.</p>
              </div>
              <div className="mt-6 space-y-3">
                {["Near-zero competition for most local search terms in Barsoi", "Growing smartphone usage — more people searching every month", "First-mover rankings in smaller markets hold for years", "Ranking here is faster and more affordable than any metro"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-cyan-600 text-white font-semibold rounded-xl hover:opacity-90 transition-all">
                  Get Free Audit <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: <Search size={20} />, label: "Google Search Visibility", desc: "Appear when Barsoi locals search for your service category" },
                { icon: <MapPin size={20} />, label: "Google Maps Top 3", desc: "The 3 businesses Google shows — you need to be there" },
                { icon: <Star size={20} />, label: "Review Authority", desc: "Reviews build trust before customers even visit you" },
                { icon: <BarChart3 size={20} />, label: "Real Monthly Data", desc: "Calls, views, impressions — tracked every month" },
              ].map((item, i) => (
                <div key={i} className="card card-pad flex items-center gap-4 group hover:border-slate-300 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 text-white grid place-items-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <div className="font-bold text-sm text-ink-900">{item.label}</div>
                    <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="section bg-white">
        <div className="container-pad max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <div className="badge bg-gradient-to-r from-sky-500 to-cyan-600 text-white ring-0 mb-4">Our Process</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">How We Rank Your Barsoi Business on Google</h2>
            <p className="text-slate-500">Clear, transparent process — no black-box tactics, no confusion.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-4">
            {processSteps.map((step, i) => (
              <div key={i} className="text-center">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-sky-500 to-cyan-600 text-white font-bold text-lg grid place-items-center mx-auto mb-4 shadow-lg">
                  {step.step}
                </div>
                <h3 className="font-bold text-sm text-ink-900 mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="section bg-slate-50">
        <div className="container-pad max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="badge bg-gradient-to-r from-sky-500 to-cyan-600 text-white ring-0 mb-4">Full Service</div>
            <h2 className="text-3xl font-bold">Everything Included for Barsoi Local SEO</h2>
            <p className="text-slate-500 mt-3">All done for you — you run your business, we handle your Google presence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {includes.map((item, i) => (
              <div key={i} className="card card-pad group hover:border-slate-300 transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-ink-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ranking Factors */}
      <section className="section bg-white">
        <div className="container-pad max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge bg-gradient-to-r from-sky-500 to-cyan-600 text-white ring-0 mb-5">100% White-Hat SEO</div>
              <h2 className="text-3xl font-bold mb-5">Why Our SEO Lasts — No Shortcuts, No Risks</h2>
              <div className="space-y-4">
                {[
                  { icon: <Shield size={18} />, title: "No Fake Reviews or Spam", desc: "We never use fake reviews, keyword stuffing, or tactics that could get your Google listing suspended. Every strategy follows Google&apos;s guidelines." },
                  { icon: <Clock size={18} />, title: "No Lock-In Contracts", desc: "Our clients stay because they see results — not because they&apos;re contractually trapped. Month-to-month, transparent pricing." },
                  { icon: <Users size={18} />, title: "Direct Communication", desc: "You speak directly with the person working on your account. WhatsApp or call anytime — no call centres." },
                  { icon: <TrendingUp size={18} />, title: "Based in Seemanchal Bihar", desc: "We&apos;re based in Baisi, Purnea — 5 minutes from your market. We know how people search in this region." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-sky-500 to-cyan-600 text-white grid place-items-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold text-sm text-ink-900 mb-0.5">{item.title}</div>
                      <div className="text-slate-500 text-sm leading-relaxed" dangerouslySetInnerHTML={{__html: item.desc}} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card card-pad">
              <h3 className="font-bold text-lg mb-5">Google Maps Ranking Factors We Optimise</h3>
              <div className="space-y-3">
                {[
                  { factor: "GBP Completeness & Accuracy", weight: "25%", color: "bg-indigo-500" },
                  { factor: "Review Quantity & Quality", weight: "20%", color: "bg-violet-500" },
                  { factor: "Citation Consistency", weight: "15%", color: "bg-emerald-500" },
                  { factor: "Distance from Searcher", weight: "15%", color: "bg-amber-500" },
                  { factor: "Relevance to Search Term", weight: "15%", color: "bg-pink-500" },
                  { factor: "Website & Content Signals", weight: "10%", color: "bg-blue-500" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-xs mb-1"><span className="font-medium text-ink-900">{item.factor}</span><span className="text-slate-500">{item.weight}</span></div>
                    <div className="h-1.5 bg-slate-100 rounded-full overflow-hidden"><div className={`h-full ${item.color} rounded-full`} style={{ width: item.weight }} /></div>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-slate-400">We optimise every one of these factors — not just one or two.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Areas covered */}
      <section className="section bg-slate-50">
        <div className="container-pad max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-2">Areas We Cover in & Around Barsoi</h2>
          <p className="text-slate-500 text-sm mb-6">We target customers searching across all parts of Barsoi and nearby areas.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-sky-50 text-sky-700 text-sm font-medium border border-sky-200">
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white">
        <div className="container-pad max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="badge bg-gradient-to-r from-sky-500 to-cyan-600 text-white ring-0 mb-4">FAQ</div>
            <h2 className="text-3xl font-bold">Questions from Barsoi Business Owners</h2>
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

      {/* Nearby cities */}
      <section className="section bg-slate-50">
        <div className="container-pad max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">We Also Serve Businesses Near Barsoi</h2>
          <p className="text-slate-500 text-sm mb-6">Part of our Seemanchal & North Bihar coverage area.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[{ name: "Katihar", href: "/services/local-seo/katihar" }, { name: "Purnea", href: "/services/local-seo/purnea" }, { name: "Kishanganj", href: "/services/local-seo/kishanganj" }, { name: "Barsoi", href: "/services/local-seo/barsoi" }, { name: "Baisi", href: "/services/local-seo/baisi" }, { name: "Dalkhola", href: "/services/local-seo/dalkhola" }, { name: "Siliguri", href: "/services/local-seo/siliguri" }].filter(c => c.name !== "Barsoi").map((city) => (
              <Link key={city.name} href={city.href} className="px-5 py-2 rounded-full border border-sky-200 text-sky-700 text-sm font-medium hover:bg-sky-50 transition-all">
                Local SEO {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 text-white">
        <div className="container-pad text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Rank #1 on Google Maps in Barsoi?</h2>
          <p className="text-slate-300 mb-3 text-lg">Free audit. No pressure. Results in 60–90 days.</p>
          <p className="text-white font-bold text-xl mb-8">📞 {contact.phone}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all">
              <MessageCircle size={18} /> WhatsApp Free Audit
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all">
              Contact Form <ArrowRight size={18} />
            </Link>
            <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold">
              <Phone size={16} /> {contact.phone}
            </a>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span>✓ 100% White-Hat SEO</span>
            <span>✓ No lock-in contracts</span>
            <span>✓ Free audit — no commitment</span>
            <span>✓ Based in Bihar</span>
          </div>
        </div>
      </section>
    </>
  );
}
