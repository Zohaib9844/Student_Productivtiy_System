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
    width: 100vw; /* Full viewport width */
    padding: 15px 0;
    background-color: #f8f9fa;
}

/* Force footer to align properly */
body, html {
    width: 100%;
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Prevent unwanted scrolling */
}

/* Fix footer alignment */
.footer-container {
    width: 100%;
    max-width: 1400px; /* Adjust as needed */
    margin: 0 auto; /* Centers the footer */
    padding: 0 20px;
}

</style>
