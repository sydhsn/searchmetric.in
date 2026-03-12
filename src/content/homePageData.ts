/* ============================================
   HOME PAGE DATA - Centralized Content
   ============================================
   All home page content is managed here.
   Components import and use this data.
*/

// ============ HERO SECTION ============
export const heroData = {
  badge: {
    text: "Serving Businesses Across Seemanchal, Bihar",
    stars: 5,
  },
  headline: {
    main: "Grow Your Business with",
    highlight: "SEO & Digital Marketing",
    end: "in Seemanchal Bihar.",
  },
  description:
    "Searchmetric helps local businesses in Katihar, Purnea, Kishanganj, Barsoi, Dalkhola & across Seemanchal rank higher on Google, get more leads, and grow faster — with simple, honest, and results-focused digital marketing.",
  cta: {
    primary: {
      text: "Get Your Free SEO Proposal",
      href: "/contact",
      ariaLabel: "Get a free SEO and digital marketing proposal from Searchmetric",
    },
    secondary: {
      text: "Watch Demo",
      href: "#demo",
      ariaLabel: "Watch Searchmetric demo video",
    },
  },
  benefits: [
    "✓ Free 30-minute SEO Strategy Call",
    "✓ Custom Digital Marketing Growth Plan",
    "✓ No Long-Term Contracts — Cancel Anytime",
  ],
};

// ============ FEATURES SECTION ============
export const featuresSection = {
  badge: "Why Choose Searchmetric",
  title: "Digital Marketing Built for",
  titleHighlight: "Indian Business Growth",
  description:
    "We combine proven SEO strategies, creative social media marketing, and data-driven results to help Indian businesses get found online, attract more customers, and grow consistently.",
};

// ============ FEATURES DATA ============
export const featuresData = [
  {
    id: "fast-results",
    title: "Fast, Measurable Results",
    description:
      "See real growth in website traffic, leads, and rankings within the first 30 days — no guesswork, just results.",
    icon: "zap",
    color: "text-amber-600",
  },
  {
    id: "data-security",
    title: "100% Safe & Secure",
    description:
      "Your business data is protected with enterprise-grade security — we handle your digital presence with complete confidentiality.",
    icon: "shield",
    color: "text-emerald-600",
  },
  {
    id: "support",
    title: "24/7 Dedicated Support",
    description:
      "Got a question at midnight? We're here. Our support team operates on Indian time zones so you're never left waiting.",
    icon: "clock",
    color: "text-sky-600",
  },
  {
  id: "certified",
  title: "Skilled & Passionate Team",
  description:
    "We're a team of dedicated SEO and social media experts who stay ahead of every Google update and algorithm change — so your business always stays on top.",
  icon: "award",
  color: "text-fuchsia-600",
},
];

// ============ SERVICES SECTION ============
export const servicesSection = {
  badge: "Our Services",
  title: "Three Services That Drive",
  titleHighlight: "Real Business Growth",
  description: "Choose one service or combine all three for maximum impact.",
};

export const servicesData = [
  {
    id: "social-media",
    title: "Social Media Management",
    description: "Content, posting, community engagement & growth",
    icon: "instagram",
    features: [
      "Daily content creation",
      "Community management",
      "Engagement optimization",
      "Growth strategy",
    ],
    href: "/services/social-media-management",
    learnMore: "Learn more about Social Media",
    getQuote: "Get quote for Social Media",
  },
  {
    id: "local-seo",
    title: "Local SEO & Google Maps",
    description: "Get found locally. Rank on Google Maps. Get phone calls.",
    icon: "mapPin",
    features: [
      "Google Business Profile",
      "Local keyword ranking",
      "Google Maps optimization",
      "Review management",
    ],
    href: "/services/local-seo",
    learnMore: "Learn more about Local SEO",
    getQuote: "Get quote for Local SEO",
  },
  {
    id: "lead-ads",
    title: "Lead Ads (Instagram, Facebook, Google)",
    description: "Targeted ads that generate qualified leads.",
    icon: "target",
    features: [
      "Lead form setup",
      "Audience targeting",
      "Multi-platform campaigns",
      "Performance optimization",
    ],
    href: "/services/lead-ads",
    learnMore: "Learn more about Lead Ads",
    getQuote: "Get quote for Lead Ads",
  },
];

