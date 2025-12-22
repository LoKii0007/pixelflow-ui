
export const AccordionLyraCode = `
"use client";

import React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
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
];

export default function AccordionDemo() {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <Accordion
      type="single"
      collapsible
      value={openIndex !== null ? \`item-\${openIndex}\` : ""}
      onValueChange={(val) => {
        setOpenIndex(val ? parseInt(val.split("-")[1]) : null);
      }}
      className="w-full"
    >
      {demoOptions.map((item, i) => {
        const isAboveOpen = openIndex === i - 1;
        const isBelowOpen = openIndex === i + 1;
        const isActive = openIndex === i;

        return (
          <AccordionItem
            key={i}
            value={\`item-\${i}\`}
            className={cn(
              openIndex !== null && isAboveOpen && "border-t",
              openIndex !== null && isBelowOpen && "border-b",
              "border-white/20 hover:bg-white/5 transition-all duration-300 px-0 bg-black/40 backdrop-blur-sm"
            )}
          >
            <AccordionTrigger className="px-4 text-white hover:text-white transition-all duration-300 font-mono text-sm uppercase tracking-wider group">
              {item.title}
            </AccordionTrigger>
            <AccordionPrimitive.Content forceMount asChild>
              <motion.div
                initial={false}
                animate={{
                  height: isActive ? "auto" : 0,
                  opacity: isActive ? 1 : 0,
                }}
                transition={{
                  height: {
                    duration: 0.5,
                    type: "spring",
                    bounce: 0.3,
                  },
                  opacity: {
                    duration: 0.2,
                    ease: isActive ? "easeIn" : "easeOut",
                  },
                }}
                className="overflow-hidden bg-black"
              >
                <div className="px-4 py-4 text-neutral-400 border-t-[0.6px] border-white/20 font-sans text-sm leading-relaxed">
                  {item.description}
                </div>
              </motion.div>
            </AccordionPrimitive.Content>
          </AccordionItem>
        );
      })}
    </Accordion>
  );
}

// Internal Lyra Components
const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "hover:cursor-pointer transition-all duration-300",
      "border-b-0 border-l border-r border-white/20 first:border-t last:border-b",
      "data-[state=open]:my-4 data-[state=open]:border data-[state=open]:border-white/40 data-[state=open]:last:border-b",
      className
    )}
    {...props}
  />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef(
  ({ className, children, ...props }, ref) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={cn(
          "flex flex-1 items-center justify-between py-4 transition-all [&[data-state=open]>svg.chevron]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="chevron h-4 w-4 shrink-0 transition-transform duration-200 text-white/60" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;
`;

export default AccordionLyraCode;
