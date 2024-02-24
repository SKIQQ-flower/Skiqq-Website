<template>
    <div class="w-11/12 flex gap-10 surface p-5 flex-col sm:flex-row items-center rounded-3xl transition-all">
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
            <button type="button" @click="popupVisible = !popupVisible" class="mt-2 bg-purple-700 rounded-xl p-2 hover:bg-purple-800 focus:outline-2 outline-purple-500 outline outline-0 transition-all shadow-lg">{{ $t("see_refsheet") }}</button>
        </div>
    </div>
    <Transition
    enter-active-class="duration-200 ease-out"
    enter-from-class="transform opacity-0"
    enter-to-class="opacity-100"
    leave-active-class="duration-200 ease-in"
    leave-from-class="opacity-100"
    leave-to-class="transform opacity-0">
        <Popup v-if="popupVisible" @close="popupVisible = !popupVisible">
            <template #content>
                <img width="700" src="/img/Fursona/bodedope ref.png">
            </template>
            <template #buttons>
                <button class="mt-2 bg-yellow-700 rounded-xl p-2 hover:bg-yellow-800 focus:outline-2 outline-yellow-500 outline outline-0 transition-all shadow-lg" @click="popupVisible = !popupVisible">{{ $t('close') }}</button>
            </template>
        </Popup>
    </Transition>
</template>

<script setup>
const popupVisible = ref(false)
</script>

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