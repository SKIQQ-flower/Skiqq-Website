<template>
    <div class="inline-flex gap-2 bg-slate-800/40 p-2 hover:bg-slate-950 hover:scale-110 transition-all items-center rounded-xl">
        <Icon size="2rem" :color="color" :name="props.name"/>
        <slot/>
    </div>
</template>

<script setup>
    const props = defineProps({
        name: String,
        color: String,
    })
</script>