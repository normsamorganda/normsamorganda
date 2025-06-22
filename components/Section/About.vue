<script setup lang="ts"></script>

<template>
  <div
    id="about"
    class="flex size-full flex-col lg:flex-row justify-around lg:justify-center space-y-4 py-6 gap-x-12"
  >
    <NuxtPicture
      src="/images/me2.jpg"
      class="size-54 shrink-0 mx-auto"
      :imgAttrs="{
        class:
          'rounded-xl max-w-full h-full object-cover object-center shadow-md shadow-secondary hover:shadow-lg hover:shadow-secondary smooth-transition',
      }"
    />

    <div class="lg:flex-1 text-white space-y-4">
      <div class="relative w-fit space-y-2 mx-auto md:mx-0">
        <h3 class="text-white text-2xl sm:text-4xl uppercase font-semibold">
          About
        </h3>
        <div class="bg-white w-full h-[2px] rounded-xl"></div>
      </div>
      <div class="space-y-5 md:space-y-8 text-sm md:text-xl">
        <p>
          Hi there! I'm a frontend developer with 2 years of experience. When
          I'm not coding, you'll probably find me playing basketball, enjoying a
          good cup of coffee, or exploring new places with my girlfriend,
          Portia.
        </p>
        <p>
          I'm passionate in learning new technologies, building responsive
          websites, and documenting my working process when it comes to
          complicated features.
        </p>
        <p>Here are a few technologies I've been working with recently:</p>
        <ul class="grid grid-cols-2 gap-x-8 list-disc list-inside max-w-sm">
          <li>HTML5</li>
          <li>CSS5</li>
          <li>Tailwind</li>
          <li>JavaScript</li>
          <li>VueJs</li>
          <li>TypeScript</li>
          <li>NuxtJs</li>
          <li>Laravel</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped></style>
