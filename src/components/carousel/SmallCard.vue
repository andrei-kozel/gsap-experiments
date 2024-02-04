<template>
  <div class="h-full bg-green-300 cursor-pointer">
    <img class="object-cover h-full" :src="image" alt="Random" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<style scoped></style>
