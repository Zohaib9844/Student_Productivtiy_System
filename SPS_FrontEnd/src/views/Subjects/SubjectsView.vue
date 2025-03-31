<script setup>
import MainNavbar from '@/components/MainParts/MainNavbar.vue';
import SubjectGrid from '@/components/Subjects/SubjectGrid.vue';
import MainFooter from '@/components/MainParts/MainFooter.vue';
</script>

<template>
    <div class="min-vh-100 d-flex flex-column">
        <!-- Navbar -->
        <MainNavbar />
        
        <!-- Main Content -->
        <main class="flex-grow-1 py-4">
            <SubjectGrid />
        </main>

        <!-- Footer -->
        <MainFooter />
    </div>
</template>





