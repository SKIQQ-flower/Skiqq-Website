<template>
    <div @click.self="$emit('close')" class="absolute flex w-dvw p-4 backdrop-blur-md h-dvh items-start md:items-center justify-center">
        <div class="bg-slate-900/90 p-4 rounded-lg w-full md:w-9/12 2xl:w-2/6">
            <slot/>
        </div>
    </div>
</template>

<script setup>
defineEmits(['close'])
</script>