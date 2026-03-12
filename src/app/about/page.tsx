"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Target, Users, Award, TrendingUp, Heart, Globe,
  Shield, Clock, CheckCircle, ArrowRight, Star,
  MessageCircle, MapPin, Phone, Mail, Zap, Quote,
  ChevronRight, Building2, Sparkles
} from "lucide-react";
import { contact as contactDetails } from "@/content/siteCopy";

const values = [
  {
    icon: <Target size={22} />,
    title: "Results, Not Reports",
    description: "We care about the number of calls your phone rings, not the size of the slide deck we send you.",
    color: "from-orange-500 to-amber-500",
    bg: "bg-orange-50",
    textColor: "text-orange-600",
  },
  {
    icon: <Shield size={22} />,
    title: "Radical Transparency",
    description: "You'll always know where your money is going and exactly what it's bringing back. No smoke, no mirrors.",
    color: "from-blue-500 to-indigo-500",
    bg: "bg-blue-50",
    textColor: "text-blue-600",
  },
  {
    icon: <Heart size={22} />,
    title: "Your Business, Our Mission",
    description: "We treat your marketing budget like it's our own. Because when you grow, we grow.",
    color: "from-pink-500 to-rose-500",
    bg: "bg-pink-50",
    textColor: "text-pink-600",
  },
  {
    icon: <Zap size={22} />,
    title: "Move Fast, Learn Faster",
    description: "When Google updates its algorithm or Meta changes its ad system, we adapt immediately — not in three months.",
    color: "from-purple-500 to-violet-500",
    bg: "bg-purple-50",
    textColor: "text-purple-600",
  },
];

// Team: Add your real team members here. Placeholder removed to stay honest.
const team: { name: string; role: string; description: string; specialties: string[]; image: string }[] = [];

const milestones = [
  { year: "2024", title: "Searchmetric Founded", desc: "Started with a clear mission — bring honest, result-focused digital marketing to Seemanchal businesses who had been ignored or overcharged by bigger agencies.", clients: "Early clients" },
  { year: "2025", title: "First Clients, Real Results", desc: "Helped TechMinds Academy, Galaxy Documents, Mobimerz, A.S.R Enterprises and others rank higher on Google and grow their online presence.", clients: "Growing" },
  { year: "2026", title: "Expanding Across Seemanchal", desc: "Now actively serving businesses across Katihar, Purnea, Kishanganj, Barsoi, Dalkhola, and the wider Seemanchal-Bihar region.", clients: "Active & growing" },
];

const certifications = [
  "Google Ads Certified",
  "Google Analytics 4 Certified",
  "Meta Blueprint Certified",
  "HubSpot Content Marketing Certified",
  "Local SEO Specialist",
];

