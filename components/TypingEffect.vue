<script setup lang="ts">
const phrases = [
  "I'm Norman Amorganda.",
  "I'm a frontend developer.",
  "Based in the Philippines.",
];

const currentPhraseIndex = ref(0);
const currentCharacterIndex = ref(0);
const currentPhrase = ref("");
const isDeleting = ref(false);

function loop() {
  const currentPhraseText = phrases[currentPhraseIndex.value];

  if (!isDeleting.value) {
    currentPhrase.value += currentPhraseText[currentCharacterIndex.value];
    currentCharacterIndex.value++;

    if (currentCharacterIndex.value === currentPhraseText.length) {
      isDeleting.value = true;
      setTimeout(loop, 1500); // 1.5-second delay before deleting starts
      return; // Exit early to prevent double execution
    }
  } else {
    currentPhrase.value = currentPhrase.value.slice(0, -1);
    currentCharacterIndex.value--;
  }

  if (currentCharacterIndex.value === 0) {
    currentPhrase.value = "";
    isDeleting.value = false;
    currentPhraseIndex.value++;
    if (currentPhraseIndex.value === phrases.length) {
      currentPhraseIndex.value = 0;
    }
  }
  const spedUp = Math.random() * (80 - 50) + 50;
  const normalSpeed = Math.random() * (300 - 200) + 100;
  const time = isDeleting.value ? spedUp : normalSpeed;
  setTimeout(loop, time);
}
onMounted(() => {
  loop();
});
</script>

<template>
  <h2
    class="text-2xl sm:text-4xl lg:text-7xl font-bold text-secondary h-[2rem] lg:h-[4.5rem]"
  >
    {{ currentPhrase }}
  </h2>
</template>

<style scoped></style>