// ============ INTRODUCTIONS SECTION ============
export const introductionsSection = {
  badge: "Simple Introductions",
  title: "Understand the basics in plain words",
  description: "No complex English. Just quick, helpful points.",
};

export const introductionsData = [
  {
    id: "what-is-seo",
    title: "What is SEO?",
    icon: "search",
    description:
      "SEO helps your business show up on Google. People near you can find you easily.",
  },
  {
    id: "what-is-sme",
    title: "What is SME?",
    icon: "users",
    description:
      "SME means small and medium business. We make marketing simple for small teams.",
  },
  {
    id: "social-basics",
    title: "Social Media Basics",
    icon: "instagram",
    description:
      "We create easy posts, stories and ads. People remember your brand.",
  },
];

// ============ TESTIMONIALS SECTION ============
export const testimonialsSection = {
  badge: "Client Success Stories",
  title: "Results from",
  titleHighlight: "Real Clients",
  description: "See how businesses like yours are growing with our services.",
};

// ============ TESTIMONIALS DATA ============

export const testimonialsData = [
  {
    id: "testimonial-1",
    name: "Jabeen Fatima",
    role: "Owner",
    company: "TechMinds Academy",
    text: "Searchmetric helped TechMinds Academy rank higher on Google and reach more students online. Our inquiries have grown significantly since we started working with them. Highly recommend their SEO services!",
    rating: 5,
    image: "/testimonials/jabeen.jpg",
  },
  {
    id: "testimonial-2",
    name: "Samsuddin Ansari",
    role: "Owner",
    company: "Galaxy Documents",
    text: "Thanks to Searchmetric, our Google Maps visibility improved drastically and we started getting more walk-in customers. Their digital marketing strategies are simple, effective, and worth every rupee.",
    rating: 5,
    image: "/testimonials/samsuddin.jpg",
  },
  {
    id: "testimonial-3",
    name: "Pawan Kumar",
    role: "Owner",
    company: "Mobimerz",
    text: "Searchmetric transformed our online presence completely. Our website traffic increased and we're now getting quality leads through social media. The team is professional, transparent, and always available.",
    rating: 5,
    image: "/testimonials/pawan.jpg",
  },
];

// ============ CTA SECTION ============
export const ctaSection = {
  title: "Let's Grow Your Business Online — Starting Today.",
  subtitle:
    "Ready to rank higher in Katihar, Purnea, Kishanganj or wherever you're based in Seemanchal? Book your free consultation and get a custom digital marketing plan built around your real goals.",
  cta: {
    text: "Get My Free Consultation",
    href: "/contact",
    ariaLabel: "Book your free SEO and digital marketing consultation with Searchmetric",
  },
};

// ============ BENEFITS SECTION ============
export const benefitsSection = {
  badge: "What You Gain with Searchmetric",
  title: "Real Business Results, Not Just Promises",
  description:
    "We focus on what actually moves the needle for your business — more visibility, more customers, and consistent growth you can track every month.",
};

export const benefitsData = [
  {
    id: "calls",
    icon: "phone",
    title: "More Customer Calls",
    description:
      "Get more inbound calls from local customers actively searching for your service on Google.",
  },
  {
    id: "messages",
    icon: "messageCircle",
    title: "More DMs & Enquiries",
    description:
      "Turn your social media presence into a lead machine — more real messages from people ready to buy.",
  },
  {
    id: "local-rank",
    icon: "mapPin",
    title: "Higher Google Maps Ranking",
    description:
      "Rank higher on Google Maps and local search so nearby customers find your business first — not your competitor's.",
  },
  {
    id: "audience",
    icon: "users",
    title: "Reach the Right Audience",
    description:
      "We target the exact people looking for your product or service — so every rupee you spend works harder.",
  },
  {
    id: "growth",
    icon: "trendingUp",
    title: "Transparent Monthly Growth Reports",
    description:
      "No confusing dashboards or jargon. You get clear, simple monthly reports showing exactly how your business is growing.",
  },
  {
    id: "security",
    icon: "shield",
    title: "Your Data, Always Safe",
    description:
      "We handle your business information with complete confidentiality — your data is always secure and never shared.",
  },
];

