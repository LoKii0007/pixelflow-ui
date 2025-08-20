"use client";

import React from "react";
import Navbar1 from "./components/Navbar1";
import Navbar2 from "./components/Navbar2";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import ComponentHeading from "@/components/common/ComponentHeading";
import Navbar3 from "./components/Navbar3";

const Page = () => {
  return (
    <div className="container ">
      <ComponentHeading label="Navbars" description="Navbars" />

      <ComponentPageLayout>
        <Navbar3 className="col-span-2" />
        <Navbar1 />
        <Navbar2 />
      </ComponentPageLayout>
    </div>
  );
};

export default Page;
