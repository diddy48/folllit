<template>
    <div>
        <AppHeader />
        <v-spacer style="height: 18vh;"></v-spacer>
        <AppFooter />
    </div>
</template>
    <script setup>
import AppFooter from '~/components/AppFooter.vue';
import AppHeader from '~/components/AppHeader.vue';


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
