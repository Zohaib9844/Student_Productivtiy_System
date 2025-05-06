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
            <h4>Tasks</h4>
            <button 
    class="btn btn-primary btn-sm" 
    @click="openAddTask" 
    style="background-color: #6434EB !important; color: white; border: none; border-radius: 5px; padding: 8px 16px; cursor: pointer; transition: background-color 0.3s ease, transform 0.2s ease;">
    Add Task
</button>

        </div>
        <div class="table-responsive">
            <table class="table">
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
                        class="cursor-pointer hover-bg-light">
                        <td>{{ task.name }}</td>
                        <td>{{ task.givenTo }}</td>
                        <td>{{ task.date }}</td>
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
.cursor-pointer {
    cursor: pointer;
}

.hover-bg-light:hover {
    background-color: rgba(0, 0, 0, 0.05);
}
</style>