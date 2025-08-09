"use client";

import Sidebar from "@/components/Sidebar";
import { Theme } from "@/lib/constants";
import { useThemeStore } from "@/stores/themeStore";
import "@/css/button.css";
import "@/css/global.css";

export default function RootLayout({ children }) {
  const { theme } = useThemeStore();

  return (
    <div
      className={`w-full flex justify-center overflow-x-hidden h-[calc(100vh-81px)] ${
        theme === Theme.dark
          ? "bg-zinc-950 text-gray-50"
          : "bg-white text-gray-950"
      }`}
    >
      <div className="max-w-[1400px] w-full grid grid-cols-1 mx-auto gap-2 md:grid-cols-12 overflow-x-hidden">
        <Sidebar />
        <div className="w-full border-gray-600 p-5 overflow-y-auto scrollbar-hide col-span-10 md:p-8 md:border-l">
          {children}
        </div>
      </div>
    </div>
  );
}
