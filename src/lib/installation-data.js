// Maps every component item id (see components-data.js) to its registry
// entry name for each style mode (nova / lyra / retro). The names line up
// with the files under public/r/<name>.json which power both the CLI
// command and the Manual installation steps.
//
// Keep this server-safe (no client-only imports) so it can be reused
// anywhere.

export const REGISTRY_HOME = "https://pixelflow-ui.vercel.app";

// itemId -> { nova, lyra, retro } registry names.
// When a style-specific variant doesn't exist the entry falls back to the
// closest available one (resolved by getRegistryName below).
const registryNames = {
  "navbar-00": { nova: "navbar-1-nova", lyra: "navbar-1-lyra", retro: "navbar-1-retro" },
  "navbar-01": { nova: "navbar-2-nova", lyra: "navbar-2-lyra", retro: "navbar-2-retro" },
  "navbar-02": { nova: "navbar-3-nova", lyra: "navbar-3-lyra", retro: "navbar-3-retro" },
  "navbar-03": { nova: "navbar-4", lyra: "navbar-4-lyra", retro: "navbar-4-retro" },
  "accordion-00": { nova: "accordion-nova", lyra: "accordion-lyra", retro: "accordion-retro" },
  "list-00": { nova: "list-1-nova", lyra: "list-1-lyra", retro: "list-1-retro" },
  "background-00": { nova: "background-1", lyra: "background-1", retro: "background-1-retro" },
  "multi-select-00": { nova: "multi-select-nova", lyra: "multi-select-1-lyra", retro: "multi-select-1-retro" },
  "bouncy-input-00": { nova: "bouncy-input-nova", lyra: "bouncy-input-lyra", retro: "bouncy-input-retro" },
  "loader-00": { nova: "loader-1", lyra: "loader-1", retro: "loader-1-retro" },
  "status-elevation-00": { nova: "status-elevation-nova", lyra: "status-elevation-lyra", retro: "status-elevation-retro" },
  "proximity-text-00": { nova: "proximity-text", lyra: "proximity-text", retro: "proximity-text" },
};

// Resolve the registry name for an item in the active style, falling back to
// whatever variant exists (nova -> lyra -> retro -> first defined).
export const getRegistryName = (itemId, styleMode = "nova") => {
  const entry = registryNames[itemId];
  if (!entry) return null;
  return (
    entry[styleMode] ||
    entry.nova ||
    entry.lyra ||
    entry.retro ||
    Object.values(entry)[0] ||
    null
  );
};

// The cn() helper every component relies on (shown in the Manual tab).
export const CN_UTIL_SNIPPET = `import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}`;
