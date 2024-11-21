<script>
</script>

<template>
  <v-col>
    <v-row>
      <v-col cols="4" class="d-flex flex-column align-start justify-start">
          <p class="text-h5">Valerio Romano</p>
          <p class="text-h5 main_accent font-italic" >Designer</p>
      </v-col>
      <v-col cols="4" class="d-flex flex-column align-center justify-start">
        <p class="text-h5">Venezia</p>
      </v-col>
      <v-col cols="4" class="d-flex flex-column align-end justify-start">
        <p class="text-h5 text-uppercase">IG: folllit</p>
        <p class="text-h2 main_accent">✌️</p>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="12" class="d-flex flex-column align-center justify-center" >
        <a href="mailto:hello@folllit.it" class="dynamic-font main_accent text-decoration-none">hello@folllit.it</a>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="4" class="d-flex flex-column align-start justify-end" >
  <p class="text-h5">+39 333 8202323</p>
  <p class="text-subtitle-1 main_accent">folllit © 2024 Tutti i diritti riservati.</p>
</v-col>

      <v-col cols="4" class="d-flex flex-column align-center text-center justify-end" >
        <p class="text-subtitle-2">Designed and developed by</p>
        <p class="text-subtitle-1 font-italic main_accent">folllit</p>
        <p class="text-subtitle-2">&</p>
        <p class="text-subtitle-1 font-italic main_accent">Gabriele Romano</p>
      </v-col>

      <v-col cols="4" class="d-flex flex-column align-end justify-end">
        <img class="responsive-image" src="assets/logo/orizzontale.png" />
      </v-col>
    </v-row>

  </v-col>

</template>
<style scoped>
.dynamic-font {
  font-size: clamp(30px, 10vw, 250px);
  /* Minimum 16px, responsive scaling, maximum 60px */
  text-align: center;
  /* Center the text horizontally */
}

/* General styling for responsive image */
.responsive-image {
  max-width: 60%;
  /* Default for larger devices */
  max-height: auto;
  height: auto;
  object-fit: contain;
  display: block;
}

/* Override for smaller devices */
@media (max-width: 768px) {
  .responsive-image {
    max-width: 100%;
    /* Expand to full width for smaller screens */
  }
}

@media (max-width: 480px) {
  .responsive-image {
    max-width: 100%;
    /* Slightly reduce for extra-small devices */
  }
}
</style>