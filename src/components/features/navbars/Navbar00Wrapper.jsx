"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { Navbar00NovaDemo } from "./nova/Navbar00NovaDemo";
import { Navbar00RetroDemo } from "./retro/Navbar00RetroDemo";
import { Navbar00LyraDemo } from "./lyra/Navbar00LyraDemo";
import Navbar00NovaCode from "./nova/Navbar00NovaCode";
import Navbar00RetroCode from "./retro/Navbar00RetroCode";
import Navbar00LyraCode from "./lyra/Navbar00LyraCode";

const Navbar00Wrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={Navbar00RetroCode}
                replayButton={true}
            >
                <Navbar00RetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "lyra") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName="!bg-black"
                codeSnippet={Navbar00LyraCode}
                replayButton={true}
            >
                <Navbar00LyraDemo />
            </ComponentWrapper>
        );
    }

    // Default to standard Navbar00 (Nova)
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName=""
            codeSnippet={Navbar00NovaCode}
            replayButton={true}
        >
            <Navbar00NovaDemo />
        </ComponentWrapper>
    );
};

export default Navbar00Wrapper;
