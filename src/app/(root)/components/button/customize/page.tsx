"use client";

import React, { useState } from "react";
import { cn } from "@/lib/utils";
import "@/css/button.css";
import { EaseTypes, Theme } from "@/types/types";
import "@/css/global.css";
import { useSelector } from "react-redux";
import Custom from "@/components/Custom";
import { CopyBtn } from "@/components/CopyBtn";

const ButtonPage = () => {
  const activeTabTypes: Record<string, string> = {
    preview: "preview",
    code: "code",
    settings: "settings",
  };

  const [animationEase, setAnimationEase] = useState(EaseTypes.default);
  const theme = useSelector((state: any) => state.theme.theme);
  const [activeTab, setActiveTab] = useState(activeTabTypes.preview);
  const [code, setCode] = useState("");

  const easeOptions = Object.entries(EaseTypes).map(([key, value]) => ({
    label: value.label,
    value: value.value,
    className: value.className,
  }));

  return (
    <div className="container min-h-screen overflow-y-auto">
      <h1 className="text-3xl font-bold mb-6">Button</h1>

      <div className="space-y-8">
        <section>
          <div className=" overflow-hidden">
            <div className="flex justify-between items-center w-1/2">
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
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4 w-full">
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
                        &#39;code&#39;
                      </pre>
                    </div>
                  )}
                </div>

                <div className="ease-options grid grid-cols-3 gap-8 h-fit justify-start items-start p-4">
                  {easeOptions.map((option) => (
                    <button
                      className={`rounded-full cursor-pointer p-2 border-2 bg-transparent ease-btn hover:border-cyan-700 ${
                        animationEase.label === option.label &&
                        "border-cyan-700 active-ease-btn"
                      }
                  ${theme === Theme.dark ? "text-gray-50" : "text-zinc-950"} `}
                      key={option.label}
                      onClick={() => setAnimationEase(option)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
        <Custom />
      </div>
    </div>
  );
};

export default ButtonPage;
