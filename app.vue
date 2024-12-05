<script setup lang="ts">
/* definePageMeta({
  title: 'Home',
  meta: [
    {
      name: "I am a designer with an artisanal approach, mixing editorial and upcycling.",
      content: "Home page"
    }
  ],
}); */
useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: 'icon/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

// Optional: Clear session storage on page refresh or first load
if (process.client) {
  const handlePageRefresh = () => {
    // Uncomment if you want to reset first visit on page refresh
    // sessionStorage.removeItem('first-visit');

    // Optional: Clear unlocked state on page refresh
    // sessionStorage.removeItem('unlocked');
  };

  window.addEventListener('load', handlePageRefresh);
}
</script>

<template>
  <NuxtPage :transition="{
    name: 'fade',
    mode: 'out-in'
  }" />
</template>


<style>
  html,body {/* 
    font-family: 'EB Garamond', serif; */
    font-family: 'Inter', sans-serif;
  }
  #app {
    /* font-family: 'EB Garamond', serif; */
    font-family: 'Inter', sans-serif;
  }

  .main_font{
    font-family: 'EB Garamond', serif;
    font-size: 1.5em;
  }

  .alt_font{
    font-family: 'Inter', sans-serif;
    font-size: 0.75em;
  }

  .main_accent{
    color: rgb(255, 91, 0);
  }

  .background_accent{
    background-color: rgb(226, 221, 217);
  }
  
  .maiuscoletto {
      font-variant: small-caps;
    }

/* sections */
.sub-section {
  position: relative;
  height: 50vh;
  overflow: hidden;
}

.section {
  position: relative;
  height: 100svh;
  overflow: hidden;
}

.section-first {
  position: relative;
  height: 100svh;
  overflow: hidden;
}
  
/* scroll snaè */

.scroll-container {
    scroll-snap-type: y mandatory;
    overflow-y: scroll;
    height: 100dvh;
    grid-auto-rows: 100%;
}
.snap-item {
    scroll-snap-align: start;
    scroll-snap-stop:always;
}

/* Animate line */
.animated-line {
  top: 10px;
  height: 2px;
  /* Thickness of the line */
  background-color: rgb(255, 91, 0);
  mix-blend-mode: overlay;
  /* Line color */
  width: 0;
  /* Start at 0% width */
  animation: grow-line 5s forwards;
  /* 1-second animation, runs once */
}

/* Keyframes for the line animation */
@keyframes grow-line {
  0% {
    width: 0;
  }

  100% {
    width: 100%;
  }
}

/* links */
.link {
  /* color: rgb(255, 91, 0); */
  text-decoration: none;
  transition: 0.5s ease-in-out;
  opacity: 0.5;
}

:hover.link {
  /* color: white; */
  text-decoration: none;
  transition: 0.5s ease-in-out;
  opacity: 1;
}
.link.active {
  opacity: 1;
}


/* useful */
.overlay-text {
  position: absolute;
  top: 0;
  left: 0;
  /* transform: translate(-50%, -50%); */
  color: white;
  /* text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7); */
  text-align: left;
  /* font-family: "EB Garamond", serif; */
  /* font-size: 4em;
    line-height: 1; */
}

.blend-text {
  mix-blend-mode: overlay;
}

/* transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.8s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>