<template>
  <header
    class="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700 fixed w-full top-0 z-50"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo and Brand -->
        <div class="flex items-center">
          <router-link to="/" class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-primary-600 rounded-lg flex items-center justify-center">
              <span class="text-white font-bold text-xl">{{ brandLogo }}</span>
            </div>
            <span
              class="text-xl font-bold bg-gradient-to-r from-primary-600 to-secondary-600 bg-clip-text text-transparent"
            >
              {{ brandName }}
            </span>
          </router-link>
        </div>

        <!-- Navigation (Desktop) -->
        <nav class="hidden md:flex space-x-8">
          <router-link
            v-for="item in navigationItems"
            :key="item.path"
            :to="item.path"
            class="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            active-class="text-primary-600 dark:text-primary-500 font-semibold"
          >
            {{ item.name }}
          </router-link>
        </nav>

        <!-- Right Section -->
        <div class="flex items-center space-x-4">
          <!-- Search -->
          <Button
            aria-label="Search"
            class="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 rounded-full bg-white dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <iconifyVue icon="bx:bx-search" class="w-5 h-5" />
          </Button>

          <!-- Theme Toggle -->
          <Button
            aria-label="Toggle Theme"
            @click="$emit('theme-toggle')"
            class="p-2 text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 rounded-full bg-white dark:bg-gray-800 border hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <iconifyVue :icon="isDark ? 'lucide:sun' : 'lucide:moon'" class="w-5 h-5" />
          </Button>

          <!-- Profile/Login -->
          <Button
            class="flex items-center space-x-2 px-4 py-2 rounded-full bg-primary-600 text-white hover:bg-primary-700 transition-colors duration-200"
          >
            <span>Sign In</span>
          </Button>
        </div>

        <!-- Mobile Menu Button -->
        <div class="md:hidden">
          <Button
            aria-label="Open Menu"
            @click="$emit('toggle-mobile-menu')"
            class="p-2 rounded-md text-gray-500 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </Button>
        </div>
      </div>

      <!-- Mobile Menu Dropdown -->
      <div
        v-if="isMobileMenuOpen"
        class="md:hidden mt-2 pb-4 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700"
      >
        <router-link
          v-for="item in navigationItems"
          :key="item.path"
          :to="item.path"
          class="block px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-500 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md text-sm font-medium transition-colors duration-200"
          active-class="text-primary-600 dark:text-primary-500 font-semibold"
        >
          {{ item.name }}
        </router-link>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { useDarkMode } from '@/composables/useDarkMode'

defineProps({
  navigationItems: { type: Array, required: true },
  brandName: { type: String, required: true },
  brandLogo: { type: String, required: true },
  isMobileMenuOpen: { type: Boolean, required: true },
})

const { isDark } = useDarkMode()

defineEmits(['theme-toggle', 'toggle-mobile-menu'])
</script>
