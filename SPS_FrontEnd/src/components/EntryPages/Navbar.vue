




<script setup>
import { defineProps } from 'vue';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

// Compute which route is active
const isSignUpActive = computed(() => route.path === '/signup');
const isSignInActive = computed(() => route.path === '/signin');
</script>

<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white border-bottom shadow-sm">
        <div class="container">
            <RouterLink class="navbar-brand fw-bold text-primary" to="/">Student Productivity System</RouterLink>
            <div class="d-flex">
                <RouterLink 
                    to="/signup" 
                    :class="[
                        'btn me-2',
                        isSignUpActive ? 'btn-primary' : 'btn-outline-primary'
                    ]"
                >
                    Sign Up
                </RouterLink>
                <RouterLink 
                    to="/signin" 
                    :class="[
                        'btn',
                        isSignInActive ? 'btn-primary' : 'btn-outline-primary'
                    ]"
                >
                    Login
                </RouterLink>
            </div>
        </div>
    </nav>
</template>

<style scoped>
.btn {
    transition: all 0.3s ease;
}
</style>
  
  