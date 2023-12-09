// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: [
    '@nuxtjs/color-mode',
    'nuxt-icon',
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxt/content',
  ],
  i18n: {
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',  // recommended
    },
    strategy: 'prefix_except_default',
    defaultLocale: 'en-US',
    baseUrl: 'https://skiqq.vercel.app',
    locales: [
      {
        code: 'en-US',
        iso: 'en-US',
        isCatchallLocale: true
      }, 
      {
        code: 'pt-BR',
        iso: 'pt-BR',
        isCatchallLocale: true
      }
    ],
    vueI18n: './i18n.config.ts' // if you are using custom path, default 
  },
  image: {
      domains: [
        'avatars0.githubusercontent.com'
      ]
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com'
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Noto+Sans',
          crossorigin: ''
        }
      ]
    }
  },
  css: [
    '@/assets/css/style.css',
  ],
})