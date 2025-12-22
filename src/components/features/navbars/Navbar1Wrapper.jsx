"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { Navbar1NovaDemo } from "./nova/Navbar1NovaDemo";
import { Navbar1RetroDemo } from "./retro/Navbar1RetroDemo";
import { Navbar1LyraDemo } from "./lyra/Navbar1LyraDemo";
import Navbar1NovaCode from "./nova/Navbar1NovaCode";
import Navbar1RetroCode from "./retro/Navbar1RetroCode";
import Navbar1LyraCode from "./lyra/Navbar1LyraCode";

const Navbar1Wrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={Navbar1RetroCode}
                replayButton={true}
            >
                <Navbar1RetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "lyra") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName="!bg-black"
                codeSnippet={Navbar1LyraCode}
                replayButton={true}
            >
                <Navbar1LyraDemo />
            </ComponentWrapper>
        );
    }

    // Default to standard Navbar1 (Nova)
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName=""
            codeSnippet={Navbar1NovaCode}
            replayButton={true}
        >
            <Navbar1NovaDemo />
        </ComponentWrapper>
    );
};

export default Navbar1Wrapper;
