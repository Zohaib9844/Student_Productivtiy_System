<script setup>
import { ref } from 'vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['close']);

const taskData = ref({
    date: 'Feb 1, 2025',
    givenTo: 'Shadab',
    status: 'Ongoing',
    course: 'SDA'
});

const taskDescription = ref('');
const members = ref(['Shadab', 'ShivaD', 'Sajid', 'Humam']); // This would come from your actual data

const handleClose = () => {
    emit('close');
};
</script>

<template>
    <div class="modal-container" :class="{ 'is-open': isOpen }">
        <!-- Translucent Backdrop -->
        <div class="backdrop" @click="handleClose"></div>

        <!-- Modal Panel -->
        <div class="modal-panel">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h3>Task 1</h3>
                <button class="btn-close" @click="handleClose"></button>
            </div>

            <!-- Task Details Form -->
            <div class="task-details mb-4">
                <div class="row g-3">
                    <div class="col-6">
                        <label class="form-label text-muted">Date</label>
                        <input type="date" class="form-control" v-model="taskData.date">
                    </div>
                    <div class="col-6">
                        <label class="form-label text-muted">Given To</label>
                        <select class="form-select" v-model="taskData.givenTo">
                            <option v-for="member in members" :key="member" :value="member">
                                {{ member }}
                            </option>
                        </select>
                    </div>
                    <div class="col-6">
                        <label class="form-label text-muted">Status</label>
                        <input type="text" class="form-control" v-model="taskData.status" readonly>
                    </div>
                    <div class="col-6">
                        <label class="form-label text-muted">Course</label>
                        <input type="text" class="form-control" v-model="taskData.course" readonly>
                    </div>
                </div>
            </div>

            <!-- Task Description -->
            <div class="task-content mb-4">
                <label class="form-label text-muted">Task Description</label>
                <textarea class="form-control" rows="8" v-model="taskDescription"
                    placeholder="Do the research..."></textarea>
            </div>

            <!-- Action Buttons -->
            <div class="d-flex justify-content-end gap-2">
                <button class="btn btn-secondary" @click="handleClose">Cancel</button>
                <button class="btn btn-primary">Save Task</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
.modal-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
}

.modal-container.is-open {
    visibility: visible;
}

.backdrop {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    opacity: 0;
    transition: opacity 0.2s ease-in-out;
}

.is-open .backdrop {
    opacity: 1;
}

.modal-panel {
    position: relative;
    width: 90%;
    max-width: 800px;
    max-height: 90vh;
    background-color: white;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.15);
    overflow-y: auto;
    opacity: 0;
    transform: scale(0.95);
    transition: all 0.2s ease-in-out;
}

.is-open .modal-panel {
    opacity: 1;
    transform: scale(1);
}

.task-details input,
.task-details select {
    background-color: #f8f9fa;
}

.task-content textarea {
    resize: none;
    background-color: #f8f9fa;
}
</style> 