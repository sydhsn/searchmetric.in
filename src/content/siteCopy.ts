// ============================================================
// SEARCHMETRIC — CENTRALIZED SEO + SITE CONFIG
// All metadata, keywords, OG tags managed from this single file.
// ============================================================

export const seo = {
  siteName: "Searchmetric",
  siteUrl: "https://searchmetric.in",
  twitterHandle: "@searchmetricin",
  locale: "en_IN",
  logoUrl: "/searchmetric-logo.svg",

  home: {
    title: "Searchmetric | SEO & Digital Marketing Agency in Mira Road, Mumbai",
    description: "Searchmetric is a trusted SEO and social media marketing agency in Mira Road, Mumbai. We help local businesses across India rank higher on Google, get more calls, and grow faster. Free consultation available.",
    keywords: ["SEO agency Mira Road","digital marketing agency Mira Road","SEO company Mumbai","digital marketing Mumbai","local SEO Mira Road","SEO services Thane","digital marketing Thane","Google Maps ranking Mumbai","Instagram marketing Mumbai","Facebook ads Mumbai","social media marketing Mumbai","lead generation Mumbai","SEO for local business Mumbai","best SEO agency in Mira Road","affordable digital marketing Mira Road","social media agency near me","digital marketing for small business Mumbai","SEO agency India","digital marketing agency India","affordable SEO India","social media marketing India","online marketing for Indian businesses","Searchmetric","Searchmetric Mira Road","Searchmetric Mumbai"].join(", "),
    ogImage: "/og-home.jpg",
  },

  services: {
    title: "Digital Marketing Services | SEO, Social Media & Lead Ads — Searchmetric Mumbai",
    description: "Explore Searchmetric's full range of digital marketing services — local SEO, Google Maps optimization, Instagram & Facebook marketing, lead ads, and content writing for Indian businesses in Mumbai, Mira Road & Thane.",
    keywords: ["SEO services Mumbai","social media marketing services India","Google Maps optimization Mumbai","Instagram marketing services Mumbai","Facebook lead ads India","content writing SEO India","digital marketing services Mira Road","Searchmetric services","online marketing services Mumbai","affordable marketing agency Mumbai"].join(", "),
    ogImage: "/og-services.jpg",
  },

  socialMedia: {
    title: "Social Media Management Services in Mumbai | Instagram & Facebook Marketing — Searchmetric",
    description: "Professional social media management for Indian businesses. We handle your Instagram, Facebook & WhatsApp Business — from content creation to community management. Grow your followers, engagement & sales. Based in Mira Road, Mumbai.",
    keywords: ["social media management Mumbai","Instagram marketing agency Mumbai","Facebook page management India","social media marketing Mira Road","Instagram content creation Mumbai","social media agency Thane","WhatsApp Business marketing India","social media management for small business Mumbai","Instagram growth agency India","Facebook ads management Mumbai","social media content strategy India","social media marketing agency near me","affordable social media management India","Searchmetric social media"].join(", "),
    ogImage: "/og-social-media.jpg",
    canonical: "/services/social-media-management",
  },

  localSeo: {
    title: "Local SEO Services in Mumbai | Google Maps Ranking & GBP Optimization — Searchmetric",
    description: "Rank #1 on Google Maps and local search in Mumbai, Mira Road & Thane. Searchmetric's local SEO services include Google Business Profile optimization, citation building, review management & local content. Free audit available.",
    keywords: ["local SEO Mumbai","Google Maps ranking Mumbai","Google Business Profile optimization India","local SEO Mira Road","local SEO Thane","GBP optimization Mumbai","Google My Business management India","local citation building India","review management Mumbai","local search ranking India","near me SEO Mumbai","local SEO for restaurants Mumbai","local SEO for clinics Mumbai","local SEO for salons Mumbai","Google Maps top 3 Mumbai","local business SEO India","affordable local SEO Mumbai","Searchmetric local SEO"].join(", "),
    ogImage: "/og-local-seo.jpg",
    canonical: "/services/local-seo",
  },

  leadAds: {
    title: "Lead Generation Ads in Mumbai | Facebook, Instagram & Google Lead Ads — Searchmetric",
    description: "Get qualified leads every day with targeted Meta and Google lead ad campaigns. Searchmetric manages lead ads for local businesses in Mumbai, Mira Road & Thane — clear ROI, transparent pricing, no lock-in contracts.",
    keywords: ["lead ads Mumbai","Facebook lead ads Mumbai","Instagram lead ads India","Google lead generation ads Mumbai","lead generation agency Mumbai","lead generation Mira Road","Meta ads agency India","Facebook advertising agency Mumbai","Instagram advertising India","Google Ads agency Mumbai","pay per lead India","lead generation for clinics Mumbai","lead generation for real estate Mumbai","lead generation for coaching institutes India","affordable lead generation India","Searchmetric lead ads","PPC agency Mumbai","performance marketing agency India"].join(", "),
    ogImage: "/og-lead-ads.jpg",
    canonical: "/services/lead-ads",
  },

  contact: {
    title: "Contact Searchmetric | Free SEO & Digital Marketing Consultation — Mira Road, Mumbai",
    description: "Get in touch with Searchmetric for a free SEO and digital marketing consultation. We serve businesses in Mira Road, Mumbai, Thane, and across India. Book your free 30-minute strategy call today.",
    keywords: ["contact Searchmetric","free SEO consultation Mumbai","digital marketing agency contact Mira Road","hire SEO agency Mumbai","free marketing consultation India","book consultation digital marketing Mumbai"].join(", "),
    ogImage: "/og-contact.jpg",
  },

  about: {
    title: "About Searchmetric | Digital Marketing Agency — Mira Road, Mumbai",
    description: "Learn about Searchmetric — a Mira Road based digital marketing agency helping Indian businesses grow online with SEO, social media, and lead generation. Meet our team of certified experts.",
    keywords: ["about Searchmetric","digital marketing agency Mira Road","SEO company Mumbai","who is Searchmetric","Searchmetric team","best digital marketing agency Mira Road"].join(", "),
    ogImage: "/og-about.jpg",
  },

  blog: {
    title: "Digital Marketing Blog | SEO Tips & Social Media Insights — Searchmetric",
    description: "Read Searchmetric's blog for actionable SEO tips, social media strategies, and digital marketing insights tailored for Indian businesses.",
    keywords: ["digital marketing blog India","SEO tips India","social media marketing tips","Searchmetric blog"].join(", "),
    ogImage: "/og-blog.jpg",
  },
};

