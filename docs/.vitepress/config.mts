import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "seriousdb",
  description: "A seriously simple database",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "API", link: "/api" },
      { text: "Contributing", link: "/contributing" },
      { text: "Vision", link: "/vision" },
    ],

    sidebar: [
      {
        items: [
          { text: "API", link: "/api" },
          { text: "Architecture", link: "/architecture" },
          { text: "Configuration", link: "/configuration" },
          { text: "Contributing", link: "/contributing" },
          { text: "Development", link: "/development" },
          { text: "Persistence", link: "/persistence" },
          { text: "Testing", link: "/testing" },
          { text: "Vision", link: "/vision" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/danieldeer/seriousdb" },
    ],
  },
});
