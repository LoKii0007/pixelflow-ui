"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { MultiSelect1NovaDemo } from "./nova/MultiSelect1NovaDemo";
import { MultiSelect1NovaCode } from "./nova/MultiSelectNovaCode";
import { MultiSelect1LyraDemo } from "./lyra/MultiSelect1LyraDemo";
import { MultiSelect1LyraCode } from "./lyra/MultiSelect1LyraCode";
import { MultiSelect1RetroDemo } from "./retro/MultiSelect1RetroDemo";
import { MultiSelect1RetroCode } from "./retro/MultiSelect1RetroCode";

const MultiSelectWrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={MultiSelect1RetroCode}
            >
                <MultiSelect1RetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "nova") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={MultiSelect1NovaCode}
            >
                <MultiSelect1NovaDemo />
            </ComponentWrapper>
        );
    }

    // Default to Lyra
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName=""
            codeSnippet={MultiSelect1LyraCode}
        >
            <MultiSelect1LyraDemo />
        </ComponentWrapper>
    );
};

export default MultiSelectWrapper;
