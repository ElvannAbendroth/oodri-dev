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
        href: "https://www.dropbox.com/scl/fi/zggvwrvirpechyp44at4c/Audrey-Downey-Dev-Resume-November-2023-2.pdf?rlkey=z358pudcdaw3v2ahhnu7kg42h&dl=0",
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
    // {
    //   title: "About",
    //   path: "/about",
    // },
    {
      title: "Resume",
      path: "/resume",
    },
    {
      title: "Portfolio",
      path: "/portfolio/?search=Featured",
    },
    {
      title: "Contact",
      path: "/contact",
    },
  ],
};

export default config;
