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
