/** @type {import('next').NextConfig} */
const nextConfig = {
  // ── Redirects ─────────────────────────────────────────
  async redirects() {
    return [
      // Remove old case-studies page permanently
      {
        source: "/case-studies",
        destination: "/blog",
        permanent: true, // 301 — passes link equity to blog
      },
      {
        source: "/case-studies/:slug*",
        destination: "/blog",
        permanent: true,
      },
    ];
  },

  // ── Headers ───────────────────────────────────────────
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          // Allow search engines to index & follow
          { key: "X-Robots-Tag", value: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" },
          // Security headers (also a minor ranking signal)
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        ],
      },
      {
        // Cache static assets aggressively
        source: "/_next/static/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        // Cache images
        source: "/images/(.*)",
        headers: [
          { key: "Cache-Control", value: "public, max-age=86400, stale-while-revalidate=604800" },
        ],
      },
    ];
  },

  // ── Image domains ──────────────────────────────────────
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "searchmetric.in" },
    ],
  },

  // ── Compression ───────────────────────────────────────
  compress: true,

  // ── Power header ──────────────────────────────────────
  poweredByHeader: false, // Remove X-Powered-By header
};

module.exports = nextConfig;
