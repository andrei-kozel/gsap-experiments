<template>
  <div class="grid-cols-4 grid h-screen">
    <SmallCard v-for="(image, index) in images" :key="index" :image="image" />
  </div>
</template>

<script setup lang="ts">
import SmallCard from '@/components/carousel/SmallCard.vue'

const images = [
  '/src/assets/images/mountains/image1.jpg',
  '/src/assets/images/mountains/image2.jpg',
  '/src/assets/images/mountains/image3.jpg',
  '/src/assets/images/mountains/image4.jpg'
]
</script>

<style lang="scss" scoped></style>
