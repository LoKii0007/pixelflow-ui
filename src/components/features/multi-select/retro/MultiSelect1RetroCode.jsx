export const MultiSelect1RetroCode = `
"use client";

import React, { useState } from "react";
import { Check, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const options = [
  { label: "REACT_LIB", value: "react" },
  { label: "NEXT_JS_FW", value: "nextjs" },
  { label: "TAILWIND_CSS", value: "tailwind" },
  { label: "TYPESCRIPT", value: "typescript" },
  { label: "MONGO_DB", value: "mongodb" },
  { label: "POSTGRES_QL", value: "postgresql" },
];

export function MultiSelectRetro() {
  const [selected, setSelected] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleOption = (value) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  const removeOption = (value, e) => {
    e.stopPropagation();
    setSelected((prev) => prev.filter((item) => item !== value));
  };

  return (    
    <div className="w-full max-w-sm relative bg-white p-4 font-mono text-black">
      <label className="block text-xs font-bold uppercase mb-1 tracking-widest pl-1">
          SELECT_MODULES:
      </label>
      
      <div
          onClick={() => setIsOpen(!isOpen)}
          className={\`border-2 border-black bg-white p-2 min-h-[48px] flex items-center shadow-[4px_4px_0px_0px_#000000] cursor-pointer transition-all \${isOpen ? 'shadow-none translate-x-[2px] translate-y-[2px]' : ''}\`}
      >
          <div className="flex flex-wrap gap-2 flex-grow">
              {selected.length === 0 && (
                  <span className="text-gray-500 uppercase">NO_MODULES_SELECTED</span>
              )}
              <AnimatePresence>
                  {selected.map((val) => {
                      const label = options.find(o => o.value === val)?.label;
                      return (
                          <motion.div
                              key={val}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              className="bg-black text-white px-2 py-1 text-xs font-bold uppercase flex items-center gap-1"
                          >
                              {label}
                              <span onClick={(e) => removeOption(val, e)} className="cursor-pointer hover:text-red-400">
                                  <X size={12} strokeWidth={4} />
                              </span>
                          </motion.div>
                      );
                  })}
              </AnimatePresence>
          </div>
          <div className="ml-2 border-l-2 border-black pl-2">
              <span className={\`block transition-transform duration-200 \${isOpen ? 'rotate-180' : ''}\`}>▼</span>
          </div>
      </div>
      {isOpen && (
          <div className="absolute top-full left-0 w-full mt-2 border-2 border-black bg-white shadow-[4px_4px_0px_0px_#000000] z-50 max-h-60 overflow-y-auto">
              {options.map((opt) => {
                  const isSelected = selected.includes(opt.value);
                  return (
                      <div
                          key={opt.value}
                          onClick={() => toggleOption(opt.value)}
                          className={\`px-4 py-3 flex justify-between items-center cursor-pointer uppercase font-bold text-sm border-b border-black/10 last:border-none hover:bg-black hover:text-white transition-colors \${isSelected ? 'bg-black/5' : ''}\`}
                      >
                          <span>{opt.label}</span>
                          {isSelected && <Check size={16} strokeWidth={4} />}
                      </div>
                  );
              })}
          </div>
      )}
    </div>
  );
}`;
