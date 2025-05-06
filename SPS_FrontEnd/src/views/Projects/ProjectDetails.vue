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

                <!-- Content Grid - Vertical Stack -->
                <div class="d-flex flex-column g-4">
                    <!-- Members Section -->
                    <div class="col-12 mb-4">
                        <MemberShort />
                    </div>

                    <!-- Tasks Section -->
                    <div class="col-12">
                        <TaskShort />
                    </div>
                </div>
            </div>
        </main>

        <MainFooter />
    </div>
</template>

<style scoped>
/* Proper Bootstrap container styling */
main {
    margin-top: 70px;
    margin-bottom: 70px;
}

/* Bootstrap column adjustments */
.row {
    margin-left: 0 !important;
    margin-right: 0 !important;
}

/* Wider container with even spacing */
.container {
    padding-left: 30px !important;
    padding-right: 30px !important;
    max-width: 1900px !important; /* Wider than Bootstrap default */
    margin-left: 0px; 
    margin-right: 290px; 
}

/* Add more space between items */
.g-4 {
    --bs-gutter-x: 2rem !important;
}
</style>



