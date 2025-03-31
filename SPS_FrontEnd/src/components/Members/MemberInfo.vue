<script setup>
import { ref } from 'vue';

const props = defineProps({
    member: {
        type: Object,
        required: true,
        default: () => ({
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            role: 'Team Lead',
            status: 'Active',
            joinDate: '2024-01-15',
            projects: ['SDA', 'Web Development'],
            phone: '+1 234 567 890',
            department: 'Software Development',
            skills: ['Vue.js', 'JavaScript', 'Bootstrap'],
            bio: 'Experienced team lead with a passion for web development and team collaboration.'
        })
    }
});

const isEditing = ref(false);
const editedMember = ref({ ...props.member });

const toggleEdit = () => {
    isEditing.value = !isEditing.value;
    if (!isEditing.value) {
        editedMember.value = { ...props.member };
    }
};
</script>

<template>
    <div class="card border-0 shadow-sm">
        <div class="card-body">
            <div class="d-flex justify-content-between align-items-start mb-4">
                <div class="d-flex align-items-center">
                    <div class="avatar-circle me-3">
                        {{ member.name.charAt(0) }}
                    </div>
                    <div>
                        <h3 class="mb-1">{{ member.name }}</h3>
                        <span class="badge bg-info">{{ member.role }}</span>
                    </div>
                </div>
                <button @click="toggleEdit" class="btn btn-outline-primary">
                    <i class="bi" :class="isEditing ? 'bi-x-lg' : 'bi-pencil'"></i>
                    {{ isEditing ? 'Cancel' : 'Edit' }}
                </button>
            </div>

            <div class="row g-4">
                <!-- Basic Information -->
                <div class="col-md-6">
                    <h5 class="mb-3">Basic Information</h5>
                    <div class="list-group">
                        <div class="list-group-item">
                            <small class="text-muted d-block">Email</small>
                            <div>{{ member.email }}</div>
                        </div>
                        <div class="list-group-item">
                            <small class="text-muted d-block">Phone</small>
                            <div>{{ member.phone }}</div>
                        </div>
                        <div class="list-group-item">
                            <small class="text-muted d-block">Department</small>
                            <div>{{ member.department }}</div>
                        </div>
                        <div class="list-group-item">
                            <small class="text-muted d-block">Join Date</small>
                            <div>{{ member.joinDate }}</div>
                        </div>
                    </div>
                </div>

                <!-- Projects and Skills -->
                <div class="col-md-6">
                    <h5 class="mb-3">Projects & Skills</h5>
                    <div class="list-group">
                        <div class="list-group-item">
                            <small class="text-muted d-block">Current Projects</small>
                            <div class="d-flex flex-wrap gap-2 mt-2">
                                <span v-for="project in member.projects" 
                                      :key="project"
                                      class="badge bg-light text-dark">
                                    {{ project }}
                                </span>
                            </div>
                        </div>
                        <div class="list-group-item">
                            <small class="text-muted d-block">Skills</small>
                            <div class="d-flex flex-wrap gap-2 mt-2">
                                <span v-for="skill in member.skills" 
                                      :key="skill"
                                      class="badge bg-primary">
                                    {{ skill }}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Bio -->
                <div class="col-12">
                    <h5 class="mb-3">Bio</h5>
                    <div class="card bg-light border-0">
                        <div class="card-body">
                            {{ member.bio }}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.avatar-circle {
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: #e9ecef;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    font-weight: bold;
    color: #6c757d;
}

.list-group-item {
    border-left: 0;
    border-right: 0;
    padding: 1rem;
}

.list-group-item:first-child {
    border-top: 0;
}

.list-group-item:last-child {
    border-bottom: 0;
}
</style>
