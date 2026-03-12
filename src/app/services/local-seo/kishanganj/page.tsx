import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, CheckCircle, Phone, ArrowRight, MessageCircle, Star, Search, TrendingUp } from "lucide-react";
import { contact } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Local SEO Services in Kishanganj | Google Maps Ranking — Searchmetric",
  description:
    "Help your Kishanganj business rank on Google Maps. Searchmetric provides local SEO, Google Business Profile setup, and digital marketing for Kishanganj businesses. Free audit available.",
  keywords: "local SEO Kishanganj, Google Maps ranking Kishanganj, digital marketing Kishanganj, SEO agency Kishanganj Bihar, Google Business Profile Kishanganj",
  alternates: { canonical: "/services/local-seo/kishanganj" },
};

const businessTypes = [
  { emoji: "🍵", type: "Tea Gardens & Estates" },
  { emoji: "🏪", type: "Shops & Supermarkets" },
  { emoji: "🏥", type: "Clinics & Pharmacies" },
  { emoji: "📚", type: "Coaching & Tuition" },
  { emoji: "🍽️", type: "Restaurants & Dhabas" },
  { emoji: "🏨", type: "Hotels & Lodges" },
  { emoji: "💼", type: "Service Providers" },
  { emoji: "🚗", type: "Auto & Spare Parts" },
];

export default function KishanganjLocalSEOPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-amber-900 to-slate-900 py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-amber-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
        </div>
        <div className="container-pad relative z-10 max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-6">
            <MapPin size={16} className="text-amber-400" />
            <span className="text-sm font-semibold">Local SEO · Kishanganj, Bihar</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Put Your Kishanganj Business<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-orange-400">
              on the Google Map
            </span>
          </h1>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto leading-relaxed">
            Kishanganj is growing fast. Make sure local customers searching on Google find your business first — before they find your competition.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl shadow-xl hover:shadow-amber-500/40 transition-all">
              Get Free Kishanganj SEO Audit <ArrowRight size={18} />
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
          <p className="text-center text-sm text-slate-500 font-medium mb-5">We help Kishanganj businesses across these industries rank on Google:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {businessTypes.map((b, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700">
                <span>{b.emoji}</span>{b.type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Kishanganj */}
      <section className="section bg-gradient-to-b from-white to-slate-50">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-50 text-amber-700 text-sm font-semibold mb-5">
                📍 Kishanganj's Digital Window
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Kishanganj Customers Search on Google —{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-500 to-orange-600">
                  Are You There?
                </span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Kishanganj has a unique position — it borders West Bengal and sees a mix of local Bihar customers and visitors. More and more people here use Google to discover local shops, services, and restaurants before they visit.
                </p>
                <p>
                  Right now, very few Kishanganj businesses are using local SEO. This is a rare opportunity: anyone who starts early will dominate their Google Maps category for years.
                </p>
                <p>
                  We set up and manage your Google Business Profile, build local citations, handle review collection, and send you a clear monthly report of your progress.
                </p>
              </div>
              <div className="mt-7 space-y-3">
                {[
                  "Almost zero local competition on Google Maps",
                  "Growing cross-border customer base",
                  "First-mover advantage still available",
                  "Smartphone users increasing every month",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl hover:shadow-lg transition-all">
                  Get Free Audit <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <Search size={24} />, label: "Google Search Visibility" },
                { icon: <MapPin size={24} />, label: "Google Maps Top 3" },
                { icon: <Star size={24} />, label: "Review Management" },
                { icon: <TrendingUp size={24} />, label: "Monthly Reports" },
              ].map((item, i) => (
                <div key={i} className="card card-pad text-center group hover:border-amber-200 transition-all">
                  <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white grid place-items-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <div className="font-semibold text-sm text-ink-900">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section bg-gradient-to-br from-amber-900 to-slate-900 text-white">
        <div className="container-pad text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Own Google Maps in Kishanganj?</h2>
          <p className="text-slate-300 mb-8 text-lg">
            Free audit, no obligation. Let's look at your current Google presence and build a plan together.
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
            <span>✓ No lock-in contract</span>
            <span>✓ Results in 60–90 days</span>
          </div>
        </div>
      </section>
    </>
  );
}
