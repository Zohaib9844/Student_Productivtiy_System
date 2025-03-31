<script setup>
import MainNavbar from '@/components/MainParts/MainNavbar.vue';
import MainFooter from '@/components/MainParts/MainFooter.vue';
import AssignmentShort from '@/components/Assignments/AssignmentShort.vue';
import TaskShort from '@/components/Tasks/TaskShort.vue';
import MonthlyView from '@/components/Calendar/MonthlyView.vue';

// Sample data for tasks
const tasks = [
    { 
        name: 'First Job', 
        givenTo: 'ShivaD', 
        date: 'Feb 1, 2025',
        status: 'Ongoing',
        course: 'SDA',
        description: 'Do the research',
        attachedFile: 'research.pdf'
    },
    {
        name: 'No Due',
        givenTo: 'Humam',
        date: 'Feb 5, 2025',
        status: 'Pending',
        course: 'BPE',
        description: 'Complete the documentation',
        attachedFile: null
    }
];

// Sample data for assignments
const assignments = [
    { name: 'Assignment 1', subject: 'CSE', due: '1 Nov' },
    { name: 'Assignment 2', subject: 'SPE', due: '30 Oct' },
    { name: 'Assignment 3', subject: 'CSE', due: '31 Oct' }
];
</script>

<template>
    <div class="min-vh-100 d-flex flex-column">
        <MainNavbar />
        
        <main class="flex-grow-1 py-4 bg-light">
            <div class="container">
                <!-- Page Header -->
                <div class="d-flex justify-content-between align-items-center mb-4">
                    <h2 class="mb-0">Today's Work</h2>
                    <div class="d-flex gap-2">
                        <button class="btn btn-outline-primary">
                            <i class="bi bi-filter"></i> Filter
                        </button>
                        <button class="btn btn-primary">
                            <i class="bi bi-plus-lg"></i> Add New
                        </button>
                    </div>
                </div>

                <div class="row g-4">
                    <!-- Left Column: Tasks and Assignments -->
                    <div class="col-lg-8">
                        <!-- Tasks Section -->
                        <div class="card border-0 shadow-sm mb-4">
                            <div class="card-body">
                                <TaskShort :tasks="tasks" />
                            </div>
                        </div>

                        <!-- Assignments Section -->
                        <div class="card border-0 shadow-sm">
                            <div class="card-body">
                                <AssignmentShort :assignments="assignments" />
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Calendar -->
                    <div class="col-lg-4">
                        <div class="card border-0 shadow-sm">
                            <div class="card-body">
                                <MonthlyView />
                            </div>
                        </div>

                        <!-- Quick Stats -->
                        <div class="card border-0 shadow-sm mt-4">
                            <div class="card-body">
                                <h5 class="card-title mb-4">Quick Stats</h5>
                                <div class="row g-3">
                                    <div class="col-6">
                                        <div class="p-3 bg-primary bg-opacity-10 rounded">
                                            <h6 class="mb-1">Tasks</h6>
                                            <h3 class="mb-0">{{ tasks.length }}</h3>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="p-3 bg-success bg-opacity-10 rounded">
                                            <h6 class="mb-1">Assignments</h6>
                                            <h3 class="mb-0">{{ assignments.length }}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <MainFooter />
    </div>
</template>

<style scoped>
.card {
    transition: transform 0.2s;
}

.card:hover {
    transform: translateY(-2px);
}

/* Override any default card styles from components */
:deep(.card) {
    border: none !important;
    box-shadow: none !important;
}

/* Ensure consistent padding in nested components */
:deep(.card-body) {
    padding: 1.5rem;
}

/* Style for the stats cards */
.bg-opacity-10 {
    border-radius: 0.5rem;
}

.bg-opacity-10 h6 {
    color: #6c757d;
    font-size: 0.875rem;
}

.bg-opacity-10 h3 {
    color: #212529;
    font-weight: 600;
}
</style>
