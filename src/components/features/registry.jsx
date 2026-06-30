"use client";

// Maps every component item id (see src/lib/components-data.js) to the
// client wrapper that renders its preview + code. Also exposes any extra
// documentation blocks that belong to a category.

import Navbar1Wrapper from "@/components/features/navbars/Navbar1Wrapper";
import Navbar2Wrapper from "@/components/features/navbars/Navbar2Wrapper";
import Navbar3Wrapper from "@/components/features/navbars/Navbar3Wrapper";
import Navbar4Wrapper from "@/components/features/navbars/Navbar4Wrapper";
import AccordionWrapper from "@/components/features/accordion/AccordionWrapper";
import List1Wrapper from "@/components/features/lists/List1Wrapper";
import Background1Wrapper from "@/components/features/backgrounds/Background1Wrapper";
import MultiSelectWrapper from "@/components/features/multi-select/MultiSelectWrapper";
import BouncyInputWrapper from "@/components/features/inputs/BouncyInputWrapper";
import Loader1Wrapper from "@/components/features/loaders/Loader1Wrapper";
import StatusElevationWrapper from "@/components/features/status-elevation/StatusElevationWrapper";
import ProximityTextWrapper from "@/components/features/text-effects/ProximityTextWrapper";
import { MultiSelect1Doc } from "@/components/features/multi-select/MultiSelectDoc";

export const wrapperRegistry = {
  "navbar-1": Navbar1Wrapper,
  "navbar-2": Navbar2Wrapper,
  "navbar-3": Navbar3Wrapper,
  "navbar-4": Navbar4Wrapper,
  "accordion-1": AccordionWrapper,
  "list-1": List1Wrapper,
  "background-1": Background1Wrapper,
  "multi-select-1": MultiSelectWrapper,
  "bouncy-input": BouncyInputWrapper,
  "loader-1": Loader1Wrapper,
  "status-elevation-1": StatusElevationWrapper,
  "proximity-text": ProximityTextWrapper,
};

// Extra documentation blocks keyed by category id.
export const extraDocRegistry = {
  "multi-select": MultiSelect1Doc,
};
