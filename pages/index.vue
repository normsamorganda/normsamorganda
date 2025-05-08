<script setup lang="ts">
definePageMeta({
  layout: "main-layout",
});

const scrollToBottom = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({
      behavior: "smooth",
      block: "end", // Scrolls to bottom of element
    });
  }
};
</script>

<template>
  <main class="w-full bg-primary font-poppins overflow-auto">
    <div class="main-container px-8 h-[calc(100svh-120px)]">
      <div class="flex flex-wrap size-full flex-col justify-center space-y-4">
        <h1 class="text-2xl sm:text-4xl lg:text-7xl font-bold text-[#ccd6f6]">
          Hello World,
        </h1>
        <TypingEffect />
        <p class="text-sm md:text-xl font-medium text-[#8892b0]">
          2+ years of experience crafting responsive, user-centric
          interfaces—building seamless <br />
          web experiences that captivate.
        </p>

        <button
          @click="scrollToBottom('about')"
          class="w-[100px] font-medium active:bg-primary lg:w-[150px] bg-primary h-[50px] text-sm border-white border my-3 flex items-center justify-center rounded-sm cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-primary before:to-secondary before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-sm hover:before:left-0 text-[#fff]"
        >
          Know Me
        </button>
      </div>

      <div
        id="about"
        class="flex flex-wrap size-full flex-col justify-center space-y-4"
      >
        <h1 class="text-2xl md:text-4xl lg:text-7xl font-semibold text-white">
          WORK IN PROGRESS..
        </h1>
      </div>
    </div>
  </main>
</template>
<style scoped></style>
