<script setup lang="ts">
withDefaults(defineProps<{
  title?: string
}>(), {
  title: 'title',
})
</script>

<template>
  <div class="h-full w-full text-white flex justify-center items-center border-solid border-purppy-600 rounded-3xl border-[12px] bg-purppy-900">
      <div class="flex-row items-center justify-center h-full w-full flex">
        <img class="size-40 rounded-full" src="/pfp.jpg"/>
        <div class="flex font-mont flex-col justify-between">
            <h1 class="text-[80px] p-20 font-black text-left">
              {{ title || "Homepage" }}
            </h1>
        </div>
      </div>
      <p class="text-5xl bg-purppy-600 p-2 rounded-xl font-black mb-0">
        skiqq.pw
      </p>
  </div>
</template>