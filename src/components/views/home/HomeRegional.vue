<template>
  <section class="bg-gray-50 dark:bg-gray-800 py-8 border-t border-gray-100 dark:border-gray-700">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:items-center justify-between mb-10">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Regional News</h2>
          <p class="mt-2 text-lg text-gray-700 dark:text-gray-300">
            Latest updates from across Nepal
          </p>
        </div>
        <div class="mt-4 md:mt-0 flex space-x-2">
          <Button
            v-for="region in regions"
            :key="region.id"
            :variant="activeRegion === region.id ? 'default' : 'outline'"
            size="sm"
            @click="activeRegion = region.id"
            class="text-sm"
          >
            {{ region.name }}
          </Button>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="article in filteredArticles"
          :key="article.id"
          class="bg-white dark:bg-gray-900 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden flex flex-col"
        >
          <div class="relative h-48">
            <img :src="article.image" :alt="article.title" class="w-full h-full object-cover" />
            <div
              class="absolute top-0 left-0 bg-primary-600 text-white px-3 py-1 text-xs font-medium"
            >
              {{ getRegionName(article.regionId) }}
            </div>
          </div>
          <div class="p-5 flex-grow">
            <h3
              class="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 leading-tight"
            >
              {{ article.title }}
            </h3>
            <p class="text-gray-700 dark:text-gray-300 text-base mb-4 line-clamp-3 leading-relaxed">
              {{ article.description }}
            </p>
          </div>
          <div
            class="px-5 pb-5 flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-4"
          >
            <span class="text-sm text-gray-700 dark:text-gray-300 flex items-center">
              <iconifyVue icon="heroicons:clock" class="w-4 h-4 mr-1" />
              {{ article.publishedAt }}
            </span>
            <Button
              variant="ghost"
              size="sm"
              class="text-primary-600 dark:text-primary-400 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              Read More
            </Button>
          </div>
        </article>
      </div>

      <div class="mt-8 text-center">
        <Button variant="outline" class="text-primary-600 dark:text-primary-400">
          View All Regional News
          <iconifyVue icon="heroicons:arrow-right" class="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const regions = [
  { id: 'all', name: 'All Regions' },
  { id: 'bagmati', name: 'Bagmati' },
  { id: 'gandaki', name: 'Gandaki' },
  { id: 'karnali', name: 'Karnali' },
  { id: 'lumbini', name: 'Lumbini' },
]

const activeRegion = ref('all')

const articles = [
  {
    id: 1,
    regionId: 'bagmati',
    title: 'Kathmandu Metropolitan City Launches Smart Waste Management System',
    description:
      'The Kathmandu Metropolitan City has implemented a new smart waste management system using IoT sensors to optimize collection routes and reduce environmental impact.',
    image:
      'https://images.unsplash.com/photo-1558799401-7c3f139af685?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    publishedAt: '3 hours ago',
  },
  {
    id: 2,
    regionId: 'gandaki',
    title: 'Pokhara International Airport Sees Record Tourist Arrivals',
    description:
      'The newly operational Pokhara International Airport has reported a significant increase in tourist arrivals, boosting the local economy and tourism sector.',
    image:
      'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    publishedAt: '5 hours ago',
  },
  {
    id: 3,
    regionId: 'lumbini',
    title: 'Lumbini Development Trust Announces New Heritage Conservation Project',
    description:
      'A new project aimed at preserving the cultural and historical heritage of Lumbini has been announced, with international funding and expertise.',
    image:
      'https://images.unsplash.com/photo-1588970698009-f8ea62f1857e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    publishedAt: '7 hours ago',
  },
  {
    id: 4,
    regionId: 'karnali',
    title: 'Karnali Province Launches Rural Electrification Initiative',
    description:
      'The government of Karnali Province has launched an ambitious initiative to bring electricity to remote villages using renewable energy sources.',
    image:
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    publishedAt: '9 hours ago',
  },
  {
    id: 5,
    regionId: 'bagmati',
    title: 'Bhaktapur Durbar Square Restoration Completed',
    description:
      'The restoration of historical monuments in Bhaktapur Durbar Square, damaged during the 2015 earthquake, has been successfully completed.',
    image:
      'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    publishedAt: '11 hours ago',
  },
  {
    id: 6,
    regionId: 'gandaki',
    title: 'Annapurna Conservation Area Reports Increase in Wildlife Population',
    description:
      'Recent surveys in the Annapurna Conservation Area have shown a significant increase in wildlife populations, including endangered species.',
    image:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    publishedAt: '1 day ago',
  },
]

const filteredArticles = computed(() => {
  if (activeRegion.value === 'all') {
    return articles
  }
  return articles.filter((article) => article.regionId === activeRegion.value)
})

const getRegionName = (regionId: string) => {
  const region = regions.find((r) => r.id === regionId)
  return region ? region.name : 'Unknown'
}
</script>
