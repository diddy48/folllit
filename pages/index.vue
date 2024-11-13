<template>
  <!-- DO NOT DELETE -->

  <transition name="fade">
    <div v-show="!unlocked">
      <div class="splash">
        <video autoplay muted playsinline class="splash_video" style="
  position: absolute;
  top: 0;
  left: 0;" @ended="onSplashEnded">
          <!-- <source src="~/assets/video/load_ext_shadow.mov" type='video/mov; codecs="hvc1"'> -->
          <!-- <source src="~/assets/video/load_ext_shadow.mov" type='video/quicktime; codecs="hevc"'> -->

          <source src="~/assets/video/load_ext_shadow.webm" type="video/webm">
          <source src="~/assets/video/load_ext_shadow.mov" type='video/quicktime; codecs="hevc"'>

          <!-- <source src="~/assets/video/load_ext_shadow-1.webm" type="video/webm"> 
      <source src="~/assets/video/load_ext_shadow-1.mov" type='video/quicktime; codecs="hevc"'> -->

          <!-- ffmpeg -i .\l.mov -c:v libvpx -quality good -cpu-used 0 -b:v 7000k -qmin 10 -qmax 42 -maxrate 500k -bufsize 1500k -threads 8 -vf scale=-1:1080 -c:a libvorbis -b:a 192k -auto-alt-ref 0 -f webm l.webm -->
          <!-- <source src="https://rotato.netlify.app/alpha-demo/movie-webm.webm" type="video/webm"> -->
        </video>
      </div>
      <div class="unlocker">
        <div class="game-container">
          <canvas ref="canvas" @mousedown="startDrawing" @mousemove="draw" @mouseup="stopDrawing"
            @touchstart="startDrawing" @touchmove="draw" @touchend="stopDrawing"></canvas>
          <!-- <div v-if="success" class="success-message">Success! You drew a smile! Redirecting to About Us...</div> -->
        </div>
        <div class="unlocker_content">
          <!-- <div>
      <img class="home_logo img-fluid" :src="randomImage"  />
    </div> -->
          <div :style="{ backgroundImage: `url(${randomImage})`, /* backgroundRepeat: `repeat-x` */backgroundSize: `cover`}"
            class="home_logo img-fluid" rel="preload"></div>

          <svg class="mask-container" width="100%" height="100%" rel="preload">
            <!-- Define SVG mask -->
            <!-- <defs>
        <pattern id="mask-background" patternUnits="userSpaceOnUse" width="100" height="100">
          <image href="~/assets/img/white-paper-texture.jpg" x="0" y="0" width="100" height="100"/>
        </pattern>
      </defs> -->
            <!-- <rect width="100%" height="100%"  fill="black"/> -->
            <mask id="eye-mask">

              <text v-if="deviceType === 'mobile'" x="1%" y="4%" font-size="200%" fill="white"
                class="folllit">folllit</text>
              <text v-else-if="deviceType === 'tablet'" x="10" y="8%" font-size="400%" fill="white"
                class="folllit">folllit</text>
              <text v-else x="10" y="6%" font-size="400%" fill="white" class="folllit">folllit</text>

              <text v-if="deviceType === 'mobile'" x="1%" y="85%" font-size="200%" fill="white" class="hint">draw a
                smile to
                unlock</text>
              <text v-else-if="deviceType === 'tablet'" x="10" y="85%" font-size="400%" fill="white" class="hint">draw a
                smile
                to
                unlock</text>
              <text v-else x="10" y="98%" font-size="400%" fill="white" class="hint">draw a smile to unlock</text>

              <!-- <text v-if="canvasWidth < 768" x="1%" y="90%" font-size="150%" fill="white" class="hint">if you read this you have a looooong phone</text> -->
              <!-- Full black background -->
              <!-- <image :href="randomImage" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style="image-rendering: crispEdges;" fill="black"/> -->
              <!-- <rect width="100%" height="100%"  fill="url('mask-background')"/> -->
              <!-- Two circular holes for the eyes (the video will show through these) -->
              <!-- Desktop circles -->
              <circle v-if="deviceType === 'mobile'" cx="30%" cy="40%" r="10%" fill="white" class="mobile-eye"
                ref="mobileEyeSx" />
              <circle v-else-if="deviceType === 'tablet'" cx="27%" cy="42%" r="15%" fill="white" class="tablet-eye"
                ref="tabletEyeSx" />
              <circle v-else cx="33%" cy="42%" r="15%" fill="white" class="desktop-eye" ref="desktopEyeSx" />

              <circle v-if="deviceType === 'mobile'" cx="70%" cy="40%" r="10%" fill="white" class="mobile-eye"
                ref="mobileEyeDx" />
              <circle v-else-if="deviceType === 'tablet'" cx="73%" cy="42%" r="15%" fill="white" class="tablet-eye"
                ref="tabletEyeDx" />
              <circle v-else cx="67%" cy="42%" r="15%" fill="white" class="desktop-eye" ref="desktopEyeDx" />
              <!-- Mobile circles -->
            </mask>

            <!-- Video with the mask applied -->

            <!-- <image href="~/assets/img/prova_device.png" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style="image-rendering: crispEdges;" mask="url(#eye-mask)"/> -->
            <foreignObject width="100%" height="100%">
              <div class="masked-video" xmlns="http://www.w3.org/1999/xhtml">
                <video playsinline autoplay muted loop style="
  position: absolute;
  top: 0;
  left: 0;">
                  <source src="~/assets/video/Sequenza_02.webm" type="video/webm" />
                </video>
              </div>
            </foreignObject>
          </svg>
        </div>
      </div>
    </div>
  </transition>
  <transition name="fade">
    <div v-if="unlocked">
      <!-- <div :class="content">
        <div xmlns="http://www.w3.org/1999/xhtml">
          <div class="about">
            <h1>About Us</h1>
            <p>Welcome to our application. Here is some information about us.</p>
          </div>
          <video playsinline autoplay muted loop style="width: 100%; height: 100%;">
            <source src="~/assets/video/Sequenza_02.webm" type="video/webm" />
          </video>
        </div>
      </div>-->
      <v-container class="bg-brown ma-0 pa-0" height="100vh" max-width="100%">
        <v-row no-gutters>
          <v-col cols="12" class="text-center"><!-- 
            <v-img src="papers/giallo.jpg" max-height="100vh" max-width="100%" class="mx-auto" cover=""></v-img> -->
          <video playsinline autoplay muted loop style="width: 100%; height: 100vh;">
            <source src="~/assets/video/Sequenza_02.webm" type="video/webm" />
          </video>
          </v-col>
        </v-row>
        <v-row no-gutters>
          <v-col cols="12" class="text-center">
            <v-img src="papers/rosa.jpg" max-height="100vh" max-width="100%" class="mx-auto" cover=""></v-img>
          </v-col>
        </v-row>
      </v-container>
    </div>
  </transition>
