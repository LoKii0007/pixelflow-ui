"use client";

import React from "react";
import { useThemeStore } from "@/stores/themeStore";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { Slider00LyraDemo } from "./lyra/Slider00LyraDemo";
import { Slider00LyraCode } from "./lyra/Slider00LyraCode";
import { Slider00NovaDemo } from "./nova/Slider00NovaDemo";
import { Slider00NovaCode } from "./nova/Slider00NovaCode";
import { Slider00RetroDemo } from "./retro/Slider00RetroDemo";
import { Slider00RetroCode } from "./retro/Slider00RetroCode";

const Slider00Wrapper = () => {
  const { styleMode } = useThemeStore();

  if (styleMode === "retro") {
    return (
      <ComponentWrapper
        className="col-span-1"
        cardClassName=""
        codeSnippet={Slider00RetroCode}
      >
        <Slider00RetroDemo />
      </ComponentWrapper>
    );
  }

  if (styleMode === "nova") {
    return (
      <ComponentWrapper
        className="col-span-1"
        cardClassName=""
        codeSnippet={Slider00NovaCode}
      >
        <Slider00NovaDemo />
      </ComponentWrapper>
    );
  }

  return (
    <ComponentWrapper
      className="col-span-1"
      cardClassName=""
      codeSnippet={Slider00LyraCode}
    >
      <Slider00LyraDemo />
    </ComponentWrapper>
  );
};

export default Slider00Wrapper;
