const StatusElevationLyraCode = `
"use client";

import React, { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import { XCircle, Loader, CheckCircle } from "lucide-react";

// ─── Status Config ─────────────────────────────────────────────
const STATUS_CONFIG = {
    failed: {
        priority: 1, label: "Failed", icon: XCircle,
        color: "#ef4444",
        borderColor: "rgba(239, 68, 68, 0.25)",
    },
    pending: {
        priority: 2, label: "Pending", icon: Loader,
        color: "#f59e0b",
        borderColor: "rgba(245, 158, 11, 0.25)",
    },
    success: {
        priority: 3, label: "Success", icon: CheckCircle,
        color: "#10b981",
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration, ease: "easeOut" }}
            className="w-32"
        >
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-none border-[0.6px]"
                style={{ borderColor: config.borderColor, background: "rgba(0,0,0,0.3)" }}>
                <Icon className={\`w-3.5 h-3.5 \${isPending ? "animate-spin" : ""}\`}
                    style={{ color: config.color }} strokeWidth={2} />
                <AnimatePresence mode="wait">
                    <motion.span key={status}
                        initial={{ filter: "blur(4px)", opacity: 0.3 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        exit={{ filter: "blur(4px)", opacity: 0.3 }}
                        transition={{ duration: halfDuration, ease: "easeInOut" }}
                        className="font-mono text-xs uppercase tracking-widest"
                        style={{ color: config.color }}
                    >{config.label}</motion.span>
                </AnimatePresence>
            </div>
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
                                className="relative overflow-hidden rounded-none border-[0.6px] border-white/20"
                                style={{ background: "rgba(0,0,0,0.4)" }}
                            >
                                <motion.div layout className="absolute left-0 top-0 bottom-0 w-[2px]"
                                    style={{ background: config.color, opacity: 0.8 }} />
                                <div className="flex items-center gap-4 p-4 pl-5">
                                    <motion.div layout className="flex items-center justify-center w-6 h-6"
                                        style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
                                        <span className="text-[10px] font-bold text-neutral-500 font-mono">{index + 1}</span>
                                    </motion.div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-xs font-mono uppercase tracking-wider text-neutral-300 truncate">{item.name}</p>
                                        <p className="text-[10px] text-neutral-600 mt-0.5 font-mono uppercase">ID: {item.id}</p>
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
    { id: 1, name: "DATABASE_MIGRATION", status: "pending" },
    { id: 2, name: "API_DEPLOYMENT", status: "success" },
    { id: 3, name: "AUTH_SERVICE", status: "failed" },
    { id: 4, name: "CACHE_WARMUP", status: "pending" },
    { id: 5, name: "SSL_CERTIFICATE", status: "success" },
    { id: 6, name: "DNS_PROPAGATION", status: "pending" },
];

export default function StatusElevationLyraDemo() {
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

export default StatusElevationLyraCode;
