<script setup>
const route = useRoute()
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
  meta: [
    { name: 'description', content: 'O bode mais fofo do universo!' },
    { name: 'keywords', content: 'vue, nuxt, javascript, autismo, autism, skiqq' },
  ],
})
</script>

<template>
  <Html :lang="locale" :dir="head.htmlAttrs.dir">
    <Body>
      <NuxtLayout>
        <NuxtPage/>
      </NuxtLayout>      
    </Body>
  </Html>
</template>
