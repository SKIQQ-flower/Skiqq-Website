<template>
  <div class="flex flex-col items-center">
    <div class="relative flex flex-col items-center w-full">
      <div class="bg-gradient-radial absolute z-[-1] left-[-5rem] top-[-10rem] w-[20rem] h-[20rem] dark:from-purple-900
      from-purple-500 blur-2xl"></div>
      <div class="bg-gradient-radial absolute z-[-1] right-[0rem] bottom-[-10rem] w-[20rem] h-[20rem] from-yellow-300 dark:from-yellow-900 blur-2xl"></div>
      <Profile/>
    </div>
    <div class="relative flex flex-col items-center w-full">
      <div class="bg-gradient-radial absolute z-[-1] left-[-5rem] top-[9rem] w-[20rem] h-[20rem] dark:from-purple-900
      from-purple-500 blur-2xl"></div>
      <div class="bg-gradient-radial absolute z-[-1] left-[20rem] bottom-[-10rem] w-[20rem] h-[20rem] from-yellow-300 dark:from-yellow-900 blur-2xl"></div>
      <fursona-card @view-gallery="popupActive = !popupActive"/>
    </div>
    <div class="relative flex flex-col items-center w-full">
      <div class="bg-gradient-radial absolute z-[-1] left-[-5rem] top-[9rem] w-[20rem] h-[20rem] dark:from-purple-900
      from-purple-500 blur-2xl"></div>
      <div class="bg-gradient-radial absolute z-[-1] right-[0rem] bottom-[-5rem] w-[20rem] h-[20rem] from-yellow-300 dark:from-yellow-900 blur-2xl"></div>
      <birthday-card/>
      <social-media/>
      <div class="bg-gradient-radial absolute z-[-1] right-[0rem] bottom-[-10rem] w-[20rem] h-[20rem] sm:from-transparent from-purple-500 dark:from-purple-900 blur-2xl"></div>
    </div>
  </div>
  <popup @close="popupActive = !popupActive" title="Galeria do Bodedope" type="gallery" :visible="popupActive" :images="gallery"/>
</template>

<script setup>
  const { t } = useI18n()
  useHead({
    title: 'home_page',
    meta: [
      { name: 'description', content: t("home_page_description") }
    ]
  })
  const gallery = ref(["/img/Fursona/cantando.jfif",
  "/img/Fursona/em cima da mesa.jpg","/img/Fursona/em pé.png",
  "/img/Fursona/flores.jpg","/img/Fursona/lavando louça.jfif",
  "/img/Fursona/pfp.jpg", "/img/Fursona/ref sheet.png"])
  const popupActive = ref(false)
</script>