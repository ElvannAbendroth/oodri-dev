import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import react from "@astrojs/react";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://oodri.dev",
  integrations: [tailwind(), mdx(), sitemap(), react()],
  //output & adapter make site SSR and allows searchParams
  output: "server",
  adapter: vercel(),
  redirects: {
    "/portfolio": "/projects",
    "/portfolio/[slug]": "/projects/[slug]",
    "/resume/hg":
      "https://www.dropbox.com/scl/fi/yh92xauqwtlcgnrrv49sv/Audrey-Downey-Resume-2024-May-26.pdf?rlkey=edotjjxtz78ydbamve1i82d2m&dl=0",
    "/pdf/trustme":
      "https://www.dropbox.com/scl/fi/z8wscrl90s15g6bief0b6/Trust-Me-I-m-an-Engineer-Branding.pdf?rlkey=7o6fbaq9zt81wkobwxb4tcryo&dl=0",
    "/resume/andc":
      "https://www.dropbox.com/scl/fi/yh92xauqwtlcgnrrv49sv/Audrey-Downey-Resume-2024-May-26.pdf?rlkey=edotjjxtz78ydbamve1i82d2m&dl=0",
  },
});
