"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { Navbar02LyraDemo } from "./lyra/Navbar02LyraDemo";
import { Navbar02NovaDemo } from "./nova/Navbar02NovaDemo";
import { Navbar02RetroDemo } from "./retro/Navbar02RetroDemo";
import { Navbar02LyraCode } from "./lyra/Navbar02LyraCode";
import Navbar02NovaCode from "./nova/Navbar02NovaCode";
import Navbar02RetroCode from "./retro/Navbar02RetroCode";

const Navbar02Wrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={Navbar02RetroCode}
            >
                <Navbar02RetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "nova") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={Navbar02NovaCode}
            >
                <Navbar02NovaDemo />
            </ComponentWrapper>
        );
    }

    // Default to Lyra
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName="!p-0"
            codeSnippet={Navbar02LyraCode}
        >
            <Navbar02LyraDemo />
        </ComponentWrapper>
    );
};

export default Navbar02Wrapper;