export default function AboutPage() {
  const [activeTab, setActiveTab] = useState<"story" | "team" | "journey">("story");

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 md:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute top-0 -right-4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
          <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-15" />
        </div>

        <div className="container-pad relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-6">
              <div className="flex gap-0.5">{[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}</div>
              <span className="text-sm font-semibold">Serving Businesses Across Seemanchal Bihar</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white leading-tight">
              We&apos;re the Agency that <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-fuchsia-400 to-pink-400">Actually Delivers</span>
            </h1>

            <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
              Not every agency will tell you when something isn&apos;t working. We will. Because we&apos;d rather lose a bad-fit client than keep one who isn&apos;t growing.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              {[
                { value: "2024", label: "Founded" },
                { value: "5+", label: "Clients Served" },
                { value: "Seemanchal", label: "Primary Market" },
                { value: "Bihar", label: "Home State" },
              ].map((stat, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-xl border border-white/20 rounded-2xl px-7 py-4 text-center min-w-[110px]">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-slate-300 mt-1">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Honest Intro */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="container-pad">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-start gap-5">
              <Quote size={40} className="text-brand-200 flex-shrink-0 mt-1" />
              <div>
                <p className="text-2xl md:text-3xl font-semibold text-ink-900 leading-relaxed">
                  &ldquo;We started Searchmetric because we were tired of watching local businesses spend good money on digital marketing agencies that sent beautiful reports full of numbers that didn&apos;t mean anything.&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3">
                  <div className="h-12 w-12 rounded-full overflow-hidden relative">
                    <Image src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&q=80" alt="Jabeen Fatima" fill className="object-cover" sizes="48px" />
                  </div>
                  <div>
                    <div className="font-bold text-ink-900">Jabeen Fatima</div>
                    <div className="text-sm text-slate-500">Founder & CEO, Searchmetric</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="section bg-gradient-to-b from-slate-50 to-white">
        <div className="container-pad">
          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex bg-slate-100 rounded-2xl p-1.5 gap-1">
              {(["story", "team", "journey"] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 capitalize ${
                    activeTab === tab
                      ? "bg-white text-ink-900 shadow-md"
                      : "text-slate-500 hover:text-slate-700"
                  }`}
                >
                  {tab === "story" ? "Our Story" : tab === "team" ? "The Team" : "Our Journey"}
                </button>
              ))}
            </div>
          </div>

          {/* Story Tab */}
          {activeTab === "story" && (
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-5">Our Story</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  A New Agency for <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">Seemanchal Businesses</span>
                </h2>
                <div className="space-y-5 text-slate-600 leading-relaxed">
                  <p>
                    Searchmetric was born in 2018 out of frustration. Our founder Jabeen had spent years watching local businesses — restaurants, clinics, coaching institutes, salons — pour money into marketing agencies that delivered nothing more than confusing dashboards and excuses.
                  </p>
                  <p>
                    We started Searchmetric with a simple observation: businesses in Katihar, Purnea, Kishanganj, and across Seemanchal Bihar are working hard every day — but almost none of them can be found on Google. Bigger agencies from Mumbai or Delhi don&apos;t care about small Bihar towns. So we decided to.
                  </p>
                  <p>
                    We&apos;re a small, focused team — and we&apos;re honest about that. We don&apos;t have 25 people in a Mumbai high-rise. What we do have is real skill, genuine commitment, and a deep understanding of how local businesses in Bihar can win on Google. Every client we take on, we treat like our first.
                  </p>
                </div>

                <div className="grid sm:grid-cols-2 gap-5 mt-8">
                  {[
                    { icon: <Target size={20} className="text-brand-600" />, title: "Our Mission", desc: "Make digital marketing honest, accessible, and genuinely effective for every Indian business.", bg: "bg-brand-50" },
                    { icon: <Globe size={20} className="text-fuchsia-600" />, title: "Our Vision", desc: "Be the most trusted growth partner for 10,000+ Indian businesses by 2030.", bg: "bg-fuchsia-50" },
                  ].map((item, i) => (
                    <div key={i} className={`${item.bg} p-6 rounded-2xl border border-white`}>
                      <div className="mb-3">{item.icon}</div>
                      <h3 className="font-bold text-base mb-2 text-ink-900">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="relative">
                  <div className="aspect-video rounded-3xl overflow-hidden relative">
                    <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                      alt="Searchmetric team working together" fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent" />
                  </div>
                  <div className="absolute -bottom-5 -left-5 bg-white p-5 rounded-2xl shadow-xl border border-slate-100">
                    <div className="text-3xl font-bold text-brand-700">5+</div>
                    <div className="text-sm text-slate-600">Real Clients Helped</div>
                  </div>
                  <div className="absolute -top-5 -right-5 bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white p-5 rounded-2xl shadow-xl">
                    <div className="text-3xl font-bold">2026</div>
                    <div className="text-sm opacity-90">Operating in Seemanchal</div>
                  </div>
                </div>

                {/* Values */}
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {values.map((v, i) => (
                    <div key={i} className="card card-pad">
                      <div className={`h-11 w-11 rounded-xl bg-gradient-to-br ${v.color} text-white grid place-items-center mb-3`}>{v.icon}</div>
                      <h3 className="font-bold text-sm text-ink-900 mb-1">{v.title}</h3>
                      <p className="text-slate-500 text-xs leading-relaxed">{v.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Team Tab */}
          {activeTab === "team" && (
            <div>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">The Team</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Real People. Real Expertise.</h2>
                <p className="text-lg text-slate-600">Every person on our team is certified, experienced, and genuinely invested in your results.</p>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                {team.map((member, i) => (
                  <div key={i} className="card overflow-hidden group">
                    <div className="flex gap-6 p-6">
                      <div className="h-20 w-20 rounded-2xl overflow-hidden relative flex-shrink-0">
                        <Image src={member.image} alt={`${member.name} - ${member.role} at Searchmetric`}
                          fill className="object-cover group-hover:scale-105 transition-transform duration-500" sizes="80px" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-bold text-lg text-ink-900">{member.name}</h3>
                        <div className="text-sm text-brand-600 font-semibold mb-3">{member.role}</div>
                        <div className="flex flex-wrap gap-1.5">
                          {member.specialties.map((s, idx) => (
                            <span key={idx} className="text-xs px-2 py-1 rounded-full bg-slate-100 text-slate-600">{s}</span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="px-6 pb-6">
                      <p className="text-slate-600 text-sm leading-relaxed">{member.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Certifications */}
              <div className="mt-12 card card-pad bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <Award size={28} />
                      <h3 className="text-xl font-bold">Industry Certifications</h3>
                    </div>
                    <p className="text-white/80 text-sm leading-relaxed">Our team holds certifications from the biggest names in digital marketing — so you know you&apos;re working with people who actually know what they&apos;re doing.</p>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {certifications.map((cert, i) => (
                      <div key={i} className="flex items-center gap-2 bg-white/10 rounded-xl p-3">
                        <CheckCircle size={16} className="text-emerald-300 flex-shrink-0" />
                        <span className="text-sm font-medium">{cert}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Journey Tab */}
          {activeTab === "journey" && (
            <div>
              <div className="text-center max-w-2xl mx-auto mb-12">
                <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-4">Our Journey</div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Six Years of Honest Work</h2>
                <p className="text-lg text-slate-600">Here&apos;s how we grew from three people and a dream to the agency we are today.</p>
              </div>

              <div className="max-w-3xl mx-auto">
                <div className="relative">
                  <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-brand-600 via-fuchsia-500 to-pink-500 hidden md:block" />
                  <div className="space-y-8">
                    {milestones.map((m, i) => (
                      <div key={i} className="relative flex gap-6 md:pl-20">
                        <div className="absolute left-5 top-6 h-6 w-6 rounded-full bg-gradient-to-r from-brand-600 to-fuchsia-600 border-4 border-white shadow-md hidden md:block" />
                        <div className="card card-pad flex-1 hover:shadow-lg transition-shadow">
                          <div className="flex items-start justify-between gap-4 mb-2">
                            <div className="text-2xl font-bold text-brand-600">{m.year}</div>
                            <span className="text-xs px-3 py-1 rounded-full bg-brand-50 text-brand-700 font-semibold flex-shrink-0">{m.clients}</span>
                          </div>
                          <h3 className="font-bold text-lg text-ink-900 mb-2">{m.title}</h3>
                          <p className="text-slate-600 text-sm leading-relaxed">{m.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Why Different */}
      <section className="section bg-white">
        <div className="container-pad">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0 mb-5">Why Choose Us</div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                We&apos;re Different in the Ways <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">That Actually Matter</span>
              </h2>
              <p className="text-slate-600 mb-8 leading-relaxed">
                There are many digital marketing agencies in India. Most of them will take your money and send you a report. We take your goals seriously and work backwards from real results.
              </p>
              <div className="space-y-5">
                {[
                  { icon: <MessageCircle size={18} className="text-brand-600" />, title: "We Speak Normal English", desc: "No jargon. No confusing dashboards. We explain everything in terms that actually make sense to you." },
                  { icon: <Clock size={18} className="text-fuchsia-600" />, title: "First Results in 30 Days", desc: "You start seeing movement within the first month — not promises about 'long-term strategy' that never quite arrives." },
                  { icon: <MapPin size={18} className="text-emerald-600" />, title: "India-First Thinking", desc: "Our strategies are built for Indian consumers, Indian platforms, and the Indian market — not recycled global playbooks." },
                  { icon: <TrendingUp size={18} className="text-amber-600" />, title: "We're Paid to Grow You", desc: "Our entire model works because our clients keep coming back. That only happens when we keep delivering results." },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="h-11 w-11 rounded-xl bg-slate-50 border border-slate-100 grid place-items-center flex-shrink-0">{item.icon}</div>
                    <div>
                      <h3 className="font-bold text-base text-ink-900 mb-1">{item.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="card card-pad bg-gradient-to-br from-slate-900 to-slate-800 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Sparkles size={24} className="text-amber-400" />
                <h3 className="text-xl font-bold">What You Get with Searchmetric</h3>
              </div>
              <div className="space-y-4">
                {[
                  "A dedicated account manager who knows your business inside out",
                  "Monthly strategy calls — not just report emails",
                  "24-hour response time on all queries",
                  "No lock-in contracts. We earn your business every month.",
                  "Complete transparency on where every rupee goes",
                  "Honest feedback, even when it's not what you want to hear",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <CheckCircle size={18} className="text-emerald-400 flex-shrink-0 mt-0.5" />
                    <span className="text-slate-300 text-sm leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {["photo-1494790108755-2616b612b786","photo-1494790108755-2616b612b786","photo-1472099645785-5658abf4ff4e","photo-1487412720507-e7ab37603c6f"].map((id, i) => (
                      <div key={i} className="h-9 w-9 rounded-full border-2 border-slate-800 overflow-hidden relative">
                        <Image src={`https://images.unsplash.com/${id}?w=100&q=80`} alt="Team member" fill className="object-cover" sizes="36px" />
                      </div>
                    ))}
                  </div>
                  <div>
                    <div className="text-sm font-semibold">Small & focused team</div>
                    <div className="text-xs text-slate-400">ready to work on your growth</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container-pad">
          <div className="card overflow-hidden">
            <div className="p-8 md:p-14 bg-gradient-to-r from-slate-900 to-slate-800 text-white text-center">
              <div className="max-w-3xl mx-auto">
                <div className="badge bg-white/10 text-white ring-0 mb-6 inline-flex">
                  <Building2 size={14} /> Hospital Road, Purab Chowk, Baisi, Purnea
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-5">
                  Ready to Work with an Agency That Actually Cares?
                </h2>
                <p className="text-slate-300 mb-8 text-lg leading-relaxed">
                  Book a free 30-minute call with our team. We&apos;ll look at your current digital presence, tell you honestly what&apos;s working and what isn&apos;t, and share a clear path forward — no commitment required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/contact" className="btn-primary !bg-white !text-slate-900 hover:!bg-slate-100 inline-flex items-center gap-2">
                    Book Free Consultation <ArrowRight size={18} />
                  </Link>
                  <a href={contactDetails.whatsapp} target="_blank" rel="noopener noreferrer"
                    className="btn-ghost !text-white hover:!bg-white/10 inline-flex items-center gap-2">
                    <MessageCircle size={18} /> Chat on WhatsApp
                  </a>
                </div>
                <div className="flex flex-wrap justify-center gap-6 mt-10 pt-8 border-t border-white/10 text-sm">
                  <a href={contactDetails.phoneHref} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                    <Phone size={16} /> {contactDetails.phone}
                  </a>
                  <a href={contactDetails.emailHref} className="flex items-center gap-2 text-slate-300 hover:text-white transition-colors">
                    <Mail size={16} /> {contactDetails.email}
                  </a>
                  <span className="flex items-center gap-2 text-slate-400">
                    <MapPin size={16} /> Hospital Road, Purab Chowk, Baisi, Purnea, Bihar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
