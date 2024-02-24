<template>
    <div class="w-full h-full flex gap-5">
      <div class="text-base bg-surface p-5 h-full border-border border-r-2">
        <div class="gap-1.5 flex-col flex flex-nowrap w-52">
          <p class="text-gray-400 font-bold text-sm flex items-center w-full gap-2"><Icon size="1rem" name="mdi:gear"/>Geral</p>
          <div class="ml-3 flex gap-2 flex-col">
            <NuxtLink to="/settings/account" class="flex items-center rounded-xl p-2 w-full gap-2 transition-all duration-300">
              <button>
                <Icon size="1.5rem" name="material-symbols:brush"/>
                Temas
              </button>
            </NuxtLink>
          </div>
        </div>
      </div>
      <div class="overflow-auto w-8/12">
        <NuxtPage/>
      </div>
    </div>
</template>

<style scoped>
.router-link-exact-active {
  @apply bg-purple-900
}
</style>

<script setup>
definePageMeta({
  layout: false
})
</script>