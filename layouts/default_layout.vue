<!--Default layout used by all pages. Includes the header and footer-->

<template>
    <div id="app">
        <v-app id="inspire">
            <!-- <NuxtLoadingIndicator color="#f1f6f9" :height=6 /> -->
            <AppHeader/>

            <div style="margin-top: 75px;">
                <slot/>
            </div>
            
            <!--This button anchors to the bottom right and allows
            getting back to the page top quickly-->
            <!-- <v-btn
                v-show="showUpButton"
                v-scroll="onScroll"
                icon="mdi-arrow-up-bold"
                color="darker-blue"
                location="bottom right"
                position="fixed"
                style="z-index: 3; border: 2px solid white;"
                class="ma-3"
                @click="toTop"
                aria-label="back to page top"
            ></v-btn> -->

           <!--  <AppFooter/> -->
        </v-app>
    </div>
    
</template>

<script setup>
    /* const showUpButton = ref(false)
    const top = ref(0)

    function toTop() {
        window.scrollTo(0, 0)
    }

    function onScroll(e) {
        if (typeof window === 'undefined') return
        top.value = window.scrollY || e.target.scrollTop || 0
        showUpButton.value = top.value > 200
    } */
</script>

<style>
    :root {
        --color1 : #000000;
        --color2 : #f1f6f9;
        --color3 : #394867;
        --color4 : #212a3e;
        --color5 : #9ba4b5;
        
        --main-font: 'EB Garamond', sans-serif;
    }

    * {
        font-family: 'EB Garamond', sans-serif;
    }

    
</style>