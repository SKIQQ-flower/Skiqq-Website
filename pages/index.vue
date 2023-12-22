<template>
  <popup title="test title">test label</popup>
  <div class="flex flex-col items-center">
    <div class="relative flex flex-col items-center w-full">
      <div class="bg-gradient-radial absolute z-[-1] left-[-5rem] top-[-10rem] w-[20rem] h-[20rem] dark:from-purple-900
      from-purple-500 blur-2xl"></div>
      <div class="bg-gradient-radial absolute z-[-1] right-[0rem] bottom-[-10rem] w-[20rem] h-[20rem] from-yellow-300 dark:from-yellow-900 blur-2xl"></div>
      <Profile/>
    </div>
    <div class="relative flex flex-col items-center w-full">
      <div class="bg-gradient-radial absolute z-[-1] left-[-5rem] top-[9rem] w-[20rem] h-[20rem] dark:from-purple-900
      from-purple-500 blur-2xl"></div>
      <div class="bg-gradient-radial absolute z-[-1] left-[20rem] bottom-[-10rem] w-[20rem] h-[20rem] from-yellow-300 dark:from-yellow-900 blur-2xl"></div>
      <FursonaCard @view-gallery="popupActive = !popupActive"/>
    </div>
    <div class="relative flex flex-col items-center w-full">
      <div class="bg-gradient-radial absolute z-[-1] left-[-5rem] top-[9rem] w-[20rem] h-[20rem] dark:from-purple-900
      from-purple-500 blur-2xl"></div>
      <div class="bg-gradient-radial absolute z-[-1] right-[0rem] bottom-[-5rem] w-[20rem] h-[20rem] from-yellow-300 dark:from-yellow-900 blur-2xl"></div>
      <BirthdayCard/>
      <SocialMedia/>
      <div class="bg-gradient-radial absolute z-[-1] right-[0rem] bottom-[-10rem] w-[20rem] h-[20rem] sm:from-transparent from-purple-500 dark:from-purple-900 blur-2xl"></div>
    </div>
  </div>
  <button @click="openPopup">Open Popup</button>
</template>

<script setup>
  const myPopup = ref(null);

  const openPopup = () => {
    if (myPopup.value) myPopup.value.open();
  }

  const closePopup = () => {
    if (myPopup.value) myPopup.value.closePopup();
  }
</script>