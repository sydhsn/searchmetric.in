"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Target, TrendingUp, CheckCircle, Layers, FormInput,
  ChevronRight, ArrowRight, Star, Quote, Shield, Clock,
  Phone, MessageCircle, BarChart2, Users, Zap, IndianRupee
} from "lucide-react";
import { leadAdsService } from "@/content/servicesData";
import { contact } from "@/content/siteCopy";

function FeatureIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "form": return <FormInput size={24} />;
    case "target": return <Target size={24} />;
    case "layers": return <Layers size={24} />;
    case "trending": return <TrendingUp size={24} />;
    default: return <CheckCircle size={24} />;
  }
}

const platforms = [
  { name: "Meta (Facebook & Instagram)", color: "from-blue-500 to-indigo-600", emoji: "📘", note: "800M+ active Indian users" },
  { name: "Google Ads", color: "from-red-500 to-orange-500", emoji: "🔍", note: "High-intent search audiences" },
  { name: "Instagram Lead Forms", color: "from-pink-500 to-purple-600", emoji: "📸", note: "Mobile-first lead capture" },
];

const testimonials = [
  {
    name: "Manish G.",
    business: "Real Estate Agent, Mumbai",
    quote: "I was spending ₹30,000/month on Facebook ads and getting maybe 2–3 leads. Searchmetric restructured everything and now I get 25–30 qualified leads for the same budget. Game changer.",
    stars: 5,
  },
  {
    name: "Dr. Anita Sharma",
    business: "Physiotherapy Clinic, Mira Road",
    quote: "The transparency alone is worth it. Every month I get a clear report showing how many enquiries came in, what each one cost, and what they're doing to improve next month.",
    stars: 5,
  },
];

const businessOutcomes = [
  { emoji: "🏥", sector: "Healthcare clinics", result: "40–60 leads/month at ₹150–300/lead" },
  { emoji: "🏠", sector: "Real estate agents", result: "15–30 qualified buyer enquiries/month" },
  { emoji: "📚", sector: "Coaching institutes", result: "80–120 student enquiries/month" },
  { emoji: "💼", sector: "B2B services", result: "10–20 high-value leads/month" },
];

