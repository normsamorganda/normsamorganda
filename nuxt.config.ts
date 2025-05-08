// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  css: ["~/assets/css/main.css"],

  vite: {
    plugins: [tailwindcss()],
  },

  modules: ["@nuxtjs/google-fonts", "@nuxt/image"],

  googleFonts: {
    families: {
      Poppins: {
        wght: [100, 300, 400, 500, 600, 700, 900],
        ital: [100, 300, 400, 500, 600, 700, 900],
      },
      Montserrat: {
        wght: [100, 300, 400, 500, 600, 700, 900],
        ital: [100, 300, 400, 500, 600, 700, 900],
      },
    },
  },
});
