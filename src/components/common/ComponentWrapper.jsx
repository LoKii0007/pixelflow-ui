"use client";

import React from "react";
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
  const [animationKey, setAnimationKey] = useState(0);

  const resetAnimation = useCallback(() => {
    setAnimationKey((prevKey) => prevKey + 1);
  }, []);

  return (
    <section className={className}>
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
