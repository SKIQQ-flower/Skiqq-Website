<template>
    <div class="profile card-horizontal appear">
        <img src="/img/profile-photo.jpg" alt="Foto de perfil">
        <div class="quote">
            <h2>Skiqq</h2>
            <p>{{ $t('quote') }}</p>
            <h3>{{ $t('title_i_am') }}</h3>
            <div class="roles">
                <Role icon="noto:man-technologist">{{ $t('role_programmer') }}</Role>
                <Role icon="noto:alien-monster">{{ $t('role_pixel_artist') }}</Role>
                <Role icon="noto:video-game">Game Dev</Role>
                <Role icon="noto:paintbrush">Thumbmaker</Role>
                <Role icon="twemoji:infinity">{{ $t('role_autist') }}</Role>
            </div>
            <h3>{{ $t('title_languages_and_frameworks') }}</h3>
            <div class="roles">
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
        height: 20em;
        flex-shrink: 0;
    }

    @media only screen and (max-width: 768px) {
        .profile {
            width: 90%;
            display: flex;
            flex-direction: column;
            justify-content: center;
        }

        .profile img {
            height: 100%;
            object-fit: contain;
            width: 100%;
        }

        .quote {
            width: 100%
        }
    }
</style>