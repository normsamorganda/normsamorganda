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
  <main class="w-full bg-primary font-mont overflow-auto relative">
    <SocialMedia />
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
              Hi there! I'm a frontend developer with 2 years of experience.
              When I'm not coding, you'll probably find me playing basketball,
              enjoying a good cup of coffee, or exploring new places with my
              girlfriend, Portia.
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

      <div
        id="work-experience"
        class="flex size-full flex-col lg:flex-row justify-around lg:justify-center space-y-4 py-6 gap-x-12"
      >
        <div class="lg:flex-1 text-white">
          <div class="w-full lg:w-1/2 space-y-4">
            <div class="relative w-fit space-y-2 mx-auto md:mx-0">
              <h3
                class="text-white text-2xl sm:text-4xl uppercase font-semibold"
              >
                Experience
              </h3>
              <div class="bg-white w-full h-[2px] rounded-xl"></div>
            </div>
            <div class="space-y-5 md:space-y-8 text-sm md:text-xl">
              <ul class="relative">
                <li
                  class="flex items-start lg:gap-x-6 border-l-2 border-dashed border-secondary"
                >
                  <div>
                    <div class="absolute -left-5">
                      <i-work
                        class="!size-10 p-2 text-white bg-secondary rounded-full"
                      />
                    </div>
                    <div class="size-10 border-l border-secondary h-full"></div>
                  </div>
                  <div class="space-y-3">
                    <p class="text-secondary font-semibold text-2xl">
                      Stealth Solutions and Digital Marketing
                    </p>
                    <div class="flex items-center gap-x-6">
                      <p>Web Developer</p>
                      <p class="text-sm text-gray-300 font-medium">
                        February 2024 - Present
                      </p>
                    </div>
                    <ul class="list-disc text-sm pl-5">
                      <li>
                        Revamped 20+ front-facing websites for banks, improving
                        performance, scalability, and maintainability.
                      </li>
                      <li>
                        Converted Figma designs into fully responsive and
                        user-friendly web applications.
                      </li>
                      <li>
                        Implemented API integrations for multiple pharma
                        websites, connecting backend services with responsive
                        frontend interfaces.
                      </li>
                      <li>
                        Developed scalable and efficient solutions by writing
                        clean, modular, and reusable code.
                      </li>
                    </ul>
                  </div>
                </li>
                <!-- <li>CSS5</li>
              <li>Tailwind</li>
              <li>JavaScript</li>
              <li>VueJs</li>
              <li>TypeScript</li>
              <li>NuxtJs</li>
              <li>Laravel</li> -->
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- <h1 class="text-2xl md:text-4xl lg:text-7xl font-semibold text-white">
        WORK IN PROGRESS..
      </h1> -->
    </div>
  </main>
</template>
<style scoped></style>
