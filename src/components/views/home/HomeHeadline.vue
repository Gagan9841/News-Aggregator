<template>
  <article
    class="relative group bg-white dark:bg-gray-900 my-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
    @mouseenter="isHovered = true"
    @mouseleave="isHovered = false"
  >
    <div class="p-6 pb-4">
      <div class="flex flex-wrap gap-2 mb-4">
        <Badge
          v-for="tag in newsData.tags"
          :key="tag"
          variant="secondary"
          class="bg-gray-100 cursor-pointer dark:bg-gray-800 text-gray-600 hover:text-white dark:text-gray-300 hover:bg-primary-600 dark:hover:bg-primary-500 transition-colors"
        >
          {{ tag }}
        </Badge>
      </div>

      <h2
        class="text-4xl cursor-pointer font-bold leading-tight mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
      >
        {{ newsData.title }}
      </h2>

      <div class="flex items-center gap-4 text-sm text-gray-500 mb-2">
        <a
          :href="newsData.sourceUrl"
          class="flex items-center gap-1.5 hover:text-primary-600 transition-colors"
        >
          <iconifyVue icon="line-md:external-link" class="h-4 w-4" />
          {{ newsData.source }}
        </a>

        <span class="flex items-center gap-1.5">
          <iconifyVue icon="iconoir:clock" class="h-4 w-4" />
          {{ newsData.publishedAt }}
        </span>
      </div>
    </div>

    <div class="relative aspect-video overflow-hidden">
      <div class="absolute top-4 right-4 z-20">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <div
                class="flex items-center gap-2 bg-black/70 backdrop-blur-sm rounded-full px-3 py-1.5"
              >
                <div
                  :class="[
                    'w-2 h-2 rounded-full animate-pulse',
                    getCirculationColor(newsData.circulation),
                  ]"
                />
                <span class="text-white text-xs font-medium">
                  {{ getCirculationStrength(newsData.circulation) }}
                </span>
              </div>
            </TooltipTrigger>
            <TooltipContent>
              <p class="text-sm">
                {{ newsData.circulation }}% circulation rate<br />
                Covered by {{ newsData.relatedSources }} news sources
              </p>
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </div>

      <img
        :src="newsData.image"
        :alt="newsData.title"
        :class="[
          'w-full h-full object-cover transform transition-transform duration-700',
          { 'scale-105': isHovered, 'scale-100': !isHovered },
        ]"
      />
    </div>

    <div class="p-6 pt-4">
      <p class="text-gray-600 dark:text-gray-400 text-lg mb-4 line-clamp-3">
        {{ newsData.description }}
      </p>

      <div class="flex items-center justify-between pt-2 border-t dark:border-gray-800">
        <div class="flex items-center gap-2">
          <iconifyVue
            icon="material-symbols:trending-up"
            class="h-4 w-4 text-primary-600"
            :class="newsData.circulation >= 80 ? 'animate-bounce' : ''"
          />
          <span class="text-sm text-gray-600 dark:text-gray-400">
            {{ newsData.relatedSources }} sources covering this story
          </span>
        </div>

        <Button
          variant="ghost"
          size="sm"
          class="text-gray-500 hover:text-primary-600"
          @click="shareNews"
        >
          <iconifyVue icon="material-symbols:share" class="h-4 w-4 mr-2" />
          Share
        </Button>
      </div>
      <div
        class="flex items-center gap-2 my-2 justify-start pt-2 w-96 flex-wrap border-t dark:border-gray-800"
      >
        <a
          v-for="(source, index) in newsData.relatedSourceLogos"
          :key="index"
          :href="source.url"
          class="w-8 h-8 rounded-full overflow-hidden bg-gray-100 dark:bg-gray-800 flex items-center justify-center hover:scale-110 transition-transform duration-200"
        >
          <img :src="source.logo" :alt="source.name" class="w-6 h-6 object-cover rounded-full" />
        </a>
      </div>
    </div>
  </article>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const isHovered = ref(false)

const newsData = {
  title: "Nepal's Digital Evolution: Tech Startups Reshape Mountain Nation's Future",
  description:
    "In a groundbreaking development, Nepal's tech ecosystem is witnessing unprecedented growth as local startups leverage blockchain and AI to solve unique geographical challenges. This transformation is particularly notable in remote regions where innovative solutions are bridging critical infrastructure gaps.",
  image:
    'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  publishedAt: '2 hours ago',
  source: 'The Kathmandu Post',
  sourceUrl: '#',
  circulation: 85,
  relatedSources: 12,
  tags: ['Technology', 'Startup', 'Innovation'],
  relatedSourceLogos: [
    {
      name: 'OnlineKhabar',
      logo: 'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      url: 'https://www.onlinekhabar.com',
    },
    {
      name: 'The Kathmandu Post',
      logo: 'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      url: 'https://kathmandupost.com',
    },
    {
      name: 'Setopati',
      logo: 'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      url: 'https://www.setopati.com',
    },
    {
      name: 'Nagarik News',
      logo: 'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      url: 'https://nagariknews.nagariknetwork.com',
    },
    {
      name: 'Ratopati',
      logo: 'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
      url: 'https://ratopati.com',
    },
  ],
}

const getCirculationStrength = (percentage: number): string => {
  if (percentage >= 80) return 'Viral'
  if (percentage >= 60) return 'Trending'
  if (percentage >= 40) return 'Rising'
  return 'New'
}

const getCirculationColor = (percentage: number): string => {
  if (percentage >= 80) return 'bg-purple-500'
  if (percentage >= 60) return 'bg-blue-500'
  if (percentage >= 40) return 'bg-green-500'
  return 'bg-gray-500'
}

const shareNews = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: newsData.title,
        text: newsData.description,
        url: window.location.href,
      })
    } catch (error) {
      console.error('Error sharing:', error)
    }
  } else {
    // Fallback: Copy link to clipboard
    try {
      await navigator.clipboard.writeText(window.location.href)
      alert('Link copied to clipboard!')
    } catch (error) {
      console.error('Error copying link:', error)
    }
  }
}
</script>
