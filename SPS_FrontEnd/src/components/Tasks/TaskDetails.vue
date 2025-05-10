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
    console.log('Downloading file...');
};
</script>

<template>
    <div class="modal-container" :class="{ 'is-open': isOpen }">
        <div class="backdrop" @click="handleClose"></div>

        <div class="modal-panel">
            <div class="d-flex justify-content-between align-items-center modal-header">
                <h3>{{ taskData.title }}</h3>
                <button class="btn-close" @click="handleClose"></button>
            </div>

            <div class="task-info">
                <div class="row g-3">
                    <div class="col-6" v-for="(value, label) in taskData" :key="label">
                        <div class="info-group">
                            <label class="info-label">{{ label }}</label>
                            <span class="info-value">{{ value }}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="task-description">
                <label class="info-label">Description</label>
                <div class="description-box">
                    {{ taskData.description }}
                </div>
            </div>

            <div class="file-section">
                <label class="info-label">Attached File</label>
                <div class="file-box">
                    <span>{{ taskData.attachedFile || 'No file attached' }}</span>
                    <button v-if="taskData.attachedFile" class="btn btn-sm download-btn" @click="handleFileDownload">
                        Download
                    </button>
                </div>
            </div>

            <div class="d-flex justify-content-end">
                <button class="btn btn-secondary close-btn" @click="handleClose">Close</button>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Poppins:wght@500&display=swap');

.modal-panel {
    font-family: 'Poppins', sans-serif;
}

.modal-header h3 {
    font-family: 'Inter', sans-serif;
    font-size: 22px;
    font-weight: 600;
    color: #333;
}

.info-label {
    font-weight: 500;
    color: #6C757D;
}

.info-value {
    font-size: 16px;
    color: #333;
}

.description-box, .file-box {
    background-color: #f8f9fa;
    padding: 10px;
    border-radius: 5px;
}

.download-btn {
    background-color: #6930c3;
    color: white;
    font-weight: 500;
}

.close-btn {
    font-size: 16px;
}
</style>
