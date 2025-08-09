import { create } from 'zustand';

// Initial list of components with their metadata
const initialComponents = [
  // {
  //   id: "button",
  //   name: "Button",
  //   description: "A clickable button element with various styles and states.",
  //   category: "inputs",
  //   path: "@/components/ui/button",
  // },
  {
    id: 'navbars',
    name: 'Navbars',
    description: 'A navigation bar component for site-wide navigation.',
    category: 'layout',
    path: '/components/navbars',
  },
  {
    id: 'lists',
    name: 'Lists',
    description: 'A list component for site-wide navigation.',
    category: 'layout',
    path: '/components/lists',
  },
  {
    id: 'backgrounds',
    name: 'Backgrounds',
    description: 'A background component for site-wide navigation.',
    category: 'layout',
    path: '/components/backgrounds',
  },
  // {
  //   id: 'footer',
  //   name: 'Footer',
  //   description: 'A footer component for site-wide navigation.',
  //   category: 'layout',
  //   path: '@/components/Footer',
  // },
  {
    id: 'inputs',
    name: 'Inputs',
    description: 'A input component for site-wide navigation.',
    category: 'layout',
    path: '/components/inputs',
  }
];

export const useComponentsStore = create((set) => ({
  // State
  components: initialComponents,

  // Actions
  setComponents: (newComponents) => set({ components: newComponents }),
  
  addComponent: (component) => set((state) => ({
    components: [...state.components, component]
  })),
  
  updateComponent: (id, updates) => set((state) => ({
    components: state.components.map(component => 
      component.id === id ? { ...component, ...updates } : component
    )
  })),
  
  removeComponent: (id) => set((state) => ({
    components: state.components.filter(component => component.id !== id)
  })),
}));
