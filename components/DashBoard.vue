<style scoped>
.line-div {
    height: 35svh;
}

.text-div {
    height: 65svh;
}

@media screen and (max-width: 600px) {
    .line-div {
        height: 25svh;
    }

    .text-div {
        height: 75svh;
    }

}
</style>
<template>
    <v-row no-gutters class="section-first">
        <v-col cols="12" class="text-center ">
            <video playsinline autoplay muted loop style="width: 100%; height: 100svh;">
                <source src="~/assets/video/Sequenza_02.webm" type="video/webm" />
            </video>
            <v-container class="fill-height overlay-text pa-5" fluid>
                <v-row class="d-flex align-end line-div">
                    <v-col cols="12" class="">
                        <div class="d-flex align-center">
                            <div class="animated-line blend-text"></div>
                        </div>
                    </v-col>
                </v-row>
                <v-row no-gutters class="d-flex align-start" style="height: 70svh;">
                    <v-col cols="12" class="text-left">
                        <div class="item-group" xyz="fade delay-2 origin-right left-4 duration-20">
                            <div class="xyz-in text-h3 text-sm-h2 text-md-h2 text-lg-h1 blend-text"
                                :style="{ lineHeight: 1.2 }">
                                <span class="alt_font">I am a</span>
                                <i :class="{ main_accent: isGraphicVisible }"
                                    style="transition: color 0.5s ease;/* Smooth transition */"> graphic </i>
                                <span class="alt_font">designer with an
                                    artisanal approach, mixing</span>
                                <i :class="{ main_accent: isEditorialVisible }"
                                    style="transition: color 0.5s ease;/* Smooth transition */"> editorial
                                </i>
                                <span class="alt_font">and</span>
                                <i :class="{ main_accent: isUpcyclingVisible }"
                                    style="transition: color 0.5s ease;/* Smooth transition */"> upcycling.</i>

                            </div>
                        </div>

                    </v-col>
                    <!-- <v-col cols="12" class="d-flex justify-end"
                        style="position: absolute; bottom: 0; right: 0; padding: 0px;">
                         <a href="file/resume.pdf"><img style="" src="assets/gif/get_in_touch.gif" class="bollino"alt="logo circle" /></a>
                    <a href="mailto:hello@folllit.it"><img style="" src="assets/gif/get_in_touch.gif" class="bollino"
                            alt="logo circle" /></a>
                    </v-col> -->
                </v-row>
            </v-container>
        </v-col>
    </v-row>
    <!-- <v-row no-gutters id="snap-2" class="section d-flex align-center snap-item" style="background-color: black;">

        <WonderTaqquini :mobile="false" class="d-none d-md-flex" />
        <WonderTaqquini :mobile="true" class="d-md-none" />

    </v-row> -->
    <!-- <v-row no-gutters id="snap-3" class="section d-flex align-center snap-item">
        <v-col cols="12" class="text-center">
            <div class="text-h4 text-sm-h3 text-md-h2 text-lg-h1"><span class="alt_font">We can </span><span
                    class="font-italic main_accent">draw</span><span class="alt_font"> together</span>
            </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-end" style="position: absolute; bottom: 0; right: 0; padding: 20px;">

            <div class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 main_accent">§</div>
        </v-col>
    </v-row> -->
    <!-- <v-row no-gutters id="snap-1" class="section snap-item">
        <v-col cols="12" class="text-center ">
            <video playsinline autoplay muted loop style="width: 100%; height: 100vh;">
                <source src="https://res.cloudinary.com/dlloyc6dj/video/upload/v1733446119/3_4_b_cszwyw.mp4"
                    type="video/mp4" />
            </video>

        </v-col>
    </v-row> -->
    <!-- <v-row no-gutters id="snap-3" class="section d-flex align-center snap-item">
        <v-col cols="12" class="text-center">
            <div class="text-h4 text-sm-h3 text-md-h2 text-lg-h1"><span class="alt_font">to</span> <i
                    class="main_accent">design</i>
            </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-end" style="position: absolute; bottom: 0; right: 0; padding: 20px;">

            <div class="text-h3 text-sm-h3 text-md-h2 text-lg-h1 main_accent">♾</div>
        </v-col>
    </v-row> -->
    <!-- <v-row no-gutters id="snap-1" class="section snap-item">
        <v-col cols="12" class="text-center ">
            <Carousel :carousel-img="carouselImg1" />
        </v-col>
    </v-row> -->
    <!-- <v-row no-gutters id="snap-3" class="section d-flex align-center snap-item">
        <v-col cols="12" class="text-center">
            <div class="text-h4 text-sm-h3 text-md-h2 text-lg-h1"><span class="alt_font">the best</span> <i
                    class="main_accent">ideas</i>
            </div>
        </v-col>
        <v-col cols="12" class="d-flex justify-end" style="position: absolute; bottom: 0; right: 0; padding: 20px;">

            <div class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 main_accent">!</div>
        </v-col>
    </v-row> -->
    <!-- <v-row no-gutters id="snap-1" class="section snap-item">
        <v-col cols="12" class="text-center ">
            <Carousel :carousel-img="carouselImg2" />
        </v-col>
    </v-row> -->
