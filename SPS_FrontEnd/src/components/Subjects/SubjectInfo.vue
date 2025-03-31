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
    <div class="mb-4">
        <!-- Subject Image Banner -->
        <div class="subject-banner mb-4">
            <img src="@/assets/sda_banner.jpeg" alt="SDA Banner" class="w-100 rounded" style="height: 200px; object-fit: cover;">
        </div>

        <!-- Subject Title -->
        <h2 class="mb-4">{{ subjectData.name }}</h2>

        <!-- Subject Details Grid -->
        <div class="row g-3">
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center">
                    <span class="text-muted me-3" style="width: 100px;">Professor</span>
                    <span>{{ subjectData.professor }}</span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center">
                    <span class="text-muted me-3" style="width: 100px;">Email</span>
                    <span>{{ subjectData.email }}</span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center">
                    <span class="text-muted me-3" style="width: 100px;">Course Code</span>
                    <span>{{ subjectData.courseCode }}</span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center">
                    <span class="text-muted me-3" style="width: 100px;">Date</span>
                    <span>{{ subjectData.date }}</span>
                </div>
            </div>
        </div>
    </div>
</template>