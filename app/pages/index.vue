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
    }, 1020);//13000);
  });
}
import {
  NImage,

} from 'naive-ui'
</script>

<template>

  <!-- DO NOT DELETE -->
  <div class="splash">
    <video width="600" height="100%" autoplay loop muted playsinline>
      <source src="~/assets/video/l.mov" type='video/mp4; codecs="hvc1"'>
      <source src="~/assets/video/l.webm" type="video/webm">
      <!-- ffmpeg -i .\l.mov -c:v libvpx -quality good -cpu-used 0 -b:v 7000k -qmin 10 -qmax 42 -maxrate 500k -bufsize 1500k -threads 8 -vf scale=-1:1080 -c:a libvorbis -b:a 192k -auto-alt-ref 0 -f webm l.webm -->
        <!-- <source src="https://rotato.netlify.app/alpha-demo/movie-webm.webm" type="video/webm"> -->
    </video>
  </div>

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
  <span><a href="/unlocker" class="btn btn-primary">Unlock</a></span>
  <span><a href="/iphone_test" class="btn btn-primary">Iphone Test</a></span>
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
  /*background: black;*/
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
  /*background: black;*/
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