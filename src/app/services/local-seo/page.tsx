"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin, CheckCircle, Star, FileText, List, Search,
  Phone, ChevronRight, ArrowRight, TrendingUp, Shield,
  MessageCircle, Clock, Users, Quote, Target, BarChart2
} from "lucide-react";
import { localSEOService } from "@/content/servicesData";
import { contact } from "@/content/siteCopy";

function FeatureIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "map-pin": return <MapPin size={24} />;
    case "list": return <List size={24} />;
    case "star": return <Star size={24} />;
    case "file-text": return <FileText size={24} />;
    default: return <CheckCircle size={24} />;
  }
}

const businessTypes = [
  { emoji: "🏥", type: "Clinics & Hospitals" },
  { emoji: "🍽️", type: "Restaurants & Cafes" },
  { emoji: "💇", type: "Salons & Spas" },
  { emoji: "🏋️", type: "Gyms & Fitness" },
  { emoji: "📚", type: "Coaching Institutes" },
  { emoji: "🛒", type: "Retail Stores" },
  { emoji: "⚖️", type: "Law Firms" },
  { emoji: "🏠", type: "Real Estate" },
];

const testimonials = [
  {
    name: "Dr. Suresh Nair",
    business: "Coaching Institute, Katihar",
    quote: "Before Searchmetric, we were on page 3 of Google. Within 2 months we were in the top 3 on Google Maps. Patient enquiries from online went up by over 200%.",
    stars: 5,
  },
  {
    name: "Kavita S.",
    business: "Retail Shop, Purnea",
    quote: "I had no idea what Google Business Profile even was. Searchmetric set everything up, optimised it, and now I get 15–20 new client calls every week just from Google.",
    stars: 5,
  },
];

