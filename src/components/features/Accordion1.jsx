"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { cn } from "@/lib/utils";

const demoOptions = [
  {
    title: "Product Overview",
    description:
      "Discover our latest innovation designed for efficiency and comfort. Engineered with precision to deliver top-tier performance in any environment.",
  },
  {
    title: "Specifications",
    description:
      "Crafted with aerospace-grade aluminum, powered by a next-gen processor, and equipped with a long-lasting lithium battery for uninterrupted use.",
  },
  {
    title: "Warranty & Support",
    description:
      "All purchases include a 2-year limited warranty and lifetime technical support. Extended protection plans are also available.",
  },
  {
    title: "Shipping & Returns",
    description:
      "We offer free worldwide shipping and a 30-day return policy. Orders are processed within 24 hours and shipped with real-time tracking.",
  },
];

export function AccordionDemo({ options = demoOptions }) {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <Accordion
      type="single"
      collapsible
      value={`item-${openIndex}`}
      onValueChange={(val) => {
        setOpenIndex(val ? parseInt(val.split("-")[1]) : null);
      }}
      className="w-full"
    >
      {options.map((item, i) => {
        const isAboveOpen = openIndex === i - 1;
        const isBelowOpen = openIndex === i + 1;

        return (
          <AccordionItem
            key={i}
            value={`item-${i}`}
            className={cn(
              isAboveOpen && "border-t rounded-t-2xl",
              isBelowOpen && "border-b rounded-b-2xl"
            )}
          >
            <AccordionTrigger>{item.title}</AccordionTrigger>
            <AccordionContent>{item.description}</AccordionContent>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}
