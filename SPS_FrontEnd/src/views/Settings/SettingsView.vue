<script setup>
import MainNavbar from '@/components/MainParts/MainNavbar.vue';
import MainFooter from '@/components/MainParts/MainFooter.vue';
import { ref } from 'vue';

const profileCompletion = ref(85);
const currentUser = ref({
    name: 'John Doe',
    email: 'john@example.com',
    avatar: '/path/to/avatar.jpg'
});

const settings = ref([
    {
        title: 'Profile',
        description: 'Your personal details and settings',
        icon: 'bi-person',
        isActive: true
    },
    {
        title: 'Password',
        description: 'Your email address to receive notifications',
        icon: 'bi-lock',
        isActive: false
    },
    {
        title: 'Notifications',
        description: 'Select which notifications you receive',
        icon: 'bi-bell',
        isActive: false
    },
    {
        title: 'Time zone',
        description: 'Your timezone is currently set to Pacific Time (US)',
        icon: 'bi-clock',
        isActive: false
    }
]);
</script>

<template>
    <div class="min-vh-100 d-flex flex-column">
        <MainNavbar />
        
        <main class="flex-grow-1 py-4">
            <div class="container">
                <div class="row g-4">
                    <!-- Left Sidebar -->
                    <div class="col-12 col-md-4 col-lg-3">
                        <div class="card border-0 shadow-sm">
                            <!-- Profile Card -->
                            <div class="card-body">
                                <div class="text-center mb-4">
                                    <div class="position-relative d-inline-block">
                                        <div class="rounded-circle overflow-hidden" style="width: 100px; height: 100px;">
                                            <img :src="currentUser.avatar" alt="Profile" class="img-fluid"
                                                 onerror="this.src='https://via.placeholder.com/100'">
                                        </div>
                                        <div class="position-absolute bottom-0 end-0">
                                            <div class="bg-primary text-white rounded-circle p-2">
                                                <i class="bi bi-pencil-fill small"></i>
                                            </div>
                                        </div>
                                    </div>
                                    <h5 class="mt-3 mb-1">{{ currentUser.name }}</h5>
                                    <p class="text-muted small mb-3">{{ currentUser.email }}</p>
                                    <div class="progress" style="height: 6px;">
                                        <div class="progress-bar bg-primary" 
                                             :style="{ width: `${profileCompletion}%` }"
                                             role="progressbar"
                                             :aria-valuenow="profileCompletion"
                                             aria-valuemin="0"
                                             aria-valuemax="100"></div>
                                    </div>
                                    <p class="mt-2 mb-0 small">Profile {{ profileCompletion }}% Complete</p>
                                </div>

                                <!-- Settings Navigation -->
                                <div class="settings-nav">
                                    <div v-for="setting in settings" 
                                         :key="setting.title"
                                         class="setting-item p-3 rounded mb-2"
                                         :class="{ 'bg-light': setting.isActive }">
                                        <div class="d-flex align-items-center">
                                            <i :class="['bi', setting.icon, 'me-3']"></i>
                                            <div>
                                                <h6 class="mb-1">{{ setting.title }}</h6>
                                                <p class="text-muted small mb-0">{{ setting.description }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Deactivate Account -->
                        <div class="mt-4">
                            <div class="card border-danger">
                                <div class="card-body">
                                    <h6 class="text-danger mb-2">Deactivate account</h6>
                                    <p class="text-muted small mb-3">
                                        Temporarily disable your account
                                    </p>
                                    <button class="btn btn-danger btn-sm w-100">Deactivate</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Content Area -->
                    <div class="col-12 col-md-8 col-lg-9">
                        <div class="card border-0 shadow-sm">
                            <div class="card-body">
                                <h4 class="mb-4">User Management</h4>
                                
                                <!-- Profile Section -->
                                <div class="mb-4">
                                    <label class="form-label text-muted">Profile</label>
                                    <input type="text" class="form-control" 
                                           placeholder="Your name, Email address">
                                </div>

                                <!-- Password Section -->
                                <div class="mb-4">
                                    <label class="form-label text-muted">Password</label>
                                    <input type="password" class="form-control" 
                                           placeholder="Your email address to receive notifications">
                                </div>

                                <!-- Notifications Section -->
                                <div class="mb-4">
                                    <label class="form-label text-muted">Notifications</label>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="emailNotifications">
                                        <label class="form-check-label" for="emailNotifications">
                                            Email notifications
                                        </label>
                                    </div>
                                </div>

                                <!-- Timezone Section -->
                                <div class="mb-4">
                                    <label class="form-label text-muted">Time zone</label>
                                    <select class="form-select">
                                        <option>Pacific Time (US)</option>
                                        <option>Eastern Time (US)</option>
                                        <option>Central Time (US)</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>

        <MainFooter />
    </div>
</template>

<style scoped>
.setting-item {
    cursor: pointer;
    transition: all 0.2s ease;
}

.setting-item:hover {
    background-color: #f8f9fa;
}

.setting-item.active {
    background-color: #e9ecef;
}
</style> 