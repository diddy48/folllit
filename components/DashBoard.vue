<template>
    <v-row no-gutters id="snap-1" class="section">
        <v-col cols="12" class="text-center ">
            <video playsinline autoplay muted loop style="width: 100%; height: 100svh;">
                <source src="~/assets/video/Sequenza_02.webm" type="video/webm" />
            </video>
            <v-container class="fill-height overlay-text pa-5" fluid>
                <v-row no-gutters class="d-flex align-center" style="height: 100svh;">
                    <v-col cols="12" sm="8" class="text-left">
                        <div class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 blend-text" :style="{
                            lineHeight: 1.2
                        }">
                            I am a <u>graphic</u>
                            designer with an artisanal approach, mixing <u>editorial</u> and <u>upcycling</u>.
                        </div>
                    </v-col>
                    <v-col cols="12" class="d-flex justify-end"
                        style="position: absolute; bottom: 0; right: 0; padding: 20px;">
                        <img src="assets/logo/bollino.png" style="height: 100px;" alt="logo circle" />
                    </v-col>
                </v-row>
            </v-container>

        </v-col>
    </v-row>
    <v-row no-gutters id="snap-2" class="section d-flex align-center">
        <v-col cols="10" offset="1" class="text-center">
            <v-card style="height: 80dvh; border-radius: 70px;" elevation="0" class=" pa-5 pa-md-15 d-flex flex-column">
                <v-card-title class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 text-left">
                    Taqquini
                </v-card-title>
                <v-card-text class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-left">
                    All papers, without exception, deserve to be repurposed.
                    <q>Taqquini</q> is an upcycling project to produce handcrafted notebooks
                    made from various types of paper.
                </v-card-text>

                <!-- Actions -->
                <v-spacer></v-spacer> <!-- Pushes content above -->
                <v-card-actions class="justify-end py-5 py-md-15">
                    <!-- <v-btn class="main_accent text-h5 text-sm-h4 text-md-h3 text-lg-h2" text="Archive"
                        @click="() => $router.push('/archive')">Archive 👉
                    </v-btn> -->
                    <a href="/archive" class="main_accent text-h5 text-sm-h4 text-md-h3 text-lg-h2"
                        text="Archive">Archive</a><span
                        class="main_accent text-h5 text-sm-h4 text-md-h3 text-lg-h2">👉</span>
                </v-card-actions>
            </v-card>
            <!-- <v-img src="papers/rosa.jpg" max-height="100vh" max-width="100%" cover></v-img> -->
        </v-col>
    </v-row>
    <v-row no-gutters id="snap-3" class="section d-flex align-center">
        <v-col cols="12" class="text-center">
            <div class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">We can <span class="font-italic">draw</span> together
            </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-end" style="position: absolute; bottom: 0; right: 0; padding: 20px;">

            <div class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">&</div>
        </v-col>
    </v-row>
    <v-row no-gutters id="snap-1" class="section">
        <v-col cols="12" class="text-center ">
            <video playsinline autoplay muted loop style="width: 100%; height: 100dvh;">
                <source src="~/assets/video/3_4.mov" type="video/mov" />
                <source src="~/assets/video/3_4.webm" type="video/webm" />
            </video>

        </v-col>
    </v-row>
    <v-row no-gutters id="snap-3" class="section d-flex align-center">
        <v-col cols="12" class="text-center">
            <div class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">to design
            </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-end" style="position: absolute; bottom: 0; right: 0; padding: 20px;">

            <div class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">♾</div>
        </v-col>
    </v-row>
    <v-row no-gutters id="snap-1" class="section">
        <v-col cols="12" class="text-center ">
            <img src="~/assets/img/_W4A0594-l-immenso-acquitrino-celeste.jpg" style="height: 100dvh; width: 100%; object-fit: cover;" />
        </v-col>
    </v-row>
    <v-row no-gutters id="snap-3" class="section d-flex align-center">
        <v-col cols="12" class="text-center">
            <div class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">the best ideas
            </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-end" style="position: absolute; bottom: 0; right: 0; padding: 20px;">

            <div class="text-h4 text-sm-h3 text-md-h2 text-lg-h1">!</div>
        </v-col>
    </v-row>
    <v-row no-gutters id="snap-1" class="section">
        <v-col cols="12" class="d-flex justify-center align-center">
            <img src="~/assets/img/_W4A3479.jpg" style="height: 100dvh; width: 100%; object-fit: cover;" />
        </v-col>
    </v-row>
    <v-row no-gutters id="snap-1" class="sub-section justify-center">
        <v-col cols="10" sm="5" class="d-flex justify-center align-center ">
            <div class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-decoration-underline text-center"> The complete
                website will be ready
                on October 2025
            </div>
        </v-col>
    </v-row>

    <v-row no-gutters id="snap-1" class="sub-section justify-center">
        <v-col cols="8" sm="3" class="d-flex justify-center align-center">
            <div class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-center">While waiting you can <span
                    class="font-italic">draw</span> something.
            </div>
        </v-col>
    </v-row>

    <v-row no-gutters id="snap-1" class="section">
        <v-col cols="12" class="d-flex justify-center align-start" style="position: relative;">
            <!-- Image -->
            <img src="assets/img/righe1.jpg" style="height: 90dvh; width: 100%; object-fit: cover;" />

            <v-row no-gutters class="circles-container">
                <v-col cols="6" class="d-flex justify-center align-start">
                    <div class="background_accent circle1 circles"></div>
                </v-col>
                <v-col cols="6" class="d-flex justify-center align-start">
                    <div class="background_accent circle2 circles"></div>
                </v-col>
            </v-row>
        </v-col>
        <v-row>

            <v-col cols="8" sm="6" class="d-flex justify-start align-start">
                <div class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 px-5">Just one brush</div>
            </v-col>
            <v-col cols="4" sm="6" class="d-flex justify-end align-start">
                <div class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 px-5 text-decoration-underline">Save</div>
            </v-col>
        </v-row>
    </v-row>


    <v-row no-gutters id="snap-1" class="sub-section justify-center">
        <v-col cols="12" class="d-flex justify-center align-center ">
            <div class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-decoration-underline text-center"> follow and send
                on IG to submit.
            </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-center align-center ">
            <div class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 main_accent text-center">§</div>
        </v-col>
    </v-row>

    <v-row no-gutters id="snap-1" class="sub-section justify-center">
        <v-col cols="12" class="d-flex justify-center align-center">
            <div class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-center">Otherwise contact me in a traditional way
            </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-center align-center ">
            <div class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 main-accent text-center">👇
            </div>
        </v-col>
    </v-row>

</template>

<script>

</script>

<style scoped>
.circles-container {
    position: absolute;
    top: 20vh;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    /* Ensures the circles are spaced evenly */
}

.circles {
    position: absolute;
    border-radius: 50%;
}

.circle1 {
    width: 20vw;
    /* Adjust the size of the first circle */
    height: 20vw;
}

.circle2 {
    width: 20vw;
    /* Adjust the size of the second circle */
    height: 20vw;
}

.masked {
    mask: url(#eye-mask);
    -webkit-mask: url(#eye-mask);
}

.sub-section {
    position: relative;
    height: 50dvh;
    overflow: hidden;
}

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