<template>
    <div class="w-11/12 flex gap-10 dark:bg-gray-800/20  bg-gray-300/40 z-10 bg-gray-300 p-5 flex-col sm:flex-row items-center rounded-3xl transition-all">
        <img class="rounded-2xl cool-image-hover cool-grow w-[120rem] hover:w-[125rem]" preload src="/img/Fursona/headshot bodedope.png" alt="Fursona">
        <div>
            <h2 class="inline-flex items-center gap-2 w-max">
                <img class="w-12" src="/svg/bodedope icon.svg">
                Bodedope
            </h2>
            <h3>
                <Icon name="material-symbols:brush"/>
                {{ $t('appearance') }}
            </h3>
            <p>
                {{  $t('appearance_label') }}
            </p>
            <h3>
                <Icon name="mdi:like"/>
                {{ $t('likes') }}
            </h3>
            <p>{{ $t('likes_label') }}</p>
            <h3>
                <Icon name="mdi:dislike"/>
                {{ $t('dislikes') }}
            </h3>
            <p>{{ $t('dislikes_label') }}</p>
            <h3>
                <Icon name="material-symbols:description"/>
                {{ $t('descriptions') }}
            </h3>
            <p>{{ $t('description_label') }}</p>
            <button class="button-primary" @click="$emit('view-gallery')">{{ $t('view_') }}</button>
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