import React from "react";
import { cn } from "@/lib/utils";
import { useThemeStore } from "@/stores/themeStore";

const CardLayout = ({ children, style, className }) => {
  const { styleMode } = useThemeStore();

  return (
    <div
      className={cn(
        "p-4 rounded-sm border-white/5 border h-[70vh] min-h-[500px] overflow-y-auto relative custom-scrollbar",
        styleMode === "lyra" || styleMode === "nova"
          ? "bg-zinc-700/10"
          : "bg-white",
        className,
      )}
      style={style}
    >
      {children}
    </div>
  );
};

export default CardLayout;
