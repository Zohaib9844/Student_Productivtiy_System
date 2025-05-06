<template>
  <nav class="navbar navbar-expand-lg border-bottom shadow-sm">
      <div class="navbar-container">
          <!-- Logo and Branding -->
          <RouterLink style="color: #6434EB;" class="navbar-brand d-flex align-items-center fw-bold" to="/">
    <img src="@/assets/logo.jpg" alt="Logo" class="logo">
    Student Productivity System
</RouterLink>

          <!-- Navigation Buttons -->
          <div class="d-flex">
              <RouterLink 
                  to="/signup" 
                  :class="['btn me-2']"
                  :style="{
                      backgroundColor: isSignUpActive ? '#6434EB' : 'white',
                      color: isSignUpActive ? 'white' : '#6434EB',
                      border: '1px solid #6434EB'
                  }"
              >
                  Sign Up
              </RouterLink>

              <RouterLink 
                  to="/signin" 
                  :class="['btn']"
                  :style="{
                      backgroundColor: isSignInActive ? '#6434EB' : 'white',
                      color: isSignInActive ? 'white' : '#6434EB',
                      border: '1px solid #6434EB'
                  }"
              >
                  Login
              </RouterLink>
          </div>
      </div>
  </nav>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const isSignUpActive = computed(() => route.path === '/signup');
const isSignInActive = computed(() => route.path === '/signin');
</script>

<style scoped>
/* Force Navbar to Full Width */
.navbar {
  width: 100vw;
  padding: 10px 0;
  margin: 0;
  background-color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

/* Container to Remove White Spaces */
.navbar-container {
  width: 100%;
  padding-left: 0 !important;
  padding-right: 0 !important;
  margin: 0 !important;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* Logo Styling */
.logo {
  height: 40px;
  margin-right: 10px;
  margin-left: 25px;
}

/* Buttons Styling */
.btn {
  transition: all 0.3s ease;
  padding: 8px 16px;
  font-size: 1rem;
  border-radius: 5px;
  text-align: center;
  margin-right: 25px;
}

/* Hover Effects */
.btn:hover {
  background-color: #6434EB !important;
  color: white !important;
}

/* Remove Any Extra Spacing */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body, html {
  width: 100%;
  overflow-x: hidden;
}
</style>
