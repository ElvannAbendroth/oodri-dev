interface SiteConfig {
  hero: any;
  nav: MenuItem[];
}

type MenuItem = {
  title: string;
  path: string;
  children?: MenuItem[];
  download?: boolean;
};

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
        href: "/src/assets/resume/Audrey Downey - Dev Resume September 2023.pdf",
        download: "Audrey Downey - Resume September 2023",
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
