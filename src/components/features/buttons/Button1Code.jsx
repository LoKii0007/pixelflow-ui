export const Button1Code = `"use client";

import React from "react";
import { Button } from "@/components/ui/button";

export function ButtonDemo() {
  return (
    <div className="flex items-center justify-center gap-4 flex-wrap">
      <Button>Click me</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}`;


