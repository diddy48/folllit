<template>
    <v-app>
        <Splash v-if="showSplash" @splash-ended="onSplashEnded" />
        <Unlocker v-if="showUnlocker" @unlocked="onUnlocked" />

        <transition name="fade">
            <div v-if="unlocked" class="background_accent scroll-container">
                <AppHeader :blended="false" />
                <DashBoard />
                <AppFooter />
            </div>
        </transition>
    </v-app>
</template>

<script>
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
.fade-enter-active,
.fade-leave-active {
    /* transition: opacity 0.8s ease-in-out; */
}

.fade-enter-from,
.fade-leave-to {
    /* opacity: 0; */
}
</style>