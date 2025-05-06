<template>
    <div class="min-vh-100 d-flex flex-column">
        <!-- Navbar -->
        <MainNavbar />
        
        <!-- Main Content -->
        <main class="content-container">
            <SubjectGrid />
        </main>

        <!-- Footer -->
        <MainFooter />
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
