"use client";

import React from "react";
import { MultiSelectLyra } from "./MultiSelectLyra";

const options = [
  { label: "React", value: "react" },
  { label: "Next.js", value: "nextjs" },
  { label: "Tailwind", value: "tailwind" },
  { label: "TypeScript", value: "typescript" },
  { label: "mongodb", value: "mongodb" },
  { label: "postgresql", value: "postgresql" },
];

export function MultiSelect1LyraDemo() {
  return <MultiSelectLyra options={options} wrap={false} />;
}
