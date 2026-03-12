import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, Phone, ArrowRight, MessageCircle, Star, Search, TrendingUp } from "lucide-react";
import { contact } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Local SEO Services in Dalkhola | Google Maps Ranking — Searchmetric",
  description:
    "Get your Dalkhola business ranked on Google Maps. Searchmetric provides local SEO and digital marketing for businesses in Dalkhola, North Dinajpur. Free audit available.",
  keywords: "local SEO Dalkhola, Google Maps ranking Dalkhola, SEO agency Dalkhola, digital marketing Dalkhola, Google Business Profile Dalkhola North Dinajpur",
  alternates: { canonical: "/services/local-seo/dalkhola" },
};

export default function DalkholaLocalSEOPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-sky-900 to-slate-900 py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-sky-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
        </div>
        <div className="container-pad relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-6">
            <MapPin size={16} className="text-sky-400" />
            <span className="text-sm font-semibold">Local SEO · Dalkhola, North Dinajpur</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Rank Your Dalkhola Business<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-blue-400">
              on Google Maps
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Dalkhola is a key commercial junction connecting Bihar, West Bengal, and the Northeast. Make sure your business is visible when customers search for services here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-sky-500/40 transition-all">
              Get Free Dalkhola SEO Audit <ArrowRight size={18} />
            </Link>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Why Dalkhola */}
      <section className="section bg-gradient-to-b from-white to-slate-50">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 text-sky-700 text-sm font-semibold mb-5">
                📍 Dalkhola's Strategic Location
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                A Junction Town with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-blue-600">
                  Huge Google Search Potential
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Dalkhola is situated on NH-27, making it a natural stopping and service point for traffic moving between Bihar, West Bengal, and the Northeast. This means your customers aren't just locals — they're also travellers and traders from across the region.
                </p>
                <p>
                  When people stop at Dalkhola — or live here — they use Google to find hotels, repair shops, restaurants, and services. Getting your business to the top of those results is exactly what we do.
                </p>
                <p>
                  Google SEO competition in Dalkhola is almost non-existent right now. Starting early gives you a permanent advantage over any competitor who tries to catch up later.
                </p>
              </div>
              <div className="mt-7 space-y-3">
                {[
                  "NH-27 location brings traffic from multiple states",
                  "Travellers and locals both search on Google",
                  "Virtually no local Google Maps competition",
                  "Early ranking advantage that compounds over time",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                  Get Free Audit <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Search size={24} />, label: "Google Search", desc: "Appear for local & highway searches" },
                { icon: <MapPin size={24} />, label: "Maps Ranking", desc: "Top 3 on Google Maps" },
                { icon: <Star size={24} />, label: "Reviews", desc: "Build trust with travellers & locals" },
                { icon: <TrendingUp size={24} />, label: "Monthly Reports", desc: "Track your real growth" },
              ].map((item, i) => (
                <div key={i} className="card card-pad text-center group hover:border-sky-200 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 text-white grid place-items-center mx-auto mb-3 group-hover:scale-110 transition-transform">
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
            <div className="badge bg-gradient-to-r from-sky-500 to-blue-600 text-white ring-0 mb-4">Our Service</div>
            <h2 className="text-3xl font-bold">What We Do for Your Dalkhola Business</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: "📍", title: "Google Business Profile", desc: "Full setup and optimisation — categories, photos, hours, Q&A, and more." },
              { icon: "🔑", title: "Local Keyword Targeting", desc: "We find what Dalkhola customers search for and make sure you rank for those terms." },
              { icon: "📋", title: "Directory Citations", desc: "Justdial, Sulekha, IndiaMart and 30+ local directories with consistent info." },
              { icon: "⭐", title: "Review Collection", desc: "Simple system to gather genuine reviews from your happy customers." },
              { icon: "📸", title: "Photos & Posts", desc: "Regular Google Posts and photos to keep your profile active and trusted." },
              { icon: "📊", title: "Monthly Report", desc: "Simple report every month: ranking, views, calls, direction requests — no jargon." },
            ].map((item, i) => (
              <div key={i} className="card card-pad flex gap-4 items-start hover:border-sky-200 transition-all">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-ink-900 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-sky-900 to-slate-900 text-white">
        <div className="container-pad text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Be the First Business in Dalkhola on Google Maps</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Free audit. No commitment. We'll check your current Google visibility and tell you exactly what to fix.
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
            <span>✓ Free audit</span>
            <span>✓ No contract lock-in</span>
            <span>✓ Results in 60–90 days</span>
          </div>
        </div>
      </section>
    </>
  );
}
