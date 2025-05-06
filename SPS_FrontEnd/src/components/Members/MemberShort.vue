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
            <button 
  class="btn btn-sm" 
  style="
    background-color: #6434EB; 
    color: white; 
    border: none; 
    padding: 6px 12px; 
    border-radius: 4px; 
    font-size: 0.875rem; 
    font-weight: 500; 
    cursor: pointer;
    transition: background-color 0.3s ease;
">
  Edit
</button>

        </div>
        <div class="list-group">
            <div v-for="member in members" :key="member" 
                 class="list-group-item d-flex align-items-center">
                <span>{{ member }}</span>
            </div>
        </div>
    </div>
</template>