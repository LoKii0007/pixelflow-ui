
export const MultiSelect1NovaCode = `
"use client";

import * as React from "react";
import { cva } from "class-variance-authority";
import { CheckIcon, XCircle, ChevronDown, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

const multiSelectVariants = cva(
  "m-1 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300",
  {
    variants: {
      variant: {
        default:
          "border-foreground/10 text-foreground bg-card hover:bg-card/80",
        secondary:
          "border-foreground/10 bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive:
          "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        inverted: "inverted",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const MultiSelect = React.forwardRef(
  (
    {
      options,
      value,
      variant,
      placeholder = "Select options",
      modalPopover = false,
      asChild = false,
      className,
      wrap = true,
      maxHeight = 200,
      ...props
    },
    ref
  ) => {
    const [selectedValues, setSelectedValues] = React.useState(value ?? []);
    const [maxCount, setMaxCount] = React.useState(null);
    const [isPopoverOpen, setIsPopoverOpen] = React.useState(false);
    const triggerRef = React.useRef(null);
    const [triggerWidth, setTriggerWidth] = React.useState(0);
    const optionsRefs = React.useRef([]);
    const [lineBreak, setLineBreak] = React.useState(true);
    const badgeRef = React.useRef(null);
    const crossRef = React.useRef(null);

    const areAllSelected = options.every((opt) =>
      selectedValues.includes(opt.value)
    );

    const handleSelectAll = () => {
      const allValues = options.map((opt) => opt.value);
      const currentlyAllSelected = options.every((opt) =>
        selectedValues.includes(opt.value)
      );

      const newSelectedValues = currentlyAllSelected ? [] : allValues;
      setSelectedValues(newSelectedValues);
    };

    React.useEffect(() => {
      if (isPopoverOpen && triggerRef.current) {
        setTriggerWidth(triggerRef.current.offsetWidth);
      }
    }, [isPopoverOpen]);

    const toggleOption = (optionValue) => {
      const isSelected = selectedValues.includes(optionValue);
      let newSelectedValues;

      if (isSelected) {
        newSelectedValues = selectedValues.filter((val) => val !== optionValue);
      } else {
        newSelectedValues = [...selectedValues, optionValue];
      }

      setSelectedValues(newSelectedValues);
    };

    const handleClear = () => {
      setSelectedValues([]);
    };

    const handleTogglePopover = () => {
      setIsPopoverOpen((prev) => !prev);
    };

    const clearExtraOptions = () => {
      const newSelectedValues = selectedValues.slice(0, maxCount);
      setSelectedValues(newSelectedValues);
    };

    React.useEffect(() => {
      if (optionsRefs?.current.length === 0 || !triggerRef?.current) {
        return;
      }

      const handleResize = () => {
        let lastIndex = -1;

        requestAnimationFrame(() => {
          optionsRefs?.current.map((el, i) => {
            if (
              el?.getBoundingClientRect().right >
              triggerRef.current?.getBoundingClientRect().right
            ) {
              setLineBreak(false);
              if (lastIndex === -1) {
                lastIndex = i;
                setMaxCount(Math.max(1, i - 1));
              }
            }
          });
        });
      };

      handleResize();

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }, [selectedValues]);

    const combinedRef = (element) => {
      triggerRef.current = element;
      if (typeof ref === "function") {
        ref(element);
      } else if (ref) {
        ref.current = element;
      }
    };

    React.useEffect(() => {
      if (!badgeRef?.current || !triggerRef?.current || !crossRef?.current) {
        return;
      }

      if (
        badgeRef.current.getBoundingClientRect().right +
          crossRef.current.getBoundingClientRect().width >
        triggerRef.current.getBoundingClientRect().right
      ) {
        setMaxCount((prev) => prev - 1);
      }
    }, [maxCount, wrap, lineBreak]);

    return (
      <div className="w-full relative">
        <Popover
          open={isPopoverOpen}
          onOpenChange={setIsPopoverOpen}
          modal={modalPopover}
        >
          <PopoverTrigger asChild>
            <Button
              ref={combinedRef}
              {...props}
              onClick={handleTogglePopover}
              className={cn(
                "flex w-full p-1 rounded-md border min-h-10 h-auto items-center justify-between bg-inherit hover:bg-inherit [&_svg]:pointer-events-auto",
                className
              )}
            >
              {selectedValues.length > 0 ? (
                <div className="flex justify-between items-center w-full">
                  <div
                    className={
                      "flex " +
                      (wrap ? "flex-wrap " : "") +
                      "items-center overflow-hidden"
                    }
                  >
                    <AnimatePresence mode="popLayout">
                      {selectedValues
                        .slice(0, maxCount ? maxCount : selectedValues.length)
                        .map((value, index) => {
                          const option = options.find((o) => o.value === value);
                          const IconComponent = option?.icon;
                          return (
                            <motion.div
                              key={value}
                              layout
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.2 }}
                              ref={(el) => (optionsRefs.current[index] = el)}
                            >
                            <Badge
                              key={value}
                              className={cn(multiSelectVariants({ variant }))}
                            >
                              {IconComponent && (
                                <IconComponent className="h-4 w-4 mr-2" />
                              )}
                              <div className="w-full max-w-[200px] overflow-hidden">
                                <span className="truncate block">
                                  {option?.label}
                                </span>
                              </div>
                            </Badge>
                            </motion.div>
                          );
                        })}
                    </AnimatePresence>
                    {!lineBreak &&
                      !wrap &&
                      selectedValues.length > maxCount && (
                        <Badge
                          ref={badgeRef}
                          className={cn(
                            "bg-transparent text-foreground border-foreground/1 hover:bg-transparent",
                            multiSelectVariants({ variant })
                          )}
                        >
                          {\`+ \${selectedValues.length - maxCount} more\`}
                          <XCircle
                            className="ml-2 h-4 w-4 cursor-pointer"
                            onClick={(event) => {
                              event.stopPropagation();
                              clearExtraOptions();
                            }}
                          />
                        </Badge>
                      )}
                  </div>
                  <div className="flex items-center justify-between">
                    <XIcon
                      ref={crossRef}
                      className="h-4 mx-2 cursor-pointer text-muted-foreground"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleClear();
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between w-full mx-auto">
                  <span className="text-sm text-muted-foreground mx-3">
                    {placeholder}
                  </span>
                  <ChevronDown className="h-4 cursor-pointer text-muted-foreground mx-2" />
                </div>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="p-0"
            align="start"
            sideOffset={5}
            onEscapeKeyDown={() => setIsPopoverOpen(false)}
            style={{ width: triggerWidth > 0 ? \`\${triggerWidth}px \` : "100%" }}
          >
            <Command
              className="w-full p-0"
              onWheel={(e) => {
                e.stopPropagation();
              }}
            >
              <CommandList
                className="w-full p-0 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent scroll-smooth"
                style={{
                  maxHeight: \`\${maxHeight}px\`,
                  overscrollBehavior: "contain",
                }}
                onWheel={(e) => {
                  const { currentTarget } = e;
                  const isScrollable =
                    currentTarget.scrollHeight > currentTarget.clientHeight;

                  if (isScrollable) {
                    const atTop = currentTarget.scrollTop === 0;
                    const atBottom =
                      currentTarget.scrollTop + currentTarget.clientHeight >=
                      currentTarget.scrollHeight - 1;
                    if (
                      (e.deltaY < 0 && !atTop) ||
                      (e.deltaY > 0 && !atBottom)
                    ) {
                      e.stopPropagation();
                    }
                  }
                }}
              >
                <CommandEmpty>No results found.</CommandEmpty>
                <CommandGroup className="w-full">
                  {!areAllSelected && (
                    <CommandItem
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSelectAll();
                      }}
                      className="cursor-pointer w-full font-semibold text-blue-600"
                    >
                      <div className="mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary bg-white">
                        <div className="h-2 w-2 rounded-full bg-gray-400" />
                      </div>
                      Select All
                    </CommandItem>
                  )}

                  <CommandSeparator />

                  {options.map((option) => {
                    const isSelected = selectedValues.includes(option.value);
                    return (
                      <CommandItem
                        key={option.value}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          toggleOption(option.value);
                        }}
                        className="cursor-pointer w-full"
                      >
                        <div
                          className={cn(
                            "mr-2 flex h-4 w-4 items-center justify-center rounded-sm border border-primary",
                            isSelected
                              ? "bg-black opacity-100"
                              : "opacity-50 [&_svg]:invisible"
                          )}
                        >
                          <CheckIcon
                            className={cn(
                              "h-4 w-4",
                              isSelected ? "text-white" : ""
                            )}
                          />
                        </div>
                        {option.icon && (
                          <option.icon className="mr-2 h-4 w-4 text-muted-foreground" />
                        )}
                        <span className="truncate">{option?.label}</span>
                      </CommandItem>
                    );
                  })}
                </CommandGroup>
              </CommandList>
            </Command>
          </PopoverContent>
        </Popover>
      </div>
    );
  }
);

MultiSelect.displayName = "MultiSelect";`;
