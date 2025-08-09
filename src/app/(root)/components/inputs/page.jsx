"use client";

import React from "react";
import BouncyInput from "./components/BouncyInput";

const Page = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-bold mb-6">Inputs</h1>

      <div className="all-components w-full grid grid-cols-2 gap-12">
        <BouncyInput/>
      </div>
    </div>
  );
};

export default Page;
