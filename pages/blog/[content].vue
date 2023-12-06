<script setup>
import { DateTime } from "luxon";
import Giscus from '@giscus/vue';
const route = useRoute()
const { data } = await useAsyncData('home', () => queryContent(route.params).findOne())
const { locale } = useI18n()
useContentHead(data)
const { t } = useI18n()
useHead({
  titleTemplate: (titleChunk) => {
      return titleChunk ? `${t(titleChunk)} - ${t('blog_name')}` : `${t('blog_name')}`;
  },
})
const popupActive = ref(true)

</script>

<template>
    <popup @close="popupActive = !popupActive" title="" type="login" :visible="popupActive" />
    <Login ref="login"/>
    <div class="center">
        <ContentRenderer class="card-vertical blog" :value="data" />
        <div class="blogfooter">
            <NuxtImg style="border-radius: 50%;" :src="data.authorpfp" width="40"/>
            <p><strong>{{ data.author }}</strong> {{ $t('at_time_blog') }} {{ DateTime.fromISO(data.date).setLocale(locale).toLocaleString(DateTime.DATETIME_MED) }}</p>
        </div>
    </div>
</template>
  

<style>
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