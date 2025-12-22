"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable, InertiaPlugin } from "gsap/all";
import Link from "next/link";
import { Menu } from "lucide-react";

/**
 * Note: Ensure you have installed gsap: npm install gsap
 */

const navItems = [
    {
        label: "PROJECTS",
        href: "/components/navbars",
    },
    {
        label: "CONTACT",
        href: "/components/navbars",
    },
];

export function Navbar4RetroDemo() {
    gsap.registerPlugin(Draggable, InertiaPlugin);

    const LOGO_TEXT = "PIXELFLOW_UI";
    const [isNav, setIsNav] = useState(false);
    const refs = useRef([]);
    const [activePillStyle, setActivePillStyle] = useState({ width: 0, left: 0 });
    const navbarRef = useRef(null);

    const toggleNav = useCallback(() => {
        setIsNav((prev) => !prev);
    }, []);

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

    const handlePillStyle = useCallback((index) => {
        if (!refs.current[index]) return;
        const rect = refs.current[index].getBoundingClientRect();
        const navRect = navbarRef.current.getBoundingClientRect();

        setActivePillStyle({
            width: rect.width,
            left: rect.left - navRect.left - 4, // adjusted offset
        });
    }, []);

    const resetPillStyle = useCallback(() => {
        setActivePillStyle({ width: 0, left: 0 });
    }, []);

    return (
        <nav className="w-full flex justify-center items-center absolute top-0 z-30 left-0 navbar-wrapper bg-white border-b-2 border-black font-mono">
            <div className="px-5 md:px-12 py-5 flex items-center gap-4 justify-between w-full z-20">
                <Link
                    href="/components/navbars"
                    className="nav-left text-white bg-black border-2 border-black px-4 py-2 font-bold text-sm md:text-xl z-20 whitespace-nowrap uppercase tracking-wider hover:bg-white hover:text-black transition-colors duration-200"
                >
                    PIXELFLOW_UI
                </Link>

                {/* Right side controls */}
                <div
                    ref={navbarRef}
                    className="z-50 border-2 border-black p-1 md:p-1 flex items-center gap-2 bg-white"
                >
                    <div className="relative flex items-center gap-2 md:gap-4">

                        {/* The sliding "pill" is now a solid black block */}
                        <div
                            style={{
                                width: `${activePillStyle.width}px`,
                                transform: `translateX(${activePillStyle.left}px)`,
                                opacity: activePillStyle.width > 0 ? 1 : 0,
                            }}
                            className="absolute h-full z-10 transition-all duration-300 bg-black cursor-pointer pointer-events-none"
                        ></div>

                        <div className="hidden md:flex items-center gap-2">
                            {navItems.map((item, index) => (
                                <Link
                                    ref={(navItem) => (refs.current[index] = navItem)}
                                    key={index}
                                    href={item.href}
                                    className="text-black px-5 py-1 cursor-pointer z-30 hover:text-white transition-colors duration-300 relative font-bold uppercase"
                                    onMouseEnter={() => handlePillStyle(index)}
                                    onMouseLeave={resetPillStyle}
                                >
                                    {item.label}
                                </Link>
                            ))}
                        </div>

                        <div
                            onClick={toggleNav}
                            className="flex cursor-pointer w-10 h-10 transition-all duration-200 bg-white border-l-2 border-black hover:bg-black hover:text-white z-30 items-center justify-center text-black"
                        >
                            <Menu strokeWidth={3} className="w-6 h-6" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Fullscreen Overlay */}
            <div
                style={{ height: `${isNav ? "70vh" : "0%"}` }}
                className="bg-white w-full ease-in-out absolute top-0 left-0 nav-bg z-30 overflow-hidden transition-all duration-700 flex flex-col border-b-2 border-black"
            >
                <div className="w-full h-full flex flex-col bg-white overflow-hidden relative">

                    {/* Mobile Overlay Header */}
                    <div className="w-full h-[80px] md:h-[100px] flex items-center justify-between px-5 md:px-12 py-5 shrink-0 border-b-2 border-dashed border-black">
                        <div className="nav-left text-black border-2 border-black px-4 py-2 font-bold text-sm md:text-xl z-40 uppercase">
                            PIXELFLOW_UI
                        </div>

                        <div className="z-50 flex items-center justify-end">
                            <div
                                onClick={toggleNav}
                                className="flex bg-black w-10 h-10 md:w-12 md:h-12 border-2 border-black transition-all duration-300 justify-center items-center cursor-pointer hover:bg-white hover:text-black z-50 text-white"
                            >
                                <Menu strokeWidth={3} size={24} />
                            </div>
                        </div>
                    </div>

                    <div className="relative w-full flex flex-col md:grid md:grid-cols-2 px-5 md:px-12 pb-12 pt-4 flex-1 nav-wrapper overflow-hidden bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]">
                        <div className="w-full flex flex-col justify-start md:justify-end gap-6 z-40 order-2 md:order-1 mt-10 md:mt-0">
                            <div className="space-y-6 flex flex-col text-3xl md:text-5xl font-black uppercase tracking-tighter">
                                {[
                                    { label: "Work", href: "#" },
                                    { label: "Services", href: "#" },
                                    { label: "About", href: "#" },
                                ].map((item, index) => (
                                    <button
                                        key={index}
                                        className="text-left relative group w-fit hover:translate-x-4 transition-transform duration-300"
                                    >
                                        <span className="relative z-10 text-black group-hover:text-white transition-colors duration-0">
                                            {item.label}
                                        </span>
                                        <span className="absolute inset-0 bg-black z-0 w-0 group-hover:w-full transition-all duration-300"></span>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="right w-full flex items-center md:items-end justify-center md:justify-end h-[200px] md:h-full relative order-1 md:order-2">
                            <div className="flex flex-col justify-center gap-2 text-4xl md:text-5xl lg:text-7xl font-black text-black relative select-none">
                                <div className="flex gap-1 md:gap-2 flex-wrap md:flex-nowrap justify-center md:justify-end">
                                    {Array.from({ length: LOGO_TEXT.length }).map((_, index) => (
                                        <div
                                            key={index}
                                            className={`logo-${index} cursor-grab active:cursor-grabbing inline-block hover:text-gray-500 transition-colors`}
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