</template>

<script>
import Dialog from './DialogWebsiteReady.vue';
import WonderTaqquini from './WonderTaqquini.vue';

/* import 'animate.css'; */
export default {
    data() {
        return {
            isGraphicVisible: false,
            isEditorialVisible: false,
            isUpcyclingVisible: false,
            /* carouselImg1: ["/img/car1/1_a_xube72.webp", "/img/car1/1_b_m2fggu.webp", "/img/car1/1_c.webp", "/img/car1/1_d.webp", "/img/car1/1_e.webp", "/img/car1/1_f.webp", "/img/car1/1_g.webp", "/img/car1/h.webp",],
            carouselImg2: ["/img/car2/2_a.webp", "/img/car2/2_b.webp", "/img/car2/2_d.webp", "/img/car2/2_e.webp", "/img/car2/2_f.webp", "/img/car2/2_g.webp", "/img/car2/2_h.webp"],
            */carouselImg1: ["1_a_xube72.webp", "1_b_pjei9q.webp", "1_c_mu26rp.webp", "1_d_m2fggu.webp", "1_e_uakvkl.webp", "1_f_or5j7q.webp", "1_g_ak5gtz.webp", "h_l79hwp.webp",],
            carouselImg2: ["2_f_xddod6.webp", "2_d_kfptwj.webp", "2_b_oj9ucx.webp", "2_a_ufjxkz.webp", "2_e_hfkckg.webp", "2_g_s2tynm.webp", "2_h_akqp1v.webp"],

        };
    },
    mounted() {
        setTimeout(() => {
            this.isGraphicVisible = true; // Activate "graphic" after 8 seconds
        }, 1000);

        setTimeout(() => {
            this.isEditorialVisible = true; // Activate "editorial" after 10 seconds
        }, 2000);

        setTimeout(() => {
            this.isUpcyclingVisible = true; // Activate "upcycling" after 12 seconds
        }, 3000);
    },
    methods: {
    },
};
</script>

<style scoped>
/* Animations */
/* 
.animate__animated.animate__fadeInLeft {
    --animate-duration: 3s;
} */


/* END Animations */



.book-container {
    display: flex;
    justify-content: space-between;
}

.book {
    position: absolute;
    max-width: 100%;
    /* Adjust size as needed */
    height: 70svh;
    /* Adjust size as needed */
    transition: transform 0.3s ease-in-out;
}

.book-image {
    width: 100%;
    height: 100%;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.3);
    transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

.book:hover .book-image {
    transform: scale(1.05);
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}



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

video {
    width: 100%;
    height: 100svh;
    object-fit: cover;
    /* 
  position: absolute;
  top: 0;
  left: 0; */
}

.video-container {
    position: relative;
    width: 100%;
    height: 100svh;
    overflow: hidden;
}

.video {
    width: 100%;
    height: 100svh;
    display: block;
}


.bollino {
    height: 200px;
}

@media only screen and (max-width: 767px) {
    .bollino {
        height: 150px;
    }
}
</style>