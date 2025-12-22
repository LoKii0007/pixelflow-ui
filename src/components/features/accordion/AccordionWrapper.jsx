"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { AccordionNovaDemo } from "./nova/AccordionNovaDemo";
import AccordionNovaCode from "./nova/AccordionNovaCode";
import { AccordionRetroDemo } from "./retro/AccordionRetroDemo";
import { AccordionRetroCode } from "./retro/AccordionRetroCode";
import { AccordionLyraDemo } from "./lyra/AccordionLyraDemo";
import AccordionLyraCode from "./lyra/AccordionLyraCode";

const AccordionWrapper = () => {
    const { styleMode } = useThemeStore();

    if (styleMode === "retro") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName=""
                codeSnippet={AccordionRetroCode}
            >
                <AccordionRetroDemo />
            </ComponentWrapper>
        );
    }

    if (styleMode === "nova") {
        return (
            <ComponentWrapper
                className="col-span-1"
                cardClassName={''}
                codeSnippet={AccordionNovaCode}
            >
                <AccordionNovaDemo />
            </ComponentWrapper>
        );
    }

    // Default to Lyra
    return (
        <ComponentWrapper
            className="col-span-1"
            cardClassName={''}
            codeSnippet={AccordionLyraCode}
        >
            <AccordionLyraDemo />
        </ComponentWrapper>
    );
};

export default AccordionWrapper;
