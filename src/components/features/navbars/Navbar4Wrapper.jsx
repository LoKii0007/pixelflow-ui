"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { Navbar4Demo } from "./nova/Navbar4Demo";
import { Navbar4RetroDemo } from "./retro/Navbar4RetroDemo";
import { Navbar4LyraDemo } from "./lyra/Navbar4LyraDemo";
import { Navbar4Code } from "./nova/Navbar4Code";
import Navbar4RetroCode from "./retro/Navbar4RetroCode";
import Navbar4LyraCode from "./lyra/Navbar4LyraCode";

const Navbar4Wrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName="!p-0"
                codeSnippet={Navbar4RetroCode}
            >
                <Navbar4RetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "lyra") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName="!bg-black !p-0"
                codeSnippet={Navbar4LyraCode}
            >
                <Navbar4LyraDemo />
            </ComponentWrapper>
        );
    }

    // Default
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName="bg-black !p-0"
            codeSnippet={Navbar4Code}
        >
            <Navbar4Demo />
        </ComponentWrapper>
    );
};

export default Navbar4Wrapper;
