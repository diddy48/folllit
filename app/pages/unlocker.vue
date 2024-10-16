<template>
  <div class="game-container">
    <canvas ref="canvas" @mousedown="startDrawing" @mousemove="draw" @mouseup="stopDrawing" @touchstart="startDrawing"
      @touchmove="draw" @touchend="stopDrawing"></canvas>
    <div v-if="success" class="success-message">Success! You drew a smile! Redirecting to About Us...</div>
  </div>
  <!-- <div class="content">
    <video playsinline autoplay muted loop>
      <source class="" src="~/assets/video/loader.mp4" type="video/mp4">
    </video>
  </div> -->
  <div class="content">
    <svg class="mask-container">
      <!-- Define SVG mask -->
      <mask id="eye-mask">
        <!-- Full black background -->
        <rect width="100%" height="100%" fill="black" />
        <!-- Two circular holes for the eyes (the video will show through these) -->
        <!-- Desktop circles -->
        <circle v-if="canvasWidth >= 768" cx="33%" cy="42%" r="15%" fill="white" class="desktop-eye" ref="desktopEye" />
        <circle v-else="canvasWidth < 768" cx="30%" cy="40%" r="10%" fill="white" class="mobile-eye" ref="mobileEye" />
        <circle  v-if="canvasWidth >= 768" cx="67%" cy="42%" r="15%" fill="white" class="desktop-eye" ref="desktopEye" />
        <circle v-else="canvasWidth < 768" cx="70%" cy="40%" r="10%" fill="white" class="mobile-eye" ref="mobileEye" />
        <!-- Mobile circles -->
      </mask>

      <!-- Video with the mask applied -->
      <foreignObject width="100%" height="100%">
        <div class="masked-video" xmlns="http://www.w3.org/1999/xhtml">
          <video playsinline autoplay muted loop style="width: 100%; height: 100%;">
            <source src="~/assets/video/loader.mp4" type="video/mp4" />
          </video>
        </div>
      </foreignObject>
    </svg>
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
    };
  },
  mounted() {
    this.initializeCanvas();
    window.addEventListener('resize', this.initializeCanvas);

    //for masking adaptation
    // Run on initial load
    /* this.updateEyeMask(); */
    // Update on resize
    /* window.addEventListener('resize', this.updateEyeMask); */

  },
  beforeDestroy() {
    window.removeEventListener('resize', this.initializeCanvas);

    //for masking adaptation
    // Clean up the event listener
    /* window.removeEventListener('resize', this.updateEyeMask );*/
  },
  methods: {
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

    // for masking adaptation
    /* updateEyeMask() {
      if (onMounted) {
        const desktopEyes = document.querySelectorAll('.desktop-eye');
        const mobileEyes = document.querySelectorAll('.mobile-eye');
        const mobileEye = this.$refs.mobileEye;
        const desktopEye = this.$refs.desktopEye;



        if (window.innerWidth <= 768) {
          desktopEyes.forEach(eye => eye.setAttribute('display', 'none'));
          mobileEyes.forEach(eye => eye.setAttribute('display', 'block'));
        } else {
          desktopEyes.forEach(eye => eye.setAttribute('display', 'block'));
          mobileEyes.forEach(eye => eye.setAttribute('display', 'none'));
        }
      }
    }, */
  }
};
</script>

<style scoped>

.content {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 0;
  overflow: hidden;
}

.mask-container {
  width: 100vw;
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
  width: 100vw;
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