<script>
/* import { NuxtLayout } from '/layouts/default_layout'; */

import { collection, getDocs } from 'firebase/firestore';

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
        try {
            const querySnapshot = await getDocs(collection($firestore, "progetti"));
            this.data = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
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
    <v-row no-gutters id="snap-1" class="section">
        <v-col cols="12" class="text-left ">
            <div class="text-h4 text-sm-h3 text-md-h2 text-lg-h1 blend-text" :style="{
                lineHeight: 1.2
            }">
                All papers, without exception,
                deserve to be repurposed. <q>Taqquini</q>
                is an <u>upcycling</u> project to produce
                handcrafted notebooks made from
                various types of paper.
            </div>
        </v-col>
    </v-row>
    <v-row>
        <v-col cols="12" class="text-center">

            <h1>Firestore Data</h1>
            <ul>
                <li v-for="item in data" :key="item.id">{{ item.name }}</li>
            </ul>
            <p v-if="loading">Loading...</p>
            <p v-if="error">{{ error }}</p>
        </v-col>
    </v-row>
</template>

<style scoped></style>