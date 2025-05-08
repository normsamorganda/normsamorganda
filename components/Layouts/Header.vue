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
        <li class="px-3 py-2">
          <NuxtLink
            to="/"
            class="p-2 cursor-pointer hover:text-secondary smooth-transition"
            >Home</NuxtLink
          >
        </li>
        <li class="px-3 py-2">
          <NuxtLink
            to="#about"
            class="p-2 cursor-pointer hover:text-secondary smooth-transition"
            >About</NuxtLink
          >
        </li>
        <li class="px-3 py-2">
          <NuxtLink
            to="#skills"
            class="p-2 cursor-pointer hover:text-secondary smooth-transition"
            >Skills</NuxtLink
          >
        </li>
        <li
          class="border group border-white w-fit px-3 py-2 hover:bg-secondary smooth-transition cursor-pointer"
        >
          <NuxtLink
            to="#contact"
            class="cursor-pointer group-hover:text-black smooth-transition flex items-center"
          >
            <span>Contact</span>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

<style scoped></style>
