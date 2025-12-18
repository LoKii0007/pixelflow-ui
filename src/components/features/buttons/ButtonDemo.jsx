"use client";

import React from "react";

export function ButtonDemo() {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap p-8">
      <button
        className="bg-white text-primary px-6 py-3 rounded-lg font-medium flex items-center gap-2 cursor-pointer relative"
        style={{
          boxShadow:
            "#0000000d 0 -3px inset, #fff 0 0 0 2px inset, #0000000f 0 4px 2px inset, #0000000a 0 0 24px 4px inset, #0000001f 0 1px 3px",
        }}
      >
        Click me
      </button>
    </div>
  );
}


