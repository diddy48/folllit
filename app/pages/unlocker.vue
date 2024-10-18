<template>
  <div class="game-container">
    <canvas ref="canvas" @mousedown="startDrawing" @mousemove="draw" @mouseup="stopDrawing" @touchstart="startDrawing"
      @touchmove="draw" @touchend="stopDrawing"></canvas>
    <div v-if="success" class="success-message">Success! You drew a smile! Redirecting to About Us...</div>
  </div>
  <div class="content">
    <div>
      <img class="home_logo img-fluid" :src="randomImage" alt="background" />
    </div>
    
    <svg class="mask-container" width="100%" height="100%">
      <!-- Define SVG mask -->
      <!-- <defs>
        <pattern id="mask-background" patternUnits="userSpaceOnUse" width="100" height="100">
          <image href="~/assets/img/white-paper-texture.jpg" x="0" y="0" width="100" height="100"/>
        </pattern>
      </defs> -->
      <!-- <rect width="100%" height="100%"  fill="black"/> -->
      <mask id="eye-mask">

        <text v-if="deviceType === 'mobile'" x="1%" y="4%" font-size="200%" fill="white" class="folllit">folllit</text>
        <text v-else-if="deviceType === 'tablet'" x="10" y="8%" font-size="400%" fill="white" class="folllit">folllit</text>
        <text v-else x="10" y="6%" font-size="400%" fill="white" class="folllit">folllit</text>

        <text v-if="deviceType === 'mobile'" x="1%" y="85%" font-size="200%" fill="white" class="hint">draw a smile to unlock</text>
        <text v-else-if="deviceType === 'tablet'" x="10" y="85%" font-size="400%" fill="white" class="hint">draw a smile to
          unlock</text>
        <text v-else x="10" y="98%" font-size="400%" fill="white" class="hint">draw a smile to unlock</text>

        <!-- <text v-if="canvasWidth < 768" x="1%" y="90%" font-size="150%" fill="white" class="hint">if you read this you have a looooong phone</text> -->
        <!-- Full black background -->
        <!-- <image :href="randomImage" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style="image-rendering: crispEdges;" fill="black"/> -->
        <!-- <rect width="100%" height="100%"  fill="url('mask-background')"/> -->
        <!-- Two circular holes for the eyes (the video will show through these) -->
        <!-- Desktop circles -->
        <circle v-if="deviceType === 'mobile'" cx="30%" cy="40%" r="10%" fill="white" class="mobile-eye" ref="mobileEye" />
        <circle v-else-if="deviceType === 'tablet'" cx="27%" cy="42%" r="15%" fill="white" class="tablet-eye" ref="tabletEye" />
        <circle v-else cx="33%" cy="42%" r="15%" fill="white" class="desktop-eye" ref="desktopEye" />

        <circle v-if="deviceType === 'mobile'" cx="70%" cy="40%" r="10%" fill="white" class="mobile-eye" ref="mobileEye" />
        <circle v-else-if="deviceType === 'tablet'" cx="73%" cy="42%" r="15%" fill="white" class="tablet-eye" ref="tabletEye" />
        <circle v-else cx="67%" cy="42%" r="15%" fill="white" class="desktop-eye" ref="desktopEye" />
        <!-- Mobile circles -->
      </mask>

      <!-- Video with the mask applied -->

      <!-- <image href="~/assets/img/prova_device.png" width="100%" height="100%" preserveAspectRatio="xMidYMid slice" style="image-rendering: crispEdges;" mask="url(#eye-mask)"/> -->
      <foreignObject width="100%" height="100%">
        <div class="masked-video" xmlns="http://www.w3.org/1999/xhtml">
          <video playsinline autoplay muted loop style="width: 100%; height: 100%;">
            <source src="~/assets/video/Sequenza_02.webm" type="video/webm" />
          </video>
        </div>
      </foreignObject>
    </svg>
    <!-- <div class="masked-video" xmlns="http://www.w3.org/1999/xhtml">
      <video playsinline autoplay muted loop style="width: 100%; height: 100%;">
        <source src="~/assets/video/Sequenza_02.webm" type="video/webm" />
      </video>
    </div> -->
  </div>
</template>

<script>

/* import { useWindowSize } from '@vueuse/core'

const { width } = useWindowSize()
 */

export default {
  data() {
    return {
      isDrawing: false,
      ctx: null,
      points: [],
      success: false,
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
    };
  },
  mounted() {
    this.initializeCanvas();
    window.addEventListener('resize', this.initializeCanvas);

    // Select a random image when the component mounts
    this.selectRandomImage();
  },
  beforeDestroy() {
    window.removeEventListener('resize', this.initializeCanvas);
  }, setup() {
    const deviceType = ref('desktop');

    const updateDeviceType = () => {
      if (window.innerWidth <= 768) {
        deviceType.value = 'mobile';
      } else if (window.innerWidth <= 1240) {
        deviceType.value = 'tablet';
      } else {
        deviceType.value = 'desktop';
      }
    };

    onMounted(() => {
      updateDeviceType();  // Check device type on mount
      window.addEventListener('resize', updateDeviceType);  // Listen for window resizing
    });

    onUnmounted(() => {
      window.removeEventListener('resize', updateDeviceType);
    });

    return {
      deviceType,
    };
  },
  /* computed: {
    deviceType() {
      if (process.client) {  // Ensure this only runs on the client
      if (this.isMobile()) {
        return 'mobile';
      } else if (this.isTablet()) {
        return 'tablet';
      } else {
        return 'desktop';
      }
    }
    return 'desktop'; // Fallback to desktop rendering on the server
    }
  }, */
  methods: { 
    /* isMobile() {
    if (typeof window !== 'undefined' && screen.width <= 768) {
      return true;
    } else {
      return false;
    }
  },
  isTablet() {
    if (typeof window !== 'undefined' && screen.width > 768 && screen.width <= 1024) {
      return true;
    } else {
      return false;
    }
  },
  isDesktop() {
    if (typeof window !== 'undefined' && screen.width > 1024) {
      return true;
    } else {
      return false;
    }
  }, */
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
      event.preventDefault();
      this.isDrawing = true;
      this.points = [];
      this.success = false;
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
        this.success = true;
        this.navigateToAboutUs();
      }
    },
    clearCanvas() {
      this.ctx.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
    },
    navigateToAboutUs() {
      setTimeout(() => {
        this.$router.push('/about');
      }, 2000);
    },
    selectRandomImage() {
      // Select a random image from the array
      const randomIndex = Math.floor(Math.random() * this.images.length);
      this.randomImage = this.images[randomIndex];
    },
  }
};
</script>

<style scoped>
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

.content {
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
  position: absolute;
  top: 0;
  left: 0;
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

.success-message {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgba(255, 255, 255, 0.8);
  padding: 20px;
  border-radius: 10px;
  text-align: center;
}
</style>