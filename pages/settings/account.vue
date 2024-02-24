<template>
    <div class="">
      <h1 class="leading-none flex items-center gap-2"><Icon size="3.5rem" name="material-symbols:account-circle"/>Conta</h1>
      <p class="text-gray-300 p-2 rounded-xl w-full bg-surface flex items-center gap-1"><Icon size="1.5rem" name="material-symbols:info-outline"/>Como alterar o seu nome, o seu avatar ou excluir a sua conta permanentemente. OwO</p>
    </div>
    <hr class="border-gray-800 my-2">
      <div class="flex flex-col">
        <label class="text-gray-300 text-base" for="username">Nome de usuário</label>
        <hr class="border-gray-800 my-2">
        <label class="text-gray-300 text-base" for="username">Nome global</label>
        <div class="inline-flex items-center w-full">
          <Icon size="2rem" name="material-symbols:check-small" class="text-teal-500 fill-current"/>
        </div>
      </div>
      <div class="w-80 bg-gray-950 rounded-x p-5 rounded-2xl">
        <div class="relative size-20 group hover:outline-2 hover:outline hover:outline-purple-500 hover:outline-offset-2 transition-all rounded-full">
          <Icon class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" name="mdi:pen"/>
        </div>
        <div>
        </div>
      </div>
</template>