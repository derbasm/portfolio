import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { generateMetadata } from "@/lib/seo";
import Analytics from "@/components/analytics";
import PerformanceMonitor from "@/components/performance-monitor";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = generateMetadata({
  title: "Mouhanad Derbas - Full Stack Developer | Portfolio & CV",
  description: "Leidenschaftlicher Full-Stack-Entwickler aus Nürnberg mit Expertise in React, Next.js, Python und modernen Web-Technologien. Schauen Sie sich mein Portfolio und meinen Lebenslauf an.",
  keywords: [
    "Mouhanad Derbas",
    "Full Stack Developer",
    "React Developer", 
    "Next.js",
    "Python",
    "JavaScript",
    "TypeScript",
    "Web Development",
    "Frontend",
    "Backend",
    "Nürnberg",
    "Portfolio",
    "CV",
    "Lebenslauf"
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className="scroll-smooth">
      <head>
        <Analytics />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#254e7a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        <PerformanceMonitor />
        {children}
      </body>
    </html>
  );
}
