export const BouncyInputRetroCode = `
"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "motion/react";

export function BouncyInputRetro() {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (value.length > 0) {
        controls.start({
            x: [0, 2, -2, 0],
            transition: { duration: 0.1 }
        });
    }
  }, [value, controls]);

  return (
    <div className="relative w-full max-w-md bg-white">
        <div className={\`absolute top-0 left-0 w-full h-full border-2 border-black shadow-[4px_4px_0px_0px_#000000] bg-white transition-all duration-200 \${isFocused ? 'translate-x-[2px] translate-y-[2px] shadow-none' : ''}\`}></div>
        
        <div className="relative z-10 flex items-center px-4 py-3 font-mono text-black">
            <span className="mr-2 font-bold text-lg select-none">{">"}</span>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                className="w-full bg-transparent border-none outline-none text-lg font-bold placeholder-gray-500 uppercase tracking-wider"
                placeholder="ENTER_COMMAND..."
                autoComplete="off"
                spellCheck="false"
            />
            <motion.div
                animate={controls} 
                className={\`w-3 h-6 bg-black ml-1 \${isFocused ? 'animate-pulse' : 'opacity-0'}\`}
            ></motion.div>
        </div>
        
        <div className="absolute -top-3 left-4 bg-white text-black px-2 border-2 border-black text-xs font-bold uppercase tracking-widest z-20">
            INPUT_TERMINAL
        </div>
    </div>
    
  );
}`;
