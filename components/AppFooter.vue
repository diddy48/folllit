<script>export default {
  name: "Footer",
  data() {
    return {
      showDialog: false,
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.initializeRepetition();
    });

    this.observeElement();
  },
  methods: {
    initializeRepetition() {
      const outerElement = document.querySelector(".outer");
      const contentElement = outerElement.querySelector(".content");
      const loopElement = outerElement.querySelector(".loop");

      this.repeatContent(contentElement, outerElement.offsetWidth);

      // Duplicate the content of the slider for continuous loop
      loopElement.innerHTML = loopElement.innerHTML + loopElement.innerHTML;
    },
    repeatContent(el, till) {
      let html = el.innerHTML;
      let counter = 0; // To prevent infinite loops

      // Keep appending the content until the width requirement is met
      while (el.offsetWidth < till && counter < 100) {
        el.innerHTML += html;
        counter++;
      }
    }, observeElement() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !this.showDialog) {
              console.log("show dialog");
              this.showDialog = true; // Show the dialog
              observer.disconnect(); // Stop observing after showing the dialog
            }
          });
        },
        { threshold: 0.1 } // Adjust this to control how much of the element must be visible
      );

      observer.observe(this.$refs.showDialogElement);
    },
  },
};

</script>

<template>
  <footer ref="showDialogElement" style="background-color: rgb(255, 91, 0);" class="snap-item">
    <!-- <div class="pa-3">
      <div class="dotted-line my-0"></div>
    </div>
    <v-col class="snap-item pa-0" style="background-color: white; overflow-x: hidden;">
      <v-row class="px-3">
        <v-col cols="4" class="d-flex flex-column align-start justify-start">
          <p class="text-subtitle-1 text-md-h4">Valerio Romano</p>
          <p class="text-subtitle-1 text-md-h4 main_accent font-italic">Designer</p>
        </v-col>
        <v-col cols="4" class="d-flex flex-column align-center justify-start">
          <p class="text-subtitle-1 text-md-h4">Venezia</p>
        </v-col>
        <v-col cols="4" class="d-flex flex-column align-end justify-start">
          <p class="text-subtitle-1 text-md-h4">IG: FOLLLIT</p>
          <a href="tel:+393338202323" class="text-subtitle-1 text-md-h4 main_accent">+39 333 8202323</a>
        </v-col>
      </v-row>
      <v-spacer style="height: 5px;"></v-spacer>
      <div class="outer">
        <div class="loop">
          <a href="mailto:hello@folllit.it" class="dynamic-font main_accent text-decoration-none ma-0 content">❧
            hello@folllit.com</a>
        </div>
      </div>

      <v-row no-gutters>
        <v-col cols="8" offset="2" class="d-flex flex-column align-center text-center justify-end">
          <p class="text-subtitle-1 text-md-h5">Designed and developed by</p>
          <img class="mt-1" width="70vw" src="assets/logo/orizzontale.png" />
          <p class="text-subtitle-1 text-md-h5">&</p>
          <p class="text-subtitle-1 text-md-h5 font-italic main_accent"><a
              href="https://www.linkedin.com/in/gabriele-romano-885870184/" target="_blank" class=" main_accent my_link">Gabriele
              Romano</a></p>
          <p class="text-subtitle-2 text-md-h5">folllit © 2024 Tutti i diritti riservati.</p>
        </v-col>

        <v-col cols="4" class="d-flex flex-column align-end justify-end">
        </v-col>
      </v-row>

    </v-col> -->
    <v-col cols="12" class="pa-5 justify-center text-white">
      <!--  <div class="pa-3">
        <div class="my-0"></div>
      </div> -->
      <v-row>
        <v-col cols="12">
          <div class="line1 mt-5"></div>
          <div class="outer">
            <div class="loop">
              <a href="mailto:hello@folllit.it" class="dynamic-font text-decoration-none ma-0 content text-white"> ⅏
                hello@folllit.com</a>
            </div>
          </div>
          <div class="line2"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="4" class="d-flex flex-column align-start justify-start">
          <p class="text-subtitle-1 text-md-h4 alt_font">Valerio Romano</p>
          <p class="text-subtitle-1 text-md-h4 font-italic">Designer</p>
        </v-col>
        <v-col cols="4" class="d-flex align-start justify-center">
          <a href="tel:+393338202323"
            class="text-subtitle-1 text-md-h4 text-decoration-none text-white  font-italic">Call me</a>
        </v-col>
        <v-col cols="4" class="d-flex flex-column align-end justify-start">
          <a href="https://www.instagram.com/folllit/" target="_blank"
            class="text-subtitle-1 text-md-h4 alt_font text-white text-decoration-none">Instagram</a>
          <a href="https://www.linkedin.com/in/valerio-romano-427980272?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
            target="_blank" class="text-subtitle-1 text-md-h4 alt_font text-white text-decoration-none">linkedin</a>
          <!-- <a class="text-subtitle-1 text-md-h4 alt_font text-white text-decoration-none">Dribble</a> -->
        </v-col>

      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="line3"></div>
        </v-col>
      </v-row>

      <v-row>
        <v-col cols="12">
          <p class="text-h3 text-md-h2 text-decoration-underline font-italic">Download 2024 Resumé</p>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="12">
          <div class="line4"></div>
        </v-col>
      </v-row>
      <v-row>
        <v-col cols="8" md="10" class="d-flex align-center">
          <p class="text-subtitle-2 text-md-h6">folllit © 2024 Tutti i diritti riservati. Designed and developed by
            folllit &<a href="https://www.linkedin.com/in/gabriele-romano-885870184/" target="_blank"
              class=" my_link text-white text-decoration-none"> Gabriele
              Romano</a></p>
        </v-col>
        <v-col cols="4" md="2" class="d-flex justify-end">
          <img class="mt-1" max-width="auto" height="50px" src="assets/logo/esteso_bianco.png" />
        </v-col>
      </v-row>
    </v-col>
  </footer>
  <DialogWebsiteReady :visible="showDialog" title="Just a quick info" success="Understood"
    @update:visible="showDialog = $event" @accept="{ }">
    <p>The complete
      website will be ready
      on October 2025</p>
  </DialogWebsiteReady>

