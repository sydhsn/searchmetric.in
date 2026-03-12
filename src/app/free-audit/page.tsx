import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin, CheckCircle, ArrowRight, MessageCircle,
  Search, Star, TrendingUp, Phone, Shield, Clock, Zap
} from "lucide-react";
import { contact } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: "Free Google SEO Audit for Your Business | Searchmetric — Seemanchal Bihar",
  description:
    "Get a free Google Maps & SEO audit for your Katihar, Purnea, Kishanganj, Barsoi, Baisi, or Dalkhola business. We'll show you exactly why you're not ranking and what to fix — at zero cost.",
  keywords: "free SEO audit Katihar, free Google audit Purnea, free local SEO check Bihar, free Google Maps audit Seemanchal, digital marketing audit Katihar",
  alternates: { canonical: "/free-audit" },
};

const auditItems = [
  {
    icon: <Search size={20} />,
    title: "Google Maps Ranking Check",
    desc: "We check where you appear (or don't appear) on Google Maps for your most important keywords.",
    color: "from-indigo-500 to-violet-600",
  },
  {
    icon: <MapPin size={20} />,
    title: "Google Business Profile Review",
    desc: "We analyse your GBP for missing info, wrong categories, poor photos, and optimisation gaps.",
    color: "from-emerald-500 to-teal-600",
  },
  {
    icon: <Star size={20} />,
    title: "Review Presence Analysis",
    desc: "How many reviews do you have? What's your average rating? How does it compare to top competitors?",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: <TrendingUp size={20} />,
    title: "Competitor Snapshot",
    desc: "We show you exactly who is ranking above you in Katihar/Purnea/your city — and why.",
    color: "from-pink-500 to-rose-600",
  },
  {
    icon: <Shield size={20} />,
    title: "Citation Consistency Check",
    desc: "Is your business listed on Justdial, Sulekha, IndiaMart? Are the details consistent?",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: <Zap size={20} />,
    title: "Quick Wins List",
    desc: "A plain-language list of the top 3–5 things you can fix immediately to start ranking faster.",
    color: "from-purple-500 to-fuchsia-600",
  },
];

const cities = [
  "Katihar", "Purnea", "Kishanganj", "Barsoi", "Baisi",
  "Dalkhola", "Araria", "Forbesganj", "Siliguri", "Anywhere in Seemanchal",
];

const faqs = [
  {
    q: "Is the audit really free? What's the catch?",
    a: "It's genuinely free. No hidden fees, no card required. We do the audit and share the findings with you. If you want us to fix the issues, we'll tell you our plan and pricing. If you don't want to work with us after that — no problem at all.",
  },
  {
    q: "How long does the audit take?",
    a: "We typically complete your audit within 24–48 hours of receiving your business details. We'll send you a simple, easy-to-read report.",
  },
  {
    q: "What do I need to provide?",
    a: "Just your business name, city, phone number, and the type of business you run. That's all we need to start. No login access to your accounts required at this stage.",
  },
  {
    q: "What if I don't have a Google Business Profile yet?",
    a: "Even better — we'll explain exactly how to set one up and what to put in it for maximum impact. Many Seemanchal businesses don't have one yet, so you can get a head start immediately.",
  },
];

