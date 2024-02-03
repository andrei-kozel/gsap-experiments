<script setup lang="ts">
import NavigationComponentVue from '@/components/navigation/NavigationComponent.vue'

import { RouterView } from 'vue-router'
</script>

<template>
  <header>
    <NavigationComponentVue />
  </header>

  <RouterView />
</template>

<style scoped></style>
