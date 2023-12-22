<template>
  <div class="fixed top-0 right-0 bottom-0 left-0 flex backdrop-blur items-center z-20 justify-center bg-gray-900/60">
    <div class="bg-gray-700/60 border-gray-800/60 border flex flex-col overflow-x-auto p-5 rounded-xl absolute">
      <h2>{{ props.title }}</h2>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String
})
</script>