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
            <img src="@/assets/project.png" alt="Project Banner" 
                 class="w-100 rounded" style="height: 200px; object-fit: cover;">
        </div>

        <!-- Project Title -->
        <h2 class="mb-4">{{ projectData.title }}</h2>

        <!-- Project Details Grid -->
        <div class="row g-3">
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center py-2">
                    <span class="text-muted me-3" style="width: 100px;">Title</span>
                    <span>SDA</span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center py-2">
                    <span class="text-muted me-3" style="width: 100px;">Start Date</span>
                    <span>{{ projectData.startDate }}</span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center py-2">
                    <span class="text-muted me-3" style="width: 100px;">Status</span>
                    <span>{{ projectData.status }}</span>
                </div>
            </div>
            <div class="col-12 col-md-6">
                <div class="d-flex align-items-center py-2">
                    <span class="text-muted me-3" style="width: 100px;">End Date</span>
                    <span>{{ projectData.endDate }}</span>
                </div>
            </div>
        </div>
    </div>
</template>