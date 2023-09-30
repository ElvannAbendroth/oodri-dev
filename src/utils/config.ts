import type { ButtonStyle } from "@components/ui/button.astro";

interface SiteConfig {
  hero: any;
  nav: MenuItem[];
}

interface Hero {
  headline: string;
  subtitle: string;
  cta: CTA[];
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
}

interface MenuItem {
  title: string;
  path: string;
  children?: MenuItem[];
  download?: boolean;
}

export const config: SiteConfig = {
  hero: {
    headline: "Hei, I'm Oodri!",
    subtitle:
      "I'm a full-stack developer with a love for design, problem solving & music",

    ctas: [
      {
        href: "https://github.com/ElvannAbendroth",
        target: "_blank",
        class: "flex gap-1 items-center justify-center",
        rel: "noopener",
        icon: {
          class: "text-white w-5 h-5",
          name: "bx:bxl-github",
        },
        label: "Visit my Github",
        style: "primary",
      },
      {
        //href: "./src/assets/resume/Audrey Downey - Dev Resume September 2023.pdf",
        href: "https://www.dropbox.com/scl/fi/dtv9pk1jb7hw1w346nopv/Audrey-Downey-Dev-Resume-September-2023.pdf?rlkey=mhaut24nh764af4g02efuxn2m&dl=0",
        //download: "Audrey Downey - Resume September 2023",
        target: "_blank",
        class: "flex gap-1 items-center justify-center",
        rel: "noopener",
        icon: {
          class: "text-black w-6 h-6",
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
      title: "About",
      path: "/about",
    },
    {
      title: "Portfolio",
      path: "/portfolio",
    },
    // {
    //   title: "Blog",
    //   path: "/blog",
    // },
    {
      title: "Contact",
      path: "/contact",
    },
  ],
};

export default config;
