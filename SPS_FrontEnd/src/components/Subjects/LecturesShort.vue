<script setup>
defineProps({
    lectures: {
        type: Array,
        default: () => [
            { name: 'UML Fundamentals', status: 'Open' },
            { name: 'Object Design', status: 'Open' }
        ]
    }
});
</script>

<template>
    <div class="mb-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h4>Lectures</h4>
            <button class="btn btn-sm" style="background-color: #6434EB; color: white; border: none;">
                New Lecture
            </button>
        </div>
        <div class="list-group">
            <div v-for="lecture in lectures" :key="lecture.name" 
                 class="list-group-item d-flex justify-content-between align-items-center">
                <span>{{ lecture.name }}</span>
                <span class="badge rounded-pill" style="background-color: #6434EB; color: white;">
                    {{ lecture.status }}
                </span>
            </div>
        </div>
    </div>
</template>
