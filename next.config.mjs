/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow `import code from "./file.jsx?raw"` so the showcase can display a
  // component's real source (the same files the shadcn registry distributes).
  turbopack: {
    rules: {
      "*.{js,jsx,ts,tsx}": {
        resourceQuery: { raw: true },
        loaders: ["raw-loader"],
        as: "*.js",
      },
    },
  },
  webpack: (config) => {
    config.module.rules.push({
      resourceQuery: /raw/,
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;
