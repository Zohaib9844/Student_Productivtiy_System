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
                <button 
                    class="btn btn-sm" 
                    @click="openAddNote"
                    style="background-color: #6434EB; color: white; border: none; border-radius: 5px; padding: 8px 16px; cursor: pointer; transition: background-color 0.3s ease, transform 0.2s ease;">
                    Add New Note
                </button>
            </div>
            <div class="list-group">
                <div 
                    v-for="note in notes" 
                    :key="note.name"
                    class="list-group-item d-flex justify-content-between align-items-center"
                    style="font-size: 1rem; padding: 8px;">
                    <span>{{ note.name }}</span>
                    <span 
                        class="badge rounded-pill"
                        style="background-color: #6434EB; color: white; font-size: 0.9rem; padding: 0.5em 1em; font-weight: 500; border-radius: 12px; transition: background-color 0.3s ease;">
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
