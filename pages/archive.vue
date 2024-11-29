<script>
/* import { NuxtLayout } from '/layouts/default_layout'; */

import { collection, getDocs, query, where } from 'firebase/firestore';

export default {
    name: 'Archive',
    data() {
        return {
            data: [],
            loading: false,
            error: null,
        }
    },
    async mounted() {
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

<template>
    <AppHeader />
    <v-row no-gutters id="snap-1" class="sub-section d-flex align-end justify-center px-5">
        <v-col cols="12" class="text-left d-flex">
            <div class="text-h4 text-sm-h4 text-md-h3 text-lg-h2 blend-text" style="">
                <span class="alt_font">All </span><i class="main_accent">papers,</i><span class="alt_font"> without
                    exception,
                    deserve to be repurposed. </span><i class="main_accent">Taqquini</i>
                is an <i class="main_accent">upcycling</i> <span class="alt_font">project to produce
                    handcrafted notebooks made from
                    various types of paper.</span>
            </div>
        </v-col>
    </v-row>
    <v-row class=" px-5 py-10">
        <!-- <v-col cols="12" class="text-center">

                <h1>Firestore Data</h1>
                <ul>
                    <li v-for="item in data" :key="item.id">{{ item }}</li>
                </ul>
                <p v-if="loading">Loading...</p>
                <p v-if="error">{{ error }}</p>
          
            </v-col>   -->
        <TaqquinoCard v-for="item in data" :key="item.id" :name="item.name" :info="item.info" :date="item.date"
            :photo="item.photo" />
    </v-row>
</template>

<style scoped></style>