"use client";

import React, { useState, useCallback, useEffect, useRef } from "react";
import { StatusElevation } from "../StatusElevation";
import { motion } from "motion/react";
import { Gauge, Zap } from "lucide-react";

const STATUSES = ["failed", "pending", "success"];

const INITIAL_ITEMS = [
    { id: 1, name: "DATABASE_MIGRATION", status: "pending" },
    { id: 2, name: "API_DEPLOYMENT", status: "success" },
    { id: 3, name: "AUTH_SERVICE", status: "failed" },
    { id: 4, name: "CACHE_WARMUP", status: "pending" },
    { id: 5, name: "SSL_CERTIFICATE", status: "success" },
    { id: 6, name: "DNS_PROPAGATION", status: "pending" },
];

const SPEED_MODES = {
    slow: { label: "SLOW", duration: 2, interval: 5000, icon: Gauge },
    normal: { label: "NORMAL", duration: 0.3, interval: 1500, icon: Zap },
};

export function StatusElevationRetroDemo({
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
                            className={`flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-bold uppercase tracking-widest border-2 transition-all cursor-pointer active:translate-y-0.5 ${isActive
                                    ? "bg-black text-white border-black shadow-[4px_4px_0px_0px_#000000]"
                                    : "bg-white text-black border-black hover:bg-gray-100 shadow-[2px_2px_0px_0px_#000000]"
                                }`}
                        >
                            <Icon className="w-3.5 h-3.5" />
                            {mode.label}
                        </motion.button>
                    );
                })}
            </div>

            <StatusElevation items={items} duration={currentSpeed.duration} variant="retro" />
        </div>
    );
}
