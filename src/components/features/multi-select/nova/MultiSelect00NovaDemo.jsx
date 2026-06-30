"use client";

import React from "react";
import { MultiSelect00Nova } from "./MultiSelect00Nova";

const options = [
  { label: "React", value: "react" },
  { label: "Next.js", value: "nextjs" },
  { label: "Tailwind", value: "tailwind" },
  { label: "TypeScript", value: "typescript" },
  { label: "mongodb", value: "mongodb" },
  { label: "postgresql", value: "postgresql" },
];

export function MultiSelect00NovaDemo() {
  return <MultiSelect00Nova options={options} wrap={false} />;
}
