import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, Phone, ArrowRight, MessageCircle, Star, Search, TrendingUp } from "lucide-react";
import { contact } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Local SEO Services in Baisi | Google Maps Ranking — Searchmetric",
  description:
    "Get your Baisi business found on Google Maps. Searchmetric provides local SEO and Google Business Profile setup for businesses in Baisi, Purnea district, Bihar. Free audit available.",
  keywords: "local SEO Baisi, Google Maps ranking Baisi, digital marketing Baisi, SEO Baisi Purnea district, Google Business Profile Baisi Bihar, digital marketing Seemanchal",
  alternates: { canonical: "/services/local-seo/baisi" },
};

const businessTypes = [
  { emoji: "🏪", type: "Shops & Stores" },
  { emoji: "🏥", type: "Clinics & Health" },
  { emoji: "📚", type: "Schools & Coaching" },
  { emoji: "🍽️", type: "Restaurants & Dhabas" },
  { emoji: "🏨", type: "Hotels & Lodges" },
  { emoji: "🌾", type: "Agriculture & Supply" },
  { emoji: "🔧", type: "Repair & Services" },
  { emoji: "💼", type: "Local Professionals" },
];

const faqs = [
  {
    q: "Is local SEO useful for a small town like Baisi?",
    a: "Absolutely — and actually, small towns benefit the most. In Baisi, almost no business has optimised their Google presence, which means ranking at the top of Google Maps is achievable very quickly with very little competition. You get results faster here than in any big city.",
  },
  {
    q: "What will my Google Business Profile look like after you optimise it?",
    a: "Your profile will have the correct business category, full address, working hours, phone number, photos, a strong business description with local keywords, and regular posts. Customers searching for your type of business in Baisi will see a complete, trustworthy profile.",
  },
  {
    q: "How much does it cost?",
    a: "We have flexible, affordable plans for small businesses. Contact us and we'll give you a clear quote with no hidden charges. We believe in transparent pricing — you'll always know exactly what you're paying for.",
  },
  {
    q: "Will I need to do anything myself?",
    a: "Very little. We handle the setup, optimisation, and monthly reporting. You just need to share your business details with us initially, and then optionally share photos of your shop, products, or services.",
  },
];

