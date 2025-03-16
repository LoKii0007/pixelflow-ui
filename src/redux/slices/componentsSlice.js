import { createSlice } from "@reduxjs/toolkit";

// Initial list of components with their metadata
const initialComponents = [
  {
    id: "button",
    name: "Button",
    description: "A clickable button element with various styles and states.",
    category: "inputs",
    path: "@/components/ui/button",
  },
  // {
  //   id: "input",
  //   name: "Input",
  //   description: "A form input component for text entry.",
  //   category: "inputs",
  //   path: "@/components/ui/input",
  // },
  // {
  //   id: "dialog",
  //   name: "Dialog",
  //   description:
  //     "A modal dialog that interrupts the user with important content.",
  //   category: "overlay",
  //   path: "@/components/ui/dialog",
  // },
  // {
  //   id: "navbar",
  //   name: "Navbar",
  //   description: "Navigation bar component for site-wide navigation.",
  //   category: "layout",
  //   path: "@/components/Navbar",
  // },
  // {
  //   id: "sidebar",
  //   name: "Sidebar",
  //   description: "Side navigation component for contextual navigation.",
  //   category: "layout",
  //   path: "@/components/Sidebar",
  // },
];

export const componentsSlice = createSlice({
  name: "components",
  initialState: initialComponents,
  reducers: {
    setComponents: (state, action) => {
      state.components = action.payload;
    },
  },
});

export const { setComponents } = componentsSlice.actions;

export default componentsSlice.reducer;
