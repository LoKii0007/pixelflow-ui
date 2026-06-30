"use client";

import React from "react";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { ProximityText00Demo } from "./nova/ProximityText00Demo";
import ProximityText00Code from "./nova/ProximityText00Code";

const ProximityText00Wrapper = () => {
  return (
    <ComponentWrapper
      className="col-span-1"
      cardClassName="bg-black"
      codeSnippet={ProximityText00Code}
    >
      <ProximityText00Demo />
    </ComponentWrapper>
  );
};

export default ProximityText00Wrapper;
