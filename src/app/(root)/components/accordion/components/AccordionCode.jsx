export const AccordionCode = ` "use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { motion} from "framer-motion";
import { cn } from "@/lib/utils";

const demoOptions = [
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

export deafult function AccordionDemo({options=demoOptions}) {
  const [openIndex, setOpenIndex] = React.useState(0);

  return (
    <Accordion
      type="single"
      collapsible
      value={\`item-\${openIndex}\`}
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
            value={\`item-\${i}\`}
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

const Accordion = AccordionPrimitive.Root;

const AccordionItem = React.forwardRef(({ className, ...props }, ref) => (
  <AccordionPrimitive.Item
    ref={ref}
    className={cn(
      "hover:cursor-pointer transition-all",
      "border-b-0 data-[state=open]:my-2 border-s border-e first:border-t last:border-b data-[state=open]:border border-white last:rounded-b-2xl first:rounded-t-2xl data-[state=open]:rounded-2xl px-2",
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
          "hover:cursor-pointer",
          "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all text-left [&[data-state=open]>svg]:rotate-180",
          className
        )}
        {...props}
      >
        {children}
        <ChevronDown className="h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  )
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    const internalRef = React.useRef(null);
    const [isOpen, setIsOpen] = React.useState(false);

    React.useEffect(() => {
      const element = internalRef.current;
      if (!element) return;

      const initialState = element.getAttribute("data-state");
      setIsOpen(initialState === "open");

      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.attributeName === "data-state") {
            const state = element.getAttribute("data-state");
            setIsOpen(state === "open");
          }
        });
      });

      observer.observe(element, {
        attributes: true,
        attributeFilter: ["data-state"],
      });

      return () => observer.disconnect();
    }, []);


    React.useEffect(() => {
      if (typeof ref === "function") {
        ref(internalRef.current);
      } else if (ref) {
        ref.current = internalRef.current;
      }
    }, [ref]);

    return (
      <AccordionPrimitive.Content
        ref={internalRef}
        className="overflow-hidden"
        {...props}
        forceMount 
      >
        <motion.div
          initial={false} 
          animate={{
            height: isOpen ? "auto" : 0,
            opacity: isOpen ? 1 : 0,
          }}
          transition={{
            height: {
              duration: 0.5,
              type:'spring',
              // stiffness:50,
              bounce:0.3
              // ease: [0.4, 0, 0.2, 1],
            },
            opacity: {
              duration: 0.2,
              ease: isOpen ? "easeIn" : "easeOut",
            },
          }}
        >
          <div className={cn("pb-4 pt-0", className)}>{children}</div>
        </motion.div>
      </AccordionPrimitive.Content>
    );
  }
);

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };`

