<script setup>
    const props = defineProps({
        color: {
            type: String,
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
    <div class="role">
        <div class="roleIcon">
            <Icon :name="props.icon" :color="iconColor" />
        </div>
        <p class="roleText">
            <slot></slot>
        </p>
    </div>
</template>

<style>
    .role {
        display: flex;
        padding: 5px;
        border: 2px solid var(--border);
        border-radius: 10px;
        flex-direction: row;
        align-items: center;
        gap: 5px;
    }

    .roleIcon {
        height: 1.5em;
        width: 1.5em;
        background-color: v-bind(props.color);
        border-radius: 50%;
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    .roleIcon .icon {
        height: 2em;
        width: 2em
    }

    .roleText {
        white-space: nowrap
    }

    .roleText {
        display: flex;
        list-style-type: none;
        flex-direction: row;
        align-items: center;
        gap: 5px
    }
</style>