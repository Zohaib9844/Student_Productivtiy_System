<template>
  <nav class="navbar">
    <div class="navbar-container">
      <RouterLink to="/" class="navbar-brand d-flex align-items-center">
        <img src="@/assets/Logo.jpg" alt="Logo" class="logo">
        <span class="brand-text text-primary fw-bold">
          Student Productivity System
        </span>
      </RouterLink>

      <div class="navbar-buttons">
        <RouterLink to="/subjects" class="navbar-button subjects" :class="{ 'active-nav': isActivePage('subjects') }">Subjects</RouterLink>
        <RouterLink to="/members" class="navbar-button members" :class="{ 'active-nav': isActivePage('members') }">Group Members</RouterLink>
        <RouterLink to="/todayswork" class="navbar-button todays-work" :class="{ 'active-nav': isActivePage('todayswork') }">Today's Work</RouterLink>
        <RouterLink to="/projects" class="navbar-button projects" :class="{ 'active-nav': isActivePage('projects') }">Projects</RouterLink>
        <RouterLink to="/settings" class="navbar-button settings" :class="{ 'active-nav': isActivePage('settings') }">Settings</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { useRoute } from 'vue-router';

const route = useRoute();
const isActivePage = (page) => route.path.includes(page);
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Poppins:wght@500&display=swap');

/* Default Navbar Styling */
.navbar {
    width: 100vw;
    padding: 10px 0;
    background-color: #f4f4f4 !important;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 0 0 10px 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1030;
    margin: 0;
}

/* Navbar container alignment */
.navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px !important;
}

/* Logo styling */
.logo {
    height: 40px;
    margin-right: 10px;
    margin-left: 25px;
}

/* Brand Name Styling */
.brand-text {
    font-family: 'Inter', sans-serif;
    font-size: 22px;
    font-weight: 600;
    letter-spacing: 1.2px;
    color: #6434EB !important;
}

/* Navbar buttons styling */
.navbar-buttons {
    display: flex;
    gap: 1.5rem;
    flex-grow: 1;
    justify-content: center;
    margin-left: 300px !important;
    font-family: 'Poppins', sans-serif;
}

/* Default Button Styling */
.navbar-button {
    padding: 12px 18px;
    border: none;
    border-radius: 12px;
    font-weight: 500;
    font-size: 16px;
    text-transform: uppercase;
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease-in-out;
    background: transparent !important;
    letter-spacing: 0.5px;
    color: rgb(240, 231, 231);
}

/* Highlight the active page */
.active-nav {
    background-color: #6434EB !important;
    color: white !important;
    border-radius: 8px;
    padding: 10px 18px;
}

/* Button background colors */
.subjects { background-color: #d00000 !important; }
.members { background-color: #3287a8 !important; }
.todays-work { background-color: #a98467 !important; }
.projects { background-color: #52b788 !important; }
.settings { background-color: #8d8882 !important; }

/* Remove extra spacing */
body, html {
    width: 100%;
    overflow-x: hidden;
    padding: 0 !important;
    margin: 0 !important;
}
</style>