</template>


<script>


import { useState } from '#app';
export default {
  data() {
    return {
      isDrawing: false,
      ctx: null,
      points: [],
      //unlocked: useState('unlocked', () => false), //unlocked global param 
      canvasWidth: 0,
      canvasHeight: 0,
      eyeRadius: 0,
      images: [
        'papers/white.jpg',
        'papers/pink.jpg',
        'papers/yellow.jpg',
        'papers/cardboard.jpg',
        'papers/handmade.png',
        'papers/cork.jpeg',
        'papers/arancione.jpg',
        'papers/atoma.jpg',
        'papers/azzurro.jpg',
        'papers/bianco_vergata.jpg',
        'papers/carta_assorbente.jpg',
        'papers/carta_assorbente_2.jpg',
        'papers/giallino.jpg',
        'papers/giallo.jpg',
        'papers/giallo_scritte.jpg',
        'papers/giallo_scritte_2.jpg',
        'papers/grafica_1.jpg',
        'papers/grigio.jpg',
        'papers/kraft.jpg',
        'papers/lucido_1.jpg',
        'papers/lucido_2.jpg',
        'papers/nero.jpg',
        'papers/partita_doppia.jpg',
        'papers/quadretti_rosa.jpg',
        'papers/quadretti_rosa_2.jpg',
        'papers/quadrettoni.jpg',
        'papers/righe1.jpg',
        'papers/righe2.jpg',
        'papers/righe3.jpg',
        'papers/rosa.jpg',
        'papers/rosina.jpg',
        'papers/rosso_fuoco.jpg',
        'papers/ruggine.jpg',
        'papers/verde_chiaro.jpg',
        'papers/verde.jpg',
      ],// Array of imeage sources
      randomImage: '',// Randomly selected image
      isCanvasReady: false,
      deviceType: 'desktop',
      unlocked: useState('unlocked', () => false)
    };
  },
  created() {
    // Select a random image as soon as the component is created
    this.selectRandomImage();
  },
  mounted() {
    useSeoMeta({
      title: "folllit",
      description: "I am a graphic designer with an artisanal approach, mixing editorial and upcycling.",
    });

    window.addEventListener('resize', this.updateDeviceType);  // Listen for window resizing

    this.initializeCanvas();
    window.addEventListener('resize', this.initializeCanvas);

    this.updateDeviceType();  // Check device type on mount
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.initializeCanvas);
    window.removeEventListener('resize', updateDeviceType);
  },
  methods: {
    onSplashEnded() {
      const splash = document.querySelector('.splash');
      splash.classList.add('display-none');
      this.isCanvasReady = true; // Allow canvas interaction after splash screen
    },
    updateDeviceType() {
      if (window.innerWidth <= 768) {
        this.deviceType = 'mobile';
      } else if (window.innerWidth <= 1240) {
        this.deviceType = 'tablet';
      } else {
        this.deviceType = 'desktop';
      }
    },
    initializeCanvas() {
      const canvas = this.$refs.canvas;
      this.canvasWidth = window.innerWidth;
      this.canvasHeight = window.innerHeight;
      canvas.width = this.canvasWidth;
      canvas.height = this.canvasHeight;
      this.ctx = canvas.getContext('2d');

      this.eyeRadius = Math.min(this.canvasWidth, this.canvasHeight) * 0.15;

      this.clearCanvas();
    },
    startDrawing(event) {
      //if (!this.isCanvasReady) return; // Prevent drawing if canvas is not ready
      event.preventDefault();
      this.isDrawing = true;
      this.points = [];
      this.clearCanvas();
      this.addPoint(event);
    },
    stopDrawing() {
      this.isDrawing = false;
      this.checkDrawing();
    },
    draw(event) {
      event.preventDefault();
      if (!this.isDrawing) return;
      this.addPoint(event);
      this.drawOnCanvas();
    },
    addPoint(event) {
      const rect = this.$refs.canvas.getBoundingClientRect();
      const x = (event.clientX || event.touches[0].clientX) - rect.left;
      const y = (event.clientY || event.touches[0].clientY) - rect.top;
      this.points.push({ x, y });
    },
    drawOnCanvas() {
      if (this.points.length < 2) return;

      // Set stroke color and line width
      this.ctx.strokeStyle = '#fff'; // Set to red color (you can change to any color)
      this.ctx.lineWidth = 7; // Set line width (you can change the value)

      this.ctx.beginPath();
      this.ctx.moveTo(this.points[0].x, this.points[0].y);
      for (let i = 1; i < this.points.length; i++) {
        this.ctx.lineTo(this.points[i].x, this.points[i].y);
      }
      this.ctx.stroke();
    },
    checkDrawing() {
      const eyeBottom = this.canvasHeight / 2 + this.eyeRadius;
      const validPoints = this.points.filter(p => p.y > eyeBottom);

      if (validPoints.length < 5) return; // Ensure we have enough points for a smile

      const start = validPoints[0];
      const end = validPoints[validPoints.length - 1];

      // Find the lowest point (the bottom of the smile)
      const lowestPoint = validPoints.reduce((lowest, current) =>
        current.y > lowest.y ? current : lowest
      );

      // Check if the lowest point is between start and end points
      const isLowestInMiddle = lowestPoint.x > start.x && lowestPoint.x < end.x;

      // Check if start and end points are higher than the lowest point
      const areEndpointsHigher = start.y < lowestPoint.y && end.y < lowestPoint.y;

      // Check if the curve is deep enough (at least 10% of the drawing height)
      const curveDepth = Math.max(lowestPoint.y - start.y, lowestPoint.y - end.y);
      const minCurveDepth = (this.canvasHeight - eyeBottom) * 0.1;
      const isCurveDeepEnough = curveDepth > minCurveDepth;

      // Check if the smile is wide enough (at least 20% of the canvas width)
      const isWideEnough = Math.abs(end.x - start.x) > this.canvasWidth * 0.2;

      if (isLowestInMiddle && areEndpointsHigher && isCurveDeepEnough && isWideEnough) {
        this.isCanvasReady = false;
        setTimeout(() => {
          this.clearCanvas();
          this.startSVGAnimation();
        }, 1000);
        setTimeout(() => {
          this.unlocked = true;
        }, 2000);
      }
    },
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    },
    selectRandomImage() {
      // Select a random image from the array
      const randomIndex = Math.floor(Math.random() * this.images.length);
      this.randomImage = this.images[randomIndex];
    },
    startSVGAnimation() {
      const desktopEyeDx = this.$refs.desktopEyeDx;
      const desktopEyeSx = this.$refs.desktopEyeSx;
      const tabletEyeDx = this.$refs.tabletEyeDx;
      const tabletEyeSx = this.$refs.tabletEyeSx;
      const mobileEyeDx = this.$refs.mobileEyeDx;
      const mobileEyeSx = this.$refs.mobileEyeSx;

      if (this.deviceType === 'desktop' && desktopEyeDx && desktopEyeSx) {
        desktopEyeDx.classList.add('animate-eye');
        desktopEyeSx.classList.add('animate-eye');
      }
      if (this.deviceType === 'tablet' && tabletEyeDx && tabletEyeSx) {
        tabletEyeDx.classList.add('animate-eye');
        tabletEyeSx.classList.add('animate-eye');
      }
      if (this.deviceType === 'mobile' && mobileEyeDx && mobileEyeSx) {
        mobileEyeDx.classList.add('animate-eye');
        mobileEyeSx.classList.add('animate-eye');
      }
    },
  }
};
</script>

<style scoped>
/* utility */

/* animations */
.animate-eye {
  animation: blink 5s infinite;
}

@keyframes blink {

  0%,
  100% {
    r: 15%;
  }

  50% {
    r: 100%;
  }
}




/* splash screen */
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
  /* transition: all 0.5s; */
  object-fit: fill;
}

.splash_video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 100;
}

/* 
@keyframes fadeIn {
  to {
    opacity: 1;
  }
} */
/* 
.fade-in {
  opacity: 0;
  animation: fadeIn 1s ease-in forwards;
} */

/* end splash screen */

.home_logo {
  width: 100%;
  height: 100vh;
  min-height: 100vh;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: 100;
}

.hint {
  font-family: 'EB Garamond', sans-serif;
}

.folllit {
  font-family: 'EB Garamond', sans-serif;
}

.unlocker_content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
}

.mask-container {
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  mask: url(#eye-mask);
}

.masked-video {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
}


video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* 
  position: absolute;
  top: 0;
  left: 0; */
}

.game-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: 200;
  /* Above the mask layer */
}

canvas {
  display: block;
  width: 100%;
  height: 100%;
}

/* CSS for the fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>