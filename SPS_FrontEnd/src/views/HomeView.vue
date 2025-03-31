




<script setup>
import MainNavbar from '@/components/MainParts/MainNavbar.vue';
import ProjectShort from '@/components/Projects/ProjectShort.vue';
import AssignmentShort from '@/components/Assignments/AssignmentShort.vue';
import MonthlyView from '@/components/Calendar/MonthlyView.vue';
import MainFooter from '@/components/MainParts/MainFooter.vue';
</script>

<template>
    <div class="min-vh-100 d-flex flex-column">
        <MainNavbar />
        
        <main class="flex-grow-1 container pb-5">
            <div class="row g-4 mb-5">
                <!-- Projects and Assignments Section -->
                <div class="col-12 col-md-6">
                    <ProjectShort />
                </div>
                <div class="col-12 col-md-6">
                    <AssignmentShort />
                </div>
                
                <!-- Calendar Section -->
                <div class="col-12">
                    <MonthlyView />
                </div>
            </div>
        </main>

        <MainFooter />
    </div>
</template>