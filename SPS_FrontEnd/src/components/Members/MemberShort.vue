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
            <h4 class="members-title">Members</h4>
            <button class="btn btn-sm edit-btn">Edit</button>
        </div>
        <div class="list-group">
            <div v-for="member in members" :key="member" class="list-group-item d-flex align-items-center member-item">
                <span class="member-name">{{ member }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Poppins:wght@500&display=swap');

/* Members Title Styling */
.members-title {
    font-family: 'Inter', sans-serif;
    font-size: 22px;
    font-weight: 600;
    color: #333;
}

/* Edit Button Styling */
.edit-btn {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 500;
    background-color: #6434EB;
    color: white;
    border: none;
    padding: 6px 12px;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.edit-btn:hover {
    background-color: #5028C2;
}

/* Members List Styling */
.member-item {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #333;
}

/* Member Name */
.member-name {
    font-weight: 500;
}
</style>
