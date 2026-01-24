import {
  FiMapPin,
  FiTrendingUp,
  FiUsers,
  FiMessageCircle,
  FiTarget,
  FiBarChart2,
  FiHeart,
  FiSearch,
  FiDollarSign,
  FiVideo,
  FiEye,
  FiStar,
  FiFacebook,
  FiLinkedin,
  FiLayers,
  FiCpu,
  FiCode,
  FiMonitor,
  FiBook,
  FiBookOpen,
  FiEdit,
  FiCalendar,
  FiShoppingCart,
  FiTool,
  FiAward
} from "react-icons/fi";
import { GoRocket, GoMegaphone } from "react-icons/go";

import type {
  HeroContent,
  MegaMenuItems,
  NavItem,
  ServiceCard,
  PortfolioItem,
  ClientLogo,
  ProcessStep,
  StatItem,
  SocialShowcase
} from "@/types/home";

export const unsplashImages = {
  hero: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80",
  service1: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  service2: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  service3: "https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  portfolio1: "https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  portfolio2: "https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  portfolio3: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  about: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  blog: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80",
  team: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
};

export const hero: HeroContent = {
  eyebrow: "AWARD-WINNING SOCIAL MEDIA AGENCY",
  title: "Where Creativity Meets",
  titleHighlight: "Data-Driven Results",
  subtitle:
    "We transform social media into your most powerful revenue channel with original content that captivates and converts.",
  stats: [
    { value: "500M+", label: "Total Impressions", icon: FiEye },
    { value: "4.8★", label: "Client Rating", icon: FiStar },
    { value: "240+", label: "Brands Transformed", icon: FiTrendingUp },
    { value: "98%", label: "Client Retention", icon: FiHeart }
  ]
};

export const megaMenuItems: MegaMenuItems = {
  services: {
    title: "Our Services",
    icon: FiLayers,
    items: [
      {
        category: "Social Media",
        services: [
          { name: "Social Media Management", description: "Daily posting & community engagement", icon: FiMessageCircle },
          { name: "Content Creation", description: "Original visuals & video content", icon: FiVideo },
          { name: "Influencer Marketing", description: "Strategic brand collaborations", icon: FiUsers },
          { name: "Social Media Ads", description: "Performance-driven campaigns", icon: FiTarget }
        ]
      },
      {
        category: "SEO & Digital",
        services: [
          { name: "Search Engine Optimization", description: "Rank higher on Google", icon: FiSearch },
          { name: "Local SEO", description: "Dominate local search results", icon: FiMapPin },
          { name: "Technical SEO", description: "Website optimization", icon: FiCpu },
          { name: "Content Strategy", description: "Keyword-focused content", icon: FiCode }
        ]
      },
      {
        category: "Performance Marketing",
        services: [
          { name: "Google Ads", description: "PPC & display advertising", icon: FiDollarSign },
          { name: "Facebook/Instagram Ads", description: "Social media advertising", icon: FiFacebook },
          { name: "LinkedIn Ads", description: "B2B lead generation", icon: FiLinkedin },
          { name: "Remarketing", description: "Retargeting campaigns", icon: FiEye }
        ]
      }
    ]
  },
  solutions: {
    title: "Industry Solutions",
    icon: FiTool,
    items: [
      {
        category: "By Industry",
        services: [
          { name: "E-commerce", description: "Online store growth", icon: FiShoppingCart },
          { name: "Local Businesses", description: "Storefront marketing", icon: FiShoppingCart },
          { name: "SaaS & Tech", description: "B2B lead generation", icon: FiMonitor },
          { name: "Healthcare", description: "Medical practice marketing", icon: FiHeart }
        ]
      },
      {
        category: "By Goal",
        services: [
          { name: "Brand Awareness", description: "Increase visibility", icon: GoMegaphone },
          { name: "Lead Generation", description: "Quality lead capture", icon: FiTarget },
          { name: "Sales Growth", description: "Revenue optimization", icon: FiTrendingUp },
          { name: "Customer Retention", description: "Loyalty programs", icon: FiUsers }
        ]
      }
    ]
  },
  resources: {
    title: "Resources",
    icon: FiBook,
    items: [
      {
        category: "Learning Center",
        services: [
          { name: "Blog Articles", description: "Latest marketing insights", icon: FiEdit },
          { name: "Case Studies", description: "Client success stories", icon: FiBarChart2 },
          { name: "Marketing Guides", description: "Step-by-step tutorials", icon: FiBookOpen },
          { name: "Webinars", description: "Live training sessions", icon: FiVideo }
        ]
      },
      {
        category: "Tools",
        services: [
          { name: "SEO Audit", description: "Free website analysis", icon: FiSearch },
          { name: "Social Media Audit", description: "Profile performance check", icon: FiMessageCircle },
          { name: "ROI Calculator", description: "Marketing investment tool", icon: FiDollarSign },
          { name: "Content Planner", description: "Monthly content schedule", icon: FiCalendar }
        ]
      }
    ]
  }
};