</template>
<style scoped>
.my_link {
  text-decoration: none;
  transition: 1s ease-in-out;
}

.my_link:hover {
  text-decoration: underline;
  font-size: 1.3em;
  transition: 1s ease-in-out;
}

/* lines */
hr {
  color: white;
}

.line1 {
  display: block;
  height: 5pt;
  border: 0;
  border-top: 5pt solid white;
}

.line2 {
  display: block;
  height: 2pt;
  border: 0;
  border-top: 4pt solid white;
}

.line3 {
  display: block;
    height: 2pt;
    border: 0;
    border-top: 3pt dashed white;
}

.line4 {
  display: block;
  border: 0;
  border-top: 4pt dotted white;
}


/* rolling mail */
.content {
  padding-left: 0.25em;
}

@media only screen and (max-width: 767px) {
  .content {
    font-size: 2rem !important;
    padding-left: 0.25em;
  }
}

/* 
@media only screen and (min-width: 767px) and (max-width: 1024px) {
  .content {
    font-size: 2.25rem !important;
    padding-left: 0.25em;
  }
} */

.outer {
  overflow: hidden !important;
}

.outer div {
  display: inline-block;
}

.loop {
  white-space: nowrap;
  animation: loop-anim 15s linear infinite;
}

@keyframes loop-anim {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-50%);
    /* Moves one full copy out of view */
  }
}

@media only screen and (max-width: 767px) {
  .loop {
    animation: loop-anim 10s linear infinite;
  }
}

/* END rolling mail */



.dotted-line {
  border-bottom: 2px dashed rgb(155, 151, 148);
  /* Creates a dotted line */

  /* border-bottom: 10px dotted rebeccapurple; */
  width: 100%;
  /* Full width */
  margin: 0px;
  /* Adds space around the line */
}

.dynamic-font {
  font-size: clamp(30px, 30vh, 250px);
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