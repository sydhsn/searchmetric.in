import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin, CheckCircle, Phone, ArrowRight,
  MessageCircle, Star, Search, TrendingUp, Shield, Zap
} from "lucide-react";
import { contact } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Local SEO & Digital Marketing in Siliguri | Google Maps Ranking — Searchmetric",
  description:
    "Get your Siliguri business ranked #1 on Google Maps. Searchmetric provides local SEO, Google Business Profile setup, social media marketing, and lead ads for Siliguri businesses. Free audit available — call +91 90801 35567.",
  keywords: [
    "local SEO Siliguri",
    "SEO agency Siliguri",
    "digital marketing Siliguri",
    "Google Maps ranking Siliguri",
    "Google Business Profile Siliguri",
    "SEO company Siliguri West Bengal",
    "digital marketing agency Siliguri",
    "social media marketing Siliguri",
    "Instagram marketing Siliguri",
    "Facebook ads Siliguri",
    "lead generation Siliguri",
    "local SEO Darjeeling district",
    "SEO near Siliguri",
    "GBP optimization Siliguri",
    "Google My Business Siliguri",
    "affordable SEO Siliguri",
    "best digital marketing Siliguri",
    "Seemanchal SEO agency Siliguri",
  ].join(", "),
  alternates: { canonical: "/services/local-seo/siliguri" },
  openGraph: {
    title: "Local SEO & Digital Marketing in Siliguri — Searchmetric",
    description:
      "Rank #1 on Google Maps in Siliguri. Searchmetric handles local SEO, GBP optimisation, social media, and lead ads for Siliguri businesses. Free audit at +91 90801 35567.",
    url: "https://searchmetric.in/services/local-seo/siliguri",
    siteName: "Searchmetric",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Local SEO in Siliguri — Searchmetric",
    description: "Get your Siliguri business found on Google Maps. Free SEO audit available.",
  },
};

const businessTypes = [
  { emoji: "🏪", type: "Retail Shops & Showrooms" },
  { emoji: "🏥", type: "Clinics & Hospitals" },
  { emoji: "🍽️", type: "Restaurants & Cafes" },
  { emoji: "🏨", type: "Hotels & Guest Houses" },
  { emoji: "📚", type: "Coaching & Schools" },
  { emoji: "🚘", type: "Auto & Car Dealerships" },
  { emoji: "💇", type: "Salons & Beauty Parlours" },
  { emoji: "🏗️", type: "Real Estate & Builders" },
  { emoji: "🍵", type: "Tea Businesses & Estates" },
  { emoji: "💼", type: "Professionals & Services" },
];

const faqs = [
  {
    q: "Does local SEO work for businesses in Siliguri?",
    a: "Yes — Siliguri is a major commercial hub connecting Bihar, Bengal, and Northeast India, and Google search usage is very high here. Local SEO can get your business to the top of Google Maps within 2–3 months, directly bringing more calls and footfall.",
  },
  {
    q: "My business is in Siliguri but I serve customers from Katihar and Bihar too — can SEO help?",
    a: "Absolutely. We can set up your Google Business Profile to target multiple service areas — Siliguri, Darjeeling district, Katihar, and surrounding Seemanchal regions. This is especially powerful for businesses that get cross-border customers.",
  },
  {
    q: "How is local SEO different from regular website SEO?",
    a: "Local SEO focuses on ranking your business on Google Maps and local search results — so people near you find you when they search 'near me' or by city name. It doesn't require a complex website. Even a well-optimised Google Business Profile alone can drive significant calls.",
  },
  {
    q: "How quickly can I start getting calls from Google in Siliguri?",
    a: "For a well-optimised GBP in Siliguri, many clients start seeing increased visibility within 4–6 weeks. Full Google Maps ranking results typically come in 60–90 days.",
  },
  {
    q: "What do you charge for local SEO in Siliguri?",
    a: "We have affordable monthly plans designed for small and medium businesses. Contact us for a free audit first — we'll show you exactly what's needed and then give you a transparent quote with no hidden charges.",
  },
];

