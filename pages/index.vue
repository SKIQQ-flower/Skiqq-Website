<template>
  <div class="center">
    <Profile/>
    <fursona-card @view-gallery="popupActive = !popupActive"/>
    <birthday-card/>
    <social-media/>
    <simple-footer/>
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
  "/img/Fursona/profile-photo.jpg", "/img/Fursona/ref sheet.png"])
  const popupActive = ref(false)
</script>