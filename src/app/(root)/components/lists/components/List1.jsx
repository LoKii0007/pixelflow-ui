"use client";

import React, { useCallback, useEffect, useState } from "react";
import { SELECTION_TYPES } from "@/utils/constants/navigation";
import TabButton from "@/components/common/TabButton";
import CopyBtn from "@/components/common/CopyBtn";
import * as m from "motion/react-m";
import { List1Code } from "./List1Code";
import CardLayout from "@/layouts/CardLayout";
import ReplayBtn from "@/components/common/ReplayBtn";
import { Trash } from "lucide-react";
import CodeSnippetLayout from "@/layouts/CodeSnippetLayout";
import { AnimatePresence, motion } from "framer-motion";

const demo = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Smith", age: 30 },
  { id: 3, name: "Jim Beam", age: 35 },
  { id: 4, name: "John Doe", age: 25 },
  { id: 5, name: "John Doe", age: 25 },
];

const List1 = () => {
  const [activeTab, setActiveTab] = useState(SELECTION_TYPES.preview);
  const [filteredDemo, setFilteredDemo] = useState(demo);

  const resetAnimation = useCallback(() => {
    setFilteredDemo(demo);
  }, []);

  const handleDelete = useCallback(
    (id) => {
      setFilteredDemo((prev) => prev.filter((p) => p.id !== id));
    },
    [filteredDemo]
  );

  useEffect(() => {
    setTimeout(() => {
      handleDelete(2);
    }, 1000);
  }, []);

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
            <CopyBtn code={List1Code} />
          </div>

          <div className="relative">
            <CardLayout className={"min-h-[400px] md:min-h-[250px]"}>
              {activeTab === SELECTION_TYPES?.preview ? (
                <>
                  <div className="w-full h-full md:p-4 flex justify-center items-center overflow-x-hidden">
                    <div className={`w-full h-full flex flex-col relative`}>
                      <AnimatePresence initial={false}>
                        {filteredDemo.map((item) => {
                          return (
                            <motion.div
                              key={item.id}
                              initial={{ height: 0 }}
                              animate={{ height: "auto" }}
                              exit={{ height: 0 }}
                              className="w-full flex gap-2"
                            >
                              <div
                                className={`w-full items-center grid grid-cols-3 border-[0.6px] box-border border-gray-300 rounded-md px-3 py-1 md:grid-cols-4`}
                              >
                                <h1 className="truncate text-sm md:text-base">
                                  {item.name}
                                </h1>
                                <p className="truncate text-sm md:text-base">
                                  {item.age}
                                </p>
                                <div className="flex justify-end items-center w-full md:col-start-4">
                                  <button
                                    onClick={() => handleDelete(item.id)}
                                    className=" hover:bg-gray-100 transition-all duration-300 text-white hover:text-black p-1 rounded-md w-fit"
                                  >
                                    <Trash width={16} height={16} />
                                  </button>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </AnimatePresence>
                    </div>
                  </div>
                  <ReplayBtn resetAnimation={resetAnimation} />
                </>
              ) : (
                <CodeSnippetLayout code={List1Code} />
              )}
            </CardLayout>
          </div>
        </div>
      </section>
    </div>
  );
};

export default List1;
