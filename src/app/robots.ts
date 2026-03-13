import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/private/"],
      },
      {
        // Allow all major search engine bots explicitly
        userAgent: "Googlebot",
        allow: "/",
      },
      {
        userAgent: "Bingbot",
        allow: "/",
      },
      {
        userAgent: "Slurp",  // Yahoo
        allow: "/",
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
      },
    ],
    sitemap: [
      "https://searchmetric.in/sitemap.xml",
    ],
    host: "https://searchmetric.in",
  };
}
