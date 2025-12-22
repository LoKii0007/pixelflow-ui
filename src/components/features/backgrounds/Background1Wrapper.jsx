"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { Background1Demo } from "./lyra/Background1Demo";
import { Background1RetroDemo } from "./retro/Background1RetroDemo";
import { Background1Code } from "./lyra/Background1Code";
import { Background1RetroCode } from "./retro/Background1RetroCode";

const Background1Wrapper = () => {
    const { styleMode } = useThemeStore();

    // if (styleMode === "retro") {
    //     return (
    //         <ComponentWrapper
    //             className="col-span-1"
    //             cardClassName=""
    //             codeSnippet={Background1RetroCode}
    //         >
    //             <Background1RetroDemo />
    //         </ComponentWrapper>
    //     );
    // }

    // Default
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName={'bg-zinc-700/10'}
            codeSnippet={Background1Code}
        >
            <Background1Demo />
        </ComponentWrapper>
    );
};

export default Background1Wrapper;
