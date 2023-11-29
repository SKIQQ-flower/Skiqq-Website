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
    <div class="center">
        <ContentRenderer class="card-vertical blog" :value="data" />
        <div class="blogfooter">
            <NuxtImg style="border-radius: 50%;" :src="data.authorpfp" width="40"/>
            <p><strong>{{ data.author }}</strong> {{ $t('at_time_blog') }} {{ DateTime.fromISO(data.date).setLocale(locale).toLocaleString(DateTime.DATETIME_MED) }}</p>
        </div>
    </div>
</template>
  

<style>
    .blogfooter {
        width: 80%;
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .blog h1 {
        text-align: center;
        width: 100%;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        align-self: stretch;
    }

    .blog {
        align-items: flex-start;
    }
</style>