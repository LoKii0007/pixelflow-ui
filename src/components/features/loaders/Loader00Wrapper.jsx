"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { Loader00Demo } from "./lyra/Loader00Demo";
import { Loader00RetroDemo } from "./retro/Loader00RetroDemo";
import { Loader00Code } from "./lyra/Loader00Code";
import { Loader00RetroCode } from "./retro/Loader00RetroCode";

const Loader00Wrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={Loader00RetroCode}
                replayButton={true}
            >
                <Loader00RetroDemo />
            </ComponentWrapper>
        );
    }

    // Default
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName=""
            codeSnippet={Loader00Code}
            replayButton={true}
        >
            <Loader00Demo />
        </ComponentWrapper>
    );
};

export default Loader00Wrapper;
