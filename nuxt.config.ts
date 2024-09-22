// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/content",
    "@nuxtjs/seo"
  ],
  site: {
    url: 'https://skiqq.pw',
    name: 'Skiqq Website',
    description: 'The website of the cutest goat of the world!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  }
})
