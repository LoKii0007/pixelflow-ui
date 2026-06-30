"use client";

import * as React from "react";
import * as SliderPrimitive from "@radix-ui/react-slider";

const Slider = React.forwardRef(function Slider(
  {
    value,
    defaultValue = 55,
    min = 0,
    max = 100,
    step = 1,
    onChange,
    onValueChange,
    name,
    color = "#000000",
    showTicks = true,
    tickCount = 22,
    size = "md",
    disabled = false,
    className = "",
    ...props
  },
  ref,
) {
  // Mirror the current value so the fill / tick / thumb position can be computed
  // during render. Radix remains the source of truth for controlled /
  // uncontrolled behaviour, keyboard, dragging, a11y and form submission.
  const [current, setCurrent] = React.useState(
    value !== undefined ? value : defaultValue,
  );
  React.useEffect(() => {
    if (value !== undefined) setCurrent(value);
  }, [value]);

  const sizeMap = {
    sm: { outer: "h-10 p-1", thumb: "w-4 h-4", tick: 14 },
    md: { outer: "h-14 p-1.5", thumb: "w-5 h-5", tick: 20 },
    lg: { outer: "h-16 p-2", thumb: "w-6 h-6", tick: 24 },
  };

  const { outer, thumb, tick } = sizeMap[size] || sizeMap.md;
  const pct = ((current - min) / (max - min)) * 100;

  const handleValueChange = (values) => {
    const next = values[0];
    setCurrent(next);
    onChange?.(next);
    onValueChange?.(next);
  };

  return (
    <SliderPrimitive.Root
      ref={ref}
      value={value !== undefined ? [value] : undefined}
      defaultValue={value === undefined ? [defaultValue] : undefined}
      min={min}
      max={max}
      step={step}
      name={name}
      disabled={disabled}
      onValueChange={handleValueChange}
      className={`relative flex w-full items-center touch-none select-none ${outer} cursor-pointer bg-white data-[disabled]:opacity-50 focus-within:ring-2 focus-within:ring-black/40 ${className}`}
      style={{ boxShadow: "0 6px 16px rgba(0,0,0,0.12)" }}
      {...props}
    >
      {/* Inner track */}
      <SliderPrimitive.Track className="relative w-full h-full overflow-hidden">
        {/* Orange filled portion */}
        <SliderPrimitive.Range
          className="absolute inset-y-0"
          style={{ backgroundColor: color }}
        />

        {/* Tick marks across the full track */}
        {showTicks && (
          <div className="absolute inset-0 flex items-center px-3 pointer-events-none">
            {Array.from({ length: tickCount }).map((_, i) => {
              const filled = (i + 0.5) / tickCount <= pct / 100;
              return (
                <div key={i} className="flex-1 flex justify-center">
                  <div
                    style={{
                      width: "2px",
                      height: `${tick}px`,
                      backgroundColor: filled
                        ? "rgba(255,255,255,0.55)"
                        : "#d8d8d8",
                    }}
                  />
                </div>
              );
            })}
          </div>
        )}

        {/* White thumb dot — pinned to the fill edge, in the track's own
            coordinate space so it never drifts with progress */}
        <div
          className={`absolute top-1/2 ${thumb} bg-white pointer-events-none`}
          style={{
            left: `${pct}%`,
            transform: "translate(calc(-100% - 4px), -50%)",
            boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
          }}
        />
      </SliderPrimitive.Track>

      {/* Radix thumb — kept for keyboard, dragging and a11y, visually hidden
          since the dot above is the rendered handle */}
      <SliderPrimitive.Thumb
        aria-label="Value"
        className="block size-0 opacity-0 outline-none"
      />
    </SliderPrimitive.Root>
  );
});

export default Slider;
