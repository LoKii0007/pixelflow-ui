import { create } from "zustand";
import { componentCategories } from "@/lib/components-data";

// The store is seeded from the central, server-safe component definitions so
// the sidebar, mobile sidebar and search stay in sync with the routes. Each
// entry carries an `items` array holding the individual components nested
// inside that category.
const initialComponents = componentCategories;

export const useComponentsStore = create((set) => ({
  // State
  components: initialComponents,

  // Actions
  setComponents: (newComponents) => set({ components: newComponents }),

  addComponent: (component) =>
    set((state) => ({
      components: [...state.components, component],
    })),

  updateComponent: (id, updates) =>
    set((state) => ({
      components: state.components.map((component) =>
        component.id === id ? { ...component, ...updates } : component,
      ),
    })),

  removeComponent: (id) =>
    set((state) => ({
      components: state.components.filter((component) => component.id !== id),
    })),
}));
