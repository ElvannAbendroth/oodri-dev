import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import nodejs from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: "https://oodri-dev.vercel.app/",
  integrations: [tailwind(), mdx(), sitemap(), react()],
  //output & adapter make site SSR and allows searchParams

  output: "server",
  adapter: nodejs({
    mode: "middleware", // or 'standalone'
  }),
});
