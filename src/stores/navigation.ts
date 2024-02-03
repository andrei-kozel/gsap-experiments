import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useNavigationStore = defineStore('navigation', () => {
  const isOpened = ref(false)
  const menuLinks = [
    { name: 'Home', path: '/' },
    { name: 'Carousel', path: '/carousel' }
  ]
  const toggle = () => {
    isOpened.value = !isOpened.value
  }

  const getMenuItem = (index: number) => {
    if (menuLinks && index < menuLinks.length) {
      return menuLinks[index]
    }
    return { name: '', path: '/' }
  }

  return { isOpened, menuLinks, toggle, getMenuItem }
})
