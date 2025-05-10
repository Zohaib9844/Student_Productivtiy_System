<script setup>
import './AssignmentShort.css';

defineProps({
  assignments: {
    type: Array,
    default: () => [
      { name: 'Assignment 1', subject: 'CSE', due: '1 Nov' },
      { name: 'Assignment 2', subject: 'SPE', due: '30 Oct' },
      { name: 'Assignment 3', subject: 'CSE', due: '31 Oct' }
    ]
  }
});
</script>

<template>
  <div class="card h-100 assignment-card">
        <div class="card-header assignment-header">
    <h5 class="mb-0">Assignments</h5>
</div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-borderless assignment-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Subject</th>
              <th>Due</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(assignment, index) in assignments" :key="index">
              <td>{{ assignment.name }}</td>
              <td>{{ assignment.subject }}</td>
              <td>{{ assignment.due }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<style scoped>
/* Import Google Font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600&display=swap');

.assignment-card {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
}

.card-header h5 {
    font-weight: 600;
    color: #333; /* Darker color for readability */
}

.assignment-table th {
    font-weight: bold;
    font-size: 18px;
    color: #4A4A4A;
}

.assignment-table td {
    font-size: 16px;
    color: #555; /* Balanced tone for clarity */
}
.assignment-header {
    background-color: white;
    color: black;
    transition: background-color 0.3s ease, color 0.3s ease;
}

/* Apply hover effect when hovering over the entire card */
.card:hover .assignment-header {
    background-color: #b8b8ff  !important;
    color: white !important;
}
</style>
