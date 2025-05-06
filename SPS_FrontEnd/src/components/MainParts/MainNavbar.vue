<template>
  <nav class="navbar">
    <div class="navbar-container">
      <RouterLink to="/" class="navbar-brand d-flex align-items-center">
        <img src="@/assets/Logo.jpg" alt="Logo" width="30" height="30" class="me-2">
        <span class="text-primary fw-bold">Student Productivity System</span>
      </RouterLink>

      <div class="navbar-buttons">
        <RouterLink to="/subjects" class="navbar-button subjects">Subjects</RouterLink>
        <RouterLink to="/members" class="navbar-button members">Group Members</RouterLink>
        <RouterLink to="/todayswork" class="navbar-button todays-work">Today's Work</RouterLink>
        <RouterLink to="/projects" class="navbar-button projects">Projects</RouterLink>
        <RouterLink to="/settings" class="navbar-button settings">Settings</RouterLink>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router';
</script>

<style scoped>
/* Force Full Width */
.navbar {
    width: 100vw;
    padding: 10px 0;
    background-color: rgba(255, 250, 201, 0.8) !important;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border-radius: 0 0 10px 10px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1030;
    margin: 0;
}

/* Expand navbar container to fix alignment */
.navbar-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px !important;
    margin: 0 !important;
}

/* Navbar buttons full width */
.navbar-buttons {
    display: flex;
    gap: 1.5rem; /* Slightly increased spacing */
    flex-grow: 1;
    justify-content: center;
    padding: 0 !important;
    margin: 0 !important;
    margin-left: 300px !important;
    font-family: 'Inter', sans-serif; /* Modern, clean font */
}

/* Button styling */
.navbar-button {
    padding: 0.6rem 1.5rem;
    border: none;
    border-radius: 12px;
    font-weight: 700;
    font-size: 0.95rem;
    color: rgb(65, 63, 63);
    cursor: pointer;
    text-decoration: none;
    transition: all 0.3s ease;
    background: transparent !important;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

/* Hover effect */
.navbar-button:hover {
    color: rgb(240, 231, 231) !important;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    transform: translateY(-2px);
}

/* Custom hover backgrounds (simplified) */
.subjects:hover { background-color: #c22f2f !important; }
.members:hover { background-color: #3287a8 !important; }
.todays-work:hover { background-color: #c06c28 !important; }
.projects:hover { background-color: #348834 !important; }
.settings:hover { background-color: #8d8882 !important; }

/* Remove extra spacing across the page */
body, html {
    width: 100%;
    overflow-x: hidden;
    padding: 0 !important;
    margin: 0 !important;
}
.text-primary {
    color: #6434EB !important; /* Purple color */
    font-weight: bold;
}

</style>
