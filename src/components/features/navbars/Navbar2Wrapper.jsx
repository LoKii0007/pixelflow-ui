"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { Navbar2NovaDemo } from "./nova/Navbar2NovaDemo";
import { Navbar2RetroDemo } from "./retro/Navbar2RetroDemo";
import { Navbar2LyraDemo } from "./lyra/Navbar2LyraDemo";
import Navbar2NovaCode from "./nova/Navbar2NovaCode";
import Navbar2RetroCode from "./retro/Navbar2RetroCode";
import Navbar2LyraCode from "./lyra/Navbar2LyraCode";

const Navbar2Wrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={Navbar2RetroCode}
                replayButton={true}
            >
                <Navbar2RetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "lyra") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName="!bg-black"
                codeSnippet={Navbar2LyraCode}
                replayButton={true}
            >
                <Navbar2LyraDemo />
            </ComponentWrapper>
        );
    }

    // Default to standard Navbar2 (Nova)
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName="!p-0"
            codeSnippet={Navbar2NovaCode}
            replayButton={true}
        >
            <Navbar2NovaDemo />
        </ComponentWrapper>
    );
};

export default Navbar2Wrapper;
