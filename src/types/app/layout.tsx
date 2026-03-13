import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingCTA from "@/components/FloatingCTA";
import { seo, organizationSchema } from "@/content/siteCopy";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: {
    default: seo.home.title,
    template: `%s | ${seo.siteName}`,
  },
  description: seo.home.description,
  keywords: seo.home.keywords,
  authors: [{ name: seo.siteName, url: seo.siteUrl }],
  creator: seo.siteName,
  metadataBase: new URL(seo.siteUrl),
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 },
  },
  openGraph: {
    title: seo.home.title,
    description: seo.home.description,
    url: seo.siteUrl,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
    images: [{ url: seo.home.ogImage, width: 1200, height: 630, alt: `${seo.siteName} — SEO & Digital Marketing Agency in Mira Road, Mumbai` }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.home.title,
    description: seo.home.description,
    site: seo.twitterHandle,
    images: [seo.home.ogImage],
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${manrope.variable} bg-white text-slate-900 antialiased`}>
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <FloatingCTA />
      </body>
    </html>
  );
}
