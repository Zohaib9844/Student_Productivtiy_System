<template>
  <footer class="footer">
      <div class="text-center">
          <p class="mb-1">&copy; 2023 SkillBridge. All rights reserved.</p>
          <p class="text-muted">Contact: hello@studentproductivitysystem.com | +91 91813 23 2309</p>
      </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
/* Force Full-Screen Width */
.footer {
  width: 100vw; /* Full viewport width */
  margin: 0;
  padding: 15px 0;
  background-color: #f8f9fa;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
}

/* Ensure No Unwanted Padding/Margin */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Make Sure Page Doesn't Allow White Spaces */
body, html {
  width: 100%;
  overflow-x: hidden;
  padding: 0 !important;
  margin: 0 !important;
}
</style>
