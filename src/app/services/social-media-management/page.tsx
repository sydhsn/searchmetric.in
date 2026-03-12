"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Instagram, Facebook, Calendar, BarChart, Users,
  CheckCircle, ChevronRight, ArrowRight, Star, Shield,
  MessageCircle, TrendingUp, Heart, Zap, Clock, Quote,
  Play, Target, Phone
} from "lucide-react";
import { socialMediaService } from "@/content/servicesData";
import { contact } from "@/content/siteCopy";

function FeatureIcon({ icon }: { icon: string }) {
  switch (icon) {
    case "calendar": return <Calendar size={24} />;
    case "image": return <BarChart size={24} />;
    case "message-circle": return <MessageCircle size={24} />;
    case "bar-chart": return <BarChart size={24} />;
    default: return <CheckCircle size={24} />;
  }
}

const platforms = [
  { name: "Instagram", icon: <Instagram size={22} />, color: "from-pink-500 to-purple-600", note: "Feed posts, Reels, Stories, Highlights" },
  { name: "Facebook", icon: <Facebook size={22} />, color: "from-blue-500 to-blue-700", note: "Posts, Page management, Community" },
  { name: "WhatsApp", icon: <MessageCircle size={22} />, color: "from-emerald-400 to-emerald-600", note: "Business profile, broadcast lists" },
];

const testimonials = [
  { name: "Priya R.", business: "Boutique Owner, Katihar", quote: "Our Instagram following went from 200 to 4,000 in three months. More importantly, actual customers started walking in saying they found us on Instagram.", stars: 5 },
  { name: "Anil K.", business: "Restaurant, Purnea", quote: "Searchmetric doesn't just post things — they understand our business. Our engagement is through the roof and we've seen a real increase in reservations.", stars: 5 },
];

