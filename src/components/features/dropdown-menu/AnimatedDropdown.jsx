"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, delay } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
    DropdownMenuItem,
    DropdownMenuSeparator,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';

// Animation variants for sliding effects
const menuVariants = {
    enter: (direction) => ({
        x: direction === 'right' ? '100%' : '-100%',
        opacity: 0,
        transition: {
            duration: 0.3,
        }
    }),
    center: {
        x: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
        }
    },
    exit: (direction) => ({
        x: direction === 'right' ? '-100%' : '100%',
        opacity: 0,
        transition: {
            duration: 0.3,
        }
    }),
};

const MotionDropdownMenuContent = motion(DropdownMenuContent);

export function AnimatedDropdown({
    trigger,
    menu,
    className
}) {
    const [open, setOpen] = useState(false);
    const [menuStack, setMenuStack] = useState([menu]);
    const [direction, setDirection] = useState('right');

    // Reset menu state when closed
    useEffect(() => {
        if (!open) {
            const timer = setTimeout(() => {
                setMenuStack([menu]);
                setDirection('right');
            }, 300);
            return () => clearTimeout(timer);
        }
    }, [open, menu]);

    const activeMenu = menuStack[menuStack.length - 1];

    const handleSubmenu = (submenu) => {
        setDirection('right');
        setMenuStack((prev) => [...prev, submenu]);
    };

    const handleBack = () => {
        setDirection('left');
        setMenuStack((prev) => prev.slice(0, -1));
    };

    return (
        <DropdownMenu open={open} onOpenChange={setOpen}>
            <DropdownMenuTrigger asChild>
                {trigger}
            </DropdownMenuTrigger>

            <MotionDropdownMenuContent
                className={cn("w-64 overflow-hidden p-0", className)}
                align="end"
                layout
                transition={{
                    layout: {
                        duration: 2
                    }
                }}
            >

                <motion.div
                    className="relative w-full overflow-hidden"
                >
                    <AnimatePresence initial={false} mode="popLayout" custom={direction}>
                        <motion.div
                            key={activeMenu.id || activeMenu.label || "root"}
                            custom={direction}
                            variants={menuVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            className="w-full"
                        >
                            {/* Header / Back Button */}
                            {menuStack.length > 1 ? (
                                <div className="flex items-center gap-2 p-2 border-b">
                                    <button
                                        onClick={(e) => {
                                            e.preventDefault();
                                            e.stopPropagation();
                                            handleBack();
                                        }}
                                        className="p-1 hover:bg-accent rounded-sm transition-colors"
                                    >
                                        <ChevronLeft className="w-4 h-4" />
                                    </button>
                                    <span className="font-semibold text-sm">{activeMenu.label}</span>
                                </div>
                            ) : (
                                activeMenu.label && (
                                    <div className="px-2 py-1.5 text-sm font-semibold text-muted-foreground border-b">
                                        {activeMenu.label}
                                    </div>
                                )
                            )}

                            {/* Menu Items */}
                            <div className="p-1">
                                {activeMenu.items.map((item, index) => {
                                    if (item.separator) {
                                        return <DropdownMenuSeparator key={`sep-${index}`} />;
                                    }

                                    const hasSubmenu = !!item.submenu;

                                    return (
                                        <DropdownMenuItem
                                            key={index}
                                            className="justify-between cursor-pointer"
                                            onClick={(e) => {
                                                if (hasSubmenu) {
                                                    e.preventDefault();
                                                    e.stopPropagation();
                                                    handleSubmenu(item.submenu);
                                                } else if (item.onClick) {
                                                    item.onClick();
                                                    setOpen(false);
                                                }
                                            }}
                                        >
                                            <span className="flex items-center gap-2">
                                                {item.icon && <item.icon className="w-4 h-4" />}
                                                {item.label}
                                            </span>
                                            {hasSubmenu && (
                                                <ChevronRight className="w-4 h-4 opacity-50" />
                                            )}
                                        </DropdownMenuItem>
                                    );
                                })}
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </motion.div>

            </MotionDropdownMenuContent>
        </DropdownMenu>
    );
}
