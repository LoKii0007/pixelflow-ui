"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { Navbar3LyraDemo } from "./lyra/Navbar3LyraDemo";
import { Navbar3NovaDemo } from "./nova/Navbar3NovaDemo";
import { Navbar3RetroDemo } from "./retro/Navbar3RetroDemo";
import { Navbar3LyraCode } from "./lyra/Navbar3LyraCode";
import Navbar3NovaCode from "./nova/Navbar3NovaCode";
import Navbar3RetroCode from "./retro/Navbar3RetroCode";

const Navbar3Wrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={Navbar3RetroCode}
            >
                <Navbar3RetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "nova") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={Navbar3NovaCode}
            >
                <Navbar3NovaDemo />
            </ComponentWrapper>
        );
    }

    // Default to Lyra
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName="!p-0"
            codeSnippet={Navbar3LyraCode}
        >
            <Navbar3LyraDemo />
        </ComponentWrapper>
    );
};

export default Navbar3Wrapper;
