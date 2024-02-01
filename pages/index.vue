<template>
  <div class="flex flex-col items-center my-5 gap-5 relative">
      <Profile/>
      <div class="bg-gradient-radial absolute z-[-1] top-[2%] right-[0%] w-[20rem] h-[20rem] from-yellow-300 dark:from-yellow-900 blur-2xl"></div>
      <FursonaCard @view-gallery="popupActive = !popupActive"/>
      <BirthdayCard/>
      <div class="bg-gradient-radial absolute z-[-1] top-[60%] right-[0%] w-[20rem] h-[20rem] from-yellow-300 dark:from-yellow-900 blur-2xl"></div>
      <div class="bg-gradient-radial absolute z-[-1] top-[30%] left-[0%] w-[20rem] h-[20rem] from-purple-300 dark:from-purple-900 blur-2xl"></div>
      <SocialMedia/>
      <div class="bg-gradient-radial absolute z-[-1] top-[80%] left-[0%] w-[20rem] h-[20rem] from-yellow-300 dark:from-yellow-900 blur-2xl"></div>
  </div>
</template>