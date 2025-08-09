"use client";

import React, { useState } from "react";
import { SELECTION_TYPES } from "@/utils/constants/navigation";
import TabButton from "@/components/common/TabButton";
import CopyBtn from "@/components/common/CopyBtn";
import { LazyMotion, domAnimation } from "framer-motion";
import * as m from "motion/react-m";
import { List2Code } from "./List2Code";
import CardLayout from "@/layouts/CardLayout";
import ReplayBtn from "@/components/common/ReplayBtn";
import { Trash } from "lucide-react";
import CodeSnippetLayout from "@/layouts/CodeSnippetLayout";

const demo = [
  { id: 10, name: "John Doe", age: 25 },
  { id: 6, name: "Jane Smith", age: 30 },
];

const List1 = () => {
  const [activeTab, setActiveTab] = useState(SELECTION_TYPES.preview);
  const [filteredDemo, setFilteredDemo] = useState(demo);
  const [deletingId, setDeletingId] = useState(null);
  const [addingId, setAddingId] = useState(null);
  const [addingIndex, setAddingIndex] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [deletedIndex, setDeletedIndex] = useState(null);
  const [height, setHeight] = useState(44);
  const GAP = 6;

  const resetAnimation = () => {
    setFilteredDemo(demo);
    setDeletingId(null);
    setDeletedIndex(null);
    setAddingId(null);
    setAddingIndex(null);
    setIsAdding(false);
  };

  const handleDelete = (id) => {
    const index = filteredDemo.findIndex((item) => item.id === id);
    setDeletingId(id);
    setDeletedIndex(index);

    setTimeout(() => {
      setFilteredDemo((prev) => prev.filter((p) => p.id !== id));
      setDeletingId(null);
      setDeletedIndex(null);
    }, 600);
  };

  const handleAdd = () => {
    setFilteredDemo((prev) => [
      ...prev,
      { id: prev.length + 1, name: "John Doe", age: 25 },
    ]);
    setAddingId(filteredDemo.length + 1);
    setAddingIndex(filteredDemo.length);
    setIsAdding(true);
  };

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
            <CopyBtn code={List2Code} />
          </div>

          <div className="relative">
            <CardLayout
              style={{
                minHeight: `${(height + GAP) * filteredDemo.length + 1}px`,
              }}
            >
              {activeTab === SELECTION_TYPES?.preview ? (
                <>
                  <div className="w-full h-full p-4 flex justify-center items-center overflow-x-hidden">
                    <div className={`w-full h-full flex flex-col relative`}>
                      <LazyMotion features={domAnimation}>
                        {filteredDemo
                          .sort((a, b) => a.id - b.id)
                          .map((item, index) => {
                            const isDeleting = deletingId === item.id;
                            const shouldShiftDown =
                              deletedIndex !== null && index > deletedIndex;
                            const top = index * (height + GAP);

                            return (
                              <m.div
                                key={item.id}
                                initial={
                                  isAdding
                                    ? {
                                        opacity: 0,
                                        left: 0,
                                        height: 0,
                                        top: `${top - height - GAP}px`,
                                      }
                                    : {
                                        opacity: 1,
                                        left: 0,
                                        top: `${top}px`,
                                      }
                                }
                                animate={
                                  isAdding
                                    ? {
                                        opacity: 1,
                                        left: 0,
                                        height: height,
                                        top: `${top}px`,
                                      }
                                    : shouldShiftDown
                                    ? { top: `${top + height + GAP}px` }
                                    : { top: `${top}px`, left: 0 }
                                }
                                transition={{
                                  duration: 0.5,
                                  ease: "easeInOut",
                                }}
                                className="w-full flex gap-2 absolute"
                              >
                                <div
                                  style={{ height: `${height}px` }}
                                  className={`w-full items-center grid grid-cols-4 border-[0.6px] box-border border-gray-300 rounded-md px-3 py-1 transition-all duration-500`}
                                >
                                  <h1>{item.name}</h1>
                                  <p>{item.age}</p>
                                  <button
                                    onClick={() => handleDelete(item.id)}
                                    className="col-start-5 hover:bg-gray-100 transition-all duration-300 text-white hover:text-black p-1 rounded-md"
                                  >
                                    <Trash width={16} height={16} />
                                  </button>
                                </div>
                              </m.div>
                            );
                          })}
                      </LazyMotion>
                    </div>
                  </div>
                  <ReplayBtn resetAnimation={resetAnimation} />
                  <button
                    className="absolute bottom-2 right-14"
                    onClick={handleAdd}
                  >
                    Add
                  </button>
                </>
              ) : (
                <CodeSnippetLayout code={List2Code} />
              )}
            </CardLayout>
          </div>
        </div>
      </section>
    </div>
  );
};

export default List1;
