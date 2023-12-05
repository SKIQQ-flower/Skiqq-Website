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
            <dialog class="popup">
                <div class="actions">
                    <div @click="$emit('close')" class="action-btn">
                        <Icon ref="close" name="material-symbols:close"/>
                    </div>
                </div>
                <div class="popupBody">
                    <h2 class="popupTitle">{{ props.title }}</h2>
                    <div v-if="props.type == 'gallery'" class="gallery">
                        <NuxtImg loading="lazy" :src="image" quality="30" format="webp" v-for="image in props.images"/>
                    </div>
                </div>
            </dialog>
        </div>
    </transition>
</template>

<style>
    .modal-fade-enter-active,
    .modal-fade-leave-active {
        transition: opacity 0.3s ease-in-out;
    }

    .modal-fade-enter-active .popup {
        animation: popup 0.5s reverse
    }

    .modal-fade-leave-active .popup {
        animation: popup 0.5s
    }

    .modal-fade-enter-from,
    .modal-fade-leave-to {
        opacity: 0;
    }

    @keyframes popup {
        0% {
            transform: scale(1)
        }
        50% {
            transform: scale(0.7)
        }
        100% {
            transform: scale(0)
        }
    }
</style>

<style scoped>
    .popupBody {
        gap: 10px;
        display: flex;
        flex-direction: column;
        overflow: auto;
    }

    .popupTitle {
        background-color: var(--border);
        max-width: 100%;
        padding: 5px 10px;
        border-radius: 15px;
        text-align: center;
    }

    .action-btn {
        padding: 5px;
        border-radius: 5px;
        border: 2px solid var(--border);
        background: var(--background);
        box-sizing: border-box;
        left: 31px;
        top: -15px;
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
        height: 15rem;
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
        width: 90%;
        max-height: 90%;
        margin-top: 0.5rem;
        border-radius: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        box-sizing: border-box;
        border: 2px solid var(--border)
    }
</style>