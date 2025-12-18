import React from "react";

import ComponentHeading from "@/components/common/ComponentHeading";
import { List1Demo } from "@/components/features/lists/List1Demo";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import DocumentationLayout from "@/layouts/DocumentationLayout";
import { List1Code } from "@/components/features/lists/List1Code";

export const metadata = {
  title: "Modern List Component | PixelFlow UI",
  description:
    "Explore our modern list component with smooth animations built using Framer Motion. Ideal for interactive lists and data display.",
  keywords: [
    "list component",
    "animated list",
    "React list",
    "Framer Motion list",
    "UI components",
    "PixelFlow UI components",
  ],
  openGraph: {
    title: "Modern List Component | PixelFlow UI",
    description:
      "A clean, responsive, and animated list component built using Framer Motion — part of the PixelFlow UI component library.",
    url: "https://pixelflow-ui.vercel.app/components/lists",
    siteName: "PixelFlow UI",
    images: [
      {
        url: "https://pixelflow-ui.vercel.app/og/lists.png",
        width: 1200,
        height: 630,
        alt: "Modern List Component - PixelFlow UI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern List Component | PixelFlow UI",
    description:
      "A sleek and animated list component for React using Framer Motion.",
    // images: ["https://pixelflow-ui.vercel.app/og/lists.png"],
  },
};

const Page = () => {
  const dependecies = [
    {
      title: "Framer Motion",
      installation: "npm i framer-motion",
      link: false,
    },
  ];

  return (
    <div className="container">
      <ComponentHeading
        label="List"
        description="A modern list component with smooth animations built with Framer Motion."
      />

      <ComponentPageLayout className={'grid-cols-1 md:grid-cols-2'}>
        <ComponentWrapper className="col-span-1" cardClassName={'min-h-[400px] md:min-h-[250px]'} codeSnippet={List1Code} replayButton={true}>
          <List1Demo />
        </ComponentWrapper>
        <DocumentationLayout dependecies={dependecies} />
      </ComponentPageLayout>
    </div>
  );
};

export default Page;
