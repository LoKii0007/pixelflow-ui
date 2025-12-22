
export const List1LyraCode = `
"use client";

import React, { useCallback, useState } from "react";
import { Trash, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const demo = [
  { id: 1, name: "John Doe", age: 25 },
  { id: 2, name: "Jane Smith", age: 30 },
  { id: 3, name: "Jim Beam", age: 35 },
  { id: 4, name: "John Doe", age: 25 },
  { id: 5, name: "John Doe", age: 25 },
];

const ListExample = () => {
  const [filteredDemo, setFilteredDemo] = useState(demo);

  const handleDelete = useCallback(
    (id) => {
      setFilteredDemo((prev) => prev.filter((p) => p.id !== id));
    },
    []
  );

  const handleAdd = useCallback(() => {
    const newId = Math.max(...filteredDemo.map((item) => item.id), 0) + 1;
    const newItem = {
      id: newId,
      name: \`New Item \${newId}\`,
      age: Math.floor(Math.random() * 50) + 20,
    };
    setFilteredDemo((prev) => [...prev, newItem]);
  }, [filteredDemo]);

  return (
    <div className="w-full h-full md:p-4 flex items-center overflow-x-hidden">
      <div className="w-full h-full flex flex-col gap-2 max-w-md">
        <button
          onClick={handleAdd}
          className="flex items-center mb-1 justify-center gap-2 bg-black hover:bg-neutral-900 transition-all cursor-pointer duration-300 text-white border-[0.6px] border-white/40 rounded-none p-2 w-full uppercase font-mono text-xs tracking-wider"
        >
          <Plus width={14} height={14} className="text-neutral-400" />
          <span>Add Item</span>
        </button>
        <AnimatePresence initial={false}>
          {filteredDemo.map((item) => {
            return (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  x: 50,
                  y: "100%",
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  height: "auto",
                }}
                exit={{ opacity: 0, x: 50, height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full flex gap-2"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    scale: 0.98,
                    filter: "blur(4px)",
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.98,
                    filter: "blur(4px)",
                  }}
                  transition={{ duration: 0.15, ease: "easeOut" }}
                  className="w-full items-center grid grid-cols-3 bg-black origin-right rounded-none p-2 md:grid-cols-4 border-[0.6px] border-white/20 text-white"
                >
                  <h1 className="truncate font-mono text-xs uppercase tracking-wide text-neutral-300">
                    {item.name}
                  </h1>
                  <p className="truncate font-mono text-xs text-neutral-500">
                    {item.age}
                  </p>
                  <div className="flex justify-end items-center w-full md:col-start-4">
                    <button
                      onClick={() => handleDelete(item.id)}
                      className="hover:bg-white hover:text-black transition-all hover:ease-out ease-in-out duration-300 text-neutral-500 p-1 rounded-none w-fit hover:cursor-pointer border border-transparent"
                    >
                      <Trash width={14} height={14} />
                    </button>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ListExample`;
