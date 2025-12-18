"use client";

import React, { useState, useEffect } from "react";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import { useAnimation } from "motion/react";

export function BouncyInputDemo() {
  const [value, setValue] = useState("");
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      scaleX: [1, 1.01, 1],
      scaleY: [1, 1.1, 1],
      transition: { duration: 0.2, ease: "easeInOut" },
    });
  }, [value, controls]);

  return (
    <LazyMotion features={domAnimation}>
      <div className="relative justify-center items-center w-full">
        <m.div
          animate={controls}
          className="h-full w-full flex items-center justify-center text-black overflow-hidden border-[0.6px] box-border border-gray-300 rounded-md px-3 py-2 absolute bg-transparent z-10"
        ></m.div>
        <input
          type="text"
          placeholder="Type something..."
          className="w-full text-white focus:outline-none px-3 py-2 z-20 relative"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </div>
    </LazyMotion>
  );
}


