<template>
    <transition name="fade">
        <div v-if="visible" class="dialog-overlay" @click.self="{ }/* closeDialog */">
            <div class="dialog-box ma-5">
                <!-- <header class="dialog-header">
                    <div class="text-h4 text-md-h3 alt_font">{{ title }}</div>
                    <button class="close-button" @click="closeDialog">×</button>
                </header>
                <div class="dialog-content">
                    <slot />
                </div>
                <footer class="dialog-footer">
                    <div @click="accept" class="text-h6 text-md-h5">{{ success }}</div>
                </footer> -->

                <v-row class="d-flex align-start">

                    <v-col cols="11" class="d-flex justify-start align-center">

                        <div class="text-h4 text-md-h3 alt_font">{{ title }}</div>
                    </v-col>
                    <v-col cols="1" class="d-flex justify-end self-align-start">
                        <button class="close-button" @click="closeDialog">×</button>
                    </v-col>
                </v-row>
                <div class="dialog-content">
                    <slot />
                </div>
                <v-row class="d-flex align-center">

                    <v-col cols="12" class="d-flex justify-end text-right">

                        <div @click="accept" class="text-h6 text-md-h5" style="cursor: pointer;">{{ success }}</div>
                    </v-col>
                </v-row>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    props: {
        visible: {
            type: Boolean,
            required: true,
        },
        title: {
            type: String,
            default: "Dialog",
        },
        success: {
            type: String,
            default: "Accept"
        }
    },
    emits: ["update:visible", "accept"],
    methods: {
        closeDialog() {
            this.$emit("update:visible", false);
        },
        accept() {
            /* this.$emit("accept"); */
            this.closeDialog();
        },
    },
};
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.8s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}

/* Override for smaller devices */
@media (max-width: 768px) {
    .dialog-overlay {
        height: 100%;
        width: 100%;
    }
}

@media (max-width: 480px) {
    .dialog-overlay {
        height: 100%;
        width: 100%;
    }
}

.dialog-overlay {
    position: fixed;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
}

.dialog-box {
    background: white;
    color: white;
    max-width: 800px;
    width: 90%;
    padding: 20px;
    background-color: rgb(255, 91, 0);

}



.dialog-content {
    margin: 15px 0;
}
</style>
