<template>
    <v-row no-gutters id="snap-1" class="section">
        <v-col cols="12" class="text-center ">
            <video playsinline autoplay muted loop style="width: 100%; height: 100vh;">
                <source src="~/assets/video/Sequenza_02.webm" type="video/webm" />
            </video>
            <v-container class="fill-height overlay-text pa-5" fluid>
                <v-row no-gutters class="d-flex align-center" style="height: 100vh;">
                    <v-col cols="12" sm="8" class="text-left">
                        <div class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 blend-text" :style="{
                            lineHeight: 1.2}">
                            I am a <u>graphic</u>
                            designer with an artisanal approach, mixing <u>editorial</u> and <u>upcycling</u>.
                        </div>
                    </v-col>
                    <v-col cols="12" class="d-flex justify-end align-end"
                        style="position: absolute; bottom: 0; right: 0; padding: 20px;">
                        <img src="assets/logo/bollino.png" style="height: 100px;" alt="logo circle" />
                    </v-col>
                </v-row>
            </v-container>

        </v-col>
    </v-row>
    <v-row no-gutters id="snap-2" class="section">
        <v-col cols="12" class="text-center" style="height: 100vh;">
            <!-- <v-img src="papers/rosa.jpg" max-height="100vh" max-width="100%" cover></v-img> -->
        </v-col>
    </v-row>
    <!-- 
        <v-row no-gutters id="snap-3">
            <v-col cols="12" class="text-center">
                <v-img src="papers/atoma.jpg" max-height="100vh" max-width="100%" cover=""></v-img>
            </v-col>
        </v-row> -->
</template>

<script>

</script>

<style scoped>
.section {
    position: relative;
    height: 100dvh;
    overflow: hidden;
}

video {
    width: 100%;
    height: 100dvh;
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
    /* text-shadow: 0 2px 10px rgba(0, 0, 0, 0.7); */
    text-align: left;
    /* font-family: "EB Garamond", serif; */
    /* font-size: 4em;
    line-height: 1; */
}

.blend-text {
    mix-blend-mode: difference;
}
</style>