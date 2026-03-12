import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { contact, seo } from "@/content/siteCopy";
import { MapPin, Instagram, Target, ArrowRight, CheckCircle, Star } from "lucide-react";

export const metadata: Metadata = {
  title: seo.services.title,
  description: seo.services.description,
  keywords: seo.services.keywords,
  alternates: { canonical: "/services" },
  openGraph: {
    title: seo.services.title,
    description: seo.services.description,
    images: [{ url: seo.services.ogImage, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.services.title,
    description: seo.services.description,
  },
};

const services = [
  {
    name: "Local SEO & Google Maps Optimization",
    href: "/services/local-seo",
    tag: "Most Popular",
    icon: <MapPin size={28} />,
    gradient: "from-indigo-600 to-violet-600",
    light: "#eef2ff",
    description:
      "If your business isn't showing up on Google Maps, you're losing customers every day. We optimise your entire local presence so nearby customers across Katihar, Purnea, Kishanganj, and Seemanchal Bihar find you first — not your competitors.",
    bullets: [
      "Google Business Profile optimisation",
      "Google Maps top 3 ranking",
      "Review generation & management",
      "Local citation building",
    ],
    cta: "Get Free Local SEO Audit",
  },
  {
    name: "Social Media Management",
    href: "/services/social-media-management",
    tag: "Instagram & Facebook",
    icon: <Instagram size={28} />,
    gradient: "from-brand-600 to-fuchsia-600",
    light: "#fdf4ff",
    description:
      "Your customers are already scrolling Instagram and Facebook — we make sure they stop at your content. We manage your social media end-to-end, from creative design and posting to daily engagement, so your brand stays active and professional without you lifting a finger.",
    bullets: [
      "Monthly content strategy & calendar",
      "Eye-catching creatives & reels",
      "Daily community management",
      "Clear monthly performance reports",
    ],
    cta: "Get Free Social Media Audit",
  },
  {
    name: "Lead Ads — Instagram, Facebook & Google",
    href: "/services/lead-ads",
    tag: "High ROI",
    icon: <Target size={28} />,
    gradient: "from-rose-600 to-orange-600",
    light: "#fff7ed",
    description:
      "Stop wasting money on ads that get clicks but no customers. We build targeted lead ad campaigns on Instagram, Facebook, and Google that bring real enquiries from people who are actively searching for your product or service — with full transparency on every rupee spent.",
    bullets: [
      "High-converting lead form setup",
      "Laser-focused audience targeting",
      "Multi-platform campaigns",
      "Daily optimisation & ROI tracking",
    ],
    cta: "Get Free Ad Strategy Call",
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 md:py-28">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="absolute top-0 -right-4 w-96 h-96 bg-fuchsia-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20" />
        <div className="container-pad relative z-10 text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 text-white mb-6">
            <Star size={16} />
            <span className="text-sm font-semibold">Serving Businesses Across Seemanchal Bihar</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Digital Marketing Services That{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-400 to-purple-400">
              Actually Grow Your Business
            </span>
          </h1>
          <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10">
            We help local businesses across Katihar, Purnea, Kishanganj, and Seemanchal Bihar get found online, attract more customers, and grow consistently — with simple, transparent, and results-driven digital marketing.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition shadow-xl"
          >
            Get Free Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Services */}
      <section className="section bg-gradient-to-b from-white to-slate-50">
        <div className="container-pad">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="inline-block text-sm font-semibold text-brand-600 bg-brand-50 px-4 py-1.5 rounded-full mb-4">
              What We Do
            </span>
            <h2 className="h2">
              Three Services.{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-fuchsia-600">
                One Goal — Your Growth.
              </span>
            </h2>
            <p className="section-desc mt-4">
              Everything we do is focused on one thing — bringing more customers to your business.
            </p>
          </div>

          <div className="space-y-8">
            {services.map((service, idx) => (
              <div
                key={service.name}
                className="group card overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="card-pad">
                  <div className="flex flex-col lg:flex-row gap-8 items-start">
                    {/* Icon & Tag */}
                    <div className="flex-shrink-0">
                      <div
                        className={`h-16 w-16 rounded-2xl bg-gradient-to-br ${service.gradient} text-white grid place-items-center shadow-lg`}
                      >
                        {service.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <h2 className="text-2xl font-bold text-ink-900 group-hover:text-brand-700 transition-colors">
                          {service.name}
                        </h2>
                        <span
                          className={`text-xs font-semibold px-3 py-1 rounded-full text-white bg-gradient-to-r ${service.gradient}`}
                        >
                          {service.tag}
                        </span>
                      </div>
                      <p className="text-slate-600 leading-relaxed mb-5">
                        {service.description}
                      </p>
                      <div className="grid sm:grid-cols-2 gap-2 mb-6">
                        {service.bullets.map((b) => (
                          <div key={b} className="flex items-center gap-2 text-sm text-slate-700">
                            <CheckCircle size={16} className="text-emerald-500 flex-shrink-0" />
                            {b}
                          </div>
                        ))}
                      </div>
                      <Link
                        href={service.href}
                        className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-white bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all`}
                      >
                        {service.cta} <ArrowRight size={16} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section">
        <div className="container-pad">
          <div className="card overflow-hidden">
            <div className="p-8 md:p-12 bg-gradient-to-r from-brand-600 via-purple-600 to-fuchsia-600 text-white text-center">
              <h2 className="text-3xl font-bold mb-3">Not Sure Which Service You Need?</h2>
              <p className="text-white/90 mb-8 max-w-xl mx-auto">
                Book a free 30-minute consultation and we&apos;ll recommend the right plan for your business — no pressure, no jargon, just honest advice.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-white text-brand-700 font-bold px-8 py-4 rounded-xl hover:bg-slate-100 transition shadow-xl"
                >
                  Book Free Consultation <ArrowRight size={18} />
                </Link>
                <a
                  href={`tel:${contact.phone}`}
                  className="inline-flex items-center gap-2 bg-white/10 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 hover:bg-white/20 transition"
                >
                    Call Now {contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}