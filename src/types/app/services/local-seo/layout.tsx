import type { Metadata } from "next";
import { seo } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: seo.localSeo.title,
  description: seo.localSeo.description,
  keywords: seo.localSeo.keywords,
  alternates: { canonical: seo.localSeo.canonical },
  openGraph: {
    title: seo.localSeo.title,
    description: seo.localSeo.description,
    url: `${seo.siteUrl}${seo.localSeo.canonical}`,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
    images: [{ url: seo.localSeo.ogImage, width: 1200, height: 630, alt: seo.localSeo.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.localSeo.title,
    description: seo.localSeo.description,
    images: [seo.localSeo.ogImage],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
