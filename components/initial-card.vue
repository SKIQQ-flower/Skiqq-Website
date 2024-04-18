<template>
    <div class="flex-wrap backdrop-blur-md w-full md:w-9/12 2xl:w-2/6 bg-gradient-to-r from-slate-950/30 to-slate-900/30 p-4 rounded-xl border-slate-700/40 border">
        <div class="flex flex-col">
            <div class="flex relative flex-row flex-wrap justify-between">
                <div class="md:w-3/5 h-full w-full">
                    <div class="*:inline-block *:mr-2 whitespace-nowrap">
                        <p class="font-light font-mono">Seja bem vindo ao meu site!</p>
                    </div>
                    <h5>Oi, eu sou o <span class="font-black text-amber-500 *:inline-flex *:mr-2 md:text-3xl text-2xl"><p class="whitespace-nowrap">Breno Alves</p><p class="text-xl whitespace-nowrap">(Skiqq, Esk ou Eskie)</p></span></h5>
                    <p>Comecei desde miúdo na internet como apenas um usuário de redes, e me apaixonei pelo ramo de criação de jogos, desde então resolvi aprender a fazer sites, bots de Discord e não parou por aí. Em suma, ainda sou muito novo, tanto de idade, quanto no github; então não espere ver tantos projetos públicos aqui.</p>
                    <h5>Tecnologias e ferramentas que domino</h5>
                    <div class="flex-wrap flex gap-2">
                        <Role name="logos:nodejs-icon">NodeJS</Role>
                        <Role name="logos:bun">Bun</Role>
                        <Role name="logos:vue">Vue</Role>
                        <Role name="logos:nuxt-icon">Nuxt</Role>
                        <Role name="logos:godot-icon">Godot</Role>
                        <Role name="logos:adobe-photoshop">Adobe Photoshop</Role>
                    </div>
                    <h5>Sou iniciante em</h5>
                    <div class="flex-wrap flex gap-2">
                        <Role name="skill-icons:rust">Rust</Role>
                        <Role name="simple-icons:sfml">SFML</Role>
                        <Role name="logos:fedora">Fedora</Role>
                        <Role name="logos:c-plusplus">C++</Role>
                    </div>
                    <div class="absolute bottom-0 font-mono flex flex-wrap items-bottom">
                        <NuxtLink to="/" class="even:text-orange-500 odd:text-yellow-500">[ Página inicial ]</NuxtLink>
                        <NuxtLink to="/blog" class="even:text-orange-500 odd:text-yellow-500">[ Blog ]</NuxtLink>
                        <a href="https://twitter.com/skiqq_" class="even:text-orange-500 odd:text-yellow-500">[ Twitter ]</a>
                        <a href="https://t.me/skiqqfobia" class="even:text-orange-500 odd:text-yellow-500">[ Telegram ]</a>
                    </div>
                </div>
                <div class="flex flex-col items-center">
                    <img class="w-80 rounded-xl" src="/img/Fursona/headshot bodedope.png">
                    <p class="font-light font-mono">Este é meu personagem, Bodedope</p>
                    <div class="grid gap-2 grid-flow-col w-full">
                        <button @click="showBodedopeInfo = true" class="bg-gradient-to-r transition-all hover:scale-110 from-yellow-700 to-orange-700 text-mono p-2 rounded-lg">Sobre o personagem</button>
                        <button @click="showBodedopeGallery = true" class="bg-gradient-to-r transition-all hover:scale-110 from-orange-700 to-purple-700 text-mono p-2 rounded-lg">Ver artes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <Transition
    enter-from-class="translate-y-[150%] opacity-0"
    leave-to-class="translate-y-[150%] opacity-0"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-300">
        <PopupsBodedopeGallery v-if="showBodedopeGallery" @close="showBodedopeGallery = false"/>
    </Transition>
    <Transition
    enter-from-class="translate-y-[150%] opacity-0"
    leave-to-class="translate-y-[150%] opacity-0"
    enter-active-class="transition duration-300"
    leave-active-class="transition duration-300">
        <PopupsBodedopeInfo v-if="showBodedopeInfo" @close="showBodedopeInfo = false"/>
    </Transition>
</template>

<script setup>
const showBodedopeGallery = ref(false)
const showBodedopeInfo = ref(false)
</script>