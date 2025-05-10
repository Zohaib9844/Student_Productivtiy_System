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
            <h4 class="lectures-title">Lectures</h4>
            <button class="btn btn-sm lecture-btn">
                New Lecture
            </button>
        </div>
        <div class="list-group">
            <div v-for="lecture in lectures" :key="lecture.name" 
                 class="list-group-item d-flex justify-content-between align-items-center lecture-item">
                <span class="lecture-name">{{ lecture.name }}</span>
                <span class="badge rounded-pill lecture-badge">
                    {{ lecture.status }}
                </span>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Poppins:wght@500&display=swap');

/* Lectures Title Styling */
.lectures-title {
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 16px;
}

/* Button Styling */
.lecture-btn {
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

.lecture-btn:hover {
    background-color: #5028C2;
    
}

/* Lecture Item Styling */
.lecture-item {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #333;
}

/* Lecture Name */
.lecture-name {
    font-weight: 500;
}

/* Lecture Badge */
.lecture-badge {
    font-weight: 500;
    padding: 0.4em 0.8em;
    background-color: #6930c3  !important;
    color: #ffffff;
    border-radius: 12px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.lecture-badge:hover {
    background-color: #5028C2;
    
}
</style>