export default function BaisiLocalSEOPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-violet-900 to-slate-900 py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
        </div>
        <div className="container-pad relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-6">
            <MapPin size={16} className="text-violet-400" />
            <span className="text-sm font-semibold">Local SEO · Baisi, Purnea District</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get Your Baisi Business<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-purple-400">
              Ranking on Google
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Baisi is a growing commercial centre in Purnea district. When your customers search Google for businesses nearby, make sure your name comes up first.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-violet-500/40 transition-all"
            >
              Get Free Baisi SEO Audit <ArrowRight size={18} />
            </Link>
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold"
            >
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Business types */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="container-pad">
          <p className="text-center text-sm text-slate-500 font-medium mb-5">
            We help Baisi businesses across these industries rank on Google:
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {businessTypes.map((b, i) => (
              <div
                key={i}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700"
              >
                <span>{b.emoji}</span>{b.type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Baisi — opportunity section */}
      <section className="section bg-gradient-to-b from-white to-slate-50">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-50 text-violet-700 text-sm font-semibold mb-5">
                📍 Why Baisi is a Big SEO Opportunity
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Be the First Business in Baisi to Own{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-500 to-purple-600">
                  Google Search
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Baisi is an important commercial block in Purnea district with a growing number of daily shoppers, students, and working professionals. These people are increasingly turning to Google to find local services — and right now, most Baisi businesses don't appear at all.
                </p>
                <p>
                  This is the opportunity window. If your business shows up when someone in Baisi searches "shop near me" or "clinic Baisi" — they call <strong>you</strong>. That means more footfall, more calls, more business.
                </p>
                <p>
                  The best part: because competition here is almost zero, ranking on Google Maps in Baisi is much faster and more affordable than in any metro city. You can be at the top within weeks.
                </p>
              </div>
              <div className="mt-7 space-y-3">
                {[
                  "Zero competition on Google Maps in Baisi right now",
                  "Growing smartphone and internet usage in the area",
                  "Customers actively searching for local services",
                  "Fast ranking results — smaller city, easier to win",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-500 to-purple-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all"
                >
                  Start With a Free Audit <ArrowRight size={18} />
                </Link>
              </div>
            </div>

            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Search size={24} />, label: "Google Search", desc: "Appear when Baisi locals search" },
                { icon: <MapPin size={24} />, label: "Maps Top 3", desc: "Above your competitors" },
                { icon: <Star size={24} />, label: "Reviews", desc: "Build trust with new customers" },
                { icon: <TrendingUp size={24} />, label: "Monthly Reports", desc: "Track your real growth" },
              ].map((item, i) => (
                <div key={i} className="card card-pad text-center group hover:border-violet-200 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600 text-white grid place-items-center mx-auto mb-3 group-hover:scale-110 transition-transform">
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
        <div className="container-pad max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="badge bg-gradient-to-r from-violet-500 to-purple-600 text-white ring-0 mb-4">What We Do</div>
            <h2 className="text-3xl font-bold">Complete Local SEO for Your Baisi Business</h2>
            <p className="text-slate-600 mt-3">Everything handled. You focus on running your business.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { icon: "📍", title: "Google Business Profile Setup", desc: "Full GBP creation or optimisation — right categories, description, photos, and hours." },
              { icon: "🔑", title: "Local Keyword Research", desc: "We find what Baisi customers search for and make sure you rank for those exact words." },
              { icon: "📋", title: "Citation Building", desc: "Justdial, Sulekha, IndiaMart and 30+ directories — consistent info builds Google trust." },
              { icon: "⭐", title: "Review Collection Strategy", desc: "Simple system to collect genuine reviews from your happy customers to build credibility." },
              { icon: "📸", title: "Photos & Regular Posts", desc: "Business photos and Google Posts to keep your profile active and relevant." },
              { icon: "📊", title: "Monthly Report", desc: "Clear monthly report: views, calls, direction requests, keyword rankings — no jargon." },
            ].map((item, i) => (
              <div key={i} className="card card-pad flex gap-4 items-start hover:border-violet-200 transition-all">
                <div className="text-2xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-ink-900 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nearby cities we also serve */}
      <section className="section bg-white">
        <div className="container-pad max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">We Also Serve Nearby Cities</h2>
          <p className="text-slate-500 mb-6 text-sm">Baisi is part of our wider Seemanchal coverage area.</p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              { name: "Katihar", href: "/services/local-seo/katihar" },
              { name: "Purnea", href: "/services/local-seo/purnea" },
              { name: "Kishanganj", href: "/services/local-seo/kishanganj" },
              { name: "Barsoi", href: "/services/local-seo/barsoi" },
              { name: "Dalkhola", href: "/services/local-seo/dalkhola" },
            ].map((city) => (
              <Link
                key={city.name}
                href={city.href}
                className="px-5 py-2 rounded-full border border-violet-200 text-violet-700 text-sm font-medium hover:bg-violet-50 transition-all"
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

      {/* CTA */}
      <section className="section bg-gradient-to-br from-violet-900 to-slate-900 text-white">
        <div className="container-pad text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Rank #1 on Google Maps in Baisi?
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Free audit. No pressure. We&apos;ll check your Google presence and show you exactly what&apos;s needed — no cost, no commitment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all"
            >
              Get Free Audit <ArrowRight size={18} />
            </Link>
            <a
              href={contact.phoneHref}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold"
            >
              <Phone size={16} /> {contact.phone}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm text-slate-400">
            <span>✓ Free audit, no commitment</span>
            <span>✓ No contract lock-in</span>
            <span>✓ Results within 60–90 days</span>
          </div>
        </div>
      </section>
    </>
  );
}
