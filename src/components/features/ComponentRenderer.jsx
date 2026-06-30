"use client";

import React from "react";
import ComponentHeading from "@/components/common/ComponentHeading";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import DocumentationLayout from "@/layouts/DocumentationLayout";
import Installation from "@/components/features/Installation";
import { wrapperRegistry, extraDocRegistry } from "@/components/features/registry";

// Renders a single component (one item per page). `category` and `item`
// are plain serializable objects coming from src/lib/components-data.js.
const ComponentRenderer = ({ category, item }) => {
  const Wrapper = wrapperRegistry[item.id];
  const ExtraDoc = category.extraDoc ? extraDocRegistry[category.extraDoc] : null;
  const usage = item.usage || category.usage || [];
  const dependencies = category.dependencies || [];

  if (!Wrapper) {
    return (
      <div className="container">
        <ComponentHeading label={item.name} />
        <p className="text-gray-400">This component is not available.</p>
      </div>
    );
  }

  return (
    <div className="container">
      <ComponentHeading label={item.name} description={item.description} />

      <ComponentPageLayout className={"grid-cols-1"}>
        <Wrapper />
        <div className="col-span-1 flex flex-col gap-12">
          <Installation item={item} />
          <DocumentationLayout dependecies={dependencies} usage={usage} />
          {ExtraDoc && <ExtraDoc />}
        </div>
      </ComponentPageLayout>
    </div>
  );
};

export default ComponentRenderer;
