"use client";
import React, { FC } from "react";
import { Facebook, Instagram, Twitter, Linkedin, Youtube, ArrowRight, Send, Phone, Mail } from "lucide-react";

/* -----------------------------
  Footer
------------------------------ */
const Footer: FC = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Case Studies", href: "/case-studies" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const services = [
    { name: "Social Media Management", href: "/services/social-media-management" },
    { name: "Local SEO & Google Maps", href: "/services/local-seo" },
    { name: "Lead Ads (Meta & Google)", href: "/services/lead-ads" },
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
                SM
              </div>
              <div>
                <div className="text-lg font-semibold">SearchMetric</div>
                <div className="text-xs text-white/70">Digital Growth</div>
              </div>
            </div>

            <p className="mt-5 text-white/70 text-sm leading-relaxed">
              Digital marketing agency helping Indian businesses grow through clean creative,
              local SEO, and performance campaigns.
            </p>

            <div className="mt-6 flex items-center gap-3">
              {socialIcons.map(({ icon: Icon, href }) => (
                <a
                  key={Icon.displayName || Icon.name}
                  href={href}
                  className="h-10 w-10 rounded-full bg-white/10 hover:bg-brand-600 grid place-items-center transition"
                  aria-label={Icon.displayName || Icon.name}
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
                <Mail size={16} className="text-brand-300" /> info@searchmetric.in
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
          <div>© {new Date().getFullYear()} SearchMetric.in. All rights reserved.</div>
          <div className="flex flex-wrap gap-5">
            <a href="/privacy" className="hover:text-white transition">Privacy</a>
            <a href="/terms" className="hover:text-white transition">Terms</a>
            <a href="/sitemap" className="hover:text-white transition">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;