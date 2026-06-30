"use client";

// Maps every component item id (see src/lib/components-data.js) to the
// client wrapper that renders its preview + code. Also exposes any extra
// documentation blocks that belong to a category.

import Navbar00Wrapper from "@/components/features/navbars/Navbar00Wrapper";
import Navbar01Wrapper from "@/components/features/navbars/Navbar01Wrapper";
import Navbar02Wrapper from "@/components/features/navbars/Navbar02Wrapper";
import Navbar03Wrapper from "@/components/features/navbars/Navbar03Wrapper";
import Accordion00Wrapper from "@/components/features/accordion/Accordion00Wrapper";
import List00Wrapper from "@/components/features/lists/List00Wrapper";
import Background00Wrapper from "@/components/features/backgrounds/Background00Wrapper";
import MultiSelect00Wrapper from "@/components/features/multi-select/MultiSelect00Wrapper";
import BouncyInput00Wrapper from "@/components/features/inputs/BouncyInput00Wrapper";
import Loader00Wrapper from "@/components/features/loaders/Loader00Wrapper";
import StatusElevation00Wrapper from "@/components/features/status-elevation/StatusElevation00Wrapper";
import ProximityText00Wrapper from "@/components/features/text-effects/ProximityText00Wrapper";
import Slider00Wrapper from "@/components/features/sliders/Slider00Wrapper";
import { MultiSelect00Doc } from "@/components/features/multi-select/MultiSelect00Doc";

export const wrapperRegistry = {
  "navbar-00": Navbar00Wrapper,
  "navbar-01": Navbar01Wrapper,
  "navbar-02": Navbar02Wrapper,
  "navbar-03": Navbar03Wrapper,
  "accordion-00": Accordion00Wrapper,
  "list-00": List00Wrapper,
  "background-00": Background00Wrapper,
  "multi-select-00": MultiSelect00Wrapper,
  "bouncy-input-00": BouncyInput00Wrapper,
  "loader-00": Loader00Wrapper,
  "status-elevation-00": StatusElevation00Wrapper,
  "proximity-text-00": ProximityText00Wrapper,
  "slider-00": Slider00Wrapper,
};

// Extra documentation blocks keyed by category id.
export const extraDocRegistry = {
  "multi-select": MultiSelect00Doc,
};
