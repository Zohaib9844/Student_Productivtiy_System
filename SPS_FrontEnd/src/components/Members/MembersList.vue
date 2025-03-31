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
                <button class="btn btn-primary">Add Member</button>
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
                                <span class="badge bg-info">{{ member.role }}</span>
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
                                <div class="btn-group">
                                    <button class="btn btn-sm btn-outline-secondary">
                                        <i class="bi bi-pencil"></i>
                                    </button>
                                    <button class="btn btn-sm btn-outline-danger">
                                        <i class="bi bi-trash"></i>
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
</style>
