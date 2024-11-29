<template>
    <div ref="targetDiv" id="target-div" @mousemove="spawnImage"
        style="width: 100%; height: 100%; background-color: transparent; z-index: 9999;">
        <v-row no-gutters class="d-flex align-center fill-height">
            <v-col cols="4" class="text-center d-none d-md-inline">
                <div ref="firstElement" class="text-h3 text-sm-h2 text-md-h1 text-lg-h1" style="color: white"
                    :class="elementClass('taqquiniElement')" xyz="fade delay-2 origin-right left-4 duration-20">·
                </div>
            </v-col>
            <v-col cols="12" class="text-center d-md-none d-flex align-self-end justify-center "
                style="margin-top: -10px;">
                <div ref="firstElement" class="text-h3 text-sm-h2 text-md-h1 text-lg-h1" style="color: white"
                    :class="elementClass('taqquiniElement')" xyz="fade delay-2 origin-up down-4 duration-20">·
                </div>
            </v-col>
            <v-col cols="12" md="4" class="text-center d-none d-md-inline">
                <div ref="taqquiniElement" class="text-h3 text-sm-h2 text-md-h1 text-lg-h1 text-center"
                    style="color: white" :class="elementClass('taqquiniElement')"
                    xyz="fade delay-2 origin-right up-4 duration-20">
                    <i>Taqquini</i>
                </div>
            </v-col>
            <v-col cols="12" md="4" class="text-center d-md-none">
                <div ref="taqquiniElement" class="text-h3 text-sm-h2 text-md-h1 text-lg-h1 text-center"
                    style="color: white" :class="elementClass('taqquiniElement')" xyz="fade delay-2 duration-20">
                    <i>Taqquini</i>
                </div>
            </v-col>
            <v-col cols="12" class="text-center d-md-none  align-self-start justify-center">
                <div ref="firstElement" class="text-h3 text-sm-h2 text-md-h1 text-lg-h1" style="color: white"
                    :class="elementClass('taqquiniElement')" xyz="fade delay-2 origin-down up-4 duration-20">·
                </div>
            </v-col>
            <v-col cols="4" class="text-center d-none d-md-inline">
                <div ref="thirdElement" class="text-h3 text-sm-h2 text-md-h1 text-lg-h1" style="color: white"
                    :class="elementClass('taqquiniElement')" xyz="fade delay-2 origin-left right-4 duration-20">·
                </div>
            </v-col>
        </v-row>
        <v-row style="position: absolute; bottom:0px" class="d-none d-md-flex pa-5">
            <v-col cols="12" class="" style="color:white;">
                <div class="text-h3 text-center" :class="elementClass('taqquiniElement')"
                    xyz="fade delay-2 origin-up down-4 duration-20">link the dots</div>
            </v-col>
        </v-row>
        <v-row style="position: absolute; bottom:0px" class="d-md-none pa-5">
            <v-col cols="12" class="" style="color:white;">
                <div class="text-h3 text-sm-h2 text-md-h1 text-lg-h1 text-center"
                    :class="elementClass('taqquiniElement')" xyz="fade delay-2 origin-up down-4 duration-20">click the
                    dots</div>
            </v-col>
        </v-row>
        <v-row style=" position: absolute; bottom:0px; right: 0px;" class="px-2 py-7 pa-md-5 justify-end">
            <v-col cols="12" class="" style="color:white;
writing-mode: vertical-lr; 
transform: rotate(180deg);
z-index: 9999;
">
                <a href="/archive" class="text-decoration-none archive_link">
                    <div class="text-h5 text-sm-h4 text-md-h3 text-lg-h3 text-center  alt_font"
                        :class="elementClass('taqquiniElement')" xyz="fade delay-2 origin-right left-4 duration-20">
                        archive
                    </div>
                </a>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import { useMouse } from '@vueuse/core';
