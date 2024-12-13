<template>
    <div>
        <title>folllit - about</title>
        <meta name="description"
            content=" I am a graphic designer with an artisanal approach, mixing editorial and upcycling." />

        <AppHeader />
        <!-- <div>
            <v-row no-gutters id="snap-1" class="section ">
                <v-col cols="12" class="d-flex justify-center align-start" style="position: relative;">
                    <img src="assets/img/righe1.jpg" style="height: 90vh; width: 100%; object-fit: cover;" />
                    <v-container class="fill-height overlay-text pa-5" fluid>
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
        </div> -->
        <div>
            <!-- <v-spacer style="height: 20vh;"></v-spacer> -->
            <TitleComponent title="About">
                <span class="alt_font">Valerio Romano / </span><i class="main_accent">folllit</i>
            </TitleComponent>
            <v-row no-gutters class="align-start ">
                <v-col cols="12" md="4" class="d-flex justify-center align-start pa-5">
                    <nuxt-img provider="cloudinary" src="valerio_romano_folllit_ritratto_pmbdvp"
                        alt="profile_picture_valerio_romano" style="
    width: 100%;
    height: 60svh;
    object-fit: cover;" />

                </v-col>
                <v-col cols="12" md="8" class="d-flex align-start pa-5">
                    <div class="text-h6 text-sm-h6 text-md-h5 text-lg-h3">
                        <div class="main_accent text-h4 text-sm-h4 text-md-h3 text-lg-h2 pb-5 alt_font"> Biography
                        </div>
                        Born in Pordenone in 2001, he currently resides in Padua, where he works as a graphic
                        designer and studies Communication Design at IUAV University of Venice. He has always been
                        interested in artisanal craftsmanship and deepens his skills, knowledge, and applications in
                        this
                        field through his studies, leading to the creation of the "Taqquini" project. This
                        initiative
                        aims to
                        explore the connection between sustainability, craftsmanship, and upcycling, particularly
                        within
                        the Italian context.
                    </div>
                </v-col>
            </v-row>
        </div>
        <div>
            <v-row no-gutters class="sub-section justify-center">
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
    </div>
</template>

<script setup>
import AppHeader from "@/components/AppHeader.vue";
import AppFooter from "@/components/AppFooter.vue";
import TitleComponent from "~/components/TitleComponent.vue";

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
