"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { Accordion00NovaDemo } from "./nova/Accordion00NovaDemo";
import Accordion00NovaCode from "./nova/Accordion00NovaCode";
import { Accordion00RetroDemo } from "./retro/Accordion00RetroDemo";
import { Accordion00RetroCode } from "./retro/Accordion00RetroCode";
import { Accordion00LyraDemo } from "./lyra/Accordion00LyraDemo";
import Accordion00LyraCode from "./lyra/Accordion00LyraCode";

const Accordion00Wrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={Accordion00RetroCode}
            >
                <Accordion00RetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "nova") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName={''}
                codeSnippet={Accordion00NovaCode}
            >
                <Accordion00NovaDemo />
            </ComponentWrapper>
        );
    }

    // Default to Lyra
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName={''}
            codeSnippet={Accordion00LyraCode}
        >
            <Accordion00LyraDemo />
        </ComponentWrapper>
    );
};

export default Accordion00Wrapper;
