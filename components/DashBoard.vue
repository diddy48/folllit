<template>
    <v-container class="bg-brown ma-0 pa-0" height="100vh" max-width="100%">
        <v-row no-gutters>
            <v-col cols="12" class="text-center video-container">
                <video playsinline autoplay muted loop style="width: 100%; height: 100vh;">
                    <source src="~/assets/video/Sequenza_02.webm" type="video/webm" />
                </video>
                <v-container class="fill-height overlay-text pa-5" fluid>
                    <v-row no-gutters>
                        <v-col cols="12" md="6" class="text-left">
                            <div class="text-h3 text-md-h3 text-lg-h2" :style="{ lineHeight: 1.2 }">I am a
                                <u>graphic</u>
                                designer with an artisanal approach, mixing <u>editorial</u> and
                                <u>upcycling</u>.
                            </div>
                        </v-col>
                    </v-row>
                </v-container>
            </v-col>
        </v-row><!-- 
        <v-row no-gutters>
            <v-col cols="12" class="text-center">
                <v-btn class="ma-5" color="brown" dark @click="$router.push('/about')">About Me</v-btn>
            </v-col>
        </v-row>
        <v-row no-gutters>
            <v-col cols="12" class="text-center">
                <v-img src="papers/rosa.jpg" max-height="100vh" max-width="100%" class="mx-auto" cover=""></v-img>
            </v-col>
        </v-row> -->
    </v-container>
</template>

<script>

</script>

<style scoped>
html,
body {
    font-family: 'EB Garamond', serif;
}

#app {
    font-family: 'EB Garamond', serif;
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

.video-container {
    position: relative;
    width: 100%;
    height: auto;
    overflow: hidden;
}

.video {
    width: 100%;
    height: auto;
    display: block;
}

.overlay-text {
    position: absolute;
    top: 0;
    left: 0;
    /* transform: translate(-50%, -50%); */
    color: white;
    mix-blend-mode: difference;
    /* text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7); */
    text-align: left;
    /* font-family: "EB Garamond", serif; */
    /* font-size: 4em;
    line-height: 1; */
}
</style>