<script setup>
    const props = defineProps({
        color: {
            type: String,
            required: false
        }, 
        icon: {
            type: String,
            default: "",
        },
        iconColor: {
            type: String,
            default: ""
        }
    })
</script>

<template>
    <div class="flex hover:dark:bg-gray-900 hover:bg-gray-300 hover:scale-110 transition-all duration-200 flex-nowrap dark:bg-gray-800/20 bg-gray-300/40 gap-1 p-1.5 rounded-xl dark:border-gray-800/70 border-gray-500/70 border">
        <div class="w-6 h-6 flex rounded-full items-center bg-transparent" :style="{ 'background-color': props.color }">
            <Icon class="w-6 h-6" :name="props.icon" :color="props.iconColor" />
        </div>
        <p class="whitespace-nowrap">
            <slot></slot>
        </p>
    </div>
</template>