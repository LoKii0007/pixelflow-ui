const StatusElevationNovaCode = `
"use client";

import React, { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import { XCircle, Loader, CheckCircle } from "lucide-react";

// ─── Status Config ─────────────────────────────────────────────
const STATUS_CONFIG = {
    failed: {
        priority: 1, label: "Failed", icon: XCircle,
        color: "#ef4444",
        glowColor: "rgba(239, 68, 68, 0.4)",
        softGlow: "rgba(239, 68, 68, 0.15)",
        borderColor: "rgba(239, 68, 68, 0.25)",
    },
    pending: {
        priority: 2, label: "Pending", icon: Loader,
        color: "#f59e0b",
        glowColor: "rgba(245, 158, 11, 0.4)",
        softGlow: "rgba(245, 158, 11, 0.15)",
        borderColor: "rgba(245, 158, 11, 0.25)",
    },
    success: {
        priority: 3, label: "Success", icon: CheckCircle,
        color: "#10b981",
        glowColor: "rgba(16, 185, 129, 0.4)",
        softGlow: "rgba(16, 185, 129, 0.15)",
        borderColor: "rgba(16, 185, 129, 0.25)",
    },
};

// ─── Status Pill ───────────────────────────────────────────────
function StatusPill({ status, duration = 0.3 }) {
    const config = STATUS_CONFIG[status];
    const Icon = config.icon;
    const isPending = status === "pending";
    const halfDuration = duration / 2;

    return (
        <motion.div key={status}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration, ease: "easeOut" }}
            className="relative w-32"
        >
            <AnimatePresence>
                <motion.div
                    className="relative flex items-center gap-2.5 pl-3.5 pr-5 py-2.5 rounded-full"
                    animate={{ boxShadow: \`inset 0 2px 2px -1px \${config.glowColor}\` }}
                    transition={{ duration: halfDuration, ease: "easeInOut" }}
                    style={{ background: "linear-gradient(145deg, rgba(40,40,45,0.95), rgba(25,25,30,0.98))" }}
                >
                    <div className="relative">
                        <div className="absolute inset-0 blur-sm rounded-full"
                            style={{ background: config.glowColor, opacity: 0.5 }} />
                        <Icon className={\`relative w-5 h-5 \${isPending ? "animate-spin" : ""}\`}
                            style={{ color: config.color, filter: \`drop-shadow(0 0 4px \${config.glowColor})\` }}
                            strokeWidth={2} />
                    </div>
                    <AnimatePresence mode="wait">
                        <motion.span key={status}
                            initial={{ filter: "blur(4px)", opacity: 0.4 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            exit={{ filter: "blur(4px)", opacity: 0.4 }}
                            transition={{ duration: halfDuration, ease: "easeInOut" }}
                            className="text-sm font-medium tracking-wide"
                            style={{ color: "rgba(255, 255, 255, 0.85)" }}
                        >{config.label}</motion.span>
                    </AnimatePresence>
                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}

// ─── Status Elevation Component ────────────────────────────────
export function StatusElevation({ items = [], duration = 0.3 }) {
    const sortedItems = useMemo(() => {
        return [...items].sort((a, b) => {
            const pA = STATUS_CONFIG[a.status]?.priority ?? 99;
            const pB = STATUS_CONFIG[b.status]?.priority ?? 99;
            if (pA !== pB) return pB - pA;
            return a.id - b.id;
        });
    }, [items]);

    return (
        <div className="w-full max-w-lg mx-auto">
            <div className="space-y-3">
                <AnimatePresence initial={false}>
                    {sortedItems.map((item, index) => {
                        const config = STATUS_CONFIG[item.status];
                        return (
                            <motion.div key={item.id} layout
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                                transition={{
                                    layout: { type: "tween", duration, ease: "easeInOut" },
                                    opacity: { duration }, scale: { duration },
                                }}
                                className="relative overflow-hidden rounded-2xl"
                                style={{
                                    background: "linear-gradient(135deg, rgba(30,30,35,0.9), rgba(20,20,25,0.95))",
                                    border: "1px solid rgba(255,255,255,0.06)",
                                    boxShadow: "0 2px 12px rgba(0,0,0,0.3)",
                                }}
                            >
                                <motion.div layout className="absolute left-0 top-0 bottom-0 w-[2px]"
                                    style={{ background: config.color, opacity: 0.6 }} />
                                <div className="flex items-center gap-4 p-4 pl-5">
                                    <motion.div layout className="flex items-center justify-center w-7 h-7 rounded-lg"
                                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.06)" }}>
                                        <span className="text-xs font-bold text-white/40 font-mono">{index + 1}</span>
                                    </motion.div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-white/80 truncate">{item.name}</p>
                                        <p className="text-[11px] text-white/25 mt-0.5 font-mono">ID: {item.id}</p>
                                    </div>
                                    <StatusPill status={item.status} duration={duration} />
                                </div>
                                <motion.div key={item.status}
                                    initial={{ x: "-100%", opacity: 0.2 }}
                                    animate={{ x: "200%", opacity: 0 }}
                                    transition={{ duration, ease: "easeOut" }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none" />
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>
        </div>
    );
}

// ─── Demo ──────────────────────────────────────────────────────
const STATUSES = ["failed", "pending", "success"];

const INITIAL_ITEMS = [
    { id: 1, name: "Database Migration", status: "pending" },
    { id: 2, name: "API Deployment", status: "success" },
    { id: 3, name: "Auth Service", status: "failed" },
    { id: 4, name: "Cache Warmup", status: "pending" },
    { id: 5, name: "SSL Certificate", status: "success" },
    { id: 6, name: "DNS Propagation", status: "pending" },
];

export default function StatusElevationNovaDemo() {
    const [items, setItems] = useState(INITIAL_ITEMS);
    const intervalRef = useRef(null);

    const randomizeOne = useCallback(() => {
        setItems((prev) => {
            const idx = Math.floor(Math.random() * prev.length);
            const currentStatus = prev[idx].status;
            const otherStatuses = STATUSES.filter((s) => s !== currentStatus);
            const newStatus = otherStatuses[Math.floor(Math.random() * otherStatuses.length)];
            return prev.map((item, i) => i === idx ? { ...item, status: newStatus } : item);
        });
    }, []);

    useEffect(() => {
        intervalRef.current = setInterval(randomizeOne, 1500);
        return () => clearInterval(intervalRef.current);
    }, [randomizeOne]);

    return (
        <div className="w-full flex flex-col gap-6 p-4">
            <StatusElevation items={items} duration={0.3} />
        </div>
    );
}
`;

export default StatusElevationNovaCode;