// ============ FAQs SECTION ============
export const faqsSection = {
  badge: "Frequently Asked Questions",
  title: "Everything You Need",
  titleHighlight: "to Know",
  description:
    "We believe in complete transparency. Here are honest answers to the questions most business owners ask before getting started with Searchmetric.",
};

export const faqsData = [
  {
    id: "start-time",
    question: "How quickly can we get started?",
    answer:
      "Pretty quickly! Once we have a brief intro call to understand your business goals, we can typically onboard you and begin work within 3–5 business days.",
    icon: "clock",
    color: "from-brand-600 to-purple-600",
  },
  {
    id: "contract",
    question: "Do I need to sign a long-term contract?",
    answer:
      "Not at all. We work on flexible monthly plans so you're never locked in. Most of our clients choose to stay because they see real results — not because they have to.",
    icon: "fileText",
    color: "from-emerald-600 to-teal-600",
  },
  {
    id: "reports",
    question: "Will I receive regular performance reports?",
    answer:
      "Absolutely. Every month you'll receive a clear, easy-to-understand report covering leads generated, calls received, reach, and overall growth — no confusing data, just what matters.",
    icon: "trendingUp",
    color: "from-amber-600 to-orange-600",
  },
  {
    id: "reviews",
    question: "Can you help us get more Google reviews?",
    answer:
      "Yes. We guide you through a simple process to collect genuine reviews from your happy customers and professionally respond to them — helping build trust and improve your local ranking.",
    icon: "star",
    color: "from-fuchsia-600 to-pink-600",
  },
  {
  id: "setup",
  question: "Is the initial setup included in the plan?",
  answer:
    "Yes, completely. We handle everything from setting up your business pages and lead forms to installing tracking — so you don't have to worry about the technical side at all.",
  icon: "shield",
  color: "from-emerald-600 to-teal-600", // ← use a confirmed working color
},
];

// ============ CHALLENGES SECTION ============
export const challengesSection = {
  badge: "Sound Familiar?",
  title: "Real Problems We",
  titleHighlight: "Solve Every Day",
  description:
    "These are the most common digital marketing problems faced by businesses in Katihar, Purnea, Kishanganj and across Seemanchal Bihar. Here's how Searchmetric turns each one into a growth opportunity.",
};

export const challengesData = [
  {
    id: "calls",
    title: "Not Getting Enough Calls",
    description:
      "People find your business online but never call. We optimise your listing and call-to-action to turn visitors into real customers.",
    icon: "phone",
    gradient: "from-pink-600 to-rose-600",
    bgGradient: "from-pink-50 to-rose-50",
  },
  {
    id: "visibility",
    title: "Not Showing Up on Google",
    description:
      "If your business isn't appearing in local search or Google Maps, you're losing customers to competitors every day. We fix that.",
    icon: "search",
    gradient: "from-red-600 to-orange-600",
    bgGradient: "from-red-50 to-orange-50",
  },
  {
    id: "engagement",
    title: "Social Media With No Real Leads",
    description:
      "Getting likes is easy — getting enquiries is hard. We create content that starts real conversations and brings in genuine leads.",
    icon: "messageCircle",
    gradient: "from-orange-600 to-amber-600",
    bgGradient: "from-orange-50 to-amber-50",
  },
  {
    id: "tracking",
    title: "No Idea What's Actually Working",
    description:
      "Without proper tracking, you're running blind. We set up clear monthly reports so you always know where your growth is coming from.",
    icon: "trendingUp",
    gradient: "from-purple-600 to-violet-600",
    bgGradient: "from-purple-50 to-violet-50",
  },
  {
    id: "posting",
    title: "Inconsistent & Unplanned Posting",
    description:
      "Posting randomly without a strategy rarely works. We build a structured monthly content calendar tailored to your business and audience.",
    icon: "target",
    gradient: "from-blue-600 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    id: "ad-spend",
    title: "Wasting Money on Ads With No Returns",
    description:
      "Running ads without the right targeting is money down the drain. We manage your budget strategically to maximise ROI and quality leads.",
    icon: "zap",
    gradient: "from-emerald-600 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
  },
];

