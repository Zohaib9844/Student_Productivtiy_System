<script setup>
import { ref, computed } from 'vue';

const members = ref([
    {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com',
        role: 'Team Lead',
        status: 'Active',
        joinDate: '2024-01-15',
        projects: ['SDA', 'Web Development']
    },
    {
        id: 2,
        name: 'Jane Smith',
        email: 'jane.smith@example.com',
        role: 'Developer',
        status: 'Active',
        joinDate: '2024-01-20',
        projects: ['Mobile App', 'SDA']
    },
    // Add more members as needed
]);

const searchQuery = ref('');
const selectedRole = ref('All');

const roles = ['All', 'Team Lead', 'Developer', 'Designer'];

const filteredMembers = computed(() => {
    return members.value.filter(member => {
        const matchesSearch = member.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
                            member.email.toLowerCase().includes(searchQuery.value.toLowerCase());
        const matchesRole = selectedRole.value === 'All' || member.role === selectedRole.value;
        return matchesSearch && matchesRole;
    });
});
</script>

<template>
    <div class="card border-0 shadow-sm">
        <div class="card-body">
            <!-- Header with Search and Filters -->
            <div class="d-flex justify-content-between align-items-center mb-4">
                <h4 class="mb-0">Team Members</h4>
                <button 
    class="btn btn-primary" 
    style="background-color: #6434EB; color: white; border: none; border-radius: 5px; padding: 8px 16px; cursor: pointer; transition: background-color 0.3s ease, transform 0.2s ease;">
    Add Member
</button>

            </div>

            <!-- Search and Filter Bar -->
            <div class="row g-3 mb-4">
                <div class="col-md-8">
                    <div class="input-group">
                        <span class="input-group-text bg-light border-end-0">
                            <i class="bi bi-search"></i>
                        </span>
                        <input type="text" 
                               class="form-control border-start-0" 
                               placeholder="Search members..."
                               v-model="searchQuery">
                    </div>
                </div>
                <div class="col-md-4">
                    <select class="form-select" v-model="selectedRole">
                        <option v-for="role in roles" :key="role" :value="role">
                            {{ role }}
                        </option>
                    </select>
                </div>
            </div>

            <!-- Members Table -->
            <div class="table-responsive">
                <table class="table table-hover">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                            <th>Status</th>
                            <th>Join Date</th>
                            <th>Projects</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="member in filteredMembers" :key="member.id">
                            <td>
                                <div class="d-flex align-items-center">
                                    <RouterLink :to="`/members/${member.id}`" class="text-decoration-none text-dark">
                                        <div class="avatar-circle me-2">
                                            {{ member.name.charAt(0) }}
                                        </div>
                                        {{ member.name }}
                                    </RouterLink>
                                </div>
                            </td>
                            <td>{{ member.email }}</td>
                            <td>
                                <span 
    class="badge bg-info" 
    style="background-color: #6434EB !important; color: white; font-size: 0.9rem; padding: 0.5em 1em; font-weight: 500; border-radius: 12px; transition: background-color 0.3s ease;">
    {{ member.role }}
</span>

                            </td>
                            <td>
                                <span class="badge" 
                                      :class="member.status === 'Active' ? 'bg-success' : 'bg-warning'">
                                    {{ member.status }}
                                </span>
                            </td>
                            <td>{{ member.joinDate }}</td>
                            <td>
                                <div class="d-flex gap-1">
                                    <span v-for="project in member.projects" 
                                          :key="project"
                                          class="badge bg-light text-dark">
                                        {{ project }}
                                    </span>
                                </div>
                            </td>
                            <td>
                                <div class="d-flex action-buttons gap-2">
                                    <button class="btn btn-sm btn-outline-primary">
                                        <i class="bi bi-pencil me-1"></i> Edit
                                    </button>
                                    <button class="btn btn-sm btn-outline-danger">
                                        <i class="bi bi-trash me-1"></i> Delete
                                    </button>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<style scoped>
.avatar-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background-color: #e9ecef;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    color: #6c757d;
}

.table th {
    font-weight: 600;
    color: #495057;
}

.badge {
    font-weight: normal;
    padding: 0.5em 0.8em;
}

/* Improved action buttons */
.action-buttons {
    white-space: nowrap;
}

.btn-outline-primary {
    color: #6930c3 ;
    border-color: #6930c3;
}

.btn-outline-primary:hover {
    background-color: #5028C2;
    color: white;
}

.btn-outline-danger:hover {
    background-color: #dc3545;
    color: white;
}

/* Make the buttons more visible */
.btn {
    font-weight: 500;
    padding: 0.375rem 0.75rem;
    transition: all 0.2s ease;
}

/* Additional table improvements */
.table {
    border-collapse: separate;
    border-spacing: 0;
}

.table td {
    vertical-align: middle;
    padding: 0.75rem;
}

/* Enhance hover effect */
.table tbody tr:hover {
    background-color: rgba(100, 52, 235, 0.05);
}
</style>
