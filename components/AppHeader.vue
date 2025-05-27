<template>
  <nav class="app-header" @click="scrollToTop">
    <!-- <v-row no-gutters>
      <v-col cols="6" lg="9" class="text-center d-flex px-5 pt-3">
        <div class="text-h3 text-sm-h2 text-md-h1 text-lg-h1">folllit</div>
      </v-col>
      <v-col cols="3" lg="auto" class="text-center justify-end d-flex align-center">
        <div class="text-h5 text-sm-h4 text-md-h3 text-lg-h3 alt_font">projects</div>
      </v-col>
      <v-col cols="3" lg="auto" class="text-center d-flex justify-end align-center px-5">
        <div class="text-h5 text-sm-h4 text-md-h3 text-lg-h3 alt_font">about</div>
      </v-col>
    </v-row> -->
    <div class="header">
      <div class="left">
        <!-- <a href="/" class="text-h3 text-sm-h2 text-md-h1 text-lg-h1 text-decoration-none main_accent">folllit</a> -->
        <a href="file/resume.pdf" target="_blank"
          class="text-h3 text-sm-h2 text-md-h1 text-lg-h1 text-decoration-none main_accent">folllit</a>
      </div>
      <!-- Right-aligned text -->
      <div class="right">
        <!-- <a href="/projects"
          class="text-h5 text-sm-h4 text-md-h3 text-lg-h3 alt_font text-decoration-none main_accent link"
          :class="{ active: isActive('/projects') }">projects</a> -->


        <!-- <a href="/about" class="text-h5 text-sm-h4 text-md-h3 text-lg-h3 alt_font text-decoration-none main_accent link"
          :class="{ active: isActive('/about') }">about</a> -->
        <v-row>
          <v-dialog max-width="100%" style="z-index:9999;">
            <template v-slot:activator="{ props: activatorProps }">
              <a v-bind="activatorProps" style="cursor: pointer;"
                class="text-h5 text-sm-h4 text-md-h3 text-lg-h3 alt_font text-decoration-none main_accent link"
                :class="{ active: isActive('/about') }">about</a>
              <!-- <v-btn v-bind="activatorProps" color="surface-variant" text="Open Dialog" variant="flat"></v-btn> -->
            </template>

            <template v-slot:default="{ isActive }">
              <v-card style="border-radius: 0;">
                <v-card-title class="text-h5 text-sm-h5 text-md-h4 text-lg-h3"><span class=" alt_font">Valerio Romano /
                  </span><i class="main_accent">folllit</i></v-card-title>
                <v-spacer></v-spacer>
                <v-row no-gutters class="align-start ">
                  <v-col cols="12" md="4" class="d-flex justify-center align-start pa-5">
                    <nuxt-img provider="cloudinary" src="ritratto_kvtfvw" alt="profile_picture_valerio_romano" style="
    width: 100%;
    height: 60svh;
    object-fit: cover;" />

                  </v-col>
                  <v-col cols="12" md="8" class="d-flex align-start pa-5">
                    <div class="text-h6 text-sm-h6 text-md-h6 text-lg-h4">
                      <div class="main_accent text-h5 text-sm-h5 text-md-h4 text-lg-h3 pb-5 alt_font"> Biography
                      </div>
                      Born in Pordenone in 2001, he currently lives in Padua, working as a freelance graphic designer.
                      His path has taken him through several cities, including Brussels, Turin, Rome, and Milan, which
                      have all contributed to his personal and professional growth. He studied at Iuav University of
                      Venice, focusing on design and visual communication. He has a long-standing interest in artisanal
                      craftsmanship, which he explored further during his studies. This led to the development of
                      Taqquini, a project focused on the relationship between sustainability, craftsmanship, and
                      upcycling, with particular attention to the Italian context.
                    </div>
                  </v-col>
                </v-row>
                <v-spacer></v-spacer>
                <v-card-actions class="my-5">
                  <v-btn @click="isActive.value = false"><span
                      class=" alt_font text-h6 text-sm-h5 text-md-h4 text-lg-h4">Close </span></v-btn>
                </v-card-actions>
              </v-card>
            </template>
          </v-dialog>
        </v-row>

      </div>
    </div>
    <!-- <div class="px-5 pt-0 pb-5">
      <div class="animated-line "></div>
    </div> -->
  </nav>
</template>

<script>
export default {
  props: {
    blended: {
      type: Boolean, // Expected data type
      required: false, // Ensures the prop is passed
      default: false // Default value if not passed
    }
  },
  mounted() {
    if (this.blended) {
      this.$el.style.mixBlendMode = "difference";
      /* this.$el.style.color = "white"; */
    }
  },
  methods: {
    isActive(path) {
      const route = useRoute();
      return computed(() => route.path) === path;
    },
    scrollToTop() {
      console.log('scrolling to top');
      window.scrollTo({
        top: 0,
        behavior: 'smooth', // Enables smooth scrolling
      });
    },
  },
};
</script>

<style scoped>
.app-header {
  top: 0;
  background-color: transparent;
  /* Transparent background */
  color: rgb(255, 91, 0);
  /* mix-blend-mode: difference; */
  z-index: 9998;
  position: fixed;
  line-height: 1;
  left: 0;
  width: 100%;
  /* 
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;  */
  /* Smooth transition */
}

.app-header.hidden {
  transform: translateY(-100%);
  /* Moves the header out of view */
  opacity: 0;
  /* Fades it out */
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  padding: 16px;
  /* Adjust as needed */
}

.left {
  flex-shrink: 0;
  /* Ensure the left side doesn't shrink */
}

.right {
  display: flex;
  gap: 16px;
  /* Space between "projects" and "about" */
}
</style>
