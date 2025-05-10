<template>
    <footer class="footer">
        <div class="footer-container">
            <div class="row align-items-center">
                <div class="col-md-4">
                    <img src="@/assets/Logo.jpg" alt="Logo" width="24" height="24" class="me-2">
                    <small class="text-muted">© 2023 Student Productivity System</small>
                </div>
                <div class="col-md-4 text-center">
                    <small class="text-muted">Powered by Vue.js</small>
                </div>
                <div class="col-md-4 text-end">
                    <a href="#" class="text-muted me-2"><small>Privacy Policy</small></a>
                    <a href="#" class="text-muted"><small>Terms of Use</small></a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script setup>
</script>

<style scoped>
.footer {
    font-family: 'Poppins', sans-serif; /* Modern and sleek */
    background-color: #f8f9fa; /* Light, clean background */
    padding: 15px 0;
}

.footer-container {
    max-width: 1200px;
    margin: auto;
}

.text-muted {
    font-size: 14px;
    font-weight: 500;
    color: #6c757d; /* Subtle and stylish */
}

a.text-muted {
    font-size: 14px;
    font-weight: bold;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
}

a.text-muted:hover {
    color: #007bff; /* Elegant hover effect */
}

</style>
