 <template>
    <n-carousel :show-dots="true" :show-arrow="true" :draggable="false" :interval="2500" style="height: 100vh; width: 100vw;">
        <!-- <img v-for="(img, index) in carouselImg" :key="index" class="carousel-img" v-lazy="img" :alt="'Image ' + index" />  -->
        <!-- <img v-for="(img, index) in carouselImg" :key="index" class="carousel-img" :src="img" :alt="'Image ' + index" /> -->
        <nuxt-img provider="cloudinary" v-for="(img, index) in carouselImg" :key="index" :src="img"
            :alt="'Image ' + index" class="carousel-img" />
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
