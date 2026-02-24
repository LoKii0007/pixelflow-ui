"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { StatusElevation } from "../StatusElevation";
import { motion } from "motion/react";
import { Gauge, Zap } from "lucide-react";

const STATUSES = ["failed", "pending", "success"];

const INITIAL_ITEMS = [
    { id: 1, name: "Database Migration", status: "pending" },
    { id: 2, name: "API Deployment", status: "success" },
    { id: 3, name: "Auth Service", status: "failed" },
    { id: 4, name: "Cache Warmup", status: "pending" },
    { id: 5, name: "SSL Certificate", status: "success" },
    { id: 6, name: "DNS Propagation", status: "pending" },
];

const SPEED_MODES = {
    slow: { label: "Slow", duration: 2, interval: 5000, icon: Gauge },
    normal: { label: "Normal", duration: 0.3, interval: 1500, icon: Zap },
};

export function StatusElevationNovaDemo({
    resetAnimation: externalResetAnimation,
}) {
    const [items, setItems] = useState(INITIAL_ITEMS);
    const [speedMode, setSpeedMode] = useState("slow");
    const intervalRef = useRef(null);

    const currentSpeed = SPEED_MODES[speedMode];

    const handleReset = useCallback(() => {
        setItems(INITIAL_ITEMS);
    }, []);

    useEffect(() => {
        if (externalResetAnimation) {
            handleReset();
        }
    }, [externalResetAnimation, handleReset]);

    const randomizeOne = useCallback(() => {
        setItems((prev) => {
            const idx = Math.floor(Math.random() * prev.length);
            const currentStatus = prev[idx].status;
            const otherStatuses = STATUSES.filter((s) => s !== currentStatus);
            const newStatus =
                otherStatuses[Math.floor(Math.random() * otherStatuses.length)];
            return prev.map((item, i) =>
                i === idx ? { ...item, status: newStatus } : item
            );
        });
    }, []);

    useEffect(() => {
        intervalRef.current = setInterval(randomizeOne, currentSpeed.interval);
        return () => clearInterval(intervalRef.current);
    }, [randomizeOne, currentSpeed.interval]);

    return (
        <div className="w-full h-full flex flex-col gap-6 md:p-4">
            {/* Speed toggle */}
            <div className="flex items-center justify-center gap-2">
                {Object.entries(SPEED_MODES).map(([key, mode]) => {
                    const isActive = speedMode === key;
                    const Icon = mode.icon;
                    return (
                        <motion.button
                            key={key}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setSpeedMode(key)}
                            className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider border transition-all cursor-pointer ${isActive
                                    ? "bg-white/15 border-white/30 text-white shadow-lg shadow-white/5"
                                    : "bg-white/5 border-white/10 text-white/40 hover:bg-white/10 hover:text-white/60 hover:border-white/20"
                                }`}
                        >
                            <Icon className="w-3.5 h-3.5" />
                            {mode.label}
                        </motion.button>
                    );
                })}
            </div>

            <StatusElevation items={items} duration={currentSpeed.duration} variant="nova" />
        </div>
    );
}
