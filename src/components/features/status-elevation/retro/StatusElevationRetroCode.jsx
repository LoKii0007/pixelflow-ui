const StatusElevationRetroCode = `
"use client";

import React, { useState, useCallback, useEffect, useRef, useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import { XCircle, Loader, CheckCircle } from "lucide-react";

// ─── Status Config ─────────────────────────────────────────────
const STATUS_CONFIG = {
    failed: {
        priority: 1, label: "Failed", icon: XCircle,
        color: "#ef4444",
        retroBg: "#fee2e2",
        retroText: "#991b1b",
        retroBorder: "#991b1b",
    },
    pending: {
        priority: 2, label: "Pending", icon: Loader,
        color: "#f59e0b",
        retroBg: "#fef3c7",
        retroText: "#92400e",
        retroBorder: "#92400e",
    },
    success: {
        priority: 3, label: "Success", icon: CheckCircle,
        color: "#10b981",
        retroBg: "#d1fae5",
        retroText: "#065f46",
        retroBorder: "#065f46",
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
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ type: "tween", duration, ease: "easeOut" }}
            className="w-32"
        >
            <div className="flex items-center gap-2 px-3 py-1.5 border-2 font-mono text-xs font-bold uppercase tracking-widest"
                style={{ background: config.retroBg, color: config.retroText, borderColor: config.retroBorder }}>
                <Icon className={\`w-3.5 h-3.5 \${isPending ? "animate-spin" : ""}\`} strokeWidth={2.5} />
                <AnimatePresence mode="wait">
                    <motion.span key={status}
                        initial={{ filter: "blur(3px)", opacity: 0.4 }}
                        animate={{ filter: "blur(0px)", opacity: 1 }}
                        exit={{ filter: "blur(3px)", opacity: 0.4 }}
                        transition={{ duration: halfDuration, ease: "easeInOut" }}
                    >{config.label.toUpperCase()}</motion.span>
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
        <div className="w-full max-w-lg mx-auto border-2 border-black shadow-[8px_8px_0px_0px_#000000] bg-white p-4">
            <div className="border-b-2 border-black pb-2 mb-4 flex justify-between items-center">
                <span className="font-bold font-mono uppercase tracking-widest text-black text-sm">STATUS_QUEUE.exe</span>
                <span className="text-xs font-mono border-2 border-black px-2 py-0.5 text-black">{items.length} ENTRIES</span>
            </div>
            <div className="space-y-2">
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
                                className="relative overflow-hidden border-2 border-black"
                                style={{ background: "#ffffff" }}
                            >
                                <motion.div layout className="absolute left-0 top-0 bottom-0 w-1"
                                    style={{ background: config.retroText }} />
                                <div className="flex items-center gap-4 p-4 pl-5">
                                    <motion.div layout className="flex items-center justify-center w-7 h-7 border-2 border-black"
                                        style={{ background: "#ffffff" }}>
                                        <span className="text-xs font-bold font-mono text-black">{index + 1}</span>
                                    </motion.div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-mono font-bold uppercase text-black truncate">{item.name}</p>
                                        <p className="text-[10px] text-gray-500 mt-0.5 font-mono uppercase">ID: {item.id}</p>
                                    </div>
                                    <StatusPill status={item.status} duration={duration} />
                                </div>
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

export default function StatusElevationRetroDemo() {
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
        <div className="w-full flex flex-col gap-6 p-4 text-black">
            <StatusElevation items={items} duration={0.3} />
        </div>
    );
}
`;

export default StatusElevationRetroCode;
