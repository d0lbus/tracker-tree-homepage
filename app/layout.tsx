import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { siteConfig } from "@/lib/site";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "TrackerTree | Personal Progress Dashboard",
    template: "%s | TrackerTree",
  },
  description: siteConfig.description,
  openGraph: {
    title: "TrackerTree - Track your goals without losing your focus",
    description:
      "Create projects, build routines, track goal-related costs, and resume exactly where you left off.",
    url: siteConfig.url,
    siteName: "TrackerTree",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TrackerTree - Track your goals without losing your focus",
    description:
      "Create projects, build routines, track goal-related costs, and resume exactly where you left off.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}
