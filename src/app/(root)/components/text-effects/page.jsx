import React from "react";

import ComponentHeading from "@/components/common/ComponentHeading";
import ComponentPageLayout from "@/layouts/ComponentPageLayout";
import DocumentationLayout from "@/layouts/DocumentationLayout";
import ProximityTextWrapper from "@/components/features/text-effects/ProximityTextWrapper";

export const metadata = {
  title: "Text Effects | PixelFlow UI",
  description:
    "A collection of interactive text effects and kinetic typography for React, including cursor-reactive variable font weight animations.",
  keywords: [
    "text effects",
    "kinetic typography",
    "variable font",
    "proximity text",
    "react text animation",
    "PixelFlow UI components",
  ],
  openGraph: {
    title: "Text Effects | PixelFlow UI",
    description:
      "Interactive text effects and kinetic typography for React — part of the PixelFlow UI component library.",
    url: "https://pixelflow-ui.vercel.app/components/text-effects",
    siteName: "PixelFlow UI",
    locale: "en_US",
    type: "website",
  },
};

const Page = () => {
  const dependecies = [];

  const usage = [
    {
      title: "Load Inter as a variable font",
      description:
        "This effect interpolates font-weight from 400 to 900 on hover, so it needs a variable font. Add Inter in your root layout and expose it as a CSS variable.",
      code: `import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});`,
    },
    {
      title: "Apply the font variable on <body>",
      description:
        "Add the generated variable class so --font-inter is available everywhere the effect is used.",
      code: `<body className={\`\${inter.variable}\`}>{children}</body>`,
    },
    {
      title: "Register a font-inter utility",
      description:
        "Map the CSS variable to a Tailwind font-family utility so the letters use the variable font (a bare font-(--font-inter) won't generate font-family in Tailwind v4).",
      code: `// tailwind.config.js
theme: {
  extend: {
    fontFamily: {
      inter: ["var(--font-inter)"],
    },
  },
}`,
    },
    {
      title: "Drop in the component",
      description:
        "Copy the code from the Code tab above and render it. Hover across the text — letters nearest the cursor get heavier.",
      code: `<ProximityText text="Hover over me" />`,
    },
  ];

  return (
    <div className="container">
      <ComponentHeading
        label="Text Effects"
        description="A collection of interactive text effects and kinetic typography that respond to the user's cursor."
      />

      <ComponentPageLayout className={"grid-cols-1"}>
        <ProximityTextWrapper />
        <div className="col-span-1">
          <DocumentationLayout dependecies={dependecies} usage={usage} />
        </div>
      </ComponentPageLayout>
    </div>
  );
};

export default Page;
