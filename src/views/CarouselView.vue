<template>
  <div class="h-screen carousel flex">
    <SmallCard
      v-for="(image, index) in images"
      :key="index"
      :image="image"
      class="card h-full cursor-pointer"
    />
  </div>
</template>

<script setup lang="ts">
import SmallCard from '@/components/carousel/SmallCard.vue'
import { onMounted } from 'vue'

const images = [
  '/src/assets/images/mountains/image1.jpg',
  '/src/assets/images/mountains/image2.jpg',
  '/src/assets/images/mountains/image3.jpg',
  '/src/assets/images/mountains/image4.jpg'
]

onMounted(() => {
  const card = document.querySelectorAll('.card') as NodeListOf<Element>

  card.forEach((el) => {
    el.addEventListener('mouseenter', onMouseEnter)
    el.addEventListener('mouseleave', onMouseLeave)
  })
})

const onMouseEnter = (e: Event) => {
  const card = e.target as HTMLElement
  card.classList.add('scale-110')
}

const onMouseLeave = (e: Event) => {
  const card = e.target as HTMLElement
  card.classList.remove('scale-110')
}
</script>