export default function LocalSEOPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedPackage, setSelectedPackage] = useState(1);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-violet-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
        </div>
        <div className="container-pad relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-6">
              <MapPin size={16} className="text-indigo-400" />
              <span className="text-sm font-semibold">Local SEO · Google Maps · Seemanchal Bihar</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {localSEOService.heroTitle}
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {localSEOService.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="btn-primary bg-gradient-to-r from-indigo-500 to-violet-600 hover:from-indigo-600 hover:to-violet-700 inline-flex items-center gap-2 text-base px-8 py-4">
                Get Free Local SEO Audit <ArrowRight size={18} />
              </Link>
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold">
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {localSEOService.results.map((r, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">{r.metric}</div>
                  <div className="text-xs text-slate-300 mt-1">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Business types we serve */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-pad py-8">
          <div className="text-center text-sm text-slate-400 font-medium mb-5">We help local businesses across Seemanchal & Bihar get found on Google:</div>
          <div className="flex flex-wrap justify-center gap-3">
            {businessTypes.map((b, i) => (
              <div key={i} className="flex items-center gap-2 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 text-sm font-medium text-slate-700">
                <span>{b.emoji}</span>{b.type}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="section bg-gradient-to-b from-white via-slate-50 to-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge bg-gradient-to-r from-indigo-500 to-violet-600 text-white ring-0 mb-5">The Real Problem</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                If You&apos;re Not in the Top 3 on <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600">Google Maps, You&apos;re Invisible</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  When someone in Katihar types &quot;clinic near me&quot; or &quot;best coaching institute in Purnea&quot; — they click on one of the top three results on Google Maps. They barely scroll past that. If you&apos;re not there, you simply don&apos;t exist for that customer.
                </p>
                <p>
                  {localSEOService.description}
                </p>
                <p>
                  Local SEO isn&apos;t a one-time fix. It&apos;s an ongoing system of optimisation, review management, citation building, and local content — and we handle every bit of it for you.
                </p>
              </div>
              <div className="mt-7 space-y-3">
                {["Google Business Profile setup and deep optimisation","Local citation building across 50+ directories","Review generation strategy and response management","Localised content for your area and service categories"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500 to-violet-600">
                  Get Free Local SEO Audit <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden relative">
                <Image src="https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80"
                  alt="Google Maps search results showing local businesses in Katihar Seemanchal Bihar"
                  fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp size={16} className="text-indigo-500" />
                  <span className="text-xs font-semibold text-indigo-600">Average result</span>
                </div>
                <div className="text-3xl font-bold text-ink-900">300–500%</div>
                <div className="text-xs text-slate-500">more Google Map views</div>
              </div>
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-indigo-500 to-violet-600 text-white px-4 py-3 rounded-2xl shadow-lg text-sm font-semibold">
                📍 Top 3 on Google Maps
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-slate-50">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-indigo-500 to-violet-600 text-white ring-0 mb-4">Complete Service</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything That Goes into <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600">Ranking #1 Locally</span>
            </h2>
            <p className="text-lg text-slate-600">Local SEO has many moving parts. We handle all of them.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {localSEOService.features.map((f, i) => (
              <div key={i} className="card card-hover card-pad text-center group">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white grid place-items-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FeatureIcon icon={f.icon} />
                </div>
                <h3 className="text-base font-bold text-ink-900 mb-2">{f.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{f.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-indigo-500 to-violet-600 text-white ring-0 mb-4">Real Results</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Seemanchal Businesses That Now Own Google Maps</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="card card-pad relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10"><Quote size={48} /></div>
                <div className="flex gap-0.5 mb-4">
                  {Array(t.stars).fill(0).map((_, s) => <Star key={s} size={16} className="fill-amber-400 text-amber-400" />)}
                </div>
                <p className="text-slate-700 leading-relaxed mb-5 italic">&ldquo;{t.quote}&rdquo;</p>
                <div>
                  <div className="font-bold text-ink-900">{t.name}</div>
                  <div className="text-sm text-slate-500">{t.business}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-slate-50">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-indigo-500 to-violet-600 text-white ring-0 mb-4">Our Process</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How We Get You to the <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600">Top of Local Search</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {localSEOService.process.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-violet-600 text-white grid place-items-center text-3xl font-bold mx-auto mb-5">
                  {step.step}
                </div>
                {i < localSEOService.process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+48px)] right-[calc(-50%+48px)] h-px bg-gradient-to-r from-indigo-300 to-violet-300" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-indigo-500 to-violet-600 text-white ring-0 mb-4">Pricing Plans</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              All-Inclusive <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-violet-600">Local SEO Packages</span>
            </h2>
            <p className="text-slate-600">Everything included. No hidden fees. Results visible within 2–3 months.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {localSEOService.packages.map((pkg, i) => (
              <div key={i} className={`card card-pad relative transition-all ${selectedPackage === i ? "ring-2 ring-indigo-500 shadow-xl shadow-indigo-100" : "hover:shadow-lg"} ${pkg.popular ? "border-2 border-indigo-500" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-indigo-500 to-violet-600 text-white text-sm font-semibold shadow-lg">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-3">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span className="text-4xl font-bold">{pkg.price}</span>
                    <span className="text-slate-500">{pkg.period}</span>
                  </div>
                  <p className="text-xs text-slate-500 italic">{pkg.bestFor}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {pkg.features.map((f, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle size={15} className="text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="text-slate-700 text-sm">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/contact" onClick={() => setSelectedPackage(i)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all text-center block ${
                    pkg.popular ? "bg-gradient-to-r from-indigo-500 to-violet-600 text-white hover:shadow-lg" : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-6">*30-day money-back guarantee. Results typically visible in 60–90 days.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-slate-50">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-indigo-500 to-violet-600 text-white ring-0 mb-4">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Local SEO Questions, Answered Honestly</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {localSEOService.faqs.map((faq, i) => (
              <div key={i} className="card card-pad">
                <button onClick={() => setExpandedFaq(expandedFaq === i ? null : i)}
                  className="flex items-center justify-between w-full text-left">
                  <h3 className="font-bold text-base text-ink-900 pr-4">{faq.question}</h3>
                  <ChevronRight size={20} className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${expandedFaq === i ? "rotate-90" : ""}`} />
                </button>
                {expandedFaq === i && (
                  <div className="mt-4 pt-4 border-t border-slate-100">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-pad">
          <div className="card overflow-hidden">
            <div className="p-8 md:p-14 bg-gradient-to-r from-indigo-900 via-slate-900 to-slate-800 text-white">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-2xl md:text-3xl font-bold mb-4">Ready to Dominate Google Maps in Your Area?</div>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Get your free local SEO audit. We&apos;ll show you exactly where you stand, who&apos;s outranking you, and what it would take to get you to the top 3 — completely free.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="btn-primary !bg-white !text-slate-900 hover:!bg-slate-100 inline-flex items-center gap-2">
                      Get Free Local SEO Audit <ArrowRight size={18} />
                    </Link>
                    <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all font-semibold text-sm">
                      <Phone size={16} /> {contact.phone}
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Search size={22} />, label: "Google Search Ranking" },
                    { icon: <MapPin size={22} />, label: "Google Maps Top 3" },
                    { icon: <Star size={22} />, label: "Review Management" },
                    { icon: <BarChart2 size={22} />, label: "Monthly Reports" },
                  ].map((item, i) => (
                    <div key={i} className="bg-white/10 rounded-2xl p-5 text-center">
                      <div className="mb-2 flex justify-center">{item.icon}</div>
                      <div className="text-sm font-medium">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
