<template>
  <Transition @enter="showMenu" @leave="hideMenu" leave-active-class="transition duration-500">
    <div
      class="w-screen h-screen absolute grid grid-cols-4 grid-rows-2"
      v-show="navigationStore.isOpened"
    >
      <router-link
        v-for="index in 8"
        @click="handleClick"
        :key="navigationStore.getMenuItem(index - 1).name"
        :to="navigationStore.getMenuItem(index - 1).path"
        :class="navigationStore.getMenuItem(index - 1).color"
        class="link flex justify-center items-center w-full"
      >
        {{ navigationStore.getMenuItem(index - 1).name }}
      </router-link>
    </div>
  </Transition>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { useNavigationStore } from '@/stores/navigation'
import { onMounted, ref } from 'vue'

const navigationStore = useNavigationStore()
const links = ref<NodeListOf<Element> | null>(null)

onMounted(() => {
  links.value = document.querySelectorAll('.link')
  gsap.set(links.value, { autoAlpha: 0, scale: 0.5 })
})

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

<style lang="scss" scoped></style>