const whyItems = [
  {
    icon: <Search size={22} />,
    title: "Siliguri Is a High-Search City",
    desc: "Siliguri has one of the highest rates of 'near me' Google searches in the Northeast region. Competition on Google Maps exists, but winning the top 3 is still very achievable with the right strategy.",
    color: "from-indigo-500 to-violet-600",
  },
  {
    icon: <MapPin size={22} />,
    title: "Junction City = Multiple Markets",
    desc: "Siliguri connects Bihar, West Bengal, and Northeast India. Your Google presence can attract customers from Darjeeling, Jalpaiguri, Katihar, and beyond — all from one optimised profile.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: <TrendingUp size={22} />,
    title: "Tourism & Trade Drive Search",
    desc: "Heavy tourist traffic, trade routes, and a booming retail economy mean people are constantly searching for local services on Google. Being in the top 3 is the difference between getting that call or not.",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: <Shield size={22} />,
    title: "We Understand Cross-Border Markets",
    desc: "Searchmetric serves Seemanchal Bihar and the Northeast corridor. We understand how businesses in Siliguri attract customers from both sides of the border — and we tailor your SEO accordingly.",
    color: "from-pink-500 to-rose-600",
  },
];

const includesItems = [
  { icon: "📍", title: "Google Business Profile Setup", desc: "Full creation or deep optimisation — categories, description, photos, hours, Q&A, attributes, and service areas." },
  { icon: "🔑", title: "Siliguri Local Keyword Research", desc: "We find the exact terms Siliguri customers search — in English and Bengali — and target those strategically." },
  { icon: "📋", title: "Citation Building — 30+ Directories", desc: "Justdial, Sulekha, IndiaMart, JD, and local Bengal/Bihar directories with perfectly consistent NAP info." },
  { icon: "⭐", title: "Review Generation & Management", desc: "Simple system to collect genuine Google reviews from your happy customers — builds trust and ranking." },
  { icon: "📸", title: "Photos, Posts & Q&A", desc: "Regular Google Posts and real business photos to keep your profile active, trusted, and ranked higher." },
  { icon: "📊", title: "Monthly Performance Report", desc: "Clear monthly report — profile views, search impressions, calls, direction requests, keyword positions. No jargon." },
];

