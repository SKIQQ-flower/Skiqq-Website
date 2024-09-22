<template>
    <div v-if="$route.params.id">
        <NuxtLink class="flex text-white/90 p-4 w-fit flex-row gap-2">
            <Icon size="1.5rem" name="material-symbols:home"/>
            <p>Homepage</p>
        </NuxtLink>
        <ContentDoc :path="'/' + $route.params.id">
            <template v-slot="{ doc }">
                <div class="flex flex-col font-mont w-fit p-5 pt-10 text-white/90 items-center">
                    <p class="font-bold p-2 rounded-xl bg-purppy-700">
                        {{ doc.title }}
                    </p>
                    <div>
                        <ContentRenderer :value="doc" />
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