<script setup lang="ts">

useHead({
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' }
  ],
  link: [
    { rel: 'icon', href: '/favicon.ico' }
  ],
  htmlAttrs: {
    lang: 'en'
  }
})

/* useSeoMeta({
  ogImage: 'https://landing-template.nuxt.dev/social-card.png',
  twitterImage: 'https://landing-template.nuxt.dev/social-card.png',
  twitterCard: 'summary_large_image'
}) */
</script>

<template>
  <!-- <NuxtLayout> -->
    <NuxtPage />
  <!-- </NuxtLayout>  -->
</template>

<style>
  html,body {
    font-family: 'EB Garamond', serif;
  }
  #app {
    font-family: 'EB Garamond', serif;
  }

  .main_accent{
    color: rgb(255, 91, 0);
  }

  .background_accent{
    background-color: rgb(226, 221, 217);
  }
</style>