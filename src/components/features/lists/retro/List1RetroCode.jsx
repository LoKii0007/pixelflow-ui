export const List1RetroCode = `
"use client";

import React, { useCallback, useState } from "react";
import { Trash, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

const demo = [
  { id: 1, name: "JOHN_DOE", role: "ADMIN" },
  { id: 2, name: "JANE_SMITH", role: "USER" },
  { id: 3, name: "JIM_BEAM", role: "GUEST" },
  { id: 4, name: "ALICE_WONDER", role: "MOD" },
];

export function List1RetroDemo() {
  const [filteredDemo, setFilteredDemo] = useState(demo);

  const handleDelete = useCallback((id) => {
    setFilteredDemo((prev) => prev.filter((p) => p.id !== id));
  }, []);

  const handleAdd = useCallback(() => {
    const newId = Math.max(...filteredDemo.map((item) => item.id), 0) + 1;
    const roles = ["USER", "GUEST", "BOT", "ADMIN"];
    const newItem = {
      id: newId,
      name: \`USER_\${newId}\`,
      role: roles[Math.floor(Math.random() * roles.length)],
    };
    setFilteredDemo((prev) => [...prev, newItem]);
  }, [filteredDemo]);

  return (
    <div className="w-full md:p-4 flex items-center justify-center overflow-x-hidden font-mono text-black">
        <div className="w-full flex flex-col gap-4 max-w-md border-2 border-black p-4 shadow-[8px_8px_0px_0px_#000000] bg-white">
            <div className="border-b-2 border-black pb-2 flex justify-between items-center">
                <span className="font-bold uppercase tracking-widest">USER_DATABASE.db</span>
                <span className="text-xs border border-black px-2 py-0.5 rounded-full">{filteredDemo.length} ENTRIES</span>
            </div>
            
          <button
            onClick={handleAdd}
            className="flex items-center justify-center gap-2 bg-white hover:bg-black hover:text-white transition-colors duration-200 text-black border-2 border-black p-3 font-bold uppercase tracking-wider w-full active:translate-y-1 active:shadow-inner"
          >
            <Plus width={18} height={18} />
            <span className="text-sm md:text-base">INSERT_RECORD</span>
          </button>
          
          <div className="flex flex-col gap-2">
            <AnimatePresence initial={false}>
            {filteredDemo.map((item) => (
              <motion.div
                key={item.id}
                initial={{
                  opacity: 0,
                  height: 0,
                }}
                animate={{
                  opacity: 1,
                  height: "auto",
                }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.2, ease: "easeOut" }}
                className="w-full overflow-hidden"
              >
                <motion.div
                  initial={{
                    opacity: 0,
                    x: -20,
                    filter: "blur(4px)",
                  }}
                  animate={{
                    opacity: 1,
                    x: 0,
                    filter: "blur(0px)",
                  }}
                  exit={{
                    opacity: 0,
                    x: 20,
                    filter: "blur(4px)",
                  }}
                  transition={{ duration: 0.2 }}
                  className="w-full flex items-center justify-between border-2 border-black p-3 hover:bg-black hover:text-white group transition-colors duration-200"
                >
                  <div className="flex flex-col">
                      <span className="font-bold uppercase">{item.name}</span>
                      <span className="text-xs opacity-60 group-hover:opacity-80">ROLE: {item.role}</span>
                  </div>
                  
                  <button
                    onClick={() => handleDelete(item.id)}
                    className="border-2 border-black bg-white text-black group-hover:border-white group-hover:bg-black group-hover:text-white p-2 transition-all duration-200 hover:scale-110"
                    aria-label="Delete"
                  >
                    <Trash width={16} height={16} />
                  </button>
                </motion.div>
              </motion.div>
            ))}
          </AnimatePresence>
          </div>
          
          {filteredDemo.length === 0 && (
              <div className="text-center py-8 opacity-50 uppercase text-sm border-2 border-dashed border-black">
                  DATABASE_EMPTY
              </div>
          )}
        </div>
      </div>
  );
}`;
