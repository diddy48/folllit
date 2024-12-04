<!-- <template>
    <div class="slider">
        <div class="slider-track" :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div v-for="(image, index) in images" :key="index" class="slide">
                <img :src="image" :alt="'Slide ' + (index + 1)" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "AutoSlider",
    data() {
        return {
            images: [

                "img/_W4A0594-l-immenso-acquitrino-celeste.jpg",
                "papers/azzurro.jpg",
                "papers/atoma.jpg",
                "papers/arancione.jpg",
                "papers/bianco_vergata.jpg",
            ],
            currentIndex: 0,
            interval: null,
        };
    },
    mounted() {
        this.startSlider();
    },
    beforeDestroy() {
        this.stopSlider();
    },
    methods: {
        startSlider() {
            this.interval = setInterval(() => {
                this.currentIndex = (this.currentIndex + 1) % this.images.length;
            }, 4000); // 2 seconds interval
        },
        stopSlider() {
            clearInterval(this.interval);
        },
    },
};
</script>

<style scoped>
.slider {
    overflow: hidden;
}

.slider-track {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.slide {
    flex: 0 0 100%;
    /* Each slide takes 100% of the slider width */
}

.slide img {
    width: 100%;
    height: 100vh;
    object-fit: cover;
    display: block;
}
</style>
 -->
 <template>
    <n-carousel autoplay :show-dots="true" :draggable="true" :interval="2000" style="height: 100vh;">
        <img v-for="(img, index) in carouselImg" :key="index" class="carousel-img" v-lazy="img" :alt="'Image ' + index" /> 
        <!-- <img v-for="(img, index) in carouselImg" :key="index" class="carousel-img" :src="img" :alt="'Image ' + index" /> -->
    </n-carousel>

    <!-- <v-carousel height="100svh" :show-arrows="false" cycle :hide-delimiter="true" :hide-delimiter-background="true" :touch="true">
        <v-carousel-item v-for="(img, index ) in carouselImg" :key="index" :src="img" width="100vw">
            <img :key="index" class="carousel-img" v-lazy="img"
                :alt="'Image ' + index" />
        </v-carousel-item>
    </v-carousel> -->
</template>



<script setup>
import { defineComponent } from 'vue';
import { NCarousel } from 'naive-ui';

// Props declaration for the carousel images
defineProps({
    carouselImg: {
        type: Array,
        required: true,
    },
});

/* export default defineComponent({
    props: {
        carouselImg: {
            type: Array,
            required: true,
        },
    },
    components: {
        NCarousel,
    },
}); */

</script>

<style scoped>
.carousel-img {
    width: 100vw;
    height: 100svh;
    object-fit: cover;
    /* Smooth animation using GPU acceleration */
    /* transform: translateZ(0);
    will-change: transform, opacity; */
}
</style>
