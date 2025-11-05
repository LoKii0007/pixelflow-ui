"use client";

import React, { useEffect, useRef } from "react";
import { SELECTION_TYPES } from "@/utils/constants/navigation";
import TabButton from "@/components/common/TabButton";
import { useState, useCallback } from "react";
import CardLayout from "@/layouts/CardLayout";
import CodeSnippetLayout from "@/layouts/CodeSnippetLayout";
import CopyBtn from "@/components/common/CopyBtn";
import { cn } from "@/lib/utils";
import ReplayBtn from "@/components/common/ReplayBtn";

const ComponentWrapper = ({
  className,
  children,
  replayButton = false,
  codeSnippet = "",
}) => {
  const [activeTab, setActiveTab] = useState(SELECTION_TYPES.preview);
  const activeTabRef = useRef(null);
  const parentRef = useRef(null);
  const [bgPillSize, setBgPillSize] = useState({
    height: 0,
    width: 0,
    left: 4,
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
          parentRef?.current?.getBoundingClientRect()?.left || 4,
      height: activeTabRef?.current?.getBoundingClientRect()?.height || 0,
    });
  }, [activeTab]);

  return (
    <section className={className}>
      <div className=" overflow-hidden">
        <div className="flex justify-between items-center w-full mb-3">
          <div
            ref={parentRef}
            className="flex items-center gap-4 p-1 border rounded-full relative justify-center"
          >
            <div
              style={{
                width: bgPillSize.width,
                left: bgPillSize.left,
                height: bgPillSize.height,
              }}
              className={`bg-pill transition-all duration-200 absolute bg-cyan-700 z-10 h-[calc(100%-8px)] rounded-full`}
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
          <CardLayout className="relative ">
            {activeTab === SELECTION_TYPES?.preview ? (
              <>
                {children}
                {/* //?replay button  */}
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
