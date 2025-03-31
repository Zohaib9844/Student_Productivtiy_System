<template>
    <div class="py-4">
        <div class="shadow p-4 rounded bg-white">
            <h3 class="fw-bold text-center">Sign Up</h3>
            <p class="text-center text-muted">Create an account to unlock exclusive features.</p>
            <form>
                <div class="mb-3">
                    <label for="email" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="email" placeholder="Enter your Email" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Password</label>
                    <input type="password" class="form-control" id="password" placeholder="Enter your Password" required>
                </div>
                <div class="mb-3">
                    <label for="password" class="form-label">Confirm Password:</label>
                    <input type="password" class="form-control" id="password" placeholder="Confirm your Password" required>
                </div>
                
                <button type="submit" class="btn btn-primary w-100">Sign up</button>
            </form>
            <div class="text-center mt-3">
                <button class="btn btn-light w-100 border">Sign Up with Google</button>
                <p class="mt-3">Already have an account? <RouterLink to="/">Sign In</RouterLink></p>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>