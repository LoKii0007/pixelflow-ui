"use client";

import React, { useEffect, useRef } from "react";

const ProximityText = ({ text }) => {
  const wordRef = useRef([]);
  const isHoverRef = useRef(false);
  const rectsRef = useRef([]);

  const cacheRects = () => {
    rectsRef.current = wordRef.current.map((el) => el.getBoundingClientRect());
  };

  const resetWeights = () => {
    wordRef.current.forEach((el) => (el.style.fontWeight = "400"));
  };

  useEffect(() => {
    const handleMouse = (e) => {
      if (!isHoverRef.current) return;
      const mouseX = e.clientX;
      const maxDistance = 50;

      rectsRef.current.forEach((rect, i) => {
        const centerX = rect.left + rect.width / 2;
        const distance = Math.abs(mouseX - centerX);
        const weight = Math.max(
          400,
          Math.round(900 - (distance / maxDistance) * 500),
        );
        wordRef.current[i].style.fontWeight = String(weight);
      });
    };

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  return (
    <span
      onMouseEnter={() => {
        isHoverRef.current = true;
        cacheRects();
      }}
      onMouseLeave={() => {
        isHoverRef.current = false;
        resetWeights();
      }}
      className="cursor-pointer inline-flex"
    >
      {text.split("").map((letter, i) => (
        <span
          ref={(el) => {
            if (el) wordRef.current[i] = el;
          }}
          key={i}
          className="transition-all duration-150 font-[family-name:var(--font-inter)]"
        >
          {letter === " " ? " " : letter}
        </span>
      ))}
    </span>
  );
};

export function ProximityTextDemo() {
  return (
    <div className="w-full h-full flex items-center justify-center py-20 text-white text-4xl md:text-5xl select-none">
      <ProximityText text="Hover over me" />
    </div>
  );
}
