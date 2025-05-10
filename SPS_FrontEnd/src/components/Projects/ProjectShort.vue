<script setup>
import './ProjectShort.css'; 
defineProps({
    projects: {
        type: Array,
        default: () => [
            { name: 'SPS', members: ['John D.', 'Sarah K.'] },
            { name: 'Group Project', members: ['Michael M.', 'Emma S.'] },
            { name: 'Final Project', members: ['Dr. Smith'] }
        ]
    }
});
</script>

<template>
    <div class="card h-100">
        <div class="card-header projects-header">
    <h5 class="mb-0">Projects</h5>
</div>

        <div class="card-body">
            <div class="table-responsive">
                <table class="project-table table-borderless">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Members</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(project, index) in projects" :key="index">
                            <td>{{ project.name }}</td>
                            <td>
                                <span v-for="(member, mIndex) in project.members" :key="mIndex">
                                    {{ member }}{{ mIndex < project.members.length - 1 ? ', ' : '' }}
                                </span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
/* Importing Google Font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.card {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
}

.card-header h5 {
    font-weight: 600;
    color: #333; /* Darker text for readability */
}

.project-table th {
    font-weight: bold;
    font-size: 18px;
    color: #4A4A4A;
}

.project-table td {
    font-size: 16px;
    color: #555; /* Slightly subdued color for a clean look */
}
.projects-header {
    background-color: white;
    color: black;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* Apply hover effect when hovering over the entire card */
.card:hover .projects-header {
    background-color: #95d5b2 !important;
    color: white !important;
}


</style>
