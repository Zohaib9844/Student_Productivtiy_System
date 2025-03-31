<script setup>
defineProps({
    members: {
        type: Array,
        default: () => [
            'ShivaD',
            'Sajid',
            'Humam'
        ]
    }
});
</script>

<template>
    <div class="mb-4">
        <div class="d-flex justify-content-between align-items-center mb-3">
            <h4>Members</h4>
            <button class="btn btn-primary btn-sm">Edit</button>
        </div>
        <div class="list-group">
            <div v-for="member in members" :key="member" 
                 class="list-group-item d-flex align-items-center">
                <span>{{ member }}</span>
            </div>
        </div>
    </div>
</template>