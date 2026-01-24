import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";
import { seo } from "@/content/siteCopy";
import { yellowBlack } from "@/theme/presets";

const manrope = Manrope({ subsets: ["latin"], variable: "--font-manrope" });

export const metadata: Metadata = {
  title: seo.title,
  description: seo.description,
  keywords: seo.keywords,
};

const themeName = "yellowBlack";
const themeVars = Object.fromEntries(Object.entries(yellowBlack.vars).map(([key, value]) => [key, value]));

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme={themeName} style={themeVars}>
      <body className={`${manrope.variable} bg-gradient-hero text-night antialiased`}>{children}</body>
    </html>
  );
}
