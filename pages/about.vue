<template>
        <AppHeader />
        <div>
            <v-row no-gutters id="snap-1" class="section ">
                <v-col cols="12" class="d-flex justify-center align-start" style="position: relative;">
                    <!-- Image -->
                    <img src="assets/img/righe1.jpg" style="height: 90vh; width: 100%; object-fit: cover;" />

                    <!-- <v-row no-gutters class="circles-container">
                <v-col cols="6" class="d-flex justify-center align-start">
                    <div class="background_accent circle1 circles"></div>
                </v-col>
                <v-col cols="6" class="d-flex justify-center align-start">
                    <div class="background_accent circle2 circles"></div>
                </v-col>
            </v-row> --><v-container class="fill-height overlay-text pa-5" fluid>
                        <v-row no-gutters class="d-flex align-center" style="height: 20vh;">
                            <v-col cols="12" class="d-flex justify-center align-center">
                                <div class="text-h5 text-sm-h4 text-md-h3 text-lg-h2 text-center">While waiting you can
                                    <a href="/draw" class="font-italic main_accent">draw</a> something.
                                </div>
                            </v-col>
                        </v-row>
                    </v-container>
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
        </div>
        <div>
            <v-row no-gutters id="snap-1" class="sub-section justify-center">
                <v-col cols="12" class="d-flex justify-center align-end ">
                    <div class="text-h3 text-sm-h4 text-md-h2 text-lg-h1 text-center" style="
  transform: rotate(-15deg); "> <i class="main_accent">Follow</i> and
                        <i class="main_accent">send</i>
                        on Instagram to submit
                    </div>
                </v-col>
                <v-col cols="12" class="d-flex justify-center align-center">
                    <div class="text-h3 text-sm-h4 text-md-h3 text-lg-h2 main_accent text-center">§</div>
                </v-col>
            </v-row>

            <v-row no-gutters id="snap-1" class="sub-section justify-center">
                <div class="text-subtitle-1 text-md-h4 main_accent text-center" style="
writing-mode: vertical-lr; 
transform: rotate(180deg);
position: absolute; left: 0px; bottom: 20px;">Do you like Interstellar?
                </div>
                <v-col cols="12" class="d-flex justify-center align-center">
                    <div class="text-h5 text-md-h5 text-lg-h4 text-center">Otherwise contact me in a traditional
                        way
                    </div>
                </v-col>
                <v-col cols="12" class="d-flex justify-center align-center">
                    <div class="text-h3 text-sm-h4 text-md-h3 text-lg-h2 main_accent text-center">❦
                    </div>
                </v-col>
            </v-row>
        </div>
        <AppFooter />
</template>

    <script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";

definePageMeta(
    {
        title: "About",
        meta: [
            {
                name: "description",
                content: "About page"
            }
        ],
    }
)
</script>
