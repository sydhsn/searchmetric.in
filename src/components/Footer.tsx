"use client";
import React, { FC } from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight, Send, Phone, Mail, MapPin } from "lucide-react";
import Image from "next/image";

const Footer: FC = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Free SEO Audit", href: "/free-audit" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Local SEO & Google Maps", href: "/services/local-seo" },
    { name: "Social Media Management", href: "/services/social-media-management" },
    { name: "Lead Ads (Meta & Google)", href: "/services/lead-ads" },
    { name: "Website Development", href: "/services/website-development" },
  ];

  const cities = [
    { name: "Local SEO in Katihar", href: "/services/local-seo/katihar" },
    { name: "Local SEO in Purnea", href: "/services/local-seo/purnea" },
    { name: "Local SEO in Kishanganj", href: "/services/local-seo/kishanganj" },
    { name: "Local SEO in Barsoi", href: "/services/local-seo/barsoi" },
    { name: "Local SEO in Baisi", href: "/services/local-seo/baisi" },
    { name: "Local SEO in Dalkhola", href: "/services/local-seo/dalkhola" },
    { name: "Local SEO in Siliguri", href: "/services/local-seo/siliguri" },
  ];

  const socialIcons = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-ink-900 text-white">
      <div className="container-pad py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Brand */}
          <div>
            <a href="/" className="inline-block">
              <Image src="/footer-logo.svg" alt="SearchMetric Logo" width={300} height={54} className="h-auto w-50" />
            </a>
            <p className="mt-5 text-white/70 text-sm leading-relaxed">
              SEO & digital marketing agency for Seemanchal Bihar — helping local businesses in Katihar, Purnea, Kishanganj & beyond rank on Google.
            </p>
            <div className="mt-4 space-y-2 text-sm">
              <div className="flex items-center gap-2 text-white/70">
                <Phone size={14} className="text-brand-400 flex-shrink-0" />
                <a href="tel:+919080135567" className="hover:text-white transition">+91 90801 35567</a>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <Mail size={14} className="text-brand-400 flex-shrink-0" />
                <a href="mailto:info@searchmetric.in" className="hover:text-white transition">info@searchmetric.in</a>
              </div>
              <div className="flex items-center gap-2 text-white/70">
                <MapPin size={14} className="text-brand-400 flex-shrink-0" />
                <span>Hospital Road, Purab Chowk, Baisi, Purnea, Bihar</span>
              </div>
            </div>
            <div className="mt-5 flex items-center gap-3">
              {socialIcons.map(({ icon: Icon, href, label }) => (
                <a key={label} href={href} className="h-9 w-9 rounded-full bg-white/10 hover:bg-brand-600 grid place-items-center transition" aria-label={label}>
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Quick Links */}
          <div>
            <div className="text-base font-bold mb-5 text-white">Quick Links</div>
            <ul className="space-y-3 text-sm text-white/70">
              {quickLinks.map((l) => (
                <li key={l.name}>
                  <a href={l.href} className="hover:text-white transition inline-flex items-center gap-2 group">
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" /> {l.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Services + Newsletter */}
          <div>
            <div className="text-base font-bold mb-5 text-white">Our Services</div>
            <ul className="space-y-3 text-sm text-white/70">
              {services.map((s) => (
                <li key={s.name}>
                  <a href={s.href} className="hover:text-white transition inline-flex items-center gap-2 group">
                    <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" /> {s.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-7">
              <div className="text-sm font-semibold text-white/80 mb-3">Get Free SEO Tips</div>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="flex">
                  <input type="email" placeholder="Your email" className="w-full rounded-l-xl bg-white/10 px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-brand-300 placeholder:text-white/40" required />
                  <button className="rounded-r-xl bg-brand-600 px-4 hover:bg-brand-700 transition" aria-label="Subscribe"><Send size={16} /></button>
                </div>
              </form>
            </div>
          </div>

          {/* Col 4 — Cities We Serve */}
          <div>
            <div className="text-base font-bold mb-5 text-white">Cities We Serve</div>
            <ul className="space-y-3 text-sm text-white/70">
              {cities.map((c) => (
                <li key={c.name}>
                  <a href={c.href} className="hover:text-white transition inline-flex items-center gap-2 group">
                    <MapPin size={13} className="text-brand-400 flex-shrink-0 group-hover:text-white transition" />
                    {c.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom city strip */}
        <div className="mt-10 pt-8 border-t border-white/10">
          <div className="text-center text-xs font-semibold text-white/40 uppercase tracking-widest mb-4">Serving All of Seemanchal & North Bihar</div>
          <div className="flex flex-wrap justify-center gap-2">
            {["Katihar", "Purnea", "Kishanganj", "Barsoi", "Baisi", "Salmari", "Dalkhola", "Siliguri", "Araria", "Forbesganj"].map((city) => (
              <span key={city} className="rounded-full border border-white/10 px-3 py-1 text-xs text-white/50">{city}</span>
            ))}
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-black/30 py-5">
        <div className="container-pad flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <div>© {new Date().getFullYear()} SearchMetric.in — SEO & Digital Marketing Agency, Seemanchal Bihar. All rights reserved.</div>
          <div className="flex flex-wrap gap-4">
            <a href="/privacy" className="hover:text-white transition">Privacy Policy</a>
            <a href="/terms" className="hover:text-white transition">Terms</a>
            <a href="/sitemap" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
