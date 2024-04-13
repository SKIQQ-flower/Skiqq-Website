<template>
    <div class="flex-wrap backdrop-blur-md w-11/12 bg-gradient-to-r from-slate-950/30 to-slate-900/30 p-4 rounded-xl border-slate-700/40 border">
        <div class="flex flex-col">
            <div class="*:inline-block *:mr-2 whitespace-nowrap">
                <p class="font-light font-mono">Seja bem vindo ao meu site!</p>
            </div>
            <div class="flex flex-row flex-wrap justify-between">
                <div class="md:w-3/5 w-full">
                    <h5>Oi, eu sou o <span class="font-black text-amber-500 md:text-3xl tex-2xl"><span class="whitespace-nowrap">Breno Alves </span><span class="text-xl">(Skiqq, Esk, Eskie)</span></span></h5>
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
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const text = ref("Coisas")
const wordList = ["Backends", "Frontends", "Games", "Pixel arts", "Digital Sketchs"]
let typewriterText = "";
let typewriterCharacter = 0;
let typewriterActive = false;

function typeSetUp(newText)
{
  if (newText == text.value) { return; }
  typewriterText = newText;
  typewriterActive = true;
  typewriterCharacter = 0;
  text.value = "";
}

onMounted(() => {
  let wordIndex = 1;
  typeSetUp(wordList[0]);
   
  setInterval(() => {
    if (typewriterActive)
    {
      if (typewriterCharacter > typewriterText.length - 1)
      {
        typewriterActive = false;
        typewriterCharacter = 0;
      }else
      {
        text.value += typewriterText[typewriterCharacter];
  
        typewriterCharacter++;
      }
    }

  }, 50)

  setInterval(() => {
    typeSetUp(wordList[wordIndex]);


    wordIndex++;
    if (wordIndex > wordList.length - 1) { wordIndex = 0; }
  }, 3600)
})
</script>