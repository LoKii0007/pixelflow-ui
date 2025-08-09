"use client";

import React, { useCallback } from "react";
import { SELECTION_TYPES } from "@/utils/constants/navigation";
import TabButton from "@/components/common/TabButton";
import CopyBtn from "@/components/common/CopyBtn";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import { useState } from "react";
import Navbar1Code from "./Navbar1Code";
import CardLayout from "@/layouts/CardLayout";
import ReplayBtn from "@/components/common/ReplayBtn";
import CodeSnippetLayout from "@/layouts/CodeSnippetLayout";

const Navbar1 = () => {
  const [activeTab, setActiveTab] = useState(SELECTION_TYPES.preview);
  const [animationKey, setAnimationKey] = useState(0);

  const resetAnimation = useCallback(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <div className="space-y-8">
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
            <CardLayout>
              {activeTab === SELECTION_TYPES?.preview ? (
                <>
                  <div className="flex justify-center items-center ">
                    <LazyMotion features={domAnimation}>
                      <m.div
                        key={animationKey}
                        initial={{ height: "100%", width: "100%", top: 0 }}
                        animate={{
                          height: "50px",
                          width: "90%",
                          top: 20,
                          borderRadius: "25px",
                        }}
                        transition={{ duration: 0.8, ease: "anticipate" }}
                        className=" h-full w-full bg-white flex items-center justify-center text-black px-5 overflow-hidden absolute"
                      >
                        <m.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            delay: 0.4,
                          }}
                          className="flex items-center justify-between w-full"
                        >
                          <div className="flex items-center gap-2">
                            <img
                              src="/images/logo.png"
                              alt="logo"
                              className="w-5 h-5 bg-black rounded-full"
                            />
                            <p className="text-base">PixelflowUI</p>
                          </div>
                          <div className="flex items-center gap-2 text-xs">
                            <a href="#">Home</a>
                            <a href="#">About</a>
                            <a href="#">Contact</a>
                          </div>
                        </m.div>
                        <m.div
                          initial={{ opacity: 1 }}
                          animate={{ opacity: 0 }}
                          transition={{ duration: 0.8, ease: "easeInOut" }}
                          className="absolute w-full h-[30vh] flex items-center justify-center top-0"
                        >
                          <div className="absolute w-fit text-5xl font-bold">
                            PixelflowUI
                          </div>
                        </m.div>
                      </m.div>
                    </LazyMotion>
                  </div>

                  {/* //?replay button  */}
                  <ReplayBtn resetAnimation={resetAnimation} />
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

export default Navbar1;
