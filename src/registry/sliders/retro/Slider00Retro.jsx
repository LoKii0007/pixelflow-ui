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
    color = "#000",
    showTicks = true,
    tickCount = 20,
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
    sm: { height: "h-9", thumb: "w-4 h-4", tick: 14 },
    md: { height: "h-12", thumb: "w-5 h-5", tick: 18 },
    lg: { height: "h-16", thumb: "w-6 h-6", tick: 24 },
  };

  const { height, thumb, tick } = sizeMap[size] || sizeMap.md;
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
      className={`relative flex w-full items-center touch-none select-none ${height} cursor-pointer data-[disabled]:opacity-50 focus-within:ring-2 focus-within:ring-black/40 ${className}`}
      style={{
        background: "#f5f0e8",
        border: "2px solid #000",
        boxShadow: "3px 3px 0 #000",
      }}
      {...props}
    >
      {/* Track */}
      <SliderPrimitive.Track className="relative w-full h-full overflow-hidden">
        {/* Filled track */}
        <SliderPrimitive.Range
          className="absolute inset-y-0"
          style={{ backgroundColor: color }}
        />

        {/* Tick marks */}
        {showTicks && (
          <div className="absolute inset-0 flex items-center px-1 pointer-events-none">
            {Array.from({ length: tickCount }).map((_, i) => (
              <div key={i} className="flex-1 flex justify-center">
                <div
                  style={{
                    width: "2px",
                    height: `${tick}px`,
                    backgroundColor:
                      i / tickCount < pct / 100 ? "#f5f0e8" : "#000",
                    opacity: 0.5,
                  }}
                />
              </div>
            ))}
          </div>
        )}

        {/* Thumb — pinned to the fill edge, in the track's own coordinate space
            so it never drifts with progress */}
        <div
          className={`absolute top-1/2 ${thumb} pointer-events-none`}
          style={{
            left: `${pct}%`,
            transform: "translate(calc(-100% - 4px), -50%)",
            backgroundColor: "#f5f0e8",
            border: "2px solid #000",
            boxShadow: "2px 2px 0 #000",
          }}
        />
      </SliderPrimitive.Track>

      {/* Radix thumb — kept for keyboard, dragging and a11y, visually hidden
          since the handle above is the rendered thumb */}
      <SliderPrimitive.Thumb
        aria-label="Value"
        className="block size-0 opacity-0 outline-none"
      />
    </SliderPrimitive.Root>
  );
});

export default Slider;
