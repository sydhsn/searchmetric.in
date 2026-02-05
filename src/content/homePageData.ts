/* ============================================
   HOME PAGE DATA - Centralized Content
   ============================================
   All home page content is managed here.
   Components import and use this data.
*/

// ============ HERO SECTION ============
export const heroData = {
  badge: {
    text: "Trusted by 500+ Businesses",
    stars: 5,
  },
  headline: {
    main: "Grow your business with",
    highlight: "SEO & Social Media",
    end: "— made simple.",
  },
  description:
    "Reach more local customers with easy-to-understand SEO, digital marketing, and Instagram & Facebook strategies. Simple plans, clear results.",
  cta: {
    primary: {
      text: "Get Free Proposal",
      href: "/contact",
      ariaLabel: "Get free marketing proposal for your business",
    },
    secondary: {
      text: "Watch Demo",
      href: "#demo",
      ariaLabel: "Watch demo video",
    },
  },
  benefits: [
    "✓ Free 30-minute consultation",
    "✓ Customized growth plan",
    "✓ No long-term contracts",
  ],
};

// ============ FEATURES SECTION ============
export const featuresSection = {
  badge: "Why Choose Us",
  title: "Engineered for",
  titleHighlight: "Indian Business Growth",
  description:
    "Proven strategies, creative excellence, and measurable results—tailored for ambitious Indian brands.",
};

