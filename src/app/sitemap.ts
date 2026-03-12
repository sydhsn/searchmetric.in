import { MetadataRoute } from "next";

const BASE_URL = "https://searchmetric.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/services`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/local-seo`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/services/social-media-management`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/services/lead-ads`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/free-audit`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.7,
    },
  ];

  // City landing pages — high priority, unique content per city
  const cityPages: MetadataRoute.Sitemap = [
    "katihar",
    "purnea",
    "kishanganj",
    "barsoi",
    "baisi",
    "dalkhola",
    "siliguri",
  ].map((city) => ({
    url: `${BASE_URL}/services/local-seo/${city}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.9,
  }));

  // Blog posts
  const blogSlugs = [
    "google-maps-seo-2026",
    "instagram-lead-ads-india",
    "content-trends-india-2026",
    "facebook-vs-instagram-india",
    "google-my-business-optimization",
    "video-content-indian-audience",
    "best-digital-marketing-agency-katihar",
    "seemanchal-businesses-rank-google-2026",
    "katihar-shop-not-showing-google-maps",
  ];

  const blogPages: MetadataRoute.Sitemap = blogSlugs.map((slug) => ({
    url: `${BASE_URL}/blog/${slug}`,
    lastModified: now,
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...cityPages, ...blogPages];
}
