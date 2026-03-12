import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, Phone, ArrowRight, MessageCircle, Star, Search, TrendingUp } from "lucide-react";
import { contact } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Local SEO Services in Barsoi | Google Maps Ranking — Searchmetric",
  description:
    "Help your Barsoi business rank on Google Maps. Searchmetric provides local SEO and Google Business Profile setup for businesses in Barsoi, Katihar district, Bihar. Free audit available.",
  keywords: "local SEO Barsoi, Google Maps ranking Barsoi, digital marketing Barsoi, SEO Barsoi Katihar, Google Business Profile Barsoi Bihar",
  alternates: { canonical: "/services/local-seo/barsoi" },
};

export default function BarsoiLocalSEOPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
        </div>
        <div className="container-pad relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-6">
            <MapPin size={16} className="text-rose-400" />
            <span className="text-sm font-semibold">Local SEO · Barsoi, Katihar District</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Get Your Barsoi Business<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-pink-400">
              Visible on Google
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Barsoi is a growing town along the Katihar–Siliguri route. When travellers and locals search for businesses here on Google, make sure yours is the one they find.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-rose-500/40 transition-all">
              Get Free Barsoi SEO Audit <ArrowRight size={18} />
            </Link>
            <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold">
              <MessageCircle size={18} /> Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Why Barsoi */}
      <section className="section bg-gradient-to-b from-white to-slate-50">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-rose-50 text-rose-700 text-sm font-semibold mb-5">
                📍 Barsoi's Unique Advantage
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Highway Town Visibility —{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-600">
                  Be Found by Locals & Travellers
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Barsoi sits on an important route connecting Katihar to Siliguri and beyond. People passing through — and those living locally — use Google to find hotels, dhabas, petrol pumps, and services. Are you showing up?
                </p>
                <p>
                  Local SEO in small towns like Barsoi is incredibly effective right now because almost nobody has set up their Google Business Profile properly. We set it up, optimise it, and make sure you appear for searches in your town and surrounding area.
                </p>
              </div>
              <div className="mt-7 space-y-3">
                {[
                  "Essentially zero competition on Google Maps in Barsoi",
                  "Travellers and locals search for services here",
                  "Rank fast with minimal investment",
                  "Build a permanent Google presence for your business",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                  Get Started — Free Audit <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Search size={24} />, label: "Local Search", desc: "Appear for local searches" },
                { icon: <MapPin size={24} />, label: "Maps Ranking", desc: "Top 3 on Google Maps" },
                { icon: <Star size={24} />, label: "Reviews", desc: "Build customer trust" },
                { icon: <TrendingUp size={24} />, label: "Growth Reports", desc: "Track every month" },
              ].map((item, i) => (
                <div key={i} className="card card-pad text-center group hover:border-rose-200 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-rose-500 to-pink-600 text-white grid place-items-center mx-auto mb-3 group-hover:scale-110 transition-transform">
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

      {/* CTA */}
      <section className="section bg-gradient-to-br from-rose-900 to-slate-900 text-white">
        <div className="container-pad text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get Your Barsoi Business on Google Maps Today</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Free audit, no pressure. We'll check your current Google presence and tell you exactly what needs to be done.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white text-slate-900 font-semibold rounded-xl hover:bg-slate-100 transition-all">
              Get Free Audit <ArrowRight size={18} />
            </Link>
            <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold">
              <Phone size={16} /> {contact.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
