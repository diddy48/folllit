
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
        <a href="/" class="text-h3 text-sm-h2 text-md-h1 text-lg-h1 text-decoration-none main_accent"
          >folllit</a>
      </div>
      <!-- Right-aligned text -->
      <div class="right">
        <a href="/projects"
          class="text-h5 text-sm-h4 text-md-h3 text-lg-h3 alt_font text-decoration-none main_accent link"
          :class="{ active: isActive('/projects') }">projects</a>
        <a href="/about" class="text-h5 text-sm-h4 text-md-h3 text-lg-h3 alt_font text-decoration-none main_accent link"
          :class="{ active: isActive('/about') }">about</a>
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
    if(this.blended) {
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
  background-color: transparent; /* Transparent background */
  color: rgb(255, 91, 0);
  /* mix-blend-mode: difference; */
  z-index: 9999;
  position: fixed;
  line-height: 1;
  left: 0;
  width: 100%;/* 
  transition: transform 0.3s ease-in-out, opacity 0.3s ease-in-out;  *//* Smooth transition */
}

.app-header.hidden {
  transform: translateY(-100%); /* Moves the header out of view */
  opacity: 0; /* Fades it out */
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
