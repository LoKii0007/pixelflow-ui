"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import "@/css/button.css";
import { EaseTypes, Theme } from "@/types/types";
import "@/css/global.css";
import { useSelector } from "react-redux";
import { CopyBtn } from "@/components/CopyBtn";
import { Settings } from "lucide-react";
import { useRouter } from "next/navigation";

const activeTabTypes = {
  preview: "preview",
  code: "code",
  settings: "settings",
};

const ButtonPage = () => {
  const [animationEase, setAnimationEase] = useState(EaseTypes.default);
  const theme = useSelector((state) => state.theme.theme);
  const [activeTab, setActiveTab] = useState(activeTabTypes.preview);
  const [code, setCode] = useState("");
  const router = useRouter();

  return (
    <div className="container ">
      <h1 className="text-3xl font-bold mb-6">Buttons</h1>

      <div className="all-components w-full grid grid-cols-2 gap-12">
        <div className="space-y-8">
          <section>
            <div className=" overflow-hidden">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setActiveTab(activeTabTypes?.preview)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium hover:cursor-pointer ",
                      activeTab === activeTabTypes?.preview && "text-cyan-700"
                    )}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab(activeTabTypes?.code)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium hover:cursor-pointer",
                      activeTab === activeTabTypes?.code && "text-cyan-700"
                    )}
                  >
                    Code
                  </button>
                </div>
                <button
                  onClick={() => router.push("/components/button/customize")}
                  className={cn(
                    "px-4 py-2 text-sm font-medium group hover:cursor-pointer transition-all duration-300 flex items-center gap-2",
                    activeTab === activeTabTypes?.settings && "text-cyan-700"
                  )}
                >
                  <div className="icon group-hover:rotate-45 group-hover:translate-x-[74px] transition-all duration-300">
                    <Settings size={16} />
                  </div>
                  <div className="group-hover:translate-x-[-22px] transition-all duration-300">
                    Customize
                  </div>
                </button>
              </div>

              <div className="relative">
                <div className="p-4 border rounded-sm border-gray-600 min-h-[250px] overflow-y-auto relative">
                  <CopyBtn code={code} />

                  {activeTab === activeTabTypes?.preview ? (
                    <div className="flex justify-center items-center min-h-[200px]">
                      <div className="buttons">
                        <button className={`btn ${animationEase.className} `}>
                          <span className={`${animationEase.className}`}></span>
                          <p
                            className={` ${animationEase.className}`}
                            data-start="good luck!"
                            data-text="start!"
                            data-title="new game"
                          ></p>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        'code'
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="space-y-8">
          <section>
            <div className=" overflow-hidden">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setActiveTab(activeTabTypes?.preview)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium hover:cursor-pointer ",
                      activeTab === activeTabTypes?.preview && "text-cyan-700"
                    )}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab(activeTabTypes?.code)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium hover:cursor-pointer",
                      activeTab === activeTabTypes?.code && "text-cyan-700"
                    )}
                  >
                    Code
                  </button>
                </div>
                <button
                  onClick={() => router.push("/components/button/customize")}
                  className={cn(
                    "px-4 py-2 text-sm font-medium group hover:cursor-pointer transition-all duration-300 flex items-center gap-2",
                    activeTab === activeTabTypes?.settings && "text-cyan-700"
                  )}
                >
                  <div className="icon group-hover:rotate-45 group-hover:translate-x-[74px] transition-all duration-300">
                    <Settings size={16} />
                  </div>
                  <div className="group-hover:translate-x-[-22px] transition-all duration-300">
                    Customize
                  </div>
                </button>
              </div>

              <div className="relative">
                <div className="p-4 border rounded-sm border-gray-600 min-h-[250px] overflow-y-auto relative">
                  <CopyBtn code={code} />

                  {activeTab === activeTabTypes?.preview ? (
                    <div className="flex justify-center items-center min-h-[200px]">
                      <div className="buttons">
                        <button className={`btn ${animationEase.className} `}>
                          <span className={`${animationEase.className}`}></span>
                          <p
                            className={` ${animationEase.className}`}
                            data-start="good luck!"
                            data-text="start!"
                            data-title="new game"
                          ></p>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        'code'
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="space-y-8">
          <section>
            <div className=" overflow-hidden">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setActiveTab(activeTabTypes?.preview)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium hover:cursor-pointer ",
                      activeTab === activeTabTypes?.preview && "text-cyan-700"
                    )}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab(activeTabTypes?.code)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium hover:cursor-pointer",
                      activeTab === activeTabTypes?.code && "text-cyan-700"
                    )}
                  >
                    Code
                  </button>
                </div>
                <button
                  onClick={() => router.push("/components/button/customize")}
                  className={cn(
                    "px-4 py-2 text-sm font-medium group hover:cursor-pointer transition-all duration-300 flex items-center gap-2",
                    activeTab === activeTabTypes?.settings && "text-cyan-700"
                  )}
                >
                  <div className="icon group-hover:rotate-45 group-hover:translate-x-[74px] transition-all duration-300">
                    <Settings size={16} />
                  </div>
                  <div className="group-hover:translate-x-[-22px] transition-all duration-300">
                    Customize
                  </div>
                </button>
              </div>

              <div className="relative">
                <div className="p-4 border rounded-sm border-gray-600 min-h-[250px] overflow-y-auto relative">
                  <CopyBtn code={code} />

                  {activeTab === activeTabTypes?.preview ? (
                    <div className="flex justify-center items-center min-h-[200px]">
                      <div className="buttons">
                        <button className={`btn ${animationEase.className} `}>
                          <span className={`${animationEase.className}`}></span>
                          <p
                            className={` ${animationEase.className}`}
                            data-start="good luck!"
                            data-text="start!"
                            data-title="new game"
                          ></p>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        'code'
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
        <div className="space-y-8">
          <section>
            <div className=" overflow-hidden">
              <div className="flex justify-between items-center w-full">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => setActiveTab(activeTabTypes?.preview)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium hover:cursor-pointer ",
                      activeTab === activeTabTypes?.preview && "text-cyan-700"
                    )}
                  >
                    Preview
                  </button>
                  <button
                    onClick={() => setActiveTab(activeTabTypes?.code)}
                    className={cn(
                      "px-4 py-2 text-sm font-medium hover:cursor-pointer",
                      activeTab === activeTabTypes?.code && "text-cyan-700"
                    )}
                  >
                    Code
                  </button>
                </div>
                <button
                  onClick={() => router.push("/components/button/customize")}
                  className={cn(
                    "px-4 py-2 text-sm font-medium group hover:cursor-pointer transition-all duration-300 flex items-center gap-2",
                    activeTab === activeTabTypes?.settings && "text-cyan-700"
                  )}
                >
                  <div className="icon group-hover:rotate-45 group-hover:translate-x-[74px] transition-all duration-300">
                    <Settings size={16} />
                  </div>
                  <div className="group-hover:translate-x-[-22px] transition-all duration-300">
                    Customize
                  </div>
                </button>
              </div>

              <div className="relative">
                <div className="p-4 border rounded-sm border-gray-600 min-h-[250px] overflow-y-auto relative">
                  <CopyBtn code={code} />

                  {activeTab === activeTabTypes?.preview ? (
                    <div className="flex justify-center items-center min-h-[200px]">
                      <div className="buttons">
                        <button className={`btn ${animationEase.className} `}>
                          <span className={`${animationEase.className}`}></span>
                          <p
                            className={` ${animationEase.className}`}
                            data-start="good luck!"
                            data-text="start!"
                            data-title="new game"
                          ></p>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <pre className="bg-muted p-4 rounded-md overflow-x-auto">
                        'code'
                      </pre>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
