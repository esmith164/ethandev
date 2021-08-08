<template>
  <div class="bg-grey dark:bg-dark-400 min-h-screen flex">
    <Nuxt />
    
  </div>
</template>
<script>
import Theme from '@/components/core/Theme';
export default {
  components: {
    Theme
  }
}
</script>
<style lang="scss">
* {
  @apply duration-300;
}
</style>