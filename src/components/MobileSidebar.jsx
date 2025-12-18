"use client";

import React, { useState, useMemo } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useComponentsStore } from "@/stores/componentsStore";
import { useRouter, usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const MobileSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { components: allComponents } = useComponentsStore();
  const router = useRouter();
  const pathname = usePathname();

  const activeComp = useMemo(() => {
    return allComponents.find((component) => pathname.includes(component.path));
  }, [allComponents, pathname]);

  const toggleSidebar = () => {
    setIsOpen((prev) => !prev);
  };

  const handleNavigation = (path) => {
    router.push(path);
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className="flex items-center justify-center p-2 rounded-md hover:bg-neutral-800 transition-colors"
      >
        <Menu className="h-6 w-6 text-white" />
      </button>

      {/* Backdrop Overlay */}
      <div
        className={cn(
          "fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity duration-300 ease-in-out",
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
        onClick={() => setIsOpen(false)}
      />

      {/* Sidebar Panel */}
      <div
        className={cn(
          "fixed top-0 right-0 h-[100dvh] w-[85vw] max-w-[320px] z-50 bg-neutral-950 border-l border-white/10 shadow-2xl transform transition-transform duration-300 ease-in-out",
          isOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <div className="flex flex-col h-full bg-[linear-gradient(to_bottom,rgb(0,0,0)_0%,rgb(10,10,10)_100%)]">
          {/* Header */}
          <div className="flex items-center justify-between p-5 border-b border-white/5">
            <span className="text-lg font-bold tracking-tight text-white">
              PixelFlow UI
            </span>
            <button
              onClick={toggleSidebar}
              className="p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="h-5 w-5 text-neutral-400" />
            </button>
          </div>

          {/* Scrollable Content */}
          <div className="flex-1 overflow-y-auto py-6 px-4 space-y-1">
            <div className="flex flex-col gap-1">
              <Link
                href="/"
                onClick={() => setIsOpen(false)}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all group",
                  pathname === "/"
                    ? "bg-white/10 text-white"
                    : "text-neutral-400 hover:text-white hover:bg-white/5"
                )}
              >
                Home
              </Link>
            </div>

            <Accordion type="single" collapsible defaultValue="item-1">
              <AccordionItem value="item-1" className="border-none">
                <AccordionTrigger className="px-4 py-2 text-sm font-semibold text-neutral-200 hover:text-white hover:no-underline [&[data-state=open]>svg]:rotate-90">
                  COMPONENTS
                </AccordionTrigger>
                <AccordionContent className="pb-0 pt-2">
                  <div className="flex flex-col gap-1 pl-4 border-l border-white/10 ml-4">
                    {allComponents.map((component) => (
                      <button
                        key={component.id}
                        onClick={() => handleNavigation(component.path)}
                        className={cn(
                          "w-full text-left px-4 py-2.5 rounded-md text-sm transition-all duration-200 flex items-center justify-between group",
                          activeComp?.id === component.id
                            ? "text-white bg-white/10 font-medium"
                            : "text-neutral-500 hover:text-neutral-200 hover:bg-white/5"
                        )}
                      >
                        {component.name}
                        {activeComp?.id === component.id && (
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]" />
                        )}
                      </button>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Footer */}
          <div className="p-5 border-t border-white/5 bg-black/20 text-xs text-neutral-600 text-center">
            © 2024 PixelFlow UI
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
