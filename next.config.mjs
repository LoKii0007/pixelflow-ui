/** @type {import('next').NextConfig} */
const nextConfig = {
  // Allow `import code from "./file.jsx?raw"` so the showcase can display a
  // component's real source (the same files the shadcn registry distributes).
  // Note: this uses webpack, so `next dev` must run WITHOUT `--turbopack`.
  webpack: (config) => {
    // Exclude `?raw` imports from every Next loader that transforms JS (SWC +
    // react-refresh). Otherwise those loaders run on the raw source and the
    // showcase shows compiled output / HMR boilerplate instead of the file text.
    const excludeRaw = (rules) => {
      for (const rule of rules) {
        if (!rule || typeof rule !== "object") continue;
        if (Array.isArray(rule.oneOf)) excludeRaw(rule.oneOf);
        const loaders = JSON.stringify(rule.use ?? rule.loader ?? "");
        if (/next-swc-loader|react-refresh|swc/.test(loaders)) {
          if (rule.resourceQuery && Array.isArray(rule.resourceQuery.not)) {
            rule.resourceQuery.not.push(/raw/);
          } else if (!rule.resourceQuery) {
            rule.resourceQuery = { not: [/raw/] };
          }
        }
      }
    };
    excludeRaw(config.module.rules);

    config.module.rules.push({
      resourceQuery: /raw/,
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;
