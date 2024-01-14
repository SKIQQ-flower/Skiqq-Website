<script setup>
const user = useSupabaseUser()

/*
if (user) {
  const { data } = await supabase
    .from('profiles')
    .select(`username, global_name`)
    .eq('id', user.value.id)
    .single()

  if (data) {
    username.value = data.username
    console.log(data)
  }
}
*/
async function signin() {
  const { data, error } = await supabase.auth.signInWithOAuth({
    provider: 'discord',
  })
}
console.log(user.value)
const newUsername = ref('username')
</script>

<template>
    <div class="">
      <h1 class="leading-none flex items-center gap-2"><Icon size="3.5rem" name="material-symbols:account-circle"/>Conta</h1>
      <p class="text-gray-300 p-2 rounded-xl w-full bg-surface flex items-center gap-1"><Icon size="1.5rem" name="material-symbols:info-outline"/>Como alterar o seu nome, o seu avatar ou excluir a sua conta permanentemente. OwO</p>
    </div>
    <hr class="border-gray-800 my-2">
    <div v-if="user" class="inline-flex text-2xl bg-surface p-2 pl-4 rounded-3xl flex-nowrap w-full justify-between">
      <div class="flex flex-col">
        <label class="text-gray-300 text-base" for="username">Nome de usuário</label>
        <input v-model="newUsername" :placeholder="username" type="text" class="bg-gray-800 text-base rounded-xl w-52 focus-visible:outline-none px-1 pl-4 py-2" id="username" name="username">
        <hr class="border-gray-800 my-2">
        <label class="text-gray-300 text-base" for="username">Nome global</label>
        <div class="inline-flex items-center w-full">
          <input v-model="newUsername" :placeholder="username" type="text" class="bg-gray-800 text-base rounded-xl focus-visible:outline-none px-1 pl-4 py-2 w-52" id="username" name="username">
          <Icon size="2rem" name="material-symbols:check-small" class="text-teal-500 fill-current"/>
        </div>
      </div>
      <div class="w-80 bg-gray-950 rounded-x p-5 rounded-2xl">
        <div class="relative size-20 group hover:outline-2 hover:outline hover:outline-purple-500 hover:outline-offset-2 transition-all rounded-full">
          <img class="size-20 rounded-full group-hover:brightness-50 transition-all" :src="user.user_metadata.picture">
          <Icon class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100" name="mdi:pen"/>
        </div>
        <div>
          <p>{{ newUsername }}</p>
          <p class="text-gray-500 text-base leading-none">@{{ user.user_metadata.full_name }}</p>
        </div>
      </div>
    </div>
    <div v-else>
      <button @click="signin()" class="px-6 py-3 text-lg">sign with discord</button>
    </div>
</template>