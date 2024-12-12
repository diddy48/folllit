<template>
    <div class="pa-5 d-flex align-end" style="height:20vh; transition: 1s ease-in-out;">
        <div class="animated-line "></div>
    </div>
    <v-row no-gutters id="snap-1" class="d-flex align-end justify-center px-5">
        <v-col cols="12" class="text-left d-flex">
            <div class="text-h3 text-sm-h2 text-md-h1 text-lg-h1 title">
                <span class="alt_font">{{ title }}</span>
            </div>
        </v-col>
        <v-col cols="12" class="text-left d-flex">
            <div class="text-h4 text-sm-h4 text-md-h3 text-lg-h2">
            <slot>
            </slot>
            </div>
        </v-col>
    </v-row>
    <div class="pa-5 " style="height:20vh;  transition: 1s ease-in-out;">
        <div class="animated-line "></div>
    </div>
</template>

<script>
export default {
    name: "TitleComponent",
    props: {
        title: String,
    },
    
};
</script>
<style>
.title {
    font-size: 20em !important;
    line-height: 0.8em;
    transition: 2s ease-in-out;
}

@media screen and (max-width: 600px) {
    .title {
        font-size: 1em !important;
    }

}

@media screen and (max-width: 1024px) {
    .title {
        font-size: 5em !important;
    }

}
</style>