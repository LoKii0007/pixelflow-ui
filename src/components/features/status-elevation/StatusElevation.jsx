"use client";

import React, { useMemo } from "react";
import { AnimatePresence, motion } from "motion/react";
import { XCircle, Loader, CheckCircle } from "lucide-react";

const STATUS_CONFIG = {
    failed: {
        priority: 1,
        label: "Failed",
        icon: XCircle,
        color: "#ef4444",
        glowColor: "rgba(239, 68, 68, 0.4)",
        softGlow: "rgba(239, 68, 68, 0.15)",
        borderColor: "rgba(239, 68, 68, 0.25)",
    },
    pending: {
        priority: 2,
        label: "Pending",
        icon: Loader,
        color: "#f59e0b",
        glowColor: "rgba(245, 158, 11, 0.4)",
        softGlow: "rgba(245, 158, 11, 0.15)",
        borderColor: "rgba(245, 158, 11, 0.25)",
    },
    success: {
        priority: 3,
        label: "Success",
        icon: CheckCircle,
        color: "#10b981",
        glowColor: "rgba(16, 185, 129, 0.4)",
        softGlow: "rgba(16, 185, 129, 0.15)",
        borderColor: "rgba(16, 185, 129, 0.25)",
    },
};

function StatusPill({ status, duration = 0.3 }) {
    const config = STATUS_CONFIG[status];
    const Icon = config.icon;
    const isPending = status === "pending";
    const halfDuration = duration / 2;

    return (
        <motion.div
            key={status}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "tween", duration: duration, ease: "easeOut" }}
            className="relative w-32"
        >
            <AnimatePresence>

                {/* Pill body */}
                <motion.div
                    className="relative flex items-center gap-2.5 pl-3.5 pr-5 py-2.5 rounded-full"
                    animate={{
                        boxShadow: `inset 0 2px 2px -1px ${config.glowColor}`,
                    }}
                    transition={{ duration: halfDuration, ease: "easeInOut" }}
                    style={{
                        background: `linear-gradient(145deg, rgba(40, 40, 45, 0.95), rgba(25, 25, 30, 0.98))`,
                    }}
                >
                    {/* Icon with glow */}
                    <div className="relative">
                        <div
                            className="absolute inset-0 blur-sm rounded-full"
                            style={{ background: config.glowColor, opacity: 0.5 }}
                        />
                        <Icon
                            className={`relative w-5 h-5 ${isPending ? "animate-spin" : ""}`}
                            style={{
                                color: config.color,
                                filter: `drop-shadow(0 0 4px ${config.glowColor})`,
                            }}
                            strokeWidth={2}
                        />
                    </div>


                    {/* Label */}
                    <AnimatePresence mode="wait">
                        <motion.span
                            key={status}
                            initial={{ filter: "blur(4px)", opacity: 0.4 }}
                            animate={{ filter: "blur(0px)", opacity: 1 }}
                            exit={{ filter: "blur(4px)", opacity: 0.4 }}
                            transition={{ duration: halfDuration, ease: "easeInOut" }}
                            className="text-sm font-medium tracking-wide"
                            style={{
                                color: "rgba(255, 255, 255, 0.85)",
                            }}
                        >
                            {config.label}
                        </motion.span>
                    </AnimatePresence>


                </motion.div>
            </AnimatePresence>
        </motion.div>
    );
}

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
            {/* List */}
            <div className="space-y-3">
                <AnimatePresence initial={false}>
                    {sortedItems.map((item, index) => {
                        const config = STATUS_CONFIG[item.status];

                        return (
                            <motion.div
                                key={item.id}
                                layout
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9, x: -20 }}
                                transition={{
                                    layout: {
                                        type: "tween",
                                        duration: duration,
                                        ease: "easeInOut",
                                    },
                                    opacity: { duration: duration },
                                    scale: { duration: duration },
                                }}
                                className="relative overflow-hidden rounded-2xl"
                                style={{
                                    background: `linear-gradient(135deg, rgba(30, 30, 35, 0.9), rgba(20, 20, 25, 0.95))`,
                                    border: `1px solid rgba(255, 255, 255, 0.06)`,
                                    boxShadow: `0 2px 12px rgba(0, 0, 0, 0.3)`,
                                }}
                            >
                                {/* Left accent line */}
                                <motion.div
                                    layout
                                    className="absolute left-0 top-0 bottom-0 w-[2px]"
                                    style={{ background: config.color, opacity: 0.6 }}
                                />

                                <div className="flex items-center gap-4 p-4 pl-5">
                                    {/* Rank */}
                                    <motion.div
                                        layout
                                        className="flex items-center justify-center w-7 h-7 rounded-lg"
                                        style={{
                                            background: "rgba(255, 255, 255, 0.04)",
                                            border: "1px solid rgba(255, 255, 255, 0.06)",
                                        }}
                                    >
                                        <span className="text-xs font-bold text-white/40 font-mono">
                                            {index + 1}
                                        </span>
                                    </motion.div>

                                    {/* Name */}
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-white/80 truncate">
                                            {item.name}
                                        </p>
                                        <p className="text-[11px] text-white/25 mt-0.5 font-mono">
                                            ID: {item.id}
                                        </p>
                                    </div>

                                    {/* Status Pill */}
                                    <StatusPill status={item.status} duration={duration} />
                                </div>

                                {/* Shine sweep on status change */}
                                <motion.div
                                    key={item.status}
                                    initial={{ x: "-100%", opacity: 0.2 }}
                                    animate={{ x: "200%", opacity: 0 }}
                                    transition={{ duration: duration, ease: "easeOut" }}
                                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent pointer-events-none"
                                />
                            </motion.div>
                        );
                    })}
                </AnimatePresence>
            </div>

            {items.length === 0 && (
                <div className="flex items-center justify-center py-12 text-white/20 text-sm">
                    No items in queue
                </div>
            )}
        </div>
    );
}
