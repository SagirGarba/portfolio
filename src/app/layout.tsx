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
  title: "Talk 2 Sagir",
  description:
    "Frontend Engineer specializing in React, Next.js, and modern JavaScript. Building problem-solving interfaces and solutions.",
  keywords: [
    "Frontend Engineer",
    "React",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Sagir Garba",
  ],
  authors: [{ name: "Sagir Garba" }],
  openGraph: {
    title: "Talk 2 Sagir",
    description: "Building problem-solving interfaces with React & Next.js",
    type: "website",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/laptop-code.svg", type: "image/svg+xml" },
    ],
    shortcut: "/laptop-code.svg",
    apple: "/laptop-code.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/laptop-code.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/laptop-code.svg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
