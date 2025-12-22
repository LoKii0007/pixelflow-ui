"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const MenuItem = ({ label, href }) => {
  return (
    <Link className=" relative group " href={href}>
      <span className="group-hover:text-black transition-all duration-300 text-white z-20 relative">
        {label}
      </span>
      <div className="w-0 h-full absolute top-0 right-0 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0 z-10"></div>
    </Link>
  );
};

const MobileMenuItem = ({ label, href, activeView }) => {
  return (
    <Link className={`relative group overflow-hidden`} href={href}>
      <div
        className={`group-hover:text-black transition-all duration-300 z-20 relative pe-5 ${activeView === href
          ? "bg-white text-black px-3 translate-x-0"
          : "text-white -translate-x-5"
          } overflow-hidden flex items-center gap-2`}
      >
        <div className={`w-3 h-3 bg-black rotate-45 `}></div>
        <span>{label}</span>
      </div>
      <div
        className={`w-0 h-full absolute top-0 right-0 bg-white transition-all duration-300 ${activeView !== href ? "group-hover:w-full" : ""
          } group-hover:left-0 z-10`}
      ></div>
      {activeView === href && (
        <div className="absolute w-[1vw] h-[1vw] rotate-45 bg-black z-20 -bottom-[0.5vw] -right-[0.5vw] "></div>
      )}
    </Link>
  );
};

export function Navbar3LyraDemo() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeView, setActiveView] = useState("/components/navbars");

  const menuItems = [
    {
      label: "Navbars",
      href: "/components/navbars",
    },
    {
      label: "Loaders",
      href: "/components/loaders",
    },
    {
      label: "Lists",
      href: "/components/lists",
    },
  ];

  return (
    <div className="flex justify-center items-center absolute top-0 left-0 w-full z-10">
      <div className="mx-7 my-4 w-full flex items-center justify-between h-full relative">
        <button
          onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          className="nav-left px-3 py-1 border-[0.6px] border-gray-300 hover:border-white cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Menu strokeWidth={1} color="white" />
          </div>
        </button>
        <div className="nav-middle md:flex flex-1 justify-center items-center border-t border-b border-gray-300 px-3 py-2 gap-3 uppercase text-xs hidden">
          {menuItems.map((item, index) => (
            <MenuItem key={index} label={item.label} href={item.href} />
          ))}
        </div>
        <button className="nav-right border-[0.6px] border-white bg-gray-300 hover:bg-white hover:text-black text-black transition-all duration-300 px-3 py-1 cursor-pointer">
          Login
        </button>
      </div>

      <div
        className={`nav-mobile ${isSidebarOpen ? "w-full opacity-100" : "w-full opacity-0 pointer-events-none"
          } transition-all duration-300 absolute top-0 left-0 overflow-hidden z-20 h-[70vh]`}
      >
        <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`relative w-full h-[70vh] md:w-2/3 xl:w-1/2`}>
          <div className="w-full h-full px-7 py-4">
            <div className={`nav-mobile-content grid grid-cols-12 gap-2 justify-center bg-black h-full rounded-xl rounded-tl-none border-[0.6px] border-white transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
              <div className="col-span-2 p-4 hidden md:block"></div>
              <div className="nav-mobile-content-item flex flex-col gap-2 text-white text-3xl md:text-5xl uppercase w-fit h-full col-span-10 md:col-span-8 p-4 overflow-hidden">
                {menuItems.map((item, index) => (
                  <MobileMenuItem
                    key={index}
                    label={item.label}
                    href={item.href}
                    activeView={activeView}
                  />
                ))}
              </div>
              <div className="flex justify-end col-span-2 md:col-span-2">
                <div className="border-s-[0.6px] border-white">
                  <div className="border-b-[0.6px] border-white">
                    <button
                      onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                      className="nav-mobile-close h-fit cursor-pointer p-4 hover:rotate-180 transition-all duration-300"
                    >
                      <X />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


