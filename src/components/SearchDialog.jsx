"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, X, ExternalLink } from "lucide-react";
import { useComponentsStore } from "@/stores/componentsStore";
import { Theme } from "@/lib/constants";
import { useRouter } from "next/navigation";

const SearchDialog = ({ theme }) => {
  const { components: allComponents } = useComponentsStore();
  const router = useRouter();
  const [filteredComponents, setfilteredComponents] = useState(
    allComponents || []
  );
  const [searchQuery, setsearchQuery] = useState("");
  const [open, setOpen] = useState(false);

  const handleSearchChange = (e) => {
    setsearchQuery(e.target.value);
    setfilteredComponents(
      allComponents.filter((component) =>
        component.name.toLowerCase().includes(e.target.value.toLowerCase())
      )
    );
  };

  const handleClearSearch = () => {
    setsearchQuery("");
    setfilteredComponents(allComponents);
  };

  const handleLinkClick = (componentPath) => {
    setOpen(false);
    router.push(componentPath);
    setsearchQuery("");
    setfilteredComponents(allComponents);
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <div
            className={`flex items-center border rounded-md px-3 py-1 cursor-pointer ${
              theme === Theme.dark
                ? "bg-zinc-900 hover:bg-zinc-800 text-gray-50"
                : "bg-gray-50 hover:bg-gray-100 text-zinc-950"
            }`}
          >
            <Search className="h-4 w-4 mr-2 " />
            <span className="text-sm ">Search components...</span>
          </div>
        </DialogTrigger>
        <DialogContent
          className={`sm:max-w-md ${
            theme === Theme.dark ? "bg-zinc-950" : "bg-gray-50"
          }`}
        >
          <DialogHeader>
            <DialogTitle
              className={`${
                theme === Theme.dark ? "text-gray-50" : "text-zinc-950"
              }`}
            >
              Search Components
            </DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <div className="relative">
              <Input
                type="text"
                placeholder="Search for components..."
                className={`w-full pr-8 ${
                  theme === Theme.dark
                    ? "bg-zinc-900 text-gray-50"
                    : "bg-gray-50 text-zinc-950"
                }`}
                value={searchQuery}
                onChange={handleSearchChange}
                autoFocus
              />
              {searchQuery && (
                <button
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  onClick={handleClearSearch}
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="mt-2 max-h-[300px] overflow-y-auto">
              <p className="text-sm text-gray-500 mb-2">
                {filteredComponents.length === 0 && "No components found"}
              </p>
              <div className="space-y-3">
                {filteredComponents?.map((component) => (
                  <div
                    onClick={() => {
                      handleLinkClick(component.path);
                    }}
                    key={component.id}
                    className={`p-3 rounded-md hover:bg-zinc-800 cursor-pointer ${
                      theme === Theme.dark
                        ? "hover:bg-zinc-800 text-gray-50"
                        : "hover:bg-gray-100 text-zinc-950"
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <h3 className="font-medium">{component.name}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default SearchDialog;
