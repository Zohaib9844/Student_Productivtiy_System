<script setup>
import { ref } from 'vue';

const props = defineProps({
    isOpen: {
        type: Boolean,
        required: true
    },
    taskData: {
        type: Object,
        default: () => ({
            title: 'Task 1',
            date: 'Feb 1, 2025',
            givenTo: 'Shadab',
            status: 'Ongoing',
            course: 'SDA',
            description: 'Do the research',
            attachedFile: null
        })
    }
});

const emit = defineEmits(['close']);

const handleClose = () => {
    emit('close');
};

const handleFileDownload = () => {
    // Implement file download logic
    console.log('Downloading file...');
};
</script>

<template>
    <div class="modal-container" :class="{ 'is-open': isOpen }">
        <!-- Translucent Backdrop -->
        <div class="backdrop" @click="handleClose"></div>

        <!-- Modal Panel -->
        <div class="modal-panel">
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h3>{{ taskData.title }}</h3>
                <button class="btn-close" @click="handleClose"></button>
            </div>

            <!-- Task Information -->
            <div class="task-info mb-4">
                <div class="row g-3">
                    <div class="col-6">
                        <div class="info-group">
                            <label class="text-muted d-block">Date</label>
                            <span class="fs-6">{{ taskData.date }}</span>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="info-group">
                            <label class="text-muted d-block">Given To</label>
                            <span class="fs-6">{{ taskData.givenTo }}</span>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="info-group">
                            <label class="text-muted d-block">Status</label>
                            <span class="badge" 
                                  :class="taskData.status === 'Ongoing' ? 'bg-warning' : 'bg-success'">
                                {{ taskData.status }}
                            </span>
                        </div>
                    </div>
                    <div class="col-6">
                        <div class="info-group">
                            <label class="text-muted d-block">Course</label>
                            <span class="fs-6">{{ taskData.course }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Task Description -->
            <div class="task-description mb-4">
                <label class="text-muted d-block mb-2">Description</label>
                <div class="p-3 bg-light rounded">
                    {{ taskData.description }}
                </div>
            </div>

            <!-- File Section -->
            <div class="file-section mb-4">
                <label class="text-muted d-block mb-2">Attached File</label>
                <div class="p-3 bg-light rounded">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="d-flex align-items-center">
                            <i class="bi bi-file-earmark-text me-2"></i>
                            <span>{{ taskData.attachedFile || 'No file attached' }}</span>
                        </div>
                        <button v-if="taskData.attachedFile" 
                                class="btn btn-outline-primary btn-sm"
                                @click="handleFileDownload">
                            <i class="bi bi-download me-1"></i>
                            Download
                        </button>
                    </div>
                </div>
            </div>

            <!-- Action Button -->
            <div class="d-flex justify-content-end">
                <button class="btn btn-secondary" @click="handleClose">Close</button>
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

.info-group {
    margin-bottom: 0.5rem;
}

.task-description .bg-light,
.file-section .bg-light {
    background-color: #f8f9fa !important;
}

.badge {
    font-weight: normal;
    padding: 0.5em 1em;
}
</style>
