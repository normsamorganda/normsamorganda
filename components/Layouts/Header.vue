<script setup lang="ts">
const showModal = ref<boolean>(false); // 👈 control for modal

const toggleModal = () => {
  showModal.value = !showModal.value;
};
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
  <header
    class="font-poppins border-b border-secondary flex items-center justify-center text-5xl w-full bg-primary text-gray-300 h-[84px] py-3 px-4"
  >
    <div
      class="main-container px-4 md:px-0 mx-auto w-full fixed z-50 flex justify-between bg-primary items-center md:justify-between"
    >
      <div>
        <NuxtPicture
          src="images/logo.webp"
          class="h-full"
          width="60px"
          heigh="60px"
        />
      </div>
      <div class="block lg:hidden">
        <i-burger filled class="text-7xl" @click="toggleModal" />
      </div>
      <ul class="hidden text-lg md:flex md:gap-10 font-medium">
        <li class="px-3 py-2">
          <NuxtLink
            to="/"
            class="p-2 cursor-pointer hover:text-secondary smooth-transition"
            >Home</NuxtLink
          >
        </li>
        <li class="px-3 py-2" @click="scrollToBottom('about')">
          <span
            class="p-2 cursor-pointer hover:text-secondary smooth-transition"
            >About</span
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
  <!-- Hamburger Modal for Mobile -->
  <Transition name="slide-right">
    <div
      v-if="showModal"
      class="fixed top-0 font-poppins left-0 w-full h-full bg-primary bg-opacity-50 backdrop-blur-sm z-[999] flex justify-end"
    >
      <div class="bg-none w-full h-full p-6 relative flex flex-col text-white">
        <!-- Close Button -->
        <button @click="toggleModal" class="absolute top-4 right-4 text-3xl">
          &times;
        </button>

        <!-- Mobile Menu Links -->
        <nav class="mt-16 flex flex-col gap-6 text-xl">
          <NuxtLink @click="toggleModal" to="/">Home</NuxtLink>
          <span
            @click="
              scrollToBottom('about');
              toggleModal();
            "
            class="cursor-pointer"
            >About</span
          >
          <NuxtLink @click="toggleModal" to="#skills">Skills</NuxtLink>
          <NuxtLink @click="toggleModal" to="#contact">Contact</NuxtLink>
        </nav>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.slide-right-enter-active,
.slide-right-leave-active {
  transition: all 0.3s ease;
}
.slide-right-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-right-enter-to {
  transform: translateX(0);
  opacity: 1;
}
.slide-right-leave-from {
  transform: translateX(0);
  opacity: 1;
}
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
