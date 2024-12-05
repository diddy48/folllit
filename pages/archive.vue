<script>
/* import { NuxtLayout } from '/layouts/default_layout'; */

import { collection, getDocs, query, where } from 'firebase/firestore';

export default {
    name: 'Archive',
    data() {
        return {
            data: [],
            loading: true,
            error: null,
        }
    },
    async mounted() {
        definePageMeta({
            title: 'Archive',
            meta: [
                {
                    name: "description",
                    content: "Archive page"
                }
            ],
        });

        const { $firestore } = useNuxtApp(); // Access the provided Firestore instance
        this.loading = true;
        try {/* 
            const querySnapshot = await getDocs(collection($firestore, "progetti"));+
            this.data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })); */
            // Query Firestore for the document where name is "Taqquini"
            const q = query(collection($firestore, "progetti"), where("name", "==", "Taqquini"));
            const querySnapshot = await getDocs(q);

            // Extract only the `prodotti` field
            querySnapshot.forEach((doc) => {
                this.data = doc.data().prodotti; // Get the `prodotti` field
            });
        } catch (err) {
            this.error = `Error fetching data: ${err.message}`;
        } finally {
            this.loading = false;
        }
    },
}
</script>
<style scoped>
.title {
    font-size: 20em !important;
    line-height: 0.8em;
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
<template>
    <div>
        <AppHeader /><!-- 
    <v-spacer style="height: 20vh;"></v-spacer> -->
        <div class="pa-5 d-flex align-end" style="height:20vh; transition: 1s ease-in-out;">
            <div class="animated-line "></div>
        </div>
        <v-row no-gutters id="snap-1" class="d-flex align-end justify-center px-5" style=" transition: 1s ease-in-out;">
            <v-col cols="12" class="text-left d-flex">
                <div class="text-h3 text-sm-h2 text-md-h1 text-lg-h1 blend-text title">
                    <span class="alt_font">Archive</span>
                </div>
            </v-col>
            <v-col cols="12" class="text-left d-flex">
                <div class="text-h4 text-sm-h4 text-md-h3 text-lg-h2 blend-text">
                    <span class="alt_font">All </span><i class="main_accent">papers,</i><span class="alt_font"> without
                        exception,
                        deserve to be repurposed. </span><i class="main_accent">Taqquini</i>
                    <span class="alt_font"> is an</span> <i class="main_accent">upcycling</i> <span
                        class="alt_font">project
                        to produce
                        handcrafted notebooks made from
                        various types of paper.</span>
                </div>
            </v-col>
        </v-row><!-- 
    <v-spacer style="height: 20vh;"></v-spacer> -->
        <div class="pa-5 " style="height:20vh;  transition: 1s ease-in-out;">
            <div class="animated-line "></div>
        </div>
        <v-row class=" px-5" no-gutters>
            <v-row v-if="loading" style="height: 60vh;">
                <v-col cols="12" class="text-center">
                    <p class="text-h4 text-md-h3">Just wait a second...</p>
                </v-col>
            </v-row>
            <v-row v-if="error">
                <v-col cols="12" class="text-center">
                    <p class="text-h4 text-md-h3">Ops...An unexptected error</p>
                </v-col>
            </v-row>

            <TaqquinoCard v-for="item in data" :key="item.id" :name="item.name" :info="item.info" :date="item.date"
                :photo="item.photo" />
        </v-row>
        <AppFooter />
    </div>
</template>

