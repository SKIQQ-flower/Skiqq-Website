<template>
    <div class="flex-wrap backdrop-blur-md w-full md:w-9/12 2xl:w-2/6 bg-gradient-to-r from-slate-950/30 to-slate-900/30 p-4 rounded-xl border-slate-700/40 border">
        <div class="flex flex-col">
            <div class="flex flex-row flex-wrap justify-between">
                <div class="md:w-3/5 w-full">
                    <div class="*:inline-block *:mr-2 whitespace-nowrap">
                        <p class="font-light font-mono">Seja bem vindo ao meu site!</p>
                    </div>
                    <h5>Oi, eu sou o <span class="font-black text-amber-500 *:inline-flex *:mr-2 md:text-3xl text-2xl"><p class="whitespace-nowrap">Breno Alves</p><p class="text-xl whitespace-nowrap">(Skiqq, Esk ou Eskie)</p></span></h5>
                    <p>Comecei desde miúdo na internet como apenas um usuário de redes, e me apaixonei pelo ramo de criação de jogos, desde então resolvi aprender a fazer sites, bots de Discord e não parou por aí. Em suma, ainda sou muito novo, tanto de idade, quanto no github; então não espere ver tantos projetos públicos aqui.</p>
                    <h5>Tecnologias e ferramentas que domino</h5>
                    <div class="flex-wrap flex gap-2">
                        <Role name="logos:nodejs-icon">NodeJS</Role>
                        <Role name="logos:bun">Bun</Role>
                        <Role name="logos:vue">Vue</Role>
                        <Role name="logos:nuxt-icon">Nuxt</Role>
                        <Role name="logos:godot-icon">Godot</Role>
                        <Role name="logos:adobe-photoshop">Adobe Photoshop</Role>
                    </div>
                    <h5>Sou iniciante em</h5>
                    <div class="flex-wrap flex gap-2">
                        <Role name="skill-icons:rust">Rust</Role>
                        <Role name="simple-icons:sfml">SFML</Role>
                        <Role name="logos:fedora">Fedora</Role>
                        <Role name="logos:c-plusplus">C++</Role>
                    </div>
                    <h3></h3>
                </div>
                <div class="flex flex-col items-center">
                    <img class="w-80 rounded-xl" src="/img/Fursona/headshot bodedope.png">
                    <p class="font-light font-mono">Este é meu personagem, Bodedope</p>
                    <div class="grid gap-2 grid-flow-col w-full">
                        <button class="bg-gradient-to-r transition-all hover:scale-110 from-yellow-700 to-orange-700 text-mono p-2 rounded-lg">Sobre o personagem</button>
                        <button class="bg-gradient-to-r transition-all hover:scale-110 from-orange-700 to-purple-700 text-mono p-2 rounded-lg">Ver artes</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <PopupsBodedope/>
</template>