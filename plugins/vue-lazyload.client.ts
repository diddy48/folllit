import VueLazyload from "vue-lazyload";

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(VueLazyload, {
    preLoad: 1.3, // Preload images that are 1.3x the viewport height away
    error: "/placeholder-error.webp", // Image to show if loading fails
    loading: "/placeholder-loading.webp", // Placeholder image while loading
    attempt: 2, // Retry loading the image once if it fails
  });
});
