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
    <div class="flex flex-nowrap dark:bg-gray-800/20  bg-gray-300/40 gap-1 p-1.5 rounded-xl border-gray-600 border">
        <div class="w-6 h-6 flex rounded-full items-center" :style="{ 'background-color': props.color }">
            <Icon class="w-6 h-6" :name="props.icon" :color="props.iconColor" />
        </div>
        <p class="whitespace-nowrap">
            <slot></slot>
        </p>
    </div>
</template>