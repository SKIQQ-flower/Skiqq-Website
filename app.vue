<script setup>
const { t, locale } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true,
  
})


useHead({
  titleTemplate: (titleChunk) => {
      return titleChunk ? `${t(titleChunk)} - ${t('website_name')}` : `${t('website_name')}`
  },
  link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/svg/bodedope icon.svg'
      }
  ],
  script: [
    { src: 'https://giscus.app/client.js', 'data-repo': 
    'SKIQQ-flower/Skiqq-Website', 'data-repo-id': 'R_kgDOKeaulQ', 
    'data-category': 'General', 'data-category-id': 'DIC_kwDOKeaulc4CbYDT', 
    'data-mapping': 'pathname', 'data-strict': '0', 'data-reactions-enabled': '1',
    'data-emit-metadata': '0', 'data-input-position': 'bottom',
    'data-theme': 'preferred_color_scheme', 'data-lang': 'en',
    'crossorigin': 'anonymous', 'async': ''
   }
  ],
  meta: [
    { name: 'description', content: 'O bode mais fofo do universo!' },
    { name: 'keywords', content: 'vue, nuxt, javascript, autismo, autism, skiqq' },
  ],
})
</script>

<template>
  <Html :lang="locale" :dir="head.htmlAttrs.dir">
    <Head>
      <template v-for="link in head.link" :key="link.id">
        <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
      </template>
      <template v-for="meta in head.meta" :key="meta.id">
        <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
      </template>
    </Head>
    <Body>
      <titlebar/>
      <main>
        <NuxtPage/>
      </main>
      <simple-footer/>
    </Body>
  </Html>
</template>
