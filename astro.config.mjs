import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import node from "@astrojs/node";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://oodri-dev.vercel.app/",
  integrations: [tailwind(), mdx(), sitemap(), react()],
  //output & adapter make site SSR and allows searchParams

  output: "server",
  adapter: [
    vercel({
      webAnalytics: {
        enabled: true,
      },
      edgeMiddleware: true,
    }),
    node({
      mode: "middleware",
    }),
  ],
});
