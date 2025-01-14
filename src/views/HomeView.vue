<template>
  <MainLayout>
    <HomeTrending />
    <HomeHeadline />
  </MainLayout>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'

onMounted(() => {
  console.log('Home page mounted')
})
</script>
