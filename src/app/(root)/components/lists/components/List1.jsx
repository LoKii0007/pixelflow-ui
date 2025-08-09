"use client";

import React, { useCallback, useEffect, useState } from "react";
import { SELECTION_TYPES } from "@/utils/constants/navigation";
import TabButton from "@/components/common/TabButton";
import CopyBtn from "@/components/common/CopyBtn";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import { List1Code } from "./List1Code";
import CardLayout from "@/layouts/CardLayout";
import ReplayBtn from "@/components/common/ReplayBtn";
import { Trash } from "lucide-react";
import CodeSnippetLayout from "@/layouts/CodeSnippetLayout";

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
  const [deletingId, setDeletingId] = useState(null);
  const [deletedIndex, setDeletedIndex] = useState(null);
  const [height, setHeight] = useState(44);
  const GAP = 6;

  const resetAnimation = useCallback(() => {
    setFilteredDemo(demo);
    setDeletingId(null);
    setDeletedIndex(null);
  }, []);

  const handleDelete = useCallback(
    (id) => {
      const index = filteredDemo.findIndex((item) => item.id === id);
      setDeletingId(id);
      setDeletedIndex(index);

      setTimeout(() => {
        setFilteredDemo((prev) => prev.filter((p) => p.id !== id));
        setDeletingId(null);
        setDeletedIndex(null);
      }, 600);
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
            <CardLayout className={'min-h-[400px] md:min-h-[250px]'}
            >
              {activeTab === SELECTION_TYPES?.preview ? (
                <>
                  <div className="w-full h-full md:p-4 flex justify-center items-center overflow-x-hidden">
                    <div className={`w-full h-full flex flex-col relative`}>
                      <LazyMotion features={domAnimation} strict>
                        {filteredDemo.map((item, index) => {
                          const isDeleting = deletingId === item.id;
                          const shouldShiftUp =
                            deletedIndex !== null && index > deletedIndex;
                          const top = index * (height + GAP);

                          return (
                            <m.div
                              key={item.id}
                              initial={{
                                opacity: 1,
                                left: 0,
                                top: `${top}px`,
                              }}
                              animate={
                                isDeleting
                                  ? { opacity: 0, left: "100%" }
                                  : shouldShiftUp
                                  ? { top: `${top - height - GAP}px` }
                                  : { top: `${top}px`, left: 0 }
                              }
                              transition={{ duration: 0.5, ease: "easeInOut" }}
                              className="w-full flex gap-2 absolute"
                            >
                              <div
                                style={{ height: `${height}px` }}
                                className={`w-full items-center grid grid-cols-3 border-[0.6px] box-border border-gray-300 rounded-md px-3 py-1 transition-all duration-500 md:grid-cols-4`}
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
                            </m.div>
                          );
                        })}
                      </LazyMotion>
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
