<template>
    <div class="titlebar">
        <div class="titlebartitle">
            <img src="/svg/bodedope icon.svg" width="50em">
            <h3>Skiqq</h3>
        </div>
        <div class="titlebarbuttons">
            <a href="https://github.com/SKIQQ-flower/Skiqq-Website"><Icon name="mdi:github" size="2em"/></a>
        </div>
    </div>
</template>

<style>
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
        margin-bottom: 10px;
        border-radius: 0px 0px 15px 15px;
        border: 2px solid var(--border);
        flex-direction: row;
        justify-content: space-between;
    }
</style>