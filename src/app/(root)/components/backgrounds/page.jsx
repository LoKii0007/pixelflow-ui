import React from "react";

import ComponentHeading from "@/components/common/ComponentHeading";
// import { Background1Demo } from "@/components/features/backgrounds/Background1Demo";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import DocumentationLayout from "@/layouts/DocumentationLayout";
// import { Background1Code } from "@/components/features/backgrounds/Background1Code";
import Background1Wrapper from "@/components/features/backgrounds/Background1Wrapper";

export const metadata = {
  title: "Modern Background Component | PixelFlow UI",
  description:
    "Explore our modern background component with animated gradients. Ideal for creating dynamic and engaging backgrounds.",
  keywords: [
    "background",
    "animated background",
    "gradient background",
    "React background",
    "UI components",
    "PixelFlow UI components",
  ],
  openGraph: {
    title: "Modern Background Component | PixelFlow UI",
    description:
      "A clean, responsive, and animated background component — part of the PixelFlow UI component library.",
    url: "https://pixelflow-ui.vercel.app/components/backgrounds",
    siteName: "PixelFlow UI",
    images: [
      {
        url: "https://pixelflow-ui.vercel.app/og/backgrounds.png",
        width: 1200,
        height: 630,
        alt: "Modern Background Component - PixelFlow UI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Background Component | PixelFlow UI",
    description:
      "A sleek and animated background component for React.",
    // images: ["https://pixelflow-ui.vercel.app/og/backgrounds.png"],
  },
};

const Page = () => {
  const dependecies = [];

  return (
    <div className="container">
      <ComponentHeading
        label="Backgrounds"
        description="A modern background component with animated gradients."
      />

      <ComponentPageLayout className={'grid-cols-1'}>
        <Background1Wrapper />
        <DocumentationLayout dependecies={dependecies} />
      </ComponentPageLayout>
    </div>
  );
};

export default Page;
