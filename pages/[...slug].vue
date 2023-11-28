<script setup>
const { data } = await useAsyncData('page-data', () => queryContent().findOne())
const { t } = useI18n()
useHead({
  titleTemplate: (titleChunk) => {
      return titleChunk ? `${t(titleChunk)} - ${t('blog_name')}` : `${t('blog_name')}`;
  },
})
</script>

<template>
    <main>
        <ContentDoc path="/blog">
            <div class="center">
                <ContentRenderer class="blog" :value="data"/>
            </div>
        </ContentDoc>
    </main>
</template>
  

<style>
    .blog {
        width: 90%;
        display: flex;
        flex-direction: column;
        background-color: var(--surface);
        padding: 10px;
        border-radius: 15px;
        border: 2px solid var(--border);
    }

    .blog h1 {
        text-align: center;
    }
</style>