export default function SocialMediaManagementPage() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [selectedPackage, setSelectedPackage] = useState(1);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute bottom-0 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
        </div>
        <div className="container-pad relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-lg mb-6">
              <Instagram size={16} className="text-pink-400" />
              <span className="text-sm font-semibold">Social Media Management · Seemanchal Bihar</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              {socialMediaService.heroTitle}
            </h1>
            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              {socialMediaService.heroDescription}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Link href="/contact" className="btn-primary bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 inline-flex items-center gap-2 text-base px-8 py-4">
                Get Free Social Media Audit <ArrowRight size={18} />
              </Link>
              <a href={contact.whatsapp} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-white/30 text-white hover:bg-white/10 transition-all font-semibold">
                <MessageCircle size={18} /> Chat on WhatsApp
              </a>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {socialMediaService.results.map((result, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl p-4 text-center">
                  <div className="text-2xl font-bold text-white">{result.metric}</div>
                  <div className="text-xs text-slate-300 mt-1">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Platform Strip */}
      <section className="bg-white border-b border-slate-100">
        <div className="container-pad py-8">
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10">
            <span className="text-sm text-slate-400 font-medium">We manage your presence on:</span>
            {platforms.map((p, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${p.color} text-white grid place-items-center`}>{p.icon}</div>
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
              <div className="badge bg-gradient-to-r from-pink-500 to-purple-600 text-white ring-0 mb-5">What We Actually Do</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-5">
                Social Media That <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Brings Customers In</span>, Not Just Likes
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Posting beautiful pictures on Instagram is the easy part. The hard part — the part most businesses struggle with — is turning followers into actual paying customers. That&apos;s what we&apos;re here for.
                </p>
                <p>
                  {socialMediaService.description}
                </p>
                <p>
                  We don&apos;t just post and disappear. We monitor your comments, respond to DMs, engage with your community daily, and use data to refine what&apos;s working every single month.
                </p>
              </div>
              <div className="mt-7 space-y-3">
                {["Monthly content strategy and editorial calendar","High-quality visuals and copy designed for Indian audiences","Daily engagement — comments, DMs, and community building","Monthly performance review with plain-language insights"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-emerald-500 flex-shrink-0" />
                    <span className="text-slate-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="btn-primary inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600">
                  Get Free Social Media Audit <ArrowRight size={18} />
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-3xl overflow-hidden relative bg-gradient-to-br from-pink-50 to-purple-50">
                <Image src="https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80"
                  alt="Social media management and content creation for Indian businesses"
                  fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-5 rounded-2xl shadow-xl border border-slate-100">
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp size={16} className="text-emerald-500" />
                  <span className="text-xs font-semibold text-emerald-600">Avg. monthly growth</span>
                </div>
                <div className="text-3xl font-bold text-ink-900">20–40%</div>
                <div className="text-xs text-slate-500">in followers + engagement</div>
              </div>
              <div className="absolute -top-4 -left-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-3 rounded-2xl shadow-lg text-sm font-semibold">
                ✦ Content created, not recycled
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section bg-slate-50">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-pink-500 to-purple-600 text-white ring-0 mb-4">Full Management</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything Included — Nothing Hidden</h2>
            <p className="text-lg text-slate-600">From content creation to analytics, we handle every part of your social presence.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialMediaService.features.map((feature, i) => (
              <div key={i} className="card card-hover card-pad text-center group">
                <div className="h-14 w-14 rounded-xl bg-gradient-to-br from-pink-500 to-purple-600 text-white grid place-items-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <FeatureIcon icon={feature.icon} />
                </div>
                <h3 className="text-base font-bold text-ink-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-pink-500 to-purple-600 text-white ring-0 mb-4">Client Stories</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Businesses That Grew with Us</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t, i) => (
              <div key={i} className="card card-pad relative overflow-hidden">
                <div className="absolute top-4 right-4 opacity-10">
                  <Quote size={48} />
                </div>
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
      <section className="section bg-gradient-to-b from-slate-50 to-white">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-pink-500 to-purple-600 text-white ring-0 mb-4">How It Works</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              From &ldquo;We don&apos;t know what to post&rdquo; to <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">a Thriving Community</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {socialMediaService.process.map((step, i) => (
              <div key={i} className="text-center relative">
                <div className="h-20 w-20 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 text-white grid place-items-center text-3xl font-bold mx-auto mb-5">
                  {step.step}
                </div>
                {i < socialMediaService.process.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[calc(50%+48px)] right-[calc(-50%+48px)] h-px bg-gradient-to-r from-pink-300 to-purple-300" />
                )}
                <h3 className="font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="section bg-slate-50">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-pink-500 to-purple-600 text-white ring-0 mb-4">Transparent Pricing</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Plans That <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Grow With You</span>
            </h2>
            <p className="text-slate-600">No surprise fees. Cancel anytime. All plans include content creation and community management.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {socialMediaService.packages.map((pkg, i) => (
              <div key={i} className={`card card-pad relative transition-all ${selectedPackage === i ? "ring-2 ring-purple-500 shadow-xl shadow-purple-100" : "hover:shadow-lg"} ${pkg.popular ? "border-2 border-purple-500" : ""}`}>
                {pkg.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="px-4 py-1 rounded-full bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold shadow-lg">Most Popular</span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold mb-3">{pkg.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-3">
                    <span className="text-4xl font-bold text-ink-900">{pkg.price}</span>
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
                <Link href="/contact"
                  onClick={() => setSelectedPackage(i)}
                  className={`w-full py-3 rounded-xl font-semibold transition-all text-center block ${
                    pkg.popular ? "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:shadow-lg hover:shadow-purple-200" : "bg-slate-100 text-slate-800 hover:bg-slate-200"
                  }`}>
                  Get Started
                </Link>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-400 mt-6">*First month may include a one-time onboarding fee. All plans include content creation + community management.</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="badge bg-gradient-to-r from-pink-500 to-purple-600 text-white ring-0 mb-4">FAQ</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Questions We Hear All the Time</h2>
          </div>
          <div className="max-w-3xl mx-auto space-y-4">
            {socialMediaService.faqs.map((faq, i) => (
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
            <div className="p-8 md:p-14 bg-gradient-to-r from-purple-900 via-slate-900 to-slate-800 text-white">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-2xl md:text-3xl font-bold mb-4">Ready to stop guessing and start growing your social media?</div>
                  <p className="text-slate-300 mb-6 leading-relaxed">
                    Get a free social media audit. We&apos;ll review your current profiles, show you exactly what&apos;s holding you back, and put together a content strategy that makes sense for your business.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Link href="/contact" className="btn-primary !bg-white !text-slate-900 hover:!bg-slate-100 inline-flex items-center gap-2">
                      Get Free Social Media Audit <ArrowRight size={18} />
                    </Link>
                    <a href={contact.phoneHref} className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-white/20 text-white hover:bg-white/10 transition-all font-semibold text-sm">
                      <Phone size={16} /> {contact.phone}
                    </a>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { icon: <Instagram size={22} />, label: "Instagram Management" },
                    { icon: <Facebook size={22} />, label: "Facebook Management" },
                    { icon: <BarChart size={22} />, label: "Monthly Analytics" },
                    { icon: <Users size={22} />, label: "Community Growth" },
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
