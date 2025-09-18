import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sagir Garba - Frontend Developer",
  description:
    "Frontend Developer specializing in React, Next.js, and modern JavaScript. Building problem-solving interfaces and solutions.",
  keywords: [
    "Frontend Developer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Portfolio",
  ],
  authors: [{ name: "Sagir Garba" }],
  openGraph: {
    title: "Sagir Garba - Frontend Developer",
    description: "Building problem-solving interfaces with React & Next.js",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
