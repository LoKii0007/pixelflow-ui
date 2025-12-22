"use client";

import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Plus, Minus } from "lucide-react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

const demoOptions = [
    {
        title: "SYSTEM_OVERVIEW",
        description:
            "Core processing unit initialized. Running diagnostic checks on all subsystems. Efficiency rating: 98.4%.",
    },
    {
        title: "TECHNICAL_SPECS",
        description:
            "Architecture: 64-bit retro-grid. Memory: 128TB Holographic Storage. Power Source: Zero-Point Energy Module.",
    },
    {
        title: "WARRANTY_PROTOCOL",
        description:
            "Standard 2-cycle guarantee. Void if seal broken or exposed to temporal anomalies.",
    },
];

const AccordionRetro = AccordionPrimitive.Root;

const AccordionItemRetro = React.forwardRef(({ className, ...props }, ref) => (
    <AccordionPrimitive.Item
        ref={ref}
        className={cn(
            "border-b-2 border-black last:border-b-2 first:border-t-2",
            className
        )}
        {...props}
    />
));
AccordionItemRetro.displayName = "AccordionItemRetro";

const AccordionTriggerRetro = React.forwardRef(
    ({ className, children, ...props }, ref) => (
        <AccordionPrimitive.Header className="flex">
            <AccordionPrimitive.Trigger
                ref={ref}
                className={cn(
                    "flex flex-1 items-center justify-between py-4 text-base font-bold font-mono uppercase transition-all hover:bg-black hover:text-white px-4 group data-[state=open]:bg-black data-[state=open]:text-white",
                    className
                )}
                {...props}
            >
                {children}
                <div className="relative w-4 h-4 flex items-center justify-center">
                    <Plus className="h-4 w-4 shrink-0 transition-transform duration-200 group-data-[state=open]:rotate-90 group-data-[state=open]:hidden" />
                    <Minus className="h-4 w-4 shrink-0 transition-transform duration-200 hidden group-data-[state=open]:block" />
                </div>
            </AccordionPrimitive.Trigger>
        </AccordionPrimitive.Header>
    )
);
AccordionTriggerRetro.displayName = AccordionPrimitive.Trigger.displayName;

const AccordionContentRetro = React.forwardRef(
    ({ className, children, ...props }, ref) => {
        const internalRef = React.useRef(null);
        const [isOpen, setIsOpen] = React.useState(false);

        React.useEffect(() => {
            const element = internalRef.current;
            if (!element) return;

            const updateState = () => {
                const state = element.getAttribute("data-state");
                setIsOpen(state === "open");
            };

            updateState(); // Initial check

            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if (mutation.attributeName === "data-state") {
                        updateState();
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
                className="overflow-hidden text-sm"
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
                            type: "spring",
                            bounce: 0.3,
                        },
                        opacity: {
                            duration: 0.2,
                            ease: isOpen ? "easeIn" : "easeOut",
                        },
                    }}
                >
                    <div className={cn("pb-4 pt-4 px-4 font-mono border-t-2 border-dashed border-black", className)}>
                        {children}
                    </div>
                </motion.div>
            </AccordionPrimitive.Content>
        );
    }
);
AccordionContentRetro.displayName = AccordionPrimitive.Content.displayName;

export function AccordionRetroDemo({ options = demoOptions }) {
    const [openItem, setOpenItem] = React.useState("item-0");

    return (
        <div className="w-full max-w-2xl border-2 border-black shadow-[8px_8px_0px_0px_#000000] bg-white p-1 text-black">
            <div className="border-b-2 border-black p-2 mb-1 bg-black text-white font-mono font-bold uppercase flex justify-between">
                <span>TERMINAL_ACCORDION.exe</span>
                <div className="flex gap-1">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
            </div>
            <AccordionRetro
                type="single"
                collapsible
                value={openItem}
                onValueChange={setOpenItem}
                className="w-full bg-white text-black"
            >
                {options.map((item, i) => (
                    <AccordionItemRetro key={i} value={`item-${i}`}>
                        <AccordionTriggerRetro>
                            <span className="mr-4 text-black group-hover:text-white group-data-[state=open]:text-white transition-colors">[{i < 10 ? `0${i + 1}` : i + 1}]</span>
                            <span className="text-black group-hover:text-white group-data-[state=open]:text-white transition-colors">{item.title}</span>
                        </AccordionTriggerRetro>
                        <AccordionContentRetro>
                            {item.description}
                        </AccordionContentRetro>
                    </AccordionItemRetro>
                ))}
            </AccordionRetro>
        </div>
    );
}