export const navItems: NavItem[] = [
  { label: "Services", type: "mega", data: "services" },
  { label: "Work", href: "#portfolio" },
  { label: "Solutions", type: "mega", data: "solutions" },
  { label: "Social Showcase", href: "#social-showcase" },
  { label: "Process", href: "#process" },
  { label: "Resources", type: "mega", data: "resources" }
];

export const socialShowcases: SocialShowcase = {
  instagram: [
    {
      id: 1,
      platform: "instagram",
      username: "@urbanplatter",
      postType: "Reel",
      engagement: {
        likes: "45.2K",
        comments: "1.2K",
        shares: "3.4K",
        saves: "8.7K"
      },
      metrics: {
        reach: "2.1M",
        impressions: "3.8M",
        engagementRate: "8.9%"
      },
      caption:
        "How we transformed this local food brand into a social media sensation. From recipe videos to customer testimonials.",
      hashtags: ["#foodlove", "#viralreels", "#brandstory"],
      date: "2 days ago",
      redirectUrl: "https://instagram.com"
    },
    {
      id: 2,
      platform: "instagram",
      username: "@krispykremeindia",
      postType: "Carousel",
      engagement: {
        likes: "32.4K",
        comments: "980",
        shares: "2.1K",
        saves: "5.4K"
      },
      metrics: {
        reach: "1.6M",
        impressions: "2.9M",
        engagementRate: "7.4%"
      },
      caption: "Campaign highlight: Limited edition launch that sold out in 48 hours. Creative + urgency = magic.",
      hashtags: ["#campaign", "#launch", "#socialselling"],
      date: "5 days ago",
      redirectUrl: "https://instagram.com"
    },
    {
      id: 3,
      platform: "instagram",
      username: "@sleepyhead",
      postType: "Story",
      engagement: {
        likes: "12.8K",
        comments: "340",
        shares: "1.1K",
        saves: "2.9K"
      },
      metrics: {
        reach: "890K",
        impressions: "1.2M",
        engagementRate: "6.3%"
      },
      caption: "Story series that boosted swipe-ups by 180% using UGC and humor.",
      hashtags: ["#ugc", "#stories", "#growth"],
      date: "1 week ago",
      redirectUrl: "https://instagram.com"
    }
  ],
  facebook: [
    {
      id: 4,
      platform: "facebook",
      username: "Krispy Kreme India",
      postType: "Video",
      engagement: {
        likes: "18.9K",
        comments: "1.1K",
        shares: "2.8K",
        impressions: "980K"
      },
      metrics: {
        reach: "720K",
        impressions: "980K",
        engagementRate: "6.4%"
      },
      caption: "Facebook-first campaign leveraging localized offers and retargeting for footfall.",
      hashtags: ["#facebookads", "#offers", "#local"],
      date: "3 days ago",
      redirectUrl: "https://facebook.com"
    },
    {
      id: 5,
      platform: "facebook",
      username: "Urban Platter",
      postType: "Live",
      engagement: {
        likes: "8.4K",
        comments: "2.3K",
        shares: "1.9K",
        impressions: "650K"
      },
      metrics: {
        reach: "540K",
        impressions: "650K",
        engagementRate: "5.7%"
      },
      caption: "Live cooking show that drove record engagement and product sales.",
      hashtags: ["#live", "#cooking", "#engagement"],
      date: "1 week ago",
      redirectUrl: "https://facebook.com"
    },
    {
      id: 6,
      platform: "facebook",
      username: "Sleepyhead Mattresses",
      postType: "Offer",
      engagement: {
        likes: "6.2K",
        comments: "890",
        shares: "1.2K",
        impressions: "480K"
      },
      metrics: {
        reach: "410K",
        impressions: "480K",
        engagementRate: "4.9%"
      },
      caption: "Limited-time bundle offer with retargeting. 3.4x ROAS over 10 days.",
      hashtags: ["#offers", "#roas", "#retargeting"],
      date: "2 weeks ago",
      redirectUrl: "https://facebook.com"
    }
  ],
  linkedin: [
    {
      id: 7,
      platform: "linkedin",
      username: "Riversoft Technologies",
      postType: "Thought Leadership",
      engagement: {
        likes: "2.8K",
        comments: "312",
        shares: "756",
        impressions: "198K"
      },
      metrics: {
        reach: "156K",
        impressions: "198K",
        engagementRate: "5.1%"
      },
      caption:
        "Tech company branding success: Establishing thought leadership through content marketing on LinkedIn.",
      hashtags: ["#techcompany", "#thoughtleadership", "#contentstrategy"],
      date: "1 week ago",
      redirectUrl: "https://linkedin.com/company/riversoft"
    }
  ]
};

