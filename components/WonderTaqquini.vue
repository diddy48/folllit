<template>

    <div ref="targetDiv" id="target-div" @mousemove="spawnImage"
        style="width: 100%; height: 100%; background-color: transparent;  z-index: 9999;">
        <v-row no-gutters class="d-flex align-center fill-height">
            <v-col cols="12" class="text-center">
                <div class="text-h3 text-sm-h2 text-md-h1 text-lg-h1" style="color: white"><i>Taqquini</i>
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { useMouse } from '@vueuse/core';

export default {
    data() {
        return {
            mouse: useMouse(),
            images: [], // Store spawned images
            lastPosition: { x: 0, y: 0 }, // Track last mouse position
            spawnInterval: null, // Interval for random spawning
            observer: null, // Intersection Observer
        };
    },
    props: {
        random: {
            type: Boolean,
            required: false,
            default: false,
        },
    },

    mounted() {
        if (this.random) {
            
                this.observeVisibility();
                
        }
    },
    beforeUnmount() {
        if (this.random) {
            this.stopRandomSpawning();
            if (this.observer) {
                this.observer.disconnect(); // Clean up the observer
            }
        }
    },
    methods: {
        spawnImageAtPosition(x, y, num, duration) {
            // Generate a random image index between 1 and 80
            const randomImageIndex = Math.floor(Math.random() * 79) + 1;
            const imagePath = `/taqquini/${randomImageIndex}.png`;

            // Create the image element
            const img = document.createElement('img');
            img.src = imagePath;
            img.style.position = 'absolute';
            img.style.left = `${x}px`;
            img.style.top = `${y}px`;
            img.style.height = '300px';
            img.style.width = 'auto';
            img.style.pointerEvents = 'none';
            img.style.zIndex = '9999';

            // Append the image to the target div
            this.$refs.targetDiv.appendChild(img);

            // Track the image
            this.images.push(img);

            // Remove old images if more than 6 exist
            if (num != -1) {
                if (this.images.length > num) {
                    const firstImage = this.images.shift();
                    firstImage.remove();
                }
            }
            // Optional: Remove the image after 2 seconds
            setTimeout(() => {
                img.remove();
                const index = this.images.indexOf(img);
                if (index > -1) {
                    this.images.splice(index, 1);
                }
            }, duration);
        },
        spawnImage(event) {
            if (this.random) {
                return;
            }

            //console.log('Image spawned at:', this.mouse.x, this.mouse.y);
            const { x, y } = this.mouse;
            const distance = Math.sqrt(
                Math.pow(x - this.lastPosition.x, 2) + Math.pow(y - this.lastPosition.y, 2)
            );

            if (distance >= 50) {
                this.spawnImageAtPosition(x - 70, y - 70, 6, 2000);
                this.lastPosition = { x, y };
            }
        },

        startRandomSpawning() {
            this.spawnInterval = setInterval(() => {
                // Generate random x and y positions within the target div
                const targetRect = this.$refs.targetDiv.getBoundingClientRect();
                const randomX = Math.random() * (targetRect.width) -200; // Subtract image width
                const randomY = Math.random() * (targetRect.height-50); // Subtract image height
                this.spawnImageAtPosition(randomX, randomY, -1, 8000);
            }, 800);
        },
        stopRandomSpawning() {
            if (this.spawnInterval) {
                clearInterval(this.spawnInterval);
                this.spawnInterval = null;
            }
        }, observeVisibility() {
            const targetDiv = this.$refs.targetDiv;

            // Create the Intersection Observer
            this.observer = new IntersectionObserver((entries) => {
                const entry = entries[0]; // We only observe one element
                if (entry.isIntersecting) {
                    // The element is visible
                    this.startRandomSpawning();
                } else {
                    // The element is not visible
                    this.stopRandomSpawning();
                }
            });

            // Start observing the targetDiv
            if (targetDiv) {
                this.observer.observe(targetDiv);
            }
        },

    },
};

</script>
<style scoped>
.spawned-image {
    position: absolute;
    pointer-events: none;
    height: 30px;
    width: auto;
    z-index: 9999;
}
</style>
