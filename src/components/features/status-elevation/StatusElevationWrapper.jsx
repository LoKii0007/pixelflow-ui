"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { StatusElevationNovaDemo } from "./nova/StatusElevationNovaDemo";
import { StatusElevationLyraDemo } from "./lyra/StatusElevationLyraDemo";
import { StatusElevationRetroDemo } from "./retro/StatusElevationRetroDemo";
import StatusElevationNovaCode from "./nova/StatusElevationNovaCode";
import StatusElevationLyraCode from "./lyra/StatusElevationLyraCode";
import StatusElevationRetroCode from "./retro/StatusElevationRetroCode";

const StatusElevationWrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={StatusElevationRetroCode}
            >
                <StatusElevationRetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "nova") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName={"min-h-[500px]"}
                codeSnippet={StatusElevationNovaCode}
            >
                <StatusElevationNovaDemo />
            </ComponentWrapper>
        );
    }

    // Default to Lyra
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName={"min-h-[500px]"}
            codeSnippet={StatusElevationLyraCode}
        >
            <StatusElevationLyraDemo />
        </ComponentWrapper>
    );
};

export default StatusElevationWrapper;
