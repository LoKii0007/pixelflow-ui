"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { BouncyInput00NovaDemo } from "./nova/BouncyInput00NovaDemo";
import { BouncyInput00NovaCode } from "./nova/BouncyInput00NovaCode";
import { BouncyInput00RetroDemo } from "./retro/BouncyInput00RetroDemo";
import { BouncyInput00RetroCode } from "./retro/BouncyInput00RetroCode";
import { BouncyInput00LyraDemo } from "./lyra/BouncyInput00LyraDemo";
import { BouncyInput00LyraCode } from "./lyra/BouncyInput00LyraCode";

const BouncyInput00Wrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={BouncyInput00RetroCode}
            >
                <BouncyInput00RetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "nova") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={BouncyInput00NovaCode}
            >
                <BouncyInput00NovaDemo />
            </ComponentWrapper>
        );
    }

    // Default to Lyra
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName={''}
            codeSnippet={BouncyInput00LyraCode}
        >
            <BouncyInput00LyraDemo />
        </ComponentWrapper>
    );
};

export default BouncyInput00Wrapper;
