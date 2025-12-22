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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { STYLE_MODES } from "@/lib/constants";

const Navbar = () => {
  const { theme, styleMode, setStyleMode } = useThemeStore();

  return (
    <>
      <nav
        className={` w-full sticky hidden md:block top-0 z-50 border-b-[0.6px] border-white/20 ${theme === Theme.dark
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
              <h1 className="text-2xl font-bold">PixelflowUI</h1>
            </Link>
            <Link
              href={`/components/navbars`}
              className="nav-link cursor-pointer"
            >
              Components
            </Link>
            <Link
              href={`/components/loaders`}
              className="nav-link cursor-pointer"
            >
              Loaders
            </Link>
          </div>

          <div className="nav-right flex items-center gap-4">
            <Link
              target="_blank"
              href={`https://lok1.dev`}
              className="nav-link cursor-pointer"
            >
              <Globe className="h-5 w-5" />
            </Link>
            <Tooltip>
              <TooltipTrigger>            <Link
                target="_blank"
                href={`https://github.com/LoKii0007/pixelflow-ui`}
                className="nav-link cursor-pointer"
              >
                <img src="/images/github.svg" alt="github" className="h-5 w-5" />
              </Link></TooltipTrigger>
              <TooltipContent>
                <p>Give us a star </p>
              </TooltipContent>
            </Tooltip>
            <SearchDialog theme={theme} />
            <Select value={styleMode} onValueChange={setStyleMode}>
              <SelectTrigger className="w-[120px] bg-transparent border-white/20">
                <SelectValue placeholder="Style" />
              </SelectTrigger>
              <SelectContent className='bg-zinc-950 text-gray-50'>
                <SelectItem value={STYLE_MODES.NOVA}>Nova</SelectItem>
                <SelectItem value={STYLE_MODES.RETRO}>Retro</SelectItem>
                <SelectItem value={STYLE_MODES.LYRA}>Lyra</SelectItem>
                {/* <SelectItem value="nova">Nova</SelectItem>
                <SelectItem value="pixel">Pixel</SelectItem> */}
              </SelectContent>
            </Select>
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

      <nav
        className={` w-full sticky block md:hidden top-0 z-50 border-b-[0.6px] border-white/20 ${theme === Theme.dark
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
              <h1 className="text-xl font-bold">PixelflowUI</h1>
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <Select value={styleMode} onValueChange={setStyleMode}>
              <SelectTrigger className="w-[120px] bg-transparent border-white/20">
                <SelectValue placeholder="Style" />
              </SelectTrigger>
              <SelectContent className='bg-zinc-950 text-gray-50'>
                <SelectItem value={STYLE_MODES.NOVA}>Nova</SelectItem>
                <SelectItem value={STYLE_MODES.RETRO}>Retro</SelectItem>
                <SelectItem value={STYLE_MODES.LYRA}>Lyra</SelectItem>
              </SelectContent>
            </Select>
            <MobileSidebar />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
