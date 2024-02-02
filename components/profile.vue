<template>
    <div class="flex relative surface p-5 flex-col md:flex-row items-center rounded-3xl
        w-11/12 transition-all">
        <img width="450" class="rounded-2xl max-h-full cool-image-hover hover:w-[500px]" src="/img/Fursona/boykisser.png" alt="Foto de perfil">
        <div class="flex flex-col items-center">
            <h2>Skiqq</h2>
            <p>{{ $t('quote') }}</p>
            <h3>{{ $t('title_i_am') }}</h3>
            <div class="flex flex-wrap gap-1.5 justify-center w-9/12">
                <Role icon="noto:man-technologist">{{ $t('role_programmer') }}</Role>
                <Role icon="noto:puzzle-piece">{{ $t('role_autist') }}</Role>
            </div>
            <h3>{{ $t('title_i_do') }}</h3>
            <div class="flex flex-wrap gap-1.5 justify-center w-3/5">
                <Role icon="noto:video-game">Games</Role>
                <Role icon="noto:alien-monster">Pixel Art</Role>
                <Role icon="noto:paintbrush">Youtube Thumbnails</Role>
            </div>
            <h3>{{ $t('title_languages_and_frameworks') }}</h3>
            <div class="flex flex-wrap gap-1.5 justify-center w-3/5">
                <Role icon="devicon:nodejs">NodeJS</Role>
                <Role icon="logos:vue">Vue</Role>
                <Role icon="logos:bun">Bun</Role>
                <Role icon="logos:nuxt-icon">Nuxt</Role>
                <Role icon="cib:rust" iconColor="#e43717">Rust</Role>
                <Role icon="devicon:vscode">Visual Studio Code</Role>
                <Role icon="logos:godot-icon">Godot</Role>
                <Role icon="devicon:gimp">Gimp</Role>
                <Role icon="simple-icons:aseprite" iconColor="var(--text)">Aseprite</Role>
            </div>
        </div>
    </div>
</template>

<style>
    .quote {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        flex: 1 0 0;
    }

    .roles {
        display: flex;
        margin-top: 0.2em;
        width: 70%;
        margin-bottom: 0.2em;
        justify-content: center;
        align-items: center;
        align-content: center;
        gap: 5px;
        flex-wrap: wrap;
    }

    .profile img {
        border-radius: 10px;
        width: 20em;
        flex-shrink: 0;
    }

    @media only screen and (max-width: 768px) {
        .profile img {
            width: 100%;
        }

        .quote {
            width: 100%
        }
    }
</style>