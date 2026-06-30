"use client";

import React, { useState } from "react";
import Slider from "@/registry/sliders/retro/Slider00Retro";

export function Slider00RetroDemo() {
  const [value, setValue] = useState(55);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-sm flex flex-col gap-4">
        <Slider defaultValue={55} onChange={setValue} />
        <p className="text-center text-black/60 text-xs tabular-nums font-mono">{value}</p>
      </div>
    </div>
  );
}
