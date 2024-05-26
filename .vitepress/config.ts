import implicitFigures from "markdown-it-image-figures";
import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "Life Documentation",
    description: "Documentation for life",
    markdown: {
        config: (md) => {
            md.use(implicitFigures, {
                figcaption: "alt",
                copyAttrs: "^class$",
            });
        },
    },
    srcDir: "docs",
    themeConfig: {
        footer: {
            copyright: "© Created by CPlusPatch (Jesse), 2024",
            message: "Licensed under Creative Commons BY-NC-SA 4.0",
        },
        // https://vitepress.dev/reference/default-theme-config
    },
    lang: "en-US",
});
