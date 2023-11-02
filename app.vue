<template>
  <titlebar/>
  <div class="center">
    <Profile/>
    <fursona-card/>
    <birthday-card/>
    <social-media/>
  </div>
  <simple-footer/>
  <popup @close="popupActive = !popupActive" type="gallery" :visible="popupActive" :images="gallery"/>
</template>

<script setup>
  const gallery = ref(["/img/Fursona.png", "/img/Fursona2.png", "/img/Fursona4.jfif",
  "/img/Fursona5.jfif", "/img/Fursona6.jfif", "/img/Fursona9.jfif", 
  "/img/Fursona10.png"])
  const popupActive = ref(false)
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Fredoka:700|Noto Sans:400');
  .card-vertical {
      background-color: var(--surface);
      border: 2px solid var(--border);
      border-radius: 30px;
      padding: 20px;
      width: 80%;
      display: flex;
      flex-direction: column;
      align-items: center;
  }

  .card-horizontal {
      background-color: var(--surface);
      border: 2px solid var(--border);
      border-radius: 30px;
      padding: 20px;
      width: 80%;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: center;
  }

  .horizontal-flex {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .vertical-flex {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media only screen and (max-width: 768px) {
    .card {
        width: 90%
    }
  }

  .appear {
    animation: appear .5s cubic-bezier(0.64, 0.57, 0.67, 1.53);
    animation-timeline: view(block);
    animation-range: cover 0% cover 100%;
  }

  @keyframes appear {
    0% {
      opacity: 0.3;
      translate: -5rem 0rem 
    }

    50% {
      opacity: 1;
      translate: 0 0
    }

    100% {
      opacity: 0.3;
      translate: -5rem 0rem 
    }
  }

  button {
    margin: 10px
  }

  body {
    display: flex;
    background-color: var(--background);
    color: var(--text);
    flex-direction: column;
    font-family: "Noto Sans", Inter, Sans;
    margin: 0
  }

  #__nuxt {
    display: flex;
    flex-direction: column;
  }

  h1,h2,h3,h4,h5,h6,p,span {
    margin: 0
  }

  body {
    font-family: 'Noto Sans';
    font-weight: 400;
  }

  h1, h2, h3, h4, h5 {
    font-family: 'Fredoka';
    font-weight: 700;
  }

  html {font-size: 100%;} /* 16px */

  h1 {font-size: 4.210rem; /* 67.36px */}

  h2 {font-size: 3.158rem; /* 50.56px */}

  h3 {font-size: 2.369rem; /* 37.92px */}

  h4 {font-size: 1.777rem; /* 28.48px */}

  h5 {font-size: 1.333rem; /* 21.28px */}

  small {font-size: 0.750rem; /* 12px */}

  img {
    user-select: none;
    -moz-user-select: none;
    -webkit-user-drag: none;
    -webkit-user-select: none;
    -ms-user-select: none;
  }

  .center {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }

  .dark-mode {
    --text: #f1e0fa;
    --background: #0c0311;
    --primary: #bf9ad5;
    --secondary: #151018;
    --accent: #816293;
    --surface: rgb(191 154 213 / 15%);
    --border: rgb(191 154 213 / 5%)
  }

  .light-mode {
    --text: #16051f;
    --background: #f7eefc;
    --primary: #4f2a65;
    --secondary: #ece7ef;
    --accent: #8b6c9d;;
    --surface: rgb(79 42 101 / 15%);
    --border: rgb(79 42 101 / 5%);
  }
</style>