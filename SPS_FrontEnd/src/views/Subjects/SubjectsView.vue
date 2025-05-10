<template>
    <div class="min-vh-100 d-flex flex-column">
        <!-- Navbar -->
        <MainNavbar />
        
        <!-- Main Content -->
        <main class="content-container flex-grow-1">
            <SubjectGrid />
        </main>

        <!-- Footer -->
        <div>
            <MainFooter />
        </div>
    </div>
</template>

<script setup>
import MainNavbar from '@/components/MainParts/MainNavbar.vue';
import SubjectGrid from '@/components/Subjects/SubjectGrid.vue';
import MainFooter from '@/components/MainParts/MainFooter.vue';
</script>

<style scoped>
/* Ensure SubjectGrid is positioned right below the navbar */
.content-container {
    margin-top: 110px; /* Push content below the navbar */
    margin-bottom: 40px; /* Add space above the footer */
    padding: 0 20px; /* Balances horizontal spacing */
}

/* Remove left-side white space */
body, html {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Prevent unwanted horizontal scrolling */
}
</style>
