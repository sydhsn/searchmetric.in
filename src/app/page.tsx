// app/page.tsx - Advanced Social Media Marketing Website
"use client";

import React from "react";

import { CtaSection } from "@/components/home/CtaSection";
import { ClientsSection } from "@/components/home/ClientsSection";
import { Footer } from "@/components/home/Footer";
import { Header } from "@/components/home/Header";
import { HeroSection } from "@/components/home/HeroSection";
import { ProcessSection } from "@/components/home/ProcessSection";
import { ServicesSection } from "@/components/home/ServicesSection";
import { SocialShowcaseSection } from "@/components/home/SocialShowcaseSection";
import { StatsSection } from "@/components/home/StatsSection";
import {
  clients,
  hero,
  megaMenuItems,
  navItems,
  portfolio,
  process,
  services,
  socialShowcases,
  stats,
  unsplashImages
} from "@/content/homeData";
import { brand } from "@/constants";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-900 overflow-hidden font-sans">
      <div className="fixed inset-0 -z-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-yellow-50 rounded-full blur-3xl opacity-20" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-50 rounded-full blur-3xl opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-yellow-50/10" />
      </div>

      <Header brand={brand} navItems={navItems} megaMenuItems={megaMenuItems} />
      <HeroSection hero={hero} portfolio={portfolio} backgroundImage={unsplashImages.hero} />
      <ClientsSection clients={clients} />
      <SocialShowcaseSection socialShowcases={socialShowcases} />
      <ServicesSection services={services} />
      <StatsSection stats={stats} />
      <ProcessSection process={process} />
      <CtaSection />
      <Footer brand={brand} />
    </main>
  );
}
