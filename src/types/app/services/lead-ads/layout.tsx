import type { Metadata } from "next";
import { seo } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: seo.leadAds.title,
  description: seo.leadAds.description,
  keywords: seo.leadAds.keywords,
  alternates: { canonical: seo.leadAds.canonical },
  openGraph: {
    title: seo.leadAds.title,
    description: seo.leadAds.description,
    url: `${seo.siteUrl}${seo.leadAds.canonical}`,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
    images: [{ url: seo.leadAds.ogImage, width: 1200, height: 630, alt: seo.leadAds.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.leadAds.title,
    description: seo.leadAds.description,
    images: [seo.leadAds.ogImage],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
