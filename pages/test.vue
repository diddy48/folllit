<template>
    <transition name="fade">
      <div v-if="!isSuccessful">
        This div will fade out on success.
      </div>
    </transition>
  
    <button @click="markAsSuccessful">Mark as Successful</button>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const isSuccessful = ref(false);
  
  function markAsSuccessful() {
    isSuccessful.value = true;
  }
  </script>
  
  <style scoped>

  
  /* CSS for the fade transition */
  .fade-enter-active, .fade-leave-active {
    transition: opacity 0.5s ease;
  }
  .fade-enter-from, .fade-leave-to {
    opacity: 0;
  }
  </style>
  