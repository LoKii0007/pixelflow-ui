import React from "react";
import { cn } from "@/lib/utils";

const TabButton = React.forwardRef(
  ({ activeTab, setActiveTab, label, value }, ref) => {
    return (
      <button
        ref={activeTab === value ? ref : null}
        onClick={() => setActiveTab(value)}
        className={cn(
          "px-4 py-2 text-sm font-medium hover:cursor-pointer rounded-[5px] z-20 text-white/80 transition-colors duration-300 delay-150",
          activeTab === value && "text-white "
        )}
      >
        {label}
      </button>
    );
  }
);

TabButton.displayName = "TabButton";

export default TabButton;
