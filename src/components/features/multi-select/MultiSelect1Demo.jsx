"use client";

import React from "react";
import { MultiSelect1 } from "./MultiSelect1";

const options = [
  { label: "React", value: "react" },
  { label: "Next.js", value: "nextjs" },
  { label: "Tailwind", value: "tailwind" },
  { label: "TypeScript", value: "typescript" },
  { label: "mongodb", value: "mongodb" },
  { label: "postgresql", value: "postgresql" },
];

export function MultiSelect1Demo() {
  return <MultiSelect1 options={options} wrap={false} />;
}


