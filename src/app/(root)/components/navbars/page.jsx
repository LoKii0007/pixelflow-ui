import React from "react";

import ComponentHeading from "@/components/common/ComponentHeading";
import { Navbar1Demo } from "@/components/features/navbars/Navbar1Demo";
import { Navbar2Demo } from "@/components/features/navbars/Navbar2Demo";
import { Navbar3Demo } from "@/components/features/navbars/Navbar3Demo";
import { Navbar4Demo } from "@/components/features/navbars/Navbar4Demo";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import ComponentWrapper from "@/components/common/ComponentWrapper";
import DocumentationLayout from "@/layouts/DocumentationLayout";
import Navbar1Code from "@/components/features/navbars/Navbar1Code";
import Navbar2Code from "@/components/features/navbars/Navbar2Code";
import { Navbar3Code } from "@/components/features/navbars/Navbar3Code";
import { Navbar4Code } from "@/components/features/navbars/Navbar4Code";

export const metadata = {
  title: "Modern Navbar Components | PixelFlow UI",
  description:
    "Explore our modern navbar components with smooth animations built using Framer Motion and GSAP. Ideal for navigation and responsive web interfaces.",
  keywords: [
    "navbar",
    "navigation bar",
    "React navbar",
    "Framer Motion navbar",
    "GSAP navbar",
    "UI components",
    "PixelFlow UI components",
  ],
  openGraph: {
    title: "Modern Navbar Components | PixelFlow UI",
    description:
      "A collection of clean, responsive, and animated navbar components built using Framer Motion and GSAP — part of the PixelFlow UI component library.",
    url: "https://pixelflow-ui.vercel.app/components/navbars",
    siteName: "PixelFlow UI",
    images: [
      {
        url: "https://pixelflow-ui.vercel.app/og/navbars.png",
        width: 1200,
        height: 630,
        alt: "Modern Navbar Components - PixelFlow UI",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Modern Navbar Components | PixelFlow UI",
    description:
      "A collection of sleek and animated navbar components for React using Framer Motion and GSAP.",
    // images: ["https://pixelflow-ui.vercel.app/og/navbars.png"],
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
      title: "GSAP",
      installation: "npm i gsap @gsap/react",
      link: false,
    },
  ];

  return (
    <div className="container">
      <ComponentHeading
        label="Navbars"
        description="A collection of modern navbar components with smooth animations built with Framer Motion and GSAP."
      />

      <ComponentPageLayout className={'grid-cols-1'}>
        <ComponentWrapper className="col-span-1" cardClassName={' !p-0'} codeSnippet={Navbar3Code}>
          <Navbar3Demo />
        </ComponentWrapper>
        <ComponentWrapper className="col-span-1" cardClassName={' bg-black !p-0'} codeSnippet={Navbar4Code}>
          <Navbar4Demo />
        </ComponentWrapper>
        <ComponentWrapper className="col-span-1" cardClassName={''} codeSnippet={Navbar1Code} replayButton={true}>
          <Navbar1Demo />
        </ComponentWrapper>
        <ComponentWrapper className="col-span-1" cardClassName={''} codeSnippet={Navbar2Code} replayButton={true}>
          <Navbar2Demo />
        </ComponentWrapper>
        <div className="col-span-1">
          <DocumentationLayout dependecies={dependecies} />
        </div>
      </ComponentPageLayout>
    </div>
  );
};

export default Page;
