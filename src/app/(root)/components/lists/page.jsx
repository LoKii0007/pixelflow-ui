"use client";

import React from "react";
import List1 from "./components/List1";
import List2 from "./components/List2";

const Page = () => {
  return (
    <div className="container ">
      <h1 className="text-3xl font-bold mb-6">List</h1>

      <div className="all-components w-full grid grid-cols-2 gap-12">
        <List1/>
        {/* <List2/> */}
      </div>
    </div>
  );
};

export default Page;
