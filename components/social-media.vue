<template>
    <div class="flex m-4 dark:bg-gray-800/20 bg-gray-300/40 p-5 flex-col items-center rounded-3xl
        w-11/12 transition-all">
        <h2>{{ $t('social_media') }}</h2>
        <div class="gap-1 flex flex-row flex-wrap justify-center">
            <a href="https://x.com/skiqq_">
                <role icon="simple-icons:x">@skiqq_</role>
            </a>
            <a href="https://t.me/skiqqfobia">
                <role icon="logos:telegram">@skiqqfobia</role>
            </a>
            <a href="https://www.youtube.com/@skiqqkaboom/">
                <role icon="logos:youtube-icon">@skiqqkaboom</role>
            </a>
            <a>
                <role icon="logos:discord-icon">@skiqq</role>
            </a>
            <a href="https://bsky.app/profile/skiqq.bsky.social">
                <role color="#3949AB">@skiqq.bsky.social</role>
            </a>
        </div>
    </div>
</template>

<style>
    a:hover div {
        @apply dark:bg-gray-800 bg-gray-400 border-gray-900
    }
</style>