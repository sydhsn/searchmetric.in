import { MetadataRoute } from "next";

const BASE_URL = "https://searchmetric.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    { url: BASE_URL, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${BASE_URL}/services`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/local-seo`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/services/social-media-management`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/lead-ads`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/services/website-development`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${BASE_URL}/about`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE_URL}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${BASE_URL}/free-audit`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${BASE_URL}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.7 },
  ];

  // City pages — highest priority, most important for ranking
  const cityPages: MetadataRoute.Sitemap = [
    "katihar", "purnea", "kishanganj", "barsoi", "baisi", "dalkhola", "siliguri",
  ].map((city) => ({
    url: `${BASE_URL}/services/local-seo/${city}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.95,  // Higher than service pages — these are our main landing pages
  }));

  // Blog posts with their actual publish dates
  const blogPages: MetadataRoute.Sitemap = [
    { slug: "google-maps-seo-2026", date: "2026-01-15" },
    { slug: "instagram-lead-ads-india", date: "2025-12-20" },
    { slug: "content-trends-india-2026", date: "2025-11-10" },
    { slug: "facebook-vs-instagram-india", date: "2025-10-25" },
    { slug: "google-my-business-optimization", date: "2025-09-18" },
    { slug: "video-content-indian-audience", date: "2025-08-30" },
    { slug: "best-digital-marketing-agency-katihar", date: "2026-02-10" },
    { slug: "seemanchal-businesses-rank-google-2026", date: "2026-02-20" },
    { slug: "katihar-shop-not-showing-google-maps", date: "2026-03-01" },
  ].map(({ slug, date }) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: new Date(date),
    changeFrequency: "monthly" as const,
    priority: 0.65,
  }));

  return [...staticPages, ...cityPages, ...blogPages];
}
