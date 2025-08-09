import React from "react";
import { cn } from "@/lib/utils";

const TabButton = ({ activeTab, setActiveTab, label, value }) => {
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={cn(
        "px-4 py-2 text-sm font-medium hover:cursor-pointer ",
        activeTab === value && "text-cyan-700"
      )}
    >   
      {label}
    </button>
  );
};

export default TabButton;
