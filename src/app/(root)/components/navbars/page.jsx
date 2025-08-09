"use client";

import React from "react";

import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";

const Page = () => {
  return (
    <div className="container ">
      <h1 className="text-3xl font-bold mb-6">Navbars</h1>

      <div className="all-components w-full grid grid-cols-2 gap-12">
        <Navbar1 />
        <Navbar2 />
      </div>
    </div>
  );
};

export default Page;
