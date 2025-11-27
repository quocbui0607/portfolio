import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import type { Metadata } from "next";
import Footer from "@/modules/Footer/Footer";
import Header from "@/modules/Header/Header";

export const metadata: Metadata = {
  title: "Quoc Bui Portfolio",
  authors: {
    url: "https://github.com/quocbui0607",
    name: "Warren Quoc Bui",
  },
  description: "Portfolio of Quoc Bui, Full-Stack Web Developer",
  openGraph: {
    title: "Quoc Bui Portfolio",
    description: "This is the Quoc Bui's Portfolio.",
    url: "https://quocbui.me",
    type: "website",
  },
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header>{children}</Header>
        <Footer></Footer>
      </body>
    </html>
  );
}
