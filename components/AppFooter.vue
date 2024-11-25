<script>
</script>

<template>
  <div class="px-3">
    
  <div class="dotted-line my-0"></div>
  </div>
  <v-col class="snap-item" style="background-color: white;">
    <v-row>
      <v-col cols="4" class="d-flex flex-column align-start justify-start">
        <p class="text-subtitle-1 text-md-h4">Valerio Romano</p>
        <p class="text-subtitle-1 text-md-h4 main_accent font-italic">Designer</p>
      </v-col>
      <v-col cols="4" class="d-flex flex-column align-center justify-start">
        <p class="text-subtitle-1 text-md-h4">Venezia</p>
      </v-col>
      <v-col cols="4" class="d-flex flex-column align-end justify-start">
        <p class="text-subtitle-1 text-md-h4">IG: FOLLLIT</p><!-- 
        <p class="text-subtitle-1 main_accent">✌️</p> -->
        <p class="text-subtitle-1 text-md-h4 main_accent text-decoration-underline">+39 333 8202323</p>
      </v-col>
    </v-row>
<v-spacer style="height: 5px;"></v-spacer>
    <v-row no-gutters>
      <v-col cols="12" class="d-flex flex-column align-center justify-center">
        <a href="mailto:hello@folllit.it" class="dynamic-font main_accent text-decoration-none ma-0">hello@folllit.com</a>
      </v-col>
    </v-row>

    <v-row no-gutters>
      <v-col cols="8" offset="2" class="d-flex flex-column align-center text-center justify-end">
        <p class="text-subtitle-1 text-md-h5">Designed and developed by</p><!-- 
        <p class="text-subtitle-1 font-italic main_accent">folllit</p> -->
        <img class="mt-1" width="70vw" src="assets/logo/orizzontale.png" />
        <p class="text-subtitle-1 text-md-h5">&</p>
        <p class="text-subtitle-1 text-md-h5 font-italic main_accent">Gabriele Romano</p>
        <p class="text-subtitle-2 text-md-h5">folllit © 2024 Tutti i diritti riservati.</p>
      </v-col>

      <v-col cols="4" class="d-flex flex-column align-end justify-end">
      </v-col>
    </v-row>

  </v-col>

</template>
<style scoped>

.dotted-line {
      border-bottom:2px dashed rgb(155, 151, 148); /* Creates a dotted line */
      
  /* border-bottom: 10px dotted rebeccapurple; */
      width: 100%; /* Full width */
      margin: 0px ; /* Adds space around the line */
    }
.dynamic-font {
  font-size: clamp(30px, 15vw, 250px);
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