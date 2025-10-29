import React from "react";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import ComponentHeading from "@/components/common/ComponentHeading";
import MultiSelect1Page from "./components/MultiSelect1Page";
import MultiSelect1Doc from "./components/MultiSelect1Doc";

const Page = () => {
  return (
    <div className="container ">
      <ComponentHeading label="Multi select" description="Multi select" />

      <ComponentPageLayout>
        <div className="flex flex-col col-span-2 gap-6">
          <MultiSelect1Page className="col-span-2" />
          <MultiSelect1Doc />
        </div>
      </ComponentPageLayout>
    </div>
  );
};

export default Page;
