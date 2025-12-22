import React from "react";

import ComponentHeading from "@/components/common/ComponentHeading";
// import { BouncyInputDemo } from "@/components/features/inputs/BouncyInputDemo";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import DocumentationLayout from "@/layouts/DocumentationLayout";
// import { BouncyInputCode } from "@/components/features/inputs/BouncyInputCode";
import BouncyInputWrapper from "@/components/features/inputs/BouncyInputWrapper";

export const metadata = {
  title: "Bouncy Input Component | PixelFlow UI",
  description:
    "Explore our modern bouncy input component with smooth animations built using Framer Motion. Ideal for interactive and responsive web interfaces.",
  keywords: [
    "bouncy input",
    "animated input",
    "React input",
    "Framer Motion input",
    "UI components",
    "PixelFlow UI components",
  ],
  openGraph: {
    title: "Bouncy Input Component | PixelFlow UI",
    description:
      "A clean, responsive, and animated input component built using Framer Motion — part of the PixelFlow UI component library.",
    url: "https://pixelflow-ui.vercel.app/components/inputs",
    siteName: "PixelFlow UI",
    images: [
      {
        url: "https://pixelflow-ui.vercel.app/og/inputs.png",
        width: 1200,
        height: 630,
        alt: "Bouncy Input Component - PixelFlow UI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Bouncy Input Component | PixelFlow UI",
    description:
      "A sleek and animated input component for React using Framer Motion.",
    // images: ["https://pixelflow-ui.vercel.app/og/inputs.png"],
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
        label="Inputs"
        description="A modern bouncy input component with smooth animations built with Framer Motion."
      />

      <ComponentPageLayout className={'grid-cols-1 md:grid-cols-1'}>
        <BouncyInputWrapper />
        <DocumentationLayout dependecies={dependecies} />
      </ComponentPageLayout>
    </div>
  );
};

export default Page;
