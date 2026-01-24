import type {
  Service,
  Step,
  Highlight,
  FAQ,
  Portfolio,
  TeamMember,
  Metric,
  ServicePage,
  MegaMenuGroup
} from "@/types/siteCopy";

export const seo = {
  title: "Social Media Marketing That Feels Easy",
  description:
    "Simple social media marketing with three focused services: social media management, local SEO with maps, and lead ads that bring ready buyers.",
  keywords: [
    "social media marketing",
    "social media management",
    "local seo",
    "google maps optimization",
    "lead ads",
    "instagram ads",
    "facebook ads",
    "google ads",
  ],
};

export const pageCopy = {
  brand: {
    name: "SocialStar",
    tagline: "Digital growth without the guesswork",
    description: "Amplifying brands, driving engagement, and creating impact across Instagram, Facebook, TikTok and Google Ads.",
  },
  hero: {
    eyebrow: "We amplify brands through social media",
    title: "Grow your brand with data-driven social media strategies",
    subtitle:
      "From Instagram and Facebook to TikTok and Google Ads - we create campaigns that convert. Engage your audience, build community, and drive measurable results.",
    primaryCta: { label: "Start your growth journey", href: "#contact" },
    secondaryCta: { label: "View our work", href: "#portfolio" },
  },
  highlights: [
    {
      label: "Brands guided",
      value: "240+",
      helper: "Global brands trust us with their growth",
    },
    {
      label: "Average engagement rate",
      value: "8.5%",
      helper: "3x higher than industry average",
    },
    {
      label: "Ad spend managed",
      value: "$12M+",
      helper: "With measurable ROI for every client",
    },
  ] satisfies Highlight[],
  services: [
    {
      id: "strategy",
      name: "Brand Strategy & Planning",
      headline: "Strategic foundations for authentic growth",
      description:
        "We analyze your audience, competitors, and goals to create a comprehensive social strategy that drives real engagement and brand loyalty.",
      points: [
        "Competitive analysis and audience insights",
        "Monthly content calendars with themes and pillars",
        "Voice and tone guidelines tailored to your brand",
      ],
      badge: "Strategy",
    },
    {
      id: "content",
      name: "Content Creation & Management",
      headline: "Eye-catching content that tells your story",
      description:
        "From stunning visuals to compelling copywriting, we create content across all platforms that resonates with your audience and drives action.",
      points: [
        "Professional photo & video content creation",
        "Daily posting and community management on all platforms",
        "Trending content optimization for maximum reach",
      ],
      badge: "Content",
    },
    {
      id: "ads",
      name: "Paid Advertising & Lead Generation",
      headline: "Campaigns that turn attention into customers",
      description:
        "Strategic ad campaigns on Instagram, Facebook, TikTok, and Google that target the right audience and maximize your return on ad spend.",
      points: [
        "End-to-end campaign setup and management",
        "A/B testing and continuous optimization",
        "Lead capture and CRM integration",
      ],
      badge: "Conversion",
    },
  ] satisfies Service[],
  portfolio: [
    {
      id: "1",
      brand: "E-Commerce Fashion Brand",
      category: "Instagram Growth",
      image: "fashion",
      tags: ["Instagram", "Content Creation", "Influencer"],
      metric: "280% follower growth in 6 months",
    },
    {
      id: "2",
      brand: "Coffee Shop Chain",
      category: "Local Social & Maps",
      image: "coffee",
      tags: ["Facebook", "Local", "Engagement"],
      metric: "45% increase in foot traffic",
    },
    {
      id: "3",
      brand: "SaaS Tech Startup",
      category: "Lead Generation Ads",
      image: "tech",
      tags: ["Google Ads", "LinkedIn", "B2B"],
      metric: "320 qualified leads, 4.2x ROI",
    },
    {
      id: "4",
      brand: "Beauty Brand",
      category: "TikTok Viral Campaign",
      image: "beauty",
      tags: ["TikTok", "UGC", "Viral"],
      metric: "8.2M views, 180K followers",
    },
    {
      id: "5",
      brand: "Fitness Coaching Studio",
      category: "Community Building",
      image: "fitness",
      tags: ["Instagram", "Community", "Engagement"],
      metric: "5.2% engagement rate (8x industry avg)",
    },
    {
      id: "6",
      brand: "Real Estate Agency",
      category: "Video Marketing & Leads",
      image: "realestate",
      tags: ["YouTube", "Facebook", "Leads"],
      metric: "156 property inquiries in 3 months",
    },
  ] satisfies Portfolio[],
  team: [
    {
      name: "Aisha Sharma",
      role: "Creative Director, Strategy",
      specialty: "Brand strategy, content pillars, audience research",
      image: "aisha",
    },
    {
      name: "Rohan Patel",
      role: "Director, Paid Ads & Growth",
      specialty: "Paid advertising, campaign optimization, lead generation",
      image: "rohan",
    },
  ] satisfies TeamMember[],
  process: [
    {
      title: "Listen",
      detail: "A short call to learn your goals, voice, and what good looks like for you.",
    },
    {
      title: "Plan",
      detail: "We outline content, offers, and timelines you can read in minutes.",
    },
    {
      title: "Launch",
      detail: "Content, maps, and ads go live with careful tracking and fast tweaks.",
    },
    {
      title: "Grow",
      detail: "Weekly updates, monthly recaps, and clear next steps you can act on.",
    },
  ] satisfies Step[],
  megaMenu: [
    {
      title: "Performance",
      items: [
        { name: "Lead Generation Campaigns", href: "/services/lead-generation", tag: "B2B + DTC" },
        { name: "Performance Marketing", href: "/services/performance-marketing", tag: "Full funnel" },
        { name: "SEM", href: "/services/sem" },
        { name: "Google Ads Management", href: "/services/google-ads" },
      ],
    },
    {
      title: "Social & Influence",
      items: [
        { name: "Influencer Marketing", href: "/services/influencer-marketing", tag: "Creators" },
        { name: "Instagram / Meta Marketing", href: "/services/instagram-meta" },
        { name: "LinkedIn Marketing", href: "/services/linkedin" },
        { name: "SMO", href: "/services/smo" },
        { name: "Social Media Management", href: "/services/social-media-management" },
        { name: "Content Creation / Designing", href: "/services/content-creation" },
      ],
    },
    {
      title: "Brand & Web",
      items: [
        { name: "Logo Design", href: "/services/logo-design" },
        { name: "Website Development", href: "/services/website-development" },
        { name: "SEO", href: "/services/seo" },
      ],
    },
  ] satisfies MegaMenuGroup[],
  servicePages: [
    {
      slug: "lead-generation",
      title: "Lead Generation Campaigns",
      tagline: "Pipeline-first playbooks with clear CAC and ROI",
      summary: "We build and optimize multi-channel lead engines across Meta, LinkedIn, and Google to deliver qualified pipeline—not just form fills.",
      bullets: [
        "ICP, offers, and routing mapped before launch",
        "Channel-mix testing across Meta, LinkedIn, Search",
        "Creative sprints with hooks, angles, and UGC",
        "Conversion tracking, CRM hygiene, and dashboards",
      ],
      image: "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1400&q=80",
      cta: "Book a pipeline audit",
    },
    {
      slug: "influencer-marketing",
      title: "Influencer Marketing",
      tagline: "Creator-led stories that convert and compound",
      summary: "From seeding to paid amplification, we pair your brand with the right creators, measure impact, and reinvest in what performs.",
      bullets: [
        "Seeding programs with clear deliverables",
        "Usage rights and paid amplification",
        "Affiliate + performance structures",
        "Creative feedback loops to refine wins",
      ],
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=1400&q=80",
      cta: "Plan a creator sprint",
    },
    {
      slug: "logo-design",
      title: "Logo Design",
      tagline: "Identity systems built for digital-first brands",
      summary: "Distinctive, versatile marks that stay sharp from mobile to billboard, with usage guides and asset kits ready to deploy.",
      bullets: [
        "Discovery, moodboards, and rapid explorations",
        "Primary, secondary, and icon marks",
        "Color, type, and usage guardrails",
        "Final exports for web, print, and social",
      ],
      image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80",
      cta: "Start a brand identity",
    },
    {
      slug: "content-creation",
      title: "Content Creation / Designing",
      tagline: "Social-native content that earns saves and shares",
      summary: "Design systems, motion, and UGC-style edits tailored to each platform’s rhythm and audience.",
      bullets: [
        "Content pillars and series frameworks",
        "Short-form edits, carousels, and motion",
        "On-brand templates for speed",
        "Weekly drops and optimization",
      ],
      image: "https://images.unsplash.com/photo-1529429617124-aee0bd1be3b8?auto=format&fit=crop&w=1400&q=80",
      cta: "See content packages",
    },
    {
      slug: "sem",
      title: "SEM",
      tagline: "Search programs tuned for intent and efficiency",
      summary: "From structure to ad copy to landing pages, we tune search to capture high-intent demand with disciplined experimentation.",
      bullets: [
        "Account structure and query mapping",
        "Ad copy testing and extensions",
        "Landing page alignment and CRO",
        "Bid strategy and budget pacing",
      ],
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1400&q=80",
      cta: "Request a search audit",
    },
    {
      slug: "performance-marketing",
      title: "Performance Marketing",
      tagline: "Full-funnel performance across paid social and search",
      summary: "Integrated media, creative, and experimentation to scale profitably while protecting CAC and payback windows.",
      bullets: [
        "Offer and landing page alignment",
        "Creative testing sprints",
        "Budget allocation across channels",
        "Reporting on CAC, ROAS, and LTV",
      ],
      image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1400&q=80",
      cta: "Book a growth review",
    },
    {
      slug: "google-ads",
      title: "Google Ads Management",
      tagline: "High-intent capture with disciplined account hygiene",
      summary: "Search, Performance Max, and remarketing tuned with clear negative lists, creative, and conversion tracking.",
      bullets: [
        "Account audits and rebuilds",
        "Query sculpting and negatives",
        "Creative for PMax and display",
        "Attribution and tracking sanity",
      ],
      image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1400&q=80",
      cta: "Optimize my Google Ads",
    },
    {
      slug: "smo",
      title: "SMO",
      tagline: "Consistent, optimized presence across social touchpoints",
      summary: "Profiles, posting cadence, and engagement systems that keep your brand active and aligned to search and social intent.",
      bullets: [
        "Profile optimization and on-page SEO",
        "Posting calendars and hooks",
        "Engagement playbooks",
        "Monthly insights and pivots",
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
      cta: "Tune my presence",
    },
    {
      slug: "instagram-meta",
      title: "Instagram / Meta Marketing",
      tagline: "Stories, Reels, and ads tuned to Meta’s algorithm",
      summary: "Creative and media tailored for Reels, Feed, and Stories with clear retargeting paths.",
      bullets: [
        "Creative angles and hooks for Reels",
        "Warm + cold audience structures",
        "UGC and motion templates",
        "Reporting on engagement to revenue",
      ],
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
      cta: "Plan a Meta sprint",
    },
    {
      slug: "linkedin",
      title: "LinkedIn Marketing",
      tagline: "B2B storytelling and demand capture on LinkedIn",
      summary: "Thought leadership, employee amplification, and precise targeting to reach buying committees.",
      bullets: [
        "Content themes for leaders and brand",
        "Audience and company lists",
        "Message ads, lead gen, and site retargeting",
        "Dashboarding for pipeline visibility",
      ],
      image: "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=80",
      cta: "Activate LinkedIn",
    },
    {
      slug: "social-media-management",
      title: "Social Media Management",
      tagline: "Always-on publishing, community, and reporting",
      summary: "We run your social day-to-day with content, scheduling, engagement, and insights you can act on.",
      bullets: [
        "Pillars, calendars, and approvals",
        "Posting and engagement ops",
        "Monthly reporting and recommendations",
        "Crisis and escalation paths",
      ],
      image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
      cta: "Run my socials",
    },
    {
      slug: "website-development",
      title: "Website Development",
      tagline: "Fast, conversion-focused sites for campaigns and brands",
      summary: "From landing pages to full sites, we build responsive, performant experiences aligned to your offers and analytics.",
      bullets: [
        "Architecture and UX flows",
        "High-speed builds with best practices",
        "CRO-informed sections and CTAs",
        "Analytics, pixels, and QA",
      ],
      image: "https://images.unsplash.com/photo-1529429617124-aee0bd1be3b8?auto=format&fit=crop&w=1400&q=80",
      cta: "Scope a build",
    },
    {
      slug: "seo",
      title: "SEO",
      tagline: "Technical, content, and authority to grow organic demand",
      summary: "Audits, on-page, and content plans that improve visibility and support paid efficiency.",
      bullets: [
        "Technical fixes and structure",
        "Keyword + content roadmaps",
        "On-page optimization",
        "Reporting on traffic and conversions",
      ],
      image: "https://images.unsplash.com/photo-1454165205744-3b78555e5572?auto=format&fit=crop&w=1400&q=80",
      cta: "Request an SEO plan",
    },
  ] satisfies ServicePage[],
  testimonials: [
    {
      quote:
        "They made our socials calm and consistent. We see more calls each week without chasing anything.",
      name: "Sofia Patel",
      role: "Founder, Bloom Studio",
    },
    {
      quote:
        "Maps rankings moved up in three weeks and walk-ins followed. They keep the wording warm and simple.",
      name: "Marcus Lee",
      role: "Owner, Harbor Coffee",
    },
    {
      quote:
        "Lead ads now bring people who actually buy. The updates are short, clear, and honest.",
      name: "Priya Nair",
      role: "Director, Westside Dental",
    },
  ],
  faqs: [
    {
      question: "How fast will I see results?",
      answer:
        "Social growth is steady by design. Most clients notice better engagement in 3-4 weeks and more leads within 6-8 weeks.",
    },
    {
      question: "Do I need to create content?",
      answer:
        "We handle most of it. You approve the plan and share any must-have updates or photos when needed.",
    },
    {
      question: "How do we communicate?",
      answer:
        "You get a shared chat, weekly notes, and a simple monthly recap. No long reports unless you want them.",
    },
  ] satisfies FAQ[],
  contact: {
    title: "Let us handle the busy work",
    subtitle:
      "Tell us your goal and we will shape a simple plan. No pressure, no jargon.",
    cta: { label: "Start a project", href: "mailto:hello@northstarsocial.com" },
  },
};
