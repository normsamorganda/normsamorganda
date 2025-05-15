<script setup lang="ts">
const loading = ref<boolean>(true);
setTimeout(() => {
  loading.value = false;
}, 1000);
</script>
<template>
  <transition name="fade">
    <Loading v-if="loading" />
  </transition>
  <NuxtLayout />
</template>
