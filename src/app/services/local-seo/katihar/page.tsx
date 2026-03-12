import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, Phone, ArrowRight, MessageCircle, Star, Search, TrendingUp, Shield, Clock, Zap, Users, BarChart3 } from "lucide-react";
import { contact } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Local SEO in Katihar | Google Maps Ranking & Digital Marketing — Searchmetric",
  description: "Rank your Katihar business #1 on Google Maps. Searchmetric provides complete local SEO, Google Business Profile setup, social media marketing, and lead generation for Katihar businesses. Free audit — call +91 90801 35567.",
  keywords: "local SEO Katihar, SEO agency Katihar, digital marketing Katihar, Google Maps ranking Katihar, Google Business Profile Katihar, GBP optimization Katihar, SEO company Katihar Bihar, Instagram marketing Katihar, Facebook ads Katihar, lead generation Katihar, best digital marketing agency Katihar, Seemanchal SEO, Katihar me digital marketing, near me SEO Katihar, Google My Business Katihar",
  alternates: { canonical: "/services/local-seo/katihar" },
  openGraph: {
    title: "Local SEO in Katihar | Google Maps Ranking — Searchmetric",
    description: "Get your Katihar business to the top of Google Maps. Free audit available. Call +91 90801 35567.",
    url: "https://searchmetric.in/services/local-seo/katihar",
    siteName: "Searchmetric",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO in Katihar — Searchmetric",
    description: "Rank #1 on Google Maps in Katihar. Free SEO audit — no commitment.",
  },
};

// ── Per-page Structured Data ──────────────────────────────
const citySchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://searchmetric.in/services/local-seo/katihar",
  "name": "Searchmetric — Local SEO Agency Katihar",
  "description": "Local SEO and digital marketing agency serving Katihar, Bihar. We help businesses rank on Google Maps and get more customers online.",
  "url": "https://searchmetric.in/services/local-seo/katihar",
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
  "areaServed": { "@type": "City", "name": "Katihar", "sameAs": "https://en.wikipedia.org/wiki/Katihar" },
  "serviceType": ["Local SEO", "Google Business Profile Optimization", "Google Maps Ranking", "Social Media Marketing"],
  "priceRange": "₹₹",
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "How much does local SEO cost in Katihar?", "acceptedAnswer": { "@type": "Answer", "text": "Our local SEO plans for Katihar businesses start from ₹3,000/month depending on your business type and goals. We always start with a free audit so you know exactly what you're paying for. Contact us on +91 90801 35567." } },
    { "@type": "Question", "name": "How long does it take to rank on Google Maps in Katihar?", "acceptedAnswer": { "@type": "Answer", "text": "Most Katihar businesses we work with start seeing improved Google Maps visibility within 4–6 weeks. Full top-3 ranking typically happens within 60–90 days for most business categories." } },
    { "@type": "Question", "name": "Does my business need a website for local SEO in Katihar?", "acceptedAnswer": { "@type": "Answer", "text": "No. A well-optimised Google Business Profile can rank you on Google Maps without a website. We can help you get found even if you only have a phone number and a business address." } },
    { "@type": "Question", "name": "Which types of businesses benefit most from local SEO in Katihar?", "acceptedAnswer": { "@type": "Answer", "text": "Any business that serves local customers benefits — clinics, coaching institutes, shops, restaurants, hotels, garages, salons, real estate agents, grocery stores, and more. If someone could search for you on Google, we can help them find you." } },
    { "@type": "Question", "name": "What is Google Business Profile and why does it matter in Katihar?", "acceptedAnswer": { "@type": "Answer", "text": "Google Business Profile (formerly Google My Business) is your free business listing that appears in Google Maps and local search results. In Katihar, 90%+ of businesses haven't optimised theirs — which means if you do, you can rank at the top quickly." } },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://searchmetric.in" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://searchmetric.in/services" },
    { "@type": "ListItem", "position": 3, "name": "Local SEO", "item": "https://searchmetric.in/services/local-seo" },
    { "@type": "ListItem", "position": 4, "name": "Katihar", "item": "https://searchmetric.in/services/local-seo/katihar" },
  ],
};

const businessTypes = [
  { emoji: "🏥", type: "Clinics & Hospitals" },
  { emoji: "📚", type: "Coaching & Schools" },
  { emoji: "🏪", type: "Shops & Showrooms" },
  { emoji: "🍽️", type: "Restaurants & Dhabas" },
  { emoji: "🏨", type: "Hotels & Lodges" },
  { emoji: "🔧", type: "Garages & Repair" },
  { emoji: "💇", type: "Salons & Beauty" },
  { emoji: "🏗️", type: "Real Estate" },
];

