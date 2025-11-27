"use client";
import NavBar from "@/modules/NavBar/NavBar";
import Sidebar from "@/modules/Sidebar/Sidebar";
import { useState } from "react";
import Footer from "@/modules/Footer/Footer";

export default function Header({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <div className="sticky w-full top-0 z-50">
        <NavBar isShow={isShow} setIsShow={setIsShow}></NavBar>
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
    </>
  );
}
