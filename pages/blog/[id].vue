<script setup>
import { DateTime } from "luxon";
const route = useRoute()
const { data } = await useAsyncData('home', () => queryContent(route.params.id).findOne())
const { locale } = useI18n()
const { t } = useI18n()
useContentHead(data)
useHead({
  titleTemplate: (titleChunk) => {
      return titleChunk ? `${t(titleChunk)} - ${t('blog_name')}` : `${t('blog_name')}`;
  },
})
useSeoMeta({
  ogTitle: data.value.title,
  description: data.value.description,
  ogDescription: data.value.description,
  ogImage: data.value.cover,
  twitterCard: data.value.cover,
  author: data.value.author,
})
const popupActive = ref(true)

</script>

<template>
    <popup @close="popupActive = !popupActive" title="" type="login" :visible="popupActive" />
    <div class="center">
        <NuxtImg class="blog-cover" :src="data.cover"/>
        <h2 class="blog-title">{{ data.title }}</h2>
        <ContentRenderer class="card-vertical blog" :value="data" />
        <div class="blogfooter">
            <NuxtImg style="border-radius: 50%;" :src="data.authorpfp" width="40"/>
            <p><strong>{{ data.author }}</strong> {{ $t('at_time_blog') }} {{ DateTime.fromISO(data.date).setLocale(locale).toLocaleString(DateTime.DATETIME_MED) }}</p>
        </div>
    </div>
</template>
  

<style>
    .blog-title {
        width: 100%
    }

    .blog-cover {
        border-radius: 20px
    }

    .comments {
        width: 80%
    }

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