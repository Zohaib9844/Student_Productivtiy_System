<script setup>
import { RouterView } from 'vue-router'
import SignInView from './views/SignInView.vue';
</script>

<template>
  
  <RouterView/>

</template>

<style>
html, body {
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  overflow-x: hidden !important;
  background-color: #f4f4f4;
}

#app {
  width: 100%;
  max-width: 1400px;
  margin: 0 auto; /* Center the app instead of margin: 0 120px */
  padding: 0;
  font-weight: normal;
}

/* Media query for larger screens */
@media (min-width: 1400px) {
  #app {
    max-width: 1600px;
  }
}

/* For very large screens */
@media (min-width: 1800px) {
  #app {
    max-width: 1800px;
  }
}


</style>


