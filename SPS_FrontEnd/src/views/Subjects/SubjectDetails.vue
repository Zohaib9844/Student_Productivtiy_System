<script setup>
import MainNavbar from '@/components/MainParts/MainNavbar.vue';
import MainFooter from '@/components/MainParts/MainFooter.vue';
import SubjectInfo from '@/components/Subjects/SubjectInfo.vue';
import LecturesShort from '@/components/Subjects/LecturesShort.vue';
import NotesShort from '@/components/Notes/NotesShort.vue';
import AssignmentShort from '@/components/Assignments/AssignmentShort.vue';

const assignments = [
    { name: 'Assignment 3', subject: 'SDA', due: '19 Nov' }
];
</script>

<template>
    <div class="min-vh-100 d-flex flex-column">
        <MainNavbar />
        
        <main class="flex-grow-1 py-4">
            <div class="container">
                <!-- Subject Information -->
                <SubjectInfo />

                <!-- Content Grid -->
                <div class="row g-4">
                    <!-- Lectures Section -->
                    <div class="col-12 col-md-6">
                        <LecturesShort />
                    </div>

                    <!-- Assignments Section -->
                    <div class="col-12 col-md-6">
                        <div class="d-flex justify-content-between align-items-center mb-3">
                            <h4>Assignments</h4>
                            <button class="btn btn-primary btn-sm">Add New</button>
                        </div>
                        <AssignmentShort :assignments="assignments" />
                    </div>

                    <!-- Notes Section -->
                    <div class="col-12">
                        <NotesShort />
                    </div>
                </div>
            </div>
        </main>

        <MainFooter />
    </div>
</template>





