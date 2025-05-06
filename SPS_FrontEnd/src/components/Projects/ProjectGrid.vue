<script setup>
import { ref } from 'vue';

const projects = ref([
    {
        id: 0,
        name: 'SDA',
        image: '/src/assets/project.png',
        status: 'Open'
    }
]);
</script>

<template>
    <div class="container">
        <h2 class="mb-4">Projects</h2>
        <div class="row justify-content-start g-4">
            <div v-for="project in projects" :key="project.id" class="col-auto mb-4">
                <RouterLink to="/projects_details">
                    <div class="card shadow-sm">
                        <img :src="project.image" class="card-img-top" :alt="project.name" 
                                style="height: 180px; object-fit: cover;">
                        <div class="card-body d-flex justify-content-between align-items-center">
                            <h5 class="card-title mb-0">{{ project.name }}</h5>
                            <span class="badge bg-success">{{ project.status }}</span>
                        </div>
                    </div>
                </RouterLink>
            </div>
            <div class="col-auto mb-4">
                <div class="card border-dashed">
                    <div class="card-body d-flex flex-column align-items-center justify-content-center">
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
    border-color: #000000 !important;
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

.badge.bg-success {
    background-color: #6434EB !important;
}
/* Add top margin to the container */
.container {
    margin-top: 50px !important; /* Adds space from the top */
}

/* Ensure all project cards remain perfectly square */
.card {
    width: 400px; /* Fixed width */
    height: 250px; /* Same height for a square */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    border-radius: 12px; /* Smooth edges */
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

/* Ensure images fit properly within square cards */
.card-img-top {
    width: 100%;
    height: 100%;
    object-fit: cover; /* Maintain aspect ratio inside the square */
    border-radius: 12px 12px 0 0;
}

/* Responsive Scaling */
@media (max-width: 768px) {
    .card {
        width: 200px;
        height: 200px;
    }
}

/* Increase top margin on smaller screens */
@media (max-width: 768px) {
    .container {
        margin-top: 25px !important;
    }
}

/* Ensure spacing between title (SDA) and button */
.card-body {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px; /* Adjust inner spacing */
}

/* Add extra space between title and button */
.card-title {
    margin-right: 15px; /* Creates gap between text and badge */
}

/* Optional: Fine-tune badge alignment */
.badge {
    padding: 8px 12px;
    font-size: 0.9rem;
}

/* Fix the card layout issue */
.row {
    display: flex;
    flex-wrap: wrap;
    gap: 20px; /* Consistent gap between cards */
}

.col-auto {
    padding: 0; /* Remove default padding */
    flex: 0 0 auto; /* Don't grow or shrink */
}

/* Make cards consistent */
.card {
    width: 400px; /* Fixed width */
    height: 250px; /* Same height for a square */
    margin: 0; /* Remove any margins */
    display: flex;
    flex-direction: column;
    justify-content: flex-start; /* Align content to top */
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    overflow: hidden;
}

/* Make the add project card match the height */
.border-dashed {
    height: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* Ensure both cards have same vertical proportion */
.card-body {
    height: 70px; /* Fixed height for the bottom portion */
    padding: 10px 15px;
}

</style>
