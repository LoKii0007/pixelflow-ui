"use client";

import React, { useCallback } from "react";
import { SELECTION_TYPES } from "@/utils/constants/navigation";
import TabButton from "@/components/common/TabButton";
import CopyBtn from "@/components/common/CopyBtn";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import { useState } from "react";
import Navbar2Code from "./Navbar2Code";
import CardLayout from "@/layouts/CardLayout";
import ReplayBtn from "@/components/common/ReplayBtn";
import CodeSnippetLayout from "@/layouts/CodeSnippetLayout";

const Navbar2 = () => {
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
            <CopyBtn code={Navbar2Code} />
          </div>

          <div className="relative">
            <CardLayout>
              {activeTab === SELECTION_TYPES?.preview ? (
                <>
                  <div className="flex justify-center items-center overflow-hidden px-4">
                    <LazyMotion features={domAnimation}>
                      <m.div
                        key={animationKey}
                        initial={{
                          height: "50px",
                          width: "50px",
                          top: -70,
                          borderRadius: "25px",
                        }}
                        animate={{
                          width: "90%",
                          top: 15,
                        }}
                        transition={{ duration: 1, ease: "anticipate" }}
                        className=" h-full w-full bg-white flex items-center justify-center text-black overflow-hidden absolute"
                      >
                        <m.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{
                            duration: 0.8,
                            ease: "easeInOut",
                            delay: 0.4,
                          }}
                          className="flex items-center justify-between w-full px-5"
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
                      </m.div>
                    </LazyMotion>
                  </div>

                  {/* //?replay button  */}
                  <ReplayBtn resetAnimation={resetAnimation} />
                </>
              ) : (
                <CodeSnippetLayout code={Navbar2Code} />
              )}
            </CardLayout>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar2;
