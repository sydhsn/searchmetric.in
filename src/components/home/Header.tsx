// components/layout/Header.tsx
"use client";

import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { 
  FiChevronDown, 
  FiMenu, 
  FiX, 
  FiSearch, 
  FiBell, 
  FiUser,
  FiSun,
  FiMoon,
  FiShoppingBag,
  FiMessageCircle
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";

import type { Brand, MegaMenuItems, NavItem } from "@/types/home";

type HeaderProps = {
  brand: Brand;
  navItems: NavItem[];
  megaMenuItems: MegaMenuItems;
};

export function Header({ brand, navItems, megaMenuItems }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeServiceMenu, setActiveServiceMenu] = useState<keyof MegaMenuItems | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showSearch, setShowSearch] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 backdrop-blur-xl border-b border-gray-100/50 shadow-lg py-3" 
          : "bg-white/80 backdrop-blur-md border-b border-transparent py-4"
      }`}
    >
      {/* Animated background glow */}
      <div className="absolute inset-0 -z-10">
        <div className={`absolute inset-0 bg-gradient-to-r from-yellow-50/30 to-amber-50/30 transition-opacity duration-500 ${
          isScrolled ? 'opacity-50' : 'opacity-30'
        }`} />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent" />
      </div>

      <div className="max-w-8xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-4"
          >
            {/* Animated Logo */}
            <div className="relative">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 via-amber-500 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg shadow-yellow-500/30 relative overflow-hidden group">
                {/* Shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                <span className="text-white font-bold text-xl relative z-10">S</span>
              </div>
              {/* Glow effect */}
              <div className="absolute inset-0 bg-yellow-500/20 blur-xl -z-10 rounded-2xl" />
            </div>

            <div className="relative">
              <h1 className="text-2xl font-bold text-gray-900 tracking-tight">
                {brand.name}
                <span className="text-yellow-500">.</span>
              </h1>
              <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
                <HiOutlineSparkles className="w-3 h-3 text-yellow-500" />
                {brand.tagline}
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-8 relative" onMouseLeave={() => setActiveServiceMenu(null)}>

            {/* Navigation Items */}
            {navItems.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
                onMouseEnter={() => item.type === "mega" && item.data && setActiveServiceMenu(item.data)}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    className="relative text-gray-700 hover:text-yellow-600 transition-colors text-sm font-medium group"
                  >
                    <span className="relative z-10">{item.label}</span>
                    {/* Hover underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 group-hover:w-full transition-all duration-300" />
                    {/* Glow effect */}
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-yellow-400 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                  </a>
                ) : (
                  <button className="relative text-gray-700 hover:text-yellow-600 transition-colors text-sm font-medium flex items-center gap-1.5 group">
                    <span className="relative z-10">{item.label}</span>
                    <FiChevronDown
                      className={`w-3.5 h-3.5 transition-transform duration-300 ${
                        activeServiceMenu === item.data ? "rotate-180" : ""
                      }`}
                    />
                    {/* Hover underline */}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-yellow-500 to-amber-500 group-hover:w-full transition-all duration-300" />
                  </button>
                )}

                {/* Mega Menu Dropdown is rendered once below */}
              </motion.div>
            ))}

            {/* Centralized Mega Menu Dropdown */}
            <AnimatePresence>
              {activeServiceMenu && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute left-0 top-full pt-4 w-full"
                >
                  <div className="mx-auto max-w-6xl bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl shadow-black/5 border border-gray-100 overflow-hidden">
                    {/* Header */}
                    <div className="p-8 bg-gradient-to-r from-yellow-50 to-amber-50/50 border-b border-gray-100">
                      <div className="flex items-center gap-4 mb-2">
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-amber-600 flex items-center justify-center shadow-lg">
                          {React.createElement(megaMenuItems[activeServiceMenu].icon, {
                            className: "w-6 h-6 text-white"
                          })}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-gray-900">{megaMenuItems[activeServiceMenu].title}</h3>
                          <p className="text-sm text-gray-600 mt-1">Complete solutions for your business growth</p>
                        </div>
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className="p-8">
                      <div className="grid grid-cols-3 gap-8">
                        {megaMenuItems[activeServiceMenu].items.map((category, idx) => (
                          <div key={category.category + idx} className="space-y-5">
                            <div className="flex items-center gap-3">
                              <div className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
                              <h4 className="text-sm font-semibold text-gray-900 uppercase tracking-wider">
                                {category.category}
                              </h4>
                            </div>
                            <div className="space-y-3">
                              {category.services.map((service, sIdx) => (
                                <a
                                  key={service.name + sIdx}
                                  href="#"
                                  className="group flex items-start gap-4 p-4 rounded-2xl hover:bg-yellow-50/50 transition-all duration-300 hover:-translate-y-0.5"
                                >
                                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-100 to-amber-100 flex items-center justify-center group-hover:from-yellow-200 group-hover:to-amber-200 transition-all">
                                    {React.createElement(service.icon, { className: "w-5 h-5 text-yellow-600" })}
                                  </div>
                                  <div className="flex-1">
                                    <div className="flex items-center justify-between">
                                      <p className="font-semibold text-gray-900 group-hover:text-yellow-700 transition-colors">
                                        {service.name}
                                      </p>
                                      <span className="text-xs text-gray-400 group-hover:text-yellow-500 transition-colors">
                                        →
                                      </span>
                                    </div>
                                    <p className="text-xs text-gray-500 mt-1">{service.description}</p>
                                  </div>
                                </a>
                              ))}
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Footer CTA */}
                      <div className="mt-8 pt-8 border-t border-gray-100">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-green-100 to-emerald-100 flex items-center justify-center">
                              <FiMessageCircle className="w-5 h-5 text-green-600" />
                            </div>
                            <div>
                              <h4 className="font-semibold text-gray-900">Need a custom solution?</h4>
                              <p className="text-sm text-gray-600">Tailored strategies for unique business needs</p>
                            </div>
                          </div>
                          <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-full font-semibold text-sm shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/30 transition-all hover:-translate-y-0.5">
                            Book Free Consultation
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* User Profile */}
            <button className="p-2 text-gray-600 hover:text-yellow-600 transition-colors">
              <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-100 to-amber-100 border-2 border-yellow-200 flex items-center justify-center">
                <FiUser className="w-4 h-4 text-yellow-600" />
              </div>
            </button>

            {/* CTA Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-full font-semibold text-sm shadow-lg shadow-yellow-500/25 hover:shadow-xl hover:shadow-yellow-500/30 transition-all relative group overflow-hidden"
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              <span className="relative z-10 flex items-center gap-2">
                Start Project
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden p-3 text-gray-700 hover:text-yellow-600 transition-colors hover:bg-yellow-50 rounded-xl"
          >
            {mobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="xl:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl"
          >
            {/* Search Bar */}
            <div className="px-6 pt-6">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search services..."
                  className="w-full pl-10 pr-4 py-3 bg-white/50 backdrop-blur-sm border border-gray-200 rounded-xl text-sm focus:outline-none focus:border-yellow-400 focus:ring-2 focus:ring-yellow-500/20"
                />
                <FiSearch className="absolute left-3.5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              </div>
            </div>

            {/* Navigation Items */}
            <div className="px-6 py-6 space-y-2">
              {navItems.map((item) => (
                <div key={item.label} className="py-3 border-b border-gray-100 last:border-0">
                  <a
                    href={item.href || "#"}
                    className="flex items-center justify-between text-gray-700 hover:text-yellow-600 font-medium py-2"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    <span>{item.label}</span>
                    {item.type === "mega" && (
                      <FiChevronDown className="w-4 h-4 text-gray-400" />
                    )}
                  </a>
                  
                  {/* Mobile Mega Menu Items */}
                  {item.type === "mega" && item.data && (
                    <div className="ml-4 mt-2 space-y-3">
                      {megaMenuItems[item.data].items.map((category) => (
                        <div key={category.category}>
                          <h5 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                            {category.category}
                          </h5>
                          <div className="space-y-2">
                            {category.services.slice(0, 2).map((service) => (
                              <a
                                key={service.name}
                                href="#"
                                className="flex items-center gap-3 p-2 rounded-lg hover:bg-yellow-50"
                              >
                                <div className="w-8 h-8 rounded-lg bg-yellow-100 flex items-center justify-center">
                                  {React.createElement(service.icon, { className: "w-4 h-4 text-yellow-600" })}
                                </div>
                                <span className="text-sm text-gray-700">{service.name}</span>
                              </a>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Mobile CTA Section */}
            <div className="px-6 pb-6 pt-4 bg-gradient-to-b from-transparent to-yellow-50/50">
              <div className="space-y-4">
                <button className="w-full py-3.5 bg-gradient-to-r from-yellow-500 to-amber-600 text-white rounded-xl font-semibold shadow-lg shadow-yellow-500/25">
                  Start Project
                </button>
                <div className="flex gap-4">
                  <button className="flex-1 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:border-yellow-400 hover:text-yellow-600 transition-colors">
                    Sign In
                  </button>
                  <button className="flex-1 py-3 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:border-yellow-400 hover:text-yellow-600 transition-colors">
                    Contact Sales
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Active Menu Indicator */}
      {activeServiceMenu && (
        <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-yellow-500 via-amber-500 to-orange-500" />
      )}
    </header>
  );
}