<script setup>
    const props = defineProps({
        title: {
            type: String,
        },
        type: {
            type: String,
        }, 
        images: {
            type: Array[String],
        },
        visible: {
            type: Boolean,
        },
    })
</script>

<template>
    <transition name="modal-fade">
        <div v-if="visible" class="backdrop" @click.self="$emit('close')">
            <div class="popup">
                <div class="actions">
                    <div @click="$emit('close')" class="action-btn">
                        <Icon ref="close" name="material-symbols:close"/>
                    </div>
                </div>
                <h1>{{ props.title }}</h1>
                <div v-if="props.type == 'gallery'" class="gallery">
                    <NuxtImg loading="lazy" :src="image" quality="30" format="webp" v-for="image in props.images"/>
                </div>
            </div>
        </div>
    </transition>
</template>

<style>
    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity 0.3s ease-in-out;
    }

    .modal-fade-enter-from,
    .modal-fade-leave-to {
        opacity: 0;
    }

    .popup {
        animation: popup 0.3s ease-in-out
    }

    @keyframes opacity {
        0% {
            opacity: 0
        }

        100% {
            opacity: 1
        }
    }

    @keyframes popup {
        0% {
            transform: scale(0);

        }
        60% {
            transform: scale(1.1);
        }
        90% {
            transform: scale(1);
        }
    }
</style>

<style scoped>
    .action-btn {
        padding: 5px;
        border-radius: 5px;
        border: 2px solid var(--border);
        background: var(--background);
        box-sizing: border-box;
        left: 15px;
        position: relative;
        z-index: 2;
        display: flex;
    }

    .actions {
        display: flex;
        padding-left: 0px;
        justify-content: flex-end;
        align-items: center;
        align-self: stretch;
        box-sizing: border-box;
        height: 0
    }

    img {
        max-height: 15rem;
        border-radius: 20px;
    }
    
    .backdrop {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
        position: fixed;
        flex: 1 0 0;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        align-self: stretch;
        background: rgba(0, 0, 0, 0.80);
        backdrop-filter: blur(5px);
    }

    .gallery {
        flex-wrap: wrap;
        justify-content: center;
        gap: 10px;
        padding: 20px;
        box-sizing: border-box;
        overflow: auto;
        display: flex;
    }

    .popup {
        background-color: var(--background);
        width: 95%;
        max-height: 90%;
        margin-top: 0.5rem;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        border: 2px solid var(--border)
    }

    @media only screen and (max-width: 768px) {
        .actions {
            display: none
        }
    }
</style>