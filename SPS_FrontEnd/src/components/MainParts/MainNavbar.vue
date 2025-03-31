




<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom mb-4">
        <div class="container">
            <RouterLink to="/" class="navbar-brand d-flex align-items-center">
                <img src="@/assets/logo.svg" alt="Logo" width="30" height="30" class="me-2">
                <span class="text-primary fw-bold">Student Productivity System</span>
            </RouterLink>
            
            <div class="d-flex gap-2">
                <RouterLink to="/subjects"><button class="btn btn-outline-primary btn-sm">Subjects</button></RouterLink>
                <RouterLink to="/members"><button class="btn btn-outline-primary btn-sm">Group Memberes</button></RouterLink>
                <RouterLink to="/todayswork"><button class="btn btn-outline-primary btn-sm">Today's Work</button></RouterLink>
                <RouterLink to="/projects"><button class="btn btn-outline-primary btn-sm">Projects</button></RouterLink>
                <RouterLink to="/settings"><button class="btn btn-outline-primary btn-sm">Settings</button></RouterLink>
            </div>
        </div>
    </nav>
</template>