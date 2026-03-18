// Maximus AI Strategic Advisory — Root Layout
// Created: 2026-03-17
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Maximus AI Strategic Advisory",
    template: "%s | Maximus AI",
  },
  description:
    "Enterprise-grade competitive intelligence, powered by AI, built for your business. Dominate your market before your competitors do.",
  keywords: [
    "competitive intelligence",
    "AI consulting",
    "business intelligence",
    "strategic advisory",
    "AI strategy",
    "small business AI",
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Maximus AI Strategic Advisory",
    title: "Maximus AI Strategic Advisory",
    description:
      "Enterprise-grade competitive intelligence, powered by AI, built for your business.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximus AI Strategic Advisory",
    description:
      "Enterprise-grade competitive intelligence, powered by AI, built for your business.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>{children}</body>
    </html>
  );
}
