"use client";

import React from "react";
import { SELECTION_TYPES } from "@/utils/constants/navigation";
import TabButton from "@/components/common/TabButton";
import { useState } from "react";
import CardLayout from "@/layouts/CardLayout";
import CodeSnippetLayout from "@/layouts/CodeSnippetLayout";
import CopyBtn from "@/components/common/CopyBtn";
import { cn } from "@/lib/utils";

const ComponentPageLayoutV2 = ({
  className,
  children,
  replayButton = false,
  codeSnippet = "",
}) => {
  const [activeTab, setActiveTab] = useState(SELECTION_TYPES.preview);

  return (
    <div
      className={cn(
        "space-y-8 all-components w-full grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-12"
      )}
    >
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
                <>{children}</>
              ) : (
                <CodeSnippetLayout code={codeSnippet} />
              )}
            </CardLayout>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ComponentPageLayoutV2;
