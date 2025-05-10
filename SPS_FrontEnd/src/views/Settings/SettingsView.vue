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
                            <div class="card-body text-center">
                                <h5 style="font-family: 'Inter', sans-serif; font-size: 22px; font-weight: 600; color: #333;">
                                    {{ currentUser.name }}
                                </h5>
                                <p style="font-family: 'Poppins', sans-serif; font-size: 14px; color: #6C757D;">
                                    {{ currentUser.email }}
                                </p>
                                <div class="progress" style="height: 6px;">
                                    <div class="progress-bar bg-primary" 
                                         :style="{ width: `${profileCompletion}%` }"
                                         role="progressbar"
                                         :aria-valuenow="profileCompletion"
                                         aria-valuemin="0"
                                         aria-valuemax="100"></div>
                                </div>
                                <p style="font-family: 'Poppins', sans-serif; font-size: 14px; font-weight: 500; color: #333;">
                                    Profile {{ profileCompletion }}% Complete
                                </p>
                            </div>
                        </div>

                        <!-- Settings Navigation -->
                        <div class="settings-nav mt-4">
                            <div v-for="setting in settings" :key="setting.title" 
                                 class="setting-item p-3 rounded mb-2"
                                 :class="{ 'bg-light': setting.isActive }"
                                 style="font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 500; cursor: pointer; transition: background-color 0.2s ease;">
                                <div class="d-flex align-items-center">
                                    <i :class="['bi', setting.icon, 'me-3']"></i>
                                    <div>
                                        <h6 style="font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 600; margin-bottom: 4px;">
                                            {{ setting.title }}
                                        </h6>
                                        <p style="font-family: 'Poppins', sans-serif; font-size: 14px; color: #6C757D; margin-bottom: 0;">
                                            {{ setting.description }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <!-- Right Content Area -->
                    <div class="col-12 col-md-8 col-lg-9">
                        <div class="card border-0 shadow-sm">
                            <div class="card-body">
                                <h4 style="font-family: 'Inter', sans-serif; font-size: 24px; font-weight: 600; color: #333;">
                                    User Management
                                </h4>

                                <!-- Profile Section -->
                                <div class="mb-4">
                                    <label style="font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 500; color: #6C757D;">
                                        Profile
                                    </label>
                                    <input type="text" class="form-control" placeholder="Your name, Email address">
                                </div>

                                <!-- Password Section -->
                                <div class="mb-4">
                                    <label style="font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 500; color: #6C757D;">
                                        Password
                                    </label>
                                    <input type="password" class="form-control" placeholder="Your email address to receive notifications">
                                </div>

                                <!-- Notifications Section -->
                                <div class="mb-4">
                                    <label style="font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 500; color: #6C757D;">
                                        Notifications
                                    </label>
                                    <div class="form-check form-switch">
                                        <input class="form-check-input" type="checkbox" id="emailNotifications">
                                        <label class="form-check-label" for="emailNotifications">
                                            Email notifications
                                        </label>
                                    </div>
                                </div>

                                <!-- Timezone Section -->
                                <div class="mb-4">
                                    <label style="font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 500; color: #6C757D;">
                                        Time zone
                                    </label>
                                    <select class="form-select">
                                        <option>Pacific Time (US)</option>
                                        <option>Eastern Time (US)</option>
                                        <option>Central Time (US)</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <!-- Deactivate Account (Moved to Right Side) -->
                       <!-- Deactivate Account (Small Rectangle/Square) -->
<div class="mt-4">
    <div class="card border-danger shadow-sm" 
         style="width: 250px; height: 250px; display: flex; justify-content: center; align-items: center; text-align: center; border-radius: 12px;">
        <div class="card-body">
            <h6 style="font-family: 'Inter', sans-serif; font-size: 18px; font-weight: 600; color: #dc3545;">
                Deactivate Account
            </h6>
            <p style="font-family: 'Poppins', sans-serif; font-size: 14px; color: #6C757D;">
                Temporarily disable your account
            </p>
            <button class="btn btn-danger btn-sm w-100" 
                    style="font-family: 'Poppins', sans-serif; font-size: 16px; font-weight: 500; padding: 8px 16px;">
                Deactivate
            </button>
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
#app {
  max-width: 2200px;
  margin: 0 120px;
  padding: 2rem;
  font-weight: normal;
}

/* Add your media query for larger screens */
@media (min-width: 2200px) {
  #app {
    display: grid;
    grid-template-columns: none;
    padding: 0;
  }
}
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

/* Fixed container styling */
.container {
    max-width: 1200px !important;
    margin: 0 auto !important;
    padding: 0 15px !important;
}

/* Main content spacing */
main {
    margin-top: 90px;
    margin-bottom: 70px;
    padding: 20px 0;
}

/* Proper row and column spacing */
.row {
    margin-left: -15px !important;
    margin-right: -15px !important;
}

/* Give columns their proper Bootstrap spacing */
.col-md-4, .col-md-8, .col-lg-3, .col-lg-9 {
    padding: 0 15px !important;
}

/* Add spacing between cards */
.card {
    margin-bottom: 20px;
}

/* Ensure content is centered on larger screens */
@media (min-width: 992px) {
    .container {
        padding: 0 30px !important;
    }
}
</style> 