import { reactive } from 'vue'; // Import reactive
import 'animate.css';
export default {
    data() {
        return {
            mouse: useMouse(),
            images: [],
            lastPosition: { x: 0, y: 0 },
            spawnInterval: null,
            elementVisibility: reactive({
                taqquiniElement: false // Track visibility of the Taqquini element
            })
        };
    },
    props: {
        random: {
            type: Boolean,
            required: false,
            default: false
        }
    },

    mounted() {
        this.observeVisibility();
    },
    beforeUnmount() {
        /* if (this.random) {
            this.stopRandomSpawning();
        } */
    },
    methods: {
        spawnImageAtPosition(x, y, num, duration) {
            const randomImageIndex = Math.floor(Math.random() * 79) + 1;
            const imagePath = `/taqquini/${randomImageIndex}.png`;

            const img = document.createElement('img');
            img.src = imagePath;
            img.style.position = 'absolute';
            img.style.left = `${x}px`;
            img.style.top = `${y}px`;
            img.style.height = `${this.random ? 400 : 500}px`;
            img.style.width = 'auto';
            img.style.pointerEvents = 'none';
            img.style.zIndex = '9998';

            this.$refs.targetDiv.appendChild(img);
            this.images.push(img);

            if (num != -1) {
                if (this.images.length > num) {
                    const firstImage = this.images.shift();
                    firstImage.remove();
                }
            }

            setTimeout(() => {
                img.remove();
                const index = this.images.indexOf(img);
                if (index > -1) {
                    this.images.splice(index, 1);
                }
            }, duration);
        },
        spawnImage(event) {
            /* if (this.random) {
                return;
            } */

            const { x, y } = this.mouse;
            const distance = Math.sqrt(
                Math.pow(x - this.lastPosition.x, 2) + Math.pow(y - this.lastPosition.y, 2)
            );
            var def = 30;
            var dif = 250;
            if (this.random) {
                def = 0;
                dif = 200;
            }
            if (distance >= def) {
                this.spawnImageAtPosition(x - dif, y - dif, 20, 2000);
                this.lastPosition = { x, y };
            }
        },
        startRandomSpawning() {
            this.spawnInterval = setInterval(() => {
                // Generate random x and y positions within the target div
                const targetRect = this.$refs.targetDiv.getBoundingClientRect();
                const randomX = Math.random() * (targetRect.width) - 200; // Subtract image width
                const randomY = Math.random() * (targetRect.height - 50); // Subtract image height
                this.spawnImageAtPosition(randomX, randomY, -1, 8000);
            }, 800);
        },
        stopRandomSpawning() {
            if (this.spawnInterval) {
                clearInterval(this.spawnInterval);
                this.spawnInterval = null;
            }
        },
        observeVisibility() {
            // Observe the 'Taqquini' element for visibility
            const targetElement = this.$refs.taqquiniElement;
            if (targetElement) {
                const elementObserver = new IntersectionObserver((entries) => {
                    const entry = entries[0];
                    if (entry.isIntersecting) {
                        // Element is in the viewport, apply fade-in effect
                        this.elementVisibility.taqquiniElement = true;
                        /* if (this.random) { this.startRandomSpawning(); } */

                    } else {
                        // Element is out of the viewport, apply fade-out effect
                        this.elementVisibility.taqquiniElement = false;

                        /*  if (this.random) { this.stopRandomSpawning(); } */
                    }
                }, {
                    threshold: 0.1 // Trigger when 10% of the element is visible
                });

                elementObserver.observe(targetElement);
            }
        },

        elementClass(element) {
            return this.elementVisibility[element] ? 'xyz-in' : 'xyz-out';
        }
    }
};
</script>

<style scoped>
.spawned-image {
    position: absolute;
    pointer-events: none;
    width: auto;
    z-index: 9999;
}

.archive_link {
    color: white;
    transition: 1s ease-in-out;
}

.archive_link:hover {
    color: rgb(255, 91, 0);
    transition: 1s ease-in-out;
}
</style>
