import React from "react";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import ComponentHeading from "@/components/common/ComponentHeading";
import Loader1 from "./components/Loader1";

const Page = () => {
  return (
    <div className="container ">
      <ComponentHeading label="Loaders" description="Loaders" />

      <ComponentPageLayout>
        <Loader1 />
      </ComponentPageLayout>
    </div>
  );
};

export default Page;
