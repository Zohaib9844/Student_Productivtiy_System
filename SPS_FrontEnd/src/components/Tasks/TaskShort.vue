<script setup>
import { ref } from 'vue';
import AddTaskView from './AddTaskView.vue';
import TaskDetails from './TaskDetails.vue';

defineProps({
    tasks: {
        type: Array,
        default: () => [
            { 
                name: 'First Job', 
                givenTo: 'ShivaD', 
                date: 'Feb 1, 2025',
                status: 'Ongoing',
                course: 'SDA',
                description: 'Do the research',
                attachedFile: 'research.pdf'
            }
        ]
    }
});

const isAddTaskOpen = ref(false);
const isTaskDetailsOpen = ref(false);
const selectedTask = ref(null);

const openAddTask = () => {
    isAddTaskOpen.value = true;
};

const closeAddTask = () => {
    isAddTaskOpen.value = false;
};

const openTaskDetails = (task) => {
    selectedTask.value = {
        title: task.name,
        date: task.date,
        givenTo: task.givenTo,
        status: task.status,
        course: task.course,
        description: task.description,
        attachedFile: task.attachedFile
    };
    isTaskDetailsOpen.value = true;
};

const closeTaskDetails = () => {
    isTaskDetailsOpen.value = false;
    selectedTask.value = null;
};
</script>

<template>
    <div class="mb-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h4 class="tasks-title">Tasks</h4>
            <button class="btn btn-primary btn-sm task-btn" @click="openAddTask">
                Add Task
            </button>
        </div>
        <div class="table-responsive">
            <table class="table task-table">
                <thead>
                    <tr>
                        <th>Names</th>
                        <th>Given To</th>
                        <th>Due</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="task in tasks" 
                        :key="task.name" 
                        @click="openTaskDetails(task)"
                        class="cursor-pointer task-item">
                        <td class="task-name">{{ task.name }}</td>
                        <td class="task-givenTo">{{ task.givenTo }}</td>
                        <td class="task-date">{{ task.date }}</td>
                    </tr>
                </tbody>
            </table>
        </div>

        <!-- Add Task Modal -->
        <AddTaskView 
            :is-open="isAddTaskOpen"
            @close="closeAddTask"
        />

        <!-- Task Details Modal -->
        <TaskDetails
            v-if="selectedTask"
            :is-open="isTaskDetailsOpen"
            :task-data="selectedTask"
            @close="closeTaskDetails"
        />
    </div>
</template>

<style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Poppins:wght@500&display=swap');

/* Tasks Title Styling */
.tasks-title {
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 16px;
}

/* Button Styling */
.task-btn {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    background-color: #6930c3;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
}

.task-btn:hover {
    background-color: #5028C2;
}

/* Task Table Styling */
.task-table {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #333;
}

/* Task Item Styling */
.task-item {
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.task-item:hover {
    background-color: rgba(0, 0, 0, 0.05);
}

/* Task Name, GivenTo, Date */
.task-name, .task-givenTo, .task-date {
    font-weight: 500;
}
</style>
