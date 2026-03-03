import type { Metadata } from "next";
import { seo } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: seo.socialMedia.title,
  description: seo.socialMedia.description,
  keywords: seo.socialMedia.keywords,
  alternates: { canonical: seo.socialMedia.canonical },
  openGraph: {
    title: seo.socialMedia.title,
    description: seo.socialMedia.description,
    url: `${seo.siteUrl}${seo.socialMedia.canonical}`,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
    images: [{ url: seo.socialMedia.ogImage, width: 1200, height: 630, alt: seo.socialMedia.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: seo.socialMedia.title,
    description: seo.socialMedia.description,
    images: [seo.socialMedia.ogImage],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
