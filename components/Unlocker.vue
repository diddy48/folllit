<template>
    <div class="unlocker">

        <div class="unlocker_content">
            <div :style="{ backgroundImage: `url(${randomImage})`, transition: `background-image 0.5s ease-in-out`, backgroundSize: `cover` }"
                class="home_logo img-fluid" rel="preload"></div>

            <svg class="mask-container" width="10vw" height="10dvh">
                <mask id="eye-mask">
                    <text x="20px" y="10svh" fill="white"
                        class="text-h3 text-md-h2 text-lg-h1 text-non-IOS">folllit</text>
                    <text x="20px" y="95svh" fill="white" class="text-h4 text-md-h2 text-lg-h1 text-non-IOS">draw a
                        smile to
                        unlock</text>

                    <circle v-if="deviceType === 'mobile'" cx="30%" cy="40%" r="10%" fill="white" class="mobile-eye"
                        ref="mobileEyeSx" />
                    <circle v-else-if="deviceType === 'tablet'" cx="33%" cy="42%" r="15%" fill="white"
                        class="tablet-eye" ref="tabletEyeSx" />
                    <circle v-else cx="35%" cy="42%" r="14%" fill="white" class="desktop-eye" ref="desktopEyeSx" />

                    <circle v-if="deviceType === 'mobile'" cx="70%" cy="40%" r="10%" fill="white" class="mobile-eye"
                        ref="mobileEyeDx" />
                    <circle v-else-if="deviceType === 'tablet'" cx="67%" cy="42%" r="15%" fill="white"
                        class="tablet-eye" ref="tabletEyeDx" />
                    <circle v-else cx="65%" cy="42%" r="14%" fill="white" class="desktop-eye" ref="desktopEyeDx" />
                </mask>

                <foreignObject width="100%" height="100%">
                    <div class="masked-video" xmlns="http://www.w3.org/1999/xhtml">
                        <video playsinline autoplay muted loop>
                            <source src="~/assets/video/Sequenza_02.webm" type="video/webm" />
                        </video>
                    </div>
                </foreignObject>
            </svg>
        </div>

        <div class="game-container">
            <canvas ref="canvas" @mousedown="startDrawing" @mousemove="draw" @mouseup="stopDrawing"
                @touchstart="startDrawing" @touchmove="draw" @touchend="stopDrawing"></canvas>
        </div>
        <div class="text_IOS name pa-5">
            <div class="text-h3 text-sm-h2 text-md-h1 text-center">follit</div>
        </div>
        <div class="text_IOS istructions pa-5">
            <div class="text-h4 text-sm-h3 text-md-h1 text-center">draw a smile to unlock</div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isDrawing: false,
            ctx: null,
            points: [],
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
                //'papers/nero.jpg',
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
            ],
            randomImage: '',
            deviceType: 'desktop',
            showInstruction: true
        }
    },
    created() {
        this.selectRandomImage();
    },
    mounted() {
        window.addEventListener('resize', this.updateDeviceType);
        this.initializeCanvas();
        window.addEventListener('resize', this.initializeCanvas);
        this.updateDeviceType();
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.initializeCanvas);
        window.removeEventListener('resize', this.updateDeviceType);
    },
    methods: {
        // All your existing methods from the original component

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
            if (this.isSmileDetected()) {
                setTimeout(() => {
                    this.startSVGAnimation();
                    this.clearCanvas();
                }, 500);

                // Optional: Add a slight delay before emitting unlocked event
                setTimeout(() => {
                    this.$emit('unlocked');
                }, 1200);
            }
        },
        isSmileDetected() {
            // Your existing smile detection logic
            const eyeBottom = this.canvasHeight / 2 + this.eyeRadius;
            const validPoints = this.points.filter(p => p.y > eyeBottom);

            if (validPoints.length < 5) return false;

            const start = validPoints[0];
            const end = validPoints[validPoints.length - 1];

            const lowestPoint = validPoints.reduce((lowest, current) =>
                current.y > lowest.y ? current : lowest
            );

            const isLowestInMiddle = lowestPoint.x > start.x && lowestPoint.x < end.x;
            const areEndpointsHigher = start.y < lowestPoint.y && end.y < lowestPoint.y;
            const curveDepth = Math.max(lowestPoint.y - start.y, lowestPoint.y - end.y);
            const minCurveDepth = (this.canvasHeight - eyeBottom) * 0.1;
            const isCurveDeepEnough = curveDepth > minCurveDepth;
            const isWideEnough = Math.abs(end.x - start.x) > this.canvasWidth * 0.2;

            return isLowestInMiddle && areEndpointsHigher && isCurveDeepEnough && isWideEnough;
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
                desktopEyeDx.classList.add('animate-eye-exit');
                desktopEyeSx.classList.add('animate-eye-exit');
            }
            if (this.deviceType === 'tablet' && tabletEyeDx && tabletEyeSx) {
                tabletEyeDx.classList.add('animate-eye-exit');
                tabletEyeSx.classList.add('animate-eye-exit');
            }
            if (this.deviceType === 'mobile' && mobileEyeDx && mobileEyeSx) {
                mobileEyeDx.classList.add('animate-eye-exit');
                mobileEyeSx.classList.add('animate-eye-exit');
            }
        }
    }
}
</script>

<style scoped>
@supports (-webkit-touch-callout: none) {

    /* CSS specific to iOS devices */
    .text_IOS {
        display: block; 
        position:absolute;
    }

    .text_IOS.name {
        top: 0;
        left: 0;
    }

    .text_IOS.istructions {
        bottom: 0;
        left: 0;
    }

    .text-non-IOS {
        display: none;
    }
}

@supports not (-webkit-touch-callout: none) {

    /* CSS for other than iOS devices */
    .text_IOS {
        display: none;
        /*  display: block;
            position: absolute;  */
            
    }.text_IOS.name {
        top: 0;
        left: 0;
    }
    
    .text_IOS.istructions {
        bottom: 0;
        left: 0;
    }

    .text-non-IOS {
        display: block;
    }

}


.home_logo {
    width: 100%;
    height: 100dvh;
    min-height: 100dvh;
    object-fit: cover;
    top: 0;
    left: 0;
    z-index: 100;
}

.unlocker_content {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    z-index: 0;
    overflow: hidden;
}

.mask-container {
    width: 100%;
    height: 100dvh;
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
    height: 100dvh;
    overflow: hidden;
    z-index: 200;
    /* Above the mask layer */
}

canvas {
    display: block;
    width: 100%;
    height: 100%;
}

/* animations */
.animate-eye-exit {
    animation: blink 5s;
    animation-iteration-count: 1;
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
</style>