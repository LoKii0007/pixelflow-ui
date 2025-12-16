export const Navbar4Code = `
"use client";

import React, { useCallback, useState, useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable, InertiaPlugin } from "gsap/all";
import Link from "next/link";
import { Menu } from "lucide-react";

const navItems = [
  {
    label: "Lets work",
    href: "/components/navbars",
  },
  {
    label: "Contact",
    href: "/components/navbars",
  },
];

const Navbar = () => {
  gsap.registerPlugin(Draggable, InertiaPlugin);

  const LOGO_TEXT = "PIXELFLOW UI";
  const [isNav, setIsNav] = useState(false);
  const refs = useRef([]);
  const [activePillStyle, setActivePillStyle] = useState({ width: 0, left: 0 });
  const navbarRef = useRef(null);

  const toggleNav = useCallback(() => {
    setIsNav((prev) => !prev);
  });

  useGSAP(() => {
    LOGO_TEXT.split("").forEach((_item, index) => {
      Draggable.create(\`.logo-\${index}\`, {
        bounds: ".nav-wrapper",
      });
    });
  }, []);

  const handleScroll = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handlePillStyle = useCallback((index) => {
    setActivePillStyle({
      width: refs.current[index]?.getBoundingClientRect().width,
      left:
        refs.current[index]?.getBoundingClientRect().left -
        navbarRef.current.getBoundingClientRect().left -
        8,
    });
  }, []);

  const resetPillStyle = useCallback(() => {
    setActivePillStyle({
      width: 32,
      left:
        refs.current[navItems.length - 1]?.getBoundingClientRect().left +
        refs.current[navItems.length - 1]?.getBoundingClientRect().width -
        navbarRef.current.getBoundingClientRect().left +
        8,
    });
  }, []);

  useEffect(() => {
    if (refs.current) {
      resetPillStyle();
    }
  }, [refs.current]);
  return (
    <nav
      className={\`w-full flex justify-center items-center absolute top-0 z-[999] left-0 navbar-wrapper bg-black border-b border-white\`}
    >
      {/* //? isnav - false  */}
      <div className="px-12 py-5 flex items-center gap-4 justify-between w-full z-20">
        <Link
          href="/components/navbars"
          className="nav-left text-black bg-white rounded-full px-4 py-2 font-bold text-xl z-20"
        >
          PIXELFLOW UI
        </Link>

        <div
          ref={navbarRef}
          className=" z-50 border-white border rounded-full p-2 flex items-center gap-2"
        >
          <div className="relative flex items-center gap-4">
            <div
              style={{
                width: \`\${activePillStyle.width}px\`,
                left: \`\${activePillStyle.left}px\`,
              }}
              className="absolute pill-bg h-full rounded-full z-20 transition-all duration-500 bg-blue-200 cursor-pointer"
            ></div>
            {navItems.map((item, index) => (
              <Link
                ref={(navItem) => (refs.current[index] = navItem)}
                key={index}
                href={item.href}
                className=" text-white rounded-full px-5 py-1 cursor-pointer z-30 hover:text-blue-800 transition-all duration-500"
                onMouseEnter={() => handlePillStyle(index)}
                onMouseLeave={resetPillStyle}
              >
                {item.label}
              </Link>
            ))}
            <div
              onClick={() => toggleNav()}
              className={\`flex cursor-pointer w-8 h-8 transition-all duration-300 bg-white p-2 rounded-full hover:scale-125 z-30 items-center justify-center text-black\`}
            >
              <Menu strokeWidth={2} className="w-6 h-6" />
            </div>
          </div>
        </div>
      </div>

      {/* //? isnav - true  */}
      <div
        onWheel={handleScroll}
        onTouchMove={handleScroll}
        onScroll={handleScroll}
        style={{ height: \`\${isNav ? "100vh" : "0%"}\` }}
        className="h-0 bg-white w-full ease-in absolute top-0 left-0 nav-bg z-30 overflow-hidden transition-all duration-1000 flex flex-col"
      >
        <div className="h-[100vh] w-full flex flex-col bg-white justify-between">
          <div className="w-full items-center justify-between px-12 py-5">
            <div className="nav-left text-white bg-black rounded-full px-4 py-2 absolute top-8 left-12 font-bold text-xl">
              PIXELFLOW UI
            </div>
            <div className=" z-50 border-transparent border rounded-full p-2 flex items-center gap-2 w-full justify-end ">
              <div
                onClick={() => toggleNav()}
                className={\`flex origin-center bg-black w-8 h-8 transition-all duration-300 justify-center items-center rounded-full cursor-pointer hover:scale-125\`}
              >
                <Menu strokeWidth={2} size={20} className="text-white" />
              </div>
            </div>
          </div>

          <div className="relative w-full nav-wrapper grid grid-cols-2 p-12 pt-0 flex-1 items-end">
            <div className="w-full flex flex-col justify-end gap-6">
              <div className="space-y-4 flex flex-col text-4xl">
                {[
                  { label: "work", href: "#" },
                  { label: "Services", href: "#" },
                  { label: "About", href: "#" },
                ].map((item, index) => (
                  <button
                    key={index}
                    className="text-left relative group w-fit"
                  >
                    <p className="capitalize text-black">{item.label}</p>
                    <div className="absolute group-hover:w-full group-hover:left-0 right-0 w-0 h-[1px] bg-black transition-all duration-300"></div>
                  </button>
                ))}
              </div>
            </div>

            <div className="right w-full flex items-end justify-end h-full">
              <div className=" flex flex-col justify-center gap-2 text-7xl font-bold text-black">
                <div className="flex gap-2">
                  {Array.from({
                    length: LOGO_TEXT.length,
                  }).map((_, index) => (
                    <span key={index} className={\`logo-\${index}\`}>
                      {LOGO_TEXT[index]}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar`
