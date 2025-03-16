"use client";

import React from "react";
import { useSelector } from "react-redux";
import Link from "next/link";
import { useRouter } from "next/navigation";


const Sidebar = () => {
  const allComponents = useSelector((state) => state.components);
  const router = useRouter();
  return (
    <>
      <div className="sidebar w-[140px] h-[calc(100vh-81px)] flex flex-col gap-1 ps-1 py-6">
        {allComponents.map((component) => (
          <div
            onClick={() => {
              router.push(`/components/${component.id}`);
            }}
            key={component.id}
            className="sidebar-item w-full p-2 hover:bg-zinc-800 rounded-md cursor-pointer"
          >
            {component.name}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
