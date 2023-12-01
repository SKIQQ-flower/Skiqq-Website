<script setup>
import { DateTime } from "luxon";
import Giscus from '@giscus/vue';
const route = useRoute()
const { data } = await useAsyncData('home', () => queryContent(route.params).findOne())
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
    <div v-if="$route.params" class="center">
        <ContentRenderer class="card-vertical blog" :value="data" />
        <div class="blogfooter">
            <NuxtImg style="border-radius: 50%;" :src="data.authorpfp" width="40"/>
            <p><strong>{{ data.author }}</strong> {{ $t('at_time_blog') }} {{ DateTime.fromISO(data.date).setLocale(locale).toLocaleString(DateTime.DATETIME_MED) }}</p>
        </div>
        <div class="comments">
            <Giscus
            id="comments"
            repo="SKIQQ-flower/Skiqq-Website"
            repoid="R_kgDOKeaulQ"
            category="General"
            categoryid="DIC_kwDOKeaulc4CbYDT"
            mapping="pathname"
            term="Welcome to giscus!"
            reactionsenabled="1"
            emitmetadata="0"
            inputposition="top"
            theme="preferred_color_scheme"
            lang="en"
            loading="lazy"/>
        </div>
    </div>
</template>
  

<style>
    .gsc-main {
        gap: 1rem
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