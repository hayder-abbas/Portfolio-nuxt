// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  sourcemap: false,
  css: ['./app/assets/css/main.css'],
  vite: {
    plugins: [
      tailwindcss() as any,
    ],
  },
  app: {
    head: {
      htmlAttrs: { dir: "ltr", lang: "en" },
      link: [
        { rel: "icon", type: "image/png", href: "/favicon/favicon-96x96.png", sizes: "96x96" },
        { rel: "icon", type: "image/svg+xml", href: "/favicon/favicon.svg" },
        { rel: "shortcut icon", href: "/favicon/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon/apple-touch-icon.png" },
        { rel: "manifest", href: "/favicon/site.webmanifest" },
      ],
      meta: [
        { name: "apple-mobile-web-app-title", content: "HayderAbbas" },
        { name: "theme-color", content: "#030712" },
      ],
    }
  }
});