const stats = [
  { val: "90%+", label: "Katihar businesses not on Google Maps" },
  { val: "Top 3", label: "Google Maps positions we target" },
  { val: "60–90", label: "Days avg. to see ranking results" },
  { val: "Free", label: "Audit — no commitment needed" },
];

const faqs = [
  { q: "How much does local SEO cost in Katihar?", a: "Our local SEO plans start from ₹3,000/month depending on your business and goals. We always start with a free audit so you know exactly what you're paying for before committing." },
  { q: "How long to rank on Google Maps in Katihar?", a: "Most Katihar businesses see improved Google Maps visibility within 4–6 weeks. Full top-3 ranking typically comes in 60–90 days for most categories." },
  { q: "Does my business need a website?", a: "No. A well-optimised Google Business Profile alone can rank you on Google Maps. We can get you found even with just a phone number and address." },
  { q: "Which businesses benefit most from local SEO in Katihar?", a: "Any business serving local customers — clinics, coaching centres, shops, restaurants, hotels, garages, salons, real estate agents, grocery stores, and more." },
  { q: "What is Google Business Profile and why does it matter?", a: "GBP (formerly Google My Business) is your free listing that appears in Google Maps and local search. In Katihar, 90%+ of businesses haven't optimised theirs — so doing it well puts you at the top fast." },
  { q: "Can you help if I have no online presence at all?", a: "Yes — in fact, starting fresh is sometimes easier. We handle everything from scratch: GBP creation, keyword setup, photos, reviews strategy, citation building, and monthly reporting." },
];

const process = [
  { step: "01", title: "Free Audit", desc: "We audit your current Google presence, check your competitors in Katihar, and identify the fastest opportunities. Zero cost, zero commitment." },
  { step: "02", title: "Strategy & Setup", desc: "We optimise your Google Business Profile with the right categories, description, photos, service areas, and keywords for Katihar." },
  { step: "03", title: "Citations & Authority", desc: "We list your business on 30+ directories — Justdial, Sulekha, IndiaMart, and more — with perfectly consistent info to build Google trust." },
  { step: "04", title: "Reviews & Content", desc: "We set up a simple review collection system and publish regular Google Posts to keep your profile active and climbing in rank." },
  { step: "05", title: "Track & Report", desc: "Monthly report in plain language — profile views, search impressions, calls, direction requests, keyword positions. You always know your results." },
];

const includes = [
  { icon: "📍", title: "Google Business Profile Full Setup", desc: "Complete GBP creation or deep optimisation — right primary & secondary categories, keyword-rich description, service areas, products, attributes." },
  { icon: "🔑", title: "Katihar Keyword Research", desc: "We find exactly what Katihar customers type into Google — 'coaching near me', 'best doctor in Katihar', 'hotel near Katihar station' — and target those phrases." },
  { icon: "📋", title: "30+ Directory Citations", desc: "Justdial, Sulekha, IndiaMart, Just Dial, Bing Places, Apple Maps, and local Bihar directories. Consistent NAP (Name, Address, Phone) everywhere." },
  { icon: "⭐", title: "Review Generation System", desc: "A simple, WhatsApp-friendly system to collect real Google reviews from your happy customers without being pushy or spammy." },
  { icon: "📸", title: "Photos, Posts & Q&A", desc: "Real business photos, Google Posts published regularly, and Q&A section managed — all signals Google uses to rank your profile higher." },
  { icon: "📊", title: "Monthly Performance Report", desc: "Transparent report every month — how many times your profile was seen, how many calls came from Google, which keywords you rank for." },
];

const nearbyAreas = [
  "Katihar City", "Amdabad", "Kadwa", "Manihari", "Barari", "Barsoi", "Sameli", "Azamnagar"
];

