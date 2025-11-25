"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/modules/NavBar/NavBar";
import Sidebar from "@/modules/Sidebar/Sidebar";
import { useState } from "react";
import Footer from "@/modules/Footer/Footer";

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
  const [isShow, setIsShow] = useState(false);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="sticky w-full top-0 z-50">
          <Header isShow={isShow} setIsShow={setIsShow}></Header>
        </div>

        <div className="flex md:gap-6 lg:gap-10 h-full">
          <div className="md:pl-3 h-full min-h-screen justify-start py-6 pr-4 hidden md:flex">
            <Sidebar isShow={isShow} setIsShow={setIsShow}></Sidebar>
          </div>

          {isShow && (
            <div
              id="mobile-menu"
              className="absolute z-1 md:hidden bg-cyan-700 w-2/3 h-dvh fixed"
            >
              <div className="space-y-1 px-2 pt-2 pb-3">
                <Sidebar isShow={isShow} setIsShow={setIsShow}></Sidebar>
              </div>
            </div>
          )}

          <div className="md:border-indigo-500 md:border-l-1"></div>
          <div className="h-full flex-1 py-6 pr-4 h-full px-6">{children}</div>
        </div>

        <Footer></Footer>
      </body>
    </html>
  );
}
