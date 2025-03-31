<script setup>
import MainNavbar from '@/components/MainParts/MainNavbar.vue';
import MainFooter from '@/components/MainParts/MainFooter.vue';
import ProjectInfo from '@/components/Projects/ProjectInfo.vue';
import MemberShort from '@/components/Members/MemberShort.vue';
import TaskShort from '@/components/Tasks/TaskShort.vue';

const projectData = {
    title: 'SDA - Software Design & Architecture',
    startDate: 'Jan 23, 2025',
    status: 'Ongoing',
    endDate: 'Feb 3, 2025'
};
</script>

<template>
    <div class="min-vh-100 d-flex flex-column">
        <MainNavbar />
        
        <main class="flex-grow-1 py-4">
            <div class="container">
                <!-- Project Information -->
                <ProjectInfo :project-data="projectData" />

                <!-- Content Grid -->
                <div class="row g-4">
                    <!-- Members Section -->
                    <div class="col-12 col-md-4">
                        <MemberShort />
                    </div>

                    <!-- Tasks Section -->
                    <div class="col-12 col-md-8">
                        <TaskShort />
                    </div>
                </div>
            </div>
        </main>

        <MainFooter />
    </div>
</template>





