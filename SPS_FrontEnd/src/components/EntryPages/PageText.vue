<template>
    <div class="w-100 py-4 d-flex flex-column justify-content-center">
        <h2 class="fw-bold mb-4">{{ pageHeading || 'Tired of the Same Old Way of Learning?' }}</h2>
        <p class="text-muted lead">{{ pageText || 'Join us and discover a fresh approach that puts you in control of your educational journey—experience it for yourself!' }}</p>
    </div>
</template>

<script setup>
import { defineProps } from 'vue';

const props = defineProps({
    pageHeading: {
        type: String,
    },
    pageText: {
        type: String,
    }
});
</script>