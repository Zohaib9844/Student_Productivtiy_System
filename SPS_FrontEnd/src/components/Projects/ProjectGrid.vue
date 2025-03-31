<script setup>
import { ref } from 'vue';

const projects = ref([
    {
        id: 1,
        name: 'SDA',
        image: '/src/assets/project-collaboration.jpg',
        status: 'Open'
    }
]);
</script>

<template>
    <div class="container">
        <h2 class="mb-4">Projects</h2>
        <div class="row g-4">
            <div v-for="project in projects" :key="project.id" class="col-12 col-md-6 col-lg-4">
                <RouterLink to="/projects_details">
                    <div class="card h-100 shadow-sm">
                        <img :src="project.image" class="card-img-top" :alt="project.name" 
                                style="height: 180px; object-fit: cover;">
                        <div class="card-body d-flex justify-content-between align-items-center">
                            <h5 class="card-title mb-0">{{ project.name }}</h5>
                            <span class="badge bg-success">{{ project.status }}</span>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="col-12 col-md-6 col-lg-4">
                <div class="card h-100 border-dashed">
                    <div class="card-body d-flex flex-column align-items-center justify-content-center" 
                         style="min-height: 242px;">
                        <div class="text-center">
                            <div class="display-4 mb-2">+</div>
                            <h5 class="text-muted mb-0">Add new Project</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.border-dashed {
    border-style: dashed !important;
    border-width: 2px !important;
    border-color: #dee2e6 !important;
    cursor: pointer;
    transition: all 0.3s ease;
    background-color: #f8f9fa;
}

.border-dashed:hover {
    background-color: #e9ecef;
}

.card {
    border: none;
    transition: transform 0.2s ease;
}

.card:hover {
    transform: translateY(-5px);
}

.badge {
    font-weight: normal;
    padding: 0.5em 1em;
}
</style>