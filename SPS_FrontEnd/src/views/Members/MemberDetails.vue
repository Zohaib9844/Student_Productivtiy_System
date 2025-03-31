<script setup>
import MainNavbar from '@/components/MainParts/MainNavbar.vue';
import MainFooter from '@/components/MainParts/MainFooter.vue';
import MemberInfo from '@/components/Members/MemberInfo.vue';
import { ref } from 'vue';

// In a real application, this would be fetched based on the route parameter
const member = ref({
    id: 1,
    name: 'John Doe',
    email: 'john.doe@example.com',
    role: 'Team Lead',
    status: 'Active',
    joinDate: '2024-01-15',
    projects: ['SDA', 'Web Development'],
    phone: '+1 234 567 890',
    department: 'Software Development',
    skills: ['Vue.js', 'JavaScript', 'Bootstrap'],
    bio: 'Experienced team lead with a passion for web development and team collaboration.'
});
</script>

<template>
    <div class="min-vh-100 d-flex flex-column">
        <MainNavbar />
        <main class="flex-grow-1 py-4">
            <div class="container">
                <div class="d-flex align-items-center mb-4">
                    <RouterLink to="/members" class="btn btn-outline-secondary me-3">
                        <i class="bi bi-arrow-left"></i> Back to Members
                    </RouterLink>
                    <h2 class="mb-0">Member Details</h2>
                </div>
                <MemberInfo :member="member" />
            </div>
        </main>
        <MainFooter />
    </div>
</template>

<style scoped>
.flex-grow-1 {
    background-color: #f8f9fa;
}
</style>
