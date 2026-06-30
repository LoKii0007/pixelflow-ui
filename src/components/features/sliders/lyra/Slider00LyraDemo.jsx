"use client";

import React, { useState } from "react";
import Slider from "@/registry/sliders/lyra/Slider00Lyra";

export function Slider00LyraDemo() {
  const [value, setValue] = useState(55);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-sm flex flex-col gap-4">
        <Slider defaultValue={55} onChange={setValue} />
        <p className="text-center text-white/50 text-xs tabular-nums">{value}</p>
      </div>
    </div>
  );
}
