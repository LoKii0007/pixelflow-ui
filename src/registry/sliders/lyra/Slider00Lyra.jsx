"use client";

import React, { useState, useRef, useCallback } from "react";

const Slider = ({
  defaultValue = 55,
  min = 0,
  max = 100,
  step = 1,
  onChange,
  color = "#000000",
  showTicks = true,
  tickCount = 22,
  size = "md",
  disabled = false,
  className = "",
}) => {
  const [value, setValue] = useState(defaultValue);
  const trackRef = useRef(null);
  const isDragging = useRef(false);

  const sizeMap = {
    sm: { outer: "h-10 p-1", thumb: "w-4 h-4", tick: 14 },
    md: { outer: "h-14 p-1.5", thumb: "w-5 h-5", tick: 20 },
    lg: { outer: "h-16 p-2", thumb: "w-6 h-6", tick: 24 },
  };

  const { outer, thumb, tick } = sizeMap[size] || sizeMap.md;
  const pct = ((value - min) / (max - min)) * 100;

  const clampToStep = useCallback(
    (raw) => {
      const clamped = Math.min(max, Math.max(min, raw));
      return Math.round(clamped / step) * step;
    },
    [min, max, step],
  );

  const updateFromEvent = useCallback(
    (e) => {
      if (!trackRef.current || disabled) return;
      const rect = trackRef.current.getBoundingClientRect();
      const clientX = e.touches ? e.touches[0].clientX : e.clientX;
      const ratio = Math.min(
        1,
        Math.max(0, (clientX - rect.left) / rect.width),
      );
      const next = clampToStep(min + ratio * (max - min));
      setValue(next);
      onChange?.(next);
    },
    [min, max, clampToStep, onChange, disabled],
  );

  const onPointerDown = (e) => {
    if (disabled) return;
    isDragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    updateFromEvent(e);
  };

  const onPointerMove = (e) => {
    if (!isDragging.current) return;
    updateFromEvent(e);
  };

  const onPointerUp = () => {
    isDragging.current = false;
  };

  return (
    <div className={`w-full select-none ${className}`}>
      {/* Outer white box */}
      <div
        ref={trackRef}
        className={`relative w-full ${outer} cursor-pointer bg-white`}
        style={{ boxShadow: "0 6px 16px rgba(0,0,0,0.12)", touchAction: "none" }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {/* Inner track */}
        <div className="relative w-full h-full overflow-hidden">
          {/* Orange filled portion */}
          <div
            className="absolute inset-y-0 left-0 transition-none"
            style={{ width: `${pct}%`, backgroundColor: color }}
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


          {/* White thumb dot */}
          <div
            className={`absolute top-1/2 ${thumb} bg-white pointer-events-none transition-none`}
            style={{
              left: `${pct}%`,
              transform: `translate(calc(-100% - 4px), -50%)`,
              boxShadow: "0 1px 3px rgba(0,0,0,0.25)",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Slider;
