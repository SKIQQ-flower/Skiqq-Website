<script setup>
const { t, locale } = useI18n()
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
})


useHead({
    titleTemplate: (titleChunk) => {
        return titleChunk ? `${t(titleChunk)} - Skiqq Website` : 'Skiqq Website';
    },
    link: [
        {
          rel: 'icon',
          type: 'image/x-icon',
          href: '/svg/bodedope icon.svg'
        }
    ]
})
</script>

<template>
  <div>
    <Html :lang="locale" :dir="head.htmlAttrs.dir">
      <Head>
        <Title>{{ title }}</Title>
        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
      <Body>
        <titlebar/>
        <NuxtPage/>
      </Body>
    </Html>
  </div>
</template>
