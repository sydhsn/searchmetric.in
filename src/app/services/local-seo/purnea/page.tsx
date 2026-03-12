import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, Phone, ArrowRight, MessageCircle, Star, Search, TrendingUp } from "lucide-react";
import { contact } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Local SEO Services in Purnea | Google Maps Ranking — Searchmetric",
  description:
    "Get your Purnea business to the top of Google Maps. Searchmetric provides local SEO for shops, clinics, coaching centres and all businesses in Purnea, Bihar. Free audit available.",
  keywords: "local SEO Purnea, Google Maps ranking Purnea, SEO agency Purnea, digital marketing Purnea Bihar, Google Business Profile Purnea, SEO company Purnea",
  alternates: { canonical: "/services/local-seo/purnea" },
};

const businessTypes = [
  { emoji: "🏪", type: "Retail Shops" },
  { emoji: "🏥", type: "Clinics & Nursing Homes" },
  { emoji: "📚", type: "Schools & Coaching" },
  { emoji: "🍽️", type: "Restaurants & Sweets" },
  { emoji: "🏨", type: "Hotels & Guest Houses" },
  { emoji: "🚘", type: "Showrooms & Dealers" },
  { emoji: "🏗️", type: "Construction & Hardware" },
  { emoji: "💇", type: "Salons & Beauty Parlours" },
];

const faqs = [
  {
    q: "Can Searchmetric help my Purnea business rank on Google?",
    a: "Absolutely. Purnea is a growing city and Google search usage is increasing rapidly here. We specialise in local SEO for smaller Bihar cities where competition is still low, making it much easier to rank than in larger metros.",
  },
  {
    q: "How is local SEO different from regular SEO?",
    a: "Local SEO focuses specifically on ranking your business on Google Maps and in local search results — so people nearby can find you. Regular SEO targets national or global rankings. For most Purnea businesses, local SEO gives much faster, more relevant results.",
  },
  {
    q: "My business doesn't have a website. Can you still help?",
    a: "Yes. A Google Business Profile alone can get you ranking on Google Maps. We'll set up and optimise your GBP first. If you need a website later, we can help with that too.",
  },
  {
    q: "How do I get started?",
    a: "Just fill out our contact form or WhatsApp us. We'll do a free audit of your current Google presence, explain what we find, and give you a clear plan — no pressure, no obligation.",
  },
];

export default function PurneaLocalSEOPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900 py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
        </div>
        <div className="container-pad relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-6">
            <MapPin size={16} className="text-emerald-400" />
            <span className="text-sm font-semibold">Local SEO · Purnea, Bihar</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Rank Your Purnea Business<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
              #1 on Google Maps
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Purnea customers are searching on Google every day for businesses just like yours. With the right local SEO, you'll be the first business they find — and call.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-emerald-500/40 transition-all">
              Get Free Purnea SEO Audit <ArrowRight size={18} />
            </Link>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Business types */}
      <section className="bg-white border-b border-slate-100 py-8">
        <div className="container-pad">
          <p className="text-center text-sm text-slate-500 font-medium mb-5">We help Purnea businesses across these industries rank on Google:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {businessTypes.map((b, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700">
                <span>{b.emoji}</span>{b.type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why now */}
      <section className="section bg-gradient-to-b from-white to-slate-50">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold mb-5">
                📍 Purnea's Digital Opportunity
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Purnea Businesses Can Rank on Google{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-teal-600">
                  Faster Than You Think
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Purnea is one of the largest cities in North Bihar with a rapidly growing population of smartphone users. Yet very few local businesses have made any effort to establish their Google presence.
                </p>
                <p>
                  When someone in Purnea searches "clinic near me" or "sweet shop Purnea" on Google, the top result gets the call. We put you at that top position before your competitors even think about it.
                </p>
                <p>
                  This is the window of opportunity — and it won't stay open forever. Early movers in Purnea's local SEO will own their categories for years to come.
                </p>
              </div>
              <div className="mt-7 space-y-3">
                {[
                  "Purnea is a major commercial hub in North Bihar",
                  "Search volume growing every month",
                  "Very low Google Maps competition currently",
                  "Be the first business in your category to rank",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                  Start Now — Free Audit <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Search size={24} />, label: "Local Search Ranking", desc: "Appear when Purnea locals search" },
                { icon: <MapPin size={24} />, label: "Google Maps Top 3", desc: "First thing customers see" },
                { icon: <Star size={24} />, label: "Reviews & Trust", desc: "Build credibility fast" },
                { icon: <TrendingUp size={24} />, label: "Clear Reports", desc: "See your growth monthly" },
              ].map((item, i) => (
                <div key={i} className="card card-pad text-center group hover:border-emerald-200 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 text-white grid place-items-center mx-auto mb-3 group-hover:scale-110 transition-transform">
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

      {/* FAQs */}
      <section className="section bg-white">
        <div className="container-pad max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="badge bg-gradient-to-r from-emerald-500 to-teal-600 text-white ring-0 mb-4">FAQ</div>
            <h2 className="text-3xl font-bold">Questions from Purnea Business Owners</h2>
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
      <section className="section bg-gradient-to-br from-emerald-900 to-slate-900 text-white">
        <div className="container-pad text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Start Ranking on Google Maps in Purnea</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Free audit. No pressure. We'll show you exactly where you stand and what we can do for your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all">
              Get Free Audit <ArrowRight size={18} />
            </Link>
            <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold">
              <Phone size={16} /> {contact.phone}
            </a>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-400">
            <span>✓ Free audit, no commitment</span>
            <span>✓ No contract lock-in</span>
            <span>✓ Results within 60–90 days</span>
          </div>
        </div>
      </section>
    </>
  );
}
