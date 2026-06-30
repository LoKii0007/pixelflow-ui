"use client";

import React from "react";
import { MultiSelect00Lyra } from "./MultiSelect00Lyra";

const options = [
  { label: "React", value: "react" },
  { label: "Next.js", value: "nextjs" },
  { label: "Tailwind", value: "tailwind" },
  { label: "TypeScript", value: "typescript" },
  { label: "mongodb", value: "mongodb" },
  { label: "postgresql", value: "postgresql" },
];

export function MultiSelect00LyraDemo() {
  return <MultiSelect00Lyra options={options} wrap={false} />;
}
