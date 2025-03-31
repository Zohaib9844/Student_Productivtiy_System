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
                <h4>Notes</h4>
                <button class="btn btn-primary btn-sm" @click="openAddNote">Add New Note</button>
            </div>
            <div class="list-group">
                <div v-for="note in notes" :key="note.name" 
                    class="list-group-item d-flex justify-content-between align-items-center">
                    <span>{{ note.name }}</span>
                    <span class="badge bg-primary rounded-pill">{{ note.status }}</span>
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