export const featuresData = [
  {
    id: "fast-results",
    title: "Fast Results",
    description: "See measurable improvements within 30 days.",
    icon: "zap",
    color: "text-amber-600",
  },
  {
    id: "data-security",
    title: "Data Security",
    description: "Enterprise-grade security for your business data.",
    icon: "shield",
    color: "text-emerald-600",
  },
  {
    id: "support",
    title: "24/7 Support",
    description: "Support aligned to Indian time zones.",
    icon: "clock",
    color: "text-sky-600",
  },
  {
    id: "certified",
    title: "Certified Experts",
    description: "Google and Meta certified professionals.",
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

export const testimonialsData = [
  {
    id: "testimonial-1",
    name: "Rajesh Kumar",
    role: "Restaurant Owner",
    company: "The Spice House",
    text: "SearchMetric helped us get 40+ calls every week from Google Maps. Our business has grown 3x in 6 months.",
    rating: 5,
    image: "/testimonials/rajesh.jpg",
  },
  {
    id: "testimonial-2",
    name: "Priya Singh",
    role: "E-commerce Manager",
    company: "Fashion Store",
    text: "Their Instagram management increased our sales by 250%. The team is professional and always available.",
    rating: 5,
    image: "/testimonials/priya.jpg",
  },
  {
    id: "testimonial-3",
    name: "Amit Patel",
    role: "Service Center Owner",
    company: "Mobile Repair Pro",
    text: "Lead ads brought us high-quality customers. ROI is amazing. Worth every rupee spent.",
    rating: 5,
    image: "/testimonials/amit.jpg",
  },
];

// ============ CTA SECTION ============
export const ctaSection = {
  title: "Ready to Grow Your Business?",
  subtitle: "Start your free consultation today.",
  cta: {
    text: "Get Started Now",
    href: "/contact",
    ariaLabel: "Start your free consultation",
  },
};

// ============ BENEFITS SECTION ============
export const benefitsSection = {
  badge: "Benefits for You",
  title: "Simple wins for your business",
  description: "We keep things easy. No heavy words. Just clear results.",
};

export const benefitsData = [
  { id: "calls", icon: "phone", title: "More Calls", description: "Get more phone calls from nearby people." },
  { id: "messages", icon: "messageCircle", title: "More Messages", description: "More chats and DMs from real users." },
  { id: "local-rank", icon: "mapPin", title: "Better Local Rank", description: "Show up higher on Google Maps." },
  { id: "audience", icon: "users", title: "Right Audience", description: "Reach the people who want your service." },
  { id: "growth", icon: "trendingUp", title: "Clear Growth", description: "Simple monthly growth reports." },
  { id: "security", icon: "shield", title: "Safe & Secure", description: "Your data stays protected and private." },
];

// ============ FAQs SECTION ============
export const faqsSection = {
  badge: "FAQs",
  title: "Quick",
  titleHighlight: "answers",
  description: "Short and clear. No complex words.",
};

export const faqsData = [
  {
    id: "start-time",
    question: "How soon can we start?",
    answer: "We can start within 3–5 days after a quick call.",
    icon: "clock",
    color: "from-brand-600 to-purple-600",
  },
  {
    id: "contract",
    question: "Is there a long contract?",
    answer: "No. Start monthly. Upgrade later when you see results.",
    icon: "fileText",
    color: "from-emerald-600 to-teal-600",
  },
  {
    id: "reports",
    question: "Do you share reports?",
    answer: "Yes. A simple monthly report with leads, calls and reach.",
    icon: "trendingUp",
    color: "from-amber-600 to-orange-600",
  },
  {
    id: "reviews",
    question: "Can you help with reviews?",
    answer: "Yes. We guide you on getting honest reviews and reply to them.",
    icon: "star",
    color: "from-fuchsia-600 to-pink-600",
  },
  {
    id: "setup",
    question: "Is setup included?",
    answer: "Yes. We set up pages, forms and tracking for you.",
    icon: "checkCircle",
    color: "from-violet-600 to-purple-600",
  },
];

// ============ CHALLENGES SECTION ============
export const challengesSection = {
  badge: "Facing these issues?",
  title: "We solve common",
  titleHighlight: "business problems",
  description: "Recognize these? We have simple fixes.",
};

export const challengesData = [
  {
    id: "calls",
    title: "Not enough calls",
    description: "People visit but don't call. We fix that.",
    icon: "phone",
    gradient: "from-pink-600 to-rose-600",
    bgGradient: "from-pink-50 to-rose-50",
  },
  {
    id: "visibility",
    title: "Low Google visibility",
    description: "Your business doesn't show up near you.",
    icon: "search",
    gradient: "from-red-600 to-orange-600",
    bgGradient: "from-red-50 to-orange-50",
  },
  {
    id: "engagement",
    title: "Weak social engagement",
    description: "Likes without real conversations or leads.",
    icon: "messageCircle",
    gradient: "from-orange-600 to-amber-600",
    bgGradient: "from-orange-50 to-amber-50",
  },
  {
    id: "tracking",
    title: "No tracking or reports",
    description: "Hard to know what's working. We simplify.",
    icon: "trendingUp",
    gradient: "from-purple-600 to-violet-600",
    bgGradient: "from-purple-50 to-violet-50",
  },
  {
    id: "posting",
    title: "Random posting",
    description: "No plan. We bring a simple monthly calendar.",
    icon: "target",
    gradient: "from-blue-600 to-cyan-600",
    bgGradient: "from-blue-50 to-cyan-50",
  },
  {
    id: "ad-spend",
    title: "Wasted ad spend",
    description: "Money spent without leads. We focus on ROI.",
    icon: "zap",
    gradient: "from-emerald-600 to-teal-600",
    bgGradient: "from-emerald-50 to-teal-50",
  },
];

// ============ COMPANIES SECTION ============
export const companiesSection = {
  badge: "Trusted Partners",
  title: "Companies that",
  titleHighlight: "trust",
  titleEnd: "our work",
  description: "Delivering results across diverse industries in India.",
};

export const companiesData = [
  { id: "rwl", name: "Round World Logistics", tag: "Logistics", icon: "package", color: "from-blue-600 to-cyan-600" },
  { id: "immigration", name: "Immigration Experts", tag: "Consulting", icon: "globe", color: "from-emerald-600 to-teal-600" },
  { id: "empire", name: "Empire World Immigration", tag: "Services", icon: "plane", color: "from-violet-600 to-purple-600" },
  { id: "healthcare", name: "Prime Healthcare", tag: "Healthcare", icon: "heart", color: "from-rose-600 to-pink-600" },
  { id: "tutors", name: "Bright Tutors", tag: "Education", icon: "bookOpen", color: "from-amber-600 to-orange-600" },
  { id: "freshmart", name: "FreshMart", tag: "Grocery", icon: "shoppingCart", color: "from-green-600 to-lime-600" },
];

// ============ COMPARISON SECTION ============
export const comparisonSection = {
  badge: "Why Us",
  title: "SearchMetric",
  titleHighlight: "vs",
  titleEnd: "Others",
  description: "A quick comparison.",
};

export const comparisonData = [
  { id: "reports", label: "Clear monthly report", searchMetric: true, others: false, diy: false },
  { id: "maps", label: "Local map ranking", searchMetric: true, others: true, diy: false },
  { id: "language", label: "Friendly simple language", searchMetric: true, others: false, diy: false },
  { id: "lead-forms", label: "Lead form setup", searchMetric: true, others: true, diy: false },
  { id: "replies", label: "Daily social replies", searchMetric: true, others: false, diy: false },
];

// ============ CONTENT SERVICES SECTION ============
export const contentServicesSection = {
  badge: "Content & Writing",
  title: "Words that attract and convert",
  description: "Easy-to-read language. Strong SEO basics. Ready to publish.",
};

export const contentServicesData = [
  {
    id: "content-writer",
    title: "Content Writer",
    icon: "edit3",
    description: "Clear and simple content for websites, ads, and captions.",
    bullets: ["Brand voice guide", "Short-form captions", "Ad copy variants", "Proofreading"],
  },
  {
    id: "blog-writer",
    title: "Blog Writer (SEO)",
    icon: "fileText",
    description: "Search-friendly blogs that educate and rank on Google.",
    bullets: ["Keyword plan", "Outline + headings", "Internal linking", "Meta tags"],
  },
];

// ============ PLATFORM MARKETING SECTION ============
export const platformMarketingSection = {
  badge: "Social Platforms",
  title: "Grow on Instagram and Facebook",
  description: "Beautiful creatives, smart posting times, and clean reporting.",
};

export const platformMarketingData = [
  {
    id: "instagram",
    platform: "Instagram Marketing",
    icon: "instagram",
    highlights: ["Reels & Stories", "Hashtag strategy", "Community replies", "Lead ads"],
    image: "https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=600&q=80",
  },
  {
    id: "facebook",
    platform: "Facebook Marketing",
    icon: "facebook",
    highlights: ["Page growth", "Groups outreach", "Messenger leads", "Lookalike ads"],
    image: "https://images.unsplash.com/photo-1633675254053-d96c7668c3b8?w=600&q=80",
  },
];

// ============ SOCIAL CLIENTS SECTION ============
export const socialClientsSection = {
  badge: "Social Proof",
  title: "Featured",
  titleHighlight: "Clients",
  description: "Instagram and Facebook clients we manage with care.",
};

export const socialClientsData = [
  { id: "urban", name: "Urban Style", platform: "Instagram", industry: "Fashion", followers: "120k", engagement: "6.2%", imageId: "1460925895917-afdab827c52f" },
  { id: "desi", name: "Desi Delights", platform: "Instagram", industry: "F&B", followers: "45k", engagement: "4.8%", imageId: "1504674900247-0877df9cc836" },
  { id: "tech", name: "TechGadgets India", platform: "Instagram", industry: "Electronics", followers: "80k", engagement: "5.1%", imageId: "1505740420928-5e560c06d30e" },
  { id: "clinic", name: "City Clinic", platform: "Facebook", industry: "Healthcare", followers: "30k", engagement: "3.9%", imageId: "1551076805-e1869033e561" },
  { id: "bright", name: "Bright Tutors", platform: "Facebook", industry: "Education", followers: "18k", engagement: "4.2%", imageId: "1503676260728-1c00da094a0b" },
  { id: "fresh", name: "FreshMart", platform: "Facebook", industry: "Grocery", followers: "28k", engagement: "3.5%", imageId: "1542838132-92c53300491e" },
];

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
