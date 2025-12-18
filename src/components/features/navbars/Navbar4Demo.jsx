"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
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

export function Navbar4Demo() {
  gsap.registerPlugin(Draggable, InertiaPlugin);

  const LOGO_TEXT = "PIXELFLOWUI";
  const [isNav, setIsNav] = useState(false);
  const refs = useRef([]);
  const [activePillStyle, setActivePillStyle] = useState({ width: 0, left: 0 });
  const navbarRef = useRef(null);

  const toggleNav = useCallback(() => {
    setIsNav((prev) => !prev);
  });

  useGSAP(() => {
    const draggables = [];
    LOGO_TEXT.split("").forEach((_item, index) => {
      draggables.push(
        Draggable.create(`.logo-${index}`, {
          bounds: ".nav-wrapper",
          inertia: true,
        })[0]
      );
    });

    return () => {
      draggables.forEach((d) => d && d.kill());
    };
  }, [isNav]);

  const handleScroll = useCallback(
    (e) => {
      if (isNav) {
      }
    },
    [isNav]
  );

  const handlePillStyle = useCallback((index) => {
    if (!refs.current[index]) return;
    const rect = refs.current[index].getBoundingClientRect();
    const navRect = navbarRef.current.getBoundingClientRect();

    setActivePillStyle({
      width: rect.width,
      left: rect.left - navRect.left - 8,
    });
  }, []);

  const resetPillStyle = useCallback(() => {
    setActivePillStyle({ width: 0, left: 0 });
  }, []);

  useEffect(() => {}, []);

  return (
    <nav className="w-full flex justify-center items-center absolute top-0 z-30 left-0 navbar-wrapper bg-black border-b-[0.6px] border-white/40">
      <div className="px-5 md:px-12 py-5 flex items-center gap-4 justify-between w-full z-20">
        <Link
          href="/components/navbars"
          className="nav-left text-black bg-white rounded-full px-4 py-2 font-bold text-sm md:text-xl z-20 whitespace-nowrap"
        >
          PIXELFLOW UI
        </Link>

        <div
          ref={navbarRef}
          className=" z-50 border-white/50 border-[0.6px] rounded-full p-1 md:p-2 flex items-center gap-2"
        >
          <div className="relative flex items-center gap-2 md:gap-4">
            <div
              style={{
                width: `${activePillStyle.width}px`,
                left: `${activePillStyle.left}px`,
                opacity: activePillStyle.width > 0 ? 1 : 0,
              }}
              className="absolute pill-bg h-full rounded-full z-20 transition-all duration-500 bg-blue-200 cursor-pointer pointer-events-none"
            ></div>

            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => (
                <Link
                  ref={(navItem) => (refs.current[index] = navItem)}
                  key={index}
                  href={item.href}
                  className=" text-white rounded-full px-5 py-1 cursor-pointer z-30 hover:text-blue-800 transition-all duration-500 relative"
                  onMouseEnter={() => handlePillStyle(index)}
                  onMouseLeave={resetPillStyle}
                >
                  {item.label}
                </Link>
              ))}
            </div>

            <div
              onClick={() => toggleNav()}
              className="flex cursor-pointer w-8 h-8 transition-all duration-300 bg-white p-2 rounded-full hover:scale-125 z-30 items-center justify-center text-black"
            >
              <Menu strokeWidth={2} className="w-5 h-5 md:w-6 md:h-6" />
            </div>
          </div>
        </div>
      </div>

      <div
        style={{ height: `${isNav ? "70vh" : "0%"}` }}
        className=" bg-white w-full ease-in absolute top-0 left-0 nav-bg z-30 overflow-hidden transition-all duration-1000 flex flex-col "
      >
        <div className=" w-full h-full flex flex-col bg-white overflow-hidden relative">
          <div className="w-full h-[80px] md:h-[100px] flex items-center justify-between px-5 md:px-12 py-5 shrink-0">
            <div className="nav-left text-white bg-black rounded-full px-4 py-2 font-bold text-sm md:text-xl z-40">
              PIXELFLOW UI
            </div>

            <div className=" z-50 p-2 flex items-center justify-end">
              <div
                onClick={() => toggleNav()}
                className="flex origin-center bg-black w-8 h-8 md:w-10 md:h-10 transition-all duration-300 justify-center items-center rounded-full cursor-pointer hover:scale-110 z-50"
              >
                <Menu strokeWidth={2} size={20} className="text-white" />
              </div>
            </div>
          </div>

          <div className="relative w-full flex flex-col md:grid md:grid-cols-2 px-5 md:px-12 pb-12 pt-4 flex-1 nav-wrapper overflow-hidden">
            <div className="w-full flex flex-col justify-start md:justify-end gap-6 z-40 order-2 md:order-1 mt-10 md:mt-0">
              <div className="space-y-4 flex flex-col text-3xl md:text-4xl">
                {[
                  { label: "Work", href: "#" },
                  { label: "Services", href: "#" },
                  { label: "About", href: "#" },
                ].map((item, index) => (
                  <button
                    key={index}
                    className="text-left relative group w-fit"
                  >
                    <p className="capitalize text-black font-bold">
                      {item.label}
                    </p>
                    <div className="absolute group-hover:w-full group-hover:left-0 right-0 w-0 h-[2px] bg-black transition-all duration-300"></div>
                  </button>
                ))}
              </div>
            </div>

            <div className="right w-full flex items-center md:items-end justify-center md:justify-end h-[200px] md:h-full relative order-1 md:order-2">
              <div className=" flex flex-col justify-center gap-2 text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-black relative select-none">
                <div className="flex gap-1 md:gap-2 flex-wrap md:flex-nowrap justify-center md:justify-end">
                  {Array.from({
                    length: LOGO_TEXT.length,
                  }).map((_, index) => (
                    <div
                      key={index}
                      className={`logo-${index} cursor-grab active:cursor-grabbing inline-block`}
                    >
                      {LOGO_TEXT[index]}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}


