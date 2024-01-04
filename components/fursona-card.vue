<template>
    <div class="w-11/12 flex dark:bg-gray-800/20 bg-gray-300/40 z-10 bg-gray-300 p-5 flex-col sm:flex-row items-center rounded-3xl transition-all">
        <NuxtImg width="300" preload src="/img/Fursona/em pé.png" alt="Fursona"/>
        <div>
            <h2>Bodedope</h2>
            <h3>{{ $t('appearance') }}</h3>
            <p>{{  $t('appearance_label') }}</p>
            <h3>{{ $t('likes') }}</h3>
            <p>{{ $t('likes_label') }}</p>
            <h3>{{ $t('dislikes') }}</h3>
            <p>{{ $t('dislikes_label') }}</p>
            <h3>{{ $t('descriptions') }}</h3>
            <p>{{ $t('description_label') }}</p>
            <button class="button-primary" @click="$emit('view-gallery')">{{ $t('view_gallery') }}</button>
        </div>
    </div>
</template>

<style>
    .fursona-details img {
        float: left;
        width: 15em
    }

    .fursona-details {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }

    @media only screen and (max-width: 768px) {
        .fursona-details h1, h2 {
            text-align: center
        }

        .fursona-details {
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .fursona {
            display: flex;
            flex-direction: column;
            align-items: center;
        }
    }
</style>