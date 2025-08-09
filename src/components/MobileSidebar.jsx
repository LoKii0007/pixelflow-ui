"use client";

import React, { useState } from "react";
import { MenuIcon, X } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { useComponentsStore } from "@/stores/componentsStore";
import { useRouter, usePathname } from "next/navigation";
import { useMemo } from "react";
import Link from "next/link";

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
        className="flex flex-col items-center gap-1 cursor-pointer"
      >
        <MenuIcon className="h-6 w-6" />
      </button>

      <div
        className={`fixed top-0 right-0 w-[70vw] min-w-[200px] z-50 transform transition-transform duration-300 ease-in-out bg-black h-screen overflow-y-auto scrollbar-hide border border-gray-600 border-r-0 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-5 flex flex-col gap-1 justify-start items-end h-full">
          <button
            onClick={toggleSidebar}
            className="flex flex-col items-center gap-1 cursor-pointer"
          >
            <X className="h-6 w-6" />
          </button>
          <div className="flex flex-col gap-2 w-full">
            <Link
              href={`/`}
              className="nav-link cursor-pointer flex items-center gap-1 text-right w-full"
            >
              <h1 className="text-xl font-bold text-right w-full">Home</h1>
            </Link>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1" className="p-0">
                <AccordionTrigger className="text-xl font-bold cursor-pointer w-full flex justify-end items-center p-0">
                  Components
                </AccordionTrigger>
                <AccordionContent className="text-right border-r border-gray-600 pb-0 pe-2 pt-3">
                  {allComponents.map((component) => (
                    <div
                      onClick={() => {
                        handleNavigation(component.path);
                      }}
                      key={component.id}
                      className={`sidebar-item w-full py-2 px-4 hover:bg-zinc-800 rounded-md cursor-pointer ${
                        activeComp?.id === component.id ? "bg-zinc-800" : ""
                      }`}
                    >
                      {component.name}
                    </div>
                  ))}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            <Link
              href={`/playground`}
              className="nav-link cursor-pointer text-right w-full"
            >
              <h1 className="text-xl font-bold text-right w-full">
                Playground
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileSidebar;
