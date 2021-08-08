<template>
  <div class=" min-h-screen bg-grey dark:bg-dark-400">
    <Header />
    <Nuxt />
  </div>
</template>
<script>
import Header from '@/components/core/Header'
export default {
  components: { Header }
}
</script>
