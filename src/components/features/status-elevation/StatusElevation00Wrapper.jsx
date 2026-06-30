"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { StatusElevation00NovaDemo } from "./nova/StatusElevation00NovaDemo";
import { StatusElevation00LyraDemo } from "./lyra/StatusElevation00LyraDemo";
import { StatusElevation00RetroDemo } from "./retro/StatusElevation00RetroDemo";
import StatusElevation00NovaCode from "./nova/StatusElevation00NovaCode";
import StatusElevation00LyraCode from "./lyra/StatusElevation00LyraCode";
import StatusElevation00RetroCode from "./retro/StatusElevation00RetroCode";

const StatusElevation00Wrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={StatusElevation00RetroCode}
            >
                <StatusElevation00RetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "nova") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName={"min-h-[500px]"}
                codeSnippet={StatusElevation00NovaCode}
            >
                <StatusElevation00NovaDemo />
            </ComponentWrapper>
        );
    }

    // Default to Lyra
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName={"min-h-[500px]"}
            codeSnippet={StatusElevation00LyraCode}
        >
            <StatusElevation00LyraDemo />
        </ComponentWrapper>
    );
};

export default StatusElevation00Wrapper;
