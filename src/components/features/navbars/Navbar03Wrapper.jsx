"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { Navbar03Demo } from "./nova/Navbar03Demo";
import { Navbar03RetroDemo } from "./retro/Navbar03RetroDemo";
import { Navbar03LyraDemo } from "./lyra/Navbar03LyraDemo";
import { Navbar03Code } from "./nova/Navbar03Code";
import Navbar03RetroCode from "./retro/Navbar03RetroCode";
import Navbar03LyraCode from "./lyra/Navbar03LyraCode";

const Navbar03Wrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName="!p-0"
                codeSnippet={Navbar03RetroCode}
            >
                <Navbar03RetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "lyra") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName="!bg-black !p-0"
                codeSnippet={Navbar03LyraCode}
            >
                <Navbar03LyraDemo />
            </ComponentWrapper>
        );
    }

    // Default
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName="bg-black !p-0"
            codeSnippet={Navbar03Code}
        >
            <Navbar03Demo />
        </ComponentWrapper>
    );
};

export default Navbar03Wrapper;
