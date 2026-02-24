"use client";

import React from "react";
import { User, Settings, LogOut, Code, MessageCircle, Github, Heart, Star, Sun, Moon, Laptop } from "lucide-react";
import { AnimatedDropdown } from "@/components/features/dropdown-menu/AnimatedDropdown";
import { Button } from "@/components/ui/button";

const menuData = {
    label: "My Account",
    items: [
        {
            label: "Profile",
            icon: User,
            onClick: () => console.log("Profile clicked"),
        },
        {
            label: "Theme",
            icon: Sun,
            submenu: {
                label: "Theme",
                items: [
                    { label: "Light", icon: Sun, onClick: () => console.log("Light theme") },
                    { label: "Dark", icon: Moon, onClick: () => console.log("Dark theme") },
                    { label: "System", icon: Laptop, onClick: () => console.log("System theme") },
                ],
            },
        },
        {
            label: "Settings",
            icon: Settings,
            submenu: {
                label: "Settings",
                items: [
                    {
                        label: "Account",
                        icon: User,
                        submenu: {
                            label: "Account",
                            items: [
                                { label: "Security", onClick: () => { } },
                                { label: "Privacy", onClick: () => { } },
                            ],
                        },
                    },
                    { label: "Notifications", icon: MessageCircle, onClick: () => { } },
                    { label: "API Keys", icon: Code, onClick: () => { } },
                ],
            },
        },
        { separator: true },
        {
            label: "GitHub",
            icon: Github,
            onClick: () => window.open("https://github.com", "_blank"),
        },
        {
            label: "Support",
            icon: Heart,
            submenu: {
                label: "Support",
                items: [
                    { label: "Help Center", onClick: () => { } },
                    { label: "Chat with us", onClick: () => { } },
                ],
            },
        },
        { separator: true },
        {
            label: "Log out",
            icon: LogOut,
            onClick: () => console.log("Logout clicked"),
        },
    ],
};

export function DropdownDemo() {
    return (
        <div className="flex items-center justify-center p-20 min-h-[350px]">
            <AnimatedDropdown
                trigger={
                    <Button variant="outline" className="w-[200px] justify-between text-black/80">
                        Update Settings
                        <Settings className="w-4 h-4 ml-2 opacity-50" />
                    </Button>
                }
                menu={menuData}
            />

        </div>
    );
}
