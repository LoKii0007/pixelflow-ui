export const Background1RetroCode = `
"use client";

import React from "react";

export function Background1Retro() {
  return (
    <div className="absolute inset-0 overflow-hidden bg-white font-mono z-0">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#0000001a_1px,transparent_1px),linear-gradient(to_bottom,#0000001a_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        
        {/* Dots Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#00000033_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_70%,transparent_100%)]"></div>
        
        {/* Floating elements */}
        <div className="absolute top-10 left-10 text-[10vw] text-black/5 font-black uppercase pointer-events-none select-none">
            RETRO_UI
        </div>
         <div className="absolute bottom-10 right-10 text-[10vw] text-black/5 font-black uppercase pointer-events-none select-none">
            SYSTEM
        </div>
    </div>
  );
}`;
