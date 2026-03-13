import type { Metadata } from "next";
import { seo } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: seo.contact.title,
  description: seo.contact.description,
  keywords: seo.contact.keywords,
  alternates: { canonical: "/contact" },
  openGraph: {
    title: seo.contact.title,
    description: seo.contact.description,
    url: `${seo.siteUrl}/contact`,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
    images: [{ url: seo.contact.ogImage, width: 1200, height: 630, alt: seo.contact.title }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
