<template>
    <div @click.self="$emit('click-outside')" class="absolute flex animate-fade w-full p-4 backdrop-blur-md h-full items-start md:items-center justify-center">
        <div class="bg-slate-900/90 animate-flip-up p-4 rounded-lg w-full md:w-9/12 2xl:w-2/6">
            <slot/>
        </div>
    </div>
</template>

<script setup>
defineEmits(['click-outside'])
</script>