// ============ COMPANIES SECTION ============
export const companiesSection = {
  badge: "Our Clients",
  title: "Companies that",
  titleHighlight: "trust",
  titleEnd: "our work",
  description: "Real businesses we've worked with. No fake names, no inflated numbers — just honest work.",
};
export const companiesData = [
  {
    id: "techminds",
    name: "TechMinds Academy",
    tag: "Education & Training",
    icon: "bookOpen",
    color: "from-violet-600 to-purple-600",
  },
  {
    id: "galaxy",
    name: "Galaxy Documents",
    tag: "Legal & Documentation",
    icon: "fileText",
    color: "from-blue-600 to-cyan-600",
  },
  {
    id: "mobimerz",
    name: "Mobimerz",
    tag: "Web Development",
    icon: "globe",
    color: "from-emerald-600 to-teal-600",
  },
  {
    id: "makhdumi",
    name: "Makhdumi Welfare Society",
    tag: "NGO & Community",
    icon: "heart",
    color: "from-rose-600 to-pink-600",
  },
  {
    id: "asr",
    name: "A.S.R Enterprises",
    tag: "Mobile & Electronics",
    icon: "shoppingCart",
    color: "from-amber-600 to-orange-600",
  },
  {
    id: "spot-open",
    name: "Your Business Here",
    tag: "Be Our Next Client",
    icon: "plus",
    color: "from-slate-400 to-slate-500",
  },
];
// ============ COMPARISON SECTION ============
export const comparisonSection = {
  badge: "Why Choose Searchmetric",
  title: "Searchmetric",
  titleHighlight: "vs",
  titleEnd: "The Rest",
  description:
    "Not all digital marketing agencies are the same. Here's an honest look at what sets Searchmetric apart from other agencies and doing it yourself.",
};

export const comparisonData = [
  {
    id: "reports",
    label: "Clear, jargon-free monthly reports",
    searchMetric: true,
    others: false,
    diy: false,
  },
  {
    id: "maps",
    label: "Google Maps & local search ranking",
    searchMetric: true,
    others: true,
    diy: false,
  },
  {
    id: "language",
    label: "Simple communication, no technical jargon",
    searchMetric: true,
    others: false,
    diy: false,
  },
  {
    id: "lead-forms",
    label: "Lead form & enquiry setup included",
    searchMetric: true,
    others: true,
    diy: false,
  },
  {
    id: "replies",
    label: "Daily social media engagement & replies",
    searchMetric: true,
    others: false,
    diy: false,
  },
  {
    id: "support",
    label: "Dedicated support on Indian time zones",
    searchMetric: true,
    others: false,
    diy: false,
  },
  {
    id: "pricing",
    label: "Transparent pricing, no hidden charges",
    searchMetric: true,
    others: false,
    diy: false,
  },
];
// ============ CONTENT SERVICES SECTION ============
export const contentServicesSection = {
  badge: "Content & Copywriting",
  title: "Words That Bring Customers to Your Door",
  description:
    "Great content does two things — it ranks on Google and convinces real people to take action. At Searchmetric, we write content that does both, in clear and simple language your audience actually understands.",
};

export const contentServicesData = [
  {
    id: "content-writer",
    title: "Website & Ad Copywriting",
    icon: "edit3",
    description:
      "We write compelling, conversion-focused content for your website, social media ads, and captions — in a tone that feels natural to your brand and speaks directly to your customers.",
    bullets: [
      "Custom brand voice guide",
      "Short-form social media captions",
      "High-converting ad copy variants",
      "Professional proofreading & editing",
    ],
  },
  {
    id: "blog-writer",
    title: "SEO Blog Writing",
    icon: "fileText",
    description:
      "We create well-researched, keyword-optimised blog posts that help your business rank higher on Google, build authority in your industry, and keep your audience coming back for more.",
    bullets: [
      "In-depth keyword research & planning",
      "Structured outline with SEO headings",
      "Strategic internal linking",
      "Optimised meta titles & descriptions",
    ],
  },
];