// ============================================================
// CONTACT DETAILS — Update with real info before going live
// ============================================================
export const contact = {
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  email: "hello@searchmetric.in",
  emailHref: "mailto:hello@searchmetric.in",
  whatsapp: "https://wa.me/919876543210?text=Hi%2C%20I%20found%20you%20on%20your%20website%20and%20would%20like%20to%20know%20more%20about%20your%20services.",
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
    instagram: "https://instagram.com/searchmetric.in",
    facebook: "https://facebook.com/searchmetric.in",
    linkedin: "https://linkedin.com/company/searchmetric",
    whatsappBusiness: "https://wa.me/919876543210",
  },
};

// ============================================================
// ORGANIZATION STRUCTURED DATA (JSON-LD)
// ============================================================
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Searchmetric",
  "url": "https://searchmetric.in",
  "logo": "https://searchmetric.in/searchmetric-logo.svg",
  "description": "Searchmetric is a leading SEO and digital marketing agency in Mira Road, Mumbai.",
  "telephone": "+91-98765-43210",
  "email": "hello@searchmetric.in",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Mira Road",
    "addressLocality": "Mira Road East",
    "addressRegion": "Maharashtra",
    "postalCode": "401107",
    "addressCountry": "IN",
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],
      "opens": "09:00",
      "closes": "19:00",
    },
  ],
  "sameAs": [
    "https://instagram.com/searchmetric.in",
    "https://facebook.com/searchmetric.in",
    "https://linkedin.com/company/searchmetric",
  ],
  "priceRange": "₹₹",
  "areaServed": ["Mira Road","Mumbai","Thane","Maharashtra","India"],
};
