import type { IconType } from "react-icons";

export type Brand = {
  name: string;
  tagline: string;
  description: string;
};

export type HeroStat = {
  value: string;
  label: string;
  icon: IconType;
};

export type HeroContent = {
  eyebrow: string;
  title: string;
  titleHighlight: string;
  subtitle: string;
  stats: HeroStat[];
};

export type MegaMenuService = {
  name: string;
  description: string;
  icon: IconType;
};

export type MegaMenuCategory = {
  category: string;
  services: MegaMenuService[];
};

export type MegaMenuSection = {
  title: string;
  icon: IconType;
  items: MegaMenuCategory[];
};

export type MegaMenuItems = Record<"services" | "solutions" | "resources", MegaMenuSection>;

export type NavItem = {
  label: string;
  href?: string;
  type?: "mega";
  data?: keyof MegaMenuItems;
};

export type SocialMetrics = {
  reach: string;
  impressions: string;
  engagementRate: string;
};

export type SocialEngagement = {
  likes: string;
  comments: string;
  shares: string;
  impressions?: string;
  saves?: string;
};

export type SocialPost = {
  id: number;
  platform: "instagram" | "facebook" | "linkedin";
  username: string;
  postType: string;
  engagement: SocialEngagement;
  metrics: SocialMetrics;
  caption: string;
  hashtags: string[];
  date: string;
  redirectUrl: string;
};

export type SocialShowcase = Record<SocialPost["platform"], SocialPost[]>;

export type ServiceCard = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  icon: IconType;
  color: string;
  features: string[];
  results: string[];
};

export type PortfolioResult = {
  metric: string;
  label: string;
};

export type PortfolioItem = {
  brand: string;
  category: string;
  services: string[];
  results: PortfolioResult[];
};

export type ClientLogo = {
     id: string;
  name: string;
  image: string; // Remove optional (?)
  category: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: IconType;
  duration: string;
};

export type StatItem = {
  number: string;
  label: string;
  icon: IconType;
};
