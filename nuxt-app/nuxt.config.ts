// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: 'Products Project',
    }
  },
  devtools: { enabled: false },
  telemetry: false,
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts"],

});