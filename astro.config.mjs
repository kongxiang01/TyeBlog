import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { defineConfig } from "astro/config";

import { createSiteConfig } from "./site-config.mjs";

const deployment = createSiteConfig();

export default defineConfig({
  site: deployment.site,
  base: deployment.base,
  integrations: [mdx(), sitemap()],
  markdown: {
    shikiConfig: {
      theme: "github-light",
    },
  },
});

