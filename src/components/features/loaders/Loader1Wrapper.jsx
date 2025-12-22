"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { Loader1Demo } from "./lyra/Loader1Demo";
import { Loader1RetroDemo } from "./retro/Loader1RetroDemo";
import { Loader1Code } from "./lyra/Loader1Code";
import { Loader1RetroCode } from "./retro/Loader1RetroCode";

const Loader1Wrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={Loader1RetroCode}
                replayButton={true}
            >
                <Loader1RetroDemo />
            </ComponentWrapper>
        );
    }

    // Default
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName=""
            codeSnippet={Loader1Code}
            replayButton={true}
        >
            <Loader1Demo />
        </ComponentWrapper>
    );
};

export default Loader1Wrapper;
