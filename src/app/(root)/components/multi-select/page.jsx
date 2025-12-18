import React from "react";

import ComponentHeading from "@/components/common/ComponentHeading";
import { MultiSelect1Demo } from "@/components/features/multi-select/MultiSelect1Demo";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import DocumentationLayout from "@/layouts/DocumentationLayout";
import { MultiSelect1Code } from "@/components/features/multi-select/MultiSelect1Code";
import {MultiSelect1Doc} from "@/components/features/multi-select/MultiSelectDoc";

export const metadata = {
  title: "Modern Multi-Select Component | PixelFlow UI",
  description:
    "Explore our modern multi-select component with smooth animations built using Radix UI. Ideal for selecting multiple options.",
  keywords: [
    "multi-select",
    "select component",
    "React select",
    "Radix UI select",
    "UI components",
    "PixelFlow UI components",
  ],
  openGraph: {
    title: "Modern Multi-Select Component | PixelFlow UI",
    description:
      "A clean, responsive, and animated multi-select component built using Radix UI — part of the PixelFlow UI component library.",
    url: "https://pixelflow-ui.vercel.app/components/multi-select",
    siteName: "PixelFlow UI",
    images: [
      {
        url: "https://pixelflow-ui.vercel.app/og/multi-select.png",
        width: 1200,
        height: 630,
        alt: "Modern Multi-Select Component - PixelFlow UI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Multi-Select Component | PixelFlow UI",
    description:
      "A sleek and animated multi-select component for React using Radix UI.",
    // images: ["https://pixelflow-ui.vercel.app/og/multi-select.png"],
  },
};

const Page = () => {
  const dependecies = [
    {
      title: "Radix UI",
      installation: "npm i @radix-ui/react-popover",
      link: false,
    },
  ];

  return (
    <div className="container">
      <ComponentHeading
        label="Multi select"
        description="A modern multi-select component with smooth animations built with Radix UI."
      />

      <ComponentPageLayout className={'grid-cols-1 md:grid-cols-2'}>
        <ComponentWrapper className="col-span-1" cardClassName={''} codeSnippet={MultiSelect1Code}>
          <MultiSelect1Demo />
        </ComponentWrapper>
        <div className="col-span-1">
          <DocumentationLayout dependecies={dependecies} />
          <MultiSelect1Doc />
        </div>
      </ComponentPageLayout>
    </div>
  );
};

export default Page;
