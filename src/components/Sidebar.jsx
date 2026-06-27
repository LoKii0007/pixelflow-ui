"use client";

import React, { useMemo, useState, useEffect } from "react";
import { useComponentsStore } from "@/stores/componentsStore";
import { useRouter, usePathname } from "next/navigation";
import { ChevronRight } from "lucide-react";

const Sidebar = () => {
  const { components: allComponents } = useComponentsStore();
  const router = useRouter();
  const pathname = usePathname();

  const activeCategory = useMemo(() => {
    return allComponents.find((component) =>
      pathname.includes(`/components/${component.id}`)
    );
  }, [allComponents, pathname]);

  const activeItem = useMemo(() => {
    if (!activeCategory) return null;
    return activeCategory.items?.find((item) =>
      pathname.includes(`/components/${activeCategory.id}/${item.id}`)
    );
  }, [activeCategory, pathname]);

  // Keep the active category expanded as the user navigates.
  const [openCategory, setOpenCategory] = useState(activeCategory?.id || null);

  useEffect(() => {
    if (activeCategory?.id) {
      setOpenCategory(activeCategory.id);
    }
  }, [activeCategory?.id]);

  const toggleCategory = (component) => {
    setOpenCategory((prev) => (prev === component.id ? null : component.id));
  };

  return (
    <div className="sidebar-container z-40 overflow-y-auto hidden md:grid col-span-2 py-8">
      <div className="sidebar flex-col gap-1 ps-1 flex">
        {allComponents.map((component) => {
          const isOpen = openCategory === component.id;
          const isActiveCategory = activeCategory?.id === component.id;

          return (
            <div key={component.id} className="w-full">
              <div
                onClick={() => toggleCategory(component)}
                className={`sidebar-item w-full group flex items-center justify-between transition-all duration-200 hover:ease-in ease-out py-2 px-4 hover:bg-zinc-800 hover:shadow-zinc-800 rounded-md cursor-pointer ${
                  isActiveCategory ? "bg-zinc-800" : ""
                }`}
              >
                <h6
                  className={`group-hover:translate-x-1.5 group-hover:ease-in-out ease-out duration-200 transition-all ${
                    isActiveCategory ? "translate-x-1.5" : ""
                  }`}
                >
                  {component.name}
                </h6>
                <ChevronRight
                  className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                    isOpen ? "rotate-90" : ""
                  }`}
                />
              </div>

              {isOpen && component.items?.length > 0 && (
                <div className="flex flex-col gap-0.5 mt-0.5 ml-4 border-l border-white/10 pl-2">
                  {component.items.map((item) => {
                    const isActiveItem =
                      isActiveCategory && activeItem?.id === item.id;

                    return (
                      <div
                        key={item.id}
                        onClick={() =>
                          router.push(`/components/${component.id}/${item.id}`)
                        }
                        className={`group/item text-sm py-1.5 px-3 rounded-md cursor-pointer transition-all duration-200 hover:bg-zinc-800/70 ${
                          isActiveItem
                            ? "bg-zinc-800/70 text-white"
                            : "text-gray-400"
                        }`}
                      >
                        <span
                          className={`block transition-transform duration-200 group-hover/item:translate-x-1 ${
                            isActiveItem ? "translate-x-1" : ""
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Sidebar;
