<!-- <script lang="ts">


</script>

<template>
  <div id="navbar">
<a class="active" href="/">folllit</a>
</div>
  
</template>

<style scoped>

body {
  margin: 0;
  font-size: 28px;
  font-family: Arial, Helvetica, sans-serif;
}

.header {
  background-color: #f1f1f1;
  padding: 30px;
  text-align: center;
}

#navbar {
  position: sticky;
  top: 0;
  overflow: hidden;
  background-color: #333;
}

#navbar a {
  float: left;
  display: block;
  color: #f2f2f2;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

#navbar a:hover {
  background-color: #ddd;
  color: black;
}

#navbar a.active {
  background-color: #04AA6D;
  color: white;
}

</style> -->
<template>
  <div class="app-header" :class="{ /* hidden: isScrollingDown  */}">
    <div class="pa-5 text-h3 text-md-h2 text-lg-h1">folllit</div>
  </div>
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
  data() {
    return {
      isScrollingDown: false,
      lastScrollY: 0,
    };
  },
  mounted() {
    // Listen for scroll events
    window.addEventListener("scroll", this.handleScroll);
    if(this.blended) {
      this.$el.style.mixBlendMode = "difference";
      /* this.$el.style.color = "white"; */
    }
  },
  beforeDestroy() {
    // Clean up the event listener
    window.removeEventListener("scroll", this.handleScroll);
  },
  methods: {
    handleScroll() {
      const currentScrollY = window.scrollY;

      // Detect scroll direction
      this.isScrollingDown = currentScrollY > this.lastScrollY && currentScrollY > 50;

      // Update the last scroll position
      this.lastScrollY = currentScrollY;
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
  z-index: 1004;
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
</style>
