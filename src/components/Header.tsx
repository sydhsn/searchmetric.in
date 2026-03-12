"use client";
import Image from "next/image";
import { FC, useEffect, useMemo, useState } from "react";
import {
  ArrowRight, ChevronDown, Mail, MapPin, Menu, Phone, X
} from "lucide-react";
import type { NavItem } from "../types/nav";

const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const servicesSubmenu = useMemo(
    () => [
      { name: "Social Media Management", href: "/services/social-media-management" },
      { name: "Local SEO & Google Maps", href: "/services/local-seo" },
      { name: "Lead Ads (Meta & Google)", href: "/services/lead-ads" },
    ],
    []
  );

  const citiesSubmenu = useMemo(
    () => [
      { name: "Local SEO — Katihar", href: "/services/local-seo/katihar" },
      { name: "Local SEO — Purnea", href: "/services/local-seo/purnea" },
      { name: "Local SEO — Kishanganj", href: "/services/local-seo/kishanganj" },
      { name: "Local SEO — Barsoi", href: "/services/local-seo/barsoi" },
      { name: "Local SEO — Baisi", href: "/services/local-seo/baisi" },
      { name: "Local SEO — Dalkhola", href: "/services/local-seo/dalkhola" },
      { name: "Local SEO — Siliguri", href: "/services/local-seo/siliguri" },
    ],
    []
  );

  const navItems: NavItem[] = useMemo(
    () => [
      { name: "Home", href: "/" },
      { name: "Services", href: "/services", submenu: servicesSubmenu },
      { name: "Cities", href: "/services/local-seo", submenu: citiesSubmenu },
      { name: "Free Audit", href: "/free-audit" },
      { name: "Contact", href: "/contact" },
    ],
    [servicesSubmenu, citiesSubmenu]
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
              <Phone size={14} className="opacity-90" /> +91 90801 35567
            </span>
            <span className="hidden md:inline-flex items-center gap-2">
              <Mail size={14} className="opacity-90" /> info@searchmetric.in
            </span>
          </div>

          <div className="hidden md:flex items-center gap-3">
            <span className="inline-flex items-center gap-2 opacity-90">
              <MapPin size={14} /> Katihar • Purnea • Seemanchal
            </span>
            <a className="btn-secondary !py-2 !px-4" href="/free-audit">
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
            <a href="/" className="flex items-center">
              <Image
                src="/logo.png"
                alt="SearchMetric Logo"
                width={300}
                height={50}
                className="h-auto w-50"
                priority
              />
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

              <a href="/contact" className="btn-primary">
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

              <a href="/contact" className="btn-primary w-full mt-4">
                Get Free Proposal <ArrowRight size={18} />
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