export default function SiliguriLocalSEOPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-teal-900 to-slate-900 py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
        </div>
        <div className="container-pad relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-6">
            <MapPin size={16} className="text-teal-400" />
            <span className="text-sm font-semibold">Local SEO · Digital Marketing · Siliguri, West Bengal</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Rank Your Siliguri Business<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400">
              #1 on Google Maps
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Siliguri is a gateway city with massive Google search traffic. When customers search for businesses like yours — make sure you&apos;re the first name they see, not your competitor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-teal-500/40 transition-all"
            >
              Get Free Siliguri SEO Audit <ArrowRight size={18} />
            </Link>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold"
            >
              <MessageCircle size={18} /> WhatsApp Free Audit
            </a>
          </div>
          {/* Stats strip */}
          <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { val: "48 hrs", label: "Audit Delivered" },
              { val: "Free", label: "No Cost Audit" },
              { val: "60–90 days", label: "Avg. Results" },
            ].map((s, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
                <div className="text-xl font-bold text-white">{s.val}</div>
                <div className="text-xs text-slate-300 mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Business types */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="container-pad">
          <p className="text-center text-sm text-slate-500 font-medium mb-5">
            We help these types of Siliguri businesses rank higher on Google:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {businessTypes.map((b, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700">
                <span>{b.emoji}</span>{b.type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Siliguri */}
      <section className="section bg-gradient-to-b from-white to-slate-50">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-teal-500 to-emerald-600 text-white ring-0 mb-4">Siliguri's SEO Opportunity</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Siliguri Businesses Must be on{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
                Google Maps Now
              </span>
            </h2>
            <p className="text-slate-500 text-lg">Siliguri's unique geography creates a market that no other city in India replicates.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {whyItems.map((item, i) => (
              <div key={i} className="card card-pad flex gap-4 items-start group hover:border-teal-200 transition-all">
                <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.color} text-white grid place-items-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-ink-900 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-5xl mx-auto">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold mb-5">
                🔍 The Real Problem
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Most Siliguri Businesses Are Invisible on Google Maps —{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-500 to-emerald-600">
                  Are You One of Them?
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm">
                <p>
                  When someone in Siliguri searches &quot;best hotel near me&quot; or &quot;dentist in Siliguri&quot; — they click one of the first 3 results on Google Maps. Businesses outside that top 3 are practically invisible.
                </p>
                <p>
                  The good news is that a large percentage of Siliguri businesses have poorly optimised or completely missing Google Business Profiles. This means there&apos;s still an opening to rank in the top 3 for most categories — if you act now.
                </p>
                <p>
                  Searchmetric sets up, optimises, and manages your complete local SEO presence — so you rank higher, get more calls, and grow your business consistently.
                </p>
              </div>
              <div className="mt-7 space-y-3">
                {[
                  "Show up in the Google Maps top 3 for your services",
                  "Get more calls directly from Google Search",
                  "Build trust with reviews before customers even visit",
                  "Appear in 'near me' searches across Siliguri & district",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-teal-500 to-emerald-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  Start — Free Audit <ArrowRight size={18} />
                </Link>
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-slate-200 text-slate-700 hover:border-teal-300 transition-all font-semibold text-sm"
                >
                  <Phone size={16} /> {contact.phone}
                </a>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Search size={24} />, label: "Google Search Visibility", desc: "Appear when Siliguri locals search" },
                { icon: <MapPin size={24} />, label: "Google Maps Top 3", desc: "Above your direct competitors" },
                { icon: <Star size={24} />, label: "Review Management", desc: "Build credibility with new customers" },
                { icon: <Zap size={24} />, label: "Quick Wins First", desc: "Fastest improvements implemented first" },
              ].map((item, i) => (
                <div key={i} className="card card-pad text-center group hover:border-teal-200 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-teal-500 to-emerald-600 text-white grid place-items-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="font-semibold text-sm text-ink-900 mb-1">{item.label}</div>
                  <div className="text-xs text-slate-500">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="section bg-slate-50">
        <div className="container-pad max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <div className="badge bg-gradient-to-r from-teal-500 to-emerald-600 text-white ring-0 mb-4">Complete Service</div>
            <h2 className="text-3xl font-bold">Everything Included for Siliguri Local SEO</h2>
            <p className="text-slate-500 mt-3">We handle every part — you just focus on running your business.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {includesItems.map((item, i) => (
              <div key={i} className="card card-pad group hover:border-teal-200 transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-ink-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities crosslinks */}
      <section className="section bg-white">
        <div className="container-pad max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">We Also Serve Businesses Near Siliguri</h2>
          <p className="text-slate-500 text-sm mb-6">Siliguri is part of our wider Seemanchal & North Bengal SEO coverage.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Katihar", href: "/services/local-seo/katihar" },
              { name: "Purnea", href: "/services/local-seo/purnea" },
              { name: "Kishanganj", href: "/services/local-seo/kishanganj" },
              { name: "Dalkhola", href: "/services/local-seo/dalkhola" },
              { name: "Barsoi", href: "/services/local-seo/barsoi" },
              { name: "Baisi", href: "/services/local-seo/baisi" },
            ].map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="px-5 py-2 rounded-full border border-teal-200 text-teal-700 text-sm font-medium hover:bg-teal-50 transition-all"
              >
                Local SEO {city.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-slate-50">
        <div className="container-pad max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="badge bg-gradient-to-r from-teal-500 to-emerald-600 text-white ring-0 mb-4">FAQ</div>
            <h2 className="text-3xl font-bold">Questions from Siliguri Business Owners</h2>
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

      {/* Final CTA */}
      <section className="section bg-gradient-to-br from-teal-900 to-slate-900 text-white">
        <div className="container-pad text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Rank #1 on Google Maps in Siliguri?
          </h2>
          <p className="text-slate-300 mb-3 text-lg">
            Free audit. No pressure. We&apos;ll show you exactly where your business stands on Google and what we can do to improve it.
          </p>
          <p className="text-teal-300 font-semibold text-xl mb-8">
            📞 Call or WhatsApp: +91 90801 35567
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-xl transition-all"
            >
              <MessageCircle size={18} /> WhatsApp Free Audit
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all"
            >
              Fill Contact Form <ArrowRight size={18} />
            </Link>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold"
            >
              <Phone size={16} /> {contact.phone}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span>✓ Free audit — no commitment</span>
            <span>✓ No long-term contract</span>
            <span>✓ Results in 60–90 days</span>
            <span>✓ Plain language reports</span>
          </div>
        </div>
      </section>
    </>
  );
}
