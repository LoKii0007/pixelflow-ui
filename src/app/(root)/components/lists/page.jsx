import React from "react";
import List1 from "./components/List1";
import List2 from "./components/List2";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import ComponentHeading from "@/components/common/ComponentHeading";

const Page = () => {
  return (
    <div className="container ">
      <ComponentHeading label="List" description="List" />

      <ComponentPageLayout>
        <List1/>
        {/* <List2/> */}
      </ComponentPageLayout>
    </div>
  );
};

export default Page;
