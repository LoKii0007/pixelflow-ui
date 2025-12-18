import React from "react";

import ComponentHeading from "@/components/common/ComponentHeading";
import { ButtonDemo } from "@/components/features/buttons/ButtonDemo";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import DocumentationLayout from "@/layouts/DocumentationLayout";
import { Button1Code } from "@/components/features/buttons/Button1Code";


export const metadata = {
  title: "Modern Button Component | PixelFlow UI",
  description:
    "Explore our modern and customizable button component built with React. Ideal for interactive and responsive web interfaces.",
  keywords: [
    "modern button",
    "React button",
    "UI button",
    "button component",
    "UI components",
    "PixelFlow UI components",
  ],
  openGraph: {
    title: "Modern Button Component | PixelFlow UI",
    description:
      "A clean, responsive, and customizable button component — part of the PixelFlow UI component library.",
    url: "https://pixelflow-ui.vercel.app/components/buttons",
    siteName: "PixelFlow UI",
    images: [
      {
        url: "https://pixelflow-ui.vercel.app/og/buttons.png",
        width: 1200,
        height: 630,
        alt: "Modern Button Component - PixelFlow UI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Button Component | PixelFlow UI",
    description:
      "A sleek and customizable button component for React.",
    // images: ["https://pixelflow-ui.vercel.app/og/buttons.png"],
  },
};

const Page = () => {
  const dependecies = [];

  return (
    <div className="container">
      <ComponentHeading
        label="Button"
        description="A modern and customizable button component built with React."
      />

      <ComponentPageLayout className={'grid-cols-2'}>
        <ComponentWrapper className="col-span-1" cardClassName={''} codeSnippet={Button1Code}>
          <ButtonDemo />
        </ComponentWrapper>
        <DocumentationLayout dependecies={dependecies} />
      </ComponentPageLayout>
    </div>
  );
};

export default Page;

