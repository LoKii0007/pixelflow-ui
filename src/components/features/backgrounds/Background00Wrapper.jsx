"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { Background00Demo } from "./lyra/Background00Demo";
import { Background00RetroDemo } from "./retro/Background00RetroDemo";
import { Background00Code } from "./lyra/Background00Code";
import { Background00RetroCode } from "./retro/Background00RetroCode";

const Background00Wrapper = () => {
    const { styleMode } = useThemeStore();

    // if (styleMode === "retro") {
    //     return (
    //         <ComponentWrapper
    //             className="col-span-1"
    //             cardClassName=""
    //             codeSnippet={Background00RetroCode}
    //         >
    //             <Background00RetroDemo />
    //         </ComponentWrapper>
    //     );
    // }

    // Default
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName={'bg-zinc-700/10'}
            codeSnippet={Background00Code}
        >
            <Background00Demo />
        </ComponentWrapper>
    );
};

export default Background00Wrapper;
