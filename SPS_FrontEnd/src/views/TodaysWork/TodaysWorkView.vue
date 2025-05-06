<template>
    <div class="min-vh-100 d-flex flex-column">
        <MainNavbar />

        <main class="flex-grow-1">
            <div class="content-container">
                <!-- Page Header with Filter & Add Task Buttons -->
                <div class="header d-flex justify-content-between align-items-center mb-4">
                    <h2 class="mb-0">Today's Work</h2>
                    <div class="d-flex gap-2">
                        <button class="btn-filter">
                            <i class="bi bi-filter"></i> Filter
                        </button>

                        <button class="btn-add">
                            <i class="bi bi-plus-lg"></i> Add Task
                        </button>
                    </div>
                </div>

                <div class="row g-4 mb-5">
                    <!-- Tasks and Assignments Section (Left Side) -->
                    <div class="col-12 col-lg-8">
                        <div class="card task-card">
                            <div class="card-body">
                                <TaskShort :tasks="tasks" />
                            </div>
                        </div>

                        <div class="card assignment-card">
                            <div class="card-body">
                                <AssignmentShort :assignments="assignments" />
                            </div>
                        </div>
                    </div>

                    <!-- Quick Stats (Right Side) -->
                    <div class="col-12 col-lg-4">
                        <div class="card quick-stats">
                            <div class="card-body">
                                <h5 class="card-title mb-4">Quick Stats</h5>
                                <div class="row g-3"><!-- Changed from "column" to "row" -->
                                    <div class="col-6 mb-4">
                                        <div class="stat-box tasks">
                                            <h6>Tasks</h6>
                                            <h3>{{ tasks.length }}</h3>
                                        </div>
                                    </div>
                                    <div class="col-6">
                                        <div class="stat-box assignments">
                                            <h6>Assignments</h6>
                                            <h3>{{ assignments.length }}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Calendar Section (Below) -->
                    <div class="col-12">
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
import TaskShort from '@/components/Tasks/TaskShort.vue';
import AssignmentShort from '@/components/Assignments/AssignmentShort.vue';
import MonthlyView from '@/components/Calendar/MonthlyView.vue';
import MainFooter from '@/components/MainParts/MainFooter.vue';

const tasks = [
    { name: 'First Job', givenTo: 'ShivaD', date: 'Feb 1, 2025', status: 'Ongoing', course: 'SDA', description: 'Do the research', attachedFile: 'research.pdf' },
    { name: 'No Due', givenTo: 'Humam', date: 'Feb 5, 2025', status: 'Pending', course: 'BPE', description: 'Complete the documentation', attachedFile: null }
];

const assignments = [
    { name: 'Assignment 1', subject: 'CSE', due: '1 Nov' },
    { name: 'Assignment 2', subject: 'SPE', due: '30 Oct' },
    { name: 'Assignment 3', subject: 'CSE', due: '31 Oct' }
];
</script>

<style scoped>
/* Remove the 100vw width and use proper padding */
.content-container {
    margin-top: 90px;
    max-width: 1400px;
    margin-left: auto;
    margin-right: auto;
    padding: 0 20px;
}

/* Other styles remain the same */
.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.quick-stats {
    background-color: white;
    border-radius: 12px;
    padding: 20px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}

.stat-box {
    padding: 15px;
    border-radius: 8px;
    text-align: center;
}

.tasks { background-color: #f6f2b5; }
.assignments { background-color: #fddae3; }

.btn-filter, .btn-add {
    border-radius: 5px;
    padding: 8px 16px;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-filter {
    background-color: white;
    color: #6434EB;
    border: 1px solid #6434EB;
}

.btn-filter:hover {
    background-color: #6434EB;
    color: white;
}

.btn-add {
    background-color: #6434EB;
    color: white;
    border: none;
}

.btn-add:hover {
    background-color: #512aeb;
}

.task-card, .assignment-card {
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px; /* Add spacing between cards */
}
</style>
