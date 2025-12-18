import React from "react";

import ComponentHeading from "@/components/common/ComponentHeading";
import { AccordionDemo } from "@/components/features/accordion/AccordionDemo";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import DocumentationLayout from "@/layouts/DocumentationLayout";
import { AccordionCode } from "@/components/features/accordion/AccordionCode";

export const metadata = {
  title: "Modern Smooth Animated Accordion | PixelFlow UI",
  description:
    "Explore our modern, smooth, and fully animated accordion component built using Framer Motion and Radix UI. Ideal for interactive and responsive web interfaces.",
  keywords: [
    "modern accordion",
    "animated accordion",
    "smooth accordion",
    "React accordion",
    "Framer Motion accordion",
    "Radix UI accordion",
    "UI components",
    "PixelFlow UI components",
  ],
  openGraph: {
    title: "Modern Smooth Animated Accordion | PixelFlow UI",
    description:
      "A clean, responsive, and animated accordion built using Framer Motion & Radix UI — part of the PixelFlow UI component library.",
    url: "https://pixelflow-ui.vercel.app/components/accordion",
    siteName: "PixelFlow UI",
    images: [
      {
        url: "https://pixelflow-ui.vercel.app/og/accordion.png",
        width: 1200,
        height: 630,
        alt: "Modern Smooth Animated Accordion - PixelFlow UI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Smooth Animated Accordion | PixelFlow UI",
    description:
      "A sleek, smooth, and animated accordion component for React using Framer Motion and Radix UI.",
    // images: ["https://pixelflow-ui.vercel.app/og/accordion.png"],
  },
};

const Page = () => {
  const dependecies = [
    {
      title: "Framer Motion",
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
    <div className="container">
      <ComponentHeading
        label="Accordion"
        description="A modern, smooth, and animated accordion component built with Framer Motion and Radix UI."
      />

      <ComponentPageLayout className={'grid-cols-1'}>
        <ComponentWrapper className="col-span-1" cardClassName={''} codeSnippet={AccordionCode}>
          <AccordionDemo />
        </ComponentWrapper>
        <DocumentationLayout dependecies={dependecies} />
      </ComponentPageLayout>
    </div>
  );
};

export default Page;
