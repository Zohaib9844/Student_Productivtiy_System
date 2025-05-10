<script setup>
defineProps({
    projectData: {
        type: Object,
        default: () => ({
            title: 'SDA - Software Design & Architecture',
            startDate: 'Jan 23, 2025',
            status: 'Ongoing',
            endDate: 'Feb 3, 2025'
        })
    }
});
</script>

<template>
    <div class="mb-4">
        <!-- Project Image Banner -->
        <div class="project-banner mb-4">
            <img src="@/assets/project.png" alt="Project Banner" class="w-100 rounded project-img">
        </div>

        <!-- Project Title -->
        <h2 class="project-title">{{ projectData.title }}</h2>

        <!-- Project Details Grid -->
        <div class="row g-3">
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center py-2">
                    <span class="project-label">Title</span>
                    <span class="project-data">SDA</span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center py-2">
                    <span class="project-label">Start Date</span>
                    <span class="project-data">{{ projectData.startDate }}</span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center py-2">
                    <span class="project-label">Status</span>
                    <span class="project-data">{{ projectData.status }}</span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center py-2">
                    <span class="project-label">End Date</span>
                    <span class="project-data">{{ projectData.endDate }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Poppins:wght@500&display=swap');

/* Project Title Styling */
.project-title {
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #333;
    margin-bottom: 16px;
}

/* Labels and Data Styling */
.project-label {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    color: #6C757D;
    width: 100px;
}

.project-data {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #333;
}

/* Project Image Styling */
.project-img {
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
}
</style>
