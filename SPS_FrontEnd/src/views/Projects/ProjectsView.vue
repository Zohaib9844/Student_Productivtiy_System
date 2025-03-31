<script setup>
import MainNavbar from '@/components/MainParts/MainNavbar.vue';
import MainFooter from '@/components/MainParts/MainFooter.vue';
import ProjectGrid from '@/components/Projects/ProjectGrid.vue';
</script>

<template>
    <div class="min-vh-100 d-flex flex-column">
        <!-- Navbar -->
        <MainNavbar />
        
        <!-- Main Content -->
        <main class="flex-grow-1 py-5">
            <ProjectGrid />
        </main>

        <!-- Footer -->
        <MainFooter />
    </div>
</template>





