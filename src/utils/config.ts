import type { ButtonStyle } from "@components/ui/button.astro";

interface SiteConfig {
  hero: Hero;
  nav: MenuItem[];
}

interface Hero {
  headline: string;
  subtitle: string;
  ctas: CTA[];
}

interface CTA {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  class?: string;
  rel?: string;
  icon?: {
    class?: string;
    name?: string;
  };
  label: string;
  style: ButtonStyle;
  size?: string;
  download?: string;
}

interface MenuItem {
  title: string;
  path: string;
  children?: MenuItem[];
  download?: boolean;
}

export const config: SiteConfig = {
  hero: {
    headline: "Crafting Digital Experiences with Design, Code, and Strategy",
    subtitle:
      "🚀✨ Hi, my name is Audrey, and I combine design and web development to create digital experiences that users fall in love with, and businesses grow from.",

    ctas: [
      {
        href: "https://github.com/ElvannAbendroth",
        target: "_blank",
        class: "flex gap-1 items-center justify-center",
        rel: "noopener",
        icon: {
          class: "text-background w-5 h-5",
          name: "bx:bxl-github",
        },
        label: "Visit my Github",
        style: "primary",
      },
      {
        href: "https://www.dropbox.com/scl/fi/2dx69vm9vo346rioo25c6/Audrey-Downey-Dev-Resume-2024-August-2-Powered-by-MaxAI.pdf?rlkey=3pv1c4gqestrfdqlf6r7cpedm&dl=0",
        //download: "Audrey Downey - Resume September 2023",
        target: "_blank",
        class: "flex gap-1 items-center justify-center",
        rel: "noopener",
        icon: {
          class: "text-foreground w-6 h-6",
          name: "bx:bxs-cloud-download",
        },
        label: "Download my resume",
        style: "outline",
        size: "lg",
      },
    ],
  },
  nav: [
    // {
    //   title: "Features",
    //   path: "#",
    //   children: [
    //     { title: "Action", path: "/" },
    //     { title: "Another action", path: "#" },
    //     { title: "Dropdown Submenu", path: "#" },
    //     { title: "404 Page", path: "/404" },
    //   ],
    // },

    {
      title: "Projects",
      path: "/projects/?search=Featured",
    },
    {
      title: "Blog",
      path: "/blog",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ],
};

export default config;
