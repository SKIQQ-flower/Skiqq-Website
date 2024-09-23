// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-09-11',
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/content",
    "@nuxtjs/seo",
    '@nuxt/image',
  ],
  
  site: {
    url: 'https://skiqq.pw',
    name: 'Skiqq Website',
    description: 'The website of the cutest goat of the world!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  
  routeRules: {
    '/vita-capris': { redirect: 'https://discord.gg/QhQkJhfEMZ' },
    '/netty': { redirect: 'https://discord.gg/C9x5ZVy2YR' },
    '/fdg': { redirect: 'https://discord.gg/faixa-de-gaza-1238423927181803521' },
  },
  site: {
    url: 'https://skiqq.pw',
    name: 'Skiqq Website',
    description: 'The website of the cutest goat of the world!',
    defaultLocale: 'en', // not needed if you have @nuxtjs/i18n installed
  },
  build: {
    transpile: ['shiki'],
  },
})
