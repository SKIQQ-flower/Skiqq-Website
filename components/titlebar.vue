<script setup>
    const user = useSupabaseUser()
    const mobile = useMediaQuery('(max-width: 768px)')
</script>

<template>
    <div class="dark:bg-gray-800/20 bg-gray-300/40 z-10 relative w-full flex flex-nowrap justify-between px-5 rounded-b-3xl border-b-2 border-gray-700/70">
        <div class="titlebartitle">
            <img src="/svg/bodedope icon.svg" width="50em">
            <h3>Skiqq Website</h3>
        </div>
        <div class="">
            <a class="hover:text-yellow-400" href="https://github.com/SKIQQ-flower/Skiqq-Website"><Icon class="hover-icon" name="mdi:github" size="2em"/></a>
            <button v-if="user" class="accountAvatar">
                <NuxtImg width="35" :src="user.user_metadata.avatar_url"/>
            </button>
            <button v-else @click="" class="accountAvatar">
                <Icon class="hover-icon" name="material-symbols:account-circle" size="1.5em"/>
                <p>Entrar</p>
            </button>
            <button v-if="mobile">
                <Icon name="material-symbols:menu"/>
            </button>
        </div>
    </div>
    <div v-if="user" class="accountPopup card-horizontal">
        <NuxtImg class="accountImage" width="50" :src="user.user_metadata.avatar_url"/>
        <div class="vertical-flex">
            <h3>{{ user.user_metadata.full_name }}</h3>
            <p>@{{ user.user_metadata.name.split("#")[0] }}</p>
        </div>
    </div>
</template>

<style>
    .popupContainer {
        display: block;
        position: absolute;
        top: 0;
        width: 100%;
    }

    .accountImage {
        border-radius: 50%;
    }

    .accountPopup {
        position: absolute;
        right: 1rem;
        gap: 10px;
        top: 60px;
        z-index: 100;
        width: fit-content;
        padding: 10px;
        border-radius: 10px;
        background-color: var(--surface);
    }

    .accountAvatar {
        display: flex;
        align-items: center;
        gap: 5px;
        border: 2px solid var(--border);
        border-radius: 50em;
        padding: 2px;
        transition: all .2s linear;
        color: var(--primary);
        background-color: unset;
    }

    .accountAvatar img {
        border-radius: 50%;
    }

    .accountAvatar:hover {
        border: 2px solid var(--primary);
        background-color: color-mix(in srgb, var(--primary) 15%, transparent);
    }

    .titlebarbuttons {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 0.2em;
    }

    .titlebarbuttons a {
        color: var(--text)
    }

    .titlebartitle {
        display: flex;
        align-items: center;
        flex-direction: row;
        gap: 0.2em
    }

    .titlebar {
        display: flex;
        padding: 5px 15px;
        background-color: var(--surface);
        border-radius: 0px 0px 15px 15px;
        border: 2px solid var(--border);
        flex-direction: row;
        justify-content: space-between;
    }
</style>