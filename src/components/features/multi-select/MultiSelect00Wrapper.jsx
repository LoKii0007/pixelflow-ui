"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { MultiSelect00NovaDemo } from "./nova/MultiSelect00NovaDemo";
import { MultiSelect00NovaCode } from "./nova/MultiSelect00NovaCode";
import { MultiSelect00LyraDemo } from "./lyra/MultiSelect00LyraDemo";
import { MultiSelect00LyraCode } from "./lyra/MultiSelect00LyraCode";
import { MultiSelect00RetroDemo } from "./retro/MultiSelect00RetroDemo";
import { MultiSelect00RetroCode } from "./retro/MultiSelect00RetroCode";

const MultiSelect00Wrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={MultiSelect00RetroCode}
            >
                <MultiSelect00RetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "nova") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={MultiSelect00NovaCode}
            >
                <MultiSelect00NovaDemo />
            </ComponentWrapper>
        );
    }

    // Default to Lyra
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName=""
            codeSnippet={MultiSelect00LyraCode}
        >
            <MultiSelect00LyraDemo />
        </ComponentWrapper>
    );
};

export default MultiSelect00Wrapper;
