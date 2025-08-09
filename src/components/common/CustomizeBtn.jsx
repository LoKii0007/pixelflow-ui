import React from "react";
import { Settings } from "lucide-react";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const CustomizeBtn = () => {
  const router = useRouter();
  return (
    <button
      onClick={() => router.forward("/customize")}
      className={cn(
        "px-4 py-2 text-sm font-medium group hover:cursor-pointer transition-all duration-300 flex items-center gap-2"
        // activeTab === activeTabTypes?.settings && "text-cyan-700"
      )}
    >
      <div className="icon group-hover:rotate-45 group-hover:translate-x-[74px] transition-all duration-300">
        <Settings size={16} />
      </div>
      <div className="group-hover:translate-x-[-22px] transition-all duration-300">
        Customize
      </div>
    </button>
  );
};

export default CustomizeBtn;
