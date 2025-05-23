<script setup lang="ts"></script>

<template>
  <div class="text-white container mx-auto fixed bottom-1/2 space-y-4 z-50">
    <NuxtLink to="https://www.facebook.com/dongingots" class="block">
      <div class="group w-fit">
        <div
          class="backdrop-blur-xl !shadow-sm !shadow-secondary cursor-pointer w-fit pl-22 py-1.5 pr-1.5 rounded-tr-lg rounded-br-lg -ml-20 group-hover:ml-0 smooth-transition"
        >
          <IFacebook class="!size-10 text-[#4460A0] bg-white" />
        </div>
      </div>
    </NuxtLink>
    <NuxtLink
      to="https://www.linkedin.com/in/norman-amorganda-999791262"
      class="block"
      external
    >
      <div class="group w-fit">
        <div
          class="backdrop-blur-xl group !shadow-sm !shadow-secondary cursor-pointer w-fit pl-22 py-1.5 pr-1.5 rounded-tr-lg rounded-br-lg -ml-20 group-hover:ml-0 smooth-transition"
        >
          <ILinkedin class="!size-10" />
        </div>
      </div>
    </NuxtLink>

    <div class="group w-fit">
      <div
        class="backdrop-blur-xl group !shadow-sm !shadow-secondary cursor-pointer w-fit pl-22 py-1.5 pr-1.5 rounded-tr-lg rounded-br-lg -ml-20 group-hover:ml-0 smooth-transition"
      >
        <IEmail class="!size-10 text-secondary" />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