export default function KatiharLocalSEOPage() {
  return (
    <>
      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(citySchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      {/* Breadcrumb nav */}
      <nav className="bg-slate-50 border-b border-slate-100 py-2" aria-label="Breadcrumb">
        <div className="container-pad">
          <ol className="flex flex-wrap items-center gap-1 text-xs text-slate-500" itemScope itemType="https://schema.org/BreadcrumbList">
            {[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }, { name: "Local SEO", href: "/services/local-seo" }, { name: "Katihar", href: "/services/local-seo/katihar" }].map((crumb, i, arr) => (
              <li key={i} itemProp="itemListElement" itemScope itemType="https://schema.org/ListItem" className="flex items-center gap-1">
                {i < arr.length - 1 ? (
                  <><Link href={crumb.href} itemProp="item" className="hover:text-brand-600 transition"><span itemProp="name">{crumb.name}</span></Link><span>/</span></>
                ) : (
                  <span itemProp="name" className="text-brand-600 font-medium">{crumb.name}</span>
                )}
                <meta itemProp="position" content={String(i + 1)} />
              </li>
            ))}
          </ol>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
        </div>
        <div className="container-pad relative z-10 max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-6">
                <MapPin size={16} className="text-indigo-400" />
                <span className="text-sm font-semibold">Local SEO · Google Maps · Katihar, Bihar</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">
                Rank Your Katihar Business<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                  #1 on Google Maps
                </span>
              </h1>
              <p className="text-lg text-slate-300 mb-8 leading-relaxed">
                When someone in Katihar searches for your service, you need to be in the top 3 on Google Maps. Searchmetric makes that happen — with honest, white-hat local SEO that delivers real results.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-8">
                <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-7 py-4 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-indigo-500/40 transition-all">
                  Get Free Katihar SEO Audit <ArrowRight size={18} />
                </Link>
                <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold">
                  <MessageCircle size={18} /> WhatsApp Us
                </a>
              </div>
              <div className="flex items-center gap-3 text-slate-300 text-sm">
                <Phone size={16} className="text-indigo-400" />
                <a href={contact.phoneHref} className="hover:text-white transition font-semibold">{contact.phone}</a>
                <span className="text-slate-500">·</span>
                <span className="text-slate-400">Free audit · No commitment</span>
              </div>
            </div>
            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
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
          <p className="text-center text-sm text-slate-500 font-medium mb-4">We help these Katihar businesses rank on Google:</p>
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold mb-5">
                🎯 The Katihar SEO Opportunity
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Katihar&apos;s Google Maps Is Almost Empty —{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600">
                  Here&apos;s Your Advantage
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
                <p>Katihar is a major railway junction city with a growing population of students, professionals, and families who use Google every day to find local services. The problem? Most local businesses have no optimised digital presence.</p>
                <p>This is a first-mover market. In Katihar right now, if you rank in the top 3 on Google Maps for your service, you will dominate that position for years — and every new competitor will struggle to displace you.</p>
                <p>Unlike Delhi or Mumbai where hundreds of businesses compete for every keyword, in Katihar you&apos;re often competing with 5–10 businesses, most of whom have incomplete or zero online presence. Ranking is faster and more affordable here than anywhere else in India.</p>
              </div>
              <div className="mt-6 space-y-3">
                {["Near-zero competition for most local search terms", "Growing smartphone usage — more searches every month", "Railway junction city attracts visitors searching for services", "First-mover rankings hold for years in smaller markets"].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              {[
                { icon: <Search size={20} />, label: "Google Search", desc: "Appear when Katihar locals search for your service", color: "from-indigo-500 to-violet-600" },
                { icon: <MapPin size={20} />, label: "Google Maps Top 3", desc: "The 3 businesses Google shows — you want to be there", color: "from-emerald-500 to-teal-600" },
                { icon: <Star size={20} />, label: "Reviews & Trust", desc: "Reviews show before customers ever visit you", color: "from-amber-500 to-orange-600" },
                { icon: <BarChart3 size={20} />, label: "Real Monthly Data", desc: "Calls, views, impressions — tracked and reported", color: "from-pink-500 to-rose-600" },
              ].map((item, i) => (
                <div key={i} className="card card-pad flex items-center gap-4 group hover:border-indigo-200 transition-all">
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} text-white grid place-items-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
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
            <div className="badge bg-gradient-to-r from-indigo-500 to-violet-600 text-white ring-0 mb-4">Our Process</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">How We Rank Your Katihar Business on Google</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">A transparent, step-by-step process — no black-box tactics, no confusion.</p>
          </div>
          <div className="grid md:grid-cols-5 gap-0 relative">
            {process.map((step, i) => (
              <div key={i} className="text-center px-2 relative">
                <div className="h-14 w-14 rounded-full bg-gradient-to-br from-indigo-500 to-violet-600 text-white font-bold text-lg grid place-items-center mx-auto mb-4 shadow-lg">
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
            <div className="badge bg-gradient-to-r from-indigo-500 to-violet-600 text-white ring-0 mb-4">Full Service</div>
            <h2 className="text-3xl font-bold">Everything Included for Katihar Local SEO</h2>
            <p className="text-slate-500 mt-3">All done for you. You run your business — we handle your Google presence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {includes.map((item, i) => (
              <div key={i} className="card card-pad group hover:border-indigo-200 transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-ink-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Areas we cover in Katihar */}
      <section className="section bg-white">
        <div className="container-pad max-w-5xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold mb-2">Areas We Cover in & Around Katihar</h2>
            <p className="text-slate-500 text-sm">We target customers searching across all parts of Katihar and neighbouring areas.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {nearbyAreas.map((area) => (
              <span key={area} className="px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium border border-indigo-100">
                📍 {area}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="section bg-gradient-to-br from-indigo-50 to-violet-50">
        <div className="container-pad max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="badge bg-gradient-to-r from-indigo-500 to-violet-600 text-white ring-0 mb-5">Why Searchmetric</div>
              <h2 className="text-3xl font-bold mb-6">Why Katihar Businesses Choose Searchmetric</h2>
              <div className="space-y-5">
                {[
                  { icon: <Shield size={20} />, title: "100% White-Hat Methods Only", desc: "We never use fake reviews, spam tactics, or black-hat tricks that could get your Google listing suspended. Every strategy we use follows Google's guidelines — your rankings last.", color: "from-indigo-500 to-violet-600" },
                  { icon: <MapPin size={20} />, title: "We Know Katihar & Seemanchal", desc: "We're based in Baisi, Purnea. We understand the Katihar market, the local customer behaviour, and what keywords people actually search for in this region.", color: "from-emerald-500 to-teal-600" },
                  { icon: <Clock size={20} />, title: "No Lock-In Contracts", desc: "We don't trap you in 12-month contracts. Our clients stay because they see results, not because they're contractually obligated to.", color: "from-amber-500 to-orange-600" },
                  { icon: <Users size={20} />, title: "Direct Communication", desc: "You speak directly with the person working on your account — no call centres, no account managers. WhatsApp or call us anytime.", color: "from-pink-500 to-rose-600" },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${item.color} text-white grid place-items-center flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="font-bold text-ink-900 text-sm mb-1">{item.title}</div>
                      <div className="text-slate-500 text-sm leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card card-pad bg-white">
              <h3 className="font-bold text-lg mb-5">What Makes a Business Rank on Google Maps?</h3>
              <div className="space-y-4">
                {[
                  { factor: "Google Business Profile Completeness", weight: "25%", color: "bg-indigo-500" },
                  { factor: "Review Quantity & Quality", weight: "20%", color: "bg-violet-500" },
                  { factor: "Local Citations & NAP Consistency", weight: "15%", color: "bg-emerald-500" },
                  { factor: "Distance from Searcher", weight: "15%", color: "bg-amber-500" },
                  { factor: "Relevance to Search Query", weight: "15%", color: "bg-pink-500" },
                  { factor: "Website SEO & Content Signals", weight: "10%", color: "bg-blue-500" },
                ].map((item, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="font-medium text-ink-900">{item.factor}</span>
                      <span className="text-slate-500 font-semibold">{item.weight}</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                      <div className={`h-full ${item.color} rounded-full`} style={{ width: item.weight }} />
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-5 text-xs text-slate-400">We optimise for every one of these ranking factors — not just one.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-slate-50">
        <div className="container-pad max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="badge bg-gradient-to-r from-indigo-500 to-violet-600 text-white ring-0 mb-4">FAQ</div>
            <h2 className="text-3xl font-bold">Questions from Katihar Business Owners</h2>
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
      <section className="section bg-white">
        <div className="container-pad max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">We Also Serve Businesses Near Katihar</h2>
          <p className="text-slate-500 text-sm mb-6">Katihar is our primary anchor city. We serve all of Seemanchal Bihar.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[{ name: "Purnea", href: "/services/local-seo/purnea" }, { name: "Kishanganj", href: "/services/local-seo/kishanganj" }, { name: "Barsoi", href: "/services/local-seo/barsoi" }, { name: "Baisi", href: "/services/local-seo/baisi" }, { name: "Dalkhola", href: "/services/local-seo/dalkhola" }, { name: "Siliguri", href: "/services/local-seo/siliguri" }].map((city) => (
              <Link key={city.name} href={city.href} className="px-5 py-2 rounded-full border border-indigo-200 text-indigo-700 text-sm font-medium hover:bg-indigo-50 transition-all">
                Local SEO {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-indigo-900 to-slate-900 text-white">
        <div className="container-pad text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Rank #1 on Google Maps in Katihar?</h2>
          <p className="text-slate-300 mb-3 text-lg">Free audit. No pressure. Results in 60–90 days.</p>
          <p className="text-indigo-300 font-bold text-xl mb-8">📞 {contact.phone}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl transition-all">
              <MessageCircle size={18} /> WhatsApp Free Audit
            </a>
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all">
              Fill Contact Form <ArrowRight size={18} />
            </Link>
          </div>
          <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span>✓ 100% White-Hat SEO</span>
            <span>✓ No lock-in contracts</span>
            <span>✓ Free audit — no commitment</span>
            <span>✓ Based in Seemanchal Bihar</span>
          </div>
        </div>
      </section>
    </>
  );
}
