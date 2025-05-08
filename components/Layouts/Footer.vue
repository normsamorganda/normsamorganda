<script setup lang="ts">
const date = new Date();

const year = date.getFullYear();
</script>

<template>
  <footer
    class="w-full font-poppins text-center bg-primary text-white py-2.5 text-xs"
  >
    &copy; {{ year }} Created and Design by Norman Amorganda
  </footer>
</template>

<style scoped></style>
