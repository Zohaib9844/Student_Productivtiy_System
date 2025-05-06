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
        <div class="subject-banner ">
            <img src="@/assets/subject.png" alt="SDA Banner" class="w-100 rounded">
        </div>

        <!-- Subject Title -->
        <h2 class="mb-4">{{ subjectData.name }}</h2>

        <!-- Subject Details Grid -->
        <div class="row g-3">
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center">
                    <span class="text-muted me-3" style="width: 120px;">Professor</span>
                    <span>{{ subjectData.professor }}</span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center">
                    <span class="text-muted me-3" style="width: 120px;">Email</span>
                    <span>{{ subjectData.email }}</span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center">
                    <span class="text-muted me-3" style="width: 120px;">Course Code</span>
                    <span>{{ subjectData.courseCode }}</span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center">
                    <span class="text-muted me-3" style="width: 120px;">Date</span>
                    <span>{{ subjectData.date }}</span>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Adjust the subject banner height */
.subject-banner img {
    height: 250px; /* Set a normal height */
    object-fit: cover; /* Ensure the image fills the space properly */
    border-radius: 12px; /* Smooth edges */
}

/* Responsive Scaling */
@media (max-width: 768px) {
    .subject-banner img {
        height: 200px; /* Adjust for smaller screens */
    }
}

</style>