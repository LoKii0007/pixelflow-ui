"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { List00NovaDemo } from "./nova/List00NovaDemo";
import { List00NovaCode } from "./nova/List00NovaCode";
import { List00RetroDemo } from "./retro/List00RetroDemo";
import { List00RetroCode } from "./retro/List00RetroCode";
import { List00LyraDemo } from "./lyra/List00LyraDemo";
import { List00LyraCode } from "./lyra/List00LyraCode";

const List00Wrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={List00RetroCode}
                replayButton={true}
            >
                <List00RetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "nova") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName="min-h-[400px] md:min-h-[250px]"
                codeSnippet={List00NovaCode}
                replayButton={true}
            >
                <List00NovaDemo />
            </ComponentWrapper>
        );
    }

    // Default to Lyra
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName="min-h-[400px] md:min-h-[250px]"
            codeSnippet={List00LyraCode}
            replayButton={true}
        >
            <List00LyraDemo />
        </ComponentWrapper>
    );
};

export default List00Wrapper;
