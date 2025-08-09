"use client";

import React, { useMemo } from "react";
import { useComponentsStore } from "@/stores/componentsStore";
import { useRouter, usePathname } from "next/navigation";

const Sidebar = () => {
  const { components: allComponents } = useComponentsStore();
  const router = useRouter();
  const pathname = usePathname();

  const activeComp = useMemo(() => {
    return allComponents.find((component) => pathname.includes(component.path));
  }, [allComponents, pathname]);

  return (
    <div className="sidebar flex flex-col gap-1 ps-1">
      {allComponents.map((component) => (
        <div
          onClick={() => {
            router.push(`/components/${component.id}`);
          }}
          key={component.id}
          className={`sidebar-item w-full py-2 px-4 hover:bg-zinc-800 rounded-md cursor-pointer ${
            activeComp?.id === component.id
              ? "bg-zinc-800"
              : ""
          }`}
        >
          {component.name}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
