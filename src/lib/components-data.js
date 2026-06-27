// Central, server-safe definition of every component category and the
// individual components nested inside it. Each category renders as an
// expandable group in the sidebar, and every item gets its own page at
// /components/<categoryId>/<itemId>.
//
// This module must stay free of any client-only imports (no "use client",
// no zustand) so it can be consumed by both server components (route
// metadata, static params) and client components (sidebars, store).

const textEffectsUsage = [
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

export const componentCategories = [
  {
    id: "navbars",
    name: "Navbars",
    category: "layout",
    path: "/components/navbars",
    description:
      "A collection of modern navbar components with smooth animations built with Framer Motion and GSAP.",
    dependencies: [
      { title: "Framer Motion", installation: "npm i framer-motion", link: false },
      { title: "GSAP", installation: "npm i gsap @gsap/react", link: false },
    ],
    items: [
      {
        id: "navbar-1",
        name: "Navbar 1",
        description:
          "An animated navbar component built with Framer Motion and GSAP.",
      },
      {
        id: "navbar-2",
        name: "Navbar 2",
        description:
          "An animated navbar component built with Framer Motion and GSAP.",
      },
      {
        id: "navbar-3",
        name: "Navbar 3",
        description:
          "An animated navbar component built with Framer Motion and GSAP.",
      },
      {
        id: "navbar-4",
        name: "Navbar 4",
        description:
          "An animated navbar component built with Framer Motion and GSAP.",
      },
    ],
    metadata: {
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
    },
  },
  {
    id: "accordion",
    name: "Accordion",
    category: "layout",
    path: "/components/accordion",
    description:
      "A modern, smooth, and animated accordion component built with Framer Motion and Radix UI.",
    dependencies: [
      { title: "Framer Motion", installation: "npm i framer-motion", link: false },
      { title: "Radix UI", installation: "npm i @radix-ui/react-dialog", link: false },
    ],
    items: [
      {
        id: "accordion-1",
        name: "Accordion 1",
        description:
          "A modern, smooth, and animated accordion component built with Framer Motion and Radix UI.",
      },
    ],
    metadata: {
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
    },
  },
  {
    id: "lists",
    name: "Lists",
    category: "layout",
    path: "/components/lists",
    description:
      "A modern list component with smooth animations built with Framer Motion.",
    dependencies: [
      { title: "Framer Motion", installation: "npm i framer-motion", link: false },
    ],
    items: [
      {
        id: "list-1",
        name: "List 1",
        description:
          "A modern list component with smooth animations built with Framer Motion.",
      },
    ],
    metadata: {
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
    },
  },
  {
    id: "backgrounds",
    name: "Backgrounds",
    category: "layout",
    path: "/components/backgrounds",
    description: "A modern background component with animated gradients.",
    dependencies: [],
    items: [
      {
        id: "background-1",
        name: "Background 1",
        description: "A modern background component with animated gradients.",
      },
    ],
    metadata: {
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
    },
  },
  {
    id: "multi-select",
    name: "Multi Select",
    category: "layout",
    path: "/components/multi-select",
    description:
      "A modern multi-select component with smooth animations built with Radix UI.",
    dependencies: [
      { title: "Radix UI", installation: "npm i @radix-ui/react-popover", link: false },
    ],
    extraDoc: "multi-select",
    items: [
      {
        id: "multi-select-1",
        name: "Multi Select 1",
        description:
          "A modern multi-select component with smooth animations built with Radix UI.",
      },
    ],
    metadata: {
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
    },
  },
  {
    id: "inputs",
    name: "Inputs",
    category: "layout",
    path: "/components/inputs",
    description:
      "A modern bouncy input component with smooth animations built with Framer Motion.",
    dependencies: [
      { title: "Framer Motion", installation: "npm i framer-motion", link: false },
    ],
    items: [
      {
        id: "bouncy-input",
        name: "Bouncy Input",
        description:
          "A modern bouncy input component with smooth animations built with Framer Motion.",
      },
    ],
    metadata: {
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
    },
  },
  {
    id: "loaders",
    name: "Loaders",
    category: "layout",
    path: "/components/loaders",
    description:
      "A modern loader component with smooth animations for loading states.",
    dependencies: [],
    items: [
      {
        id: "loader-1",
        name: "Loader 1",
        description:
          "A modern loader component with smooth animations for loading states.",
      },
    ],
    metadata: {
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
    },
  },
  {
    id: "status-elevation",
    name: "Status Elevation",
    category: "layout",
    path: "/components/status-elevation",
    description:
      "A priority queue component that smoothly re-orders items based on their status priority using layout animations.",
    dependencies: [
      { title: "Motion", installation: "npm i motion", link: false },
      { title: "Lucide React", installation: "npm i lucide-react", link: false },
    ],
    items: [
      {
        id: "status-elevation-1",
        name: "Status Elevation 1",
        description:
          "A priority queue component that smoothly re-orders items based on their status priority using layout animations.",
      },
    ],
    metadata: {
      title: "Status Elevation | PixelFlow UI",
      description:
        "An animated priority queue component that re-orders items based on status priority with smooth layout animations.",
      keywords: [
        "status elevation",
        "priority queue",
        "animated list",
        "react status",
        "framer motion layout",
        "PixelFlow UI components",
      ],
    },
  },
  {
    id: "text-effects",
    name: "Text Effects",
    category: "layout",
    path: "/components/text-effects",
    description:
      "A collection of interactive text effects and kinetic typography that respond to the user's cursor.",
    dependencies: [],
    usage: textEffectsUsage,
    items: [
      {
        id: "proximity-text",
        name: "Proximity Text",
        description:
          "Cursor-reactive kinetic typography that interpolates variable font weight based on proximity.",
        usage: textEffectsUsage,
      },
    ],
    metadata: {
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
    },
  },
];

// Convenience lookups
export const getCategory = (categoryId) =>
  componentCategories.find((c) => c.id === categoryId);

export const getItem = (categoryId, itemId) => {
  const category = getCategory(categoryId);
  if (!category) return undefined;
  return category.items.find((i) => i.id === itemId);
};
