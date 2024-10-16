<script setup lang="ts">
const { data: page } = await useAsyncData('index', () => queryContent('/').findOne())

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description
})

if (onMounted) {
  onMounted(() => {
    const splash = document.querySelector('.splash');

    setTimeout(() => {
      splash.classList.add('display-none');
    }, 13000);
  });
}
import {
  NImage,
  
} from 'naive-ui'
</script>

<template>
  
<!-- DO NOT DELETE -->
<!--    <div class="splash">
    <video playsinline class="fade-in" autoplay muted loop>
      <source class="" src="~/assets/video/loader.mp4" type="video/mp4">
    </video>
  </div>  -->

  <!-- <div class="row">
    <div class="col-md-12">
      <div class="row">
        <div class="col-md-12">
          <img class="home_logo img-fluid" src="~/assets/img/home_logo.png" alt="logo" />
        </div>
      </div> -->
      <!-- <div class="row">
        <div class="col-md-12">
          <h1>Home Page</h1>
          <p>Welcome to our application. Here is some information about us.</p>
          <h3>Our missio</h3>
        </div>
      </div> -->
    <!-- </div>
  </div> -->
  
          <img class="home_logo img-fluid" src="~/assets/img/home_logo.png" alt="logo" />
          <a href="/unlocker" class="btn btn-primary">Unlock</a>
  <!-- <n-image class="home_logo img-fluid"
    src="~/assets/img/home_logo.png"
  /> -->
</template>

<style lang="css">
.splash {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  /* Cover full screen height */
  min-height: 100vh;
  /* Ensures it covers on mobile */
  background: black;
  z-index: 200;
  line-height: 99vh;
  overflow: hidden;
  /* Prevents scrolling while splash is visible */

}

.splash.display-none {
  opacity: 0;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  background: black;
  color: white;
  z-index: -10;
  text-align: center;
  line-height: 99vh;
  transition: all 0.5s;
  object-fit: fill;
}

video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}

.home_logo {
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: 100;
}

@keyframes fadeIn {
  to {
    opacity: 1;
  }
}

.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
}
</style>