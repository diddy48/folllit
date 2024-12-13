<template>
    <div class="scroll-wrapper">
        <button class="scroll-arrow left alt_font main_accent" @click="scrollLeft">&lt;</button>
        <div class="scroll-container" :ref="el => scrollContainer = el">
            <nuxt-img provider="cloudinary" v-for="(img, index) in carouselImg.concat(carouselImg)" :key="index"
                :src="img" :alt="'Image ' + index" class="carousel-img" />
        </div>
        <button class="scroll-arrow right alt_font main_accent" @click="scrollRight">&gt;</button>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';

// Props declaration for the carousel images
defineProps({
    carouselImg: {
        type: Array,
        required: true,
    },
});

// Local ref for the scroll container
let scrollContainer = null;

onMounted(() => {
    console.log(scrollContainer);
    if (scrollContainer) {
        // Position the first image halfway visible
        scrollContainer.scrollLeft = scrollContainer.clientWidth / 2;
    }
});

function scrollLeft() {
    if (scrollContainer) {
        const container = scrollContainer;
        const imageWidth = container.clientWidth;
        const currentScroll = container.scrollLeft;
        const newScroll = Math.round(currentScroll / imageWidth - 1) * imageWidth;
        container.scrollTo({ left: newScroll, behavior: 'smooth' });
    }
}

function scrollRight() {
    if (scrollContainer) {
        const container = scrollContainer;
        const imageWidth = container.clientWidth;
        const currentScroll = container.scrollLeft;
        const newScroll = Math.round(currentScroll / imageWidth + 1) * imageWidth;
        container.scrollTo({ left: newScroll, behavior: 'smooth' });
    }
}
</script>


<style scoped>
.scroll-wrapper {
    position: relative;
    display: flex;
    align-items: center;
}

.scroll-container {
    display: flex;
    overflow-x: scroll;
    overflow-y: hidden;
    white-space: nowrap;
    scroll-behavior: auto;
    -ms-overflow-style: none;
    background-color: rgb(41, 41, 41);
    /* Internet Explorer 10+ */
    scrollbar-width: none;
    /* Firefox */
    flex: 1;
}

.scroll-container::-webkit-scrollbar {
    display: none;
    /* Safari and Chrome */
}

.carousel-img {
    /* width: 100vw;
    height: 100svh;
    object-fit: cover;
    flex-shrink: 0; */
    width: 100vw;
    /* Make the image fill the width of the container */
    height: 100svh;
    /* This creates a square aspect ratio */
    object-fit: scale-down;
}

.scroll-arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background: none;
    border: none;
    font-size: 7rem;
    cursor: pointer;
    z-index: 10;
    opacity: 0.3;
    transition: opacity 0.3s ease-in-out;
}

@media only screen and (max-width: 767px) {
    .scroll-arrow {
        font-size: 4rem;
    }

}

.scroll-arrow:hover {
    opacity: 1;
    transition: opacity 0.5s ease-in-out;
}

.scroll-arrow.left {
    left: 1rem;
}

.scroll-arrow.right {
    right: 1rem;
}
</style>