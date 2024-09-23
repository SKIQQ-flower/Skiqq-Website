<template>
    <div class="w-fit p-5 pt-10 text-white/90">
        <h1 class="text-7xl text-center w-fit bg-gradient-to-r from-orange-500 via-yellow-500 to-purple-500 text-transparent bg-clip-text animate-gradient font-mont font-bold">Hello, i'm Skiqq!</h1>
        <div>
          <span class="text-lg font-mont font-semibold">(Eskie, Esk, Eskidoro, FlashNugget, Grotesque Imp)</span>
          <div class="border-white/20 w-full my-2 border-t-2"></div>
          <p class="text-2xl">I am a youngster who makes websites, games, pixel art and many things i can't remember.</p>
          <div class="flex flex-wrap pt-5 gap-5 flex-row">
              <div class="flex flex-col gap-4">
                  <h2 class="font-mont text-4xl font-bold">Projects</h2>
                  <NuxtLink href="https://t.me/ceiranotg" class="text-2xl flex flex-row flex-wrap gap-2 transition-colors items-center rounded-xl text-purppy-200 bg-purppy-800 hover:bg-purppy-200/20 p-2">CNTG, Ceira no Telegram (Brazillian Telegram community) <Icon size="2rem" name="material-symbols:link"/></NuxtLink>
                  <NuxtLink href="https://t.me/soun_preview" class="text-2xl flex flex-row flex-wrap gap-2 items-center transition-colors rounded-xl text-purppy-200 bg-purppy-800 hover:bg-purppy-200/20 p-2">Soun, a rpg game<Icon size="2rem" name="material-symbols:link"/></NuxtLink>
                  <NuxtLink href="https://github.com/SKIQQ-flower/Skiqq-Website" class="text-2xl flex flex-row flex-wrap transition-colors gap-2 items-center rounded-xl text-purppy-200 bg-purppy-800 hover:bg-purppy-200/20 p-2">This website<Icon size="2rem" name="material-symbols:link"/></NuxtLink>
              </div>
              <div class="flex flex-col gap-4">
                <h2 class="font-mont text-4xl font-bold">Blog posts</h2>
                <ContentNavigation v-slot="{ navigation }">
                  <ul>
                    <li v-for="link of navigation" :key="link._path">
                      <NuxtLink class="text-2xl flex flex-row flex-wrap transition-colors gap-2 items-center rounded-xl text-purppy-200 bg-purppy-800 hover:bg-purppy-200/20 p-2" :to="'/blog' + link._path">{{ link.title }}<Icon size="2rem" name="material-symbols:newspaper"/></NuxtLink>
                    </li>
                  </ul>
                </ContentNavigation>
            </div>
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