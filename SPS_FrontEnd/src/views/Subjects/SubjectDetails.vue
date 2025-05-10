<template>
    <div class="min-vh-100 d-flex flex-column">
        <MainNavbar />
        
        <main class="flex-grow-1 py-4" style="margin-bottom: 70px;">
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
        <h4 style="font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 600; color: #333;">
            Assignments
        </h4>
        <button 
            class="btn btn-primary btn-sm" 
            style="font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 500; background-color: #6930c3  !important; color: white; border: none; border-radius: 5px; padding: 8px 16px; cursor: pointer; transition: background-color 0.3s ease;">
            Add New
        </button>
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

<style scoped>
/* Proper Bootstrap container styling */
main {
    margin-top: 70px;
    margin-bottom: 70px;
}

/* Bootstrap column adjustments */
.row {
    margin-left: 0 !important;
    margin-right: 0 !important;
}

/* Wider container with even spacing */
.container {
    padding-left: 30px !important;
    padding-right: 30px !important;
    max-width: 1900px !important; /* Wider than Bootstrap default */
    margin-left: 0px; 
    margin-right: 290px; 
}

/* Add more space between items */
.g-4 {
    --bs-gutter-x: 2rem !important;
}
</style>
