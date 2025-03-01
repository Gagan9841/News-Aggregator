<template>
  <section class="bg-white dark:bg-gray-900 categories-section relative overflow-hidden py-4">
    <!-- Abstract background image overlay -->
    <div class="absolute inset-0 pointer-events-none">
      <div
        class="absolute inset-0 bg-gradient-to-b from-white via-white/50 to-white/80 dark:from-gray-900/80 dark:via-gray-900/50 dark:to-gray-900/80 z-10"
      ></div>
      <img
        src="../../../assets/img/bg-category.jpg"
        alt="Background"
        class="absolute inset-0 object-cover opacity-10 dark:opacity-10"
      />
    </div>

    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">
      <div class="flex items-center justify-between mb-10">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">News Categories</h2>
        <Button
          variant="outline"
          size="sm"
          class="text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
        >
          All Categories
          <iconifyVue icon="material-symbols:arrow-forward-rounded" class="ml-2 h-4 w-4" />
        </Button>
      </div>

      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div
          v-for="category in categories"
          :key="category.id"
          class="group relative bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-xl p-6 hover:bg-primary-50 dark:hover:bg-gray-700 transition-all duration-300 shadow-md hover:shadow-lg"
        >
          <div class="flex items-center gap-4 mb-4">
            <div class="p-3 bg-primary-50 dark:bg-gray-700 rounded-lg">
              <iconifyVue :icon="category.icon" class="w-6 h-6 text-primary-600" />
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ category.name }}
            </h3>
          </div>

          <ul class="space-y-3">
            <li v-for="(article, index) in category.articles" :key="index">
              <a
                href="#"
                class="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 line-clamp-2 transition-colors duration-200"
              >
                {{ article }}
              </a>
            </li>
          </ul>

          <div class="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
            <a
              href="#"
              class="inline-flex items-center text-sm font-medium text-primary-600 dark:text-primary-400 hover:underline group-hover:translate-x-1 transition-transform duration-200"
            >
              View All
              <iconifyVue icon="material-symbols:arrow-forward-rounded" class="ml-1 w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const categories = [
  {
    id: 1,
    name: 'Politics',
    icon: 'material-symbols:gavel',
    articles: [
      'Parliament Passes New Bill on Digital Privacy',
      'Opposition Demands Special Session',
      'Electoral Reform Committee Formed',
    ],
  },
  {
    id: 2,
    name: 'Business',
    icon: 'material-symbols:business-center',
    articles: [
      'Nepal Stock Exchange Hits New High',
      'Foreign Investment in Tech Sector Grows',
      'New Trade Policy Announced',
    ],
  },
  {
    id: 3,
    name: 'Technology',
    icon: 'material-symbols:devices',
    articles: [
      '5G Services Expand to More Cities',
      'Local Startups Attract Global Investors',
      'Digital Payment Usage Surges',
    ],
  },
  {
    id: 4,
    name: 'Sports',
    icon: 'material-symbols:sports-soccer',
    articles: [
      'National Football Team Qualifies',
      'Cricket League Announces Schedule',
      'Athletes Prepare for Asian Games',
    ],
  },
]
</script>

<style scoped>
.categories-section {
  position: relative;
  border-top: 1px solid rgba(229, 231, 235, 1);
  border-bottom: 1px solid rgba(229, 231, 235, 1);
}

.dark .categories-section {
  border-color: rgba(55, 65, 81, 1);
}
</style>
