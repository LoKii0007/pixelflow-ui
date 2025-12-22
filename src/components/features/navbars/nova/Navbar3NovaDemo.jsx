"use client";

import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const MenuItem = ({ label, href }) => {
    return (
        <Link className=" relative group " href={href}>
            <span className="group-hover:text-white transition-all duration-300 text-neutral-700 font-semibold z-20 relative px-3 py-1">
                {label}
            </span>
            <div className="w-0 h-full absolute top-0 right-0 bg-black transition-all duration-300 group-hover:w-full group-hover:left-0 z-10 rounded-full"></div>
        </Link>
    );
};

const MobileMenuItem = ({ label, href, activeView }) => {
    return (
        <Link className="relative group overflow-hidden block w-full" href={href}>
            <div
                className={`transition-all duration-500 z-20 relative px-4 py-3 ${activeView === href
                    ? "translate-x-4 bg-neutral-100"
                    : "group-hover:translate-x-4 group-hover:bg-neutral-50"
                    } flex items-center gap-4 rounded-full`}
            >
                <div
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${activeView === href ? "bg-black scale-100" : "bg-neutral-400 scale-0 group-hover:scale-100"
                        }`}
                />
                <span className={`font-bold tracking-tight transition-colors duration-300 ${activeView === href ? "text-black" : "text-neutral-500 group-hover:text-black"
                    }`}>
                    {label}
                </span>
            </div>
        </Link>
    );
};

export function Navbar3NovaDemo() {
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
                    className="nav-left px-3 py-1 border-[0.6px] border-neutral-300 hover:border-black cursor-pointer rounded-full bg-white text-black"
                >
                    <div className="flex items-center gap-2">
                        <Menu strokeWidth={1} color="black" />
                    </div>
                </button>
                <div className="nav-middle md:flex flex-1 justify-center items-center border-t border-b border-neutral-200 px-3 py-2 gap-4 uppercase text-xs hidden bg-white shadow-sm rounded-full mx-4">
                    {menuItems.map((item, index) => (
                        <MenuItem key={index} label={item.label} href={item.href} />
                    ))}
                </div>
                <button className="nav-right border-[0.6px] border-neutral-300 bg-black hover:bg-neutral-800 hover:text-white text-white transition-all duration-300 px-3 py-1 cursor-pointer rounded-full">
                    Login
                </button>
            </div>

            <div
                className={`nav-mobile ${isSidebarOpen ? "w-full opacity-100" : "w-full opacity-0 pointer-events-none"
                    } transition-all duration-300 absolute top-0 left-0 overflow-hidden z-20 h-[70vh]`}
            >
                <div className={`absolute inset-0 bg-white/30 backdrop-blur-md transition-opacity duration-300 ${isSidebarOpen ? 'opacity-100' : 'opacity-0'}`}></div>
                <div className={`relative w-full h-[70vh] md:w-2/3 xl:w-1/2`}>
                    <div className="w-full h-full px-7 py-4">
                        <div className={`nav-mobile-content grid grid-cols-12 gap-2 justify-center bg-white h-full rounded-xl rounded-tl-none border-[0.6px] border-neutral-300 shadow-xl transition-transform duration-300 ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                            <div className="col-span-1 hidden md:block"></div>
                            <div className="nav-mobile-content-item flex flex-col gap-6 text-black text-3xl md:text-5xl uppercase w-fit h-full col-span-11 md:col-span-9 p-6 overflow-hidden ">
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
                                <div className="border-s-[0.6px] border-neutral-300">
                                    <div className="border-b-[0.6px] border-neutral-300">
                                        <button
                                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                                            className="nav-mobile-close h-fit cursor-pointer p-4 hover:rotate-180 transition-all duration-300"
                                        >
                                            <X color="black" />
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
