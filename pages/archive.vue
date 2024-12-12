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
<template>
    <div>
        <title>folllit - archive</title>
        <meta name="description"
            content=" I am a graphic designer with an artisanal approach, mixing editorial and upcycling." />

        <AppHeader />
        <TitleComponent title="Archive">
            <span class="alt_font">All </span><i class="main_accent">papers,</i><span class="alt_font"> without
                exception,
                deserve to be repurposed. </span><i class="main_accent">Taqquini</i>
            <span class="alt_font"> is an</span> <i class="main_accent">upcycling</i> <span class="alt_font">project
                to produce
                handcrafted notebooks made from
                various types of paper.</span>
        </TitleComponent>

        <v-row class=" px-5" no-gutters>
            <Transition name="fade">
                <v-row v-if="loading" style="height: 60vh;">
                    <v-col cols="12" class="text-center">
                        <p class="text-h4 text-md-h3">Just wait a second...</p>
                    </v-col>
                </v-row>
            </Transition>
            <Transition name="fade">
                <v-row v-if="error">
                    <v-col cols="12" class="text-center">
                        <p class="text-h4 text-md-h3">Ops...An unexpected error</p>
                    </v-col>
                </v-row>
            </Transition>
                <TaqquinoCard v-for="item in data" :key="item.id" :name="item.name" :info="item.info" :date="item.date"
                    :photo="item.photo" />
        </v-row>
        <AppFooter />
    </div>
</template>
