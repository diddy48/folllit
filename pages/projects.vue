<template>
    <div>
        <title>folllit - projects</title>
        <meta name="description"
            content=" I am a graphic designer with an artisanal approach, mixing editorial and upcycling." />

        <AppHeader />
        <TitleComponent title="Projects">
            <span class="alt_font">All </span><i class="main_accent">projects</i>
        </TitleComponent>
        <v-spacer style="height: 18vh;"></v-spacer>
        <AppFooter />
    </div>
</template>
    <script setup>
import AppFooter from '~/components/AppFooter.vue';
import AppHeader from '~/components/AppHeader.vue';
import TitleComponent from '~/components/TitleComponent.vue';


 definePageMeta(
    {
        title: 'Projects',
        meta: [
            {
                name: 'description',
                content: 'Projects page'
            }
        ],
    }
)
</script>
