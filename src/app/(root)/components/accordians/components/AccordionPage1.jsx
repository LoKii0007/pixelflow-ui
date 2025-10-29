"use client";

import React from "react";
import { SELECTION_TYPES } from "@/utils/constants/navigation";
import TabButton from "@/components/common/TabButton";
import { useState } from "react";
import CardLayout from "@/layouts/CardLayout";
import CodeSnippetLayout from "@/layouts/CodeSnippetLayout";
import CopyBtn from "@/components/common/CopyBtn";
import { AccordionDemo } from "@/components/features/Accordian1";

const AccordianPage1 = ({ className }) => {
  const [activeTab, setActiveTab] = useState(SELECTION_TYPES.preview);

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
            <CopyBtn code={""} />
          </div>

          <div className="relative">
            <CardLayout className="relative h-[60vh]">
              {activeTab === SELECTION_TYPES?.preview ? (
                <>
                  <AccordionDemo/>
                </>
              ) : (
                <CodeSnippetLayout code={""} />
              )}
            </CardLayout>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccordianPage1;
