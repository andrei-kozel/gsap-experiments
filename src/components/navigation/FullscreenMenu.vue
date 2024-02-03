<template>
  <div class="w-screen h-screen absolute grid grid-cols-4 grid-rows-2">
    <router-link
      v-for="index in 8"
      @click="handleClick"
      :key="navigationStore.getMenuItem(index - 1).name"
      :to="navigationStore.getMenuItem(index - 1).path"
      :class="colors[index - 1]"
      class="link flex justify-center items-center w-full"
    >
      {{ navigationStore.getMenuItem(index - 1).name }}
    </router-link>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { useNavigationStore } from '@/stores/navigation'
import { onMounted, ref, watch } from 'vue'

const navigationStore = useNavigationStore()
const links = ref<NodeListOf<Element> | null>(null)

const colors = [
  'bg-red-300',
  'bg-yellow-300',
  'bg-green-300',
  'bg-orange-300',
  'bg-teal-300',
  'bg-blue-300',
  'bg-indigo-300',
  'bg-purple-300',
  'bg-pink-300'
]

onMounted(() => {
  links.value = document.querySelectorAll('.link')
  gsap.set(links.value, { autoAlpha: 0, scale: 0.5 })
})

watch(
  () => navigationStore.isOpened,
  () => {
    navigationStore.isOpened ? showMenu() : hideMenu()
  }
)

const showMenu = () => {
  gsap.to(links.value, {
    autoAlpha: 1,
    stagger: { each: 0.05, from: 'start' },
    duration: 0.1,
    ease: 'power2.out',
    scale: 1
  })
}

const hideMenu = () => {
  gsap.to(links.value, {
    autoAlpha: 0,
    stagger: { each: 0.05, from: 'end' },
    duration: 0.1,
    ease: 'power2.out',
    scale: 0.5
  })
}

const handleClick = () => {
  navigationStore.toggle()
}
</script>
