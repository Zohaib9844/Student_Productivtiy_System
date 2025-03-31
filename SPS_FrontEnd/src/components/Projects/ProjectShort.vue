




<script setup>
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
            <div v-for="(project, index) in projects" :key="index" class="mb-3">
                <h6 class="mb-1">{{ project.name }}</h6>
                <p class="text-muted small mb-0">
                    <span v-for="(member, mIndex) in project.members" :key="mIndex">
                        {{ member }}{{ mIndex < project.members.length - 1 ? ', ' : '' }}
                    </span>
                </p>
            </div>
        </div>
    </div>
</template>