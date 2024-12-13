<template>
    <div>
        <title>folllit</title>
        <meta name="description"
            content=" I am a graphic designer with an artisanal approach, mixing editorial and upcycling." />

        <!-- <div>
            Show Splash: {{ showSplash }}
        </div>
        <div>
            Unlocked: {{ unlocked }}
        </div>
        <div>
            ShowUnlocker: {{ showUnlocker }}
        </div> -->
        <Splash v-if="showSplash" @splash-ended="onSplashEnded" />
        <Unlocker v-if="showUnlocker" @unlocked="onUnlocked" />

        <transition name="fade">
            <div v-if="unlocked" class="background_accent scroll-container">
                <AppHeader :blended="false" />
                <DashBoard />
                <AppFooter />
            </div>
        </transition>
    </div>

</template>
<script>
import { tr } from 'vuetify/locale';

export default {
    data() {
        return {
            unlocked: false,
            showSplash: false,
            showUnlocker: false
        }
    },
    created() {
        // Use created for server-side operations
        definePageMeta({
            title: 'Home',
            meta: [
                {
                    name: "I am a designer with an artisanal approach, mixing editorial and upcycling.",
                    content: "Home page"
                }
            ],
        });
    },
    mounted() {
        // Use mounted instead of created for client-side operations
        this.initializePageAccess()
    },
    methods: {
        initializePageAccess() {
            // Use a more robust check for first-time visit
            const visitCount = parseInt(sessionStorage.getItem('visit-count') || '0')

            if (visitCount === 0) {
                // First visit: show splash and unlocker
                this.showSplash = true
                this.showUnlocker = true

                // Increment visit count
                sessionStorage.setItem('visit-count', '1')
            } else {
                // Subsequent visits: check for previous unlock status
                this.unlocked = sessionStorage.getItem('site-unlocked') === 'true'
                //console.log('Unlocked:', this.unlocked)
            }
            if(visitCount > 0 && !this.unlocked) {
                this.showUnlocker = true
                this.showSplash = true
            }
        },
        onSplashEnded() {
            // Ensure clean state management
            this.showSplash = false
        },
        onUnlocked() {
            this.unlocked = true
            this.showUnlocker = false

            // Persist unlock state
            sessionStorage.setItem('site-unlocked', 'true')
        }
    }
}
</script>

<style scoped>
</style>