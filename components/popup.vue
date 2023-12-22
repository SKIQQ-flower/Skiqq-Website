<template>
  <div class="fixed top-0 right-0 bottom-0 left-0 flex backdrop-blur items-center z-20 justify-center bg-gray-900/60">
    <div class="bg-gray-700 border-gray-950/60 border flex flex-col overflow-x-auto rounded-xl absolute">
      <div class="bg-gray-600 w-full px-5">
        <h2>{{ props.title }}</h2>
      </div>
      <div class="p-5">
        <slot name="content"></slot>
        <div class="flex flex-row justify-end">
          <slot name="buttons"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  visible: Boolean
})
</script>