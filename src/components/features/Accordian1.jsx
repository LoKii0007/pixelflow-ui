'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import React from "react";
import { cn } from "@/lib/utils";

const itmes = [
  {
    title: "Product Information",
    description:
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
  },
  {
    title: "Product Information",
    description:
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
  },
  {
    title: "Product Information",
    description:
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
  },
  {
    title: "Product Information",
    description:
      "Our flagship product combines cutting-edge technology with sleek design. Built with premium materials, it offers unparalleled performance and reliability.",
  },
];

export function AccordionDemo() {
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
      {itmes.map((item, i) => {
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
