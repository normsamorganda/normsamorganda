<script setup lang="ts"></script>

<template>
  <header
    class="font-poppins flex items-center justify-center text-5xl w-full bg-primary text-gray-300 h-[84px]"
  >
    <div
      class="main-container mx-auto w-full fixed z-50 flex justify-around bg-primary items-center py-3 px-4 md:justify-between"
    >
      <div>
        <NuxtPicture
          src="images/logo.webp"
          class="h-full"
          width="60px"
          heigh="60px"
        />
      </div>
      <ul class="hidden text-lg md:flex md:gap-10 font-medium">
        <NuxtLink to="/" class="p-2 cursor-pointer">Home</NuxtLink>
        <NuxtLink to="#about" class="p-2 cursor-pointer">About</NuxtLink>
        <NuxtLink to="#skills" class="p-2 cursor-pointer">Skills</NuxtLink>
        <NuxtLink to="#contact" class="p-2 cursor-pointer">Contact</NuxtLink>
      </ul>
    </div>
  </header>
</template>

<style scoped></style>
