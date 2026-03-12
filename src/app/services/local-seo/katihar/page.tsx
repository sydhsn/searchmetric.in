import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, Phone, ArrowRight, MessageCircle, Star, Search, TrendingUp } from "lucide-react";
import { contact } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Local SEO Services in Katihar | Google Maps Ranking — Searchmetric",
  description:
    "Rank #1 on Google Maps in Katihar. Searchmetric helps Katihar businesses get found on Google — shops, clinics, coaching centres, restaurants & more. Free local SEO audit available.",
  keywords: "local SEO Katihar, Google Maps ranking Katihar, SEO agency Katihar, digital marketing Katihar, Google Business Profile Katihar, best SEO company Katihar Bihar",
  alternates: { canonical: "/services/local-seo/katihar" },
};

const businessTypes = [
  { emoji: "🏪", type: "Retail Shops" },
  { emoji: "🏥", type: "Clinics & Hospitals" },
  { emoji: "📚", type: "Coaching Institutes" },
  { emoji: "🍽️", type: "Restaurants & Dhabas" },
  { emoji: "🏨", type: "Hotels & Lodges" },
  { emoji: "💇", type: "Salons & Parlours" },
  { emoji: "🏦", type: "Finance & Loan Agents" },
  { emoji: "🚗", type: "Auto & Repair Shops" },
];

const faqs = [
  {
    q: "Does local SEO work for businesses in Katihar?",
    a: "Yes — and it works very well here because competition online is still very low in Katihar. Most businesses aren't doing any SEO at all, which means ranking high on Google Maps is far easier and faster here than in metros like Mumbai or Delhi.",
  },
  {
    q: "How long does it take to rank on Google Maps in Katihar?",
    a: "For Katihar, most of our clients start seeing improved Google Maps visibility within 4–8 weeks because local competition is low. Full results typically come in 2–3 months.",
  },
  {
    q: "Do I need a website to do local SEO?",
    a: "No, you don't need a website to start. A well-optimised Google Business Profile alone can get you ranking on Google Maps. A website does help, but it's not required to get started.",
  },
  {
    q: "What's included in your Katihar local SEO service?",
    a: "Google Business Profile setup & optimisation, local keyword research, citation building on Indian directories, review management guidance, and monthly performance reports — all in one plan.",
  },
];

export default function KatiharLocalSEOPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
        </div>
        <div className="container-pad relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-6">
            <MapPin size={16} className="text-indigo-400" />
            <span className="text-sm font-semibold">Local SEO · Katihar, Bihar</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get Your Katihar Business<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
              Found on Google Maps
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Most Katihar businesses have zero Google presence. We fix that — so when someone nearby searches for what you sell, they find <strong className="text-white">you</strong>, not your competitor.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-indigo-500 to-violet-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-indigo-500/40 transition-all">
              Get Free Katihar SEO Audit <ArrowRight size={18} />
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
          <p className="text-center text-sm text-slate-500 font-medium mb-5">We help these types of Katihar businesses rank on Google:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {businessTypes.map((b, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700">
                <span>{b.emoji}</span>{b.type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Katihar is an opportunity */}
      <section className="section bg-gradient-to-b from-white to-slate-50">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-sm font-semibold mb-5">
                📍 Why Katihar is a Big Opportunity
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Your Competitors in Katihar Are{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600">
                  Not Doing SEO Yet
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  In cities like Mumbai or Delhi, ranking on Google is extremely competitive — hundreds of businesses are fighting for the same keywords. In Katihar, the situation is completely different.
                </p>
                <p>
                  Most local shops, clinics, and service providers in Katihar don't have an optimised Google Business Profile. Many don't even have one at all. That means if you set up and optimise yours now, <strong>you can rank at the top of Google Maps within weeks</strong> — not months.
                </p>
                <p>
                  Every day that passes, a potential customer searches "doctor near me Katihar" or "mobile shop Katihar" on Google. Right now, they may not find you. We change that.
                </p>
              </div>
              <div className="mt-7 space-y-3">
                {[
                  "Low competition = faster Google Maps ranking",
                  "Growing smartphone usage in Seemanchal",
                  "Customers actively searching for local services",
                  "First-mover advantage — act before competitors do",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Search size={24} />, label: "Google Search Visibility", desc: "Show up when locals search" },
                { icon: <MapPin size={24} />, label: "Google Maps Top 3", desc: "Get seen before competitors" },
                { icon: <Star size={24} />, label: "Review Management", desc: "Build trust with new customers" },
                { icon: <TrendingUp size={24} />, label: "Monthly Reports", desc: "Track your real growth" },
              ].map((item, i) => (
                <div key={i} className="card card-pad text-center group hover:border-indigo-200 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white grid place-items-center mx-auto mb-3 group-hover:scale-110 transition-transform">
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
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-indigo-500 to-violet-600 text-white ring-0 mb-4">What We Do For You</div>
            <h2 className="text-3xl font-bold mb-4">Complete Local SEO for Katihar Businesses</h2>
            <p className="text-slate-600">Everything handled — you just focus on running your business.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: "📍", title: "Google Business Profile Setup", desc: "We create or fully optimise your GBP listing with the right categories, photos, business hours, and description." },
              { icon: "🔑", title: "Local Keyword Research", desc: "We find the exact words Katihar customers type to find businesses like yours, and target those words." },
              { icon: "📋", title: "Citation Building", desc: "We list your business on Justdial, Sulekha, IndiaMart, and 30+ other directories with consistent information." },
              { icon: "⭐", title: "Review Generation", desc: "We guide you through a simple process to collect genuine reviews from your happy customers." },
              { icon: "📸", title: "Photo & Post Optimisation", desc: "We upload real business photos and regular Google Posts to keep your profile active and trustworthy." },
              { icon: "📊", title: "Monthly Reports", desc: "A simple, clear report every month showing your Google Maps ranking, profile views, calls, and direction requests." },
            ].map((item, i) => (
              <div key={i} className="card card-pad group hover:border-indigo-200 transition-all">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="font-bold text-ink-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section bg-white">
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

      {/* CTA */}
      <section className="section bg-gradient-to-br from-indigo-900 to-slate-900 text-white">
        <div className="container-pad text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Rank #1 on Google Maps in Katihar?</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Get your free local SEO audit. We'll show you exactly how your business looks online today and what it takes to get to the top.
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
