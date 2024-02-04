<template>
  <div>
    <img class="object-cover h-full" :src="image" alt="Random" />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  image: string
}>()
</script>

<style scoped lang="scss"></style>
