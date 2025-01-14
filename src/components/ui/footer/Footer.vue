<template>
  <footer class="bg-gray-900 text-white">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Brand Section -->
        <div class="space-y-4">
          <div class="flex items-center space-x-2">
            <div class="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
              <span class="text-primary-600 font-bold text-xl">{{ brandLogo }}</span>
            </div>
            <span class="text-xl font-bold">{{ brandName }}</span>
          </div>
          <p class="text-gray-400 text-sm">
            Your trusted source for comprehensive news coverage across Nepal.
          </p>
          <div class="flex space-x-4">
            <a
              v-for="link in socialLinks"
              :key="link.name"
              :href="link.url"
              :aria-label="link.name"
              class="text-gray-400 hover:text-white transition-colors duration-200"
            >
              <component :is="link.icon" class="h-6 w-6" />
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li v-for="link in quickLinks" :key="link.path">
              <a
                :href="link.path"
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Support -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Support</h3>
          <ul class="space-y-2">
            <li v-for="link in supportLinks" :key="link.path">
              <a
                :href="link.path"
                class="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {{ link.name }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Newsletter -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Stay Updated</h3>
          <p class="text-gray-400 text-sm mb-4">Subscribe to our newsletter for daily updates.</p>
          <div class="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
            <Input
              type="email"
              placeholder="Enter your email"
              class="px-4 py-2 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-primary-500 flex-grow"
            />
            <Button
              class="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors duration-200"
            >
              Subscribe
            </Button>
          </div>
        </div>
      </div>

      <div class="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
        <p>&copy; {{ new Date().getFullYear() }} {{ brandName }}. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
defineProps({
  quickLinks: { type: Array, required: true },
  supportLinks: { type: Array, required: true },
  brandName: { type: String, required: true },
  socialLinks: { type: Array, required: true },
})
</script>
