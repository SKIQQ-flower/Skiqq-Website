<script setup>
import { DateTime } from "luxon";
const { data } = await useAsyncData('home', () => queryContent('/').findOne())
const locale = useBrowserLocale()
useContentHead(data)
const { t } = useI18n()
useHead({
  titleTemplate: (titleChunk) => {
      return titleChunk ? `${t(titleChunk)} - ${t('blog_name')}` : `${t('blog_name')}`;
  },
})

</script>

<template>
    <main>
        <div class="center">
            <ContentRenderer class="card-vertical blog" :value="data" />
        </div>
        <div class="horizontal-flex">
            <p>{{ DateTime.fromISO(data.date).setLocale(locale).toLocaleString(DateTime.DATETIME_MED) }}</p>
        </div>
  </main>
</template>
  

<style>
    .blog h1 {
        text-align: center;
        width: 100%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        align-self: stretch;
    }
</style>