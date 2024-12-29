import "@/styles/globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rizky Alam Firmansyah - Full Stack Developer & AI Enthusiast",
  description:
    "Full Stack Developer specializing in React, Next.js, and AI technologies. Experienced in building modern web applications with clean and efficient code. Currently exploring AI Engineering and RAG development.",
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
