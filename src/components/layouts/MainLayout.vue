<template>
  <div class="min-h-screen flex flex-col bg-slate-100 dark:bg-gray-900">
    <Header
      :navigation-items="navigationItems"
      :brand-name="brandName"
      :brand-logo="brandLogo"
      :is-mobile-menu-open="isMobileMenuOpen"
      @toggle-mobile-menu="isMobileMenuOpen = !isMobileMenuOpen"
      @theme-toggle="toggleTheme"
    />
    <main
      class="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 lg:pb-8 pt-20 sm:pt-20 lg:pt-20"
      :class="{ 'blur-sm': isMobileMenuOpen }"
    >
      <div class="flex flex-col gap-y-4 sm:gap-y-6 lg:gap-y-8">
        <slot></slot>
      </div>
    </main>

    <Footer
      :quick-links="quickLinks"
      :support-links="supportLinks"
      :brand-name="brandName"
      :social-links="socialLinks"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useDarkMode } from '@/composables/useDarkMode' // Adjust the path as needed

interface Props {
  brandName?: string
  brandLogo?: string
}

withDefaults(defineProps<Props>(), {
  brandName: 'NepalNews',
  brandLogo: 'N',
})

const { toggle: toggleTheme } = useDarkMode()
const isMobileMenuOpen = ref(false)

const navigationItems = ref([
  { name: 'Home', path: '/' },
  { name: 'Latest News', path: '/latest' },
  { name: 'Categories', path: '/categories' },
  { name: 'Trending', path: '/trending' },
  { name: 'Bookmarks', path: '/bookmarks' },
])

const quickLinks = ref([
  { name: 'Latest News', path: '/latest' },
  { name: 'Politics', path: '/politics' },
  { name: 'Business', path: '/business' },
  { name: 'Technology', path: '/technology' },
])

const supportLinks = ref([
  { name: 'Help Center', path: '/help' },
  { name: 'Privacy Policy', path: '/privacy' },
  { name: 'Terms of Service', path: '/terms' },
  { name: 'Contact Us', path: '/contact' },
])

const socialLinks = ref([
  { name: 'Facebook', icon: 'facebook', url: '#' },
  { name: 'Twitter', icon: 'twitter', url: '#' },
])
</script>