export default function FreeAuditPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        </div>
        <div className="container-pad relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            {/* Left — copy */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-6">
                <Zap size={16} className="text-amber-400" />
                <span className="text-sm font-semibold">100% Free · No Commitment · Results in 48 hrs</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                Free Google SEO Audit<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-fuchsia-400">
                  for Your Business
                </span>
              </h1>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                Find out in 48 hours why your business isn&apos;t showing up on Google Maps — and exactly what it will take to fix it. Completely free, no strings attached.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "We check your Google Maps ranking for your key services",
                  "We review your Google Business Profile for gaps",
                  "We show you who is outranking you — and why",
                  "You get a clear action list to start winning",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle size={18} className="text-emerald-400 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={contact.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-xl transition-all"
                >
                  <MessageCircle size={18} /> WhatsApp Us for Free Audit
                </a>
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold"
                >
                  <Phone size={18} /> Call Now
                </a>
              </div>
            </div>

            {/* Right — audit checklist card */}
            <div className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-3xl p-8">
              <div className="text-white font-bold text-lg mb-1">Your Free Audit Includes:</div>
              <p className="text-slate-400 text-sm mb-6">6 checks, delivered in 48 hours</p>
              <div className="space-y-4">
                {auditItems.map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className={`h-9 w-9 rounded-lg bg-gradient-to-br ${item.color} text-white grid place-items-center flex-shrink-0`}>
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-white font-semibold text-sm">{item.title}</div>
                      <div className="text-slate-400 text-xs mt-0.5 leading-relaxed">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 pt-5 border-t border-white/10 flex items-center gap-3">
                <Clock size={16} className="text-amber-400 flex-shrink-0" />
                <span className="text-slate-300 text-sm">Delivered within 24–48 hours of your request</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="section bg-gradient-to-b from-white to-slate-50">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">Simple Process</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-3">How the Free Audit Works</h2>
            <p className="text-slate-500">3 steps, no hassle, no obligation</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                icon: <MessageCircle size={24} />,
                title: "Send Us Your Details",
                desc: "WhatsApp or call us with your business name, city, and type of business. That's it — no login access needed.",
                color: "from-brand-500 to-fuchsia-600",
              },
              {
                step: "2",
                icon: <Search size={24} />,
                title: "We Run the Audit",
                desc: "Our team checks your Google presence, Maps ranking, GBP profile, reviews, citations, and competitors within 48 hours.",
                color: "from-indigo-500 to-violet-600",
              },
              {
                step: "3",
                icon: <TrendingUp size={24} />,
                title: "You Get a Clear Report",
                desc: "A simple, easy-to-understand report in plain Hindi or English — showing what's wrong and what to fix. No jargon, no confusion.",
                color: "from-emerald-500 to-teal-600",
              },
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                <div className={`h-20 w-20 rounded-2xl bg-gradient-to-br ${item.color} text-white grid place-items-center text-2xl font-bold mx-auto mb-5 shadow-lg`}>
                  {item.step}
                </div>
                <div className="h-12 w-12 rounded-xl bg-slate-50 text-slate-600 grid place-items-center mx-auto mb-4">
                  {item.icon}
                </div>
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cities we serve */}
      <section className="bg-white border-y border-slate-100 py-10">
        <div className="container-pad">
          <p className="text-center text-sm font-semibold text-slate-500 mb-5 uppercase tracking-wider">We offer free audits for businesses in:</p>
          <div className="flex flex-wrap justify-center gap-3">
            {cities.map((city) => (
              <span key={city} className="px-4 py-2 rounded-full bg-brand-50 text-brand-700 text-sm font-medium border border-brand-100">
                📍 {city}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Why trust us — honest section */}
      <section className="section bg-slate-50">
        <div className="container-pad max-w-4xl mx-auto">
          <div className="text-center mb-10">
            <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">Why Searchmetric</div>
            <h2 className="text-3xl font-bold">Why Trust an Audit from Us?</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "🎯",
                title: "We Focus on Seemanchal",
                desc: "We're not a Mumbai or Delhi agency trying to sell you a package designed for a metro. We understand the Katihar market, the Purnea market, and what actually works here.",
              },
              {
                icon: "✅",
                title: "Honest Findings, No Scare Tactics",
                desc: "Some agencies exaggerate problems to sell expensive packages. We give you the truth — if your profile is mostly fine, we'll tell you that too.",
              },
              {
                icon: "🚀",
                title: "First-Mover Advantage is Real",
                desc: "Seemanchal is digitally underserved right now. The businesses that rank first on Google Maps today will hold that position for years — and new entrants will struggle to displace them.",
              },
              {
                icon: "💬",
                title: "Plain Hindi or English",
                desc: "The audit report is written in simple language — no technical jargon, no complicated dashboards. You'll understand exactly what it means and what to do.",
              },
            ].map((item, i) => (
              <div key={i} className="card card-pad flex gap-4 items-start">
                <div className="text-3xl flex-shrink-0">{item.icon}</div>
                <div>
                  <h3 className="font-bold text-ink-900 mb-1">{item.title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-pad max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold">Frequently Asked Questions</h2>
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
      <section className="section bg-gradient-to-br from-slate-900 via-brand-900 to-slate-900 text-white">
        <div className="container-pad text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Get Your Free Audit Today — Takes 2 Minutes to Request
          </h2>
          <p className="text-slate-300 mb-8 text-lg">
            Just send us a WhatsApp message with your business name and city. We&apos;ll handle the rest and deliver your audit within 48 hours.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-xl transition-all text-lg"
            >
              <MessageCircle size={20} /> WhatsApp Free Audit Request
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold"
            >
              Fill Contact Form <ArrowRight size={18} />
            </Link>
          </div>
          <p className="mt-6 text-slate-400 text-sm">
            No credit card. No contract. No obligation. Just a free, honest audit of your Google presence.
          </p>
        </div>
      </section>
    </>
  );
}
