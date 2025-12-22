import React from "react";

import ComponentHeading from "@/components/common/ComponentHeading";
// import { Loader1Demo } from "@/components/features/loaders/Loader1Demo";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import DocumentationLayout from "@/layouts/DocumentationLayout";
// import { Loader1Code } from "@/components/features/loaders/Loader1Code";
import Loader1Wrapper from "@/components/features/loaders/Loader1Wrapper";

export const metadata = {
  title: "Modern Loader Component | PixelFlow UI",
  description:
    "Explore our modern loader component with smooth animations. Ideal for loading states and progress indicators.",
  keywords: [
    "loader",
    "loading animation",
    "React loader",
    "progress loader",
    "UI components",
    "PixelFlow UI components",
  ],
  openGraph: {
    title: "Modern Loader Component | PixelFlow UI",
    description:
      "A clean, responsive, and animated loader component — part of the PixelFlow UI component library.",
    url: "https://pixelflow-ui.vercel.app/components/loaders",
    siteName: "PixelFlow UI",
    images: [
      {
        url: "https://pixelflow-ui.vercel.app/og/loaders.png",
        width: 1200,
        height: 630,
        alt: "Modern Loader Component - PixelFlow UI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Loader Component | PixelFlow UI",
    description:
      "A sleek and animated loader component for React.",
    // images: ["https://pixelflow-ui.vercel.app/og/loaders.png"],
  },
};

const Page = () => {
  const dependecies = [];

  return (
    <div className="container">
      <ComponentHeading
        label="Loaders"
        description="A modern loader component with smooth animations for loading states."
      />

      <ComponentPageLayout className={'grid-cols-1'}>
        <Loader1Wrapper />
        <DocumentationLayout dependecies={dependecies} />
      </ComponentPageLayout>
    </div>
  );
};

export default Page;
