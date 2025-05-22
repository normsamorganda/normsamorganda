<script setup lang="ts">
const date = new Date();

const year = date.getFullYear();
</script>

<template>
  <footer
    class="w-full shadow-md shadow-secondary border border-secondary font-poppins text-center bg-primary text-white py-2.5 text-xs"
  >
    &copy; {{ year }} Created and Design by Norman Amorganda
  </footer>
</template>

<style scoped></style>
