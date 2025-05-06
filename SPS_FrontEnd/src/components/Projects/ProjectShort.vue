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
        <div class="card-header bg-white">
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
