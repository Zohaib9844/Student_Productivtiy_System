<template>
    <div class="w-100 py-4 d-flex flex-column justify-content-center">
        <h2 style="font-family: 'Helvetica Bold', 'Arial Bold', sans-serif; font-size: 32px; font-weight: bold; letter-spacing: 1px; line-height: 1.3;" class="fw-bold mb-4">
    {{ pageHeading || 'Tired of the Same Old Way of Learning?' }}
</h2>

<p style="font-family: 'Helvetica', 'Arial', sans-serif; font-size: 20px; line-height: 1.6; color: #6c757d;" class="text-muted lead">
    {{ pageText || 'Join us and discover a fresh approach that puts you in control of your educational journey—experience it for yourself!' }}
</p>

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