"use client";

import React, { useState, useEffect } from "react";
import { SELECTION_TYPES } from "@/utils/constants/navigation";
import TabButton from "@/components/common/TabButton";
import CopyBtn from "@/components/common/CopyBtn";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import { useAnimation } from "motion/react";
import { BouncyInputCode } from "./BouncyInputCode";
import CardLayout from "@/layouts/CardLayout";
import CodeSnippetLayout from "@/layouts/CodeSnippetLayout";

const BouncyInput = () => {
  const [activeTab, setActiveTab] = useState(SELECTION_TYPES.preview);
  const [value, setValue] = useState("");
  const controls = useAnimation();

  // ? re-trigger bounce whenever value changes
  useEffect(() => {
    controls.start({
      scaleX: [1, 1.01, 1],
      scaleY: [1, 1.1, 1],
      transition: { duration: 0.2, ease: "easeInOut" },
    });
  }, [value, controls]);

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
            <CopyBtn code={BouncyInputCode} />
          </div>

          <div className="relative">
            <CardLayout>
              {activeTab === SELECTION_TYPES?.preview ? (
                <LazyMotion features={domAnimation}>
                  <div className="relative justify-center items-center w-full">
                    <m.div
                      animate={controls}
                      className="h-full w-full flex items-center justify-center text-black overflow-hidden border-[0.6px] box-border border-gray-300 rounded-md px-3 py-2 absolute bg-transparent z-10"
                    ></m.div>
                    <input
                      type="text"
                      className="w-full text-white focus:outline-none px-3 py-2 z-20 relative"
                      value={value}
                      onChange={(e) => setValue(e.target.value)}
                    />
                  </div>
                </LazyMotion>
              ) : (
                <CodeSnippetLayout code={BouncyInputCode} />
              )}
            </CardLayout>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BouncyInput;
