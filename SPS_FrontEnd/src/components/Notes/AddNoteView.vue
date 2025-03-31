<script setup>
import { ref } from 'vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    }
});

const emit = defineEmits(['close']);

const noteData = ref({
    date: 'Feb 1, 2025',
    name: '',
    status: 'Complete',
    course: 'SDA'
});

const noteContent = ref('');
const aiPrompt = ref('');

const handleClose = () => {
    emit('close');
};
</script>

<template>
    <div class="note-panel-container" :class="{ 'is-open': isOpen }">
        <!-- Translucent Backdrop -->
        <div class="backdrop" @click="handleClose"></div>

        <!-- Sliding Panel -->
        <div class="note-panel">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h3>Notes View</h3>
                <button class="btn-close" @click="handleClose"></button>
            </div>

            <!-- Note Details Form -->
            <div class="note-details mb-4">
                <div class="row g-3">
                    <div class="col-6">
                        <label class="form-label text-muted">Date</label>
                        <input type="Date" class="form-control" v-model="noteData.date" >
                    </div>
                    <div class="col-6">
                        <label class="form-label text-muted">Name</label>
                        <input type="text" class="form-control" v-model="noteData.name" 
                               placeholder="Creating Low-Fidelity Wireframes">
                    </div>
                    <div class="col-6">
                        <label class="form-label text-muted">Status</label>
                        <input type="text" class="form-control" v-model="noteData.status" readonly>
                    </div>
                    <div class="col-6">
                        <label class="form-label text-muted">Course</label>
                        <input type="text" class="form-control" v-model="noteData.course" readonly>
                    </div>
                </div>
            </div>

            <!-- Note Content -->
            <div class="note-content mb-4">
                <textarea class="form-control" rows="8" v-model="noteContent"
                    placeholder="Low-fidelity wireframes are simple, sketch-like representations of a user interface that focus on layout and structure rather than design details. They help in brainstorming ideas, gathering feedback, and refining concepts before investing time in high-fidelity designs..."></textarea>
            </div>

            <!-- AI Prompt Section -->
            <div class="ai-prompt">
                <div class="input-group">
                    <input type="text" class="form-control" placeholder="Enter your prompt or AI..."
                           v-model="aiPrompt">
                    <button class="btn btn-outline-secondary" type="button">
                        <i class="bi bi-arrow-right">Submit</i>
                    </button>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.note-panel-container {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    visibility: hidden;
}

.note-panel-container.is-open {
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
    transition: opacity 0.3s ease-in-out;
}

.is-open .backdrop {
    opacity: 1;
}

.note-panel {
    position: fixed;
    top: 0;
    right: -50%;
    bottom: 0;
    width: 50%;
    background-color: white;
    padding: 2rem;
    box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
    overflow-y: auto;
    transition: right 0.3s ease-in-out;
}

.is-open .note-panel {
    right: 0;
}

.note-details input {
    background-color: #f8f9fa;
}

.note-content textarea {
    resize: none;
    background-color: #f8f9fa;
}

.ai-prompt {
    position: sticky;
    bottom: 0;
    background-color: white;
    padding-top: 1rem;
    border-top: 1px solid #dee2e6;
}
</style>
