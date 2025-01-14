<template>
  <div class="bg-white dark:bg-gray-900 border-b mb-4 border-gray-200 dark:border-gray-700">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
      <div class="flex items-center space-x-4">
        <h3 class="text-lg font-semibold text-gray-900 dark:text-white whitespace-nowrap">
          Trending Topics:
        </h3>

        <div class="flex items-center space-x-4 overflow-x-auto scrollbar-hide">
          <a
            v-for="topic in trendingTopics"
            :key="topic.id"
            :href="topic.link"
            class="flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
          >
            <img :src="topic.image" :alt="topic.title" class="w-8 h-8 rounded-full object-cover" />
            <span class="text-sm font-medium text-gray-700 dark:text-gray-300">
              {{ topic.title }}
            </span>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const trendingTopics = [
  {
    id: 1,
    title: 'रवि लामिछाने',
    image: 'https://www.onlinekhabar.com/wp-content/uploads/2025/01/Rabi-lamichhane-1-270x170.jpg',
    link: 'https://www.onlinekhabar.com/trend/%e0%a4%b0%e0%a4%b5%e0%a4%bf-%e0%a4%b2%e0%a4%be%e0%a4%ae%e0%a4%bf%e0%a4%9b%e0%a4%be%e0%a4%a8%e0%a5%87',
  },
  {
    id: 2,
    title: 'चुङ्बा शेर्पा',
    image: 'https://www.onlinekhabar.com/wp-content/uploads/2025/01/Chungba-sherpa-270x170.jpg',
    link: 'https://www.onlinekhabar.com/trend/chungba-sherpa',
  },
  {
    id: 3,
    title: 'त्रिभुवन विश्वविद्यालय',
    image:
      'https://www.onlinekhabar.com/wp-content/uploads/2023/09/Tribhuwan-UNiversity-TU-Kirtipur-Cover-270x170.jpg',
    link: 'https://www.onlinekhabar.com/trend/%e0%a4%a4%e0%a5%8d%e0%a4%b0%e0%a4%bf%e0%a4%ad%e0%a5%81%e0%a4%b5%e0%a4%a8-%e0%a4%b5%e0%a4%bf%e0%a4%b6%e0%a5%8d%e0%a4%b5%e0%a4%b5%e0%a4%bf%e0%a4%a6%e0%a5%8d%e0%a4%af%e0%a4%be%e0%a4%b2%e0%a4%af',
  },
  {
    id: 4,
    title: 'राष्ट्रपति',
    image:
      'https://www.onlinekhabar.com/wp-content/uploads/2025/01/Ramchandra-paudel-gyang-270x170.jpg',
    link: 'https://www.onlinekhabar.com/trend/%e0%a4%b0%e0%a4%be%e0%a4%b7%e0%a5%8d%e0%a4%9f%e0%a5%8d%e0%a4%b0%e0%a4%aa%e0%a4%a4%e0%a4%bf',
  },
  {
    id: 5,
    title: 'ब्याजदर',
    image: 'https://www.onlinekhabar.com/wp-content/uploads/2024/08/bank-logos-270x170.png',
    link: 'https://www.onlinekhabar.com/trend/%e0%a4%ac%e0%a5%8d%e0%a4%af%e0%a4%be%e0%a4%9c%e0%a4%a6%e0%a4%b0',
  },
  {
    id: 6,
    title: 'चिकित्सक',
    image: 'https://www.onlinekhabar.com/wp-content/uploads/2025/01/IMG_1014-270x170.jpg',
    link: 'https://www.onlinekhabar.com/trend/%e0%a4%9a%e0%a4%bf%e0%a4%95%e0%a4%bf%e0%a4%a4%e0%a5%8d%e0%a4%b8%e0%a4%95',
  },
]
</script>
