"use client";

import React from "react";
import { SELECTION_TYPES } from "@/utils/constants/navigation";
import TabButton from "@/components/common/TabButton";
import { useState } from "react";
import CardLayout from "@/layouts/CardLayout";
import CodeSnippetLayout from "@/layouts/CodeSnippetLayout";
import { MultiSelect1 } from "./MultiSelect1";
import { MultiSelect1Code } from "./MultiSelect1Code";
import CopyBtn from "@/components/common/CopyBtn";

const MultiSelect1Page = ({ className }) => {
  const [activeTab, setActiveTab] = useState(SELECTION_TYPES.preview);
  const options = [
    { label: "React", value: "react" },
    { label: "Next.js", value: "nextjs" },
    { label: "Tailwind", value: "tailwind" },
    { label: "TypeScript", value: "typescript" },
    { label: "mongodb", value: "mongodb" },
    { label: "postgresql", value: "postgresql" },
  ];

  return (
    <div className={`space-y-8 ${className}`}>
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
            <CopyBtn code={MultiSelect1Code} />
          </div>

          <div className="relative">
            <CardLayout className="relative ">
              {activeTab === SELECTION_TYPES?.preview ? (
                <>
                  <MultiSelect1 options={options} wrap={false} />
                </>
              ) : (
                <CodeSnippetLayout code={MultiSelect1Code} />
              )}
            </CardLayout>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MultiSelect1Page;
