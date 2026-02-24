// ============ CENTRALIZED SEO CONFIG ============
// All metadata managed from here — used in layout.tsx and any page

export const seo = {
  // ── Site-wide defaults (used in layout.tsx) ──
  siteName: "Searchmetric.in",
  siteUrl: "https://searchmetric.in",
  twitterHandle: "@searchmetricin",
  locale: "en_IN",
  logoUrl: "/searchmetric-logo.svg",

  // ── Home Page SEO ──
  home: {
    title: "Searchmetric | SEO & Digital Marketing Agency in Mira Road, Mumbai",
    description:
      "Searchmetric is a trusted SEO and social media marketing agency in Mira Road, Mumbai. We help local businesses across India rank higher on Google, get more calls, and grow faster. Free consultation available.",
    keywords: [
      "SEO agency Mira Road",
      "digital marketing agency Mira Road",
      "SEO company Mumbai",
      "digital marketing Mumbai",
      "local SEO Mira Road",
      "SEO services Thane",
      "digital marketing Thane",
      "Google Maps ranking Mumbai",
      "Instagram marketing Mumbai",
      "Facebook ads Mumbai",
      "social media marketing Mumbai",
      "lead generation Mumbai",
      "SEO for local business Mumbai",
      "best SEO agency in Mira Road",
      "affordable digital marketing Mira Road",
      "social media agency near me",
      "digital marketing for small business Mumbai",
      "SEO agency India",
      "digital marketing agency India",
      "affordable SEO India",
      "social media marketing India",
      "online marketing for Indian businesses",
      "Searchmetric",
      "Searchmetric Mira Road",
      "Searchmetric Mumbai",
    ].join(", "),
    ogImage: "/og-home.jpg",
  },

  // ── Services Page SEO ──
  services: {
    title: "Our Services | SEO, Social Media & Lead Ads — Searchmetric Mumbai",
    description:
      "Explore Searchmetric's digital marketing services — local SEO, Google Maps optimization, Instagram & Facebook marketing, lead ads, and content writing for Indian businesses.",
    keywords: [
      "SEO services Mumbai",
      "social media marketing services India",
      "Google Maps optimization Mumbai",
      "Instagram marketing services",
      "Facebook lead ads India",
      "content writing SEO India",
      "Searchmetric services",
    ].join(", "),
    ogImage: "/og-services.jpg",
  },

  // ── Contact Page SEO ──
  contact: {
    title: "Contact Searchmetric | Free SEO Consultation — Mira Road, Mumbai",
    description:
      "Get in touch with Searchmetric for a free SEO and digital marketing consultation. We serve businesses in Mira Road, Mumbai, Thane, and across India.",
    keywords: [
      "contact Searchmetric",
      "free SEO consultation Mumbai",
      "digital marketing agency contact Mira Road",
      "hire SEO agency Mumbai",
    ].join(", "),
    ogImage: "/og-contact.jpg",
  },

  // ── About Page SEO ──
  about: {
    title: "About Searchmetric | Digital Marketing Agency — Mira Road, Mumbai",
    description:
      "Learn about Searchmetric — a Mira Road based digital marketing agency helping Indian businesses grow online with SEO, social media, and lead generation since day one.",
    keywords: [
      "about Searchmetric",
      "digital marketing agency Mira Road",
      "SEO company Mumbai",
      "who is Searchmetric",
    ].join(", "),
    ogImage: "/og-about.jpg",
  },
};

// ============ CONTACT DETAILS ============
// Update these when you have real details — used across all pages
export const contact = {
  phone: "+91 98765 43210",          // ← Replace with real number
  phoneHref: "tel:+919876543210",    // ← Replace with real number
  email: "hello@searchmetric.in",    // ← Replace with real email
  emailHref: "mailto:hello@searchmetric.in",
  whatsapp: "https://wa.me/919876543210", // ← Replace with real number
  address: {
    line1: "Mira Road",
    line2: "Thane — 401107",
    city: "Mumbai",
    state: "Maharashtra",
    country: "India",
    full: "Mira Road, Thane — 401107, Mumbai, Maharashtra, India",
  },
  hours: {
    weekdays: "Mon – Sat: 9:00 AM – 7:00 PM",
    sunday: "Sunday: By Appointment Only",
  },
  social: {
    instagram: "https://instagram.com/searchmetric.in",  // ← Replace
    facebook: "https://facebook.com/searchmetric.in",    // ← Replace
    linkedin: "https://linkedin.com/company/searchmetric", // ← Replace
  },
};