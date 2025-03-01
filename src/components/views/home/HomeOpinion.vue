<template>
  <section class="bg-white dark:bg-gray-900 py-16 border-t border-gray-100 dark:border-gray-700">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between mb-10">
        <div>
          <h2 class="text-3xl font-bold text-gray-900 dark:text-white">Opinion & Analysis</h2>
          <p class="mt-2 text-lg text-gray-700 dark:text-gray-300">
            Expert perspectives on current affairs
          </p>
        </div>
        <Button
          variant="outline"
          size="sm"
          class="text-primary-600 dark:text-primary-400 hover:bg-primary-50 dark:hover:bg-gray-700 focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-800 transition-all"
        >
          All Opinions
          <iconifyVue icon="heroicons:arrow-right" class="ml-2 w-4 h-4" />
        </Button>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <!-- Featured Opinion -->
        <div class="lg:col-span-2 bg-gray-50 dark:bg-gray-800 rounded-xl overflow-hidden">
          <div class="flex flex-col md:flex-row">
            <div class="md:w-1/2">
              <img
                :src="featuredOpinion.image"
                :alt="featuredOpinion.title"
                class="w-full h-full object-cover"
              />
            </div>
            <div class="md:w-1/2 p-6 flex flex-col justify-between">
              <div>
                <div class="flex items-center mb-4">
                  <Badge
                    variant="outline"
                    class="bg-primary-50 text-primary-700 dark:bg-primary-900 dark:text-primary-300 border-primary-200 dark:border-primary-800"
                  >
                    Featured
                  </Badge>
                </div>
                <h3 class="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {{ featuredOpinion.title }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                  {{ featuredOpinion.excerpt }}
                </p>
              </div>
              <div class="flex items-center">
                <img
                  :src="featuredOpinion.author.avatar"
                  :alt="featuredOpinion.author.name"
                  class="w-10 h-10 rounded-full mr-3"
                />
                <div>
                  <p class="text-sm font-medium text-gray-900 dark:text-white">
                    {{ featuredOpinion.author.name }}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ featuredOpinion.author.title }}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Other Opinions -->
        <div class="space-y-6">
          <article
            v-for="opinion in otherOpinions"
            :key="opinion.id"
            class="bg-gray-50 dark:bg-gray-800 rounded-lg p-5 hover:shadow-md transition-shadow duration-300"
          >
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              {{ opinion.title }}
            </h3>
            <p class="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
              {{ opinion.excerpt }}
            </p>
            <div class="flex items-center justify-between">
              <div class="flex items-center">
                <img
                  :src="opinion.author.avatar"
                  :alt="opinion.author.name"
                  class="w-8 h-8 rounded-full mr-2"
                />
                <div>
                  <p class="text-xs font-medium text-gray-900 dark:text-white">
                    {{ opinion.author.name }}
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    {{ opinion.publishedAt }}
                  </p>
                </div>
              </div>
              <Button variant="ghost" size="sm" class="text-primary-600 dark:text-primary-400">
                Read
              </Button>
            </div>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const featuredOpinion = {
  id: 1,
  title: "Nepal's Path to Digital Economy: Challenges and Opportunities",
  excerpt:
    'As Nepal embraces digital transformation, the country faces unique challenges in infrastructure, policy frameworks, and digital literacy. However, the opportunities for economic growth, social inclusion, and governance improvements are substantial if approached strategically.',
  image:
    'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80',
  author: {
    name: 'Dr. Rajesh Sharma',
    title: 'Economic Analyst & Former Advisor to Nepal Rastra Bank',
    avatar: 'https://randomuser.me/api/portraits/men/32.jpg',
  },
}

const otherOpinions = [
  {
    id: 2,
    title: 'Climate Change and Himalayan Ecosystems: Time for Action',
    excerpt:
      "The impact of climate change on Nepal's fragile Himalayan ecosystems requires immediate policy interventions and community engagement.",
    author: {
      name: 'Dr. Sabita Thapa',
      title: 'Environmental Scientist',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg',
    },
    publishedAt: 'Yesterday',
  },
  {
    id: 3,
    title: 'Federalism in Nepal: Five Years Later',
    excerpt:
      "An assessment of Nepal's federal structure five years after implementation reveals both successes and challenges in governance.",
    author: {
      name: 'Prakash Acharya',
      title: 'Political Analyst',
      avatar: 'https://randomuser.me/api/portraits/men/67.jpg',
    },
    publishedAt: '2 days ago',
  },
  {
    id: 4,
    title: "Education Reform: The Key to Nepal's Future",
    excerpt:
      "Modernizing Nepal's education system is essential for preparing the next generation for global competition and national development.",
    author: {
      name: 'Saraswati Poudel',
      title: 'Education Policy Expert',
      avatar: 'https://randomuser.me/api/portraits/women/33.jpg',
    },
    publishedAt: '3 days ago',
  },
]
</script>
