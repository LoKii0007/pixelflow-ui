"use client";

import React from "react";
import Background1 from "./components/Background1";

const Page = () => {
  return (
    <div className="container ">
      <h1 className="text-3xl font-bold mb-6">Backgrounds</h1>

      <div className="all-components w-full grid grid-cols-1 gap-12">
        <Background1 />
      </div>
    </div>
  );
};

export default Page;
