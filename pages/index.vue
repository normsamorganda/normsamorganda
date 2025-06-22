<script setup lang="ts">
definePageMeta({
  layout: "main-layout",
});
</script>

<template>
  <main class="w-full bg-primary font-mont overflow-auto relative">
    <SocialMedia />
    <div class="main-container px-2 lg:px-8 h-[calc(100svh-120px)]">
      <SectionHome />
      <SectionAbout />
      <SectionExperienceAndEducation />
      <!-- <h1 class="text-2xl md:text-4xl lg:text-7xl font-semibold text-white">
        WORK IN PROGRESS..
      </h1> -->
    </div>
  </main>
</template>
<style scoped></style>
