<script setup>
import { ref } from 'vue';
import AddNoteView from './AddNoteView.vue';

defineProps({
    notes: {
        type: Array,
        default: () => [
            { name: 'UML', status: 'Open' },
            { name: 'Component Diagram', status: 'Open' }
        ]
    }
});

const isAddNoteOpen = ref(false);

const openAddNote = () => {
    isAddNoteOpen.value = true;
};

const closeAddNote = () => {
    isAddNoteOpen.value = false;
};
</script>

<template>
    <div class="mt-5">
        <div class="mb-2">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <h4 class="notes-title">Notes</h4>
                <button class="btn btn-sm add-note-btn" @click="openAddNote">
                    Add New Note
                </button>
            </div>
            <div class="list-group">
                <div 
                    v-for="note in notes" 
                    :key="note.name"
                    class="list-group-item d-flex justify-content-between align-items-center note-item">
                    <span class="note-name">{{ note.name }}</span>
                    <span class="badge note-badge">
                        {{ note.status }}
                    </span>
                </div>
            </div>
        </div>

        <!-- Add Note Sliding Panel -->
        <AddNoteView 
            :is-open="isAddNoteOpen"
            @close="closeAddNote"
        />
    </div>
</template>

<style scoped>
/* Import Google Fonts */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Poppins:wght@500&display=swap');

/* Notes Title Styling */
.notes-title {
    font-family: 'Inter', sans-serif;
    font-size: 24px;
    font-weight: 600;
    color: #333;
}

/* Button Styling */
.add-note-btn {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
    background-color: #6930c3;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
    transition: all 0.3s ease-in-out;
}

.add-note-btn:hover {
    background-color: #5028C2;
}

/* Note Item Styling */
.note-item {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    color: #333;
}

/* Note Name */
.note-name {
    font-weight: 500;
}

/* Note Badge */
.note-badge {
    font-weight: 500;
    padding: 0.5em 1em;
    background-color: #6930c3 !important;
    color: #ffffff;
    border-radius: 12px;
    font-size: 0.9rem;
    transition: all 0.3s ease;
}

.note-badge:hover {
    background-color: #5028C2;
    
}
</style>
