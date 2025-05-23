<script setup lang="ts">
const date = new Date();

const year = date.getFullYear();
</script>

<template>
  <footer
    class="w-full shadow-md shadow-secondary border-t border-secondary font-poppins text-center bg-primary text-white py-2.5 text-xs"
  >
    &copy; {{ year }} Norman Amorganda. All rights reserved.
  </footer>
</template>

<style scoped></style>
