"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { List1NovaDemo } from "./nova/List1NovaDemo";
import { List1NovaCode } from "./nova/List1NovaCode";
import { List1RetroDemo } from "./retro/List1RetroDemo";
import { List1RetroCode } from "./retro/List1RetroCode";
import { List1LyraDemo } from "./lyra/List1LyraDemo";
import { List1LyraCode } from "./lyra/List1LyraCode";

const List1Wrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={List1RetroCode}
                replayButton={true}
            >
                <List1RetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "nova") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName="min-h-[400px] md:min-h-[250px]"
                codeSnippet={List1NovaCode}
                replayButton={true}
            >
                <List1NovaDemo />
            </ComponentWrapper>
        );
    }

    // Default to Lyra
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName="min-h-[400px] md:min-h-[250px]"
            codeSnippet={List1LyraCode}
            replayButton={true}
        >
            <List1LyraDemo />
        </ComponentWrapper>
    );
};

export default List1Wrapper;
