"use client";

import React, { useState } from "react";
import Slider from "@/registry/sliders/nova/Slider00Nova";

export function Slider00NovaDemo() {
  const [value, setValue] = useState(55);

  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full max-w-sm flex flex-col gap-4">
        <Slider defaultValue={55} onChange={setValue} />
        <p className="text-center text-white/40 text-xs tabular-nums font-mono">{value}</p>
      </div>
    </div>
  );
}
