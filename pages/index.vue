<template>
    <div class="flex items-center justify-center flex-col xl:w-3/6 h-dvh"> <!-- Usando h-screen para definir a altura total da tela -->
        <div class="bg-purppy-800 w-full h-full rounded-xl text-white flex flex-col">
            <img class="rounded-xl w-full" src="/banner.png">
            <div class="p-5 flex flex-col items-start h-full flex-grow">
                <div class="flex relative flex-row items-start h-fit gap-5">
                    <img class="absolute -top-[7rem] max-w-44 border-8 border-purppy-800 rounded-full" src="/pfp.jpg">
                </div>
                <div class="pt-16 h-2/6 w-full flex-grow">
                    <div class="bg-purppy-900 h-full p-2 rounded-xl w-full flex-grow">
                        <h1 class="font-mono text-4xl text-purppy-200 h-fit font-bold">Skiqq</h1>
                        <div class="flex items-start h-fit flex-row gap-5 text-2xl font-bold mb-2">
                            <button @click="currentTab = 0"
                                :class="{ 'border-purppy-400 text-purppy-400': currentTab === 0, 'border-white/70': currentTab !== 0 }"
                                class="font-mono border-b-2 rounded-md w-fit flex flex-row">
                                <Icon name="material-symbols:book-2-outline" />BIO
                            </button>
                            <button @click="currentTab = 1"
                                :class="{ 'border-purppy-400 text-purppy-400': currentTab === 1, 'border-white/70': currentTab !== 1 }"
                                class="font-mono border-b-2 rounded-md w-fit flex flex-row">
                                <Icon name="material-symbols:note-stack-outline" />
                                PROJECTS
                            </button>
                        </div>
                        <TransitionGroup enter-from-class="opacity-0" enter-to-class="opacity-100" enter-active-class="transition-opacity ">
                            <div v-if="currentTab === 0" class="overflow-auto">
                                <p>
                                    I am a young programmer who is passionate about programming. I make games, music, software,
                                    and many other things you can enjoy while drinking orange juice.
                                </p>
                                <p class="font-mono font-bold text-2xl">Also, i am a...</p>
                                <div class="flex flex-wrap">
                                    <div class="flex flex-row items-center flex-nowrap">
                                        <p>wip</p>
                                    </div>
                                </div>
                                <p class="font-mono font-bold text-2xl">My favorite music is...</p>
                                <iframe height="150" width="150" id='ivplayer' src='https://yewtu.be/embed/edu0GSlJWvM?t=3' style='border:none'></iframe>
                            </div>
                            <div v-if="currentTab === 1" class="flex">
                                <p>WIP</p>
                            </div>
                        </TransitionGroup>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
const currentTab = ref(0)
</script>
