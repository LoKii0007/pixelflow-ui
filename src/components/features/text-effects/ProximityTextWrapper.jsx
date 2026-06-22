"use client";

import React from "react";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import { ProximityTextDemo } from "./nova/ProximityTextDemo";
import ProximityTextCode from "./nova/ProximityTextCode";

const ProximityTextWrapper = () => {
  return (
    <ComponentWrapper
      className="col-span-1"
      cardClassName="bg-black"
      codeSnippet={ProximityTextCode}
    >
      <ProximityTextDemo />
    </ComponentWrapper>
  );
};

export default ProximityTextWrapper;
