import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap"
});

const mono = JetBrains_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap"
});

const siteUrl = "https://learshy.github.io/learshy-portfolio";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Learshy - Fullstack Developer",
    template: "%s | Learshy"
  },
  description:
    "Learshy is a Fullstack Developer building clean digital experiences with React, Next.js, Laravel, and PostgreSQL.",
  applicationName: "Learshy Portfolio",
  authors: [{ name: "Learshy" }],
  creator: "Learshy",
  keywords: [
    "Learshy",
    "Fullstack Developer",
    "React Developer",
    "Next.js Developer",
    "Laravel Developer",
    "PostgreSQL"
  ],
  openGraph: {
    title: "Learshy - Fullstack Developer",
    description: "Building clean digital experiences.",
    url: siteUrl,
    siteName: "Learshy Portfolio",
    type: "website",
    images: [
      {
        url: "/og.svg",
        width: 1200,
        height: 630,
        alt: "Learshy portfolio preview"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Learshy - Fullstack Developer",
    description: "Building clean digital experiences.",
    images: ["/og.svg"]
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${mono.variable} bg-ink font-sans text-white antialiased`}>
        {children}
      </body>
    </html>
  );
}
