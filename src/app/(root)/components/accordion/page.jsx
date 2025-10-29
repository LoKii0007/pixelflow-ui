import React from "react";

import ComponentHeading from "@/components/common/ComponentHeading";
import { AccordionDemo } from "@/components/features/Accordion1";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import DocumentationLayout from "@/layouts/DocumentationLayout";
import { AccordionCode } from "./components/AccordionCode";

const Page = () => {
  const dependecies = [
    // {
    //   title: "ShadCN UI",
    //   installation: "https://ui.shadcn.com/docs/installation",
    //   link: true,
    // },
    {
      title: "Framer motion",
      installation: "npm i framer-motion",
      link: false,
    },
    {
      title: "Radix UI",
      installation: "npm i @radix-ui/react-dialog",
      link: false,
    },
  ];
  return (
    <div className="container ">
      <ComponentHeading label="Accordion" description="Accordion" />

      <ComponentPageLayout>
        <ComponentWrapper className={"col-span-2"} codeSnippet={AccordionCode}>
          <AccordionDemo />
        </ComponentWrapper>
        <DocumentationLayout dependecies={dependecies}/>
      </ComponentPageLayout>
    </div>
  );
};

export default Page;
