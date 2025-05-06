<template>
    <div class="min-vh-100 d-flex flex-column">
        <MainNavbar />

        <main class="flex-grow-1 mb-3">
            <div class="container content-container">
                <div class="row g-4 mb-5">
                    <!-- Projects and Assignments Section -->
                    <div class="col-12 col-md-6 pe-md-1">
                        <ProjectShort />
                    </div>
                    <div class="col-12 col-md-6 ps-md-1">
                        <AssignmentShort />
                    </div>

                    <!-- Calendar Section -->
                    <div class="col-12 mt-4">
                        <MonthlyView />
                    </div>
                </div>
            </div>
        </main>

        <MainFooter />
    </div>
</template>

<script setup>
import MainNavbar from '@/components/MainParts/MainNavbar.vue';
import ProjectShort from '@/components/Projects/ProjectShort.vue';
import AssignmentShort from '@/components/Assignments/AssignmentShort.vue';
import MonthlyView from '@/components/Calendar/MonthlyView.vue';
import MainFooter from '@/components/MainParts/MainFooter.vue';
</script>

<style scoped>
/* Ensure the content is positioned right below the navbar */
.content-container {
    margin-top: 90px; /* Push content below the navbar */
    padding: 0 30px !important; /* Add horizontal padding */
    width: 100% !important;
    max-width: 1800px !important; /* Limit width but keep it generous */
    margin-left: auto !important;
    margin-right: auto !important;
}

/* Improved row spacing */
.row {
    margin-left: 60px !important;
    margin-right: 60px !important;
}

/* Proper column spacing */
.col-md-6, .col-12 {
    padding: 0 15px !important;
}

/* Add space between top row and calendar */
.mt-4 {
    margin-top: 2rem !important;
}

/* Ensure components have some breathing room */
.col-md-6 > div, .col-12 > div {
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
    background-color: rgba(255, 255, 255, 0.7);
    transition: transform 0.2s ease;
}

.col-md-6 > div:hover, .col-12 > div:hover {
    transform: translateY(-5px);
}

/* Additional responsive adjustments */
@media (max-width: 768px) {
    .content-container {
        padding: 0 15px !important;
    }
    
    .col-md-6, .col-12 {
        padding: 0 10px !important;
        margin-bottom: 15px;
    }
}
</style>
