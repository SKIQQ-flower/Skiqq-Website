<script setup>
const supabase = useSupabaseClient()
const user = useSupabaseUser()
async function signin() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
  })
}
</script>

<template>
    <div class="">
      <h1 class="leading-none flex items-center gap-2"><Icon size="3.5rem" name="material-symbols:account-circle"/>Conta</h1>
      <p class="text-gray-300 p-2 rounded-xl w-full bg-surface flex items-center gap-1"><Icon size="1.5rem" name="material-symbols:info-outline"/>Como alterar o seu nome, o seu avatar ou excluir a sua conta permanentemente. OwO</p>
    </div>
    <hr class="border-gray-800 my-2">
    <div v-if="user" class="inline-flex text-2xl bg-surface p-2 pl-4 rounded-3xl flex-nowrap w-full justify-between">
      <div class="flex flex-col">
        <label class="text-gray-300 text-lg" for="username">Nome de usuário</label>
        <input v-model="username" type="text" class="bg-gray-800 text-base rounded-xl focus-visible:outline-none px-1 py-2" id="username" name="username">
      </div>
      <div class="w-80 bg-gray-950 rounded-xl p-5">
        <div class="relative size-20 group hover:outline-2 hover:outline hover:outline-purple-500 hover:outline-offset-2 transition-all rounded-full">
          <img class="size-20 rounded-full group-hover:brightness-50 transition-all" :src="user.user_metadata.picture">
          <Icon class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" name="mdi:pen"/>
        </div>
        <div>
          <p>{{ username }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <button @click="signin" class="px-6 py-3 text-lg">sign with discord</button>
    </div>
</template>

<script>
  const username = ref()
</script>