<template>
    <div class="flex flex-row items-center gap-2 border-2 border-purppy-800 font-mono p-2 rounded-md">
        <Icon size="1.5rem" :name="props.icon"/>
        <p>
            <slot>
            </slot>
        </p>
    </div>
</template>

<script setup>
    const props = defineProps({
        icon: String
    })
</script>