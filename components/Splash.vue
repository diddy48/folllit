<template>
    <div class="splash">
        <video ref="splashVideo" autoplay muted playsinline class="splash_video" @ended="onSplashEnded">
            <source src="~/assets/video/load_ext_shadow.webm" type="video/webm">
            <source src="~/assets/video/load_ext_shadow.mov" type='video/quicktime; codecs="hevc"'>
        </video>
    </div>
</template>

<script>
export default {
    mounted() {
        // Ensure video plays
        if (this.$refs.splashVideo) {
            this.$refs.splashVideo.play().catch(error => {
                console.error('Video autoplay was prevented:', error);
            });
        }
    },
    methods: {
        onSplashEnded() {
            const splash = document.querySelector('.splash');
            if (splash) {
                splash.classList.add('display-none');
            }
            this.$emit('splash-ended');
        }
    }
}
</script>

<style scoped>


.splash {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    min-height: 100vh;
    z-index: 200;
    line-height: 99vh;
    overflow: hidden;
}

.splash.display-none {
    opacity: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100dvh;
    min-height: 100dvh;
    color: white;
    z-index: -10;
    text-align: center;
    line-height: 99dvh;
    transition: 2s ease-in-out;
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
</style>