"use client";

import React, { useCallback, useState } from "react";
import { SELECTION_TYPES } from "@/utils/constants/navigation";
import TabButton from "@/components/common/TabButton";
import CopyBtn from "@/components/common/CopyBtn";
import Navbar1Code from "./Navbar1Code";
import CardLayout from "@/layouts/CardLayout";
import ReplayBtn from "@/components/common/ReplayBtn";
import CodeSnippetLayout from "@/layouts/CodeSnippetLayout";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Draggable, InertiaPlugin } from "gsap/all";
import Link from "next/link";

const Navbar4 = ({ className }) => {
  const [activeTab, setActiveTab] = useState(SELECTION_TYPES.preview);
  const LOGO_TEXT = "PIXELFLOW UI";
  const [isNav, setIsNav] = useState(false);

  gsap.registerPlugin(Draggable, InertiaPlugin);
  const [onMenu, setOnMenu] = useState(false);

  const toggleNav = useCallback(() => {
    setIsNav((prev) => !prev);
  });

  useGSAP(() => {
    Draggable.create(
      ".logo-a, .logo-b, .logo-c, .logo-d, .logo-e, .logo-f, .logo-g, .logo-h, .logo-i, .logo-img",
      {
        bounds: ".nav-wrapper",
        // inertia: true,
      }
    );
  }, []);

  const handleScroll = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  return (
    <div className={`space-y-8 ${className}`}>
      <section>
        <div className=" overflow-hidden">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
              <TabButton
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                label="Preview"
                value={SELECTION_TYPES?.preview}
              />
              <TabButton
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                label="Code"
                value={SELECTION_TYPES?.code}
              />
            </div>
            <CopyBtn code={Navbar1Code} />
          </div>

          <div className="relative">
            <CardLayout className={"bg-black !p-0"}>
              {activeTab === SELECTION_TYPES?.preview ? (
                <>
                  <nav
                    className={` ${
                      isNav ? "h-full" : ""
                    } w-full flex justify-between items-center absolute top-0 z-40 p-6`}
                  >
                    <Link
                      href="/components/navbars"
                      className="nav-left text-black bg-white rounded-full px-4 py-2 font-bold text-xl z-20"
                    >
                      PIXELFLOW UI
                    </Link>

                    <div className=" z-50 border-white border rounded-full p-2 flex items-center gap-2">
                      <div className="relative flex items-center gap-4">
                        <div className="absolute pill-bg w-[80px] h-full bg-white rounded-full"></div>
                        <Link
                          href="/components/navbars"
                          className=" text-white rounded-full px-5 py-1 cursor-pointer nav-item"
                        >
                          Lets work
                        </Link>
                        <div
                          onMouseEnter={() => setOnMenu(true)}
                          onMouseLeave={() => setOnMenu(false)}
                          onClick={() => toggleNav()}
                          className={` z-40 py-1 duration-300 transition-all cursor-pointer nav-item`}
                        >
                          Menu
                        </div>
                        <div
                          onMouseEnter={() => setOnMenu(true)}
                          onMouseLeave={() => setOnMenu(false)}
                          onClick={() => toggleNav()}
                          className={`flex origin-center cursor-pointer nav-item w-8 h-8 transition-all duration-300 bg-white p-4 rounded-full`}
                        ></div>
                      </div>
                    </div>

                    <div
                      className={`absolute w-2 h-2 ${
                        onMenu ? "scale-[4]" : "scale-100"
                      } bg-black top-12 right-16 z-20 rounded-full transition-all duration-300 -translate-y-[50%] translate-x-[50%]`}
                    ></div>

                    <div
                      onWheel={handleScroll}
                      onTouchMove={handleScroll}
                      onScroll={handleScroll}
                      style={{ height: `${isNav ? "309px" : "0px"}` }}
                      className="h-0 bg-white w-full ease-in absolute top-0 left-0 nav-bg z-30 overflow-hidden transition-all duration-1000"
                    >
                      <div className="nav-left text-white bg-black rounded-full px-4 py-2 absolute top-8 left-12 font-bold text-xl">
                        PIXELFLOW UI
                      </div>
                      <div
                        onClick={() => toggleNav()}
                        className={`absolute ${
                          onMenu ? "scale-125" : "scale-100"
                        } bg-white top-8 w-8 h-8 right-12 z-30 rounded-full transition-all duration-300 text-black`}
                      ></div>
                      <div className="relative h-[309px] w-full nav-wrapper grid grid-cols-2 p-12">
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

                        <div className="right w-full flex items-end justify-end">
                          <div className=" flex flex-col justify-center gap-2 text-7xl font-bold text-black">
                            <div className="flex gap-2">
                              {Array.from({ length: LOGO_TEXT.length / 2 }).map(
                                (_, index) => (
                                  <span key={index} className="logo-a">
                                    {LOGO_TEXT[index]}
                                  </span>
                                )
                              )}
                            </div>
                            <div className="flex gap-2">
                              {Array.from({ length: LOGO_TEXT.length / 2 }).map(
                                (_, index) => (
                                  <span key={index} className="logo-a">
                                    {LOGO_TEXT[index + LOGO_TEXT.length / 2]}
                                  </span>
                                )
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </nav>

                  {/* //?replay button  */}
                  {/* <ReplayBtn resetAnimation={resetAnimation} /> */}
                </>
              ) : (
                <CodeSnippetLayout code={Navbar1Code} />
              )}
            </CardLayout>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar4;
