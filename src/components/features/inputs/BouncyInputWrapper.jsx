"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { BouncyInputNovaDemo } from "./nova/BouncyInputNovaDemo";
import { BouncyInputNovaCode } from "./nova/BouncyInputNovaCode";
import { BouncyInputRetroDemo } from "./retro/BouncyInputRetroDemo";
import { BouncyInputRetroCode } from "./retro/BouncyInputRetroCode";
import { BouncyInputLyraDemo } from "./lyra/BouncyInputLyraDemo";
import { BouncyInputLyraCode } from "./lyra/BouncyInputLyraCode";

const BouncyInputWrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={BouncyInputRetroCode}
            >
                <BouncyInputRetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "nova") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName={''}
                codeSnippet={BouncyInputNovaCode}
            >
                <BouncyInputNovaDemo />
            </ComponentWrapper>
        );
    }

    // Default to Lyra
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName={''}
            codeSnippet={BouncyInputLyraCode}
        >
            <BouncyInputLyraDemo />
        </ComponentWrapper>
    );
};

export default BouncyInputWrapper;
