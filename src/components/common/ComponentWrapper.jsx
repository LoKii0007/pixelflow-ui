"use client";

import React, { useEffect, useRef } from "react";
import { SELECTION_TYPES } from "@/utils/constants/navigation";
import TabButton from "@/components/common/TabButton";
import { useState, useCallback } from "react";
import CardLayout from "@/layouts/CardLayout";
import CodeSnippetLayout from "@/layouts/CodeSnippetLayout";
import CopyBtn from "@/components/common/CopyBtn";
import ReplayBtn from "@/components/common/ReplayBtn";
import { cn } from "@/lib/utils";

const ComponentWrapper = ({
  className,
  children,
  replayButton = false,
  codeSnippet = "",
  cardClassName
}) => {
  const [activeTab, setActiveTab] = useState(SELECTION_TYPES.preview);
  const activeTabRef = useRef(null);
  const parentRef = useRef(null);
  const [bgPillSize, setBgPillSize] = useState({
    height: 0,
    width: 0,
    left: 0,
  });
  const [animationKey, setAnimationKey] = useState(0);

  const resetAnimation = useCallback(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, []);

  useEffect(() => {
    if (!activeTabRef.current || !parentRef.current) {
      return;
    }

    setBgPillSize({
      width: activeTabRef?.current?.getBoundingClientRect()?.width || 0,
      left:
        activeTabRef?.current?.getBoundingClientRect()?.left -
        parentRef?.current?.getBoundingClientRect()?.left || 0,
      height: activeTabRef?.current?.getBoundingClientRect()?.height || 0,
    });
  }, [activeTab]);

  return (
    <section className={cn("w-full", className)}>
      <div className=" overflow-hidden space-y-6">

        <div className="flex justify-between items-center w-full">
          <div
            ref={parentRef}
            className="flex items-center gap-4 border-[0.6px] border-white/20 rounded-[5px] relative justify-center"
          >
            <div
              style={{
                width: bgPillSize.width,
                left: bgPillSize.left,
                height: bgPillSize.height,
              }}
              className={`transition-all pill duration-200 ease-in-out border-[0.6px] border-white/20 absolute bg-white/20 z-10 h-[calc(100%-8px)] rounded-[5px]`}
            ></div>
            <TabButton
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              label="Preview"
              value={SELECTION_TYPES?.preview}
              ref={activeTabRef}
            />
            <TabButton
              activeTab={activeTab}
              setActiveTab={setActiveTab}
              label="Code"
              value={SELECTION_TYPES?.code}
              ref={activeTabRef}
            />
          </div>
          <CopyBtn code={codeSnippet} />
        </div>

        <div className="relative">
          <CardLayout className={cn("relative", cardClassName)}>
            {activeTab === SELECTION_TYPES?.preview ? (
              <>
                {React.isValidElement(children)
                  ? React.cloneElement(children, {
                    key: animationKey,
                    resetAnimation: replayButton ? resetAnimation : undefined
                  })
                  : <div key={animationKey}>{children}</div>
                }
                {replayButton && <ReplayBtn resetAnimation={resetAnimation} />}
              </>
            ) : (
              <CodeSnippetLayout code={codeSnippet} />
            )}
          </CardLayout>
        </div>
      </div>
    </section>
  );
};

export default ComponentWrapper;