export const services: ServiceCard[] = [
  {
    id: "social-media",
    name: "Social Media Management",
    tagline: "Daily content that converts",
    description:
      "Full-service management from strategy to posting and engagement. We make your brand the talk of the town.",
    icon: FiMessageCircle,
    color: "from-yellow-500 to-amber-500",
    features: [
      "Daily posting schedule",
      "Community management",
      "Analytics & reporting",
      "Hashtag strategy"
    ],
    results: ["30% avg. engagement increase", "2x follower growth", "50% more leads"]
  },
  {
    id: "content-creation",
    name: "Content Creation",
    tagline: "Original visuals that captivate",
    description: "Professional photography, video production, and graphic design tailored for maximum social impact.",
    icon: FiVideo,
    color: "from-amber-500 to-orange-500",
    features: [
      "Professional video production",
      "High-quality photography",
      "Custom graphics",
      "Reels & stories"
    ],
    results: ["5x higher engagement", "80% better retention", "3x more shares"]
  },
  {
    id: "influencer-marketing",
    name: "Influencer Marketing",
    tagline: "Authentic brand collaborations",
    description:
      "Strategic partnerships with influencers who align with your brand values and reach your target audience.",
    icon: FiUsers,
    color: "from-orange-500 to-red-500",
    features: [
      "Influencer vetting",
      "Campaign management",
      "Content amplification",
      "ROI tracking"
    ],
    results: ["300% higher conversion", "10x brand awareness", "45% lower CPA"]
  },
  {
    id: "performance-ads",
    name: "Performance Advertising",
    tagline: "Data-driven ad campaigns",
    description:
      "Multi-platform ad strategies that deliver measurable results and maximize your marketing budget.",
    icon: FiTarget,
    color: "from-red-500 to-pink-500",
    features: [
      "Multi-platform ads",
      "A/B testing",
      "Conversion tracking",
      "ROI optimization"
    ],
    results: ["5x ROAS average", "40% lower CPC", "300% more conversions"]
  }
];

export const portfolio: PortfolioItem[] = [
  {
    brand: "Krispy Kreme India",
    category: "Food & Beverage",
    services: ["Video Production", "Campaign Strategy", "Influencer Marketing"],
    results: [
      { metric: "23.7M", label: "Impressions" },
      { metric: "4.2x", label: "ROAS" },
      { metric: "89%", label: "Engagement Rate" }
    ]
  },
  {
    brand: "Urban Platter",
    category: "E-commerce Food Brand",
    services: ["Social Media Management", "Content Creation", "Performance Ads"],
    results: [
      { metric: "350%", label: "Revenue Growth" },
      { metric: "2.1M", label: "Reach" },
      { metric: "65%", label: "Repeat Customers" }
    ]
  },
  {
    brand: "Sleepyhead Mattresses",
    category: "Home & Lifestyle",
    services: ["Brand Strategy", "Video Campaigns", "Social Media"],
    results: [
      { metric: "180%", label: "Sales Increase" },
      { metric: "5.8M", label: "Video Views" },
      { metric: "42%", label: "Lower CPA" }
    ]
  }
];

