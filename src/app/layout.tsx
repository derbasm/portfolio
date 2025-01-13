import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Lebenslauf - Mouhanad Derbas",
  description: "Offizielle Lebenslauf-Seite von Mouhanad Derbas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-50 text-[#254e7a]`}
      >
        <main className="max-w-4xl mx-auto bg-[#81c2e6]  rounded-lg shadow-lg">
          {children}
        </main>
      </body>
    </html>
  );
}
