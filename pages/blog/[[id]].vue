<template>
    <div v-if="$route.params.id">
        <NuxtLink to="/" class="flex w-full text-white/90 p-4 hover:text-purppy-200 justify-center flex-row gap-2">
            <Icon size="1.5rem" name="material-symbols:home"/>
            <p>Homepage</p>
        </NuxtLink>
        <ContentDoc :path="'/' + $route.params.id">
            <template v-slot="{ doc }">
                <div class="w-full flex justify-center">
                    <div class="flex w-full justify-center flex-col font-mont p-5 pt-10 text-white/90 items-center">
                        <p class="font-bold md:w-5/6 w-full p-2 rounded-xl bg-purppy-700">
                            {{ doc.title }}
                        </p>
                        <div class="whitespace-normal break-words md:w-5/6 w-full p-5">
                            <ContentRenderer class="font-sans" :value="doc" />
                        </div>
                    </div>
                </div>
            </template>
            <template #not-found>
                <h1>Document not found</h1>
            </template>
        </ContentDoc>
    </div>
</template>

<style>
h1, h2, h3, h4, h5, h6 {
    @apply font-mont
}

h1 {
    @apply text-5xl font-bold mb-4;
}

h2 {
    @apply text-4xl font-bold leading-8 mb-4;
}

h3 {
    @apply text-3xl font-bold leading-8 mb-4;
}

h4 {
    @apply text-2xl font-bold leading-8 mb-3;
}

h5 {
    @apply text-xl font-bold leading-8 mb-2;
}

h6 {
    @apply text-lg font-bold leading-8 mb-2;
}
</style>