export const clients: ClientLogo[] = [
    {
        id: "1",
        name: "TechNova",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=200&fit=crop&crop=center",
        category: "Software"
    },
    {
        id: "2",
        name: "Quantum AI",
        image: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w-400&h=200&fit=crop&crop=center",
        category: "Artificial Intelligence"
    },
    {
        id: "3",
        name: "Solaris",
        image: "https://images.unsplash.com/photo-1634942537034-2531766767d1?w=400&h=200&fit=crop&crop=center",
        category: "Technology"
    },
    {
        id: "4",
        name: "Nexus",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=200&fit=crop&crop=center",
        category: "Fintech"
    },
    {
        id: "5",
        name: "Veridian",
        image: "https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?w=400&h=200&fit=crop&crop=center",
        category: "Healthcare"
    },
    {
        id: "6",
        name: "Aero Dynamics",
        image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=200&fit=crop&crop=center",
        category: "Aerospace"
    },
    {
        id: "7",
        name: "CyberCore",
        image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=200&fit=crop&crop=center",
        category: "Cybersecurity"
    },
    {
        id: "8",
        name: "Nimbus Cloud",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?w=400&h=200&fit=crop&crop=center",
        category: "Cloud Computing"
    }
];

export const process: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "Deep dive into your brand, audience, and goals to create a custom roadmap.",
    icon: FiSearch,
    duration: "1-2 weeks"
  },
  {
    step: "02",
    title: "Content Creation",
    description: "Original content production tailored for each platform and audience.",
    icon: FiVideo,
    duration: "Ongoing"
  },
  {
    step: "03",
    title: "Campaign Launch",
    description: "Strategic rollout and ongoing optimization for maximum impact.",
    icon: GoRocket,
    duration: "1-3 months"
  },
  {
    step: "04",
    title: "Analysis & Growth",
    description: "Performance tracking and scaling successful strategies.",
    icon: FiTrendingUp,
    duration: "Continuous"
  }
];

export const testimonials = [
  {
    quote:
      "SocialShark transformed our social presence completely. From 2,000 to 200,000 followers in 6 months with consistent high-quality content.",
    author: "Sarah Johnson",
    role: "Marketing Director, Urban Platter",
    rating: 5,
    metrics: { followers: "+198K", engagement: "+325%", revenue: "+180%" }
  },
  {
    quote: "The influencer campaigns they executed brought us 5x ROI. Their network and execution are exceptional.",
    author: "Michael Chen",
    role: "CEO, Sleepyhead",
    rating: 5,
    metrics: { followers: "+145K", engagement: "+280%", revenue: "+220%" }
  },
  {
    quote: "Finally found an agency that understands both creativity and analytics. Our engagement rates have never been higher.",
    author: "Priya Sharma",
    role: "Brand Manager, Speridian",
    rating: 5,
    metrics: { followers: "+89K", engagement: "+410%", revenue: "+150%" }
  }
];

export const faqs = [
  {
    question: "What makes your agency different from others?",
    answer:
      "We combine creative storytelling with data-driven strategy. Unlike agencies that just post content, we focus on measurable business outcomes while creating award-winning campaigns. Our proprietary analytics dashboard gives you real-time insights."
  },
  {
    question: "How do you measure campaign success?",
    answer:
      "We track both vanity metrics (engagement, reach) and business metrics (leads, sales, ROI). Monthly reports show clear progress towards your specific business goals with detailed analytics and actionable insights."
  },
  {
    question: "Can you handle both organic and paid social media?",
    answer:
      "Absolutely! We excel at both. Our organic content builds brand loyalty and community, while our paid strategies drive immediate conversions and lead generation. We integrate both for maximum impact."
  },
  {
    question: "What's included in your social media management?",
    answer:
      "Comprehensive service includes: Content strategy, content creation (images/videos), community management, analytics reporting, competitor analysis, platform optimization, and monthly strategy calls."
  },
  {
    question: "How quickly will I see results?",
    answer:
      "Initial improvements in engagement and content quality within 30 days. Significant growth in followers and leads within 3 months. Full campaign impact by 6 months with consistent ROI growth."
  }
];

export const stats: StatItem[] = [
  { number: "500+", label: "Brands Amplified", icon: FiTrendingUp },
  { number: "23.7M", label: "Max Campaign Impressions", icon: FiEye },
  { number: "4.8x", label: "Average ROAS", icon: FiDollarSign },
  { number: "98%", label: "Client Retention Rate", icon: FiHeart },
  { number: "200K+", label: "Keywords Ranked", icon: FiSearch },
  { number: "5", label: "Awards Won", icon: FiAward }
];
