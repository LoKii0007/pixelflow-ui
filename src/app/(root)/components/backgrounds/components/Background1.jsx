"use client";

import React, { useState } from "react";
import { SELECTION_TYPES } from "@/utils/constants/navigation";
import TabButton from "@/components/common/TabButton";
import CopyBtn from "@/components/common/CopyBtn";
import ScreenCardLayout from "@/layouts/ScreenCardLayout";
import { Background1Code } from "./Background1Code";
import CodeSnippetLayout from "@/layouts/CodeSnippetLayout";

const BouncyInput = () => {
  const [activeTab, setActiveTab] = useState(SELECTION_TYPES.preview);

  return (
    <div className="space-y-8">
      <section>
        <div className="overflow-hidden">
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
            <CopyBtn code={Background1Code} />
          </div>

          <div className="relative">
            <ScreenCardLayout>
              {activeTab === SELECTION_TYPES?.preview ? (
                <>
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-gray-800/10 to-blue-400/10 rotate-12 animate-pulse"></div>
                    <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-blue-300/10 to-gray-700/10 -rotate-12 animate-pulse"></div>
                  </div>
                </>
              ) : (
                <CodeSnippetLayout code={Background1Code} />
              )}
            </ScreenCardLayout>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BouncyInput;
