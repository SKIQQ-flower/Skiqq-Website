<template>
    <div class="w-fit pt-10 text-white/90">
        <h1 class="text-7xl bg-gradient-to-r from-orange-500 via-yellow-500 to-purple-500 text-transparent bg-clip-text animate-gradient font-mont font-bold">Hello, i'm Skiqq!</h1>
        <span class="text-lg font-mont font-semibold">(Eskie, Esk, Eskidoro, FlashNugget, Grotesque Imp)</span>
        <div class="border-white/20 w-full border-t-2"></div>
        <div class="mt-2">
            <p class="text-2xl">I am a young that makes websites, games, pixel art and many things i can't remember.</p>
        </div>
        <div class="flex flex-wrap pt-5 gap-5 flex-row">
            <div class="flex flex-col gap-4">
                <h2 class="font-mont text-4xl font-bold">Projects</h2>
                <NuxtLink class="text-2xl flex flex-row gap-2 items-center rounded-xl text-purppy-200 bg-purppy-800 p-2">CNTG, Ceira no Telegram (Brazillian Telegram community) <Icon name="material-symbols:link"/></NuxtLink>
            </div>
        </div>
    </div>
</template>

<style>
.animate-gradient {
    background-size: 300%;
    -webkit-animation: animatedgradient 6s ease infinite alternate;
    -moz-animation: animatedgradient 6s ease infinite alternate;
    animation: animatedgradient 6s ease infinite alternate;
  }
  
  @keyframes animatedgradient {
    0% {
      background-position: 0% 0%;
    }
    50% {
      background-position: 100% 0%;
    }
    100% {
      background-position: 200% 0%;
    }
  }
</style>