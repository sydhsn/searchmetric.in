import type { Metadata } from "next";
import { seo } from "@/content/siteCopy";

export const metadata: Metadata = {
  title: seo.about.title,
  description: seo.about.description,
  keywords: seo.about.keywords,
  alternates: { canonical: "/about" },
  openGraph: {
    title: seo.about.title,
    description: seo.about.description,
    url: `${seo.siteUrl}/about`,
    siteName: seo.siteName,
    locale: seo.locale,
    type: "website",
    images: [{ url: seo.about.ogImage, width: 1200, height: 630, alt: seo.about.title }],
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
