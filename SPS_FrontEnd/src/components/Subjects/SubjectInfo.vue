<script setup>
defineProps({
    subjectData: {
        type: Object,
        default: () => ({
            name: 'SDA - Software Design & Architecture',
            professor: 'None',
            email: 'None',
            courseCode: 'None',
            date: 'Feb 3, 2025'
        })
    }
});
</script>

<template>
    <div class="container-fluid mb-4 mt-5">
        <!-- Subject Image Banner -->
        <div class="subject-banner">
            <img src="@/assets/subject.png" alt="SDA Banner" class="w-100 rounded">
        </div>
<br>
        <!-- Subject Title -->
        <h2 class="subject-title">{{ subjectData.name }}</h2>
<br>
        <!-- Subject Details Grid -->
        <div class="row g-3">
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center">
                    <span class="subject-label">Professor</span>
                    <span class="subject-data">{{ subjectData.professor }}</span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center">
                    <span class="subject-label">Email</span>
                    <span class="subject-data">{{ subjectData.email }}</span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center">
                    <span class="subject-label">Course Code</span>
                    <span class="subject-data">{{ subjectData.courseCode }}</span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center">
                    <span class="subject-label">Date</span>
                    <span class="subject-data">{{ subjectData.date }}</span>
                </div>
            </div>
        </div>
    </div> <br>
</template>

<style scoped>
/* Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Poppins:wght@500&display=swap');

/* Subject Title Styling */
.subject-title {
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 16px;
}

/* Labels and Data Styling */
.subject-label {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #6C757D;
    width: 120px;
}

.subject-data {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #333;
}

/* Adjust the subject banner height */
.subject-banner img {
    height: 250px;
    object-fit: cover;
    border-radius: 12px;
}

/* Responsive Scaling */
@media (max-width: 768px) {
    .subject-banner img {
        height: 200px;
    }
}
</style>
