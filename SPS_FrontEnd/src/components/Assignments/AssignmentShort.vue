
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
    <div class="card-header bg-white">
      <h5 class="mb-0">Assignments</h5>
    </div>
    <div class="card-body">
      <div class="table-responsive">
        <table class="table table-borderless">
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
