// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  telemetry: false,
  ssr: false,
  modules: ["@nuxtjs/tailwindcss", "@nuxt/fonts"],
  // fonts: {
  //   families: [
  //     {name: 'Lato', provider: 'google'},
  //   ],
  // }
});