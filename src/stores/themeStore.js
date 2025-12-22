import { create } from "zustand";
import { persist } from "zustand/middleware";
import { STYLE_MODES, Theme } from "@/lib/constants";

export const useThemeStore = create(
  persist(
    (set, get) => ({
      theme: "dark",

      // Actions
      setTheme: (newTheme) => {
        set({
          theme: newTheme,
          useSystemPreference: false,
        });
      },

      toggleTheme: () => {
        const { theme } = get();
        const newTheme = theme === Theme.dark ? Theme.light : Theme.dark;

        set({
          theme: newTheme,
          useSystemPreference: false,
        });
      },

      styleMode: STYLE_MODES.LYRA,
      setStyleMode: (mode) => set({ styleMode: mode }),
    }),
    {
      name: "theme-storage",
      partialize: (state) => ({
        theme: state.theme,
        useSystemPreference: state.useSystemPreference,
      }),
    }
  )
);
