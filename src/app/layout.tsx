import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { seo } from "@/content/siteCopy";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "https://searchmetric.in/",
    siteName: "SearchMetric.in",
    images: [
      {
        url: "/techminds-logo.svg", // Update to new logo if renamed
        width: 220,
        height: 60,
        alt: "SearchMetric.in Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: seo.title,
    description: seo.description,
    site: "@searchmetricin",
    images: ["/techminds-logo.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="en">
      <body className="bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}