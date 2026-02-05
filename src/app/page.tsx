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
import SocialClients from "./components/home/SocialClients";
import SpecialCustomizedServices from "./components/home/SpecialCustomizedServices";
import Testimonials from "./components/home/Testimonials";
import Contact from "./components/home/Contact";

/* -----------------------------
   SEO Metadata Component
------------------------------ */
const SEOMetadata = () => (
  <Head>
    <title>SearchMetric - SEO & Social Media Marketing Agency for Indian Businesses</title>
    <meta name="description" content="Grow your business with easy-to-understand SEO, digital marketing, and Instagram & Facebook strategies. Simple plans, clear results for Indian SMEs." />
    <meta name="keywords" content="SEO India, Social Media Marketing, Digital Marketing Agency, Google Maps Ranking, Instagram Marketing, Facebook Ads India, Local SEO Services" />
    <meta name="author" content="SearchMetric" />
    <meta property="og:title" content="SearchMetric - SEO & Social Media Marketing Agency" />
    <meta property="og:description" content="Premium digital marketing services for Indian businesses. Get more leads, calls, and online visibility." />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://searchmetric.in" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="SearchMetric - Digital Marketing Agency" />
    <meta name="twitter:description" content="Transform your online presence with our proven SEO and social media strategies" />
    <link rel="canonical" href="https://searchmetric.in" />
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
          <SocialClients />
          <Features />
          <Testimonials />
          <FAQs />
          <Contact />
        </main>
      </div>
    </>
  );
}









