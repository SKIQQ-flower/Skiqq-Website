<template>
    <footer>
        <div class="horizontal-flex footer">
            <NuxtLink href="/">Página Inicial</NuxtLink>
            <NuxtLink href="/blog">Blog</NuxtLink>
            <a href="https://github.com/SKIQQ-flower/Skiqq-Website">Código Fonte</a>
        </div>
    </footer>
</template>

<style>
    .footer {
        height: 10rem;
        background-color: var(--surface2) ;
        border-radius: 30px 30px 0 0;
        border: 2px solid var(--border);
        justify-content: space-evenly !important;
    }

    footer {
        width: 100%;
    }
</style>