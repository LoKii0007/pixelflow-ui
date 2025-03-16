"use client";

import Sidebar from "@/components/Sidebar";
import { Theme } from "@/types/types";
import { useSelector } from "react-redux";

export default function RootLayout({ children }) {
  const theme = useSelector((state) => state.theme.theme);

  return (
    <div
      className={`h-screen w-full flex justify-center ${
        theme === Theme.dark
          ? "bg-zinc-950 text-gray-50"
          : "bg-white text-gray-950"
      }`}
    >
      <div className="max-w-[1400px] w-full flex mx-auto gap-2">
        <Sidebar />
        <div className="w-full border-l border-gray-600 p-8">
          {children}
        </div>
      </div>
    </div>
  );
}
