import React from "react";
import { cn } from "@/lib/utils";

const TabButton = React.forwardRef(
  ({ activeTab, setActiveTab, label, value }, ref) => {
    return (
      <button
        ref={activeTab === value ? ref : null}
        onClick={() => setActiveTab(value)}
        className={cn(
          "px-4 py-2 text-sm font-medium hover:cursor-pointer rounded-full z-20",
          activeTab === value && ""
        )}
      >
        {label}
      </button>
    );
  }
);

TabButton.displayName = "TabButton";

export default TabButton;
