"use client";

import React, { useCallback, useRef, useEffect } from "react";
import { SELECTION_TYPES } from "@/utils/constants/navigation";
import TabButton from "@/components/common/TabButton";
import { useState } from "react";
import {Loader1Code} from "./Loader1Code";
import CardLayout from "@/layouts/CardLayout";
import ReplayBtn from "@/components/common/ReplayBtn";
import CodeSnippetLayout from "@/layouts/CodeSnippetLayout";
import CopyBtn from "@/components/common/CopyBtn";

const Navbar1 = () => {
  const [activeTab, setActiveTab] = useState(SELECTION_TYPES.preview);

  const textRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [loadingPercentage, setLoadingPercentage] = useState(0);
  const [initialAdjustment, setInitialAdjustment] = useState(0);

  useEffect(() => {
    if (textRef.current) {
      setInitialAdjustment(textRef.current.offsetWidth);
    }
  });

  const playAnimation = useCallback(() => {
    setLoading(true);
    setLoadingPercentage(0);
    if (textRef.current) {
      setInitialAdjustment(textRef.current.offsetWidth);
    }
    let i = 0;
    const interval = setInterval(() => {
      if (i === 100) {
        setLoading(false);
      }
      setLoadingPercentage((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
      i++;
    }, 200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    playAnimation();
  }, [playAnimation]);

  const textAdjustment = initialAdjustment * (1 - loadingPercentage / 100);

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
            <CopyBtn code={Loader1Code} />
          </div>

          <div className="relative">
            <CardLayout>
              {activeTab === SELECTION_TYPES?.preview ? (
                <>
                  <div className="loading-page w-full h-full overflow-hidden relative z-10">
                    <div className="bg-black h-full w-full z-[10]"></div>
                    <div
                      style={{ right: `${100 - loadingPercentage}%` }}
                      className="bg-white h-full w-full absolute z-[30] top-0 overflow-hidden transition-all ease"
                    >
                      <div
                        style={{ right: `-${textAdjustment}px` }}
                        className="text-black z-[40] bottom-0 absolute text-[100px] px-5 inner-text"
                      >
                        {loadingPercentage}
                      </div>
                    </div>
                    <div
                      ref={textRef}
                      style={{
                        right: `calc(${
                          100 - loadingPercentage
                        }% - ${textAdjustment}px)`,
                      }}
                      className="text-white z-[20] bottom-0 absolute text-[100px] transition-all ease px-5 outer-text"
                    >
                      {loadingPercentage}
                    </div>
                  </div>

                  {/* //?replay button  */}
                  <ReplayBtn resetAnimation={playAnimation} />
                </>
              ) : (
                <CodeSnippetLayout code={Loader1Code} />
              )}
            </CardLayout>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Navbar1;
