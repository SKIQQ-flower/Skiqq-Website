<template>
    <div class="flex items-center justify-center flex-col xl:w-3/6 w-full h-full m-2">
        <div class="bg-purppy-800 w-full h-full rounded-xl text-white flex flex-col overflow-hidden">
            <div class="relative">
                <img class="rounded-xl w-full" src="/banner.png">
                <div class="flex flex-row items-start h-fit gap-5">
                    <img class="absolute -bottom-[5rem] z-10 max-w-44 border-8 border-purppy-800 rounded-full"
                        src="/pfp.jpg">
                </div>
            </div>
            <div class="p-5 flex flex-col items-start h-full overflow-auto flex-grow">
                <div class="pt-16 h-full relative w-full flex-grow overflow-hidden">
                    <div class="bg-purppy-900 h-full p-4 rounded-xl w-full">
                        <h1 class="font-mono text-4xl text-purppy-200 h-fit font-bold">Skiqq</h1>
                        <div class="flex items-start h-fit flex-row text-2xl overflow-x-auto font-bold mb-2">
                            <NuxtLink to="/">
                                <button
                                    :class="{ 'border-purppy-400 text-purppy-400 bg-purppy-800': currentTab === '/', 'border-purppy-600 text-purppy-600': currentTab !== '/' }"
                                    class="font-mono border-b-2 p-1.5 rounded-md w-fit flex flex-row">
                                    <Icon name="material-symbols:book-2-outline" />BIO
                                </button>
                            </NuxtLink>
                            <NuxtLink to="/projects">
                                <button
                                    :class="{ 'border-purppy-400 bg-purppy-800 text-purppy-400': currentTab === '/projects', 'border-purppy-600 text-purppy-600': currentTab !== '/projects' }"
                                    class="font-mono border-b-2 p-1.5 rounded-md w-fit flex flex-row">
                                    <Icon name="material-symbols:note-stack-outline" />
                                    PROJECTS
                                </button>
                            </NuxtLink>
                            <NuxtLink to="/misc">
                                <button
                                    :class="{ 'border-purppy-400 bg-purppy-800 text-purppy-400': currentTab === '/misc', 'border-purppy-600 text-purppy-600': currentTab !== '/misc' }"
                                    class="font-mono border-b-2 p-1.5 rounded-md w-fit flex flex-row">
                                    <Icon name="material-symbols:question-mark" />
                                    MISC
                                </button>
                            </NuxtLink>
                            <NuxtLink to="/blog">
                                <button
                                    :class="{ 'border-purppy-400 bg-purppy-800 text-purppy-400': currentTab === '/blog', 'border-purppy-600 text-purppy-600': currentTab !== '/blog' }"
                                    class="font-mono border-b-2 p-1.5 rounded-md w-fit flex flex-row">
                                    <Icon name="material-symbols:newspaper-rounded" />
                                    Blog
                                </button>
                            </NuxtLink>
                            <div v-if="currentTab === '/blog'" class="flex w-full h-full mx-5 gap-1">
                                <input type="search" class="w-full rounded-lg bg-purppy-800 p-2" placeholder="Search posts">
                                <button class="bg-purppy-800 size-12 flex items-center justify-center rounded-lg">
                                    <Icon name="mdi:note-search-outline" />
                                </button>
                            </div>
                        </div>
                        <TransitionGroup enter-from-class="opacity-0" enter-to-class="opacity-100"
                            enter-active-class="transition-opacity">
                            <NuxtPage />
                        </TransitionGroup>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const currentTab = computed(() => {
    return route.path
})
</script>

<style>
.transition-opacity {
    transition: opacity 0.5s;
}

.vjs-overlay {
    display: none;
}
</style>
