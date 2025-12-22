import React from "react";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/stores/themeStore";

const CardLayout = ({ children, style, className }) => {
  const { styleMode } = useThemeStore()

  return (
    <div
      className={cn(
        "p-4 rounded-sm border-white/20 shadow-[-3px_-3px_0px_0_rgba(255,255,255,0.1)_inset,3px_3px_0px_0_rgba(255,255,255,0.1)_inset,1.5px_1.5px_0px_0_rgba(255,255,255,0.2)_inset,-1.5px_-1.5px_0px_0_rgba(255,255,255,0.2)_inset] h-[70vh] min-h-[500px] overflow-y-auto relative custom-scrollbar",
        (styleMode === "lyra" || styleMode === "nova") ? "bg-zinc-700/10" : "bg-white",
        className
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default CardLayout;