// ============ PLATFORM MARKETING SECTION ============
export const platformMarketingSection = {
  badge: "Social Media Marketing",
  title: "Turn Instagram & Facebook Into Your Best Sales Channel",
  description:
    "Your customers are already scrolling — we make sure they stop at your content. Searchmetric manages your social media presence with eye-catching creatives, smart strategy, and consistent engagement that builds real followers and real leads.",
};

export const platformMarketingData = [
  {
    id: "instagram",
    platform: "Instagram Marketing",
    icon: "instagram",
    highlights: [
      "Engaging Reels & Stories that stop the scroll",
      "Targeted hashtag strategy for wider reach",
      "Daily community engagement & replies",
      "High-converting Instagram lead ads",
    ],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
  },
  {
    id: "facebook",
    platform: "Facebook Marketing",
    icon: "facebook",
    highlights: [
      "Consistent page growth & brand awareness",
      "Local group outreach to reach nearby customers",
      "Messenger-based lead generation",
      "Lookalike & retargeting ad campaigns",
    ],
    image: "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?w=600&q=80",
  },
];

// ============ SOCIAL CLIENTS SECTION ============
// NOTE: This section has been removed from the homepage.
// Fake brand data (Urban Style, Desi Delights etc.) was replaced — see companiesData for real clients.
export const socialClientsSection = {
  badge: "Client Success Stories",
  title: "Brands We",
  titleHighlight: "Manage & Grow",
  description: "",
};
export const socialClientsData: {
  id: string; name: string; platform: string; industry: string;
  followers: string; engagement: string; imageId: string;
}[] = [];

// ============ SPECIAL SERVICES SECTION ============
export const specialServicesSection = {
  badge: "Tailored for your needs",
  title: "Special",
  titleHighlight: "customized",
  titleEnd: "services for you",
  description: "Focused on three simple offerings that drive results.",
};

export const specialServicesData = [
  {
    id: "social-media",
    number: "01",
    title: "Social Media Management",
    description: "Plan, create, post and reply — simple and consistent.",
    icon: "instagram",
    gradient: "from-pink-600 via-purple-600 to-indigo-600",
    bgGradient: "from-pink-50 to-purple-50",
  },
  {
    id: "local-seo",
    number: "02",
    title: "Local SEO & Google Maps",
    description: "Show up near your area. Get more calls and visits.",
    icon: "mapPin",
    gradient: "from-emerald-600 via-teal-600 to-cyan-600",
    bgGradient: "from-emerald-50 to-teal-50",
  },
  {
    id: "lead-ads",
    number: "03",
    title: "Lead Ads (Instagram, Facebook & Google)",
    description: "Run budget-friendly ads to capture real leads.",
    icon: "target",
    gradient: "from-amber-600 via-orange-600 to-red-600",
    bgGradient: "from-amber-50 to-orange-50",
  },
];

// ============ SEO METADATA ============
export const seoMetadata = {
  title:
    "SearchMetric - SEO & Social Media Marketing Agency for Indian Businesses",
  description:
    "Grow your business with easy-to-understand SEO, digital marketing, and Instagram & Facebook strategies. Simple plans, clear results for Indian SMEs.",
  keywords:
    "SEO India, Social Media Marketing, Digital Marketing Agency, Google Maps Ranking, Instagram Marketing, Facebook Ads India, Local SEO Services",
  author: "SearchMetric",
  og: {
    title: "SearchMetric - SEO & Social Media Marketing Agency",
    description:
      "Premium digital marketing services for Indian businesses. Get more leads, calls, and online visibility.",
    type: "website",
    url: "https://searchmetric.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "SearchMetric - Digital Marketing Agency",
    description:
      "Transform your online presence with our proven SEO and social media strategies",
  },
  canonical: "https://searchmetric.in",
};

// ============ ICON MAP ============
export const iconMap: Record<string, string> = {
  zap: "zap",
  shield: "shield",
  clock: "clock",
  award: "award",
  search: "search",
  users: "users",
  instagram: "instagram",
  mapPin: "mapPin",
  target: "target",
  trendingUp: "trendingUp",
};
