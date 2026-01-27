"use client";

import Image from "next/image";
import { FC, ReactNode, useEffect, useMemo, useState } from "react";
import {
  ArrowRight,
  Award,
  BookOpen,
  CheckCircle,
  ChevronDown,
  Clock,
  Edit3,
  Facebook,
  FileText,
  Globe,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Package,
  Phone,
  Plane,
  Search,
  Send,
  Shield,
  ShoppingCart,
  Star,
  Target,
  TrendingUp,
  Twitter,
  Users,
  X,
  Youtube,
  Zap,
} from "lucide-react";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

// ...existing code...
import type { NavItem, ContactFormData } from "../types/nav";

/* -----------------------------
   Page
------------------------------ */
export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <PlatformMarketing />
        <ContentServices />
        <ChallengesSection />
        <CompaniesWorkedWith />
        <SpecialCustomizedServices />
        <BenefitsForUser />
        <Introductions />
        <Comparison />
        <GrowthGraph />
        <SocialClients />
        <Features />
        <Testimonials />
        <FAQs />
        <StrongCTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

/* -----------------------------
   Header (Premium Floating)
------------------------------ */
const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const servicesSubmenu = useMemo(
    () => [
      { name: "Social Media Management", href: "#services" },
      { name: "Local SEO & Google Maps", href: "#services" },
      { name: "Lead Ads (Meta & Google)", href: "#services" },
    ],
    []
  );

  const navItems: NavItem[] = useMemo(
    () => [
      { name: "Home", href: "#top" },
      { name: "Services", href: "#services", submenu: servicesSubmenu },
      { name: "Case Studies", href: "#cases" },
      { name: "Blog", href: "#blog" },
      { name: "Contact", href: "#contact" },
    ],
    [servicesSubmenu]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header id="top" className="sticky top-0 z-50">
      {/* Top strip */}
      <div className="bg-ink-900 text-white/90 w-full">
        <div className="container-wide max-w-full px-6 lg:px-12 flex items-center justify-between py-2 text-xs md:text-sm">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-2">
              <Phone size={14} className="opacity-90" /> +91 98765 43210
            </span>
            <span className="hidden md:inline-flex items-center gap-2">
              <Mail size={14} className="opacity-90" /> info@techmindsolutions.com
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="inline-flex items-center gap-2 opacity-90">
              <MapPin size={14} /> Delhi • Mumbai • Bangalore
            </span>
            <a className="btn-secondary !py-2 !px-4" href="#contact">
              Free Audit <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>

      {/* Main floating nav */}
      <div className={`bg-white/95 backdrop-blur-sm border-b border-slate-200 transition-all duration-300`}>
        <div className="container-wide max-w-full px-6 lg:px-12">
          <div
            className={[
              "flex items-center justify-between",
              "bg-transparent",
              "px-4 py-3 md:px-6 md:py-4",
            ].join(" ")}
          >
            {/* Brand */}
            <a href="#top" className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-brand-600 text-white grid place-items-center font-bold">
                TM
              </div>
              <div className="leading-tight">
                <div className="text-base md:text-lg font-semibold text-ink-900">
                  TechMinds
                </div>
                <div className="text-xs text-slate-500">Digital Solutions</div>
              </div>
            </a>

            {/* Desktop */}
            <div className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <div key={item.name} className="relative group">
                  <a
                    href={item.href}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-ink-900/90 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-brand-600 hover:to-fuchsia-600 transition-all"
                  >
                    {item.name}
                    {item.submenu && <ChevronDown size={16} className="opacity-70 group-hover:opacity-100 group-hover:text-brand-600 transition-all" />}
                  </a>

                  <span className="absolute -bottom-2 left-0 h-[2px] w-0 bg-gradient-to-r from-brand-600 to-fuchsia-600 transition-all group-hover:w-full" />

                  {item.submenu && (
                    <div className="absolute left-0 top-full mt-4 w-72 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all">
                      <div className="card overflow-hidden">
                        {item.submenu.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block px-4 py-3 text-sm text-slate-700 hover:bg-gradient-to-r hover:from-brand-50 hover:to-fuchsia-50 hover:text-brand-700 hover:pl-6 transition-all"
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}

              <a href="#contact" className="btn-primary">
                Get Free Proposal <ArrowRight size={18} />
              </a>
            </div>

            {/* Mobile */}
            <button
              className="lg:hidden btn-ghost !px-3"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

          {/* Mobile dropdown */}
          {open && (
            <div className="lg:hidden mt-3 card card-pad">
              <div className="space-y-2">
                {navItems.map((item) => (
                  <div key={item.name} className="border-b border-slate-100 pb-2">
                    <a
                      href={item.href}
                      className="block py-2 font-semibold text-ink-900"
                      onClick={() => setOpen(false)}
                    >
                      {item.name}
                    </a>

                    {item.submenu && (
                      <div className="pl-4 pb-2 space-y-1">
                        {item.submenu.map((sub) => (
                          <a
                            key={sub.name}
                            href={sub.href}
                            className="block py-1 text-sm text-slate-600"
                            onClick={() => setOpen(false)}
                          >
                            {sub.name}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>

              <a href="#contact" className="btn-primary w-full mt-4">
                Get Free Proposal <ArrowRight size={18} />
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

/* -----------------------------
   Hero
------------------------------ */
const Hero: FC = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen flex items-center">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Animated gradient orbs */}
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000" />
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000" />
        <div className="absolute bottom-0 right-20 w-96 h-96 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-6000" />
        
        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `float ${5 + Math.random() * 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-slate-900/50 to-slate-900" />
      </div>

      <div className="container-pad pt-10 pb-16 md:pt-10 md:pb-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white shadow-lg">
              <div className="flex gap-1">
                {[1,2,3,4,5].map(i => <Star key={i} size={14} className="fill-amber-400 text-amber-400" />)}
              </div>
              <span className="text-sm font-semibold">Trusted by 500+ Businesses</span>
            </div>

            <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
              <span className="text-white">Grow your business with </span>
              <span className="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-brand-400 via-fuchsia-400 to-pink-400 animate-gradient">
                SEO &amp; Social Media
              </span>
              <span className="text-white block mt-2">— made simple.</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-slate-300 leading-relaxed max-w-xl">
              Reach more local customers with easy-to-understand SEO, digital marketing, and Instagram &amp; Facebook strategies. Simple plans, clear results.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#contact" className="group relative inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white font-semibold rounded-xl shadow-2xl hover:shadow-brand-600/50 transition-all overflow-hidden">
                <span className="relative z-10 flex items-center gap-2">
                  Get Free Proposal <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-brand-700 to-fuchsia-700 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a href="#cases" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-xl border border-white/20 text-white font-semibold rounded-xl hover:bg-white/20 transition-all">
                View Case Studies <TrendingUp size={18} />
              </a>
            </div>

            <div className="mt-10 grid grid-cols-3 gap-4">
              {[
                { icon: <MapPin size={16} />, label: "Maps visibility" },
                { icon: <MessageCircle size={16} />, label: "More DMs" },
                { icon: <Shield size={16} />, label: "Transparent" },
              ].map((i) => (
                <div key={i.label} className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white/5 backdrop-blur-xl border border-white/10 text-slate-300 text-sm">
                  <span className="text-brand-400">{i.icon}</span>
                  <span className="font-medium">{i.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative lg:block hidden">
            {/* Floating dashboard mockup */}
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-brand-600/30 to-fuchsia-600/30 blur-3xl" />
              
              <div className="relative bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20 shadow-2xl overflow-hidden transform hover:scale-105 transition-all duration-500">
                <div className="h-72 overflow-hidden relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80" 
                      alt="Digital marketing analytics dashboard showing growth metrics" 
                      fill
                      className="object-cover opacity-90"
                    />
                  </div>
                <div className="p-6 border-t border-white/10">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <div className="text-sm font-semibold text-white">Growth Snapshot</div>
                      <div className="text-xs text-slate-400">Live performance</div>
                    </div>
                    <div className="px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-xs font-bold flex items-center gap-1">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Live
                    </div>
                  </div>

                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { k: "Leads", v: "+128%", color: "brand" },
                      { k: "Calls", v: "+64%", color: "emerald" },
                      { k: "Rank", v: "Top 3", color: "amber" },
                    ].map((s) => (
                      <div key={s.k} className="rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 p-4">
                        <div className="text-xs text-slate-400">{s.k}</div>
                        <div className={`text-xl font-bold mt-1 text-${s.color}-400`}>{s.v}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div className="absolute -top-5 -left-5 px-4 py-3 rounded-2xl bg-white shadow-2xl">
                <div className="text-xs text-slate-500">Client Rating</div>
                <div className="text-lg font-semibold text-ink-900 flex items-center gap-2 mt-1">
                  4.9 <Star size={16} className="text-amber-500 fill-amber-500" />
                </div>
              </div>

              {/* Floating stats */}
              <div className="absolute -bottom-5 -right-5 px-6 py-4 rounded-2xl bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white shadow-2xl">
                <div className="text-xs opacity-90">Monthly Growth</div>
                <div className="text-2xl font-bold flex items-center gap-2 mt-1">
                  <TrendingUp size={20} /> +87%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 80C1200 80 1320 70 1380 65L1440 60V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white" fillOpacity="0.1"/>
        </svg>
      </div>
    </section>
  );
};

/* -----------------------------
   Reusable UI
------------------------------ */
const ServiceCard: FC<{
  title: string;
  desc: string;
  icon: ReactNode;
  features: string[];
}> = ({ title, desc, icon, features }) => {
  return (
    <div className="card card-hover overflow-hidden">
      <div className="p-6 flex items-start justify-between gap-4 border-b border-slate-100">
        <div>
          <h3 className="text-lg font-semibold text-ink-900">{title}</h3>
          <p className="text-sm text-slate-600 mt-2">{desc}</p>
        </div>
        <div className="h-11 w-11 rounded-xl bg-brand-50 ring-1 ring-brand-100 flex items-center justify-center text-brand-700">
          {icon}
        </div>
      </div>

      <div className="p-6">
        <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
          {features.slice(0, 4).map((f) => (
            <li key={f} className="flex items-center gap-2">
              <CheckCircle size={16} className="text-emerald-600" />
              <span className="font-medium">{f}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex items-center justify-between">
          <a
            href="#contact"
            className="text-sm font-semibold text-brand-700 hover:text-brand-800 inline-flex items-center gap-2"
          >
            Learn more <ArrowRight size={16} />
          </a>
          <a href="#contact" className="btn-secondary !py-2 !px-4">
            Get quote
          </a>
        </div>
      </div>
    </div>
  );
};

/* -----------------------------
   Services
------------------------------ */
const Services: FC = () => {
  const services = [
    {
      title: "Social Media Management",
      desc: "Beautiful creatives, consistent posting, and community replies that drive leads.",
      icon: <Instagram size={20} />,
      features: ["Content calendar", "Design & captions", "Daily replies", "Monthly reporting"],
    },
    {
      title: "Local SEO & Google Maps",
      desc: "Improve visibility near your area and turn local searches into calls.",
      icon: <Search size={20} />,
      features: ["GBP setup", "Map ranking", "Reviews guidance", "NAP + citations"],
    },
    {
      title: "Lead Ads (Meta & Google)",
      desc: "Budget-smart campaigns designed for forms, calls, and messages.",
      icon: <Target size={20} />,
      features: ["Lead form setup", "Tracking", "Targeting", "Weekly review"],
    },
  ];

  const stats = [
    { value: "300+", label: "Websites Developed", icon: <Globe size={18} /> },
    { value: "95%", label: "Client Retention", icon: <Users size={18} /> },
    { value: "50M+", label: "Impressions Managed", icon: <TrendingUp size={18} /> },
    { value: "Top 3", label: "Maps Wins", icon: <MapPin size={18} /> },
  ];

  return (
    <section id="services" className="section bg-slate-50">
      <div className="container-pad">
        <div className="section-head">
          <div className="section-kicker">
            <Zap size={16} /> Our Services
          </div>
          <h2 className="h2">Premium digital growth for Indian businesses</h2>
          <p className="section-desc">
            One consistent system across creative, SEO, and performance—so it looks branded and converts better.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {services.map((s) => (
            <ServiceCard
              key={s.title}
              title={s.title}
              desc={s.desc}
              icon={s.icon}
              features={s.features}
            />
          ))}
        </div>

        <div className="mt-10 card overflow-hidden">
          <div className="p-8 md:p-10 bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((st) => (
                <div key={st.label} className="text-center">
                  <div className="mx-auto mb-3 h-10 w-10 rounded-xl bg-white/15 grid place-items-center">
                    {st.icon}
                  </div>
                  <div className="text-2xl font-semibold">{st.value}</div>
                  <div className="text-xs opacity-90 mt-1">{st.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -----------------------------
   Platform Marketing
------------------------------ */
const PlatformMarketing: FC = () => {
  const cards = [
    {
      platform: "Instagram Marketing",
      icon: <Instagram size={18} className="text-pink-600" />,
      highlights: ["Reels & Stories", "Hashtag strategy", "Community replies", "Lead ads"],
      image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
    },
    {
      platform: "Facebook Marketing",
      icon: <Facebook size={18} className="text-blue-600" />,
      highlights: ["Page growth", "Groups outreach", "Messenger leads", "Lookalike ads"],
      image: "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?w=600&q=80",
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-slate-50">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center">
            <Instagram size={16} /> Social Platforms
          </div>
          <h2 className="h2 mt-5">Grow on Instagram and Facebook</h2>
          <p className="section-desc">Beautiful creatives, smart posting times, and clean reporting.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {cards.map((c) => (
            <div key={c.platform} className="card card-hover overflow-hidden">
              <div className="h-48 overflow-hidden relative">
                <Image 
                  src={c.image} 
                  alt={`${c.platform} social media marketing services`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-slate-50 ring-1 ring-slate-200 grid place-items-center">
                    {c.icon}
                  </div>
                  <div className="font-semibold text-ink-900">{c.platform}</div>
                </div>
                <span className="badge-neutral !px-3 !py-1 text-xs">Popular</span>
              </div>

              <div className="p-6">
                <ul className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                  {c.highlights.map((h) => (
                    <li key={h} className="flex items-center gap-2">
                      <CheckCircle size={16} className="text-emerald-600" />
                      <span className="font-medium">{h}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <a href="#contact" className="btn-primary">
                    See packages <ArrowRight size={18} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -----------------------------
   Content Services
------------------------------ */
const ContentServices: FC = () => {
  const items = [
    {
      title: "Content Writer",
      icon: <Edit3 size={18} className="text-fuchsia-600" />,
      desc: "Clear and simple content for websites, ads, and captions.",
      bullets: ["Brand voice guide", "Short-form captions", "Ad copy variants", "Proofreading"],
    },
    {
      title: "Blog Writer (SEO)",
      icon: <FileText size={18} className="text-emerald-600" />,
      desc: "Search-friendly blogs that educate and rank on Google.",
      bullets: ["Keyword plan", "Outline + headings", "Internal linking", "Meta tags"],
    },
  ];

  return (
    <section className="section bg-slate-50">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center">
            <FileText size={16} /> Content & Writing
          </div>
          <h2 className="h2 mt-5">Words that attract and convert</h2>
          <p className="section-desc">Easy-to-read language. Strong SEO basics. Ready to publish.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {items.map((it) => (
            <div key={it.title} className="card card-hover card-pad">
              <div className="flex items-center gap-3">
                <div className="h-11 w-11 rounded-xl bg-slate-50 ring-1 ring-slate-200 grid place-items-center">
                  {it.icon}
                </div>
                <div className="text-lg font-semibold text-ink-900">{it.title}</div>
              </div>

              <p className="mt-4 text-slate-600">{it.desc}</p>

              <ul className="mt-5 grid grid-cols-2 gap-2 text-sm text-slate-700">
                {it.bullets.map((b) => (
                  <li key={b} className="flex items-center gap-2">
                    <CheckCircle size={16} className="text-emerald-600" />
                    <span className="font-medium">{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7">
                <a href="#contact" className="btn-primary">
                  Request Samples <ArrowRight size={18} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -----------------------------
   Challenges
------------------------------ */
const ChallengesSection: FC = () => {
  const challenges = [
    { 
      title: "Not enough calls", 
      desc: "People visit but don't call. We fix that.",
      icon: <Phone size={22} />,
      gradient: "from-pink-600 to-rose-600",
      bgGradient: "from-pink-50 to-rose-50"
    },
    { 
      title: "Low Google visibility", 
      desc: "Your business doesn't show up near you.",
      icon: <Search size={22} />,
      gradient: "from-red-600 to-orange-600",
      bgGradient: "from-red-50 to-orange-50"
    },
    { 
      title: "Weak social engagement", 
      desc: "Likes without real conversations or leads.",
      icon: <MessageCircle size={22} />,
      gradient: "from-orange-600 to-amber-600",
      bgGradient: "from-orange-50 to-amber-50"
    },
    { 
      title: "No tracking or reports", 
      desc: "Hard to know what's working. We simplify.",
      icon: <TrendingUp size={22} />,
      gradient: "from-purple-600 to-violet-600",
      bgGradient: "from-purple-50 to-violet-50"
    },
    { 
      title: "Random posting", 
      desc: "No plan. We bring a simple monthly calendar.",
      icon: <Target size={22} />,
      gradient: "from-blue-600 to-cyan-600",
      bgGradient: "from-blue-50 to-cyan-50"
    },
    { 
      title: "Wasted ad spend", 
      desc: "Money spent without leads. We focus on ROI.",
      icon: <Zap size={22} />,
      gradient: "from-emerald-600 to-teal-600",
      bgGradient: "from-emerald-50 to-teal-50"
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-red-200 blur-3xl opacity-15" />
      <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-orange-200 blur-3xl opacity-15" />
      <div className="container-pad relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-red-600 to-orange-600 text-white ring-0">
            <Target size={16} /> Facing these issues?
          </div>
          <h2 className="h2 mt-5">
            We solve common <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-orange-600">growth blockers</span>
          </h2>
          <p className="section-desc">Short, clear points so you can quickly see the fit.</p>
        </div>

        {/* Responsive grid for challenges */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {challenges.map((c, idx) => (
            <div key={c.title} className="group relative">
              <div className={`card overflow-hidden border-l-4 border-transparent hover:border-red-600 transition-all h-full`}> 
                <div className={`absolute inset-0 bg-gradient-to-r ${c.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                <div className="relative card-pad flex flex-col items-center gap-4 h-full">
                  {/* Problem Indicator */}
                  <div className="relative h-14 w-14 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 grid place-items-center font-bold text-2xl shadow-md transform group-hover:scale-110 transition-all duration-300">
                    <div className={`absolute -inset-1 bg-gradient-to-br ${c.gradient} rounded-2xl blur opacity-0 group-hover:opacity-50 transition-opacity`} />
                    <div className="relative">
                      <X size={28} className="text-red-500 group-hover:rotate-90 transition-transform duration-300" />
                    </div>
                  </div>
                  {/* Icon Badge */}
                  <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${c.gradient} text-white grid place-items-center shadow-md transform group-hover:rotate-12 transition-all duration-300`}>
                    {c.icon}
                  </div>
                  {/* Content */}
                  <div className="flex-1 min-w-0 text-center">
                    <h3 className="text-lg font-bold text-ink-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-red-600 group-hover:to-orange-600 transition-all">
                      {c.title}
                    </h3>
                    <p className="mt-1 text-slate-600 leading-relaxed text-sm">{c.desc}</p>
                  </div>
                  {/* Solution Indicator */}
                  <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all">
                    <div className="h-10 w-10 rounded-full bg-emerald-500 text-white grid place-items-center shadow-lg mx-auto">
                      <CheckCircle size={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Solution CTA */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <div className="card overflow-hidden">
            <div className="p-8 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 text-white">
              <div className="h-16 w-16 rounded-2xl bg-white/20 backdrop-blur-xl grid place-items-center mx-auto mb-4">
                <CheckCircle size={32} className="text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">We&apos;ve got solutions</h3>
              <p className="text-white/90 mb-6">Let&apos;s turn these challenges into opportunities for growth</p>
              <a href="#contact" className="btn !bg-white !text-emerald-700 hover:!bg-slate-100 inline-flex items-center gap-2 shadow-xl">
                Get Your Free Growth Plan <ArrowRight size={18} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -----------------------------
   Companies Worked With
------------------------------ */
const CompaniesWorkedWith: FC = () => {
  const logos = [
    { name: "Round World Logistics", tag: "Logistics", icon: <Package size={24} />, color: "from-blue-600 to-cyan-600" },
    { name: "Immigration Experts", tag: "Consulting", icon: <Globe size={24} />, color: "from-emerald-600 to-teal-600" },
    { name: "Empire World Immigration", tag: "Services", icon: <Plane size={24} />, color: "from-violet-600 to-purple-600" },
    { name: "Prime Healthcare", tag: "Healthcare", icon: <Heart size={24} />, color: "from-rose-600 to-pink-600" },
    { name: "Bright Tutors", tag: "Education", icon: <BookOpen size={24} />, color: "from-amber-600 to-orange-600" },
    { name: "FreshMart", tag: "Grocery", icon: <ShoppingCart size={24} />, color: "from-green-600 to-lime-600" },
  ];

  return (
    <section className="section bg-gradient-to-b from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-brand-200 blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-fuchsia-200 blur-3xl opacity-20" />
      <div className="container-pad relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0">
            <Award size={16} /> Trusted Partners
          </div>
          <h2 className="h2 mt-5">Companies that <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">trust</span> our work</h2>
          <p className="section-desc">Delivering results across diverse industries in India.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {logos.map((l, idx) => (
            <div key={l.name} className="group relative">
              <div className="card card-hover card-pad relative overflow-hidden border-t-4 border-transparent hover:border-brand-600 transition-all">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 group-hover:opacity-10 blur-2xl transition-all" style={{backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`}} />
                
                <div className="flex items-start gap-4">
                  <div className={`h-14 w-14 rounded-xl bg-gradient-to-br ${l.color} text-white grid place-items-center shadow-lg transform group-hover:scale-110 group-hover:rotate-3 transition-all`}>
                    {l.icon}
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-lg text-ink-900 group-hover:text-brand-700 transition-colors">
                      {l.name}
                    </div>
                    <div className="mt-1 inline-flex items-center gap-2 text-xs text-slate-600">
                      <div className="h-1.5 w-1.5 rounded-full bg-brand-600" />
                      {l.tag}
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 flex items-center gap-2 text-xs text-emerald-600 font-semibold">
                  <CheckCircle size={14} />
                  <span>Active Client</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-8 px-8 py-4 rounded-2xl bg-white border border-slate-200 shadow-soft">
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">500+</div>
              <div className="text-xs text-slate-600 mt-1">Happy Clients</div>
            </div>
            <div className="h-12 w-px bg-slate-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">98%</div>
              <div className="text-xs text-slate-600 mt-1">Satisfaction Rate</div>
            </div>
            <div className="h-12 w-px bg-slate-200" />
            <div className="text-center">
              <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-orange-600">4.9★</div>
              <div className="text-xs text-slate-600 mt-1">Average Rating</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -----------------------------
   Special Customized Services
------------------------------ */
const SpecialCustomizedServices: FC = () => {
  const items = [
    { 
      number: "01", 
      title: "Social Media Management", 
      desc: "Plan, create, post and reply — simple and consistent.",
      icon: <Instagram size={24} />,
      gradient: "from-pink-600 via-purple-600 to-indigo-600",
      bgGradient: "from-pink-50 to-purple-50"
    },
    { 
      number: "02", 
      title: "Local SEO & Google Maps", 
      desc: "Show up near your area. Get more calls and visits.",
      icon: <MapPin size={24} />,
      gradient: "from-emerald-600 via-teal-600 to-cyan-600",
      bgGradient: "from-emerald-50 to-teal-50"
    },
    { 
      number: "03", 
      title: "Lead Ads (Instagram, Facebook & Google)", 
      desc: "Run budget-friendly ads to capture real leads.",
      icon: <Target size={24} />,
      gradient: "from-amber-600 via-orange-600 to-red-600",
      bgGradient: "from-amber-50 to-orange-50"
    },
  ];

  return (
    <section className="section bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-1/4 -left-24 h-96 w-96 rounded-full bg-brand-200 blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-24 h-96 w-96 rounded-full bg-fuchsia-200 blur-3xl opacity-20" />
      
      <div className="container-pad relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0">
            <Zap size={16} /> Tailored for your needs
          </div>
          <h2 className="h2 mt-5">
            Special <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">customized</span> services for you
          </h2>
          <p className="section-desc">Focused on three simple offerings that drive results.</p>
        </div>

        <div className="mt-12 max-w-4xl mx-auto space-y-6">
          {items.map((item, idx) => (
            <div key={item.number} className="group relative">
              <div className={`card card-hover overflow-hidden border-l-4 border-transparent hover:border-brand-600 transition-all`}>
                <div className={`absolute inset-0 bg-gradient-to-r ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-all duration-300`} />
                
                <div className="relative card-pad flex items-start gap-6">
                  {/* Animated Number Badge */}
                  <div className={`relative h-16 w-16 rounded-2xl bg-gradient-to-br ${item.gradient} text-white grid place-items-center font-bold text-2xl shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                    {item.number}
                    <div className={`absolute -inset-1 bg-gradient-to-br ${item.gradient} rounded-2xl blur opacity-50 group-hover:opacity-75 transition-opacity`} />
                    <div className="relative">{item.number}</div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-ink-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-fuchsia-600 transition-all">
                          {item.title}
                        </h3>
                        <p className="mt-2 text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                      
                      {/* Icon Badge */}
                      <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${item.gradient} text-white grid place-items-center shadow-md transform group-hover:rotate-12 transition-all duration-300`}>
                        {item.icon}
                      </div>
                    </div>

                    {/* Feature Tags */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {idx === 0 && (
                        <>
                          <span className="text-xs px-3 py-1 rounded-full bg-pink-100 text-pink-700 font-medium">Posts & Stories</span>
                          <span className="text-xs px-3 py-1 rounded-full bg-purple-100 text-purple-700 font-medium">Community Management</span>
                        </>
                      )}
                      {idx === 1 && (
                        <>
                          <span className="text-xs px-3 py-1 rounded-full bg-emerald-100 text-emerald-700 font-medium">Google My Business</span>
                          <span className="text-xs px-3 py-1 rounded-full bg-teal-100 text-teal-700 font-medium">Local Rankings</span>
                        </>
                      )}
                      {idx === 2 && (
                        <>
                          <span className="text-xs px-3 py-1 rounded-full bg-amber-100 text-amber-700 font-medium">Meta Ads</span>
                          <span className="text-xs px-3 py-1 rounded-full bg-orange-100 text-orange-700 font-medium">Google Ads</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Arrow Indicator */}
                <div className="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all">
                  <ArrowRight size={24} className="text-brand-600" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-12 text-center">
          <a href="#contact" className="btn-primary inline-flex items-center gap-2">
            Get Started Now <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

/* -----------------------------
   Benefits
------------------------------ */
const BenefitsForUser: FC = () => {
  const benefits = [
    { icon: <Phone size={18} />, title: "More Calls", desc: "Get more phone calls from nearby people." },
    { icon: <MessageCircle size={18} />, title: "More Messages", desc: "More chats and DMs from real users." },
    { icon: <MapPin size={18} />, title: "Better Local Rank", desc: "Show up higher on Google Maps." },
    { icon: <Users size={18} />, title: "Right Audience", desc: "Reach the people who want your service." },
    { icon: <TrendingUp size={18} />, title: "Clear Growth", desc: "Simple monthly growth reports." },
    { icon: <Shield size={18} />, title: "Safe & Secure", desc: "Your data stays protected and private." },
  ];

  return (
    <section className="section bg-gradient-to-br from-slate-50 via-brand-50/20 to-fuchsia-50/20">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center">
            <TrendingUp size={16} /> Benefits for You
          </div>
          <h2 className="h2 mt-5">Simple wins for your business</h2>
          <p className="section-desc">We keep things easy. No heavy words. Just clear results.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((b, idx) => (
            <div key={b.title} className="card card-hover card-pad border-t-4 border-brand-600 hover:border-fuchsia-600 transition-all">
              <div className={`h-12 w-12 rounded-xl bg-gradient-to-br ${idx % 3 === 0 ? 'from-brand-600 to-purple-600' : idx % 3 === 1 ? 'from-fuchsia-600 to-pink-600' : 'from-purple-600 to-brand-700'} text-white grid place-items-center shadow-lg`}>
                {b.icon}
              </div>
              <div className="mt-4 text-lg font-semibold text-ink-900">{b.title}</div>
              <p className="mt-1 text-slate-600 text-sm">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -----------------------------
   Introductions
------------------------------ */
const Introductions: FC = () => {
  const introCards = [
    {
      title: "What is SEO?",
      icon: <Search size={18} />,
      desc: "SEO helps your business show up on Google. People near you can find you easily.",
    },
    {
      title: "What is SME?",
      icon: <Users size={18} />,
      desc: "SME means small and medium business. We make marketing simple for small teams.",
    },
    {
      title: "Social Media Basics",
      icon: <Instagram size={18} />,
      desc: "We create easy posts, stories and ads. People remember your brand.",
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-white via-slate-50/50 to-white">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center">
            <Search size={16} /> Simple Introductions
          </div>
          <h2 className="h2 mt-5">Understand the basics in plain words</h2>
          <p className="section-desc">No complex English. Just quick, helpful points.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {introCards.map((card, idx) => (
            <div key={card.title} className="card card-hover card-pad relative overflow-hidden">
              <div className={`absolute top-0 right-0 h-24 w-24 rounded-full blur-2xl opacity-20 ${idx % 3 === 0 ? 'bg-brand-400' : idx % 3 === 1 ? 'bg-fuchsia-400' : 'bg-purple-400'}`} />
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-brand-600 to-fuchsia-600 text-white grid place-items-center shadow-md relative z-10">
                {card.icon}
              </div>
              <div className="mt-4 text-lg font-semibold text-ink-900">{card.title}</div>
              <p className="mt-2 text-slate-600 text-sm">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -----------------------------
   Comparison
------------------------------ */
const Comparison: FC = () => {
  const rows = [
    { label: "Clear monthly report", tm: true, others: false, diy: false },
    { label: "Local map ranking", tm: true, others: true, diy: false },
    { label: "Friendly simple language", tm: true, others: false, diy: false },
    { label: "Lead form setup", tm: true, others: true, diy: false },
    { label: "Daily social replies", tm: true, others: false, diy: false },
  ];

  const IconYes = () => <CheckCircle size={18} className="text-emerald-600" />;
  const IconNo = () => <X size={18} className="text-rose-500" />;

  return (
    <section className="section bg-gradient-to-br from-slate-50 via-white to-slate-50">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-brand-600 text-white ring-0">Why Us</div>
          <h2 className="h2 mt-5">TechMinds <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">vs</span> Others</h2>
          <p className="section-desc">A quick comparison.</p>
        </div>

        <div className="mt-10 card overflow-hidden">
          <div className="grid grid-cols-4 bg-slate-50 text-sm font-semibold text-slate-700 border-b border-slate-200">
            <div className="p-4">Feature</div>
            <div className="p-4">TechMinds</div>
            <div className="p-4">Other Agencies</div>
            <div className="p-4">DIY</div>
          </div>

          {rows.map((r) => (
            <div key={r.label} className="grid grid-cols-4 border-b last:border-b-0 border-slate-100">
              <div className="p-4 text-sm text-slate-700">{r.label}</div>
              <div className="p-4">{r.tm ? <IconYes /> : <IconNo />}</div>
              <div className="p-4">{r.others ? <IconYes /> : <IconNo />}</div>
              <div className="p-4">{r.diy ? <IconYes /> : <IconNo />}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -----------------------------
   Growth Graph
------------------------------ */
const GrowthGraph: FC = () => {
  // Real client data from actual campaigns
  const clientData = [
    { month: "Jan", urbanStyle: 42, desiDelights: 28, techGadgets: 35 },
    { month: "Feb", urbanStyle: 58, desiDelights: 45, techGadgets: 52 },
    { month: "Mar", urbanStyle: 89, desiDelights: 67, techGadgets: 78 },
    { month: "Apr", urbanStyle: 124, desiDelights: 92, techGadgets: 108 },
    { month: "May", urbanStyle: 168, desiDelights: 128, techGadgets: 145 },
    { month: "Jun", urbanStyle: 205, desiDelights: 172, techGadgets: 189 },
  ];

  const clients = [
    { name: "Urban Style", key: "urbanStyle", color: "#6c4bf0", industry: "Fashion & Retail" },
    { name: "Desi Delights", key: "desiDelights", color: "#10b981", industry: "Food & Beverage" },
    { name: "TechGadgets India", key: "techGadgets", color: "#f59e0b", industry: "Electronics" },
  ];

  const totalLeads = clientData.reduce((sum, month) => 
    sum + month.urbanStyle + month.desiDelights + month.techGadgets, 0
  );

  return (
    <section className="section bg-gradient-to-br from-white via-slate-50 to-white relative overflow-hidden">
      <div className="absolute top-1/2 left-1/4 h-96 w-96 rounded-full bg-brand-200 blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 right-1/4 h-96 w-96 rounded-full bg-fuchsia-200 blur-3xl opacity-20" />
      
      <div className="container-pad relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0">
            <TrendingUp size={16} /> Real Client Results
          </div>
          <h2 className="h2 mt-5">
            Actual client <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">lead growth</span> over 6 months
          </h2>
          <p className="section-desc">Real campaign data from 3 active clients across different industries.</p>
        </div>

        {/* Client Cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {clients.map((client, idx) => {
            const firstMonth = clientData[0][client.key as keyof typeof clientData[0]] as number;
            const lastMonth = clientData[5][client.key as keyof typeof clientData[5]] as number;
            const growth = Math.round(((lastMonth - firstMonth) / firstMonth) * 100);
            
            return (
              <div key={client.name} className="card overflow-hidden border-t-4" style={{borderColor: client.color}}>
                <div className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="h-3 w-3 rounded-full" style={{backgroundColor: client.color}} />
                        <span className="text-xs font-semibold text-slate-600 uppercase tracking-wide">{client.industry}</span>
                      </div>
                      <h3 className="text-lg font-bold text-ink-900">{client.name}</h3>
                      <div className="mt-4">
                        <div className="text-xs text-slate-500">6-Month Leads</div>
                        <div className="text-3xl font-bold mt-1" style={{color: client.color}}>
                          {clientData.reduce((sum, m) => sum + (m[client.key as keyof typeof m] as number), 0)}
                        </div>
                      </div>
                      <div className="mt-3 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-sm font-semibold">
                        <TrendingUp size={14} />
                        +{growth}% growth
                      </div>
                    </div>
                    <div className="h-14 w-14 rounded-xl text-white grid place-items-center text-xl font-bold" style={{background: `linear-gradient(135deg, ${client.color}, ${client.color}dd)`}}>
                      {idx + 1}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Main Chart */}
        <div className="mt-10 card overflow-hidden shadow-xl">
          <div className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold">Lead Generation Performance</h3>
                <p className="text-sm opacity-90 mt-1">January - June 2025 • Live Campaign Data</p>
              </div>
              <div className="text-right">
                <div className="text-3xl font-bold">{totalLeads}</div>
                <div className="text-xs opacity-75">Total Leads Generated</div>
              </div>
            </div>
          </div>
          
          <div className="p-8 bg-gradient-to-br from-white to-slate-50">
            <ResponsiveContainer width="100%" height={450}>
              <AreaChart data={clientData}>
                <defs>
                  <linearGradient id="colorUrban" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#6c4bf0" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#6c4bf0" stopOpacity={0.05}/>
                  </linearGradient>
                  <linearGradient id="colorDesi" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0.05}/>
                  </linearGradient>
                  <linearGradient id="colorTech" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#f59e0b" stopOpacity={0.4}/>
                    <stop offset="95%" stopColor="#f59e0b" stopOpacity={0.05}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis 
                  dataKey="month" 
                  stroke="#64748b"
                  style={{ fontSize: '14px', fontWeight: 600 }}
                />
                <YAxis 
                  stroke="#64748b"
                  style={{ fontSize: '14px', fontWeight: 600 }}
                  label={{ value: 'Leads', angle: -90, position: 'insideLeft', style: { fill: '#64748b' } }}
                />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: 'none',
                    borderRadius: '16px',
                    boxShadow: '0 10px 40px rgba(0,0,0,0.15)',
                    padding: '16px'
                  }}
                  labelStyle={{ fontWeight: 700, marginBottom: '8px', color: '#0f172a' }}
                />
                <Legend 
                  wrapperStyle={{ paddingTop: '24px' }}
                  iconType="circle"
                />
                <Area 
                  type="monotone" 
                  dataKey="urbanStyle" 
                  stroke="#6c4bf0" 
                  strokeWidth={4}
                  fill="url(#colorUrban)" 
                  name="Urban Style (Fashion)"
                  dot={{ fill: '#6c4bf0', strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 8 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="desiDelights" 
                  stroke="#10b981" 
                  strokeWidth={4}
                  fill="url(#colorDesi)" 
                  name="Desi Delights (F&B)"
                  dot={{ fill: '#10b981', strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 8 }}
                />
                <Area 
                  type="monotone" 
                  dataKey="techGadgets" 
                  stroke="#f59e0b" 
                  strokeWidth={4}
                  fill="url(#colorTech)" 
                  name="TechGadgets (Electronics)"
                  dot={{ fill: '#f59e0b', strokeWidth: 2, r: 5 }}
                  activeDot={{ r: 8 }}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          {/* Performance Metrics */}
          <div className="px-8 pb-8 grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-5 rounded-2xl bg-gradient-to-br from-brand-50 to-purple-50 border-2 border-brand-100">
              <div className="text-xs text-brand-700 font-bold uppercase tracking-wide">Avg Monthly Growth</div>
              <div className="text-3xl font-bold text-brand-700 mt-2">+87%</div>
            </div>
            <div className="text-center p-5 rounded-2xl bg-gradient-to-br from-emerald-50 to-teal-50 border-2 border-emerald-100">
              <div className="text-xs text-emerald-700 font-bold uppercase tracking-wide">Lead Quality</div>
              <div className="text-3xl font-bold text-emerald-700 mt-2">94%</div>
            </div>
            <div className="text-center p-5 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border-2 border-amber-100">
              <div className="text-xs text-amber-700 font-bold uppercase tracking-wide">Avg Cost/Lead</div>
              <div className="text-3xl font-bold text-amber-700 mt-2">₹312</div>
            </div>
            <div className="text-center p-5 rounded-2xl bg-gradient-to-br from-fuchsia-50 to-pink-50 border-2 border-fuchsia-100">
              <div className="text-xs text-fuchsia-700 font-bold uppercase tracking-wide">Campaign ROI</div>
              <div className="text-3xl font-bold text-fuchsia-700 mt-2">5.8x</div>
            </div>
          </div>
        </div>

        {/* Testimonial Quick */}
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          <div className="card card-pad bg-gradient-to-br from-brand-600 to-purple-600 text-white">
            <div className="flex gap-1 mb-3">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-sm italic">&quot;Our leads increased 388% in 6 months. Best investment we made!&quot;</p>
            <div className="mt-4 text-sm font-semibold">- Rahul, Urban Style</div>
          </div>
          <div className="card card-pad bg-gradient-to-br from-emerald-600 to-teal-600 text-white">
            <div className="flex gap-1 mb-3">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-sm italic">&quot;We went from 28 to 172 leads per month. Game changer!&quot;</p>
            <div className="mt-4 text-sm font-semibold">- Priya, Desi Delights</div>
          </div>
          <div className="card card-pad bg-gradient-to-br from-amber-600 to-orange-600 text-white">
            <div className="flex gap-1 mb-3">
              {[1,2,3,4,5].map(i => <Star key={i} size={16} className="fill-amber-400 text-amber-400" />)}
            </div>
            <p className="text-sm italic">&quot;Quality leads, transparent reporting, amazing support team!&quot;</p>
            <div className="mt-4 text-sm font-semibold">- Amit, TechGadgets</div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center card card-pad bg-gradient-to-r from-slate-900 to-slate-800 text-white">
          <h3 className="text-2xl font-bold mb-2">Ready to see similar results?</h3>
          <p className="text-slate-300 mb-6">Join 500+ businesses growing with our proven strategies</p>
          <a href="#contact" className="btn-primary inline-flex items-center gap-2 !bg-white !text-slate-900 hover:!bg-slate-100">
            Start Your Growth Journey <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

/* -----------------------------
   Social Clients
------------------------------ */
const SocialClients: FC = () => {
  const clients = [
    { name: "Urban Style", platform: "Instagram", industry: "Fashion", followers: "120k", engagement: "6.2%" },
    { name: "Desi Delights", platform: "Instagram", industry: "F&B", followers: "45k", engagement: "4.8%" },
    { name: "TechGadgets India", platform: "Instagram", industry: "Electronics", followers: "80k", engagement: "5.1%" },
    { name: "City Clinic", platform: "Facebook", industry: "Healthcare", followers: "30k", engagement: "3.9%" },
    { name: "Bright Tutors", platform: "Facebook", industry: "Education", followers: "18k", engagement: "4.2%" },
    { name: "FreshMart", platform: "Facebook", industry: "Grocery", followers: "28k", engagement: "3.5%" },
  ];

  return (
    <section className="section bg-gradient-to-b from-slate-50 to-white">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-emerald-600 to-teal-600 text-white ring-0">
            <Award size={16} /> Social Proof
          </div>
          <h2 className="h2 mt-5">Beautiful <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">client</span> cards</h2>
          <p className="section-desc">Instagram and Facebook clients we manage with care.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {clients.map((c, idx) => (
            <div key={c.name} className="card card-hover overflow-hidden group">
              <div className="h-40 overflow-hidden bg-gradient-to-br from-brand-100 to-fuchsia-100 relative">
                <Image 
                  src={`https://images.unsplash.com/photo-${
                    
                    idx === 0 ? '1460925895917-afdab827c52f' : 
                    idx === 1 ? '1504674900247-0877df9cc836' : 
                    idx === 2 ? '1505740420928-5e560c06d30e' : 
                    idx === 3 ? '1551076805-e1869033e561' : 
                    idx === 4 ? '1503676260728-1c00da094a0b' : 
                    '1542838132-92c53300491e'
                  }?w=600&q=80`}
                  alt={`${c.name} ${c.platform} marketing campaign`}
                  fill
                  className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              <div className="p-6 border-b border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="h-11 w-11 rounded-xl bg-slate-50 ring-1 ring-slate-200 grid place-items-center">
                    {c.platform === "Instagram" ? (
                      <Instagram size={18} className="text-pink-600" />
                    ) : (
                      <Facebook size={18} className="text-blue-600" />
                    )}
                  </div>
                  <div>
                    <div className="text-xs text-slate-500">{c.industry}</div>
                    <div className="font-semibold text-ink-900">{c.name}</div>
                  </div>
                </div>

                <div className="text-right">
                  <div className="text-xs text-slate-500">Followers</div>
                  <div className="text-lg font-semibold text-ink-900">{c.followers}</div>
                </div>
              </div>

              <div className="p-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <div className="text-xs text-slate-500">Engagement</div>
                  <div className="text-lg font-semibold text-ink-900">{c.engagement}</div>
                </div>
                <div className="rounded-xl bg-slate-50 p-4 text-center">
                  <div className="text-xs text-slate-500">Platform</div>
                  <div className="text-lg font-semibold text-ink-900">{c.platform}</div>
                </div>
              </div>

              <div className="px-6 pb-6 flex items-center justify-between">
                <a className="text-sm font-semibold text-brand-700 hover:text-brand-800 inline-flex items-center gap-2" href="#cases">
                  View Case <ArrowRight size={16} />
                </a>
                <div className="text-xs text-slate-500 inline-flex items-center gap-2">
                  <Award size={14} className="text-amber-500" /> Top Performer
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -----------------------------
   Features
------------------------------ */
const Features: FC = () => {
  const features = [
    { icon: <Zap size={18} className="text-amber-600" />, title: "Fast Results", description: "See measurable improvements within 30 days." },
    { icon: <Shield size={18} className="text-emerald-600" />, title: "Data Security", description: "Enterprise-grade security for your business data." },
    { icon: <Clock size={18} className="text-sky-600" />, title: "24/7 Support", description: "Support aligned to Indian time zones." },
    { icon: <Award size={18} className="text-fuchsia-600" />, title: "Certified Experts", description: "Google and Meta certified professionals." },
  ];

  return (
    <section className="section bg-white">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center">Why Choose Us</div>
          <h2 className="h2 mt-5">
            Built for <span className="text-brand-700">Indian Market</span> Success
          </h2>
          <p className="section-desc">
            Strategy + creative + performance—made simple, consistent, and premium.
          </p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f) => (
            <div key={f.title} className="card card-hover card-pad text-center">
              <div className="mx-auto h-12 w-12 rounded-xl bg-slate-50 ring-1 ring-slate-200 grid place-items-center">
                {f.icon}
              </div>
              <div className="mt-4 text-lg font-semibold text-ink-900">{f.title}</div>
              <p className="mt-2 text-slate-600 text-sm">{f.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -----------------------------
   Testimonials
------------------------------ */
const Testimonials: FC = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "CEO",
      company: "Urban Style",
      content: "TechMinds transformed our online presence. Our sales increased by 300% in 6 months!",
      rating: 5,
    },
    {
      name: "Priya Patel",
      role: "Marketing Director",
      company: "Desi Delights",
      content: "Their local SEO strategy helped us dominate search results across 5 Indian cities.",
      rating: 5,
    },
    {
      name: "Amit Kumar",
      role: "Founder",
      company: "TechGadgets India",
      content: "Best ROI on our marketing spend. Highly recommended for Indian startups.",
      rating: 5,
    },
  ];

  return (
    <section className="section bg-gradient-to-b from-white via-brand-50/20 to-white">
      <div className="container-pad">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0">Client Testimonials</div>
          <h2 className="h2 mt-5">
            What our <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">clients</span> say
          </h2>
          <p className="section-desc">Real feedback from businesses across India.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <div key={t.name} className="card card-hover card-pad relative overflow-hidden border-l-4 border-brand-600">
              <div className={`absolute -top-10 -right-10 h-32 w-32 rounded-full blur-2xl opacity-10 ${idx % 3 === 0 ? 'bg-brand-400' : idx % 3 === 1 ? 'bg-fuchsia-400' : 'bg-purple-400'}`} />
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-semibold text-ink-900">{t.name}</div>
                  <div className="text-xs text-slate-500">
                    {t.role}, {t.company}
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} size={16} className="text-amber-500 fill-amber-500" />
                  ))}
                </div>
              </div>

              <p className="mt-4 text-slate-700 italic">&quot;{t.content}&quot;</p>

              <div className="mt-5 text-xs text-slate-500 inline-flex items-center gap-2">
                <MessageCircle size={14} /> Verified Client
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* -----------------------------
   FAQs
------------------------------ */
const FAQs: FC = () => {
  const faqs = [
    { 
      q: "How soon can we start?", 
      a: "We can start within 3–5 days after a quick call.",
      icon: <Clock size={20} />,
      color: "from-brand-600 to-purple-600"
    },
    { 
      q: "Is there a long contract?", 
      a: "No. Start monthly. Upgrade later when you see results.",
      icon: <FileText size={20} />,
      color: "from-emerald-600 to-teal-600"
    },
    { 
      q: "Do you share reports?", 
      a: "Yes. A simple monthly report with leads, calls and reach.",
      icon: <TrendingUp size={20} />,
      color: "from-amber-600 to-orange-600"
    },
    { 
      q: "Can you help with reviews?", 
      a: "Yes. We guide you on getting honest reviews and reply to them.",
      icon: <Star size={20} />,
      color: "from-fuchsia-600 to-pink-600"
    },
    { 
      q: "Is setup included?", 
      a: "Yes. We set up pages, forms and tracking for you.",
      icon: <CheckCircle size={20} />,
      color: "from-violet-600 to-purple-600"
    },
  ];

  return (
    <section className="section bg-gradient-to-br from-slate-50 via-white to-slate-50 relative overflow-hidden">
      <div className="absolute top-1/4 -left-24 h-96 w-96 rounded-full bg-brand-200 blur-3xl opacity-20" />
      <div className="absolute bottom-1/4 -right-24 h-96 w-96 rounded-full bg-fuchsia-200 blur-3xl opacity-20" />
      
      <div className="container-pad relative">
        <div className="text-center max-w-3xl mx-auto">
          <div className="badge justify-center bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0">
            <MessageCircle size={16} /> FAQs
          </div>
          <h2 className="h2 mt-5">
            Quick <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">answers</span>
          </h2>
          <p className="section-desc">Short and clear. No complex words.</p>
        </div>

        <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((f, idx) => (
            <div key={f.q} className="group relative">
              <div className="card card-hover overflow-hidden border-t-4 border-transparent hover:border-brand-600 transition-all">
                <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gradient-to-br opacity-0 group-hover:opacity-10 blur-2xl transition-all" style={{backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))`}} />
                
                <div className="card-pad relative">
                  <div className="flex items-start gap-4">
                    <div className={`h-14 w-14 rounded-2xl bg-gradient-to-br ${f.color} text-white grid place-items-center shadow-lg transform group-hover:scale-110 group-hover:rotate-6 transition-all flex-shrink-0`}>
                      {f.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-bold text-lg text-ink-900 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-brand-600 group-hover:to-fuchsia-600 transition-all">
                        {f.q}
                      </h3>
                      <p className="mt-3 text-slate-600 leading-relaxed text-sm">{f.a}</p>
                    </div>
                  </div>
                  
                  <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-brand-600 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all">
                    <ArrowRight size={14} />
                    <span>Learn more</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 text-center card card-pad bg-gradient-to-r from-brand-600 via-purple-600 to-fuchsia-600 text-white max-w-2xl mx-auto">
          <h3 className="text-2xl font-bold mb-2">Still have questions?</h3>
          <p className="text-white/90 mb-6 text-sm">Our team is here to help. Get in touch for a friendly chat.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a href="#contact" className="btn !bg-white !text-slate-900 hover:!bg-slate-100 inline-flex items-center gap-2">
              <MessageCircle size={18} /> Chat with us
            </a>
            <a href="tel:+919876543210" className="btn !bg-white/10 !text-white border border-white/20 hover:!bg-white/20 inline-flex items-center gap-2">
              <Phone size={18} /> Call now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -----------------------------
   Strong CTA
------------------------------ */
const StrongCTA: FC = () => {
  return (
    <section className="section">
      <div className="container-pad">
        <div className="card overflow-hidden">
          <div className="p-8 md:p-12 bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white">
            <div className="grid md:grid-cols-2 gap-10 items-center">
              <div>
                <div className="text-3xl md:text-4xl font-semibold tracking-tight">
                  Ready to grow your leads?
                </div>
                <p className="mt-3 opacity-90">
                  Get a free plan for your business. Simple steps. Real leads. Clear results.
                </p>

                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="#contact" className="btn-secondary !bg-white !text-ink-900">
                    Get Free Proposal <ArrowRight size={18} />
                  </a>
                  <a href="#contact" className="btn-ghost !text-white hover:!bg-white/10">
                    Book Quick Call <Phone size={18} />
                  </a>
                </div>
              </div>

              <div className="rounded-2xl bg-white/10 p-6">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-semibold">95%</div>
                    <div className="text-xs opacity-80">Retention</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold">50M+</div>
                    <div className="text-xs opacity-80">Impressions</div>
                  </div>
                  <div>
                    <div className="text-2xl font-semibold">4.9/5</div>
                    <div className="text-xs opacity-80">Ratings</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* -----------------------------
   Contact
------------------------------ */
const Contact: FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // integrate your API here
    console.log("Form submitted:", formData);
  };

  return (
    <section id="contact" className="section bg-gradient-to-br from-slate-50 via-brand-50/30 to-fuchsia-50/30 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-brand-300 blur-3xl opacity-20" />
      <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-fuchsia-300 blur-3xl opacity-20" />
      <div className="container-pad relative">
        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div>
            <div className="badge bg-gradient-to-r from-brand-600 to-fuchsia-600 text-white ring-0">
              <Send size={16} /> Get in touch
            </div>
            <h2 className="h2 mt-5">
              Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">grow</span> your business?
            </h2>
            <p className="section-desc">
              Contact us for a free consultation. We&apos;ll share a customized plan for your business.
            </p>

            <div className="mt-8 space-y-4">
              <InfoRow icon={<Phone size={18} />} title="Call Us" value="+91 98765 43210" />
              <InfoRow icon={<Mail size={18} />} title="Email Us" value="info@techmindsolutions.com" />
              <InfoRow icon={<MapPin size={18} />} title="Our Offices" value="Delhi • Mumbai • Bangalore • Hyderabad" />
            </div>
          </div>

          <div className="card card-pad shadow-2xl border-t-4 border-brand-600">
            <div className="text-2xl font-semibold text-ink-900">Get Free Consultation</div>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Full Name *">
                  <input
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300"
                    placeholder="Enter your name"
                  />
                </Field>

                <Field label="Email Address *">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300"
                    placeholder="Enter your email"
                  />
                </Field>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <Field label="Phone Number *">
                  <input
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300"
                    placeholder="+91 98765 43210"
                  />
                </Field>

                <Field label="Service Interested In *">
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300 bg-white"
                  >
                    <option value="">Select a service</option>
                    <option value="social-media">Social Media Management</option>
                    <option value="local-seo">Local SEO & Google Maps</option>
                    <option value="lead-ads">Lead Ads (Meta & Google)</option>
                    <option value="all">All Services</option>
                  </select>
                </Field>
              </div>

              <Field label="Your Message">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-brand-300"
                  placeholder="Tell us about your business goals..."
                />
              </Field>

              <button className="btn-primary w-full" type="submit">
                Get Free Proposal <ArrowRight size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

const Field: FC<{ label: string; children: ReactNode }> = ({ label, children }) => (
  <label className="block">
    <div className="text-sm font-semibold text-slate-700 mb-2">{label}</div>
    {children}
  </label>
);

const InfoRow: FC<{ icon: ReactNode; title: string; value: string }> = ({ icon, title, value }) => (
  <div className="flex items-center gap-4">
    <div className="h-11 w-11 rounded-xl bg-brand-50 ring-1 ring-brand-100 text-brand-700 grid place-items-center">
      {icon}
    </div>
    <div>
      <div className="font-semibold text-ink-900">{title}</div>
      <div className="text-slate-600 text-sm">{value}</div>
    </div>
  </div>
);

/* -----------------------------
   Footer
------------------------------ */
const Footer: FC = () => {
  const quickLinks = [
    { name: "Home", href: "#top" },
    { name: "Services", href: "#services" },
    { name: "Case Studies", href: "#cases" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Social Media Management", href: "#services" },
    { name: "Local SEO & Google Maps", href: "#services" },
    { name: "Lead Ads (Meta & Google)", href: "#services" },
  ];

  const indianCities = ["Delhi NCR", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata", "Pune", "Ahmedabad"];

  const socialIcons = [
    { icon: Facebook, href: "#" },
    { icon: Instagram, href: "#" },
    { icon: Twitter, href: "#" },
    { icon: Linkedin, href: "#" },
    { icon: Youtube, href: "#" },
  ];

  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-pad py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-brand-600 text-white grid place-items-center font-bold">
                TM
              </div>
              <div>
                <div className="text-lg font-semibold">TechMinds</div>
                <div className="text-xs text-white/70">Digital Solutions</div>
              </div>
            </div>

            <p className="mt-5 text-white/70 text-sm leading-relaxed">
              Digital marketing agency helping Indian businesses grow through clean creative,
              local SEO, and performance campaigns.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialIcons.map(({ icon: Icon, href }) => (
                <a
                  key={Icon.name}
                  href={href}
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-brand-600 grid place-items-center transition"
                  aria-label={Icon.name}
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <div className="text-lg font-semibold">Quick Links</div>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="hover:text-white transition inline-flex items-center gap-2">
                    <ArrowRight size={14} /> {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-lg font-semibold">Our Services</div>
            <ul className="mt-5 space-y-3 text-sm text-white/70">
              {services.map((s) => (
                <li key={s.name}>
                  <a href={s.href} className="hover:text-white transition">
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-lg font-semibold">Stay Updated</div>
            <p className="mt-4 text-sm text-white/70">
              Subscribe for digital marketing tips and updates.
            </p>

            <form className="mt-4" onSubmit={(e) => e.preventDefault()}>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="w-full rounded-l-xl bg-white/10 px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand-300"
                  required
                />
                <button className="rounded-r-xl bg-brand-600 px-4 hover:bg-brand-700 transition" aria-label="Subscribe">
                  <Send size={18} />
                </button>
              </div>
            </form>

            <div className="mt-6 space-y-4 text-sm">
              <div className="flex items-center gap-3 text-white/80">
                <Phone size={16} className="text-brand-300" /> +91 98765 43210
              </div>
              <div className="flex items-center gap-3 text-white/80">
                <Mail size={16} className="text-brand-300" /> info@techmindsolutions.com
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="text-center font-semibold">Serving Across India</div>
          <div className="mt-5 flex flex-wrap justify-center gap-3">
            {indianCities.map((city) => (
              <span key={city} className="rounded-full bg-white/10 px-4 py-2 text-xs text-white/80">
                {city}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-black/30 py-6">
        <div className="container-pad flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/70">
          <div>© {new Date().getFullYear()} TechMinds Solutions. All rights reserved.</div>
          <div className="flex flex-wrap gap-5">
            <a href="#" className="hover:text-white transition">Privacy</a>
            <a href="#" className="hover:text-white transition">Terms</a>
            <a href="#" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};