<template>
    <v-col cols="12" md="3" class="mx-1 mb-10">

        <div class="taqquini-card" height="60vh"><!-- 
            <img :src="getPhoto(photo)" :alt="photo" class="taqquini-card__photo bg-black"> -->
            <nuxt-img :src="photo ? `/projects/taqquini/${photo}` : '/projects/taqquini/2.webp'" :alt=" photo"
                class="taqquini-card__photo bg-black" />

            <div class="text-h6 alt_font">{{ date }}</div>
            <div class="text-h4">{{ name }}</div>
            <div class="text-h6 font-italic">{{ info }}</div>

        </div>
    </v-col>
</template>

<script>

export default {
    props: {
        name: {
            type: String,
            required: true
        },
        info: {
            type: String,
            required: true
        },
        date: {
            type: String,
            required: true
        },
        photo: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped>
.taqquini-card {
    height: 60vh;
    /* Limit the height of the card to 40% of the viewport height */
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: start;
    max-width: 100%;
    /* Optional, to ensure it doesn't overflow horizontally */
    text-align: center;
}

.taqquini-card__photo {
    width: 100%;
    /* Make the image fill the width of the container */
    height: 80%;
    /* This creates a square aspect ratio */
    object-fit: cover;
    /* Ensures the image covers the space */
}
</style>