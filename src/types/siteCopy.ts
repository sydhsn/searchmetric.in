export type Service = {
  id: string;
  name: string;
  headline: string;
  description: string;
  points: string[];
  badge?: string;
};

export type Step = {
  title: string;
  detail: string;
};

export type Highlight = {
  label: string;
  value: string;
  helper: string;
};

export type FAQ = {
  question: string;
  answer: string;
};

export type Portfolio = {
  id: string;
  brand: string;
  category: string;
  image: string;
  tags: string[];
  metric: string;
};

export type TeamMember = {
  name: string;
  role: string;
  specialty: string;
  image: string;
};

export type Metric = {
  icon: string;
  value: string;
  label: string;
  description: string;
};

export type ServicePage = {
  slug: string;
  title: string;
  tagline: string;
  summary: string;
  bullets: string[];
  image: string;
  cta?: string;
};

export type MegaMenuGroup = {
  title: string;
  items: { name: string; href: string; tag?: string }[];
};
