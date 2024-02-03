import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { MenuItem } from '@/types/navigation.types'

const linkColors = [
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

const getRandomColor = () => {
  return linkColors[Math.floor(Math.random() * linkColors.length)]
}

export const useNavigationStore = defineStore('navigation', () => {
  const isOpened = ref(false)

  const menuLinks: MenuItem[] = [
    { name: 'Home', path: '/', color: linkColors[0] },
    { name: 'Carousel', path: '/carousel', color: linkColors[1] }
  ]

  const toggle = () => {
    isOpened.value = !isOpened.value
  }

  const getMenuItem = (index: number): MenuItem => {
    if (menuLinks && index < menuLinks.length) {
      return menuLinks[index]
    }
    return { name: '', path: '/', color: getRandomColor() }
  }

  return { isOpened, menuLinks, toggle, getMenuItem }
})
