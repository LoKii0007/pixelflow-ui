"use client";

import React from "react";
import Background1 from "./components/Background1";
import ComponentHeading from "@/components/common/ComponentHeading";

const Page = () => {
  return (
    <div className="container ">
      <ComponentHeading label="Backgrounds" description="Backgrounds" />

      <div className="all-components w-full grid grid-cols-1 gap-12">
        <Background1 />
      </div>
    </div>
  );
};

export default Page;
