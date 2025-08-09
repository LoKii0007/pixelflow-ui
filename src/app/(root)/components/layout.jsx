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
      className={`w-full flex justify-center h-[calc(100vh-81px)] ${
        theme === Theme.dark
          ? "bg-zinc-950 text-gray-50"
          : "bg-white text-gray-950"
      }`}
    >
      <div className="max-w-[1400px] w-full grid grid-cols-12 mx-auto gap-2">
        <div className="sidebar-container z-40 overflow-y-auto col-span-2 py-8">
          <Sidebar />
        </div>

        <div className="w-full border-l border-gray-600 p-8 overflow-y-auto scrollbar-hide col-span-10">
          {children}
        </div>
      </div>
    </div>
  );
}
