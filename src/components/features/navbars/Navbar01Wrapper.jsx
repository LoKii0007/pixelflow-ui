"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { Navbar01NovaDemo } from "./nova/Navbar01NovaDemo";
import { Navbar01RetroDemo } from "./retro/Navbar01RetroDemo";
import { Navbar01LyraDemo } from "./lyra/Navbar01LyraDemo";
import Navbar01NovaCode from "./nova/Navbar01NovaCode";
import Navbar01RetroCode from "./retro/Navbar01RetroCode";
import Navbar01LyraCode from "./lyra/Navbar01LyraCode";

const Navbar01Wrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={Navbar01RetroCode}
                replayButton={true}
            >
                <Navbar01RetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "lyra") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName="!bg-black"
                codeSnippet={Navbar01LyraCode}
                replayButton={true}
            >
                <Navbar01LyraDemo />
            </ComponentWrapper>
        );
    }

    // Default to standard Navbar01 (Nova)
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName="!p-0"
            codeSnippet={Navbar01NovaCode}
            replayButton={true}
        >
            <Navbar01NovaDemo />
        </ComponentWrapper>
    );
};

export default Navbar01Wrapper;
