import React from "react";

import ComponentHeading from "@/components/common/ComponentHeading";

import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import DocumentationLayout from "@/layouts/DocumentationLayout";
import Navbar1Wrapper from "@/components/features/navbars/Navbar1Wrapper";
import Navbar2Wrapper from "@/components/features/navbars/Navbar2Wrapper";
import Navbar3Wrapper from "@/components/features/navbars/Navbar3Wrapper";
import Navbar4Wrapper from "@/components/features/navbars/Navbar4Wrapper";

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
        <Navbar3Wrapper />
        <Navbar4Wrapper />
        <Navbar1Wrapper />
        <Navbar2Wrapper />
        <div className="col-span-1">
          <DocumentationLayout dependecies={dependecies} />
        </div>
      </ComponentPageLayout>
    </div>
  );
};

export default Page;
