"use client";

import React from "react";
import BouncyInput from "./components/BouncyInput";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import ComponentHeading from "@/components/common/ComponentHeading";

const Page = () => {
  return (
    <div className="container">
      <ComponentHeading label="Inputs" description="Inputs" />

      <ComponentPageLayout>
        <BouncyInput />
      </ComponentPageLayout>
    </div>
  );
};

export default Page;