export default function LeadAdsPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedPackage, setSelectedPackage] = useState(1);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-rose-900 to-slate-900 py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-rose-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
        </div>
        <div className="container-pad relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-6">
              <Target size={16} className="text-orange-400" />
              <span className="text-sm font-semibold">Lead Generation Agency · Mumbai & Mira Road</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {leadAdsService.heroTitle}
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {leadAdsService.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="btn-primary bg-gradient-to-r from-orange-500 to-rose-600 hover:from-orange-600 hover:to-rose-700 inline-flex items-center gap-2 text-base px-8 py-4">
                Get Free Ad Audit <ArrowRight size={18} />
              </Link>
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold">
                <MessageCircle size={18} /> Book a Strategy Call
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {leadAdsService.results.map((r, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">{r.metric}</div>
                  <div className="text-xs text-slate-300 mt-1">{r.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform strip */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-pad py-8">
          <div className="flex flex-wrap items-center justify-center gap-8">
            <span className="text-sm text-slate-400 font-medium">Campaigns we run on:</span>
            {platforms.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <span className="text-2xl">{p.emoji}</span>
                <div>
                  <div className="font-semibold text-sm text-ink-900">{p.name}</div>
                  <div className="text-xs text-slate-400">{p.note}</div>
                </div>
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
              <div className="badge bg-gradient-to-r from-orange-500 to-rose-600 text-white ring-0 mb-5">The Real Problem with Most Ads</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Running Ads Is Easy. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-600">Getting Leads That Convert Is Not.</span>
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Running ads without a proper lead generation strategy is one of the most common and costly mistakes local businesses make. You spend money, you get clicks, but the phone doesn&apos;t ring and the enquiries don&apos;t come. That&apos;s not a budget problem — it&apos;s a strategy problem.
                </p>
                <p>
                  At Searchmetric, we specialise in <strong className="text-ink-900">lead ads for local businesses in Mira Road, Mumbai, and across India</strong>. We build targeted campaigns on Instagram, Facebook, and Google that are designed with one goal in mind — getting real, qualified enquiries from people who are actively looking for your product or service right now.
                </p>
                <p>
                  Unlike most agencies that set up your ads and go quiet, we monitor your campaigns daily, optimise your targeting and creatives continuously, and share clear monthly reports so you always know exactly what your ad spend is delivering.
                </p>
              </div>
              <div className="mt-7 space-y-3">
                {["High-converting lead form setup & optimisation","Multi-platform targeting — Meta + Google","Daily campaign monitoring & optimisation","Clear, transparent monthly ROI reports"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-rose-600">
                  Get Your Free Ad Audit <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden relative">
                <Image src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=800&q=80"
                  alt="Lead ads performance dashboard showing ROI for Indian businesses"
                  fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp size={16} className="text-orange-500" />
                  <span className="text-xs font-semibold text-orange-600">Average client ROI</span>
                </div>
                <div className="text-3xl font-bold text-ink-900">5–10x</div>
                <div className="text-xs text-slate-500">return on ad spend</div>
              </div>
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-orange-500 to-rose-600 text-white px-4 py-3 rounded-2xl shadow-lg text-sm font-semibold">
                🎯 Leads in 24–48 hours
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real Outcomes */}
      <section className="section bg-slate-50">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-orange-500 to-rose-600 text-white ring-0 mb-4">Real Numbers</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What Clients in Different Sectors Are Getting</h2>
            <p className="text-slate-600">These are real outcomes from our active campaigns — not projections.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
            {businessOutcomes.map((b, i) => (
              <div key={i} className="card card-pad text-center">
                <div className="text-4xl mb-3">{b.emoji}</div>
                <div className="font-bold text-ink-900 mb-2 text-sm">{b.sector}</div>
                <div className="text-slate-600 text-xs leading-relaxed">{b.result}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-orange-500 to-rose-600 text-white ring-0 mb-4">How We Do It</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Everything Your Campaign Needs to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-600">Succeed</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {leadAdsService.features.map((feature, i) => (
              <div key={i} className="card card-hover card-pad text-center group">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-orange-500 to-rose-600 text-white grid place-items-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FeatureIcon icon={feature.icon} />
                </div>
                <h3 className="text-base font-bold text-ink-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Searchmetric Deep Section */}
      <section className="section bg-slate-50">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto">
            <div className="badge bg-gradient-to-r from-orange-500 to-rose-600 text-white ring-0 mb-6">Why Searchmetric</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-10">
              Why Local Businesses in Mumbai Choose Searchmetric for <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-600">Lead Generation</span>
            </h2>
            <div className="grid lg:grid-cols-2 gap-8 text-slate-600 leading-relaxed">
              <div className="space-y-5">
                <p>There are hundreds of digital marketing agencies in Mumbai claiming to run lead ads. Most of them set up a basic campaign, charge a management fee, and leave you staring at a dashboard you don&apos;t understand. At Searchmetric, we do things differently.</p>
                <p>We start every engagement with a deep understanding of your business, your ideal customer, and your local market. Whether you run a clinic in Mira Road, a coaching institute in Thane, or an e-commerce store targeting customers across India — we build a campaign strategy that speaks directly to your audience, in their language, at the right time, on the right platform.</p>
                <p>Our <strong className="text-ink-900">Instagram lead ads and Facebook lead ads</strong> are designed to capture attention instantly and make it effortless for interested customers to reach you. We build mobile-optimised lead forms that load in seconds and ask only what&apos;s necessary — because every extra field costs you a lead.</p>
              </div>
              <div className="space-y-5">
                <p>On <strong className="text-ink-900">Google lead ads</strong>, we target high-intent search queries — people actively typing phrases like &quot;best plumber near me&quot; or &quot;digital marketing course in Mumbai&quot; — so your ad appears exactly when they&apos;re ready to take action.</p>
                <p>We believe in complete transparency. Every month, you receive a detailed performance report in plain language — no jargon, no fluff. You&apos;ll see exactly how many leads came in, what each lead cost, which platform performed best, and what we&apos;re doing next to improve results.</p>
                <p>And unlike many agencies that lock you into 6 or 12-month contracts, Searchmetric operates on flexible monthly plans. We earn your business every month by delivering results — not by holding you to a long-term commitment.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-orange-500 to-rose-600 text-white ring-0 mb-4">Our Process</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From Zero to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-600">Leads in Your Inbox</span>
            </h2>
            <p className="text-slate-600">We get your campaigns live quickly without the endless back-and-forth that wastes your time.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadAdsService.process.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-orange-500 to-rose-600 text-white grid place-items-center text-3xl font-bold mx-auto mb-5">
                  {step.step}
                </div>
                {i < leadAdsService.process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+48px)] right-[calc(-50%+48px)] h-px bg-gradient-to-r from-orange-200 to-rose-200" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-slate-50">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-orange-500 to-rose-600 text-white ring-0 mb-4">Client Results</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Real Businesses, Real Leads</h2>
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

      {/* Pricing */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-orange-500 to-rose-600 text-white ring-0 mb-4">Transparent Pricing</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Simple Plans. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-rose-600">No Hidden Charges.</span>
            </h2>
            <p className="text-slate-600">All plans include full campaign setup, creative design, and ongoing optimisation. No surprises — ever.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {leadAdsService.packages.map((pkg, i) => (
              <div key={i} className={`card card-pad relative transition-all ${selectedPackage === i ? "ring-2 ring-orange-500 shadow-xl shadow-orange-100" : "hover:shadow-lg"} ${pkg.popular ? "border-2 border-orange-500" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-orange-500 to-rose-600 text-white text-sm font-semibold shadow-lg">Most Popular</span>
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
                    pkg.popular ? "bg-gradient-to-r from-orange-500 to-rose-600 text-white hover:shadow-lg" : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-6">* Ad spend is billed separately to the platform (Facebook/Google). All plans include 30-day satisfaction guarantee.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-slate-50">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-orange-500 to-rose-600 text-white ring-0 mb-4">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Honest Answers About Lead Generation Ads</h2>
            <p className="text-slate-600">No jargon, no vague promises. Just straight answers about how lead generation ads work for Indian businesses.</p>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {leadAdsService.faqs.map((faq, i) => (
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
            <div className="p-8 md:p-14 bg-gradient-to-r from-rose-900 via-slate-900 to-slate-800 text-white">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-2xl md:text-3xl font-bold mb-4">Ready to Turn Your Ad Budget Into Real Leads?</div>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Book a free 30-minute strategy call. We&apos;ll review your current ads, identify exactly what&apos;s wasting your budget, and show you a clear plan to fix it — completely free, no obligation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="btn-primary !bg-white !text-slate-900 hover:!bg-slate-100 inline-flex items-center gap-2">
                      Book Free Strategy Call <ArrowRight size={18} />
                    </Link>
                    <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all font-semibold text-sm">
                      <Phone size={16} /> {contact.phone}
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Clock size={22} />, label: "30 Min Free Call" },
                    { icon: <BarChart2 size={22} />, label: "Full Ad Audit" },
                    { icon: <Target size={22} />, label: "Strategy Plan" },
                    { icon: <Shield size={22} />, label: "No Obligation" },
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
