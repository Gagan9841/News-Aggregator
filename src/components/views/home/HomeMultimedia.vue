<template>
  <section class="bg-gray-50 dark:bg-gray-800 py-12">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-8">
        <div>
          <h2 class="text-2xl font-bold text-gray-900 dark:text-white">Multimedia</h2>
          <p class="mt-2 text-gray-600 dark:text-gray-300">Videos, photos, and infographics</p>
        </div>
        <div class="flex space-x-2">
          <Button
            v-for="tab in tabs"
            :key="tab.id"
            :variant="activeTab === tab.id ? 'default' : 'outline'"
            size="sm"
            @click="activeTab = tab.id"
          >
            <iconifyVue :icon="tab.icon" class="mr-2 h-4 w-4" />
            {{ tab.name }}
          </Button>
        </div>
      </div>

      <!-- Videos Tab -->
      <div
        v-if="activeTab === 'videos'"
        class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        <div
          v-for="video in videos"
          :key="video.id"
          class="group relative rounded-xl overflow-hidden shadow-md"
        >
          <div class="aspect-video relative">
            <img :src="video.thumbnail" :alt="video.title" class="w-full h-full object-cover" />
            <div
              class="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity"
            >
              <div
                class="w-16 h-16 rounded-full bg-primary-600 bg-opacity-90 flex items-center justify-center"
              >
                <iconifyVue icon="heroicons:play-solid" class="w-8 h-8 text-white" />
              </div>
            </div>
            <div
              class="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black to-transparent"
            >
              <span class="text-white text-sm">{{ video.duration }}</span>
            </div>
          </div>
          <div class="p-4 bg-white dark:bg-gray-900">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
              {{ video.title }}
            </h3>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ video.views }} views</span>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ video.publishedAt }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Photos Tab -->
      <div
        v-if="activeTab === 'photos'"
        class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
      >
        <div
          v-for="photo in photos"
          :key="photo.id"
          class="group relative rounded-lg overflow-hidden shadow-md"
          :class="photo.span"
        >
          <img
            :src="photo.image"
            :alt="photo.title"
            class="w-full h-full object-cover aspect-[4/3]"
          />
          <div
            class="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end"
          >
            <div class="p-4 w-full">
              <h3 class="text-white text-sm font-medium mb-1">{{ photo.title }}</h3>
              <p class="text-gray-200 text-xs">{{ photo.location }}</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Infographics Tab -->
      <div v-if="activeTab === 'infographics'" class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="infographic in infographics"
          :key="infographic.id"
          class="bg-white dark:bg-gray-900 rounded-xl overflow-hidden shadow-md"
        >
          <img :src="infographic.image" :alt="infographic.title" class="w-full h-64 object-cover" />
          <div class="p-5">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {{ infographic.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-400 text-sm mb-4">
              {{ infographic.description }}
            </p>
            <div class="flex items-center justify-between">
              <span class="text-sm text-gray-500 dark:text-gray-400">{{
                infographic.publishedAt
              }}</span>
              <Button variant="ghost" size="sm" class="text-primary-600 dark:text-primary-400">
                View Full
                <iconifyVue icon="heroicons:arrow-top-right-on-square" class="ml-1 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div class="mt-8 text-center">
        <Button variant="outline" class="text-primary-600 dark:text-primary-400">
          View All Multimedia
          <iconifyVue icon="heroicons:arrow-right" class="ml-2 w-4 h-4" />
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const tabs = [
  { id: 'videos', name: 'Videos', icon: 'heroicons:video-camera' },
  { id: 'photos', name: 'Photos', icon: 'heroicons:photo' },
  { id: 'infographics', name: 'Infographics', icon: 'heroicons:chart-bar' },
]

const activeTab = ref('videos')

const videos = [
  {
    id: 1,
    title: "Inside Nepal's Growing Tech Industry: Startups Changing the Landscape",
    thumbnail:
      'https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    duration: '8:24',
    views: '12K',
    publishedAt: '2 days ago',
  },
  {
    id: 2,
    title: 'Traditional Festivals of Nepal: A Cultural Journey',
    thumbnail:
      'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    duration: '12:51',
    views: '8.5K',
    publishedAt: '4 days ago',
  },
  {
    id: 3,
    title: "Nepal's Renewable Energy Revolution: Sustainable Solutions",
    thumbnail:
      'https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    duration: '6:18',
    views: '5.2K',
    publishedAt: '1 week ago',
  },
]

const photos = [
  {
    id: 1,
    title: 'Morning at Swayambhunath',
    location: 'Kathmandu',
    image:
      'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    span: 'row-span-1 col-span-1 md:row-span-2 md:col-span-2',
  },
  {
    id: 2,
    title: 'Himalayan Peaks',
    location: 'Everest Region',
    image:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    span: 'row-span-1 col-span-1',
  },
  {
    id: 3,
    title: 'Phewa Lake',
    location: 'Pokhara',
    image:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    span: 'row-span-1 col-span-1',
  },
  {
    id: 4,
    title: 'Durbar Square',
    location: 'Patan',
    image:
      'https://images.unsplash.com/photo-1605640840605-14ac1855827b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    span: 'row-span-1 col-span-1',
  },
  {
    id: 5,
    title: 'Rhododendron Forest',
    location: 'Langtang',
    image:
      'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    span: 'row-span-1 col-span-1',
  },
]

const infographics = [
  {
    id: 1,
    title: "Nepal's Economic Growth: 2018-2023",
    description:
      "A visual breakdown of Nepal's economic sectors and their growth patterns over the last five years.",
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    publishedAt: '1 week ago',
  },
  {
    id: 2,
    title: 'Tourism Impact on Local Communities',
    description:
      'Analysis of how tourism affects local economies, employment, and cultural preservation in Nepal.',
    image:
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    publishedAt: '2 weeks ago',
  },
]
</script>
