<template>
  <nav class="navbar navbar-expand-lg border-bottom shadow-sm">
      <div class="navbar-container">
          <!-- Logo and Branding -->
          <RouterLink 
              class="navbar-brand d-flex align-items-center fw-bold brand-text" 
              to="/">
              <img src="@/assets/logo.jpg" alt="Logo" class="logo">
              Student Productivity System
          </RouterLink>

          <!-- Navigation Buttons -->
          <div class="d-flex">
              <RouterLink 
                  to="/signup" 
                  :class="['btn me-2 btn-custom']"
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
                  :class="['btn btn-custom']"
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
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Poppins:wght@500&display=swap');

/* Navbar Styling */
.navbar {
  width: 100vw;
  padding: 10px 0;
  margin: 0;
  background-color: #f4f4f4;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

/* Container to Remove White Spaces */
.navbar-container {
  width: 100%;
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

/* Brand Text Styling */
.brand-text {
  font-family: 'Inter', sans-serif;
  font-size: 22px;
  font-weight: 600;
  letter-spacing: 1.2px;
  color: #6434EB !important;
}

/* Buttons Styling */
.btn-custom {
  font-family: 'Poppins', sans-serif;
  font-weight: 500;
  font-size: 16px;
  padding: 10px 18px;
  border-radius: 5px;
  text-align: center;
  margin-right: 25px;
  transition: all 0.3s ease-in-out;
}

/* Hover Effects */
.btn-custom:hover {
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
