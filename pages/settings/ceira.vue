<template>
    <div class="overflow-auto m-4 w-11/12">
      <h1 class="leading-none flex items-center gap-2"><Icon size="3.5rem" name="material-symbols:account-circle"/>Conta</h1>
      <p class="text-gray-300 p-2 rounded-xl w-full bg-surface flex items-center gap-1"><Icon size="1.5rem" name="material-symbols:info-outline"/>Como alterar o seu nome, o seu avatar ou excluir a sua conta permanentemente. OwO</p>
      <hr class="border-gray-800 my-2">
      <div class="flex justify-between items-center text-2xl bg-surface p-2 pl-4 rounded-3xl flex-nowrap">
        <div class="w-11/12">
          <p>Lorem ipsum</p>
          <p class="text-sm text-balance">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean purus dui, varius et gravida et, aliquet vitae libero. Mauris at sodales eros, vitae tristique ipsum.</p>
        </div>
        <label
            for="AcceptConditions"
            class="relative h-8 w-14 cursor-pointer">
            <input type="checkbox" id="AcceptConditions" class="peer sr-only" />
            <span
            class="absolute inset-0 rounded-full bg-gray-700 transition peer-checked:bg-purple-900"
            ></span>
            <span
            class="absolute inset-y-0 start-0 m-1 h-6 w-6 rounded-full bg-gray-300 transition-all peer-checked:start-6"
            ></span>
        </label>
      </div>
      
    </div>
</template>