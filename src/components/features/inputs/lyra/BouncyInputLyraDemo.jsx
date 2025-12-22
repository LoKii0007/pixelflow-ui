"use client";

import React, { useState, useEffect } from "react";
import { LazyMotion, domAnimation } from "motion/react";
import * as m from "motion/react-m";
import { useAnimation } from "motion/react";

export function BouncyInputLyraDemo() {
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
                {/* Animated Border Container */}
                <m.div
                    animate={controls}
                    className="h-full w-full max-w-md flex items-center justify-center overflow-hidden border-[0.6px] box-border border-white/40 bg-black text-white px-3 py-2 absolute z-10"
                ></m.div>

                {/* Actual Input */}
                <input
                    type="text"
                    placeholder="TYPE SOMETHING..."
                    className="w-full max-w-md bg-transparent text-white placeholder:text-neutral-600 focus:outline-none px-3 py-2 z-20 relative font-mono text-xs uppercase tracking-wider"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-white pointer-events-none z-30" />
            </div>
        </LazyMotion>
    );
}
