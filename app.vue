<template>
  <Link rel="preconnect" href="https://fonts.googleapis.com"/>
  <Link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true"/>
  <Link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"/>
  <NuxtPage/>
</template>

<script setup>
defineOgImageComponent('default')
</script>

<style>
#__nuxt {
  @apply w-full h-full flex items-center justify-center flex-col
}

body {
  @apply bg-purppy-950
}


</style>