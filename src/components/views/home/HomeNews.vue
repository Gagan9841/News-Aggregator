<template>
  <section
    class="bg-gray-50 dark:bg-gray-800 relative group py-16 overflow-hidden border-t border-gray-100 dark:border-gray-700"
  >
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-10">
        <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Latest News</h2>
        <Button variant="outline" size="sm" class="text-primary-600 dark:text-primary-400">
          View All
          <iconifyVue icon="material-symbols:arrow-forward-rounded" class="ml-2 h-4 w-4" />
        </Button>
      </div>

      <swiper
        :modules="[SwiperAutoplay, SwiperPagination, SwiperNavigation]"
        :slides-per-view="3"
        :space-between="30"
        :autoplay="{
          delay: 3000,
          disableOnInteraction: false,
        }"
        :pagination="{ clickable: true }"
        :navigation="true"
        :breakpoints="{
          '640': {
            slidesPerView: 2,
          },
          '1024': {
            slidesPerView: 3,
          },
        }"
        class="news-slider"
      >
        <swiper-slide v-for="article in news" :key="article.id">
          <article
            class="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden h-full flex flex-col"
          >
            <div class="relative aspect-video">
              <img :src="article.image" :alt="article.title" class="w-full h-full object-cover" />
              <span
                class="absolute top-3 right-3 bg-primary-600 text-white text-xs px-3 py-1.5 rounded-full font-medium"
              >
                {{ article.category }}
              </span>
            </div>

            <div class="p-6 flex-grow">
              <h3
                class="text-xl font-semibold text-gray-900 dark:text-white mb-3 line-clamp-2 leading-tight"
              >
                {{ article.title }}
              </h3>
              <p
                class="text-gray-700 dark:text-gray-300 text-base mb-4 line-clamp-3 leading-relaxed"
              >
                {{ article.description }}
              </p>

              <div
                class="flex items-center justify-between mt-auto pt-4 border-t border-gray-100 dark:border-gray-700"
              >
                <div class="flex items-center space-x-2">
                  <img
                    :src="article.source.logo"
                    :alt="article.source.name"
                    class="w-6 h-6 rounded-full"
                  />
                  <span class="text-sm text-gray-700 dark:text-gray-300">
                    {{ article.source.name }}
                  </span>
                </div>
                <span class="text-sm text-gray-700 dark:text-gray-300">
                  {{ article.publishedAt }}
                </span>
              </div>
            </div>
          </article>
        </swiper-slide>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Autoplay, Pagination, Navigation } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

const SwiperAutoplay = Autoplay
const SwiperPagination = Pagination
const SwiperNavigation = Navigation
const news = [
  {
    id: 1,
    title: 'Nepal Telecom Launches 5G Services in Major Cities',
    description:
      "Nepal Telecom has officially launched 5G services in Kathmandu, Pokhara, and other major cities, marking a significant milestone in the country's telecommunications infrastructure.",
    image:
      'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    category: 'Technology',
    publishedAt: '1 hour ago',
    source: {
      name: 'TechKhabar',
      logo: 'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    },
  },
  {
    id: 2,
    title: 'Nepal Stock Exchange Implements New Trading System',
    description:
      'NEPSE has successfully implemented a new automated trading system, promising faster and more secure transactions for investors.',
    image:
      'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    category: 'Business',
    publishedAt: '2 hours ago',
    source: {
      name: 'Business Nepal',
      logo: 'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    },
  },
  {
    id: 3,
    title: 'New Environmental Policies Announced for Tourism Sector',
    description:
      "The government has introduced new environmental policies aimed at promoting sustainable tourism practices in Nepal's major tourist destinations.",
    image:
      'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    category: 'Environment',
    publishedAt: '3 hours ago',
    source: {
      name: 'Nepal Times',
      logo: 'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    },
  },
  {
    id: 4,
    title: 'New Environmental Policies Announced for Tourism Sector',
    description:
      "The government has introduced new environmental policies aimed at promoting sustainable tourism practices in Nepal's major tourist destinations.",
    image:
      'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    category: 'Environment',
    publishedAt: '3 hours ago',
    source: {
      name: 'Nepal Times',
      logo: 'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    },
  },
  {
    id: 6,
    title: 'New Environmental Policies Announced for Tourism Sector',
    description:
      "The government has introduced new environmental policies aimed at promoting sustainable tourism practices in Nepal's major tourist destinations.",
    image:
      'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    category: 'Environment',
    publishedAt: '3 hours ago',
    source: {
      name: 'Nepal Times',
      logo: 'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    },
  },
  {
    id: 5,
    title: 'New Environmental Policies Announced for Tourism Sector',
    description:
      "The government has introduced new environmental policies aimed at promoting sustainable tourism practices in Nepal's major tourist destinations.",
    image:
      'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    category: 'Environment',
    publishedAt: '3 hours ago',
    source: {
      name: 'Nepal Times',
      logo: 'https://images.unsplash.com/photo-1638913662529-1d2f1eb5b526?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
    },
  },
]
</script>
<style scoped>
.news-slider {
  padding-bottom: 3rem;
}

:deep(.swiper-button-next),
:deep(.swiper-button-prev) {
  color: theme('colors.primary.600');
}

:deep(.swiper-pagination-bullet-active) {
  background-color: theme('colors.primary.600');
}

.dark :deep(.swiper-button-next),
.dark :deep(.swiper-button-prev) {
  color: theme('colors.primary.400');
}

.dark :deep(.swiper-pagination-bullet-active) {
  background-color: theme('colors.primary.400');
}
</style>
