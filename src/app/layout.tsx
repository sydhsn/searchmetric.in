import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { seo, organizationSchema } from "@/content/siteCopy";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: {
    default: seo.home.title,
    template: `%s | ${seo.siteName}`,
  },
  description: seo.home.description,
  keywords: seo.home.keywords,
  authors: [{ name: seo.siteName, url: seo.siteUrl }],
  creator: seo.siteName,
  metadataBase: new URL(seo.siteUrl),
  alternates: { canonical: "/" },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: { url: "/favicon.png", sizes: "180x180", type: "image/png" },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    url: seo.siteUrl,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
    images: [
      {
        url: seo.home.ogImage,
        width: 1200,
        height: 630,
        alt: `${seo.siteName} — SEO & Digital Marketing Agency, Baisi, Purnea, Bihar`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.home.title,
    description: seo.home.description,
    site: seo.twitterHandle,
    images: [seo.home.ogImage],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    // Add your Bing verification code from https://www.bing.com/webmasters/about
    // other: { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION || "" },
    // Add your Yandex code from https://webmaster.yandex.com
    // yandex: process.env.NEXT_PUBLIC_YANDEX_SITE_VERIFICATION || "",
  },
};

// ──────────────────────────────────────────────────────────
// WebSite Schema — enables Google Sitelinks Search Box
// ──────────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://searchmetric.in/#website",
  "name": "Searchmetric",
  "url": "https://searchmetric.in",
  "description": "SEO & digital marketing agency serving Seemanchal Bihar — Katihar, Purnea, Kishanganj, Barsoi, Baisi, Dalkhola.",
  "inLanguage": "en-IN",
  "potentialAction": {
    "@type": "SearchAction",
    "target": {
      "@type": "EntryPoint",
      "urlTemplate": "https://searchmetric.in/blog?search={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

// ──────────────────────────────────────────────────────────
// BreadcrumbList Schema — global site structure for Google
// ──────────────────────────────────────────────────────────
const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://searchmetric.in" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://searchmetric.in/services" },
    { "@type": "ListItem", "position": 3, "name": "Local SEO", "item": "https://searchmetric.in/services/local-seo" },
    { "@type": "ListItem", "position": 4, "name": "Free SEO Audit", "item": "https://searchmetric.in/free-audit" },
    { "@type": "ListItem", "position": 5, "name": "Blog", "item": "https://searchmetric.in/blog" },
    { "@type": "ListItem", "position": 6, "name": "Contact", "item": "https://searchmetric.in/contact" },
  ],
};

// ──────────────────────────────────────────────────────────
// Professional Service Schema (complements LocalBusiness)
// ──────────────────────────────────────────────────────────
const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": "https://searchmetric.in/#professionalservice",
  "name": "Searchmetric — SEO & Digital Marketing Agency",
  "url": "https://searchmetric.in",
  "telephone": "+91-90801-35567",
  "email": "info@searchmetric.in",
  "image": "https://searchmetric.in/searchmetric-logo.svg",
  "logo": "https://searchmetric.in/searchmetric-logo.svg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Hospital Road, Purab Chowk",
    "addressLocality": "Baisi",
    "addressRegion": "Bihar",
    "postalCode": "854311",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "25.8",
    "longitude": "87.7",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "19:00",
    },
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Digital Marketing Services",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Local SEO & Google Maps Optimization",
          "description": "Get your business ranked in the top 3 on Google Maps for searches in Katihar, Purnea, Kishanganj, Baisi, Barsoi, Dalkhola, and across Seemanchal Bihar.",
          "url": "https://searchmetric.in/services/local-seo",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Social Media Marketing",
          "description": "Instagram and Facebook marketing and management for local businesses across Seemanchal Bihar.",
          "url": "https://searchmetric.in/services/social-media-management",
        },
      },
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Lead Generation Ads (Meta & Google)",
          "description": "Targeted Meta and Google lead ad campaigns to generate real customer enquiries for businesses in Bihar.",
          "url": "https://searchmetric.in/services/lead-ads",
        },
      },
    ],
  },
  "areaServed": [
    { "@type": "City", "name": "Katihar" },
    { "@type": "City", "name": "Purnea" },
    { "@type": "City", "name": "Kishanganj" },
    { "@type": "City", "name": "Barsoi" },
    { "@type": "City", "name": "Baisi" },
    { "@type": "City", "name": "Dalkhola" },
    { "@type": "City", "name": "Siliguri" },
    { "@type": "State", "name": "Bihar" },
  ],
  "priceRange": "₹₹",
  "sameAs": [
    "https://instagram.com/searchmetric.in",
    "https://facebook.com/searchmetric.in",
    "https://linkedin.com/company/searchmetric",
  ],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Preconnect for performance */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* ── Google Analytics GA4 ── ADD your G-XXXXXXXX in Vercel env as NEXT_PUBLIC_GA_ID */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', { page_path: window.location.pathname });
                `,
              }}
            />
          </>
        )}

        {/* LocalBusiness JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        {/* WebSite JSON-LD (enables Sitelinks Search Box) */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        {/* BreadcrumbList JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        {/* ProfessionalService JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(professionalServiceSchema) }}
        />
      </head>
      <body suppressHydrationWarning className={`${manrope.variable} bg-white text-slate-900 antialiased`}>
        {/* Skip to content for accessibility + SEO */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 bg-brand-600 text-white px-4 py-2 rounded z-50"
        >
          Skip to main content
        </a>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
