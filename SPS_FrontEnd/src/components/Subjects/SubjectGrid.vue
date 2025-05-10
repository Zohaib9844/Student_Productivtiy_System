<script setup>
import { ref } from 'vue';

const subjects = ref([
    {
        id: 1,
        name: 'SDA',
        image: '/src/assets/subject.png',
        status: 'Open'
    },
    {
        id: 2,
        name: 'Technical Writing',
        image: '/src/assets/subject2.png',
        status: 'Open'
    }
]);
</script>

<template>
    <div class="container">
        <h2 class="subjects-title">Subjects</h2>
        <div class="row g-4">
            <div v-for="subject in subjects" :key="subject.id" class="col-12 col-md-6 col-lg-4">
                <RouterLink to="/subjects_details">
                    <div class="card h-100 shadow-sm">
                        <img :src="subject.image" class="card-img-top subject-img" :alt="subject.name">
                        <div class="card-body d-flex justify-content-between align-items-center">
                            <h5 class="card-title">{{ subject.name }}</h5>
                            <span class="badge bg-success">{{ subject.status }}</span>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <!-- Add New Subject Card -->
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 shadow-sm border-dashed">
                    <div class="card-body d-flex flex-column align-items-center justify-content-center">
                        <div class="text-center">
                            <i class="bi bi-plus-circle fs-1 text-primary mb-2"></i>
                            <h5 class="add-subject-text">Add new Subject</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Poppins:wght@500&display=swap');

/* Subject Title Styling */
.subjects-title {
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 16px;
    text-decoration: none !important;
}

/* Subject Image Styling */
.subject-img {
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
}

/* Labels and Data Styling */
.card-title {
    font-family: 'Poppins', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #333;
}

/* Add Subject Text */
.add-subject-text {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #000000;
}

/* Border Dashed Styling */
.border-dashed {
    border-style: dashed !important;
    cursor: pointer;
    transition: all 0.3s ease;
}

.border-dashed:hover {
    background-color: rgba(0, 0, 0, 0.03);
}

/* Card Hover Effect */
.card:hover {
    transform: translateY(-5px);
}

/* Badge Styling */
.badge {
    font-weight: normal;
    padding: 0.5em 1em;
    background-color:  #d00000 !important; /* Sets the Open badge to the desired color */
    color: #ffffff; /* Ensures text contrast with the badge background */
    border-radius: 12px; /* Makes the badge rounded */
    font-size: 0.9rem; /* Adjusts text size for consistency */
    transition: all 0.3s ease; /* Smooth hover effects */
}

.badge:hover {
    background-color: #5028C2; /* Darker shade for hover effect */
}
</style>
