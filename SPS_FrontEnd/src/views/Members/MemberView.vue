<script setup>
import MainNavbar from '@/components/MainParts/MainNavbar.vue';
import MainFooter from '@/components/MainParts/MainFooter.vue';
import MembersList from '@/components/Members/MembersList.vue';
import { ref, computed } from 'vue';
</script>

<template>
    <div class="min-vh-100 d-flex flex-column">
        <MainNavbar />      
        <main class="flex-grow-1 py-4">
            <div class="container">
                <MembersList />
            </div>
        </main>

        <MainFooter />
    </div>
</template>
 <style scoped>
/* Ensure MembersList starts below navbar */
main {
    margin-top: 100px; /* Push content below navbar */
    padding: 0 !important; /* Remove unwanted padding */
    display: flex;
    flex-direction: column;
    align-items: flex-start; /* Ensure left alignment */
}

/* Force full-width layout */
.container {
    max-width: 100% !important;
    padding-left: 120px !important;
    padding-right: 120px !important;
    margin-left: 0 !important;
}

/* Remove default margins & paddings */
body, html {
    width: 100%;
    margin: 0 !important;
    padding: 0 !important;
    overflow-x: hidden; /* Prevent horizontal scrolling */
}

/* Ensure MembersList is fully aligned */
.container > * {
    align-self: flex-start !important;
}


</style>