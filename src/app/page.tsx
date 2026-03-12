"use client";

import Head from "next/head";
import Hero from './components/home/Hero';
import Services from './components/home/Services';
import BenefitsForUser from "./components/home/BenefitsForUser";
import ChallengesSection from "./components/home/ChallengesSection";
import CompaniesWorkedWith from "./components/home/CompaniesWorkedWith";
import Comparison from "./components/home/Comparison";
import ContentServices from "./components/home/ContentServices";
import FAQs from "./components/home/FAQs";
import Features from "./components/home/Features";
import Introductions from "./components/home/Introductions";
import PlatformMarketing from "./components/home/PlatformMarketing";
import SpecialCustomizedServices from "./components/home/SpecialCustomizedServices";
import Testimonials from "./components/home/Testimonials";
import Contact from "./components/home/Contact";
import { seoMetadata } from "@/content/homePageData";

/* -----------------------------
   SEO Metadata Component
------------------------------ */
const SEOMetadata = () => (
  <Head>
    <title>{seoMetadata.title}</title>
    <meta name="description" content={seoMetadata.description} />
    <meta name="keywords" content={seoMetadata.keywords} />
    <meta name="author" content={seoMetadata.author} />
    <meta property="og:title" content={seoMetadata.og.title} />
    <meta property="og:description" content={seoMetadata.og.description} />
    <meta property="og:type" content={seoMetadata.og.type} />
    <meta property="og:url" content={seoMetadata.og.url} />
    <meta name="twitter:card" content={seoMetadata.twitter.card} />
    <meta name="twitter:title" content={seoMetadata.twitter.title} />
    <meta name="twitter:description" content={seoMetadata.twitter.description} />
    <link rel="canonical" href={seoMetadata.canonical} />
  </Head>
);

/* -----------------------------
   Skip to Content Link (Accessibility)
------------------------------ */
const SkipToContent = () => (
  <a 
    href="#main-content" 
    className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 focus:z-50 focus:bg-black focus:text-white focus:p-4"
    aria-label="Skip to main content"
  >
    Skip to main content
  </a>
);

/* -----------------------------
   Page
------------------------------ */
export default function HomePage() {
  return (
    <>
      <SEOMetadata />
      <SkipToContent />
      <div className="min-h-screen">
        <main id="main-content" tabIndex={-1}>
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
          <Features />
          <Testimonials />
          <FAQs />
          <Contact />
        </main>
      </div>
    </>
  );
}









