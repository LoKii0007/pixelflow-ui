"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const MenuItem = ({ label, href }) => {
    return (
        <Link className="relative group block" href={href}>
            <span className="block px-3 py-1 border-[2px] border-transparent group-hover:bg-black group-hover:text-white group-hover:border-black transition-all duration-200">
                {label}
            </span>
        </Link>
    );
};

const MobileMenuItem = ({ label, href, activeView }) => {
    return (
        <Link className={`relative group block w-full border-b-[2px] border-black py-4 hover:bg-black hover:text-white transition-colors duration-200 px-4`} href={href}>
            <div className="flex items-center gap-4">
                <div className={`w-4 h-4 border-[2px] border-current ${activeView === href ? "bg-current" : ""}`}></div>
                <span className="text-xl md:text-3xl font-bold uppercase tracking-wider">{label}</span>
            </div>
        </Link>
    );
};

export function Navbar3RetroDemo() {
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
        <div className="flex justify-center items-center absolute top-0 left-0 w-full z-10 font-mono text-black">
            <div className="mx-7 my-4 w-full flex items-center justify-between h-full relative">
                <button
                    onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    className="nav-left px-3 py-1 border-[2px] border-black bg-white hover:bg-black hover:text-white cursor-pointer transition-colors"
                >
                    <div className="flex items-center gap-2 font-bold uppercase">
                        <Menu strokeWidth={3} className="w-5 h-5" />
                        <span className="hidden md:inline">Menu</span>
                    </div>
                </button>

                <div className="nav-middle md:flex flex-1 justify-center items-center border-[2px] border-black bg-white px-3 mx-4 py-2 gap-3 uppercase text-xs font-bold hidden shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                    {menuItems.map((item, index) => (
                        <MenuItem key={index} label={item.label} href={item.href} />
                    ))}
                </div>

                <button className="nav-right border-[2px] border-black bg-white hover:bg-black hover:text-white text-black transition-all duration-200 px-6 py-1 cursor-pointer font-bold uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-none">
                    Login
                </button>
            </div>

            <div
                className={`nav-mobile ${isSidebarOpen ? "w-full md:w-2/3 xl:w-1/2 opacity-100" : "w-0 opacity-0"
                    } transition-all duration-300 absolute top-0 left-0 overflow-hidden z-20 h-[70vh] bg-white border-r-[2px] border-b-[2px] border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]`}
            >
                <div className="w-full h-full flex flex-col">
                    <div className="flex justify-between items-center p-6 border-b-[2px] border-black bg-white">
                        <span className="text-2xl font-bold uppercase tracking-widest">PIXELFLOW_UI</span>
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            className="p-2 border-[2px] border-black hover:bg-black hover:text-white transition-colors"
                        >
                            <X strokeWidth={3} />
                        </button>
                    </div>

                    <div className="flex-1 overflow-y-auto bg-white">
                        {menuItems.map((item, index) => (
                            <MobileMenuItem
                                key={index}
                                label={item.label}
                                href={item.href}
                                activeView={activeView}
                            />
                        ))}
                    </div>

                    <div className="p-6 border-t-[2px] border-black bg-gray-100">
                        <p className="text-xs uppercase font-bold text-center">© 2025 PIXELFLOW UI RETRO SYSTEM</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
