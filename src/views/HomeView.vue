<template>
  <MainLayout>
    <HomeTrending />
    <HomeHeadline />
    <home-news />
    <HomeCategories />
    <HomeRegional />
    <HomeOpinion />
    <HomeMultimedia />
  </MainLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Home page mounted')
})
</script>
