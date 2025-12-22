"use client";

import * as React from "react";
import { cva } from "class-variance-authority";
import { CheckIcon, XCircle, ChevronDown, XIcon } from "lucide-react";

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
  "m-1 transition ease-in-out duration-200 font-mono uppercase tracking-wider border-2 border-black",
  {
    variants: {
      variant: {
        default:
          "bg-white text-black hover:bg-black hover:text-white",
        secondary:
          "bg-white text-black border-black hover:bg-black hover:text-white",
        destructive:
          "bg-white text-black border-red-600 hover:bg-red-600 hover:text-white",
        inverted: "bg-black text-white border-black hover:bg-white hover:text-black",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export const MultiSelectRetro = React.forwardRef(
  (
    {
      options,
      value,
      variant,
      placeholder = "SELECT_OPTIONS",
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
                "flex w-full p-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000] min-h-10 h-auto items-center justify-between bg-white text-black font-mono [&_svg]:pointer-events-auto transition-all duration-200 hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-none",
                className
              )}
            >
              {selectedValues.length > 0 ? (
                <div className="flex justify-between items-center w-full">
                  <div
                    className={`flex ${
                      wrap ? "flex-wrap" : ""
                    } items-center overflow-hidden`}
                  >
                    {selectedValues
                      .slice(0, maxCount ? maxCount : selectedValues.length)
                      .map((value, index) => {
                        const option = options.find((o) => o.value === value);
                        const IconComponent = option?.icon;
                        return (
                          <div
                            key={value}
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
                                <span className="truncate block uppercase font-mono">
                                  {option?.label}
                                </span>
                              </div>
                            </Badge>
                          </div>
                        );
                      })}
                    {!lineBreak &&
                      !wrap &&
                      selectedValues.length > maxCount && (
                        <Badge
                          ref={badgeRef}
                          className={cn(
                            "bg-transparent text-black border-2 border-black hover:bg-black hover:text-white",
                            multiSelectVariants({ variant })
                          )}
                        >
                          {`+ ${selectedValues.length - maxCount} MORE`}
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
                      className="h-4 mx-2 cursor-pointer text-black hover:text-red-600 transition-colors"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleClear();
                      }}
                    />
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-between w-full mx-auto">
                  <span className="text-sm text-black/60 mx-3 font-mono uppercase">
                    {placeholder}
                  </span>
                  <ChevronDown className="h-4 cursor-pointer text-black mx-2" />
                </div>
              )}
            </Button>
          </PopoverTrigger>
          <PopoverContent
            className="p-0 border-2 border-black shadow-[4px_4px_0px_0px_#000000] bg-white"
            align="start"
            sideOffset={5}
            onEscapeKeyDown={() => setIsPopoverOpen(false)}
            style={{ width: triggerWidth > 0 ? `${triggerWidth}px` : "100%" }}
          >
            <Command
              className="w-full p-0 bg-white"
              onWheel={(e) => {
                e.stopPropagation();
              }}
            >
              <CommandList
                className="w-full p-0 overflow-y-auto overflow-x-hidden scrollbar-thin scrollbar-thumb-black scrollbar-track-transparent scroll-smooth"
                style={{
                  maxHeight: `${maxHeight}px`,
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
                <CommandEmpty className="py-6 text-center text-sm text-black/60 font-mono uppercase">
                  NO_RESULTS_FOUND.
                </CommandEmpty>
                <CommandGroup className="w-full">
                  {!areAllSelected && (
                    <CommandItem
                      onMouseDown={(e) => {
                        e.preventDefault();
                        handleSelectAll();
                      }}
                      className="cursor-pointer w-full font-bold font-mono uppercase tracking-wider text-black hover:bg-black hover:text-white transition-colors border-b-2 border-black"
                    >
                      <div className="mr-2 flex h-4 w-4 items-center justify-center border-2 border-black bg-white">
                        <div className="h-2 w-2 bg-black" />
                      </div>
                      SELECT_ALL
                    </CommandItem>
                  )}

                  <CommandSeparator className="bg-black h-[2px]" />

                  {options.map((option) => {
                    const isSelected = selectedValues.includes(option.value);
                    return (
                      <CommandItem
                        key={option.value}
                        onMouseDown={(e) => {
                          e.preventDefault();
                          toggleOption(option.value);
                        }}
                        className="cursor-pointer w-full font-mono uppercase tracking-wider text-black hover:bg-black hover:text-white transition-colors border-b border-black/20 last:border-b-0"
                      >
                        <div
                          className={cn(
                            "mr-2 flex h-4 w-4 items-center justify-center border-2 border-black",
                            isSelected
                              ? "bg-black"
                              : "bg-white [&_svg]:invisible"
                          )}
                        >
                          <CheckIcon
                            className={cn(
                              "h-3 w-3",
                              isSelected ? "text-white" : ""
                            )}
                          />
                        </div>
                        {option.icon && (
                          <option.icon className="mr-2 h-4 w-4 text-black" />
                        )}
                        <span className="truncate font-mono uppercase">{option?.label}</span>
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

MultiSelectRetro.displayName = "MultiSelectRetro";

