<template>
  <div
    @click="() => navigationStore.toggle()"
    class="container absolute top-0 cursor-pointer flex items-center justify-center z-30"
  >
    <div class="absolute w-[50px] h-[50px] bg-blue-300 rounded-full" />
    <svg
      viewBox="0 0 100 100"
      preserveAspectRatio="xMidYMid meet"
      class="top-0 w-full h-full rounded-full z-50"
    >
      <path
        ref="top"
        id="first"
        d="M 30 40 L 70 40 C 90 40 90 75 60 85 A 40 40 0 0 1 20 20 L 80 80"
      ></path>
      <path ref="middle" id="second" d="M 30 50 L 70 50"></path>
      <path
        ref="bot"
        id="third"
        d="M 70 60 L 30 60 C 10 60 10 20 40 15 A 40 38 0 1 1 20 80 L 80 20"
      ></path>
    </svg>
  </div>
</template>

<script setup lang="ts">
import gsap from 'gsap'
import { ref, onMounted, watch } from 'vue'
import { useNavigationStore } from '@/stores/navigation'

const navigationStore = useNavigationStore()

const top = ref<SVGPathElement | null>(null)
const middle = ref<SVGPathElement | null>(null)
const bot = ref<SVGPathElement | null>(null)
const tl = gsap.timeline({ paused: true, reversed: true })

onMounted(() => {
  const topPathLength = top.value?.getTotalLength()
  const middlePathLength = middle.value?.getTotalLength()
  const botPathLength = bot.value?.getTotalLength()

  if (!topPathLength || !middlePathLength || !botPathLength) return

  gsap.set(top.value, {
    strokeDasharray: `${middlePathLength} ${topPathLength - middlePathLength}`,
    strokeDashoffset: topPathLength
  })

  gsap.set(middle.value, {
    strokeDasharray: middlePathLength,
    strokeDashoffset: 0
  })

  gsap.set(bot.value, {
    strokeDasharray: `${middlePathLength} ${botPathLength - middlePathLength}`,
    strokeDashoffset: botPathLength
  })

  tl.to(top.value, { strokeDashoffset: 63, duration: 0.6, ease: 'power2.inOut' }, '<')
    .to(
      middle.value,
      {
        strokeDashoffset: -20,
        strokeDasharray: `0 ${middlePathLength}`,
        duration: 0.4,
        ease: 'power2.inOut'
      },
      '<'
    )
    .to(bot.value, { strokeDashoffset: 63, duration: 0.6, ease: 'power2.inOut' }, '<')
    .to(middle.value, { autoAlpha: 0, delay: 0.3, duration: 0.1 }, '<')
})

watch(
  () => navigationStore.isOpened,
  () => {
    navigationStore.isOpened ? tl.restart() : tl.reverse()
  }
)
</script>

<style scoped lang="scss">
.container {
  width: 60px;
  height: 60px;
  svg {
    @apply stroke-blue-700;
    fill: none;
    stroke-width: 4;
    stroke-linecap: round;
  }
}
</style>
