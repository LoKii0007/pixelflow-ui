"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import SearchDialog from "./SearchDialog";
import Image from "next/image";
import { Globe, MenuIcon, Moon, Sun } from "lucide-react";
import { useThemeStore } from "@/stores/themeStore";
import { Theme } from "@/lib/constants";
import Link from "next/link";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  const { theme } = useThemeStore();

  return (
    <>
      {/* //?mobile Navbar */}
      <nav
        className={` w-full sticky hidden md:block top-0 z-50 border-b border-gray-600 ${
          theme === Theme.dark
            ? "bg-zinc-950 text-gray-50"
            : "bg-gray-50 text-zinc-950"
        } `}
      >
        <div className="navbar max-w-[1400px] mx-auto flex justify-between items-center py-4 px-8 2xl:px-0">
          <div className="nav-left flex items-center gap-6">
            <Link
              href={`/`}
              className="nav-link cursor-pointer flex items-center gap-1"
            >
              <Image src="/images/logo.png" alt="logo" width={50} height={50} />
              <h1 className="text-2xl font-bold">Pixelflow UI</h1>
            </Link>
            <Link
              href={`/components/navbars`}
              className="nav-link cursor-pointer"
            >
              Components
            </Link>
            {/* <Link href={`/playground`} className="nav-link cursor-pointer">
              Playground
            </Link> */}
          </div>

          <div className="nav-right flex items-center gap-4">
            <Link
              target="_blank"
              href={`https://portfolio-five-rho.vercel.app`}
              className="nav-link cursor-pointer"
            >
              <Globe className="h-5 w-5" />
            </Link>
            <Link
              target="_blank"
              href={`https://github.com/LoKii0007`}
              className="nav-link cursor-pointer"
            >
              <img src="/images/github.svg" alt="github" className="h-5 w-5" />
            </Link>
            <SearchDialog theme={theme} />
            {/* <Button
              onClick={() => toggleTheme()}
              variant="ghost"
              size="icon"
              className="hover:bg-zinc-800 hover:text-white cursor-pointer"
            >
              {theme === "dark" ? (
                <Sun className="h-4 w-4" />
              ) : (
                <Moon className="h-4 w-4" />
              )}
            </Button> */}
          </div>
        </div>
      </nav>

      {/* //? desktop Navbar */}
      <nav
        className={` w-full sticky block md:hidden top-0 z-50 border-b border-gray-600 ${
          theme === Theme.dark
            ? "bg-zinc-950 text-gray-50"
            : "bg-gray-50 text-zinc-950"
        } `}
      >
        <div className="navbar max-w-[1400px] mx-auto flex justify-between items-center p-5 overflow-x-hidden">
          <div className="nav-left flex items-center gap-6">
            <Link
              href={`/`}
              className="nav-link cursor-pointer flex items-center gap-1"
            >
              <Image src="/images/logo.png" alt="logo" width={30} height={30} />
              <h1 className="text-xl font-bold">Pixelflow UI</h1>
            </Link>
          </div>
          <MobileSidebar />
        </div>
      </nav>
    </>
  );
};

export default Navbar;
