<template>
    <Popup>
        <h1 class="text-center">
            A galeria de Bodedope
        </h1>
        <div class="flex gap-4 justify-center flex-wrap">
            <div class="bg-slate-500/20 p-2 rounded-lg hover:scale-125 hover:bg-slate-900 transition-all" v-for="image in images">
                <NuxtLink :to="image.src" class="group relative" target="_blank">
                    <img class="md:size-32 group-hover:brightness-50 transition-all rounded-lg object-left-top group-hover:object-right-bottom md:object-cover" :src="image.src">
                    <Icon name="material-symbols:open-in-new" size="2.5rem" class="absolute opacity-0 group-hover:opacity-100 transition top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"/>
                </NuxtLink>
                <p class="font-black">{{ image.name }}</p>
                <p class="flex items-center gap-1"><Icon name="mdi:user-circle-outline"/>{{ image.author }}</p>
            </div>
            <button @click.self="$emit('close')" class="w-full bg-gradient-to-r transition-all from-yellow-700 to-orange-700 text-mono p-2 rounded-lg">Fechar</button>
        </div>
    </Popup>
</template>

<script setup>
    const images = [
        {
            name: "Dorpado",
            src: "/img/Fursona/dorpado.jpg",
            author: "Eu mesmo!"
        },
        {
            name: "Bodedope Piscando",
            src: "/img/Fursona/piscando.gif",
            author: "Eu mesmo!"
        },
        {
            name: "Refsheet",
            src: "/img/Fursona/refsheet.jpg",
            author: "Eu mesmo!"
        },
        {
            name: "Boykisser",
            src: "/img/Fursona/boykisser.png",
            author: "Eu mesmo!"
        },
        {
            name: "Redesign",
            src: "/img/Fursona/redesign.jpg",
            author: "Eu mesmo!"
        },
        {
            name: "Highlight",
            src: "/img/Fursona/highlight.jpg",
            author: "Himoruku"
        },
]
</script>